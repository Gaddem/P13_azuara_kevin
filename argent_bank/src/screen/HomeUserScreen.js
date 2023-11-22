import React from "react";
import CompHeader from "../component/CompHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompTransItem from "../component/CompTransItem";

const HomeUserScreen = () => {
  const { profil } = useSelector((state) => ({
    profil: state.Profil.profil,
  }));

  const navigate = useNavigate();
  return (
    <body>
      <CompHeader />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {profil?.firstName + " " + profil?.lastName} !
          </h1>
          <button
            onClick={() => {
              navigate("/profil");
            }}
            className="edit-button"
          >
            Edit Name
          </button>
        </div>
        <CompTransItem
          title={"Argent Bank Checking (x8349)"}
          amount={"2,082.79"}
          balanceType={"Available Balance"}
        />
        <CompTransItem
          title={"Argent Bank Savings (x6712)"}
          amount={"10,928.42"}
          balanceType={"Available Balance"}
        />
        <CompTransItem
          title={"Argent Bank Credit Card (x8349)"}
          amount={"184.30"}
          balanceType={"Current Balance"}
        />
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </body>
  );
};

export default HomeUserScreen;
