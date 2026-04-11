import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta: Meta = {
  title: "UI/AspectRatio",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const SixteenByNine: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <div className="flex items-center justify-center h-full text-sm text-muted-foreground">16 / 9</div>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
        <div className="flex items-center justify-center h-full text-sm text-muted-foreground">1 / 1</div>
      </AspectRatio>
    </div>
  ),
}

export const FourByThree: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
        <div className="flex items-center justify-center h-full text-sm text-muted-foreground">4 / 3</div>
      </AspectRatio>
    </div>
  ),
}
