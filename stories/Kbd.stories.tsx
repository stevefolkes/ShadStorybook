import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Kbd } from "@/components/ui/kbd"

const meta: Meta<typeof Kbd> = {
  title: "UI/Kbd",
  component: Kbd,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Kbd>

export const Default: Story = { args: { children: "⌘K" } }
export const Enter: Story = { args: { children: "Enter" } }
export const Escape: Story = { args: { children: "Esc" } }

export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <span className="text-sm text-muted-foreground">+</span>
      <Kbd>K</Kbd>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <p className="text-sm">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
    </p>
  ),
}
