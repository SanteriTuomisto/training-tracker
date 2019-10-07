import React from 'react';
import ExerciseList from './ExerciseList';
import { Container, Header } from '../StyledComponents';

class Exercises extends React.Component {

  componentDidMount() {
    // todo better?
    document.body.style = "background-size: cover; background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
  }

  render() {
    return (
      <div>
        <Header yellow center large marginTop animation>EXERCISES</Header>
        <Container transparent marginBottom marginTop>
          <ExerciseList />
        </Container>
      </div>
    );
  }
}

export default Exercises;