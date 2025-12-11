import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';
import { CartContext } from '../context/CartContext';
import './ProductCard.new.css';

// Hàm lấy URL runtime (nếu có)
const getRuntimeBase = () => {
  if (typeof window !== 'undefined' && window.__API_URL)
    return window.__API_URL.replace(/\/+$/, '');

  if (process && process.env && process.env.REACT_APP_API_URL)
    return process.env.REACT_APP_API_URL.replace(/\/+$/, '');

  return '';
};

// Chuẩn hoá ảnh
const normalizeImageUrl = (url) => {
  if (!url) return '';

  // Nếu backend trả dạng "/uploads/xxx"
  if (url.startsWith('/uploads/')) {
    return `http://localhost:5000${url}`;
  }

  // Nếu đã là URL đầy đủ
  return url;
};

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault(); // ❗ tránh click vào link khi bấm nút
    addToCart(product);
  };

  // Ảnh sản phẩm
  let imageUrl = normalizeImageUrl(product.image_url) || '/placeholder.svg';

  // Tính stock
  const getStockStatus = (stock) => {
    if (stock > 10) return { text: `Còn: ${stock}`, class: 'text-success' };
    if (stock > 0) return { text: `Còn: ${stock}`, class: 'text-warning' };
    return { text: 'Hết hàng', class: 'text-danger' };
  };

  const stockStatus = getStockStatus(product.stock || 0);

  return (
    <Link to={`/products/${product.product_id}`} className="product-card-link">
      <div className="product-card">

        <div className="product-image-container">
          <img
            src={imageUrl}
            className="product-image"
            alt={product.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder.svg';
              e.target.style.background = '#f5f5f5';
              e.target.style.objectFit = 'contain';

              const parent = e.target.parentNode;
              let errorDiv = parent.querySelector('.image-error-overlay');

              if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.className = 'image-error-overlay';
                errorDiv.style.position = 'absolute';
                errorDiv.style.top = '0';
                errorDiv.style.left = '0';
                errorDiv.style.width = '100%';
                errorDiv.style.height = '100%';
                errorDiv.style.background = 'rgba(245,245,245,0.8)';
                errorDiv.style.display = 'flex';
                errorDiv.style.alignItems = 'center';
                errorDiv.style.justifyContent = 'center';
                errorDiv.style.color = '#888';
                errorDiv.style.fontSize = '14px';
                errorDiv.style.zIndex = '3';
                errorDiv.innerText = 'Không thể hiển thị ảnh sản phẩm';
                parent.appendChild(errorDiv);
              }
            }}
          />

          {product.stock === 0 && (
            <div className="out-of-stock-overlay">Hết hàng</div>
          )}
        </div>

        <div className="product-info">
          <h5 className="product-name" title={product.name}>
            {product.name}
          </h5>

          <div className="product-price">
            {formatPrice(product.price)}
          </div>

          {product.category_name && (
            <p className="product-category">{product.category_name}</p>
          )}

          <p className={`product-stock ${stockStatus.class}`}>
            {stockStatus.text}
          </p>

          <div className="product-actions">
            <button
              className="btn btn-add-cart"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Hết hàng' : 'Thêm vào giỏ'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
