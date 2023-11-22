import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfil as getProfilApi,postProfil as postProfilApi } from "../../../api/helper_backend";
import { toast } from "react-toastify";

export const getProfil = createAsyncThunk(
  "profil/getProfil",
  async () => {
    try {
      const response = await getProfilApi();
      console.log(response.body)
      return response.body;
    } catch (error) {
      toast.error("Error get profil", { autoClose: 2000 });
      throw error;
    }
  }
);

export const postProfil = createAsyncThunk(
  "profil/postProfil",
  async (data) => {
    try {
      console.log("data",data)
      const response = await postProfilApi(data);
      toast.success("Profile updated", { autoClose: 2000 });
      return response.body;
    } catch (error) {
      toast.error("Error post profil", { autoClose: 2000 });
      throw error;
    }
  }
);


