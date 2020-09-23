import React from 'react';
import { fetchExercises, fetchPrograms, deleteProgram } from '../../actions';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ExerciseContainer, Input, Badge, ExerciseContainerInner, IconButton, ExerciseButton, ExerciseToolsContainer, ExerciseHeader, BadgeText } from '../StyledComponents';
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Program from './Program';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class ProgramList extends React.Component {
  state = { 
    selectedCategories: [],
    search: ''
 };

  componentDidMount() {
    this.props.fetchExercises();
    this.props.fetchPrograms();
  }

  viewExercise(program) {
    return (
      <Program program={program} exercises={this.props.exercises}/>
    );
  }

  renderCategoriesList() {
    const categories = [];
    return this.props.programs.map(program => {
      if (!categories.includes(program.category)) {
        categories.push(program.category);
        return (
          <Button 
            onClick={() => this.selectCategory(program.category)} 
            primary={(this.state.selectedCategories.includes(program.category) ? 'primary' : '')} 
            key={program.id}
          >
            {(this.state.selectedCategories.includes(program.category) ? <IconButton><FaCheck /></IconButton> : null)}
            {program.category}
          </Button>
        );
      }
      return null;
    });
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

  deleteProgram(id, category) {
    // remove category from state if selected currently
    if (this.state.selectedCategories.includes(category)) {
      const newSelectedCategories = this.state.selectedCategories.filter(item => item !== category);

      const newState = {
        ...this.state,
        selectedCategories: newSelectedCategories
      };

      this.setState(newState);
    }

    this.props.deleteProgram(id);
  }

  renderProgramList() {
    return this.props.programs.map(program => {
      if (this.state.selectedCategories.length === 0 || 
        this.state.selectedCategories.includes(program.category)) {
        if(this.state.search.length === 0 || 
          program.title.toLowerCase().includes(this.state.search.toLowerCase())) {
          return (
            <Col sm={12} key={program.id}>
              <ExerciseContainer transparent blur shadow>
                <Row>
                  <Col md={12}>
                    <ExerciseHeader center marginTop marginBottom size={'32px'}>{program.title}</ExerciseHeader>
                  </Col>
                  <Col md={12}>
                    <Badge>
                        <BadgeText>{program.category}</BadgeText>
                    </Badge>
                  </Col>
                </Row>
                <ExerciseContainerInner>              
                  <p>
                    {program.description} 
                  </p>
                </ExerciseContainerInner>
                <Row>
                  <Col sm={12}>                                                              
                    {this.viewExercise(program)}
                  </Col>             
                </Row>
                <Link to={{ 
                      pathname: `/programs/edit/${program.id}`,
                      state: {
                        program: program,
                        edit: true
                      }             
                    }}>
                    <ExerciseButton>Edit</ExerciseButton> 
                </Link>              
                <ExerciseButton primary onClick={() => this.deleteProgram(program.id, program.category)}><FaTrashAlt /></ExerciseButton>                               
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
          <Link to="/programs/new"><Button primary>Create Program</Button></Link>
          <hr/>
          <Row>
            <Col md={12} lg={8}>
              <ExerciseHeader>Sort</ExerciseHeader>
              <ButtonGroup aria-label="Categories">
                {this.renderCategoriesList()}
              </ButtonGroup>
            </Col>
            <Col md={12} lg={4}>
              <ExerciseHeader>Search</ExerciseHeader>
              <Input type="text" placeholder="Program..." onChange={event => this.setState({ search: event.target.value })} value={this.state.search} />
            </Col>
          </Row>
        </ExerciseToolsContainer>        
        <Row>
          {this.renderProgramList()}
        </Row>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    exercises: Object.values(state.exercises),
    programs: Object.values(state.programs)
  };
};

export default connect(mapStateToProps, { fetchExercises, fetchPrograms, deleteProgram })(ProgramList);