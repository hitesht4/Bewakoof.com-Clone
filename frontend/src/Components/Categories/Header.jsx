import React from "react";
import styles from "./styles/fav.module.css";
import Carousel from "react-bootstrap/Carousel";

const Header = ({ data }) => {
  return (
    <Carousel className="my-2">
      <Carousel.Item>
        <div className={styles.container}>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.container}>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
