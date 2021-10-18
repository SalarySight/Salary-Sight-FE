import React from "react";
import logo from './logo.png';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Salary Sight</h1>
    </header>
  );
};

export default Header;