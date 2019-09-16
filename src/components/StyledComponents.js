import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.primary ? "black" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  float: ${props => props.right ? "right" : ""};

  &:hover {
    background: ${props => props.primary ? "#292929" : "#f5f5f5"};
    transition: background 0.2s ease;
  }
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
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
  width: 100%;
`;

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 6px;
  border: 2px solid white;
  box-shadow: rgba(0, 0, 0, 0.17) 0px 2px 20px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : '' )}; 
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
  color: black;
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
  border-radius: 3px;
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
  background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,255,255,1));
  color: black;
  cursor: pointer;
  position: absolute;
  padding-top: 30px;
  padding-bottom: 5px;
  bottom: 0px;
  text-align: center;
  width: 100%;
`;

export const H5_NoBottom_Margin = styled.h5`
  margin-bottom: 0px;
`;

export const HideButton = styled.div`
  color: black;
  cursor: pointer;
  padding-top: 20px;
  text-align: center;
  width: 100%;
`;