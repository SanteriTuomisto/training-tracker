import React from 'react';
import { Container, Header, ExerciseToolsContainer } from '../StyledComponents';

class Workouts extends React.Component {
  componentDidMount() {
    // todo betteR?
    document.body.style = "background-size: cover; background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
  }
  
  render() {
    return (
      <div>
        <Header yellow center large marginTop animation>WORKOUTS</Header>
        <Container transparent marginBottom marginTop>
          <ExerciseToolsContainer>
            TODO
          </ExerciseToolsContainer>
        </Container>
      </div>
    );
  }

};

export default Workouts;