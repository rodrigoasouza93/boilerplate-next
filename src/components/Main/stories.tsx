import { Meta, Story } from '@storybook/react/types-6-0'

import Main from '.'

const storie = {
  title: 'Main',
  component: Main
} as Meta

export default storie

export const Basic: Story = (args) => <Main {...args} />
