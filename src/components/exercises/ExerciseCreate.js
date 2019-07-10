import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { createExercise } from '../../actions';

class ExerciseCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createExercise(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add a Exercise</h3>
        <ExerciseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createExercise })(ExerciseCreate);