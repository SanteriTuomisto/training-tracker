import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Row>
      <Col>
        <Link to="/">HOME</Link>
      </Col>
      <Col>
        <Link to="/programs">Programs</Link>
      </Col>
      <Col>
        <Link to="/exercises">Exercises</Link>
      </Col>
      <Col>
        <Link to="/workouts">Workouts</Link>
      </Col>
    </Row>
  );
};



export default Header;

// "/"-route vie login screenille jos ei kirjautunt sisään
// jos kirjautunut sisään niin "/" etusivu jossa yhteenveto