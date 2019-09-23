import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ShowMoreButton, Container, SemiHiddenBox, HideButton, H5NoBottomMargin } from '../StyledComponents';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import _ from 'lodash';

class Program extends React.Component {
  state = { hide: true };

  renderProgram(program) {
    var workouts = Object.values(program.workouts);
    var exercises = Object.values(program.exercises);
    return workouts.map(workout => {
     return (
      <Col key={workout.id}>
        <Container yellow>
          <h5>{workout.title}</h5>
          {this.renderExercises(workout.exerciseIds, exercises)}
        </Container>
      </Col>
     );
    }); 
  }

  renderExercises(exerciseIds, exercises) {   
    return exerciseIds.map(exerciseId => {
      var exercise = exercises.find(exercise => { return exercise.id === exerciseId })     
      var exerciseDetails = this.props.exercises.find(e => { return e.id === exercise.exerciseId })
      if(exerciseDetails != null) {
        return (
          <Container darkGray yellowText key={exerciseId}>
            <h5>{exerciseDetails.title}</h5>
            <div>Sets: {exercise.sets}</div>
            <div>Reps: {exercise.reps}</div>
          </Container>
        );
      }
      else {
        return (
          <Container darkGray yellowText key={exerciseId}>
            <h5>Empty</h5>
            <div>Sets: {exercise.sets}</div>
            <div>Reps: {exercise.reps}</div>
          </Container>
        );
      }
      
    });
  }

  changeVisibility() {
    this.setState({ hide: !this.state.hide });
  }

  render() {
    if (this.state.hide && !_.isEmpty(this.props.program.workouts)) {
      return(
        // Semi hidden box
        <div style={{ position: 'relative' }}>
          <SemiHiddenBox hide={this.state.hide}>
            <Row>
              {this.renderProgram(this.props.program)}
            </Row>
          </SemiHiddenBox>
          <ShowMoreButton onClick={this.changeVisibility.bind(this)}>
            <H5NoBottomMargin>View</H5NoBottomMargin>    
            <IoIosArrowDown />
          </ShowMoreButton>
        </div>
      );
    }
    else if (!this.state.hide && !_.isEmpty(this.props.program.workouts)) {
      return(
        <div>
          <Row>
              {this.renderProgram(this.props.program)}
          </Row>
          <HideButton onClick={this.changeVisibility.bind(this)}>
            <IoIosArrowUp />
            <H5NoBottomMargin>Hide</H5NoBottomMargin>
          </HideButton>
        </div>
      );
    }
    else {
      return(
        <div>
        </div>
      );
    }
  }
}

export default Program;