import React from "react";
import styles from "./Styles/Pay.module.css";
import Navigator from "../Components/Payement/Navigator";
import Card from "../Components/Payement/Cards";
import Table from "../Components/Payement/Table";
import Footer from "../Components/Home/Footer";
import { useSelector } from "react-redux";

const Payment = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <div className={styles.container}>
        <div>
          <h5 className={styles.Heading}>Choose your payment method</h5>
          <Navigator />
        </div>
        <div>
          <div className={styles.Header}>
            <h6 className={styles.Heading}>Items You are paying for</h6>
          </div>

          {cart.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
