import React from "react";
import styles from "./styles/Others.module.css";

const Tribe = () => {
  return (
    <div className={styles.Boxes}>
      <div className={styles.Tribe}>
        <li>
          Save extra <span>₹30</span>with TriBe
        </li>
      </div>
      <div className={styles.Tribe2}>
        <li>
          Whistles! Get extra 10% Cashback on prepaid orders above Rs.699.
          Coupon code - OOF10.
        </li>
      </div>
      <div className={styles.Coupon}>
        <li>Have a Coupon / Referral / Gift Card ? Redeem</li>
        <button>Reedeem</button>
      </div>
    </div>
  );
};

export default Tribe;
