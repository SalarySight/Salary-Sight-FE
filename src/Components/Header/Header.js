import logo from './logo.png';
import "./Header.css";
import { Link } from "react-router-dom";


const Header = ({ username }) => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Salary Sight</h1>
        {username && <p>{username.params.githubName}</p>}
      </div>

    </header>
  );
};

export default Header;
