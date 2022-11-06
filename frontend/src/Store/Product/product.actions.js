import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";
import axios from "axios";

export const getDataApi = (url) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LOADING,
  });
  try {
    let r = await axios.get(url);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: r.data,
    });
    console.log(r.data);
    return r.data;
  } catch (e) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
    });
  }
};
