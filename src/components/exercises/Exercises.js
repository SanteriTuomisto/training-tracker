import React from 'react';
import ExerciseList from './ExerciseList';
import ExerciseCreate from './ExerciseCreate';
import { Button, Container, ExerciseToolsContainer, Header } from '../StyledComponents';

class Exercises extends React.Component {
  state = { show: false }

  componentDidMount() {
    // todo betteR?
    document.body.style = "background-size: cover; background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
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
        <ExerciseToolsContainer>
          <Button onClick={() => this.updateState()}>Close</Button>
          <ExerciseCreate onSubmitPress={this.updateState} />
        </ExerciseToolsContainer>
      );
    }
    else {
      return <Button primary onClick={() => this.updateState()}>Add Exercise</Button>
    }
  }

  render() {
    return (
      <div>
        <Header yellow center large marginTop animation>EXERCISES</Header>
        <Container transparent marginBottom marginTop>
          {this.renderCreate()}
          <ExerciseList />
        </Container>
      </div>
    );
  }
}

export default Exercises;