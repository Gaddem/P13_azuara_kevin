import { createSlice } from "@reduxjs/toolkit";
// import {  } from "./thunk";

export const initialState = {
  user: {},
  error: {},
  authSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    // builder.addCase((() => {}).fulfilled, (state, action) => {
    //   state.authSuccess = true;
    //   state.user = action.payload.data;
    // });
    // builder.addCase((() => {}).rejected, (state, action) => {
    //   state.authSuccess = false;
    //   state.error = action.payload || "Erreur lors de la recupération !";
    // });
  },
});

export default authSlice.reducer;
