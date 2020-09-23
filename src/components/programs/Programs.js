import React from 'react';
import ProgramList from './ProgramList';
import { Header, Container } from '../StyledComponents';

// TODO editProgram -> fetchProgram (like with exercises)

class Programs extends React.Component {
  componentDidMount() {
    document.body.style = `background-color: gray;`;
  }

  render() {
    return (
      <div>
        <Header yellow center fontSize="4em" marginTop="10px" animation>PROGRAMS</Header>
        <Container transparent marginBottom>
          <ProgramList />
        </Container>
      </div>  
      );
  }
}

export default Programs;