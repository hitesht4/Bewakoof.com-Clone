import React from "react";
import styles from "./styles/gradient.module.css";

const Gradient = () => {
  return (
    <div className={styles.Gradient}>
      <div className={styles.First}>
        <h2>Welcome to the world of Bewakoof!</h2>
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
          alt="Not available"
        />
      </div>
    </div>
  );
};

export default Gradient;
