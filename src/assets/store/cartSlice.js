import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    // ADD ITEM TO CART
    add(state, action) {
      const newItem = action.payload;

      state.totalQuantity++;

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          thumbnail: newItem.thumbnail // store image here
        });
      }
    },

    // REMOVE ITEM FROM CART
    remove(state, action) {
      const id = action.payload;

      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.items = state.items.filter(item => item.id !== id);
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
