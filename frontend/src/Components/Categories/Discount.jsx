import React from "react";
import styles from "./styles/Discount.module.css";

const Discount = ({ data }) => {
  return (
    <div>
      <h5 className={styles.Head}>DISCOUNT PE DISCOUNT</h5>
      <div className={styles.container}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
