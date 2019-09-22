import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Todo from './containers/Todo';
import Home from './containers/Home';
import List from './containers/List';

const App = () => {
  return (
    <Router>
      <div>
        <Container fixed>
          <Header />
        
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/todo" component={Todo} />
        </Container>
      </div>
    </Router>
  );
};

export default App;