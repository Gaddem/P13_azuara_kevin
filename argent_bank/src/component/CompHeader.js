import React from 'react'
import logo from "./../img/argentBankLogo.png"; // with import
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/auth/reducer';

const CompHeader = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <Link className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Tony
      </Link>
      <Link onClick={()=>{dispatch(logout()).then(()=>{navigate("/profil")})}} className="main-nav-item" >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  </nav>
  )
}

export default CompHeader