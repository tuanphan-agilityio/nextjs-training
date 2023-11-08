import { Story, Meta } from '@storybook/react';

import PreviewImages, { PreviewImagesProps } from '.';

export default {
  title: 'PreviewImages',
  component: PreviewImages,
  decorators: [
    (Story) => (
      <div className='max-w-[588px]'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<PreviewImagesProps> = (args) => (
  <PreviewImages {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageHrefs: [
    '/images/product-1.webp',
    '/images/product-2.webp',
    '/images/product-3.webp',
  ],
};
