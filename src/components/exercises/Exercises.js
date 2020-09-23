import React from 'react';
import ExerciseList from './ExerciseList';
import { Container, Header } from '../StyledComponents';

class Exercises extends React.Component {
  componentDidMount() {
    document.body.style = `background-color: gray;`;
  }

  render() {
    return (
      <div>
        <Header yellow center fontSize="4em" margin-top="10px" animation>EXERCISES</Header>
        <Container transparent marginBottom>
          <ExerciseList />
        </Container>
      </div>
    );
  }
}

export default Exercises;