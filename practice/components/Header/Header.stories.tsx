import { Story, Meta } from '@storybook/react';

import Header from '.';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
