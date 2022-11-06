import React from "react";
import { useDispatch } from "react-redux";
import { changeCart, deleteCartApi } from "../../Store/Cart/Cart.actions";
import styles from "./styles/Card.module.css";

const Card = ({ Item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCartApi(Item._id));
  };
  const handleChange = (e) => {
    dispatch(changeCart(Item._id, Number(e.target.value)));
  };
  return (
    <div className={styles.Cont}>
      <div className={styles.container}>
        <div className={styles.One}>
          <p className={styles.title}>{Item.title}</p>

          <div className={styles.Price}>
            <p>₹{Item.price.toString()}</p>
            <p>₹{Item.actualPrice.toString()}</p>
          </div>

          <p className={styles.green}>
            You Saved ₹ {Number(Item.actualPrice) - Number(Item.price)}
          </p>

          <div className={styles.Select}>
            <select name="Sizes" id="">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">2XL</option>
              <option value="">3XL</option>
            </select>
            <select
              value={Item.qty.toString()}
              name=""
              id=""
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className={styles.Two}>
          <img src={Item.images[0]} alt="" />
        </div>
      </div>
      <div className={styles.Options}>
        <button onClick={handleDelete}>REMOVE</button>
        <button>MOVE TO WISHLIST</button>
      </div>
    </div>
  );
};

export default Card;
