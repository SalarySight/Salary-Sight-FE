import { useState } from 'react'
import { salaryData } from './HardSalaryData'
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
console.log(salaryData)


function APICalls() {

  const { loading, error, data } = useQuery(GET_POSTS);
  const [salaries, setSalaries] = useState([])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div name="posts">
      {data.posts.map(post => (
        <p>Salary: {post.salary} Gender: {post.gender} State: {post.state} Job Hunt Duration: {post.jobHuntDuration} </p>
      ))}
    </div>
  );
}
export default APICalls
