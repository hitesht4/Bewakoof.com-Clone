import React from "react";
import {
  AiFillCreditCard,
  AiFillWallet,
  AiFillDollarCircle,
  AiFillIdcard,
} from "react-icons/ai";
import { GiCroissantsPupil } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import CardNo from "./CardNo";
import styles from "./styles/nav.module.css";

const Navigator = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.container}>
        <div>
          <AiFillCreditCard />
          Credit Card/DebitCard
        </div>
        <div>
          <AiFillWallet />
          Wallet
        </div>
        <div>
          <GiCroissantsPupil />
          UPI
        </div>
        <div>
          <RiBuilding2Fill />
          Net bankingx
        </div>
        <div>
          <AiFillDollarCircle />
          Cash On Deliveryx
        </div>
        <div>
          <AiFillIdcard />
          Buy Now Pay Laterx
        </div>
      </div>
      <div className={styles.container2}>
        <CardNo />
      </div>
    </div>
  );
};

export default Navigator;
