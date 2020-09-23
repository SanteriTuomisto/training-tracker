import React from 'react';
import { Button, Header, FrontPageContent, FrontPageButtons } from './StyledComponents';
import { Link } from 'react-router-dom';
import backgroundImage from "./../images/bgimg.jpg";

class FrontPage extends React.Component {

  componentDidMount() {
    document.body.style = `background-size: cover; background-image: url(${backgroundImage}); background-repeat: no-repeat;`;
  }

  render() {
    return (
      <FrontPageContent>

        <Header yellow center fontSize="6em" marginTop="90px" marginBottom="-30px" animation>TRAINING</Header>
        <Header yellow center fontSize="8em" shadow animation marginBottom="70px">TRACKER</Header>
        
        <FrontPageButtons aria-label="FrontPageButtons">
          <Link to="/programs">
            <Button variant="outline-primary" size="lg">PROGRAMS</Button>
          </Link>
          <Link to="/exercises">
            <Button variant="outline-primary" size="lg">EXERCISES</Button>
          </Link>  
          <Link to="/workouts">
            <Button variant="outline-primary" size="lg">WORKOUTS</Button>                      
          </Link>      
        </FrontPageButtons>
      </FrontPageContent>
    );
  }
};

export default FrontPage;