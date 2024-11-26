import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://cryodragon.ca/wp-content/uploads/2017/11/CryoDragon-Slider-Arctic-Background-with-Water-3000w-1200x400.jpg',
  height: '400px',
};