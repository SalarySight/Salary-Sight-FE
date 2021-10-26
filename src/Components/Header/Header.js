import logo from './logo.png';
import "./Header.css";

const Header = ({ match }) => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Salary Sight</h1>
      </div>
      <div className="greeting">
      {match.params.githubName !== undefined && <h4 className="username">👋 {match.params.githubName}!</h4>}
      </div>
    </header>
  );
};

export default Header;
