import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Textarea } from "@/components/ui/textarea"

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = { args: { placeholder: "Type your message here." } }
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } }
export const WithValue: Story = { args: { defaultValue: "This is some pre-filled content.\nIt spans multiple lines." } }
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message" className="text-sm font-medium">Your message</label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
}
