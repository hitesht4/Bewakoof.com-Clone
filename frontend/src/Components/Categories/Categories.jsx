import React from "react";
import styles from "./styles/cat.module.css";

const Categories = ({ data }) => {
  return (
    <div className={styles.boxer}>
      <h5 className={styles.head}>POPULAR CATEGORIES</h5>
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

export default Categories;
