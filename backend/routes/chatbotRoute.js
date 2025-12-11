// backend/routes/chatbotRoute.js
const express = require("express");
const router = express.Router();
require('dotenv').config();
const pool = require("../config/db");
const axios = require("axios"); // Cần cài: npm install axios

const HF_API_URL = "https://router.huggingface.co/v1/chat/completions";
const HF_TOKEN = process.env.HF_TOKEN;
const BASE_URL = "http://localhost:5000"; // Đổi nếu deploy

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Tin nhắn không được để trống" });
  }

  try {
    // === 1. LẤY DANH SÁCH SẢN PHẨM ===
    const [products] = await pool.query(`
      SELECT p.name, p.price, p.stock, c.name AS category
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.category_id
      WHERE p.stock > 0
      ORDER BY p.price ASC
      LIMIT 20
    `);

    const productList = products.length > 0
      ? products
          .map(p => `• ${p.name} (${p.category || "Khác"}): ${p.price.toLocaleString('vi-VN')}đ/kg (còn ${p.stock}kg)`)
          .join("\n")
      : "Hiện chưa có sản phẩm.";

    // === 2. LẤY SẢN PHẨM NỔI BẬT ===
    let featured = "Chưa có sản phẩm nổi bật.";
    try {
      const featuredRes = await axios.get(`${BASE_URL}/api/products/featured`);
      featured = featuredRes.data
        .map(p => `• ${p.name}: ${p.price.toLocaleString('vi-VN')}đ/kg`)
        .join("\n");
    } catch (err) {
      console.log("Không lấy được featured");
    }

    // === 3. LẤY THỐNG KÊ ===
    let stats = "Chưa có thống kê.";
    try {
      const statsRes = await axios.get(`${BASE_URL}/api/products/stats`);
      const { totalProducts, totalRevenue, topSelling } = statsRes.data;
      stats = `Tổng sản phẩm: ${totalProducts}, Doanh thu: ${totalRevenue.toLocaleString('vi-VN')}đ, Bán chạy: ${topSelling}`;
    } catch (err) {
      console.log("Không lấy được stats");
    }

    // === 4. GỬI CHO AI (SIÊU ĐẦY ĐỦ) ===
    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.1-8B-Instruct",
        messages: [
          {
            role: "system",
            content: `Bạn là trợ lý cửa hàng trái cây "ReadyFruits" – SIÊU THÔNG MINH.\n\nTHÔNG TIN CỬA HÀNG:\n\n1. SẢN PHẨM ĐANG CÓ:\n${productList}\n\n2. SẢN PHẨM NỔI BẬT:\n${featured}\n\n3. THỐNG KÊ:\n${stats}\n\nQUY TẮC:\n- Trả lời bằng tiếng Việt, thân thiện, ngắn gọn, chuyên nghiệp.\n- Dẫn chứng từ dữ liệu trên (không bịa).\n- Gợi ý sản phẩm phù hợp theo nhóm, giá, hoặc nổi bật.\n- Nếu khách hỏi "bán chạy nhất" → dùng thống kê.\n- Nếu không biết → nói: "Mình kiểm tra giúp bạn ngay!"`
          },
          { role: "user", content: message },
        ],
        max_tokens: 250,
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: "Unknown" }));
      console.error("HF Error:", err);
      return res.status(500).json({ error: "AI đang bận. Thử lại sau!" });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() 
      || "Xin chào! Mình là trợ lý ReadyFruits. Bạn cần hỗ trợ gì ạ?";

    res.json({ reply });
  } catch (err) {
    console.error("Chatbot error:", err.message);
    res.status(500).json({ error: "Lỗi hệ thống" });
  }
});

module.exports = router;
