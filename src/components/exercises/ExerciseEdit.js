import React from 'react';
import { connect } from 'react-redux';
import ExerciseForm from './ExerciseForm';
import { fetchExercise, editExercise } from '../../actions';
import { Header, ExerciseToolsContainer } from '../StyledComponents';
import _ from 'lodash';

class ExerciseEdit extends React.Component {
  componentDidMount() {
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
      <div>
        <Header yellow center fontSize="3em" marginTop="10px" marginBottom="20px" animation>EDIT EXERCISE</Header>
        <ExerciseToolsContainer>
          {this.renderForm()}
        </ExerciseToolsContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { exercise: state.exercises[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchExercise, editExercise })(ExerciseEdit);