import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { fetchExercises } from '../../actions';
import { connect } from 'react-redux';

class ExerciseList extends React.Component {
  state = { selectedCategories: [] }; 

  componentDidMount() {
    this.props.fetchExercises();
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
            variant={(this.state.selectedCategories.includes(exercise.category) ? 'primary' : 'secondary')} 
            key={exercise.id}
          >
            {exercise.category}
          </Button>
        );
      }
      return null;
    });
  }

  renderExerciseList() {
    return this.props.exercises.map(exercise => {
      if (this.state.selectedCategories.length === 0 || this.state.selectedCategories.includes(exercise.category)) {
        return (
          <Col sm={4} key={exercise.id}>
            <Card>
              <Card.Body>
                <Card.Title>{exercise.title} <Badge variant="secondary">{exercise.category}</Badge></Card.Title>
                <Card.Text>{exercise.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      }
      else {
        return null;
      }
    });
  }

  render() {
    return (
      <div>
        <h4>Sort exercises by:</h4>
        <ButtonGroup aria-label="Basic example">
          {this.renderCategoriesList()}
        </ButtonGroup>
        <h4>Exercises:</h4>
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

export default connect(mapStateToProps, { fetchExercises })(ExerciseList);