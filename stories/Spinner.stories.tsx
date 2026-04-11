import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Spinner } from "@/components/ui/spinner"

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
export const Small: Story = { args: { className: "h-4 w-4" } }
export const Large: Story = { args: { className: "h-12 w-12" } }
export const Colored: Story = { args: { className: "text-primary" } }

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner className="h-4 w-4" />
      <span className="text-sm">Loading…</span>
    </div>
  ),
}
