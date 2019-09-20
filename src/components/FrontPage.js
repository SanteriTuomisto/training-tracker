import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Container, Header, Line, LogoBox, FrontPageContent } from './StyledComponents';
import { Link } from 'react-router-dom';
import { FaDumbbell } from "react-icons/fa";

class FrontPage extends React.Component {

  componentDidMount() {
    // todo: better way: helmet?
    // temp
    document.body.style = "background-size: cover; background-image: url('https://images.unsplash.com/photo-1551980913-630eafe3eb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');";
  }

  render() {
    return (
      <Row>
        <Col md={4}>
          <LogoBox>
            <Header>
              <FaDumbbell />
            </Header>
            <Header>
              TRAINING
            </Header>
            <Header>
              TRACKER
            </Header>
          </LogoBox>
        </Col>

        <Col>
          <FrontPageContent>
            <Header yellow>Welcome to revolutionise your working out</Header>
            <Line />
            <p>Log your programs, exercises and workouts.</p>
            <Row>
              <Col>
                <Button>LOGIN</Button>
              </Col>
              <Col>
                <Button primary>REGISTER</Button>        
              </Col>
            </Row>
            <Row>
            <Col>
              <Link to="/programs">
                <Button variant="outline-primary" size="lg">PROGRAMS</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/exercises">
                <Button variant="outline-primary" size="lg">EXERCISES</Button>
              </Link>      
            </Col>
            <Col>
              <Link to="/workouts">
                <Button variant="outline-primary" size="lg">WORKOUTS</Button>
              </Link>      
            </Col>
          </Row>
          </FrontPageContent>
        </Col>
      </Row>
    );
  }
};

export default FrontPage;

/*

<Container>
        <Header>TRAINING TRACKER</Header>
        <Line />
        
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
      */