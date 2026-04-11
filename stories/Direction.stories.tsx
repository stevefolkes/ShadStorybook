import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { DirectionProvider } from "@/components/ui/direction"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const meta: Meta = {
  title: "UI/DirectionProvider",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const LTR: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="flex flex-col gap-3 max-w-xs" dir="ltr">
        <p className="text-sm text-muted-foreground">Left-to-right layout</p>
        <Input placeholder="LTR input" />
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}

export const RTL: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-3 max-w-xs" dir="rtl">
        <p className="text-sm text-muted-foreground">Right-to-left layout (RTL)</p>
        <Input placeholder="RTL input" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button variant="outline">إلغاء</Button>
          <Button>تأكيد</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}
