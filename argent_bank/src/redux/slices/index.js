import { combineReducers } from "redux";
import sessionStorage from "redux-persist/es/storage/session";
import AuthReducer from "./auth/reducer"; // Assurez-vous que le chemin du réducteur est correct
import { persistCombineReducers } from "redux-persist";

const appReducer = combineReducers({
  Auth: AuthReducer,
  // Ajoutez d'autres réducteurs si nécessaire
});

const rootReducer = (state, action) => {
  // if (action.type === "auth/logoutUser") {
  //   sessionStorage.removeItem("authUser");
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

export default rootReducer;