import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Mail, Loader2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = { args: { children: "Button" } }
export const Destructive: Story = { args: { children: "Delete", variant: "destructive" } }
export const Outline: Story = { args: { children: "Outline", variant: "outline" } }
export const Secondary: Story = { args: { children: "Secondary", variant: "secondary" } }
export const Ghost: Story = { args: { children: "Ghost", variant: "ghost" } }
export const Link: Story = { args: { children: "Link", variant: "link" } }
export const Small: Story = { args: { children: "Small", size: "sm" } }
export const Large: Story = { args: { children: "Large", size: "lg" } }
export const WithIcon: Story = {
  args: { children: "Send email" },
  render: (args) => (
    <Button {...args}>
      <Mail /> Send email
    </Button>
  ),
}
export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="animate-spin" /> Loading…
    </Button>
  ),
}
export const IconOnly: Story = {
  args: { size: "icon", variant: "outline" },
  render: (args) => (
    <Button {...args}>
      <ChevronRight />
    </Button>
  ),
}
