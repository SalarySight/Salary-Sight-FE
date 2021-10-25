import './Mainpage.css'

const MainPage = ({ toggle, match }) => {

   return (
      <div className="login-submit-btns">
        {match.params.githubName === undefined ?
          <section className='login-submit-sec'>
            <h4 className='please-login'>Please login to submit salary data</h4>
            <button className="submit-btn" disabled>Submit Salary</button>
            <button className="login-btn"><a href="https://github.com/login/oauth/authorize?client_id=03061f342b90340a4ce6">Login</a></button>
          </section> :
          <button className="submit-btn" onClick={toggle}>Submit Salary</button>}
      </div>
   );
}

export default MainPage;
  
