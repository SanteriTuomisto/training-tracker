import React from 'react';
import { Container, Header, Line, Button, Label, Input, Error } from '../../StyledComponents';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import initialData from '../../helpers/initialDataProgram';
import Workout from './Workout';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { createProgram, editProgram } from '../../../actions';

class ProgramCreate extends React.Component {
  state = initialData;
  
  edit = false;

  componentDidMount() {
    // If editing program
    const data = this.props.location.state;
    if (data !== undefined) {
      data.titleError = false;
      data.categoryError = false;
      this.setState(data.program);
      this.edit = data.edit;
    }
    else {
      const newState = {
        ...this.state,
        titleError: false,
        categoryError: false
      };

      this.setState(newState);
    }
  }

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
            exerciseChange={this.exerciseChange}
            repsChange={this.repsChange}
            setsChange={this.setsChange}
            changeWorkoutName={this.changeWorkoutName}
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
    
    // remove exercises
    const exercises = {...this.state.exercises};
    const workoutExerciseIds = Array.from(workouts[id].exerciseIds);

    const newExercises = {};
    for (var exerciseId in exercises) {
      if (!workoutExerciseIds.includes(parseInt(exerciseId))) {
        newExercises[exerciseId] = exercises[exerciseId];
      }      
    }
    
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
      exercises: newExercises,
      workouts: newWorkouts
    };

    this.setState(newState); 
  };

  changeWorkoutName = (newTitle, workout) => {
    const newWorkout = {
      ...workout,
      title: newTitle
    };

    const newState = {
      ...this.state,
      workouts: {
        ...this.state.workouts,
        [workout.id]: newWorkout
      }
    };

    this.setState(newState);
  }

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
      exerciseId: null,
      sets: 0,
      reps: 0
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
          exerciseId: exercises[key].exerciseId,
          sets: exercises[key].sets,
          reps: exercises[key].reps
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

  exerciseChange = (selectorData, exercise) => {
    const newExercise = {
      id: exercise.id,
      exerciseId: selectorData.value,
      sets: exercise.sets,
      reps: exercise.reps
    };

    const newState = {
      ...this.state,
      exercises: {
        ...this.state.exercises,
        [exercise.id]: newExercise
      }
    };

    this.setState(newState);
  }

  repsChange = (value, exercise) => {
    const newExercise = {
      ...exercise,
      reps: value
    }

    const newState = {
      ...this.state,
      exercises: {
        ...this.state.exercises,
        [exercise.id]: newExercise 
      }
    }

    this.setState(newState);
  }

  setsChange = (value, exercise) => {
    const newExercise = {
      ...exercise,
      sets: value
    }

    const newState = {
      ...this.state,
      exercises: {
        ...this.state.exercises,
        [exercise.id]: newExercise 
      }
    }

    this.setState(newState);
  }

  onSaveButtonPress = () => {
    if (this.state.title !== '' && this.state.category !== '') {
      // remove error from state
      const newState = {
        ...this.state,
        titleError: undefined,
        categoryError: undefined
      };

      this.setState(newState);

      if (this.edit) {
        this.props.editProgram(this.state.id, newState);
      }
      else {
        this.props.createProgram(newState);
      }
    }
    else {
      const newState = {
        ...this.state,
        titleError: this.state.title === '' ? true : false,
        categoryError: this.state.category === '' ? true : false
      };

      this.setState(newState);
      return;
    } 
  }

  renderHeader() {
    if (this.edit) {
      return <Header>Edit program</Header>;
    }
    
    return <Header>Create program</Header>;
  }

  renderTitleError() {
    if (this.state.titleError) {
      return (
        <Error>Please enter program name</Error>
      );
    }
    
    return;
  }

  renderCategoryError() {
    if (this.state.categoryError) {
      return (
        <Error>Please enter category name</Error>
      );
    }
    
    return;
  }

  render() {
    return (
      <Container gray>
        {this.renderHeader()}
        <Line />
        <Button primary onClick={this.onSaveButtonPress}>Save</Button>
        <Link to="/programs"><Button>Back</Button></Link>
        <Container>
        <Label>Program name*</Label> 
        <Input 
          placeholder="program name" 
          type="text" 
          value={this.state.title} 
          onChange={event => this.setState({ title: event.target.value })} 
        />
        {this.renderTitleError()}
        <Label>Category*</Label> 
        <Input 
          placeholder="category" 
          type="text" 
          value={this.state.category}
          onChange={event => this.setState({ category: event.target.value })} 
        />  
        {this.renderCategoryError()}
        <Label>Description</Label> 
        <Input 
          placeholder="description" 
          type="text" 
          value={this.state.description} 
          onChange={event => this.setState({ description: event.target.value })} 
        />  
        </Container>
        <Button marginTop onClick={() => this.addNewWorkout()}>Add new workout</Button>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Row>
            {this.mapper()}
          </Row>
        </DragDropContext>  
      </Container>
    );
  }
}; 

export default connect(null, { createProgram, editProgram })(ProgramCreate);