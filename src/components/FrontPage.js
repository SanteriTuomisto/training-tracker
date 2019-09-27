import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Header, FrontPageContent, FrontPageButtons } from './StyledComponents';
import { Link } from 'react-router-dom';
import { FaDumbbell } from "react-icons/fa";

class FrontPage extends React.Component {

  componentDidMount() {
    // todo: better way: helmet?
    // temp
    document.body.style = "background-size: cover; background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
  }

  render() {
    return (
      <FrontPageContent>

        <Header yellow center large marginTop animation><FaDumbbell /></Header>
        <Header yellow center large animation>TRAINING</Header>
        <Header yellow center large animation>TRACKER</Header>
        
        <FrontPageButtons aria-label="FrontPageButtons">
          <Link to="/programs">
            <Button variant="outline-primary" size="lg">PROGRAMS</Button>
          </Link>
          <Link to="/exercises">
            <Button variant="outline-primary" size="lg">EXERCISES</Button>
          </Link>  
          <Link to="/workouts">
            <Button variant="outline-primary" size="lg">WORKOUTS</Button>                      
          </Link>      
        </FrontPageButtons>
      </FrontPageContent>
    );
  }
};

export default FrontPage;