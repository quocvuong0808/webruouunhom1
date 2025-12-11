import React from 'react';
import './ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="shipping-container">
      <div className="shipping-content">
        <h1 className="shipping-title">Chính Sách Vận Chuyển</h1>
        <p className="shipping-intro">
          Chúng tôi cam kết giao hàng nhanh chóng, an toàn và đảm bảo chất lượng sản phẩm 
          đến tay khách hàng trong tình trạng tốt nhất.
        </p>

        <section className="policy-section">
          <h2>1. Khu Vực Giao Hàng</h2>
          <div className="policy-content">
            <p>Chúng tôi giao hàng trên toàn quốc:</p>
            <ul>
              <li><strong>Nội thành TP.HCM:</strong> Quận 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, Bình Thạnh, Phú Nhuận, Tân Bình, Tân Phú, Gò Vấp</li>
              <li><strong>Ngoại thành TP.HCM:</strong> Quận 9, 12, Thủ Đức, Bình Tân, Bình Chánh, Hóc Môn, Nhà Bè, Cần Giờ</li>
              <li><strong>Các tỉnh thành khác:</strong> Toàn bộ 63 tỉnh thành trên cả nước</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>2. Thời Gian Giao Hàng</h2>
          <div className="policy-content">
            <table className="shipping-table">
              <thead>
                <tr>
                  <th>Khu vực</th>
                  <th>Thời gian giao hàng</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nội thành TP.HCM</td>
                  <td>2-4 giờ</td>
                  <td>Giao hàng nhanh trong ngày</td>
                </tr>
                <tr>
                  <td>Ngoại thành TP.HCM</td>
                  <td>4-8 giờ</td>
                  <td>Tùy khu vực cụ thể</td>
                </tr>
                <tr>
                  <td>Hà Nội, Đà Nẵng, Cần Thơ</td>
                  <td>1-2 ngày</td>
                  <td>Thành phố lớn</td>
                </tr>
                <tr>
                  <td>Các tỉnh thành khác</td>
                  <td>2-4 ngày</td>
                  <td>Tùy khoảng cách địa lý</td>
                </tr>
                <tr>
                  <td>Vùng sâu, vùng xa</td>
                  <td>4-7 ngày</td>
                  <td>Miền núi, hải đảo</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              <strong>Lưu ý:</strong> Thời gian giao hàng có thể chậm hơn trong các dịp lễ, Tết 
              hoặc do điều kiện thời tiết, giao thông bất khả kháng.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>3. Phí Vận Chuyển</h2>
          <div className="policy-content">
            <div className="fee-card">
              <h3>🚚 Miễn Phí Vận Chuyển</h3>
              <p>Đơn hàng từ <strong>2.000.000đ</strong> trở lên trong nội thành TP.HCM</p>
            </div>
            
            <h4>Phí vận chuyển theo khu vực:</h4>
            <ul>
              <li><strong>Nội thành TP.HCM:</strong> 50.000đ (đơn hàng dưới 2 triệu)</li>
              <li><strong>Ngoại thành TP.HCM:</strong> 50.000đ - 80.000đ</li>
              <li><strong>Các tỉnh miền Nam:</strong> 80.000đ - 120.000đ</li>
              <li><strong>Các tỉnh miền Trung:</strong> 100.000đ - 150.000đ</li>
              <li><strong>Các tỉnh miền Bắc:</strong> 120.000đ - 180.000đ</li>
              <li><strong>Vùng sâu, vùng xa:</strong> Tính theo thực tế</li>
            </ul>
            <p className="note">
              Phí vận chuyển được tính tự động khi bạn nhập địa chỉ giao hàng tại trang thanh toán.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>4. Phương Thức Giao Hàng</h2>
          <div className="policy-content">
            <div className="method-grid">
              <div className="method-card">
                <h4>🚗 Giao Hàng Nội Bộ</h4>
                <p>Đội xe chuyên dụng của cửa hàng giao hàng trong nội thành TP.HCM</p>
              </div>
              <div className="method-card">
                <h4>📦 Đối Tác Vận Chuyển</h4>
                <p>Hợp tác với GHN, Giao Hàng Tiết Kiệm, VNPost cho các tỉnh thành</p>
              </div>
              <div className="method-card">
                <h4>✈️ Giao Hàng Nhanh</h4>
                <p>Dịch vụ giao hàng hỏa tốc trong vòng 2 giờ (phụ thu thêm)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>5. Quy Trình Đóng Gói</h2>
          <div className="policy-content">
            <ul>
              <li>Tất cả sản phẩm được đóng gói cẩn thận với xốp bọc khí, giấy báo</li>
              <li>Sử dụng thùng carton chuyên dụng có khả năng chống va đập</li>
              <li>Dán tem "Dễ vỡ - Cẩn thận" trên mọi kiện hàng</li>
              <li>Đối với đơn hàng lớn hoặc rượu cao cấp: đóng thùng gỗ riêng biệt</li>
              <li>Kèm theo hóa đơn, phiếu bảo hành và hướng dẫn bảo quản</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>6. Kiểm Tra Hàng Khi Nhận</h2>
          <div className="policy-content">
            <p>Khách hàng có quyền kiểm tra hàng trước khi thanh toán:</p>
            <ul>
              <li>Kiểm tra tình trạng bên ngoài thùng hàng (nguyên vẹn, không móp méo)</li>
              <li>Kiểm tra số lượng sản phẩm có khớp với đơn hàng</li>
              <li>Kiểm tra tình trạng chai (không bể vỡ, rò rỉ, tem nhãn nguyên vẹn)</li>
              <li>Từ chối nhận hàng nếu phát hiện bất thường</li>
            </ul>
            <p className="warning">
              <strong>Quan trọng:</strong> Vui lòng quay video khi mở hàng để làm bằng chứng 
              trong trường hợp cần giải quyết khiếu nại.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>7. Trường Hợp Đặc Biệt</h2>
          <div className="policy-content">
            <h4>Không thể liên lạc với khách hàng:</h4>
            <p>
              Nếu shipper không liên lạc được với khách hàng sau 3 lần gọi, đơn hàng sẽ được 
              hoàn trả về kho. Khách hàng cần liên hệ lại để sắp xếp giao hàng lần 2 
              (có thể phát sinh phí vận chuyển bổ sung).
            </p>

            <h4>Địa chỉ sai hoặc không đầy đủ:</h4>
            <p>
              Khách hàng vui lòng cung cấp địa chỉ chính xác, đầy đủ. Nếu địa chỉ sai dẫn đến 
              không giao được hàng, khách hàng sẽ chịu phí vận chuyển phát sinh.
            </p>

            <h4>Thay đổi địa chỉ giao hàng:</h4>
            <p>
              Có thể thay đổi địa chỉ trong vòng 2 giờ sau khi đặt hàng. Sau thời gian này, 
              vui lòng liên hệ hotline để được hỗ trợ (có thể phát sinh thêm chi phí).
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>8. Theo Dõi Đơn Hàng</h2>
          <div className="policy-content">
            <p>Khách hàng có thể theo dõi tình trạng đơn hàng qua:</p>
            <ul>
              <li>Tài khoản cá nhân trên website</li>
              <li>Email xác nhận đơn hàng có mã vận đơn</li>
              <li>Hotline: 0123 456 789</li>
              <li>Fanpage Facebook hoặc Zalo OA của cửa hàng</li>
            </ul>
            <p>
              Chúng tôi sẽ thông báo qua SMS/email khi đơn hàng được xác nhận, đang giao 
              và đã giao thành công.
            </p>
          </div>
        </section>

        <div className="contact-box">
          <h3>Cần Hỗ Trợ Về Vận Chuyển?</h3>
          <p>Liên hệ ngay với chúng tôi để được giải đáp mọi thắc mắc:</p>
          <div className="contact-details">
            <p>📞 <strong>Hotline:</strong> 0123 456 789</p>
            <p>✉️ <strong>Email:</strong> shipping@wineshop.vn</p>
            <p>🕒 <strong>Giờ làm việc:</strong> 9:00 - 21:00 (Thứ 2 - Chủ Nhật)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;