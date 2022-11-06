import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles/Whatsnew.module.css";

const Trending = ({ data }) => {
  return (
    <div>
      <h5 className={styles.head}>TRENDING</h5>
      <Carousel>
        <Carousel.Item>
          <div className={styles.container}>
            {data.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="" />
                <div className={styles.Price}>
                  <p>₹{item.price}</p>
                  <p className={styles.cut}>₹{item.cut}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.container}>
            {data.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="" />
                <div className={styles.Price}>
                  <p>₹{item.price}</p>
                  <p className={styles.cut}>₹{item.cut}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <h6
        style={{
          color: "#51cccc",
          textDecoration: "underline",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        VIEW All
      </h6>
    </div>
  );
};

export default Trending;
