import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
} from "./auth.types";

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({
    type: AUTH_SIGN_IN_LOADING,
  });
  try {
    let response = await axios.post("http://localhost:5000/user/login", creds);
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: response.data.Token,
    });
    window.location.reload();

    return response.data.message;
  } catch (e) {
    dispatch({
      type: AUTH_SIGN_IN_ERROR,
    });
  }
};

// export const logout = () => (dispatch) => {};
