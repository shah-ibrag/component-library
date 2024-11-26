import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<Omit<LabelProps, 'text'>>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.color || '#000'};
  display: inline-block;
  margin-bottom: 8px;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, fontSize, color }) => (
  <StyledLabel htmlFor={htmlFor} fontSize={fontSize} color={color}>
    {text}
  </StyledLabel>
);

export default Label;
