// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem); // Add the new item to the cart items
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
