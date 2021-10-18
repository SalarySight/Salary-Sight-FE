import React from "react";
import logo from './logo.png';
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Salary Sight</h1>
      <button>Login</button>
    </header>
  );
};

export default Header;