import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles/card.module.css";

const Card = ({ item }) => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className={styles.card}>
      <div>
        <img src={item.images[0]} alt="" />
      </div>
      <div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default Card;
