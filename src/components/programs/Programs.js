import React from 'react';
import ProgramList from './ProgramList';
import { Button, Header, Container } from '../StyledComponents';
import { Link } from 'react-router-dom';

class Programs extends React.Component {
  componentDidMount() {
    // todo betteR?
    document.body.style = "background-image: url('https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');";
  }

  render() {
    return (
      <div>
        <Header yellow center large marginTop animation>PROGRAMS</Header>
        <Container transparent marginBottom marginTop>
          <Link to="/programs/new"><Button primary>Create Program</Button></Link>
          <ProgramList />
        </Container>
      </div>  
      );
  }
}

export default Programs;