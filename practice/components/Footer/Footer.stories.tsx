import { Story, Meta } from '@storybook/react';

import Footer from '.';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
