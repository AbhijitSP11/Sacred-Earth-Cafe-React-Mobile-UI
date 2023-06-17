// store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import currentOrderReducer from "./currentOrderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    currentOrder: currentOrderReducer, 
  },
});

export default store;
