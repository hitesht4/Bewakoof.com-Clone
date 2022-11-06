import React from "react";
import styles from "./styles/Footer2.module.css";

const List1 = [
  "Top Wear",
  "Men's New Arrivals",
  "Men's Half Sleeve T-Shirts",
  "Men's Hoodies & Sweatshirts",
  "Men's Long Sleeve T-shirts",
  "Men's Printed T-shirts",
  "Men's Plain T-shirts",
  "Men's Vests",
  "Men's Polo T-Shirts",
  "Men's Kurtas",
  "Men's Combo T-Shirts",
  "Men's Shirts",
  "Men's Nightwear",
  "Men's Plus Size Store",
  "Bottom Wear",
  "Men's Pajamas",
  "Men's Boxer Shorts",
  "Men's Shorts",
  "Men's Track Pants",
  "Men's Pants",
  "Featured",
  "Men's Flip Flops",
  "Men's Sliders",
  "Marvel T-Shirts",
  "Disney T-Shirts",
  "Avengers T-Shirts",
  "Star Wars T-Shirts",
  "Batman T-Shirts",
  "Superman T-Shirts",
  "Joker T-Shirts",
];

const List2 = [
  "Women's Top Wear",
  "Women's New Arrivals",
  "Women's T-Shirts",
  "Women's Hoodies & Sweatshirts",
  "Women's Dresses",
  "Women's 3/4 Sleeve T-Shirts",
  "Women's Kurtis",
  "Women's Combo T-Shirts",
  "Women's Nightwear",
  "Women's Plus Size Store",
  "Women's Bottom Wear",
  "Women's Pajamas",
  "Women's Boxer Shorts",
  "Women's Jeans",
  "Women's Joggers",
  "Women's Shorts",
  "BAGS",
  "Laptop Bags",
  "Small Backpacks",
  "Featured",
  "Women's Slides",
  "Women's Flip Flops",
];

const List3 = [
  "Brands",
  "Apple",
  "Realme",
  "Samsung",
  "Xiaomi",
  "Oneplus",
  "Vivo",
  "Oppo",
];
const Footer2 = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <h5>MEN'S CLOTHING</h5>
          {List1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h5>WOMEN'S CLOTHING</h5>
          {List2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h5>MOBILE COVERS</h5>
          {List3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.Links}>
        <h5>FANBOOK</h5>
        <h5>OFFERS</h5>
        <h5>SITEMAP</h5>
      </div>
    </div>
  );
};

export default Footer2;
