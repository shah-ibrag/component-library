import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.bgColor || '#007bff')};
  color: ${(props) => (props.disabled ? '#666' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    opacity: ${(props) => (props.disabled ? '1' : '0.8')};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick, bgColor }) => (
  <StyledButton disabled={disabled} onClick={onClick} bgColor={bgColor}>
    {label}
  </StyledButton>
);

export default Button;
