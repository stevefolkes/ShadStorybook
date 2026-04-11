import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Input } from "@/components/ui/input"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = { args: { placeholder: "Email" } }
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } }
export const WithValue: Story = { args: { defaultValue: "shadcn@example.com", type: "email" } }
export const Password: Story = { args: { type: "password", placeholder: "Password" } }
export const File: Story = { args: { type: "file" } }
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}
