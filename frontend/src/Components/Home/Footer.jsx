import React from "react";
import Footer2 from "./Footer2";
import styles from "./styles/Footer.module.css";
import scrn from "../../Assets/scr.png";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import { BsApple, BsSnapchat, BsCash } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div>
          <ul>
            <li>CUSTOMER SERVICE</li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return Order</li>
            <li>Cancel Order</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>COMPANY</li>
            <li>About Us</li>
            <li>We're Hiring</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>CONNECT WITH US</li>
            <li>
              <RiFacebookBoxLine
                style={{ fontSize: "25px", marginRight: "3px" }}
              />
              4.7M People Like this
            </li>
            <li>
              {" "}
              <RiInstagramLine
                style={{ fontSize: "25px", marginRight: "3px" }}
              />
              1M Followers
            </li>
            <div className={styles.flex3}>
              <FiTwitter
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
              <ImPinterest2
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
              <BsSnapchat
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
              <BsApple
                style={{ fontSize: "19px", marginRight: "3px", color: "white" }}
              />
            </div>
          </ul>
        </div>
        <div className={styles.Formm}>
          <ul>
            <li>KEEP UP TO DATE</li>
            <div className={styles.form}>
              <input
                type="text"
                className={styles.input}
                placeholder={"Enter Your Email"}
              />
              <button className={styles.btn}>Subsribe</button>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.container2}>
        <div>
          <p>
            {" "}
            <GiReturnArrow style={{ fontSize: "18px", marginRight: "20px" }} />
            15 Days return policy*
          </p>
          <p>
            <BsCash style={{ fontSize: "18px", marginRight: "20px" }} /> Cash on
            delivery*
          </p>
        </div>
        <div className={styles.Playstore}>
          <li>DOWNLOAD THE APP</li>
          <div className={styles.flex}>
            <img
              src="https://images.bewakoof.com/web/app_android_v1.png"
              alt=""
            />
            <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
          </div>
        </div>
        <div className={styles.Links}>
          <li
            style={{ color: "#fdd835", fontSize: "16px", marginBottom: "10px" }}
          >
            100% SECURE PAYMENT
          </li>
          <img src={scrn} alt="" />
        </div>
        <div className={styles.Noneee}></div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer;
