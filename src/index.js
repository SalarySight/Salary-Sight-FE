import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://salary-sight-be.herokuapp.com/graphql",
    cache: new InMemoryCache()
});

export const GET_POST = gql `
  query {
      posts {
        id
        username
        company
        salary
        degree
        positionTitle
        state
        jobHuntDuration
        gender
        age
        yearsOfExperience
        gradYear
        typeOfEmployment
        locationOfEmployment
        negotiation
        firstPosition
        program
      }
      salary {
        medianSalary
      }
    }
  `
  export const CREATE_POST = gql `
    mutation createPost($username: String, $gender: String!, $age: String!, $gradYear: String!,
      $program: String!, $degree: String!, $firstPosition: String!, $jobHuntDuration: String!,
      $yearsOfExperience: String!, $positionTitle: String!, $company: String, $locationOfEmployment: String!,
      $typeOfEmployment: String!, $state: String!, $negotiation: String!, $salary: String!) {
      createPost (input: {
        username: $username,
        company: $company,
        salary: $salary,
        degree: $degree,
        positionTitle: $positionTitle,
        state: $state,
        jobHuntDuration: $jobHuntDuration,
        gender: $gender,
        age: $age,
        yearsOfExperience: $yearsOfExperience,
        gradYear: $gradYear,
        program: $program,
        typeOfEmployment: $typeOfEmployment,
        locationOfEmployment: $locationOfEmployment,
        negotiation: $negotiation,
        firstPosition: $firstPosition,
      }) {
        post {
            username
            company
            salary
            degree
            positionTitle
            state
            jobHuntDuration
            gender
            age
            yearsOfExperience
            gradYear
            typeOfEmployment
            locationOfEmployment
            negotiation
            firstPosition
            program
        }
      }
    }
  `

ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
