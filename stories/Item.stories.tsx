import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Mail, Star, Trash2 } from "lucide-react"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const meta: Meta = {
  title: "UI/Item",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Item className="max-w-sm">
      <ItemMedia variant="icon">
        <Mail />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Inbox</ItemTitle>
        <ItemDescription>View all your incoming messages.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Badge>12</Badge>
      </ItemActions>
    </Item>
  ),
}

export const ItemGroupExample: Story = {
  render: () => (
    <ItemGroup className="max-w-sm">
      {["Design", "Marketing", "Engineering"].map((team) => (
        <Item key={team} variant="outline">
          <ItemContent>
            <ItemTitle>{team}</ItemTitle>
            <ItemDescription>Team workspace and shared resources.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Star className="h-4 w-4" />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <ItemGroup className="max-w-sm">
      {["Alice", "Bob", "Charlie"].map((name) => (
        <Item key={name} size="sm" variant="muted">
          <ItemMedia variant="icon">
            <Mail />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{name}</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Trash2 className="h-3 w-3" />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  ),
}
