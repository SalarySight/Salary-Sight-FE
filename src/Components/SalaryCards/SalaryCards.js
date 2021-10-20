import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {

  const salaryCards = data.posts.map(post => {
    const newSalary = post.salary.toLocaleString('en-US')
    return (
        <Card
          salary={newSalary}
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
