import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy" role="article" aria-labelledby="privacy-title">
      <div className="container">
        <h1 id="privacy-title">Chính sách bảo mật</h1>
        <p className="effective-date">Hiệu lực từ: 01/01/2025</p>

        <section className="policy-section">
          <h2>1. Mục đích</h2>
          <p>
            Chính sách này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá
            nhân của khách hàng khi truy cập và mua hàng trên website của chúng tôi.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Dữ liệu chúng tôi thu thập</h2>
          <ul>
            <li>Thông tin liên hệ: tên, địa chỉ, email, số điện thoại.</li>
            <li>Thông tin giao dịch: đơn hàng, sản phẩm, phương thức thanh toán, lịch sử mua hàng.</li>
            <li>Dữ liệu kỹ thuật: địa chỉ IP, loại trình duyệt, thiết bị, nhật ký truy cập.</li>
            <li>Dữ liệu tùy chọn: sở thích, đánh giá, phản hồi khách hàng (nếu bạn cung cấp).</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Mục đích sử dụng</h2>
          <p>
            Chúng tôi sử dụng dữ liệu để:
          </p>
          <ul>
            <li>Xử lý đơn hàng và cung cấp dịch vụ sau bán hàng.</li>
            <li>Giao tiếp với khách hàng (xác nhận đơn hàng, hỗ trợ, thông báo).</li>
            <li>Cải thiện trải nghiệm người dùng và phân tích hiệu suất website.</li>
            <li>Gửi khuyến mãi nếu bạn đồng ý nhận thông tin tiếp thị.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Chia sẻ dữ liệu</h2>
          <p>
            Chúng tôi có thể chia sẻ thông tin với bên thứ ba trong các trường hợp sau:
          </p>
          <ul>
            <li>Đối tác vận chuyển để thực hiện giao hàng.</li>
            <li>Đơn vị thanh toán để xử lý giao dịch.</li>
            <li>Khi có yêu cầu từ cơ quan pháp luật hoặc để bảo vệ quyền lợi hợp pháp của chúng tôi.</li>
          </ul>
          <p>
            Chúng tôi không bán thông tin cá nhân của bạn cho bên thứ ba cho mục đích tiếp thị.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Cookies và công nghệ tương tự</h2>
          <p>
            Website sử dụng cookies để lưu tùy chọn, cải thiện trải nghiệm và phân tích lưu lượng.
            Bạn có thể tắt cookies trong trình duyệt, tuy nhiên một số tính năng của website có thể
            không hoạt động đầy đủ nếu tắt cookies.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Bảo mật dữ liệu</h2>
          <p>
            Chúng tôi áp dụng biện pháp kỹ thuật và tổ chức thích hợp (mã hoá, truy cập giới hạn,
            quy trình nội bộ) để bảo vệ dữ liệu khỏi truy cập trái phép, rò rỉ hoặc mất mát. Tuy
            nhiên, không có phương thức truyền thông hoặc lưu trữ nào là hoàn toàn an toàn 100%.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Lưu trữ và xoá dữ liệu</h2>
          <p>
            Chúng tôi lưu trữ dữ liệu trong thời gian cần thiết để thực hiện mục đích thu thập hoặc
            tuân thủ quy định pháp luật. Khách hàng có quyền yêu cầu xoá hoặc hạn chế xử lý theo
            quy định hiện hành (xem mục quyền của bạn).
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Quyền của bạn</h2>
          <ul>
            <li>Yêu cầu truy cập các thông tin chúng tôi đang lưu trữ về bạn.</li>
            <li>Yêu cầu sửa sai, cập nhật dữ liệu không chính xác.</li>
            <li>Yêu cầu xoá dữ liệu trong những trường hợp được pháp luật cho phép.</li>
            <li>Rút lại sự đồng ý cho tiếp thị trực tiếp bất cứ lúc nào (nếu bạn đã đồng ý trước đó).</li>
          </ul>
          <p>
            Để thực hiện quyền của bạn, vui lòng liên hệ theo thông tin ở mục Liên hệ bên dưới.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Dành cho phụ huynh và trẻ em</h2>
          <p>
            Website không nhắm tới việc thu thập dữ liệu cá nhân của trẻ em dưới 16 tuổi. Nếu bạn
            là phụ huynh và phát hiện dữ liệu con em mình bị thu thập mà không đồng ý, hãy liên hệ
            để chúng tôi xử lý.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Thay đổi chính sách</h2>
          <p>
            Chúng tôi có thể cập nhật chính sách này. Mọi thay đổi sẽ được đăng trên trang này với
            ngày hiệu lực mới.
          </p>
        </section>

        <section className="policy-section">
          <h2>11. Thông tin liên hệ</h2>
          <p className="contact">
            Email: <a href="mailto:privacy@yourshop.com">privacy@yourshop.com</a><br />
            Điện thoại: <a href="tel:+84123456789">+84 123 456 789</a><br />
            Địa chỉ: 123 Đường Rượu, Quận CV, Thành phố XYZ
          </p>
        </section>

        
      </div>
    </main>
  );
};

export default PrivacyPolicy;