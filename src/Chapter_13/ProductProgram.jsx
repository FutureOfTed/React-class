import React from "react";
import "./ProductProgram.css";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Oreo",
    category: "과자",
    price: 1700,
    rating: 4.7,
    image: "https://i.namu.wiki/i/LXfb-XPYNdvgMN0iDve6yAfh41xho7a3JPnVBSvbZz0X2vWQBKIle_FzziQZXLPfb5zmKXsub35fiSoz3sKYXg.webp",
    sale: 15,
  },
  {
    name: "새우깡",
    category: "과자",
    price: 1500,
    rating: 4.5,
    image: "https://image.nongshim.com/non/pro/1594682430086.jpg",
    sale: 20,
  },
  {
    name: "Lotus",
    category: "과자",
    price: 2500,
    rating: 4.5,
    image: "https://i.namu.wiki/i/o22y3TZdb8PJt8NiIUGu3LsbkUnXxO23Z4ptF2biNTY2eV6QZF-eJWoYxt12RCB1nXt5C76mF8FSzRGCKuCQiQ.webp",
    sale: 25,
},
  {
    name: "Pepero",
    category: "과자",
    price: 1400,
    rating: 4.2,
    image: "https://www.lottewellfood.com/images/brand/img_hp03_01_2022.png",
    sale: 40,
},
  {
    name: "쿠크다스",
    category: "과자",
    price: 3500,
    rating: 4.8,
    image: "https://i.namu.wiki/i/FtfJ3U9DchGxgIanTA5L17NRzmvy_kmWj7u-N4cjG-KdSniFFHKIfxNmFfEylvtwXG8LYTwItGYW7r8TwLKi7Q.webp",
    sale: 15,
  },
  {
    name: "Dr.You",
    category: "과자",
    price: 1500,
    rating: 4.7,
    image: "https://i.namu.wiki/i/3cxrAdic2uFEEnsMqjhMakgZEbStDRqZs6lOFyhsMdbOU-HDEpetGiBu98l1w4K1T8t7cAZKMeJVEaEdJA7l5Q.webp",
    sale: 10
},
];

function ProductProgram() {
  return (
    <div className = "ProductProgram">
      <h1>Shopping Mall</h1>
      <div className = "product-grid">
        {products.map((product, index) => (
          <ProductCard key = {index} product = {product} />
        ))}
      </div>
    </div>
  );
}
export default ProductProgram;