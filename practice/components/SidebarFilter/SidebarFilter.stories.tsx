import { Story, Meta } from '@storybook/react';

import SidebarFilter from '.';

export default {
  title: 'SidebarFilter',
  component: SidebarFilter,
} as Meta;

const Template: Story = (args) => <SidebarFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
