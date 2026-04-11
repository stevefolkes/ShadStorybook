import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Progress } from "@/components/ui/progress"

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
  },
}
export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = { args: { value: 60 } }
export const Empty: Story = { args: { value: 0 } }
export const Half: Story = { args: { value: 50 } }
export const Full: Story = { args: { value: 100 } }
