import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Filter from './components/Filter';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Landing/>
        <Filter />
      </div>
    </ApolloProvider>
  );
}

export default App;
