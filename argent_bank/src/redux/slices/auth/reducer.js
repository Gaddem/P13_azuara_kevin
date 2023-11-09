import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./thunk";

export const initialState = {
  user: {},
  error: {},
  loader:false,
  authSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Add reducer to manage loading state
    setLoading: (state, action) => {
      state.loader = action.payload;
    },

    logout: (state) => {
      state.user = {};
      sessionStorage.removeItem("user");
    },
    // other reducers
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.authSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.authSuccess = false;
      state.error = action.payload || "Erreur lors de la recupération !";
    });
  },
});

export const { setLoading,logout } = authSlice.actions;
export default authSlice.reducer;
