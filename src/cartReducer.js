import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
