import React from "react";
import logo from './logo.png';
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Salary Sight</h1>
      </div>

    </header>
  );
};

export default Header;
// 
// <div className='btn-div'>
// <button className="login-btn"><a href="https://github.com/login/oauth/authorize?client_id=03061f342b90340a4ce6">Login</a></button>
// </div>
