import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Table.module.css";

const Table = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((state) => state.cart);

  const handleTotal = () => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty,
        0
      )
    );
  };

  useEffect(() => {
    handleTotal();
  }, [cart]);
  return (
    <div>
      <table className={styles.Table}>
        <thead>
          <tr>
            <td>PRICE SUMMARY</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Items</td>
            <td>{cart.length}</td>
          </tr>
          <tr>
            <td>Shipping Charges </td>
            <td className={styles.green}>FREE</td>
          </tr>
          <tr className={styles.bolder}>
            <td>TOTAL Amount</td>
            <td>RS.{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
