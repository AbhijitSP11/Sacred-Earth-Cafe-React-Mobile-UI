// currentOrderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const currentOrderSlice = createSlice({
  name: "currentOrder",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToOrder: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ id, title, price, count: 1 });
      }
    },
  },
});

export const { addItemToOrder } = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
    