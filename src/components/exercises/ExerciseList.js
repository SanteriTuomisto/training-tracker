import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchExercises, deleteExercise, fetchPrograms } from '../../actions';
import { connect } from 'react-redux';
import { Button, IconButton, Badge, Input, ExerciseHeader, BadgeText, ExerciseContainerInner, ExerciseContainer, ExerciseButton, ExerciseToolsContainer } from '../StyledComponents';
import { FaTrashAlt, FaCheck } from "react-icons/fa";

// TODO error msg when deleting used exercise 

class ExerciseList extends React.Component {
  state = { 
    selectedCategories: [],
    search: ''
  }; 

  componentDidMount() {
    this.props.fetchExercises();
    this.props.fetchPrograms();
  }

  deleteExercise(id, category) {
    // check if used in workouts
    var used = false;
    for (var i = 0; i < this.props.programs.length; i++) {
      var exercises = this.props.programs[i].exercises;

      for (const key of Object.keys(exercises)) {
        if (exercises[key].exerciseId === id) {
          // TODO error msg
          console.log("ei voi poistaa");
          console.log(this.props.programs[i]);
          used = true;
        }
      }
    } 

    if (!used) {
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
            <Col md={4} key={exercise.id}>
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
                <Link to={{ 
                      pathname: `/exercises/edit/${exercise.id}`         
                    }}>
                    <ExerciseButton>Edit</ExerciseButton> 
                </Link> 
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
          <Link to="/exercises/new"><Button primary>Create Exercise</Button></Link>
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
    exercises: Object.values(state.exercises),
    programs: Object.values(state.programs)
  };
};

export default connect(mapStateToProps, { fetchExercises, deleteExercise, fetchPrograms })(ExerciseList);