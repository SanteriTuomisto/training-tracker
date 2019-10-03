import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchExercises, deleteExercise } from '../../actions';
import { connect } from 'react-redux';
import { Button, IconButton, Badge, Input, ExerciseHeader, BadgeText, ExerciseContainerInner, ExerciseContainer, ExerciseButton, ExerciseToolsContainer } from '../StyledComponents';
import { FaTrashAlt, FaCheck } from "react-icons/fa";

// TODO edit (add exercise-box to modal which can be reused?)
// TODO check if exercise is used in program when deleted

class ExerciseList extends React.Component {
  state = { 
    selectedCategories: [],
    search: ''
  }; 

  componentDidMount() {
    this.props.fetchExercises();
  }

  deleteExercise(id, category) {
    // remove category from state if selected currently
    if (this.state.selectedCategories.includes(category)) {
      const newSelectedCategories = this.state.selectedCategories.filter(item => item !== category);

      const newState = {
        ...this.state,
        selectedCategories: newSelectedCategories
      };

      this.setState(newState);
    }

    this.props.deleteExercise(id);
  }
  
  search = (event) => {
    this.setState({ search: event.target.value });
  }

  selectCategory(title) {
    if (this.state.selectedCategories.includes(title)) {
      const filtered = this.state.selectedCategories.filter(item => item !== title);
      this.setState({ selectedCategories: filtered });
    }
    else {
      this.setState(prevState => ({
        selectedCategories: [...prevState.selectedCategories, title]
      }));
    }
  }

  renderCategoriesList() {
    const categories = [];
    return this.props.exercises.map(exercise => {
      if (!categories.includes(exercise.category)) {
        categories.push(exercise.category);
        return (
          <Button 
            onClick={() => this.selectCategory(exercise.category)} 
            primary={(this.state.selectedCategories.includes(exercise.category) ? 'primary' : '')} 
            key={exercise.id}
          >
            {(this.state.selectedCategories.includes(exercise.category) ? <IconButton><FaCheck /></IconButton> : null)}
            {exercise.category}
          </Button>
        );
      }
      return null;
    });
  }

  renderExerciseList() {
    return this.props.exercises.map(exercise => {
      if (this.state.selectedCategories.length === 0 || 
          this.state.selectedCategories.includes(exercise.category)) {
        if(this.state.search.length === 0 || 
           exercise.title.toLowerCase().includes(this.state.search.toLowerCase())) {
          return (
            <Col sm={4} key={exercise.id}>
              <ExerciseContainer transparent blur shadow>
                <Row>
                  <Col md={12}>
                    <ExerciseHeader center marginTop marginBottom>{exercise.title}</ExerciseHeader>
                  </Col>
                  <Col md={12}>
                    <Badge>
                        <BadgeText>{exercise.category}</BadgeText>
                    </Badge>
                  </Col>

                </Row>
                <ExerciseContainerInner>

                  
                  <p>
                    {exercise.description} 
                  </p>
                
                </ExerciseContainerInner>
                <ExerciseButton>Edit</ExerciseButton> 
                <ExerciseButton primary onClick={() => this.deleteExercise(exercise.id, exercise.category)}><FaTrashAlt /></ExerciseButton>                  
              </ExerciseContainer>
            </Col>
          );
        }
        else {
          return null;
        }      
      }
      else {
        return null;
      }
    });
  }

  render() {
    return (
      <div>
        <ExerciseToolsContainer>
          <Row>
            <Col md={12} lg={8}>
              <ExerciseHeader>Sort</ExerciseHeader>
              <ButtonGroup aria-label="Categories">
                {this.renderCategoriesList()}
              </ButtonGroup>
            </Col>
            <Col md={12} lg={4}>
              <ExerciseHeader>Search</ExerciseHeader>
              <Input type="text" placeholder="Exercise..." onChange={this.search} value={this.state.search} />
            </Col>
          </Row>
        </ExerciseToolsContainer>
        <Row>
          {this.renderExerciseList()}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: Object.values(state.exercises)
  };
};

export default connect(mapStateToProps, { fetchExercises, deleteExercise })(ExerciseList);