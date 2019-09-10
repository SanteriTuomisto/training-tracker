import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Container, Header, Line } from './StyledComponents';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <Container>
      <Header>Training Tracker</Header>
      <Line />
      <Row>
        <Col>
          <Button>Login</Button>
        </Col>
        <Col>
          <Button primary>Sign up</Button>        
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/programs">
            <Button variant="outline-primary" size="lg">Programs</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/exercises">
            <Button variant="outline-primary" size="lg">Exercises</Button>
          </Link>      
        </Col>
        <Col>
          <Link to="/workouts">
            <Button variant="outline-primary" size="lg">Workouts</Button>
          </Link>      
        </Col>
      </Row>
    </Container>
    );
};

export default FrontPage;