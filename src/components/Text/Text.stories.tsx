import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types'; // Importing the TextProps

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default Text',
  color: 'black',
  fontSize: '16px',
};

export const LargeText = Template.bind({});
LargeText.args = {
  content: 'Large Text',
  color: 'blue',
  fontSize: '24px',
};
