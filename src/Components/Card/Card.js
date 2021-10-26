import "./Card.css";

const Card = ({ name, age, gender, gradYear, company, yearsExp, degree, state,
  salary, negotiate, positionTitle, typeOfEmp, locationOfEmp, jobHuntDuration, program, firstPosition }) => {
  return (
    <article className="card">
      {name ? <p className="name card-info"><b>Name:</b> {name}</p> : <p className="name card-info"><b>Name:</b> Anonymous</p>}
      <p className="gender card-info"><b>Gender Identity:</b><br/>{gender}</p>
      <p className="program card-info"><b>Program:</b> {program}</p>
      <p className="age card-info"><b>Age:</b> {age}</p>
      <p className="salary-num card-info"><b>Salary:</b> ${salary}</p>
      {company ? <p className="company card-info"><b>Company:</b> {company}</p> : <p className="company card-info"><b>Company:</b> Not Specifed</p>}
      <p className="years-exp card-info"><b>Years of Experience:</b> {yearsExp}</p>
      <p className="position-title card-info"><b>Job Title:</b> {positionTitle}</p>
      <p className="type-of-emp card-info"><b>Type of Employment:</b> {typeOfEmp}</p>
      <p className="state card-info"><b>State:</b> {state}</p>
      <p className="job-hunt-duration card-info"><b>Job Hunt Duration:</b> {jobHuntDuration} days</p>
    </article>
  );
};

export default Card;
