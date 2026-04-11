import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from "lucide-react"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "UI/ButtonGroup",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const Formatting: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon"><Bold className="h-4 w-4" /></Button>
      <Button variant="outline" size="icon"><Italic className="h-4 w-4" /></Button>
      <Button variant="outline" size="icon"><Underline className="h-4 w-4" /></Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Sort by</ButtonGroupText>
      <Button variant="outline">Name</Button>
      <Button variant="outline">Date</Button>
      <Button variant="outline">Size</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  ),
}
