import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Row>
      <Col>
        <Link to="/"><h3>HOME</h3></Link>
      </Col>
      <Col>
        <Link to="/programs"><h3>Programs</h3></Link>
      </Col>
      <Col>
        <Link to="/exercises"><h3>Exercises</h3></Link>
      </Col>
      <Col>
        <Link to="/workouts"><h3>Workouts</h3></Link>
      </Col>
    </Row>
  );
};



export default Header;

// "/"-route vie login screenille jos ei kirjautunt sisään
// jos kirjautunut sisään niin "/" etusivu jossa yhteenveto