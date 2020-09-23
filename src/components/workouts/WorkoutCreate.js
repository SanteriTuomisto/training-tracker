import React from 'react';
import { ExerciseToolsContainer, Header } from '../StyledComponents';
import WorkoutForm from './WorkoutForm';

class WorkoutCreate extends React.Component {
  componentDidMount() {
    document.body.style = `background-color: gray;`;
  }

  render() {
    return (
      <div>
        <Header yellow center fontSize="3em" marginTop="10px" marginBottom="20px" animation>ADD WORKOUT</Header>
        <ExerciseToolsContainer>
          <WorkoutForm onSubmit={this.onSubmit} />
        </ExerciseToolsContainer>
      </div>
    );
  }
}

export default WorkoutCreate;