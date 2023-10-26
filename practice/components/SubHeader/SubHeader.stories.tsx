import { Story, Meta } from '@storybook/react';

import SubHeader, { SubHeaderProps } from '.';

export default {
  title: 'SubHeader',
  component: SubHeader,
} as Meta;

const Template: Story<SubHeaderProps> = (args) => <SubHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  breadcrumbItems: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/category/subcategory' },
  ],
  title: 'Page Title',
  description: 'This is a subheader description.',
};
