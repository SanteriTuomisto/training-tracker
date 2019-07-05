import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

class ExerciseList extends React.Component {
  state = { selectedCategories: [] }; 

  // todo hae kannasta
  // todo uusien lisäys
  // todo kuva?
  exercises = [
    { id: 0, title: 'Bench press', categoria: 'Chest', description: "Rintaliikkeiden kuningas" },
    { id: 1, title: 'Squat', categoria: 'Legs', description: "Jalkaliikkeiden kuningas" },
    { id: 2, title: 'Deadlift', categoria: 'Back', description: "Koko kropan kuningas" },
    { id: 3, title: 'Pushdown', categoria: 'Triceps', description: "Vemputus" }
  ];

  selectCategoria(title) {
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

  renderCategoriesList(exercises) {
    return exercises.map(exercise => {
      return (
        <Button onClick={() => this.selectCategoria(exercise.categoria)} 
          variant={(this.state.selectedCategories.includes(exercise.categoria) ? 'primary' : 'secondary')} 
          key={exercise.id}
        >
          {exercise.categoria}
        </Button>
      );
    });
  }

  renderExerciseList(exercises) {
    return exercises.map(exercise => {
      if (this.state.selectedCategories.length === 0 || this.state.selectedCategories.includes(exercise.categoria)) {
        return (
          <Col sm={6} key={exercise.id}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{exercise.title} <Badge variant="secondary">{exercise.categoria}</Badge></Card.Title>
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
        <h1>Exercises</h1>
        <Row>
          <Col sm={4}>
            <h4>Add new exercise:</h4>
            <p>Todo form</p>
          </Col>
          <Col sm={8}>
            <h4>Sort exercises by:</h4>
            <ButtonGroup aria-label="Basic example">
              {this.renderCategoriesList(this.exercises)}
            </ButtonGroup>
            <h4>Exercises:</h4>
            <Row>
              {this.renderExerciseList(this.exercises)}
            </Row>
          </Col>        
        </Row>
      </div>
    );
  }
}

export default ExerciseList; 