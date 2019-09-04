import React from 'react';
import Container from 'react-bootstrap/Container'
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import FrontPage from './FrontPage';
import Header from './Header';
import Programs from './programs/Programs';
import Exercises from './exercises/Exercises';
import ProgramCreate from './programs/programCreate/ProgramCreate';
import Workouts from './workouts/Workouts';

const App = () => {
  return (
    <Container>
        <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/program/new" exact component={ProgramCreate} />
          <Route path="/exercises" exact component={Exercises} />
          <Route path="/workouts" exact component={Workouts} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App; 