import React from 'react';
import styled from 'styled-components';

const SharedButton = styled.button`
  background: #ffffff;
  border: 2px solid #57555c;
  box-shadow: ${(props) =>
    props.color
      ? `-2px 4px 0px var(--${props.color})`
      : `-2px 4px 0px #3bcd92`};

  border-radius: 15px;
  font-family: 'Baloo Bhai';
  font-size: 14px;
  padding: 0.5em 3em;
  width: ${(props) => (props.width ? props.width : 'fit-content')};
  cursor: pointer;
  color: #57555c;
  margin-top: 0.5em;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.space ? 'space-between' : 'center')};

  .MuiSvgIcon-root {
    color: ${(props) => `var(--${props.color})`};
  }
`;

const Button = ({ children, color, width, onClick, disabled, icon, space }) => {
  return (
    <SharedButton
      color={color}
      width={width}
      onClick={onClick}
      disabled={disabled}
      space={space}
    >
      {children}
      {icon && icon}
    </SharedButton>
  );
};

export default Button;
