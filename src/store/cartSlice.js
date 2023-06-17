// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ id, count: 1 });
      }
      state.count++;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
