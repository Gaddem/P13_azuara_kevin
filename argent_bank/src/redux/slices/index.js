import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer"; 
import ProfilReducer from "./profil/reducer"; 

const appReducer = combineReducers({
  Auth: AuthReducer,
  Profil: ProfilReducer,

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