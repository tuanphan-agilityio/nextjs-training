import { Meta, Story } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from '.';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category 1', href: '/products/category1' },
  ],
  className: 'text-quaternary',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  items: [
    { label: 'Custom', href: '/custom' },
    { label: 'Design', href: '/custom/design' },
  ],
  className: 'bg-primary text-secondary',
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [{ label: 'Single Item' }],
  className: 'text-quaternary',
};
