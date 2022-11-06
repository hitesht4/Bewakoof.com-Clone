import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Auth/auth.reducer";
import { CartReducer } from "./Cart/Cart.reducer";
import { productReducer } from "./Product/product.reducer";

const rootReducer = combineReducers({
  data: productReducer,
  auth: Authreducer,
  cart: CartReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
