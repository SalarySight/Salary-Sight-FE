import "./SalaryCards.css";
import Card from '../Card/Card'

const SalaryCards = ({ data }) => {
// console.log('data', data)
// if (!filteredData) console.log('PICKLE', filteredData)
// else console.log('IT WORKED', filteredData)

  const salaryCards = data.map(post => {
    const newSalary = post.salary.toLocaleString('en-US')
    return (
        <Card
          key={post.id}
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
