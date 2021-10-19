import React from "react";
import logo from './logo.png';
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title">Salary Sight</h1>
      <button><a href="https://github.com/login/oauth/authorize?client_id=03061f342b90340a4ce6">Login</a></button>
    </header>
  );
};

export default Header;