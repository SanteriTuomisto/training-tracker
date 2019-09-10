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

  renderProgram(program) {
    var workouts = Object.values(program.workouts);
    var exercises = Object.values(program.exercises);
    return workouts.map(workout => {
     return (
      <Col key={workout.id}>
        <Container><h5>{workout.title}</h5>
          {this.renderExercises(workout.exerciseIds, exercises)}
        </Container>
      </Col>
     );
    });
    
  }

  renderExercises(exerciseIds, exercises) {
    return exerciseIds.map(exerciseId => {
      var exerciseArr = exercises.filter(exercise => { return exercise.id === exerciseId })
      var exercise = exerciseArr[0];
      // TODO: add exercise
      return (
        <Container key={exerciseId}>
          {exercise.exerciseId}
        </Container>
      );
    });
  }

  viewExercise(program) {
    if (true) {
      // TODO hide
      // <Button>Hide</Button>
      return(
        <div>
          <Row>
            {this.renderProgram(program)}
          </Row>
        </div>
      );
    }
    /*else {
      return (
        <Button>View workouts</Button>
      );
    }*/
  }

  renderProgramList() {
    return this.props.programs.map(program => {
      return (
        <Col sm={12} key={program.id}>
          <Container> 
            <Row>
              <Col lg={8} sm={7} xs={6}>
                <h3>{program.title}</h3>                  
              </Col>
              <Col lg={4} sm={5} xs={6}>
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
              <Col sm={12}>
                <Line />
                <p>
                  {program.description}
                </p>
                {this.viewExercise(program)}
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