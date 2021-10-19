import "./Card.css";

const Card = ({ salary, gender, jobHuntDuration }) => {
  return (
    <article className="card">
      <p>{salary}</p>
      <p>{gender}</p>
      <p>{jobHuntDuration}</p>
    </article>
  );
};

export default Card;
