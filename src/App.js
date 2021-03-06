import React from 'react';
import './App.css';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { Routes } from './components/Routes';
import { configuration } from './configuration/configuration'

const httpLink = createHttpLink({
  uri: configuration.graphqlServer.endpoint,
  credentials: 'include',
  fetchOptions: {
    redirect: 'follow'
  }
});

const client = new ApolloClient({
  link: httpLink,
  // Disables forceFetch on the server (so queries are only run once)
  // TODO - is this needed?
  ssrMode: !process.browser,
  cache: new InMemoryCache()
});

function App(props) {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}


export default App;
