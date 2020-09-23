import React from 'react';
import { Button, Container, Header, ExerciseToolsContainer } from '../StyledComponents';
import { Link } from 'react-router-dom';

class Workouts extends React.Component {  
  componentDidMount() {
    document.body.style = `background-color: gray;`;
  }

  render() {
    return (
      <div>
        <Header yellow center fontSize="4em" marginTop="20px" animation>WORKOUTS</Header>
        <Container transparent marginBottom>
          <ExerciseToolsContainer>
            <Link to="/workouts/new"><Button primary>Add Workout</Button></Link>
          </ExerciseToolsContainer>
        </Container>
      </div>
    );
  }

};

export default Workouts;