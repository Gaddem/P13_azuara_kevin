import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin as  postLoginApi} from "../../../api/helper_backend";
import { toast } from "react-toastify";
import { setLoading } from './reducer';


export const postLogin = createAsyncThunk("auth/postLogin", async (data,{dispatch}) => {
  
    try {
      dispatch(setLoading(true));
      const response = await postLoginApi(data.formData);
      data.formData.token = response.body.token;
      sessionStorage.setItem("user",JSON.stringify(data.formData));
      data.navigate("/home");
      toast.success(response.message, { autoClose: 2000 });
      return data.formData;
    }
    catch (error) {
      toast.error("Incorrect email or password", { autoClose: 2000 });
      throw error;
    }finally{
      dispatch(setLoading(false));
    }
  });