import { Meta, StoryFn } from '@storybook/react'; 
import Label from './Label'; 
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />; // Specify the type for args

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
  fontSize: '16px',
  color: '#000',
};

export const LargeLabel = Template.bind({});
LargeLabel.args = {
  text: 'Large Label',
  fontSize: '24px',
  color: '#333',
};
