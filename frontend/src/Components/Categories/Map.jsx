import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styles from "./styles/map.module.css";

const Map = ({ data }) => {
  return (
    <div className={styles.boxer}>
      <h5 className={styles.Head}>POPULAR CATEGORIES</h5>
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

export default Map;
