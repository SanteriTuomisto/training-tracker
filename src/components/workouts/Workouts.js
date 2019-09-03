import React from 'react';
import { Container, Header, Line} from '../helpers/StyledComponents';

// TEMP:
import initialData from '../helpers/initialData';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

class Workouts extends React.Component {
  state = initialData;
  
  mapper() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
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

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {...column, taskIds: newTaskIds};

    const newState = { 
      ...this.state, 
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };

    this.setState(newState);

  };

  render() {
    return (
      <Container>
        <Header>
          Workouts
        </Header>
        <Line />
        <div>          
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.mapper()}
          </DragDropContext>  
        </div>

      </Container>
    );
  }
};

export default Workouts;