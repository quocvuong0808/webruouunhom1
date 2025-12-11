import React from "react";
import "./TermOfService.css";

const TermOfService = () => {
  return (
    <main className="tos" role="article" aria-labelledby="tos-title">
      <div className="container">
        <h1 id="tos-title">Điều khoản dịch vụ</h1>
        <p className="effective-date">Hiệu lực từ: 01/01/2025</p>

        <section className="policy-section">
          <h2>1. Giới thiệu</h2>
          <p>
            Các điều khoản này quy định việc bạn sử dụng website và dịch vụ bán rượu trực tuyến của
            chúng tôi. Bằng cách truy cập hoặc sử dụng dịch vụ, bạn đồng ý bị ràng buộc bởi các điều
            khoản này.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Điều kiện sử dụng</h2>
          <p>
            Bạn phải là người đủ độ tuổi theo pháp luật nơi bạn cư trú để mua và sử dụng sản phẩm có
            cồn. Chúng tôi có quyền yêu cầu xác minh tuổi trước khi giao hàng.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Tài khoản người dùng</h2>
          <ul>
            <li>Bạn có trách nhiệm giữ bảo mật thông tin đăng nhập và chịu trách nhiệm cho mọi hoạt động diễn ra dưới tài khoản của mình.</li>
            <li>Không chia sẻ tài khoản; thông báo ngay nếu nghi ngờ tài khoản bị xâm phạm.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Đặt hàng và hợp đồng mua bán</h2>
          <p>
            Đơn hàng của bạn là lời đề nghị mua; hợp đồng được hình thành khi chúng tôi xác nhận đơn bằng email/ứng dụng. Chúng tôi có quyền từ chối đơn hàng theo chính sách nội bộ hoặc khi có lỗi hiển thị giá/sản phẩm.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Giá cả và thanh toán</h2>
          <p>
            Giá hiển thị chưa bao gồm phí giao hàng (nếu có) và có thể thay đổi. Thanh toán được xử lý qua các đối tác thanh toán; bạn chịu trách nhiệm cung cấp thông tin thanh toán chính xác.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Giao hàng và nhận hàng</h2>
          <p>
            Thời gian giao hàng ước tính được thông báo tại lúc thanh toán. Khi giao nhận, người nhận phải đủ tuổi hợp lệ; nhân viên giao hàng có quyền từ chối giao nếu không thể xác minh tuổi.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Chính sách đổi trả & hoàn tiền</h2>
          <p>
            Các điều kiện đổi trả và hoàn tiền áp dụng theo trang "Chính sách đổi trả & Hoàn tiền" của chúng tôi. Vui lòng kiểm tra trang đó để biết hướng dẫn chi tiết.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Quyền sở hữu trí tuệ</h2>
          <p>
            Toàn bộ nội dung trên website (văn bản, hình ảnh, logo, nhãn hiệu) là tài sản của chúng tôi hoặc được cấp phép. Bạn không được sao chép, tái sản xuất hoặc sử dụng cho mục đích thương mại mà không có phép.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Nội dung do người dùng cung cấp</h2>
          <p>
            Nếu bạn gửi đánh giá, bình luận hoặc nội dung khác, bạn cấp cho chúng tôi quyền sử dụng, hiển thị và phân phối nội dung đó mà không cần trả phí. Bạn cam kết nội dung không vi phạm pháp luật, không xúc phạm và không xâm phạm quyền của bên thứ ba.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Hành vi bị cấm</h2>
          <ul>
            <li>Không sử dụng dịch vụ cho mục đích bất hợp pháp.</li>
            <li>Không can thiệp vào hệ thống, cố ý gây gián đoạn dịch vụ hoặc thu thập dữ liệu trái phép.</li>
            <li>Không đăng nội dung mang tính quấy rối, bôi nhọ hoặc vi phạm bản quyền.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>11. Miễn trừ trách nhiệm</h2>
          <p>
            Chúng tôi cung cấp dịch vụ "như hiện có" và không đảm bảo dịch vụ sẽ không gián đoạn hoặc không có lỗi. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho các tổn thất gián tiếp, hậu quả hoặc thiệt hại đặc biệt.
          </p>
        </section>

        <section className="policy-section">
          <h2>12. Giới hạn trách nhiệm</h2>
          <p>
            Trách nhiệm tổng hợp của chúng tôi đối với bất kỳ khiếu nại nào bị giới hạn ở mức số tiền bạn đã thanh toán cho đơn hàng liên quan trong vòng 12 tháng trước khi phát sinh kiện tụng, trừ khi pháp luật quy định khác.
          </p>
        </section>

        <section className="policy-section">
          <h2>13. Bồi thường</h2>
          <p>
            Bạn đồng ý bồi thường cho chúng tôi nếu có khiếu nại, tổn thất hoặc chi phí phát sinh do bạn vi phạm các điều khoản, sử dụng sai dịch vụ hoặc vi phạm pháp luật.
          </p>
        </section>

        <section className="policy-section">
          <h2>14. Chấm dứt</h2>
          <p>
            Chúng tôi có quyền đình chỉ hoặc chấm dứt tài khoản và quyền truy cập nếu bạn vi phạm các điều khoản này hoặc luật pháp liên quan.
          </p>
        </section>

        <section className="policy-section">
          <h2>15. Thay đổi điều khoản</h2>
          <p>
            Chúng tôi có thể cập nhật Điều khoản dịch vụ này theo thời gian. Mọi thay đổi sẽ được đăng trên trang này và có hiệu lực từ ngày được ghi. Việc bạn tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa bạn chấp nhận các điều khoản đã cập nhật.
          </p>
        </section>

        <section className="policy-section">
          <h2>16. Luật áp dụng và giải quyết tranh chấp</h2>
          <p>
            Điều khoản này được điều chỉnh bởi pháp luật Việt Nam (hoặc pháp luật mà bạn muốn áp dụng — thay đổi theo thực tế). Mọi tranh chấp sẽ được giải quyết theo thỏa thuận; nếu không thể, sẽ đưa ra tòa án có thẩm quyền.
          </p>
        </section>

        <section className="policy-section">
          <h2>17. Thông tin liên hệ</h2>
          <p className="contact">
            Email: <a href="mailto:legal@yourshop.com">legal@yourshop.com</a><br />
            Điện thoại: <a href="tel:+84123456789">+84 123 456 789</a><br />
            Địa chỉ: 123 Đường Rượu, Quận CV, Thành phố XYZ
          </p>
        </section>

        <footer className="policy-footer">
          <p>© {new Date().getFullYear()} YourShop. Bản quyền mọi quyền được bảo lưu.</p>
        </footer>
      </div>
    </main>
  );
};

export default TermOfService;