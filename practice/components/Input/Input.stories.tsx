import React from 'react';
import { Meta, Story } from '@storybook/react';

import Input, { InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  className: 'rounded-lg border border-1 border-solid border-tertiary',
};

export const WithEndDecorator = Template.bind({});
WithEndDecorator.args = {
  className:
    'max-w-[488px] rounded-lg border border-1 border-solid border-tertiary',
  label: 'Email',
  placeholder: 'Enter your email',
  endDecorator: <div>Icon</div>,
};
