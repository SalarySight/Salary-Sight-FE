import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://salary-sight-be.herokuapp.com/graphql",
    cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
