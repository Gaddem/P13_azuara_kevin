import { createSlice } from "@reduxjs/toolkit";
import { getProfil, postProfil } from "./thunk";

export const initialState = {
  profil: {},
  error: {},
  loader:false,
  profilSuccess: false,
};

const profilSlice = createSlice({
  name: "profil",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfil.fulfilled, (state, action) => {
      state.profilSuccess = true;
      state.profil = action.payload;
    });
    builder.addCase(getProfil.rejected, (state, action) => {
      state.profilSuccess = false;
      state.error = action.payload || "Error get profile";
    });
    builder.addCase(postProfil.fulfilled, (state, action) => {
      state.profilSuccess = true;
      state.profil = action.payload;
    });
    builder.addCase(postProfil.rejected, (state, action) => {
      state.profilSuccess = false;
      state.error = action.payload || "Error post profile";
    });
  },
});

export default profilSlice.reducer;
