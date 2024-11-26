import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<HeroImageProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height || '400px'};
  width: 100%;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, height }) => <StyledHeroImage src={src} height={height} />;

export default HeroImage;