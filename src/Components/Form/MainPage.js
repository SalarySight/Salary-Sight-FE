import { useState } from 'react';

const MainPage = ({ toggle, match }) => {

   return (
      <div className="login-submit-btns">
      {match.params.githubName === undefined ? <button className="submit-btn" disabled>Submit Salary</button> :
        <button className="submit-btn" onClick={toggle}>Submit Salary</button>}
        <button className="login-btn"><a href="https://github.com/login/oauth/authorize?client_id=03061f342b90340a4ce6">Login</a></button>
      </div>
   );
}

export default MainPage;
