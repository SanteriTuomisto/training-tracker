import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchExercises, deleteExercise } from '../../actions';
import { connect } from 'react-redux';
import { Button, Container, Badge, Input, Line } from '../StyledComponents';
import { FaTrashAlt, FaCheck } from "react-icons/fa";

// TODO edit (add exercise to modal which can be reused?)
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
            {(this.state.selectedCategories.includes(exercise.category) ? <FaCheck /> : null)}
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
              <Container>
                <Row>
                  <Col md={12} lg={8}>
                    <h4>{exercise.title}</h4>
                  </Col>
                  <Col md={12} lg={4}>       
                    <Badge>
                    {exercise.category}
                    </Badge>
                  </Col>
                </Row>
                <Line />
                <p>
                  {exercise.description} 
                </p>
                <Line />
                <Row>
                  <Col >
                    <Button primary onClick={() => this.deleteExercise(exercise.id, exercise.category)}><FaTrashAlt /></Button>
                    <Button>Edit</Button> 
                  </Col>
                </Row>
              </Container>
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
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <h4>Sort exercises by category:</h4>
              <ButtonGroup aria-label="Categories">
                {this.renderCategoriesList()}
              </ButtonGroup>
            </Col>
            <Col md={12} lg={6}>
              <h4>Search exercises:</h4>
              <Input type="text" placeholder="Search..." onChange={this.search} value={this.state.search} />
            </Col>
          </Row>
        </Container>
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