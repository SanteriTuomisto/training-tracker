import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'



class ExerciseList extends React.Component {
  // todo hae kannasta
  // todo uusien lisäys
  // todo lihaksen kuva?
  categories = [
    { id: 0, title: 'Chest' },
    { id: 1, title: 'Bicep' },
    { id: 2, title: 'Back' }
  ];

  exercises = [
    { id: 0, title: 'Bench press', categoria: 'Chest', description: "Rintaliikkeiden kuningas" },
    { id: 1, title: 'Squat', categoria: 'Legs', description: "Jalkaliikkeiden kuningas" },
    { id: 2, title: 'Deadlift', categoria: 'Back', description: "Koko kropan kuningas" }
  ];

  renderCategoriesList(categories) {
    return categories.map(categoria => {
      return (
        <Button variant="secondary" key={categoria.id}>
          {categoria.title}
        </Button>
      );
    });
  }

  renderExerciseList(exercises) {
    return exercises.map(exercise => {
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
              {this.renderCategoriesList(this.categories)}
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