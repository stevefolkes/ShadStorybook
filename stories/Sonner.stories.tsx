import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "UI/Sonner",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Event has been created")}>
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.success("Profile updated successfully")}>
      Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.error("Something went wrong")}>
      Error Toast
    </Button>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Event created", { description: "Monday, January 3rd at 6:00pm" })}>
      Toast with Description
    </Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("File deleted", { action: { label: "Undo", onClick: () => console.log("Undo") } })}>
      Toast with Action
    </Button>
  ),
}
