import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Allcards from "../Components/Cart/Allcards";
import Card from "../Components/Cart/Card";
import Other2 from "../Components/Cart/Other2";
import Others from "../Components/Cart/Others";
import Table from "../Components/Cart/Table";
import Tribe from "../Components/Cart/Tribe";
import Footer from "../Components/Home/Footer";
import { Circles } from "react-loader-spinner";
import { getCartApi } from "../Store/Cart/Cart.actions";
import styles from "./Styles/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth.data);

  useEffect(() => {
    dispatch(getCartApi());
  }, []);

  if (loading) {
    return (
      <div className={styles.Loader}>
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
      <div className={styles.Loader}>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.single}>
          <Others />
          <Other2 />
          <Allcards />
        </div>
        <div className={styles.double}>
          <Tribe />
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
