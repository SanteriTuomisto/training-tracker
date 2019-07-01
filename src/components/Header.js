import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
  return (
    <Row>
      <Col>
        <Link to="/">
          <p>LOGO</p>
        </Link>
      </Col>   
      <Col>
        <Link to="/programs">
          <p>Programs</p>
        </Link>
      </Col>
      <Col>
        <Link to="/exercises">
          <p>Exercises</p>
        </Link>
      </Col>
      <Col>
        <Link to="/workouts">
          <p>Workouts</p>
        </Link>
      </Col>
      <Col>
        <Link to="/">
          <p>Profile</p>
        </Link>
      </Col>
      <Col>
        <Link to="/">
          <p>Logout</p>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;

// "/"-route vie login screenille jos ei kirjautunt sisään
// jos kirjautunut sisään niin "/" etusivu jossa yhteenveto