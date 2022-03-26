import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSucces: (state, actions) => {
      state.isFetching = false;
      state.products = actions.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //BORRAR
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSucces: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload)
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ACTUALIZAR ALL
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSucces: (state, actions) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === actions.payload)
      ] = actions.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD NEW
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSucces: (state, actions) => {
      state.isFetching = false;
      state.products.push(actions.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getProductFailure,
  getProductStart,
  getProductSucces,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSucces,
  updateProductFailure,
  updateProductStart,
  updateProductSucces,
  addProductFailure,
  addProductStart,
  addProductSucces,
} = productSlice.actions;
export default productSlice.reducer;
