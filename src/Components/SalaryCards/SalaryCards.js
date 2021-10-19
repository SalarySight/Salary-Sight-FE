import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {
  console.log('fetched data', data)

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
    <section className="salaryCardsContainer">
     {salaryCards}
    </section>
  );
};

export default SalaryCards;
