import React from 'react';
import { ContainerDraggable, Input, Label, Button } from '../../StyledComponents';
import { Draggable } from 'react-beautiful-dnd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTrashAlt } from "react-icons/fa";
import Select from 'react-select';
import { fetchExercises } from '../../../actions';
import { connect } from 'react-redux';

class Exercise extends React.Component {
    state = { 
        selected: null, 
        exercises: [],
        sets: 0,
        reps: 0
    };

    async componentDidMount() {
        await this.props.fetchExercises();
        
        var exercises = [];
        for (var i = 0; i < this.props.exercises.length; i++) {
            var obj = { value: this.props.exercises[i].id, label: this.props.exercises[i].title };
            exercises.push(obj);
        }
        
        const newState = {
                selected: (this.props.exercise.exerciseId -1 ),
                exercises: exercises,
                sets: this.props.exercise.sets,
                reps: this.props.exercise.reps
            };
            
        this.setState(newState);
    }

    handleChange = selectedExercise => {
        const newState = {
            ...this.state,
            selected: (selectedExercise.value - 1)
        };

        this.props.exerciseChange(selectedExercise, this.props.exercise);

        this.setState(newState);
    };

    changeSetsValues = event => {
        const newState = {
            ...this.state,
            sets: event.target.value
        };

        this.props.setsChange(event.target.value, this.props.exercise);

        this.setState(newState);
    };

    changeRepsValues = event => {
        const newState = {
            ...this.state,
            reps: event.target.value
        };

        this.props.repsChange(event.target.value, this.props.exercise);

        this.setState(newState);
    };

    render() {
        return (
            <Draggable draggableId={this.props.exercise.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <ContainerDraggable
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging} // style if dragged
                    >
                        <Row>
                            <Col md={8}>
                                <Select 
                                    name="Exercise"
                                    options={this.state.exercises} 
                                    value={this.state.exercises[this.state.selected]}
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col md={4}>
                                <Button right primary onClick={() => this.props.deleteExercise(this.props.exercise.id)}><FaTrashAlt /></Button>  
                            </Col>
                            <Col>
                                <Label>Sets</Label>
                                <Input name="sets" type="number" value={this.state.sets} onChange={this.changeSetsValues} />
                            </Col>
                            <Col>
                                <Label>Reps</Label>
                                <Input name="reps" type="number" value={this.state.reps} onChange={this.changeRepsValues} />
                            </Col>                         
                        </Row>                      
                    </ContainerDraggable>
                )}               
            </Draggable>
        );
    }
}
  

const mapStateToProps = (state) => {
    return {
      exercises: Object.values(state.exercises)
    };
};

export default connect(mapStateToProps, { fetchExercises })(Exercise);