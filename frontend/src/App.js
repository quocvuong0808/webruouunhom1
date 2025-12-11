import React from "react";
import "./styles/global.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";

// Import các component
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatContact from "./components/FloatContact";
import NotificationContainer from "./components/Notification";

// Các trang
import HomePage from "./pages/HomePage.new";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import About from "./components/About.js"; // 👈 1. IMPORT COMPONENT GIỚI THIỆU
import Contact from "./components/Contact.js";
import FAQ from "./components/FAQ.js";
import ShippingPolicy from "./components/ShippingPolicy.js";
import ReturnPolicy from "./components/ReturnPolicy.js";
import PrivacyPolicy from "./components/PrivacyPolicy.js";
import TermsOfService from "./components/TermOfSevice.js";
// Admin
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardAdminPage from "./pages/admin/DashboardAdminPage";
import ProductListAdminPage from "./pages/admin/ProductListAdminPage";
import ProductEditAdminPage from "./pages/admin/ProductEditAdminPage";
import OrderListAdminPage from "./pages/admin/OrderListAdminPage";
import CustomerListAdminPage from "./pages/admin/CustomerListAdminPage";

// THÊM CHATBOT AI
import Chatbot from "./components/Chatbot.js"; 

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NotificationProvider>
          <Router>
            <Header />
            <main className="container mt-3">
              <Routes>
                {/* User Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<LoginPage />} />
                <Route path="/about" element={<About />} /> {/* 👈 2. THÊM ROUTE GIỚI THIỆU */}
                <Route path="/contact" element={<Contact />} /> {/* 👈 THÊM ROUTE NÀY */}
                <Route path="/faq" element={<FAQ />} /> {/* 👈 THÊM ROUTE FAQ */}
                <Route path="/shipping" element={<ShippingPolicy />} /> {/* 👈 THÊM ROUTE CHÍNH SÁCH VẬN CHUYỂN */}
                <Route path="/returns" element={<ReturnPolicy />} /> {/* 👈 THÊM ROUTE CHÍNH SÁCH ĐỔI TRẢ */}
                <Route path="/privacy" element={<PrivacyPolicy />} /> {/* 👈 THÊM ROUTE CHÍNH SÁCH BẢO MẬT */}
                <Route path="/terms" element={<TermsOfService />} /> {/* 👈 THÊM ROUTE ĐIỀU KHOẢN DỊCH VỤ */}
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<DashboardAdminPage />} />
                  <Route path="products" element={<ProductListAdminPage />} />
                  <Route path="products/new" element={<ProductEditAdminPage />} />
                  <Route path="products/:id/edit" element={<ProductEditAdminPage />} />
                  <Route path="orders" element={<OrderListAdminPage />} />
                  <Route path="customers" element={<CustomerListAdminPage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
            <FloatContact />
            <NotificationContainer />

            {/* CHATBOT AI – HIỆN Ở GÓC DƯỚI PHẢI */}
            <Chatbot /> 
          </Router>
        </NotificationProvider>
      </CartProvider>
      </AuthProvider>
  );
}

export default App;