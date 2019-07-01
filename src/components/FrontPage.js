import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FrontPage = () => {
  return (
    <Jumbotron>
      <h1>Training Tracker</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <Row>
        <Col>
          <Button variant="outline-primary" size="lg">Login</Button>
        </Col>
        <Col>
          <Button variant="success" size="lg">Sign up</Button>        
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default FrontPage;