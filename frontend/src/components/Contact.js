import React from 'react';
 // Giả sử bạn có file CSS tương ứng

const Contact = () => {
    // Lưu ý: Form này chỉ là UI, bạn cần thêm logic xử lý form (useState, handleSubmit, API call)
    // nếu muốn gửi dữ liệu đi.

    return (
        <div className="contact-container">
            <h1>Liên Hệ Với Chúng Tôi</h1>
            <p className="contact-intro">
                Chúng tôi luôn sẵn lòng lắng nghe ý kiến và hỗ trợ bạn. Vui lòng liên hệ với chúng tôi 
                qua các kênh dưới đây hoặc điền vào biểu mẫu.
            </p>

            <div className="contact-info">
                <section className="info-box">
                    <h2>Địa Chỉ</h2>
                    <p>
                        🏢 Tòa nhà ABC, 123 Đường XYZ, Quận 1, TP. Hồ Chí Minh
                    </p>
                </section>

                <section className="info-box">
                    <h2>Điện Thoại & Email</h2>
                    <p>
                        📞 **Hotline:** (028) 1234 5678
                    </p>
                    <p>
                        📧 **Email Hỗ Trợ:** support@yourwebsite.com
                    </p>
                </section>
            </div>

            <section className="contact-form-section">
                <h2>Gửi Yêu Cầu Cho Chúng Tôi</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Họ Tên:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Tiêu Đề:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Nội Dung:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Gửi</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;