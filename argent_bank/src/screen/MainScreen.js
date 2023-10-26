import React from "react";
import { Link } from "react-router-dom";
import "./../css/main.css";
import chat_img from "./../img/icon-chat.png"; // with import
import security_img from "./../img/icon-security.png";
import money_img from "./../img/icon-money.png";
import logo from "./../img/argentBankLogo.png"; // with import

const MainScreen = () => {
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
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <div class="feature-item">
            <img src={chat_img} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div class="feature-item">
            <img src={money_img} alt="Money Icon" class="feature-icon" />
            <h3 class="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div class="feature-item">
            <img src={security_img} alt="Security Icon" class="feature-icon" />
            <h3 class="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <footer class="footer">
        <p class="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </body>
  );
};

export default MainScreen;
