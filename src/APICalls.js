import React from "react";
import {
  useQuery,
  gql
} from "@apollo/client";

const GET_POSTS = gql`
    query {
      posts {
        id
        name
        company
        salary
        previousEducation
        bootCampType
        devTitle
        comments
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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div name="posts">
      {data.posts.map(post => (
        <p>hi</p>
      ))}
    </div>
  );
}
export default APICalls