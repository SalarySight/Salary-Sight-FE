import { useState } from 'react'
// import { salaryData } from './HardSalaryData'
import SalaryCards from "./Components/SalaryCards/SalaryCards";
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

  return (
    <div name="postsContainer">
      {loading && <p>'Loading...'</p>}
      {error && <p>Error! {error.message}</p>}
      <SalaryCards data={data} />
    </div>
  );
}

export default APICalls
