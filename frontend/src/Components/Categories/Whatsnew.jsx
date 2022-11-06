import React from "react";
import styles from "./styles/Whatsnew.module.css";

const Whatsnew = ({ data }) => {
  return (
    <div className={styles.Whatsnew}>
      <h5>WHAT'S NEW</h5>

      <div className={styles.container}>
        {data.map((item, index) => (
          <div key={index}>
            <img key={index} src={item.img} alt="" />
            <div className={styles.Price}>
              <p>₹{item.price}</p>
              <p className={styles.cut}>₹{item.cut}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatsnew;
