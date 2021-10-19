import { useState } from 'react'
import SalaryCards from "./Components/SalaryCards/SalaryCards";
// import { salaryData } from './HardSalaryData'
import {
  useQuery,
  gql
} from "@apollo/client";

const GET_POSTS = gql`
    query {
      posts {
        id
        company
        salary
        previousEducation
        devTitle
        state
        jobHuntDuration
        gender
        age
        yearsOfExperience
      }
    }
`;

function APICalls() {
  const { loading, error, data } = useQuery(GET_POSTS);
  // const [salaries, setSalaries] = useState([])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ${error.message}</p>;

  return (
    <div name="posts">
      <SalaryCards data={data} />
    </div>
  );
}

export default APICalls

// {loading && <p>'Loading...'</p>}
// {error && <p>Error! {error.message}</p>}
