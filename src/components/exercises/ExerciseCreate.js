import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { createExercise } from '../../actions';
import { ExerciseHeader, ExerciseToolsContainer } from '../StyledComponents';

class ExerciseCreate extends React.Component {

  componentDidMount() {
    // todo betteR?
    document.body.style = "background-size: cover; background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
  }

  onSubmit = (formValues) => {
    this.props.createExercise(formValues);
  };

  render() {
    return (
      <ExerciseToolsContainer>
        <ExerciseHeader>Create exercise</ExerciseHeader>
        <ExerciseForm onSubmit={this.onSubmit} />
      </ExerciseToolsContainer>
    );
  }
}

export default connect(null, { createExercise })(ExerciseCreate);