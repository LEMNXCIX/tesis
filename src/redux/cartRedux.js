import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cantidad: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cantidad += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.cantidad;
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
