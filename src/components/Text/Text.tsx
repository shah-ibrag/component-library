import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ color?: string; fontSize?: string }>`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
`;


const Text: React.FC<TextProps> = ({ content, color, fontSize }) => {
  return (
    <StyledText color={color} fontSize={fontSize}>
      {content}
    </StyledText>
  );
};

export default Text;
