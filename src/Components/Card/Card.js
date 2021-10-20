import "./Card.css";

const Card = ({ name, age, gender, yearGraduated, program, yearsExp, degree, state,
  salary, negotiate, title, typeOfEmp, locationOfEmp, jobHuntDuration }) => {
  console.log(gender)
  return (
    <article className="card">
      <p className="name">Name:</p>
      <p className="age">Age: </p>
      <p className="gender">Gender: {gender}</p>
      <p className="year-graduated">Year Graduated: </p>
      <p className="program">Program: </p>
      <p className="years-exp">Years of Experience: </p>
      <p className="degree">Type of Degree: </p>
      <p className="salary">${salary}</p>
      <p className="negotiate">Did you negotiate? </p>
      <p className="title">Job Title: </p>
      <p className="type-of-emp">Type of Employment: </p>
      <p className="location-of-emp">Location of Employment: </p>
      <p className="job-hunt-duration">Job Hunt Duration: {jobHuntDuration} days</p>
    </article>
  );
};

export default Card;
