import React from "react";
import "./../css/main.css";
import chat_img from "./../img/icon-chat.png"; // with import
import security_img from "./../img/icon-security.png";
import money_img from "./../img/icon-money.png";
import CompHeader from "../component/CompHeader";
import CompFeatureItem from "../component/CompFeatureItem";

const MainScreen = () => {
  return (
    <body>
      <CompHeader />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <CompFeatureItem
            srcImg={chat_img}
            altImg={"Chat Icon"}
            titleFeat={"You are our #1 priority"}
            descFeat={
              " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            }
          />
          <CompFeatureItem
            srcImg={money_img}
            altImg={"Money Icon"}
            titleFeat={"More savings means higher rates"}
            descFeat={
              " The more you save with us, the higher your interest rate will be!"
            }
          />
          <CompFeatureItem
            srcImg={security_img}
            altImg={"Security Icon"}
            titleFeat={"Security you can trust"}
            descFeat={
              "  We use top of the line encryption to make sure your data and money is always safe."
            }
          />
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </body>
  );
};

export default MainScreen;
