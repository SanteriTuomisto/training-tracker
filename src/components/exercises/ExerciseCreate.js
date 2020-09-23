import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { createExercise } from '../../actions';
import { ExerciseToolsContainer, Header } from '../StyledComponents';

class ExerciseCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createExercise(formValues);
  };

  componentDidMount() {
    document.body.style = `background-color: gray;`;
  }

  render() {
    return (
      <div>
        <Header yellow center fontSize="3em" marginTop="10px" marginBottom="20px" animation>CREATE EXERCISE</Header>
        <ExerciseToolsContainer>
          <ExerciseForm onSubmit={this.onSubmit} />
        </ExerciseToolsContainer>
      </div>
    );
  }
}

export default connect(null, { createExercise })(ExerciseCreate);