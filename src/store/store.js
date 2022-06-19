import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/CartButton/cartButtonSlice";
import spinnerReducer from "../features/Shared/Spinner/spinnerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    spinner: spinnerReducer,
  },
});
