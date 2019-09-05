import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { Button, Container } from './StyledComponents';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Link to="/"><Button>HOME</Button></Link>
          <Link to="/programs"><Button>Programs</Button></Link>
          <Link to="/exercises"><Button>Exercises</Button></Link>
          <Link to="/workouts"><Button>Workouts</Button></Link>
        </Row>
      </Container>

    );
  }

};

export default Header;

// "/"-route vie login screenille jos ei kirjautunt sisään
// jos kirjautunut sisään niin "/" etusivu jossa yhteenveto