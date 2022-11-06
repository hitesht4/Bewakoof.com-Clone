import React, { useEffect } from "react";
import styles from "./styles/div.module.css";
import { BsHeart, BsBagCheck } from "react-icons/bs";
import Accordions from "./Accordion";
import Footer from "../Home/Footer";
import { useState } from "react";
import { AddtoCartApi, deleteCartApi } from "../../Store/Cart/Cart.actions";
import { useDispatch, useSelector } from "react-redux";

const Sizes = ["S", "M", "L", "XL", "XXL", "3XL"];

const Details = ({ item }) => {
  const [number, setNumber] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.One}>
          {item.images.map((source, index) => (
            <div key={index}>
              <img src={source} alt="" onClick={() => setNumber(index)} />
            </div>
          ))}
        </div>

        <div className={styles.Two}>
          <img src={item.images[number]} alt="Not Available" />
        </div>

        <div className={styles.Three}>
          <h6>Bewakoof</h6>
          <p>{item.title}</p>
          <div className={styles.Rate}>
            <p>
              {item.ratings}
              <span style={{ color: "gold", fontSize: "20px" }}>★</span>
            </p>
          </div>
          <div className={styles.Price}>
            <p>₹{item.price}</p>
            <p>₹{item.actualPrice}</p>
            <p>{item.off} OFF</p>
          </div>
          <p className={styles.Taxes}>Inclusive of all taxes</p>
          <div className={styles.Tribe}>
            <p>
              TriBe members get an extra discount of ₹30 and FREE shipping.
              <span>Learn more</span>
            </p>
          </div>
          <div>
            <div className={styles.Flex}>
              <p>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className={styles.Sizes}>
              {Sizes.map((size, index) => (
                <div key={index}>{size}</div>
              ))}
            </div>
          </div>

          <div className={styles.Btns}>
            {cart.some((p) => p._id === item._id) ? (
              <button
                onClick={() => dispatch(deleteCartApi(item._id))}
                style={{ backgroundColor: "red", color: "white" }}
              >
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
                Remove Item
              </button>
            ) : (
              <button
                onClick={() => dispatch(AddtoCartApi(item))}
                disabled={isAuthenticated ? false : true}
              >
                Add to cart
                <BsBagCheck
                  style={{ fontWeight: "Bolder", fontSize: "18px" }}
                />
              </button>
            )}

            <button className={styles.Wishlist}>
              <BsHeart />
              WISHLIST
            </button>
          </div>

          <div>
            <Accordions label={"SAVE EXTRA WITH 3 OFFERS"} />
            <Accordions label={"PRODUCT DESCRIPTION"} />
            <Accordions label={"15 DAY RETURNS & EXCHANGE"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
