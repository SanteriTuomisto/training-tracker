import React from 'react';
import ProgramList from './ProgramList';
import Button from 'react-bootstrap/Button';
import ProgramCreate from './ProgramCreate';

class Programs extends React.Component {
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
          <ProgramCreate onSubmitPress={this.updateState} />
        </div>
      );
    }
    else {
      return <Button variant="primary" onClick={() => this.updateState()}>Add Program</Button>
    }
  }

  render() {
    return (
      <div>
        <h1>Programs</h1>
        {this.renderCreate()}
        <ProgramList />
      </div>  
      );
  }
}

export default Programs;