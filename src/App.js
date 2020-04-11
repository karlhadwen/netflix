import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
