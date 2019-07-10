import React from 'react';
import ExerciseList from './ExerciseList';
import ExerciseCreate from './ExerciseCreate';
import Button from 'react-bootstrap/Button'

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
        <div>
          <Button variant="secondary" onClick={() => this.updateState()}>Close</Button>
          <ExerciseCreate onSubmitPress={this.updateState} />
        </div>
      );
    }
    else {
      return <Button variant="primary" onClick={() => this.updateState()}>Add Exercise</Button>
    }
  }

  render() {
    return (
      <div>
        <h1>Exercises</h1>
        {this.renderCreate()}
        <ExerciseList />
      </div>
    );
  }
}

export default Exercises;