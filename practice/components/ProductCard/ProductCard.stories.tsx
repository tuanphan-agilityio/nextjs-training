import { Story, Meta } from '@storybook/react';

import ProductCard, { ProductCardProps } from '.';

export default {
  title: 'ProductCard',
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Sample Product',
  price: 100,
  status: 'In Stock',
  imgHref: '/images/product-1.jpg',
};
