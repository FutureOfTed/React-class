import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className = "product-card">
      <img src = {product.image} alt={product.name} className = "product-image" />
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price} 원</p>
      <span className = "rating">⭐ {product.rating}</span>
      {product.sale && <span className="sale-badge">SALE {product.sale}%</span>}
    </div>
  );
}
export default ProductCard;