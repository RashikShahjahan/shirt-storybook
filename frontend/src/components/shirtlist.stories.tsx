import type { Meta, StoryObj } from '@storybook/react';

import Shirtlist from './shirtlist';

const meta = {
  component: Shirtlist,
} satisfies Meta<typeof Shirtlist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};