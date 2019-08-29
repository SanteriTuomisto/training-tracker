import React from 'react';
import { connect } from 'react-redux';
import ProgramForm from './ProgramForm';
import { createProgram, fetchExercises } from '../../actions';

class ProgramCreate extends React.Component {
  componentDidMount() {
    this.props.fetchExercises();    
  }

  onSubmit = (formValues) => {
    this.props.createProgram(formValues);
  }

  render() {
    return (
      <div>
        <h3>Add new program</h3>
        <ProgramForm onSubmit={this.onSubmit} exercises={this.props.exercises} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: Object.values(state.exercises)
  };
};

export default connect(mapStateToProps, { createProgram, fetchExercises })(ProgramCreate)