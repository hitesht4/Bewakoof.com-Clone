import React from "react";
import styles from "./styles/cat.module.css";

const Bannerss = ({ source }) => {
  return (
    <div className={styles.Banner}>
      <img src={source} alt="" />
    </div>
  );
};

export default Bannerss;
