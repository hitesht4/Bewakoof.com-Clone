import React from "react";
import styles from "./styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <img
          src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-header-v1NEW.jpg"
          alt=""
        />
      </div>
      <div className={styles.flex}>
        <div>
          <img
            src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-mendesktopNEW-1651231162.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-Womendesktop-1651231163NEW.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.part}>
        <img
          src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-footer-v1NEW.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
