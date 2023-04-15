import axios from "axios";
import {
  ADD_TO_CART,
  GET_CART_Items,
  CHANGE_CART_QTY,
  REMOVE_FROM_CART,
  CART_LOADING,
  CART_ERROR,
} from "./Cart.types";

const token = localStorage.getItem("token");

export const getCartApi = () => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });
  try {
    let email = localStorage.getItem("Email");
    let r = await axios.get(
      `https://backend-weld-two.vercel.app/cart/${email}`,
      {
        headers: {
          token: token,
        },
      }
    );
    dispatch({
      type: GET_CART_Items,
      payload: r.data,
    });
  } catch (e) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

export const AddtoCartApi = (data) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });
  try {
    let email = localStorage.getItem("Email");
    let r = await axios.post("https://backend-weld-two.vercel.app/cart", {
      ...data,
      qty: 1,
      user: email,
    });

    console.log(r);
    dispatch({
      type: ADD_TO_CART,
      payload: r.data.item,
    });
  } catch (e) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

export const deleteCartApi = (_id) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });
  try {
    const email = localStorage.getItem("Email");
    let r = await axios.delete(
      `https://backend-weld-two.vercel.app/cart/${_id}`,
      {
        headers: {
          email: email,
        },
      }
    );

    console.log(r.data);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: _id,
    });
  } catch (e) {
    dispatch({
      type: CART_ERROR,
    });
  }
};

export const changeCart = (_id, qnt) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });
  try {
    const email = localStorage.getItem("Email");
    let r = await axios.put(
      `https://backend-weld-two.vercel.app/cart/${_id}`,
      { qty: qnt },
      {
        headers: {
          email: email,
        },
      }
    );

    dispatch({
      type: CHANGE_CART_QTY,
      payload: r.data.item,
    });
  } catch (e) {
    dispatch({
      type: CART_ERROR,
    });
  }
};
