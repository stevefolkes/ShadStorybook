import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Search, Mail, Globe, Eye, EyeOff } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

const meta: Meta = {
  title: "UI/InputGroup",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const WithIcon: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupAddon align="inline-start">
        <InputGroupText><Search /></InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search…" />
    </InputGroup>
  ),
}

export const WithPrefix: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="yoursite.com" />
    </InputGroup>
  ),
}

export const WithSuffix: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupInput placeholder="username" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@example.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupInput type="password" placeholder="Password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Toggle visibility">
          <Eye />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTopLabel: Story = {
  render: () => (
    <InputGroup className="w-64">
      <InputGroupAddon align="block-start">
        <InputGroupText><Globe /> Website</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="https://example.com" />
    </InputGroup>
  ),
}
