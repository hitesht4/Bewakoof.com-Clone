import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Table.module.css";
import Modals from "../Payement/Modal";

const Table = () => {
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const handleTotal = () => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty,
        0
      )
    );
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(true);
  };
  useEffect(() => {
    handleTotal();
  }, [cart]);

  return (
    <div>
      <Modals show={show} handleClose={handleClose} />
      <table className={styles.Table}>
        <thead>
          <tr>
            <td>PRICE SUMMARY</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total MRP (Incl. of taxes) </td>
            <td>₹ 2198</td>
          </tr>
          <tr>
            <td>Shipping Charges </td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Bag Discount </td>
            <td>- ₹1420</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>Total</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.Move}>
        <div>TOTAL RS.{total}</div>
        <div>
          <button
            disabled={cart.length === 0 ? true : false}
            onClick={handleClick}
            style={{ backgroundColor: cart.length === 0 ? "grey" : "" }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
