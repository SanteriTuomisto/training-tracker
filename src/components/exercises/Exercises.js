import React from 'react';
import ExerciseList from './ExerciseList';
import ExerciseCreate from './ExerciseCreate';
import { Button, Container, Line, Header } from '../StyledComponents';

class Exercises extends React.Component {
  state = { show: false }

  componentDidMount() {
    // todo betteR?
    document.body.style = 'background-color: #1d1d1d; background-image: none;'
  }

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
      <Container gray marginBottom>
        <Header>EXERCISES</Header>
        <Line />
        {this.renderCreate()}
        <ExerciseList />
      </Container>
    );
  }
}

export default Exercises;