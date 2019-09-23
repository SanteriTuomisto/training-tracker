import React from 'react';
import ProgramList from './ProgramList';
import { Button, Header, Container, Line } from '../StyledComponents';
import { Link } from 'react-router-dom';

class Programs extends React.Component {
  componentDidMount() {
    // todo betteR?
    document.body.style = 'background-color: #1d1d1d; background-image: none;'
  }

  render() {
    return (
      <Container marginBottom gray>
        <Header>PROGRAMS</Header>
        <Line />
        <Link to="/programs/new"><Button primary>Create Program</Button></Link>
        <ProgramList />
      </Container>  
      );
  }
}

export default Programs;