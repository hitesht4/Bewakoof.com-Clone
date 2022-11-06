import {
  GET_CART_Items,
  ADD_TO_CART,
  CHANGE_CART_QTY,
  REMOVE_FROM_CART,
  CART_LOADING,
  CART_ERROR,
} from "./Cart.types";

const initialState = {
  cart: [],
  loading: false,
  error: false,
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_LOADING: {
      return { ...state, loading: true };
    }
    case CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case GET_CART_Items: {
      return { ...state, loading: false, cart: [...payload], error: false };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, payload],
        loading: false,
        error: false,
      };
    }
    case REMOVE_FROM_CART: {
      let filtered = state.cart.filter((item) => {
        return item._id != payload;
      });
      return {
        ...state,
        cart: [...filtered],
        loading: false,
        error: false,
      };
    }
    case CHANGE_CART_QTY: {
      let updated = state.cart.map((item) => {
        if (item._id == payload._id) {
          return { ...item, ...payload };
        } else {
          return item;
        }
      });
      return { ...state, cart: [...updated], loading: false, error: false };
    }
    default: {
      return state;
    }
  }
};
