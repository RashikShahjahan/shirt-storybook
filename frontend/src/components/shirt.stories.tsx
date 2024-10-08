import type { Meta, StoryObj } from '@storybook/react';

import Shirt from './shirt';

const meta = {
  component: Shirt,
} satisfies Meta<typeof Shirt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};