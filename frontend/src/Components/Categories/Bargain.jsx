import React from "react";
import styles from "./styles/bargain.module.css";

const Bargain = ({ data }) => {
  return (
    <div>
      <h5 className={styles.Head}>BEST BARGAIN CORNER</h5>
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

export default Bargain;
