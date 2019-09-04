import React from 'react';
import { fetchPrograms, fetchExercises } from '../../actions';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Line } from '../StyledComponents';
import { FaTrashAlt } from "react-icons/fa";

class ProgramList extends React.Component {
  componentDidMount() {
    this.props.fetchPrograms();
    this.props.fetchExercises();
  }

  renderProgramList() {
    return this.props.programs.map(program => {
      return (
        <Col sm={12} key={program.id}>
          <Container> 
            <Row>
              <Col lg={10} sm={9}>
                <h3>{program.title}</h3>
                <Line />
                  <p>
                    {program.description}
                  </p>
                  <Row>
                    {this.renderExercises(program.exercises)}
                    <Button right>View</Button>
                  </Row>
              </Col>
              <Col lg={2} sm={3}>
                <Button right>Edit</Button>             
                <Button right primary><FaTrashAlt /></Button>             
              </Col>               
            </Row>
          </Container>
        </Col>
      );
    });
  }

  renderExercises(exercises) {
    if(exercises !== undefined) {
      return this.props.exercises.map(exercise => {
        if (exercises.some(ex => ex.value === exercise.id)) {
          return (
            <Col sm={3} key={exercise.id}>
              <h5>{exercise.title}</h5>
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