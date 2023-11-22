import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProfil, postLogin } from "../redux/slices/thunks";
import CompLoader from "../component/CompLoader";
import CompHeader from "../component/CompHeader";
import CompFooter from "../component/CompFooter";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loader } = useSelector((state) => ({
    loader: state.Auth.loader,
  }));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.dismiss();
    if(formData?.email?.trim()?.length < 1 || formData?.password?.trim()?.length < 1){
      toast.error("Please enter an username and password", { autoClose: 2000 });
      return;
    }
    dispatch(postLogin({formData,navigate})).then(()=>{
      dispatch(getProfil())
    })
  };

  return (
    <body>
      <CompHeader />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label id="email">Username</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <label id="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label id="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <button disabled={loader} type="submit" className="sign-in-button">
              {!loader ?"Sign In":(
              <CompLoader />
              )} 
            </button>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!--  */}
            {/* <button className="sign-in-button">Sign In</button>    */}
            {/* -->
          <!--  --> */}
          </form>
        </section>
      </main>
      <CompFooter/>

      <script></script>
    </body>
  );
};

export default LoginScreen;
