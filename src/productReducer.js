import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "mobile",
      description: "4gb ram and 128gb internal",
      price: "4500",
    },
    {
      id: 2,
      name: "laptop",
      description: "14 Inch display,256gb HDD",
      price: "4500",
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});
export const { addProduct, updateProduct,deleteProduct } = productSlice.actions;
export default productSlice.reducer;
