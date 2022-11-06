import React from "react";
import styles from "./styles/fav.module.css";

const Favourites = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Favourites;
