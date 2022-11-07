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
    let r = await axios.get(
      "https://check-lr1yrg4f5-hitesht4.vercel.app/cart",
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
    let r = await axios.post(
      "https://check-lr1yrg4f5-hitesht4.vercel.app/cart",
      { ...data, qty: 1 },
      {
        headers: {
          token: token,
        },
      }
    );
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
    let r = await axios.delete(
      `https://check-lr1yrg4f5-hitesht4.vercel.app/cart/${_id}`,
      {
        headers: {
          token: token,
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
    let r = await axios.put(
      `https://check-lr1yrg4f5-hitesht4.vercel.app/cart/${_id}`,
      { qty: qnt },
      {
        headers: {
          token: token,
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
