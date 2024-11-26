import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Img: React.FC<ImgProps> = ({ src, alt }) => <StyledImg src={src} alt={alt} />;

export default Img;