import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const initialState = {
  data: [],
  single: {},
  loading: false,
  error: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return { ...state, loading: true };
    }
    case GET_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, data: [...payload], error: false };
    }
    case GET_PRODUCTS_ERROR: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
