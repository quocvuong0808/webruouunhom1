// src/components/Chatbot.js
import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Xin chào! Mình là trợ lý cửa hàng trái cây. Bạn cần hỗ trợ gì ạ?" }
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Thêm trạng thái mở/đóng

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", content: message };
    setMessages(prev => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chatbot", { message });
      const botMsg = { role: "assistant", content: res.data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "Xin lỗi, có lỗi. Vui lòng thử lại!" }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#4CAF50",
          color: "white",
          border: "none",
          fontSize: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Chat
      </button>
    );
  }

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "350px",
      height: "500px",
      border: "1px solid #ddd",
      borderRadius: "16px",
      background: "white",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
      zIndex: 1000,
      overflow: "hidden"
    }}>
      {/* Header */}
      <div style={{
        padding: "12px 16px",
        background: "linear-gradient(135deg, #4CAF50, #45a049)",
        color: "white",
        borderRadius: "16px 16px 0 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h4 style={{ margin: 0, fontSize: "16px" }}>Trợ lý trái cây</h4>
        <button
          onClick={() => setIsOpen(false)}
          style={{ background: "none", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: "12px", overflowY: "auto", background: "#f9f9f9" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              margin: "8px 0",
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <div
              style={{
                display: "inline-block",
                maxWidth: "80%",
                padding: "10px 14px",
                borderRadius: "18px",
                background: msg.role === "user" ? "#2196F3" : "white",
                color: msg.role === "user" ? "white" : "black",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: "left" }}>
            <div style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: "18px",
              background: "white",
              boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
            }}>
              <span style={{ color: "#888" }}>Đang trả lời...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: "12px", borderTop: "1px solid #eee", display: "flex", background: "white" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && !loading && sendMessage()}
          placeholder="Nhập tin nhắn..."
          style={{
            flex: 1,
            padding: "10px 14px",
            border: "1px solid #ddd",
            borderRadius: "20px",
            outline: "none",
            fontSize: "14px"
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            marginLeft: "8px",
            padding: "0 16px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default Chatbot;