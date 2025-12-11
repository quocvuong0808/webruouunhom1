import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Làm thế nào để đặt hàng?",
      answer: "Bạn có thể đặt hàng trực tiếp trên website bằng cách thêm sản phẩm vào giỏ hàng và tiến hành thanh toán. Hoặc liên hệ hotline 0123 456 789 để được tư vấn và đặt hàng trực tiếp."
    },
    {
      question: "Các hình thức thanh toán được chấp nhận?",
      answer: "Chúng tôi chấp nhận thanh toán qua: Tiền mặt khi nhận hàng (COD), chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay), thẻ tín dụng/ghi nợ Visa, Mastercard."
    },
    {
      question: "Thời gian giao hàng là bao lâu?",
      answer: "Nội thành TP.HCM: 2-4 giờ (giao hàng nhanh). Ngoại thành và các tỉnh: 1-3 ngày làm việc tùy khu vực. Chúng tôi sẽ liên hệ xác nhận thời gian giao hàng cụ thể sau khi nhận đơn."
    },
    {
      question: "Phí vận chuyển là bao nhiêu?",
      answer: "Miễn phí vận chuyển cho đơn hàng từ 2.000.000đ trở lên trong nội thành TP.HCM. Đơn hàng dưới 2 triệu: phí ship 50.000đ. Các tỉnh thành khác: 50.000đ - 150.000đ tùy khu vực."
    },
    {
      question: "Sản phẩm có chính hãng không?",
      answer: "100% sản phẩm của chúng tôi đều là hàng chính hãng, nhập khẩu trực tiếp từ các nhà phân phối uy tín. Mỗi chai rượu đều có tem chống giả và giấy chứng nhận nguồn gốc xuất xứ."
    },
    {
      question: "Tôi có thể đổi trả hàng không?",
      answer: "Chúng tôi chấp nhận đổi trả trong vòng 7 ngày nếu sản phẩm bị lỗi, hư hỏng do vận chuyển hoặc không đúng với đơn hàng. Sản phẩm đổi trả phải còn nguyên seal, tem, không có dấu hiệu đã sử dụng."
    },
    {
      question: "Làm sao để bảo quản rượu vang đúng cách?",
      answer: "Bảo quản rượu vang ở nhiệt độ 12-18°C, độ ẩm 60-70%, tránh ánh sáng trực tiếp và rung động. Để chai nằm ngang nếu có nút chai bần để giữ ẩm cho nút. Tránh xa nguồn nhiệt và mùi mạnh."
    },
    {
      question: "Tôi nên chọn rượu vang nào cho người mới bắt đầu?",
      answer: "Người mới nên bắt đầu với rượu vang đỏ nhẹ (Pinot Noir, Merlot) hoặc vang trắng dễ uống (Sauvignon Blanc, Chardonnay). Chúng tôi có bộ sưu tập 'Starter Collection' dành riêng cho người mới với giá cả phải chăng."
    },
    {
      question: "Có dịch vụ tư vấn chọn rượu không?",
      answer: "Có, chúng tôi có đội ngũ chuyên gia rượu vang sẵn sàng tư vấn miễn phí. Bạn có thể liên hệ qua hotline, chat trực tuyến hoặc đến showroom để được tư vấn trực tiếp về loại rượu phù hợp với khẩu vị và dịp sử dụng."
    },
    {
      question: "Có chương trình khuyến mãi nào không?",
      answer: "Chúng tôi thường xuyên có các chương trình khuyến mãi vào dịp lễ tết, sinh nhật thương hiệu. Đăng ký nhận tin để cập nhật các ưu đãi mới nhất. Khách hàng thân thiết được tích điểm và hưởng ưu đãi đặc biệt."
    },
    {
      question: "Tôi có thể mua rượu làm quà tặng không?",
      answer: "Có, chúng tôi cung cấp dịch vụ đóng gói quà tặng sang trọng miễn phí cho đơn hàng từ 1.000.000đ. Bạn có thể chọn hộp gỗ cao cấp, túi quà đẹp mắt và kèm thiệp chúc mừng theo yêu cầu."
    },
    {
      question: "Làm thế nào để phân biệt rượu vang thật giả?",
      answer: "Kiểm tra tem nhập khẩu chính hãng, mã vạch, số lô sản xuất trên chai. Rượu thật có nhãn in sắc nét, nút chai chất lượng tốt. Mua từ nguồn uy tín như cửa hàng chúng tôi để đảm bảo chất lượng 100%."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">Câu Hỏi Thường Gặp</h1>
        <p className="faq-subtitle">
          Tìm câu trả lời cho các câu hỏi phổ biến về sản phẩm và dịch vụ của chúng tôi
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>Vẫn còn thắc mắc?</h2>
          <p>
            Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, vui lòng liên hệ với chúng tôi:
          </p>
          <div className="contact-info">
            <p><strong>Hotline:</strong> 0123 456 789</p>
            <p><strong>Email:</strong> support@wineshop.vn</p>
            <p><strong>Giờ làm việc:</strong> 9:00 - 21:00 (Thứ 2 - Chủ Nhật)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;