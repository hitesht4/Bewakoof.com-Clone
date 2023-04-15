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
    email: "",
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
      localStorage.setItem("token", payload.Token);
      localStorage.setItem("Email", payload.Email);

      return {
        ...state,
        loading: false,
        Alert: false,
        data: {
          token: payload.Token,
          isAuthenticated: true,
          email: payload.Email,
        },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return { ...state, error: true, loading: false, Alert: true };
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("Email");
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
