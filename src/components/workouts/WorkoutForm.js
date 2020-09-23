import React from 'react';
import { Label, Input, ExerciseHeader, WorkoutContainer, ExerciseContainerInner } from '../StyledComponents';
import Select from 'react-select';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchPrograms, fetchExercises } from '../../actions';
import { connect } from 'react-redux';

class WorkoutForm extends React.Component {
  state = { 
    selectedProgram: null,
    programs: [],
    selectedWorkout: null,
    workouts: [],
    date: ''
  };

workout = [
  {
    "id": 1,
    "date": 230920,
    "program": 1,
    "workout": 1,
    "exercises": {
      "1": {
        "exerciseId": 1,
        "reps": [8, 8, 3],
        "weights": [100, 100, 90]
      }
    }
  }
];

  async componentDidMount() {
    this.props.fetchExercises();
    await this.props.fetchPrograms();

    var programs = [];
    for (var i = 0; i < this.props.programs.length; i++) {
      var obj = { 
        value: this.props.programs[i].id, 
        label: this.props.programs[i].title, 
        workouts: this.props.programs[i].workouts, 
        exercises: this.props.programs[i].exercises 
      };
      programs.push(obj);
    }

    const newState = {
      programs: programs
    };
      
    this.setState(newState);
  }

  handleProgramChange = selectedProgram => {
    let workouts = [];
    for (let i in selectedProgram.workouts) {
      var obj = { 
        value: selectedProgram.workouts[i].id, 
        label: selectedProgram.workouts[i].title, 
      };
      workouts.push(obj);
    }

    const newState = {
        ...this.state,
        selectedProgram: (selectedProgram.value - 1),
        workouts: workouts
    };

    this.setState(newState);
  };

  handleWorkoutChange = selectedWorkout => {
    const newState = {
      ...this.state,
      selectedWorkout: (selectedWorkout.value - 1),
    };

    this.setState(newState);
  };

  renderWorkout() {
    var program = this.state.programs[this.state.selectedProgram];
    if (program !== null && program !== undefined && this.state.selectedWorkout !== null) {
      var workout = Object.values(program.workouts[this.state.selectedWorkout + 1].exerciseIds);
      var exercises = Object.values(program.exercises);
      return workout.map(exerciseId => {
        var exercise = exercises.find(exercise => { return exercise.id === exerciseId })     
        var exerciseDetails = this.props.exercises.find(e => { return e.id === exercise.exerciseId });
        if (exerciseDetails !== null) {
          return (
            <Col key={exerciseId} md={12}>
              <ExerciseContainerInner>
                <ExerciseHeader>{exerciseDetails.title}</ExerciseHeader>
                <div>Sets: {exercise.sets} | Reps: {exercise.reps}</div>
                <WorkoutContainer marginTop="20px" paddingTop="10px" paddingBottom="15px">
                  <Row>
                    <Col>
                      <Label>Reps</Label>
                    </Col>
                    <Col>
                      <Label>Weight (kg)</Label>
                    </Col>
                  </Row>
                  {this.renderExercise(exercise.sets, exerciseId)}
                </WorkoutContainer>
              </ExerciseContainerInner>
            </Col>
          );
        }
        else {
          return (
            <Col key={exerciseId} md={12}>
              <ExerciseContainerInner>
                <ExerciseHeader>Empty</ExerciseHeader>
                <div>Sets: {exercise.sets} | Reps: {exercise.reps}</div>
                <WorkoutContainer>
                  <Row>
                    <Col>
                      <Label>Reps</Label>
                    </Col>
                    <Col>
                      <Label>Weight</Label>
                    </Col>
                  </Row>
                  {this.renderExercise(exercise.sets)}
                </WorkoutContainer>
              </ExerciseContainerInner>
            </Col>
          );
        }
      });
    }
    else return null;
  }

  // TODO kontrolloi nää inputfieldit
  renderExercise(sets, exerciseId) {
    var fields = [];
    for (var i = 0; i < sets; i++) {
      fields.push(
        <Row key={i}>
          <Col>
            <Input />
          </Col>
          <Col>
            <Input />
          </Col>
        </Row>
      );
    }
    return fields;
  }

  render() {
    return(
      <div>
        <Label>Select program</Label>
        <Select 
            name="Programs"
            options={this.state.programs} 
            value={this.state.programs[this.state.selectedProgram]}
            onChange={this.handleProgramChange}
        />
        <hr />
        <Label>Select workout</Label>
        <Select 
            name="Workouts"
            options={this.state.workouts} 
            value={this.state.workouts[this.state.selectedWorkout]}
            onChange={this.handleWorkoutChange}
        />
        <hr />
        <Label>Workout date</Label>
        <Input 
          type="date" 
          value={this.state.date} 
          onChange={event => this.setState({ date: event.target.value })}
        />
        <hr />
        <Row>
          {this.renderWorkout()}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: Object.values(state.exercises),
    programs: Object.values(state.programs)
  };
};

export default connect(mapStateToProps, { fetchPrograms, fetchExercises })(WorkoutForm);
