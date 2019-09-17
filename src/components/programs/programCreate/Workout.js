import React from 'react';
import { ContainerDrobbable, ContainerColumn, ContainerDraggable, ContainerAddNew, Input, Line, Button, Icon } from '../../StyledComponents';
import Exercise from './Exercise';
import { Droppable } from 'react-beautiful-dnd';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Workout extends React.Component {
    state = { title: '' };

    componentDidMount() {
        this.setState({ title: this.props.workout.title });
    }

    changeWorkoutName = (event) => {
        this.setState(({ title: event.target.value }));
        this.props.changeWorkoutName(event.target.value, this.props.workout)
    }

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
                            repsChange={this.props.repsChange}
                            setsChange={this.props.setsChange}
                        />
                    )}
                </div>
            );
        }
    }

    render() {
        return (
            <ContainerColumn>
                <Row>
                    <Col lg={9} sm={9} xs={9}>
                        <Input 
                            placeholder="Workout name"
                            value={this.state.title}
                            type="text"
                            onChange={event => this.changeWorkoutName(event)}
                        />
                    </Col>
                    <Col lg={3} sm={3} xs={3}>
                        <Button right primary onClick={() => this.props.deleteWorkout(this.props.workout.id)}><FaTrashAlt /></Button>                      
                    </Col>
                </Row>
                
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
