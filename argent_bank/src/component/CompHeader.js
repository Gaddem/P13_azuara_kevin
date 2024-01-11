import React from "react";
import logo from "./../img/argentBankLogo.png"; // with import
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/auth/reducer";
import { useProfile } from "../hooks/useProfile";

const CompHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profiler = useProfile()
  const { profil } = useSelector((state) => ({
    profil: state.Profil.profil,
  }));
  
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={profiler?.userProfile?.token?"/home":"/"}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!profiler?.loading && profiler?.userProfile?.token ? (
          <>
            <Link to={"/profil"} className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {profil?.firstName}
            </Link>
            <Link
              onClick={() => {
                dispatch(logout()).then(() => {
                  navigate("/home");
                });
              }}
              className="main-nav-item"
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default CompHeader;
