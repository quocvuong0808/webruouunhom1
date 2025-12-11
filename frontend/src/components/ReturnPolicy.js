import React from 'react';
import './ReturnPolicy.css';

const ReturnPolicy = () => {
  return (
    <div className="return-container">
      <div className="return-content">
        <h1 className="return-title">Chính Sách Đổi Trả & Hoàn Tiền</h1>
        <p className="return-intro">
          Chúng tôi cam kết mang đến cho khách hàng trải nghiệm mua sắm tốt nhất. 
          Nếu có bất kỳ vấn đề gì với sản phẩm, vui lòng liên hệ ngay để được hỗ trợ.
        </p>

        <section className="policy-section">
          <h2>1. Điều Kiện Đổi Trả</h2>
          <div className="policy-content">
            <div className="condition-box accepted">
              <h3>✓ Chúng Tôi Chấp Nhận Đổi Trả Khi:</h3>
              <ul>
                <li>Sản phẩm bị lỗi do nhà sản xuất (chai bể, rò rỉ, hư hỏng)</li>
                <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển</li>
                <li>Giao sai sản phẩm (không đúng loại, năm sản xuất, dung tích)</li>
                <li>Sản phẩm hết hạn sử dụng hoặc sắp hết hạn (dưới 6 tháng)</li>
                <li>Sản phẩm có dấu hiệu giả mạo, không chính hãng</li>
                <li>Thiếu số lượng so với đơn đặt hàng</li>
              </ul>
            </div>

            <div className="condition-box rejected">
              <h3>✗ Chúng Tôi Không Chấp Nhận Đổi Trả Khi:</h3>
              <ul>
                <li>Khách hàng đổi ý, không còn nhu cầu sử dụng</li>
                <li>Sản phẩm đã mở seal, nút chai, hoặc có dấu hiệu đã sử dụng</li>
                <li>Tem nhãn bị rách, mờ, tẩy xóa hoặc bị hư hỏng do khách hàng</li>
                <li>Sản phẩm bị hư hỏng do bảo quản không đúng cách</li>
                <li>Quá thời gian quy định (7 ngày kể từ khi nhận hàng)</li>
                <li>Không có video quay khi mở hàng (đối với trường hợp khiếu nại)</li>
                <li>Sản phẩm khuyến mãi, giảm giá đặc biệt (trừ lỗi từ nhà sản xuất)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>2. Thời Gian Đổi Trả</h2>
          <div className="policy-content">
            <div className="timeline-box">
              <div className="timeline-item">
                <div className="timeline-icon">📦</div>
                <div className="timeline-content">
                  <h4>Trong vòng 24 giờ</h4>
                  <p>Thời gian vàng để yêu cầu đổi trả nếu phát hiện lỗi ngay khi nhận hàng. 
                  Chúng tôi sẽ xử lý ưu tiên và nhanh chóng nhất.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">⏰</div>
                <div className="timeline-content">
                  <h4>Trong vòng 7 ngày</h4>
                  <p>Thời hạn tối đa để yêu cầu đổi trả kể từ khi nhận hàng. 
                  Cần có video mở hàng và sản phẩm còn nguyên vẹn.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">❌</div>
                <div className="timeline-content">
                  <h4>Sau 7 ngày</h4>
                  <p>Chúng tôi không chấp nhận yêu cầu đổi trả. Tuy nhiên vẫn hỗ trợ 
                  tư vấn và giải quyết nếu có vấn đề về chất lượng sản phẩm.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>3. Quy Trình Đổi Trả</h2>
          <div className="policy-content">
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Liên Hệ</h4>
                  <p>Gọi hotline 0123 456 789 hoặc gửi email về support@wineshop.vn với 
                  thông tin đơn hàng, lý do đổi trả và hình ảnh/video sản phẩm lỗi.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Xác Nhận</h4>
                  <p>Bộ phận chăm sóc khách hàng sẽ kiểm tra và xác nhận yêu cầu trong 
                  vòng 2-4 giờ làm việc. Chúng tôi sẽ hướng dẫn các bước tiếp theo.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Gửi Hàng Về</h4>
                  <p>Đóng gói sản phẩm cẩn thận (giống như khi nhận hàng). Chúng tôi sẽ 
                  sắp xếp shipper đến lấy hàng hoặc hướng dẫn bạn gửi về kho.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Kiểm Tra</h4>
                  <p>Khi nhận được hàng, chúng tôi sẽ kiểm tra tình trạng sản phẩm trong 
                  vòng 24 giờ và thông báo kết quả cho bạn.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Đổi Hàng/Hoàn Tiền</h4>
                  <p>Nếu đủ điều kiện, bạn sẽ nhận được sản phẩm thay thế hoặc hoàn tiền 
                  theo phương thức đã thỏa thuận.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>4. Hình Thức Giải Quyết</h2>
          <div className="policy-content">
            <div className="solution-grid">
              <div className="solution-card">
                <h4>🔄 Đổi Sản Phẩm Mới</h4>
                <p>Áp dụng cho sản phẩm lỗi, hư hỏng. Chúng tôi sẽ gửi sản phẩm mới 
                tương đương hoặc cao hơn nếu hết hàng.</p>
                <p className="highlight">Thời gian: 1-3 ngày</p>
              </div>

              <div className="solution-card">
                <h4>💰 Hoàn Tiền 100%</h4>
                <p>Áp dụng khi khách hàng không muốn đổi sản phẩm khác. Hoàn tiền 
                đầy đủ bao gồm cả phí vận chuyển (nếu lỗi từ chúng tôi).</p>
                <p className="highlight">Thời gian: 3-7 ngày làm việc</p>
              </div>

              <div className="solution-card">
                <h4>🎁 Voucher/Tín Dụng</h4>
                <p>Nhận voucher trị giá 110% để mua sắm lần sau. Đây là lựa chọn 
                nhanh nhất và bạn được tặng thêm 10%.</p>
                <p className="highlight">Thời gian: Ngay lập tức</p>
              </div>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>5. Chi Phí Đổi Trả</h2>
          <div className="policy-content">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Trường hợp</th>
                  <th>Chi phí vận chuyển</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lỗi từ cửa hàng</td>
                  <td className="free">MIỄN PHÍ</td>
                  <td>Chúng tôi chịu toàn bộ chi phí</td>
                </tr>
                <tr>
                  <td>Lỗi từ nhà sản xuất</td>
                  <td className="free">MIỄN PHÍ</td>
                  <td>Bảo hành theo quy định</td>
                </tr>
                <tr>
                  <td>Lỗi vận chuyển</td>
                  <td className="free">MIỄN PHÍ</td>
                  <td>Đối tác vận chuyển chịu trách nhiệm</td>
                </tr>
                <tr>
                  <td>Khách hàng đổi ý</td>
                  <td className="paid">Khách hàng thanh toán</td>
                  <td>Nếu sản phẩm còn nguyên vẹn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="policy-section">
          <h2>6. Phương Thức Hoàn Tiền</h2>
          <div className="policy-content">
            <ul>
              <li><strong>Chuyển khoản ngân hàng:</strong> Hoàn tiền trực tiếp vào tài khoản trong 3-5 ngày làm việc</li>
              <li><strong>Ví điện tử:</strong> Hoàn về Momo, ZaloPay, VNPay trong 1-3 ngày</li>
              <li><strong>Tiền mặt:</strong> Hoàn lại khi shipper đến nhận hàng trả (nội thành TP.HCM)</li>
              <li><strong>Hoàn vào thẻ:</strong> Hoàn về thẻ tín dụng/ghi nợ đã thanh toán trong 7-14 ngày</li>
            </ul>
            <p className="note-box">
              <strong>Lưu ý:</strong> Thời gian hoàn tiền có thể thay đổi tùy thuộc vào ngân hàng 
              và phương thức thanh toán ban đầu.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>7. Một Số Lưu Ý Quan Trọng</h2>
          <div className="policy-content">
            <div className="warning-box">
              <h4>⚠️ Video Mở Hàng</h4>
              <p>
                Để đảm bảo quyền lợi của bạn, vui lòng quay video từ lúc nhận hàng từ shipper 
                và mở seal sản phẩm. Video này là bằng chứng quan trọng trong trường hợp 
                khiếu nại về hư hỏng, thiếu hàng.
              </p>
            </div>

            <div className="info-box">
              <h4>📋 Bảo Quản Hóa Đơn</h4>
              <p>
                Giữ lại hóa đơn mua hàng, phiếu giao hàng, tem bảo hành. Đây là căn cứ 
                để chúng tôi xử lý đổi trả nhanh chóng và chính xác nhất.
              </p>
            </div>

            <div className="info-box">
              <h4>📞 Liên Hệ Sớm</h4>
              <p>
                Nếu phát hiện vấn đề, vui lòng liên hệ ngay trong 24h để được xử lý 
                ưu tiên. Càng liên hệ sớm, chúng tôi càng hỗ trợ tốt hơn.
              </p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>8. Trách Nhiệm Của Hai Bên</h2>
          <div className="policy-content">
            <div className="responsibility">
              <h4>Trách nhiệm của Cửa Hàng:</h4>
              <ul>
                <li>Cung cấp sản phẩm chính hãng, chất lượng</li>
                <li>Đóng gói cẩn thận, giao hàng đúng hẹn</li>
                <li>Xử lý đổi trả nhanh chóng, minh bạch</li>
                <li>Chịu trách nhiệm về lỗi từ phía cửa hàng</li>
                <li>Hỗ trợ tư vấn và giải đáp thắc mắc</li>
              </ul>
            </div>

            <div className="responsibility">
              <h4>Trách nhiệm của Khách Hàng:</h4>
              <ul>
                <li>Kiểm tra kỹ sản phẩm khi nhận hàng</li>
                <li>Quay video mở hàng làm bằng chứng</li>
                <li>Bảo quản sản phẩm đúng cách</li>
                <li>Liên hệ đúng thời hạn quy định</li>
                <li>Cung cấp thông tin chính xác, trung thực</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="contact-box">
          <h3>Cần Hỗ Trợ Đổi Trả?</h3>
          <p>Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ bạn 24/7:</p>
          <div className="contact-details">
            <p>📞 <strong>Hotline:</strong> 0123 456 789</p>
            <p>✉️ <strong>Email:</strong> support@wineshop.vn</p>
            <p>💬 <strong>Live Chat:</strong> Trên website từ 9:00 - 21:00</p>
            <p>🕒 <strong>Giờ làm việc:</strong> 9:00 - 21:00 (Thứ 2 - Chủ Nhật)</p>
          </div>
          <p className="commitment">
            <strong>Cam kết:</strong> Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;