import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.primary ? "black" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

export const Badge = styled.div`
  background: ${props => props.primary ? "white" : "transparent"};
  color: ${props => props.primary ? "palevioletred" : "black"};
  font-size: 1em;
  padding-top: 3px;
  padding-bottom: 3px;
  border: 2px solid black;
  text-align: center;
  border-radius: 3px;
`;

export const Label = styled.label`
  display: block;
  margin: 5px;
`;

export const Input = styled.input`
  background: white;
  padding: 0.35em 1em;
  color: black;
  border-radius: 3px;
  border: 2px solid black;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
  width: 100%;
`;

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 3px;
  border: 2px solid white;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
`;

export const Header = styled.h1`
  margin-bottom: 10px;
  color: black;
`;

export const Line = styled.hr`
  border: 1px solid black;
`;