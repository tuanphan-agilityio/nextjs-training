import { Meta, Story } from '@storybook/react';

import CartItem, { CartItemProps } from '.';

export default {
  title: 'CartItem',
  component: CartItem,
} as Meta;

const Template: Story<CartItemProps> = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  productId: 1,
  name: 'Sample Product',
  price: 99.99,
  stock: 10,
  quantity: 1,
  onQuantityChange: () => {},
  onDeleteCartItem: () => {},
};
