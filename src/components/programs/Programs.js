import React from 'react';
import ProgramList from './ProgramList';
import { Button, Header, Container, Line } from '../StyledComponents';
import { Link } from 'react-router-dom';

class Programs extends React.Component {
  componentDidMount() {
    // todo betteR?
    document.body.style = 'background-color: white; background-image: none;'
  }

  render() {
    return (
      <Container marginBottom>
        <Header>PROGRAMS</Header>
        <Line />
        <Link to="/programs/new"><Button primary>Create program</Button></Link>
        <ProgramList />
      </Container>  
      );
  }
}

export default Programs;