import React from 'react';
import { ContainerDrobbable, ContainerColumn, ContainerDraggable, ContainerAddNew, Line, Button, Icon } from '../../StyledComponents';
import Exercise from './Exercise';
import { Droppable } from 'react-beautiful-dnd';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

class Workout extends React.Component {

    deleteExercise = (exerciseId) => {
        this.props.deleteExercise(this.props.workout.id, exerciseId);
    }

    renderExercise() {
        if(this.props.exercises.length === 0) {
            return (
                <ContainerDraggable>
                    Empty! Add or drag exercises
                </ContainerDraggable>
            );
        }
        else {
            return (
                <div>
                    {this.props.exercises.map((exercise, index) => 
                        <Exercise 
                            key={exercise.id} 
                            exercise={exercise} 
                            index={index} 
                            deleteExercise={() => this.deleteExercise(exercise.id)} 
                            exerciseChange={this.props.exerciseChange}
                        />                                      
                    )}
                </div>
            );
        }
    }

    render() {
        return (
            <ContainerColumn>
                <Button right primary onClick={() => this.props.deleteWorkout(this.props.workout.id)}><FaTrashAlt /></Button>  
                <h4>{this.props.workout.title}</h4>
                <Line />
                <Droppable droppableId={this.props.workout.id}>
                    {(provided, snapshot) => (
                        <ContainerDrobbable ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                            {this.renderExercise()}                           
                            {provided.placeholder}
                        </ContainerDrobbable>
                    )}
                </Droppable>
                <ContainerAddNew onClick={() => this.props.addExercise(this.props.workout.id)}>
                    <Icon>                            
                        <IoIosAddCircleOutline/>
                    </Icon>
                </ContainerAddNew>
            </ContainerColumn>
        );
    }
}

export default Workout;
