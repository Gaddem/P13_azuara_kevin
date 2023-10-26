import { combineReducers } from "redux";
import sessionStorage from "redux-persist/es/storage/session";
import AuthReducer from "./auth/reducer";


const appReducer = combineReducers({
  Auth: AuthReducer,

});

const rootReducer = (state, action) => {
  if (action.type === "auth/logoutUser") {
    console.log("logout");
    sessionStorage.removeItem("authUser");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
