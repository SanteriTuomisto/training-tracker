import React from 'react';
import { ContainerDraggable, Input, Label, Button } from '../../StyledComponents';
import { Draggable } from 'react-beautiful-dnd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTrashAlt } from "react-icons/fa";
import Select from 'react-select';

class Exercise extends React.Component {
    options = [{ value: '', label: 'Bench Press' },
    { value: '', label: 'Squat' },
    { value: '', label: 'Deadlift' }];
    
    /*componentDidMount() {
        for(var i = 0; i < this.props.exercises.length; i++) {
            var obj = { value: this.props.exercises[i].id, label: this.props.exercises[i].title };
            this.options.push(obj);
        }
    }*/

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
                                <Select options={
                                    this.options
                                } />
                            </Col>
                            <Col md={4}>
                                <Button right primary onClick={() => this.props.deleteExercise(this.props.exercise.id)}><FaTrashAlt /></Button>  
                            </Col>     
                            <Col>
                                <Label>Sets</Label>
                                <Input />
                            </Col>
                            <Col>
                                <Label>Reps</Label>                        
                                <Input />                        
                            </Col>                         
                        </Row>                      
                    </ContainerDraggable>
                )}               
            </Draggable>
        );
    }
}
  
export default Exercise;