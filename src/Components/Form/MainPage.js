
const MainPage = ({ toggle }) => {
   return (
      <div className="login-submit-btns">
        <button className="submit-btn" onClick={toggle}>Submit Salary</button>
        <button className="login-btn"><a href="https://github.com/login/oauth/authorize?client_id=03061f342b90340a4ce6">Login</a></button>
      </div>
   );
}

export default MainPage;
