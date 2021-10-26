import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {

  const salaryCards = data.map(post => {
    return (
        <Card
          key={post.id}
          name={post.username}
          gender={post.gender}
          program={post.program}
          age={post.age}
          salary={post.salary}
          gradYear={post.gradYear}
          company={post.company}
          yearsExp={post.yearsOfExperience}
          degree={post.degree}
          state={post.state}
          negotiate={post.negotiation}
          positionTitle={post.positionTitle}
          typeOfEmp={post.typeOfEmployment}
          locationOfEmp={post.locationOfEmployment}
          jobHuntDuration={post.jobHuntDuration}
          firstPosition={post.firstPosition}
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
