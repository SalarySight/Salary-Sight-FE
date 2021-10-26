import "./Card.css";

const Card = ({ name, age, gender, gradYear, company, yearsExp, degree, state,
  salary, negotiate, positionTitle, typeOfEmp, locationOfEmp, jobHuntDuration, program, firstPosition }) => {
  return (
    <article className="card">
      {name ? <p className="name"><b>Name:</b> {name}</p> : <p className="name"><b>Name:</b> Anonymous</p>}
      <p className="gender"><b>Gender Identity:</b> {gender}</p>
      <p className="program"><b>Program:</b> {program}</p>
      <p className="age"><b>Age:</b> {age}</p>
      <p className="salary"><b>Salary:</b> ${salary}</p>
      <p className="company"><b>Company:</b> {company}</p>
      <p className="years-exp"><b>Years of Experience:</b> {yearsExp}</p>
      <p className="position-title"><b>Job Title:</b> {positionTitle}</p>
      <p className="type-of-emp"><b>Type of Employment:</b> {typeOfEmp}</p>
      <p className="state"><b>State:</b> {state}</p>
      <p className="job-hunt-duration"><b>Job Hunt Duration:</b> {jobHuntDuration} days</p>
    </article>
  );
};

export default Card;
