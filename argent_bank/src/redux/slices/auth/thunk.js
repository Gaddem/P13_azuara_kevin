import { createAsyncThunk } from "@reduxjs/toolkit";

import { postLogin as  postLoginApi} from "../../../api/helper_backend";
import { toast } from "react-toastify";
import { setLoading } from './reducer';

export const postLogin = createAsyncThunk("auth/postLogin", async (data,{ dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await postLoginApi(data);
      data.token = response.body.token;
      sessionStorage.setItem("user",JSON.stringify(data));
      toast.success(response.message, { autoClose: 2000 });
      return data;
    }
    catch (error) {
      console.log(error)
      dispatch(setLoading(false));
      toast.error("Incorrect email or password", { autoClose: 2000 });
      return error;
    }finally{
      dispatch(setLoading(false));
    }
  });