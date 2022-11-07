import React from "react";
import styles from "./styles/Banner.module.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.part} onClick={() => navigate("/categories")}>
        <img
          src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-header-v1NEW.jpg"
          alt=""
        />
      </div>
      <div className={styles.flex}>
        <div onClick={() => navigate("/mens")}>
          <img
            src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-mendesktopNEW-1651231162.jpg"
            alt=""
          />
        </div>
        <div onClick={() => navigate("/womens")}>
          <img
            src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-Womendesktop-1651231163NEW.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.part} onClick={() => navigate("/categories")}>
        <img
          src="https://images.bewakoof.com/web/Gender-Picker-Banner-desktop-footer-v1NEW.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
