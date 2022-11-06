import React from "react";
import styles from "./styles/pop.module.css";

const Popular = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="" />
          <h6>{item.cat}</h6>
        </div>
      ))}
    </div>
  );
};

export default Popular;
