import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const meta: Meta = {
  title: "Design System/Typography",
  parameters: { layout: "padded" },
}
export default meta
type Story = StoryObj

const SPECIMEN = "The quick brown fox jumps over the lazy dog"

const styles = [
  {
    name: "Title Super",
    element: "H1",
    size: "20px",
    weight: "600",
    lineHeight: "24px",
    tailwind: "text-xl",
    className: "text-xl font-semibold leading-6",
  },
  {
    name: "Title Large",
    element: "H2",
    size: "18px",
    weight: "600",
    lineHeight: "24px",
    tailwind: "text-lg",
    className: "text-lg font-semibold leading-6",
  },
  {
    name: "Title Standard",
    element: "H3",
    size: "16px",
    weight: "600",
    lineHeight: "20px",
    tailwind: "text-base",
    className: "text-base font-semibold leading-5",
  },
  {
    name: "Body Standard",
    element: "p",
    size: "16px",
    weight: "400",
    lineHeight: "20px",
    tailwind: "text-base",
    className: "text-base font-normal leading-5",
  },
  {
    name: "Body Small",
    element: "p small",
    size: "14px",
    weight: "400",
    lineHeight: "20px",
    tailwind: "text-sm",
    className: "text-sm font-normal leading-5",
  },
  {
    name: "Body Extra Small",
    element: "p extrasmall",
    size: "12px",
    weight: "400",
    lineHeight: "16px",
    tailwind: "text-xs",
    className: "text-xs font-normal leading-4",
  },
]

export const TextStyles: Story = {
  name: "Text Styles",
  render: () => (
    <div className="space-y-8 py-2">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">Typography</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Source Sans 3 &mdash; the primary typeface used throughout the design system.
        </p>
      </div>

      {/* Weights */}
      <div className="flex gap-8 text-foreground">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Regular</p>
          <p className="text-base font-normal">Aa Bb Cc 0123</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Semibold</p>
          <p className="text-base font-semibold">Aa Bb Cc 0123</p>
        </div>
      </div>

      {/* Styles table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%]">Specimen</TableHead>
            <TableHead>Style</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Line Height</TableHead>
            <TableHead>Class</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {styles.map((style) => (
            <TableRow key={style.name}>
              <TableCell>
                <span className={`${style.className} text-foreground`}>
                  {SPECIMEN}
                </span>
              </TableCell>
              <TableCell>
                <p className="text-sm font-medium text-foreground">{style.name}</p>
                <p className="text-xs text-muted-foreground">&lt;{style.element}&gt;</p>
              </TableCell>
              <TableCell className="text-sm tabular-nums">{style.size}</TableCell>
              <TableCell className="text-sm tabular-nums">{style.weight}</TableCell>
              <TableCell className="text-sm tabular-nums">{style.lineHeight}</TableCell>
              <TableCell>
                <Badge variant="grey">{style.tailwind}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
