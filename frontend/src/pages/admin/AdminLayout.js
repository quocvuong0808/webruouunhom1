import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./AdminLayout.css";

const menu = [
  { path: "/admin", label: "Dashboard", icon: "📊", exact: true },
  { path: "/admin/products", label: "Quản lý sản phẩm", icon: "📦" },
  { path: "/admin/orders", label: "Quản lý đơn hàng", icon: "📝" },
  { path: "/admin/customers", label: "Quản lý khách hàng", icon: "👤" },
];

const AdminLayout = () => {
  const location = useLocation();

  // Hàm kiểm tra menu item có active không
  const isActive = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2 className="admin-logo">🎯 Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {menu.map((item) => (
              <li key={item.path} className={isActive(item) ? "active" : ""}>
                <Link to={item.path}>
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">👨‍💼</div>
            <div className="user-details">
              <p className="user-name">Admin User</p>
              <p className="user-role">Quản trị viên</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="admin-main">
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;