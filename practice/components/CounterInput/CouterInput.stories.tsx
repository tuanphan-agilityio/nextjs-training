import { action } from '@storybook/addon-actions';

import { Story, Meta } from '@storybook/react';

import CounterInput, { CounterInputProps } from '.';

export default {
  title: 'CounterInput',
  component: CounterInput,
} as Meta;

const Template: Story<CounterInputProps> = (args) => (
  <CounterInput onValueChange={action('Value changed')} {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithCustomInitialValue = Template.bind({});
WithCustomInitialValue.args = {
  initialValue: 5,
  minValue: 0,
  maxValue: 10,
};
