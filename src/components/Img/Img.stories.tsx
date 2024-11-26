import { Meta, StoryFn } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
};