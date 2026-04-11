import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } }

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="accept" />
      <Label htmlFor="accept">Accept terms and conditions</Label>
    </div>
  ),
}

export const CheckboxGroup: Story = {
  render: () => (
    <div className="flex flex-col space-y-2">
      {["Recents", "Home", "Applications", "Desktop"].map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <Checkbox id={item} defaultChecked={item === "Recents"} />
          <Label htmlFor={item}>{item}</Label>
        </div>
      ))}
    </div>
  ),
}
