import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import history from 'history';
import Home from '../home';
import About from '../about';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about-us" component={About} />
    <Route path="/contact" render={() => <h1>contact</h1>} />
    <Redirect to="/" />
  </Switch>
);

export default App;
