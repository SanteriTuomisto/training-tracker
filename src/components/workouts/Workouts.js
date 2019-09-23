import React from 'react';
import { Line, Container, Header } from '../StyledComponents';

class Workouts extends React.Component {
  componentDidMount() {
    // todo better?
    document.body.style = 'background-color: #1d1d1d; background-image: none;'
  }
  
  render() {
    return (
      <Container gray>
        <Header>WORKOUTS</Header>
        <Line/>
        <p>Todo</p>
      </Container>
    );
  }

};

export default Workouts;