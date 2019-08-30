import React from 'react';
import ExerciseList from './ExerciseList';
import ExerciseCreate from './ExerciseCreate';
import { Button, Container, Line, Header } from '../helpers/StyledComponents';

class Exercises extends React.Component {
  state = { show: false }

  updateState() {
    if (this.state.show) {
      this.setState({ show: false });
    }
    else {
      this.setState({ show: true });  
    }
  };

  renderCreate() {
    if (this.state.show) {
      return (
        <Container>
          <Button onClick={() => this.updateState()}>Close</Button>
          <ExerciseCreate onSubmitPress={this.updateState} />
        </Container>
      );
    }
    else {
      return <Button primary onClick={() => this.updateState()}>Add Exercise</Button>
    }
  }

  render() {
    return (
      <Container>
        <Header>Exercises</Header>
        {this.renderCreate()}
        <Line />
        <ExerciseList />
      </Container>
    );
  }
}

export default Exercises;