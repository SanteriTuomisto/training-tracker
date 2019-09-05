import React from 'react';
import { fetchExercises, fetchPrograms, deleteProgram } from '../../actions';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Line } from '../StyledComponents';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

class ProgramList extends React.Component {
  componentDidMount() {
    this.props.fetchExercises();
    this.props.fetchPrograms();
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
                    <Button>View</Button>
                  </Row>
              </Col>
              <Col lg={2} sm={3}>
                <Link to={{ 
                    pathname: `/programs/edit/${program.id}`,
                    state: {
                      program: program,
                      edit: true
                    }             
                  }}>
                  <Button right>Edit</Button>
                </Link>          
                <Button right primary onClick={() => this.props.deleteProgram(program.id)}><FaTrashAlt /></Button>             
              </Col>               
            </Row>
          </Container>
        </Col>
      );
    });
  }

  // OLD
  /*renderExercises(exercises) {
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
  }*/

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
    exercises: Object.values(state.exercises),
    programs: Object.values(state.programs)
  };
};

export default connect(mapStateToProps, { fetchExercises, fetchPrograms, deleteProgram })(ProgramList);