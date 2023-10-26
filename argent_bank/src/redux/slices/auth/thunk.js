import { createAsyncThunk } from "@reduxjs/toolkit";

import { postLogin as  postLoginApi} from "../../../api/helper_backend";

export const postLogin = createAsyncThunk("auth/postLogin", async (data) => {
    try {
      const response = await postLoginApi(data);
      return response;
    }
    catch (error) {
    //   console.log("error createUpdateSalary",error)
    //   toast.error("Salary Post Failed", { autoClose: 3000 });
      return error;
    }
  });