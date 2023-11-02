import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { setAuthorization } from "./helper_api";
import { useDispatch } from "react-redux";
import { useProfile } from "../hooks/useProfile";

const AuthProtected = (props) => {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      //   dispatch(logoutUser());
      //deconnexion
    }
  }, [token, userProfile, loading, dispatch]);

  /*
    Navigate is un-auth access protected routes via url
    */
  if (!userProfile && loading && !token) {
    return <Navigate to={{ pathname: "/login" }} />;
  }

  /*
    Navigate is un-auth access protected routes via url
    */
  return <>{props.children}</>;
};

export { AuthProtected };
