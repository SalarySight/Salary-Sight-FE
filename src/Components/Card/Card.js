import "./Card.css";

const Card = ({ name, age, gender, gradYear, company, yearsExp, degree, state,
  salary, negotiate, positionTitle, typeOfEmp, locationOfEmp, jobHuntDuration }) => {
    console.log('name in card', name)
  return (
    <article className="card">
      {name ? <p className="name">Name: {name}</p> : <p className="anon-name">Name: Anonymous</p>}
      <p className="age">Age: {age}</p>
      {gender ? <p className="gender">Gender: {gender}</p> : <p>Gender: Not Specified</p>}
      <p className="company">Company: {company}</p>
      <p className="years-exp">Years of Experience: {yearsExp}</p>
      <p className="salary">${salary}</p>
      <p className="position-title">Job Title: {positionTitle}</p>
      <p className="type-of-emp">Type of Employment: </p>
      <p className="state">State: {state}</p>
      <p className="job-hunt-duration">Job Hunt Duration: {jobHuntDuration} days</p>
    </article>
  );
};

export default Card;
