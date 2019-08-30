import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchExercises } from '../../actions';
import { connect } from 'react-redux';
import { Button, Container, Badge, Input } from '../helpers/StyledComponents';

class ExerciseList extends React.Component {
  state = { 
    selectedCategories: [],
    search: ''
  }; 

  componentDidMount() {
    this.props.fetchExercises();
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
                  <Col sm={8}>
                    <h4>{exercise.title}</h4>
                  </Col>
                  <Col sm={4}>       
                    <Badge>
                    {exercise.category}
                    </Badge>
                  </Col>
                  <h3>
                  </h3>
                </Row>
                <p>
                  {exercise.description} 
                </p>
                <Row>
                  <Col sm={6}>
                    <Button primary>Delete</Button>
                  </Col>
                  <Col sm={6}>
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
        <h2>Your Exercises:</h2>
        <Row>
          <Col sm={6}>
            <h4>Sort exercises by category:</h4>
            <ButtonGroup aria-label="Categories">
              {this.renderCategoriesList()}
            </ButtonGroup>
          </Col>
          <Col sm={6}>
            <h4>Search exercises:</h4>
            <Input type="text" placeholder="Search..." onChange={this.search} value={this.state.search} />
          </Col>
        </Row>
        <hr />
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