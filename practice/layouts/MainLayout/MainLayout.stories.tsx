import { Story, Meta } from '@storybook/react';

import MainLayout, { MainLayoutProps } from '.';

export default {
  component: MainLayout,
  title: 'MainLayout',
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <h1>Content goes here</h1>
      <p>This is the main content of the layout.</p>
    </div>
  ),
};
