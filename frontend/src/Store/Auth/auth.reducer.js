import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from "./auth.types";

const token = localStorage.getItem("token") || "";

export const authInitalState = {
  loading: false,
  data: {
    token: token,
    isAuthenticated: token.length > 0 ? true : false,
  },
  error: false,
  Alert: false,
};

export const Authreducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return { ...state, loading: true };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        loading: false,
        Alert: false,
        data: {
          token: payload,
          isAuthenticated: true,
        },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return { ...state, error: true, loading: false, Alert: true };
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        data: {
          isAuthenticated: false,
          token: "",
        },
      };
    }
    default: {
      return state;
    }
  }
};
