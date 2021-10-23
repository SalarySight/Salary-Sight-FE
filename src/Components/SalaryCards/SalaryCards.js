import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {

  const salaryCards = data.map(post => {
    const newSalary = post.salary.toLocaleString('en-US')
    console.log('salarycard name', post.username)
    return (
        <Card
          name={post.username}
          age={post.age}
          gender={post.gender}
          gradYear={post.gradYear}
          company={post.company}
          yearsExp={post.yearsOfExperience}
          degree={post.degree}
          state={post.state}
          salary={newSalary}
          negotiate={post.negotiation}
          positionTitle={post.positionTitle}
          typeOfEmp={post.typeOfEmployment}
          locationOfEmp={post.locationOfEmployment}
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
