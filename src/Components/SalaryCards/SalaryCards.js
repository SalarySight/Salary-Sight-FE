import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {

  const salaryCards = data.posts.map(post => {
    return (
        <Card
          salary={post.salary}
          gender={post.gender}
          jobHuntDuration={post.jobHuntDuration}
        />
      );
  });
  return (
    <section className="salary-cards-container">
     {salaryCards}
    </section>
  );
};

export default SalaryCards;
