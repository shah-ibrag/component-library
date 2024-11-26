import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => (
  <label>
    <StyledRadioButton type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    {label}
  </label>
);

export default RadioButton;