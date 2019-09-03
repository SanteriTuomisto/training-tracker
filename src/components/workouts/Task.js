import React from 'react';
import { Container } from '../helpers/StyledComponents';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {this.props.task.content}
                    </Container>
                )}               
            </Draggable>
        );
    }
}