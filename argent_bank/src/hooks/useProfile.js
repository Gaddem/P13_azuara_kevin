import { useEffect, useState } from "react";
import { getLoggedinUser } from "../api/helper_api";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  let token = userProfileSession && userProfileSession["token"];
  const [loading, setLoading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(userProfileSession ? userProfileSession : null);

  useEffect(() => {
    const userProfileSession = getLoggedinUser();
    let token = userProfileSession && userProfileSession["token"];
    setUserProfile(userProfileSession ? userProfileSession : null);
    setLoading(token ? false : true);
  }, []);


  return { userProfile, loading, token };
};

export { useProfile };