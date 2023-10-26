import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./thunk";

export const initialState = {
  user: {
    username: "",
    password: "",
  },
  error: {},
  authSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.authSuccess = true;
      state.user = action.payload.data;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.authSuccess = false;
      state.error = action.payload || "Erreur lors de la recupération !";
    });
  },
});

export default authSlice.reducer;
