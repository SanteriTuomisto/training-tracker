import React from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreateOld';
import { Button, Header, Container, Line } from '../StyledComponents';
import { Link } from 'react-router-dom';

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
          <Container>
            <Button onClick={() => this.updateState()}>Close</Button>
            <ProgramCreate onSubmitPress={this.updateState} />
          </Container>
        </div>
      );
    }
    else {
      return (
        <div>          
          <Button primary onClick={() => this.updateState()}>Add Program (OLD)</Button>
        </div>
      );
    }
  }

  render() {
    return (
      <Container>
        <Header>Programs</Header>
        <Line />
        <Link to="/program/new"><Button>Create program</Button></Link>
        {this.renderCreate()}
        <ProgramList />
      </Container>  
      );
  }
}

export default Programs;