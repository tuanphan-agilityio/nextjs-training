import { Story, Meta } from '@storybook/react';

import Logo from '.';

export default {
  component: Logo,
  title: 'Logo',
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Default = Template.bind({});
