import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Landing from './components/Landing';
import AddItem from './components/AddItem';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
        <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/add">
          <AddItem />
        </Route>
      </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
