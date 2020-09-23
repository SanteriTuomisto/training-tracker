import React from 'react';
import Container from 'react-bootstrap/Container'
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import FrontPage from './FrontPage';
import Header from './Header';
import Programs from './programs/Programs';
import Exercises from './exercises/Exercises';
import ExerciseCreate from './exercises/ExerciseCreate';
import ExerciseEdit from './exercises/ExerciseEdit';
import ProgramCreate from './programs/programCreate/ProgramCreate';
import Workouts from './workouts/Workouts';
import WorkoutCreate from './workouts/WorkoutCreate';

import { Main } from './StyledComponents';

const App = () => {
  return (
    <Main>
        <Router history={history}>
        <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/programs" exact component={Programs} />
            <Route path="/programs/new" exact component={ProgramCreate} />
            <Route path="/programs/edit/:id" exact component={ProgramCreate} />
            <Route path="/exercises" exact component={Exercises} />
            <Route path="/exercises/new" exact component={ExerciseCreate} />
            <Route path="/exercises/edit/:id" exact component={ExerciseEdit} />
            <Route path="/workouts" exact component={Workouts} />
            <Route path="/workouts/new" exact component={WorkoutCreate} />
          </Switch>
        </Container>
      </Router>
    </Main>
  );
};

export default App; 