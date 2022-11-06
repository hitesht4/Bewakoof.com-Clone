import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/card.module.css";

const Card = ({ item }) => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const handleChange = () => {
    setFlag(!flag);
  };
  const handleNavigate = () => {
    navigate("/Product" + "/" + item._id);
  };
  return (
    <div
      className={styles.Item}
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
      onClick={handleNavigate}
    >
      <div>
        <img src={flag ? item.images[1] : item.images[0]} alt="Not Available" />
      </div>

      <p className={styles.p1}>Bewakoof</p>
      <p className={styles.p2}>{item.title}</p>
      <div className={styles.price}>
        <p>₹{item.price}</p>
        <p>₹{item.actualPrice}</p>
      </div>
      <p className={styles.tribe}>₹419 off for Tribe Members</p>
    </div>
  );
};

export default Card;
