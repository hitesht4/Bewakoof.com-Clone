import React from "react";
import styles from "./styles/fav.module.css";

const Slider = ({ data }) => {
  return (
    <div>
      <div className={styles.container}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
      <h4 className={styles.head}>THE GANG'S FAVOURITE</h4>
    </div>
  );
};

export default Slider;
