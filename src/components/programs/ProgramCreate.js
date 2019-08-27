import React from 'react';
import { connect } from 'react-redux';
import ProgramForm from './ProgramForm';
import { createProgram } from '../../actions';

class ProgramCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createProgram(formValues);
  }

  render() {
    return (
      <div>
        <h3>Add new program</h3>
        <ProgramForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createProgram })(ProgramCreate)