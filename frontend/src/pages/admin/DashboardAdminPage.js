


import React, { useEffect, useState, useRef } from "react";
import { getOrderStats, getRecentOrders } from '../../services/orderService';
import { getProductStats } from '../../services/productService';
import { getAllCustomersStats } from '../../services/customerService';
import { Chart, registerables } from 'chart.js';
import './DashboardAdminPage.css';

Chart.register(...registerables);

const statusColors = {
  pending: '#f59e0b',
  confirmed: '#3b82f6',
  processing: '#8b5cf6',
  shipped: '#06b6d4',
  delivered: '#10b981',
  cancelled: '#ef4444',
  refunded: '#6b7280'
};

const DashboardAdminPage = () => {
  const stagesChartRef = useRef(null);
  const expiringChartRef = useRef(null);
  const [orderStats, setOrderStats] = useState(null);
  const [productStats, setProductStats] = useState(null);
  const [customerStats, setCustomerStats] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const [orders, products, customers, recent] = await Promise.all([
          getOrderStats(),
          getProductStats(),
          getAllCustomersStats(),
          getRecentOrders(5)
        ]);
        setOrderStats(orders);
        setProductStats(products);
        setCustomerStats(customers);
        setRecentOrders(recent);
      } catch (err) {
        // eslint-disable-next-line
        console.error('Lỗi lấy dữ liệu dashboard:', err);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);


  useEffect(() => {
    // Bar chart: Contract by Stages
    if (!orderStats || !orderStats.stages) return;
    const canvas = document.getElementById('stagesChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (stagesChartRef.current && typeof stagesChartRef.current.destroy === 'function') {
      stagesChartRef.current.destroy();
    }
    stagesChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: orderStats.stages.map(s => s.label),
        datasets: [{
          label: 'Đơn hàng',
          data: orderStats.stages.map(s => s.count),
          backgroundColor: orderStats.stages.map(s => statusColors[s.value] || '#3b82f6'),
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
      }
    });

    // Pie chart: Contract Expiring
    if (!orderStats.expiring) return;
    const canvas2 = document.getElementById('expiringChart');
    if (!canvas2) return;
    const ctx2 = canvas2.getContext('2d');
    if (expiringChartRef.current && typeof expiringChartRef.current.destroy === 'function') {
      expiringChartRef.current.destroy();
    }
    expiringChartRef.current = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: orderStats.expiring.map(e => e.label),
        datasets: [{
          data: orderStats.expiring.map(e => e.count),
          backgroundColor: ['#f59e0b', '#3b82f6', '#ef4444'],
        }]
      },
      options: {
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }, [orderStats]);

  return (
    <div className="dashboard-admin-page">
      <h2>Dashboard</h2>
      <div className="dashboard-cards-row">
        <div className="dashboard-card">
          <div className="dashboard-card-label" style={{ color: '#10b981' }}>● Accepted</div>
          <div className="dashboard-card-value">{loading ? '...' : orderStats?.accepted ?? 0}</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-label" style={{ color: '#f59e0b' }}>● In Contract</div>
          <div className="dashboard-card-value">{loading ? '...' : orderStats?.inContract ?? 0}</div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-label" style={{ color: '#3b82f6' }}>● In Approval</div>
          <div className="dashboard-card-value">{loading ? '...' : orderStats?.inApproval ?? 0}</div>
        </div>
      </div>
      <div className="dashboard-charts-row">
        <div className="dashboard-chart-box">
          <div className="dashboard-chart-title">Contract by Stages</div>
          <canvas id="stagesChart" width="320" height="180" style={{ maxWidth: '100%' }}></canvas>
        </div>
        <div className="dashboard-chart-box">
          <div className="dashboard-chart-title">Contract Expiring</div>
          <canvas id="expiringChart" width="220" height="180" style={{ maxWidth: '100%' }}></canvas>
        </div>
        <div className="dashboard-side-box">
          <div className="dashboard-side-title">Contract by Type</div>
          <ul className="dashboard-type-list">
            {(orderStats?.types || []).map(type => (
              <li key={type.label} className="dashboard-type-item">
                <span className="dashboard-type-label">{type.label}</span>
                <span className="dashboard-type-bar" style={{ width: `${type.percent}%`, background: '#3b82f6' }}></span>
                <span className="dashboard-type-percent">{type.percent}%</span>
              </li>
            ))}
          </ul>
          <div className="dashboard-side-title" style={{ marginTop: 24 }}>Average Cycle Time</div>
          <div className="dashboard-cycle-row">
            {(orderStats?.cycleTimes || []).map(cycle => (
              <div key={cycle.label} className="dashboard-cycle-card">
                <div className="dashboard-cycle-value">{cycle.value} <span className="dashboard-cycle-unit">days</span></div>
                <div className="dashboard-cycle-label">{cycle.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dashboard-table-section">
        <div className="dashboard-table-title">My Contracts</div>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Serial #</th>
              <th>Name</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4}>Loading...</td></tr>
            ) : (
              recentOrders && recentOrders.length > 0 ? recentOrders.map(order => (
                <tr key={order.order_id}>
                  <td>CNTR{String(order.order_id).padStart(6, '0')}</td>
                  <td>{order.customer_name || order.receiver_name}</td>
                  <td>{order.total_amount?.toLocaleString('vi-VN')}₫</td>
                  <td>
                    <span className="dashboard-status-badge" style={{ background: statusColors[order.status] || '#6b7280' }}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              )) : <tr><td colSpan={4}>Không có đơn hàng nào.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 32, textAlign: 'center', color: '#9ca3af', fontSize: 15 }}>
        <span>© {new Date().getFullYear()} ReadyFruits Admin Dashboard</span>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
