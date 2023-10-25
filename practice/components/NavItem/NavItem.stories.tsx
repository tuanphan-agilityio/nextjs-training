import { Meta, Story } from '@storybook/react';

import NavItem, { NavItemProps } from '.';

export default {
  component: NavItem,
  title: 'NavItem',
  decorators: [
    (Story) => (
      <ul className='flex font-secondary-regular text-md'>
        <Story />
      </ul>
    ),
  ],
} as Meta;

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />;

export const ActiveItem = Template.bind({});
ActiveItem.args = {
  isActive: true,
  href: '/active-link',
  title: 'Active Link',
};

export const InactiveItem = Template.bind({});
InactiveItem.args = {
  isActive: false,
  href: '/inactive-link',
  title: 'Inactive Link',
};
