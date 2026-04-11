import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { FileX, Plus } from "lucide-react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "UI/Empty",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileX />
        </EmptyMedia>
        <EmptyTitle>No files found</EmptyTitle>
        <EmptyDescription>You don't have any files yet. Upload your first file to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <Plus /> Upload file
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const Simple: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No results</EmptyTitle>
        <EmptyDescription>Try adjusting your search or filter to find what you're looking for.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
