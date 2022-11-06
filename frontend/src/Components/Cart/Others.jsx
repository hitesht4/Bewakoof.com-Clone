import React from "react";
import styles from "./styles/Others.module.css";
import { GrDeliver } from "react-icons/gr";

const Others = () => {
  return (
    <div className={styles.Container}>
      <li>
        <GrDeliver style={{ marginRight: "10px", fontSize: "19px" }} />
        Yay! You get FREE delivery on this order
      </li>
    </div>
  );
};

export default Others;
