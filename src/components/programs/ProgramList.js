import React from 'react';
import { fetchExercises, fetchPrograms, deleteProgram } from '../../actions';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Line, Input, Badge, H3} from '../StyledComponents';
import { FaTrashAlt } from "react-icons/fa";
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
              <Container> 
                <Row>
                  <Col lg={8} sm={7} xs={6}>
                    <H3 inline marginRight>{program.title}</H3>  
                    <Badge inline>
                      {program.category}
                    </Badge>  
                  </Col>
                  <Col lg={4} sm={5} xs={6}>
                    <Link to={{ 
                        pathname: `/programs/edit/${program.id}`,
                        state: {
                          program: program,
                          edit: true
                        }             
                      }}>
                      <Button right>Edit</Button>
                    </Link>          
                    <Button right primary onClick={() => this.deleteProgram(program.id, program.category)}><FaTrashAlt /></Button>             
                  </Col> 
                  <Col sm={12}>                               
                    <Line />                  
                    <p>
                      {program.description}
                    </p>
                    {this.viewExercise(program)}
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
              <h4>Sort programs by category:</h4>
              <ButtonGroup aria-label="Categories">
                {this.renderCategoriesList()}
              </ButtonGroup>
            </Col>
            <Col md={12} lg={6}>
              <h4>Search programs:</h4>
              <Input type="text" placeholder="Search..." onChange={event => this.setState({ search: event.target.value })} value={this.state.search} />
            </Col>
          </Row>
        </Container>        
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