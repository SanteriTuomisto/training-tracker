import React from 'react';
import { fetchPrograms, fetchExercises } from '../../actions';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const programBoxStyle = {
  padding: '15px'
}

const programButtonStyle = {
  margin: '7px'
}

class ProgramList extends React.Component {
  componentDidMount() {
    this.props.fetchPrograms();
    this.props.fetchExercises();
  }

  renderProgramList() {
    return this.props.programs.map(program => {
      return (
        <Col sm={12} key={program.id} style={programBoxStyle}>
          <hr />
          <Row>
            <Col sm={9}>
              <h3>{program.title}</h3>
                {program.description}
            </Col>
            <Col sm={3}>
              <Button variant="primary" style={programButtonStyle}>View</Button>
              <Button variant="primary" style={programButtonStyle}>Edit</Button>             
            </Col>
            <Col sm={12}>
              <Row>
                {this.renderExercises(program.exercises)}
              </Row>
            </Col>                
          </Row>
        </Col>
      );
    });
  }

  renderExercises(exercises) {
    if(exercises !== undefined) {
      return this.props.exercises.map(exercise => {
        if (exercises.some(ex => ex === exercise.id)) {
          return (
            <Col sm={4} key={exercise.id}>
              <h4>{exercise.title}</h4>
            </Col>
          );
        }
        else {
          return null;
        }
      });
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h4>Programs:</h4>
        <Row>
          {this.renderProgramList()}
        </Row>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    programs: Object.values(state.programs),
    exercises: Object.values(state.exercises)
  };
};

export default connect(mapStateToProps, { fetchPrograms, fetchExercises })(ProgramList);