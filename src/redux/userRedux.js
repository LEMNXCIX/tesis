import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    message: null,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.message = "Se ha iniciado sesion :)"
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.message ="Ha ocuurido un error :("
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.message = "Se ha cerrado sesion :/"
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
