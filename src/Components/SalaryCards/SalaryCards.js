import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {

  const salaryCards = data.map(post => {
    const newSalary = post.salary.toLocaleString('en-US')
    return (
        <Card
          name={post.name}
          age={post.age}
          gender={post.gender}
          yearGraduated={post.yearGraduated}
          program={post.program}
          yearsExp={post.yearsExp}
          degree={post.degree}
          state={post.state}
          salary={newSalary}
          negotiate={post.negotiate}
          title={post.positionTitle}
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
