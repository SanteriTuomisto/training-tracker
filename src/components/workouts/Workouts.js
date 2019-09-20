import React from 'react';
import { Line, Container, Header } from '../StyledComponents';

class Workouts extends React.Component {
  componentDidMount() {
    // todo betteR?
    document.body.style = 'background-color: white; background-image: none;'
  }
  
  render() {
    return (
      <Container>
        <Header>WORKOUTS</Header>
        <Line/>
        <p>Todo</p>
      </Container>
    );
  }

};

export default Workouts;