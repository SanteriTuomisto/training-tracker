import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  background: ${props => props.primary ? "black" : "#ffbc00"};
  color: ${props => props.primary ? "#ffbc00" : "black"};
  font-size: 1em;
  margin: 5px;
  padding: 0.50em 1.25em;
  border: none;
  letter-spacing: 2px;
  float: ${props => props.right ? "right" : ""};
  margin-top: ${props => props.marginTop ? "25px" : ""};

  &:hover {
    background: ${props => props.primary ? "#1d1d1d" : "#1d1d1d"};
    color: ${props => props.primary ? "#ffbc00" : "#ffbc00"};
    transition: background 0.2s ease;
  }
`;

export const Badge = styled.div`
  background: ${props => props.primary ? "white" : "transparent"};
  color: ${props => props.primary ? "palevioletred" : "black"};
  font-size: 1em;
  padding: 3px;
  border: 2px solid black;
  text-align: center;
  display: ${props => props.inline ? "inline" : ""}; 
`;

export const Label = styled.label`
  display: block;
  margin: 5px;
`;

export const Input = styled.input`
  background: white;
  padding: 0.35em 1em;
  color: black;
  border: 2px solid black;
  margin: 5px;
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
  width: 100%;
`;

export const Container = styled.div`
  background-color: #e6e6e6;
  margin-top: 20px;
  padding: 20px;
  color: ${props => (props.yellowText ? '#ffbc00' : 'black' )}; 
  background-color: ${props => (props.isDragging ? 'lightgreen' : '' )}; 
  background-color: ${props => (props.darkGray ? '#1d1d1d' : '' )}; 
  margin-bottom: ${props => (props.marginBottom ? '100px' : '' )}; 
  margin-top: ${props => (props.marginTop ? '130px' : '' )}; 
  background-color: ${props => (props.gray ? '#b7b7b7' : '' )};
  background-color: ${props => (props.yellow ? '#ffbc00' : '' )};
  background: ${props => (props.transparent ? 'none' : '' )};
`;

export const ContainerDrobbable = styled(Container)`
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : '' )}; 
  padding-top: 0px;
  padding-bottom: 20px;
  box-shadow: none;
  padding-left: 5px;
  padding-right: 5px;
  min-height: 150px;
`;

export const ContainerDraggable = styled(Container)`
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : '' )}; 
  cursor: grab;
`;

export const ContainerColumn = styled(Container)`
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
`;

export const ContainerAddNew= styled(Container)`
  background-color: #dadada;
  cursor: pointer;
  color: white;
  padding: 0px;
  padding-bottom: 10px;
  border: none;
  box-shadow: none;

  &:hover {
    background-color: #e8e8e8;
    transition: background 0.5s ease;
  }
`;

export const Header = styled.h1`
  margin-bottom: 10px;
  animation: ${props => (props.animation ? 'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;' : '' )}; 
  color: ${props => (props.yellow ? '#ffbc00' : 'black' )};
  text-align: ${props => (props.center ? 'center' : '' )};
  font-size: ${props => (props.large ? '5em' : '' )};
  margin-top: ${props => (props.marginTop ? '70px' : '' )}; 
  letter-spacing: 10px;

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  
`;

export const H3 = styled.h3`
  display: ${props => props.inline ? "inline" : ""}; 
  margin-right: ${props => props.marginRight ? "10px" : ""}; 
`;

export const Line = styled.hr`
  border: 1px solid black;
`;

export const Error = styled.div`
  background: white;
  color: red;
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid red;
`;

export const Icon = styled.div`
  margin-top: 0px;
  font-size: 50px;
  text-align: center;
`;

export const SemiHiddenBox = styled.div`
  height: ${props => (props.hide ? '150px' : '' )}; 
  overflow: ${props => (props.hide ? 'hidden' : '' )};;
`;

export const ShowMoreButton = styled.div`
  background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(30,30,30,1));
  color: white;
  cursor: pointer;
  position: absolute;
  padding-top: 30px;
  padding-bottom: 5px;
  bottom: 0px;
  text-align: center;
  width: 100%;
`;

export const H5NoBottomMargin = styled.h5`
  margin-bottom: 0px;
`;

export const HideButton = styled.div`
  color: black;
  cursor: pointer;
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;

export const Nav = styled.div`
`;

export const NavItem = styled.div`
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  color: #ffbc00;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 20px;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 300;

  &:hover {
    color: black;
    background-color: #ffbc00;
    transition: color 1s ease;
    transition: background 1s ease;
  }

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NavItemLogo = styled.div`
  color: white;
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 40px;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 300;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

  &:hover {
    color: black;
    background-color: #ffbc00;
    transition: color 1s ease;
    transition: background 1s ease;
  }

  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export const LogoBox = styled.div`
  background-color: #ffbc00;
  margin-top: 100px;
  padding-top: 150px;
  padding-bottom: 150px;
  padding-left: 20px;
  margin-right: -10px;
`;

export const FrontPageContent = styled.div`
  color: #d2d2d2;
  margin-left: -40px;
  margin-top: 150px;
  z-index: -1;
  background-color: #1d1d1d;
  padding: 30px;
`;