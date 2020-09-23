import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavItem, NavItemLogo, Nav, StyledLink } from './StyledComponents';
import { FaDumbbell } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <Nav>
        <Row>
          <Col>
            <StyledLink to="/"><NavItemLogo><FaDumbbell /></NavItemLogo></StyledLink>
          </Col>
          <Col md={{ offset: 3 }}>
          <StyledLink to="/programs"><NavItem>PROGRAMS</NavItem></StyledLink>          
          </Col>
          <Col>
          <StyledLink to="/exercises"><NavItem>EXERCISES</NavItem></StyledLink>
          </Col>
          <Col>
          <StyledLink to="/workouts"><NavItem>WORKOUTS</NavItem></StyledLink>
          </Col>
          <Col>
          </Col>
        </Row>
      </Nav>

    );
  }

};

export default Header;