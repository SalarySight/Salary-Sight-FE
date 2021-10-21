// import SalaryCards from "./Components/SalaryCards/SalaryCards";
// import { useQuery, gql } from "@apollo/client";
//
// const GET_POSTS = gql`
//     query {
//       posts {
//         id
//         company
//         salary
//         degree
//         positionTitle
//         state
//         jobHuntDuration
//         gender
//         age
//         yearsOfExperience
//       }
//     }
// `;
//
// function APICalls() {
//   const { loading, error, data } =  useQuery(GET_POSTS);
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error ${error.message}</p>;
//
//   return (
//     <div name="posts">
//       <SalaryCards data={data} />
//     </div>
//   );
// }
//
// export default APICalls

// {loading && <p>'Loading...'</p>}
// {error && <p>Error! {error.message}</p>}
