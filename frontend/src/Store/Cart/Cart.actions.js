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
    let r = await axios.get("http://localhost:5000/cart", {
      headers: {
        token: token,
      },
    });
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
      "http://localhost:5000/cart",
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
    let r = await axios.delete(`http://localhost:5000/cart/${_id}`, {
      headers: {
        token: token,
      },
    });

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
      `http://localhost:5000/cart/${_id}`,
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
