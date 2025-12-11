import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Về Chúng Tôi</h1>
        
        <section className="about-section">
          <h2>Câu Chuyện Của Chúng Tôi</h2>
          <p>
            Chào mừng bạn đến với cửa hàng rượu vang của chúng tôi. Với hơn 10 năm kinh nghiệm 
            trong ngành nhập khẩu và phân phối rượu vang cao cấp, chúng tôi tự hào mang đến cho 
            khách hàng những sản phẩm chất lượng nhất từ các vùng nho nổi tiếng trên thế giới.
          </p>
        </section>

        <section className="about-section">
          <h2>Sứ Mệnh</h2>
          <p>
            Sứ mệnh của chúng tôi là lan toa văn hóa thưởng thức rượu vang tinh tế, đồng thời 
            cung cấp những sản phẩm chính hãng với giá cả hợp lý. Chúng tôi cam kết mang đến 
            trải nghiệm mua sắm tuyệt vời nhất cho mọi khách hàng.
          </p>
        </section>

        <section className="about-section">
          <h2>Giá Trị Cốt Lõi</h2>
          <ul className="values-list">
            <li><strong>Chất Lượng:</strong> Tất cả sản phẩm đều được chọn lọc kỹ càng và nhập khẩu chính hãng</li>
            <li><strong>Uy Tín:</strong> Cam kết 100% hàng chính hãng, nguồn gốc rõ ràng</li>
            <li><strong>Tận Tâm:</strong> Đội ngũ tư vấn chuyên nghiệp, nhiệt tình hỗ trợ khách hàng</li>
            <li><strong>Đa Dạng:</strong> Bộ sưu tập phong phú từ nhiều quốc gia và phong cách</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Bộ Sưu Tập</h2>
          <p>
            Chúng tôi cung cấp đa dạng các loại rượu vang từ:
          </p>
          <ul className="collection-list">
            <li>Pháp - Bordeaux, Burgundy, Champagne</li>
            <li>Ý - Tuscany, Piedmont</li>
            <li>Tây Ban Nha - Rioja, Ribera del Duero</li>
            <li>Úc - Barossa Valley, Margaret River</li>
            <li>Chile - Maipo Valley, Colchagua Valley</li>
            <li>Mỹ - Napa Valley, Sonoma</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Cam Kết Của Chúng Tôi</h2>
          <p>
            Chúng tôi cam kết bảo quản rượu trong điều kiện tối ưu, đảm bảo chất lượng sản phẩm 
            khi đến tay khách hàng. Mỗi chai rượu đều có tem chống hàng giả và giấy chứng nhận 
            nguồn gốc xuất xứ rõ ràng.
          </p>
        </section>

        <section className="contact-section">
          <h2>Liên Hệ</h2>
          <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
          <p>Điện thoại: 0123 456 789</p>
          <p>Email: contact@wineshop.vn</p>
          <p>Giờ làm việc: 9:00 - 21:00 (Thứ 2 - Chủ Nhật)</p>
        </section>
      </div>
    </div>
  );
};

export default About;