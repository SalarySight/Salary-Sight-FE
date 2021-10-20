import "./Card.css";

const Card = ({ salary, gender, jobHuntDuration }) => {
  return (
    <article className="card">
      <p>Salary: {salary}</p>
      <p>Gender: {gender}</p>
      <p>Job Hunt Duration: {jobHuntDuration}</p>
    </article>
  );
};

export default Card;
