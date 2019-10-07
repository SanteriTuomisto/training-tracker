import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { fetchExercise, editExercise } from '../../actions';
import { ExerciseHeader, ExerciseToolsContainer } from '../StyledComponents';
import _ from 'lodash';

class ExerciseEdit extends React.Component {
  componentDidMount() {
    // TODO better?
    document.body.style = "background-size: cover; background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
  
    this.props.fetchExercise(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editExercise(this.props.match.params.id, formValues);
  };


  renderForm() {
    if(this.props.exercise !== undefined) {
      return <ExerciseForm initialValues={_.pick(this.props.exercise, 'title', 'description', 'category' )} onSubmit={this.onSubmit} />;    
    }
  }

  render() {
    return (
      <ExerciseToolsContainer>
        <ExerciseHeader>Edit exercise</ExerciseHeader>
        {this.renderForm()}
      </ExerciseToolsContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { exercise: state.exercises[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchExercise, editExercise })(ExerciseEdit);