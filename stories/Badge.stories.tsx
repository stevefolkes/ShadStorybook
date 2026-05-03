import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Badge } from "@/components/ui/badge"

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["grey", "blue", "yellow", "purple", "green", "red"],
    },
  },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Grey: Story = { args: { children: "Badge", variant: "grey" } }
export const Blue: Story = { args: { children: "Badge", variant: "blue" } }
export const Yellow: Story = { args: { children: "Badge", variant: "yellow" } }
export const Purple: Story = { args: { children: "Badge", variant: "purple" } }
export const Green: Story = { args: { children: "Badge", variant: "green" } }
export const Red: Story = { args: { children: "Badge", variant: "red" } }

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="grey">Grey</Badge>
      <Badge variant="blue">Blue</Badge>
      <Badge variant="yellow">Yellow</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="green">Green</Badge>
      <Badge variant="red">Red</Badge>
    </div>
  ),
}
