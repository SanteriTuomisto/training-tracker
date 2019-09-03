import React from 'react';
import { Container } from '../helpers/StyledComponents';
import Task from './Task';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <h3>{this.props.column.title}</h3>
                <Row>
                    <Col md={5}>
                        <Droppable droppableId={this.props.column.id}>
                            {provided => (
                                <Container ref={provided.innerRef} {...provided.droppableProps}>
                                    {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                    {provided.placeholder}
                                </Container>
                            )}
                        </Droppable>
                    </Col>
                </Row>
            </Container>
        );
    }
}