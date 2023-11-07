import { Meta } from '@storybook/react';
import { FC } from 'react';

import Loading from '.';

export default {
  title: 'Loading',
  component: Loading,
} as Meta;

export const Default: FC = () => <Loading />;
