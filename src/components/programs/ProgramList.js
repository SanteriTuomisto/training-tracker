import React from 'react';
import { fetchExercises, fetchPrograms, deleteProgram } from '../../actions';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container, Line } from '../StyledComponents';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Program from './Program';

class ProgramList extends React.Component {

  componentDidMount() {
    this.props.fetchExercises();
    this.props.fetchPrograms();
  }

  viewExercise(program) {
    return (
      <Program program={program} exercises={this.props.exercises}/>
    );
  }

  renderProgramList() {
    return this.props.programs.map(program => {
      return (
        <Col sm={12} key={program.id}>
          <Container> 
            <Row>
              <Col lg={8} sm={7} xs={6}>
                <h3>{program.title}</h3>                  
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
                <Button right primary onClick={() => this.props.deleteProgram(program.id)}><FaTrashAlt /></Button>             
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
    });
  }

  render() {
    return (
      <div>
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