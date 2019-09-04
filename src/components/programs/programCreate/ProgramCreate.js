import React from 'react';
import { Container, Header, Line, Button, Label, Input } from '../../StyledComponents';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import initialData from '../../helpers/initialData';
import Workout from './Workout';
import { DragDropContext } from 'react-beautiful-dnd';

class ProgramCreate extends React.Component {
  state = initialData;

  mapper() {
    return this.state.columnOrder.map(columnId => {
      const workout = this.state.workouts[columnId];
      const exercises = workout.exerciseIds.map(exerciseId => this.state.exercises[exerciseId]);

      return (
        <Col md={6} lg={4} key={workout.id}>
          <Workout 
            key={workout.id} 
            workout={workout} 
            exercises={exercises} 
            deleteWorkout={() => this.deleteWorkout(workout.id)}
            deleteExercise={this.deleteExercise}
            addExercise={this.addExercise}
          />
        </Col>
      );
    });
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.workouts[source.droppableId];
    const finish = this.state.workouts[destination.droppableId];

    if (start === finish) {
      const newExerciseIds = Array.from(start.exerciseIds);
      newExerciseIds.splice(source.index, 1);
      newExerciseIds.splice(destination.index, 0, draggableId);
  
      const newWorkout = {...start, exerciseIds: newExerciseIds};
  
      const newState = { 
        ...this.state, 
        workouts: {
          ...this.state.workouts,
          [newWorkout.id]: newWorkout
        }
      };
  
      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startExerciseIds = Array.from(start.exerciseIds);
    startExerciseIds.splice(source.index, 1);

    const newStart = {
      ...start,
      exerciseIds: startExerciseIds
    };

    const finishExerciseIds = Array.from(finish.exerciseIds);
    finishExerciseIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      exerciseIds: finishExerciseIds
    };

    const newState = {
      ...this.state,
      workouts: {
        ...this.state.workouts,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    this.setState(newState);

  };

  addNewWorkout() {
    const workouts = this.state.workouts;
    const nextWorkoutId = (Object.keys(workouts).length) + 1;

    const newWorkout = {
      id: nextWorkoutId,
      title: 'Workout ' + nextWorkoutId,
      exerciseIds: []  
    };

    const newState = {
      ...this.state,
      columnOrder: [...this.state.columnOrder, nextWorkoutId], 
      workouts: {
        ...this.state.workouts,
        [nextWorkoutId]: newWorkout
      }
    };

    this.setState(newState);
  };

  deleteWorkout(id) {
    const workouts = this.state.workouts;
    const newWorkouts = {};

    for (var key in workouts) {
      if (parseInt(key) !== parseInt(id)) {
        if (parseInt(key) > parseInt(id)) {
          const newWorkout = {
            id: parseInt(key - 1),
            title: workouts[key].title,
            exerciseIds: workouts[key].exerciseIds
          };
          newWorkouts[key - 1] = newWorkout;
        }
        else {
          const newWorkout = {
            id: parseInt(key),
            title: workouts[key].title,
            exerciseIds: workouts[key].exerciseIds
          };
          newWorkouts[key] = newWorkout;
        }   
      }
    }

    const newColumnOrder = [...this.state.columnOrder];
    newColumnOrder.pop();

    const newState = {
      ...this.state,
      columnOrder: newColumnOrder,
      workouts: newWorkouts
    };

    this.setState(newState); 
  };

  addExercise = (workoutId) => {
    const exercises = {...this.state.exercises};
    var nextFreeKey = 0;

    const exercisesLength = (Object.keys(exercises).length);
    for (var i = 1; i < exercisesLength + 1; i++) {
      if (exercises[i] === undefined) {
        nextFreeKey = i;
        i = exercisesLength + 2;
      }
    }

    if (nextFreeKey === 0) {
      nextFreeKey = exercisesLength + 1;
    }

    const newExercise = {
      id: nextFreeKey,
      content: ''
    };

    const workouts = {...this.state.workouts};
    var newWorkout = workouts[workoutId];
    newWorkout.exerciseIds = [...newWorkout.exerciseIds, nextFreeKey];

    const newState = {
      ...this.state,
      exercises: {
        ...this.state.exercises,
        [nextFreeKey]: newExercise
      },
      workouts: {
        ...this.state.workouts,
        [workoutId]: newWorkout
      }
    };

    this.setState(newState);
  }

  deleteExercise = (workoutId, exerciseId) => {
    const exercises = this.state.exercises;
    const newExercises = {};

    for (var key in exercises) {
      if (parseInt(key) !== parseInt(exerciseId)) {
        const newExercise = {
          id: parseInt(key),
          content: exercises[key].content
        };
        newExercises[key] = newExercise;
      }
    }

    const workouts = {...this.state.workouts};
    const workoutExercises = workouts[workoutId].exerciseIds;
    const newWorkoutExercises = workoutExercises.filter(item => item !== exerciseId);
    workouts[workoutId].exerciseIds = newWorkoutExercises;

    const newState = {
      ...this.state,
      exercises: newExercises,
      workouts: workouts
    };

    this.setState(newState);

  }

  render() {
    return (
      <Container>
        <Header>
          Create program
        </Header>
        <Line />
        <Button primary>Save</Button>  
        <Link to="/programs"><Button>Back</Button></Link>
        <Container>

        <Label>Program name</Label>
        <Input placeholder="program name" />             
        </Container>
        <Button onClick={() => this.addNewWorkout()}>Add new workout</Button>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Row>
            {this.mapper()}
          </Row>
        </DragDropContext>  
      </Container>
    );
  }
};

export default ProgramCreate;