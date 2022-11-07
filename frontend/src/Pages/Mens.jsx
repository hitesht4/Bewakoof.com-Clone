import React from "react";
import { useEffect } from "react";
import Card from "../Components/Mens/Card";
import Dropdown from "../Components/Mens/Dropdown";
import styles from "../Components/Mens/styles/card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../Store/Product/product.actions";
import Banner from "../Components/Mens/Banner";
import { Circles } from "react-loader-spinner";
import Footer from "../Components/Home/Footer";

const Mens = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://check-lr1yrg4f5-hitesht4.vercel.app/prod/mens";
    dispatch(getDataApi(url));
  }, []);
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Circles
          height="650"
          width="150"
          color="#f6d951"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <Banner
        src={
          "https://images.bewakoof.com/uploads/category/desktop/INSIDE-BANNER_DESKTOP_FREEBIE-1667395627.jpg"
        }
      />

      <div className={styles.Box}>
        <div className={styles.Drops}>
          <Dropdown />
        </div>
        <div className={styles.container}>
          {data.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mens;
