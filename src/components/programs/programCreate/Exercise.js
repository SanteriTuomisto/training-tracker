import React from 'react';
import { ContainerDraggable, Input, Label, Button } from '../../StyledComponents';
import { Draggable } from 'react-beautiful-dnd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTrashAlt } from "react-icons/fa";

export default class Exercise extends React.Component {

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
                                <Input placeholder={this.props.exercise.content} />
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