import React from "react";
import styles from "../Categories/styles/cat.module.css";

const Banner = ({ src }) => {
  return (
    <div style={{ margin: "20px 0px" }} className={styles.Banner}>
      <img src={src} alt="Not Avilable" />
    </div>
  );
};

export default Banner;
