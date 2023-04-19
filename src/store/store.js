// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cartSlice reducer to the store
  },
});

export default store;
