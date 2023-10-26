import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../img/argentBankLogo.png"; // with import
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => ({
  //   user: state.Auth.user,
  // }));

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
              {/* to="/profil" */}

    

  };

  return (
    <body>
      <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link class="main-nav-item" to="/login">
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <button type="submit" class="sign-in-button">
              Sign In
            </button>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!--  */}
            {/* <button class="sign-in-button">Sign In</button>    */}
            {/* -->
          <!--  --> */}
          </form>
        </section>
      </main>
      <footer class="footer">
        <p class="footer-text">Copyright 2020 Argent Bank</p>
      </footer>

      <script></script>
    </body>
  );
};

export default LoginScreen;
