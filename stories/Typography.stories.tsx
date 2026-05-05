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

const classes = [
  {
    cls: "text-xs",
    px: "12px",
    usages: 43,
    weights: ["font-normal", "font-medium", "font-semibold"],
    scaleName: "Body Extra Small",
    inScale: true,
  },
  {
    cls: "text-sm",
    px: "14px",
    usages: 135,
    weights: ["font-normal", "font-medium", "font-semibold"],
    scaleName: "Body Small",
    inScale: true,
  },
  {
    cls: "text-base",
    px: "16px",
    usages: 10,
    weights: ["font-normal", "font-semibold"],
    scaleName: "Body Standard / Title Standard",
    inScale: true,
  },
  {
    cls: "text-lg",
    px: "18px",
    usages: 5,
    weights: ["font-semibold"],
    scaleName: "Title Large",
    inScale: true,
  },
  {
    cls: "text-xl",
    px: "20px",
    usages: 3,
    weights: ["font-semibold"],
    scaleName: "Title Super",
    inScale: true,
  },
  {
    cls: "text-2xl",
    px: "24px",
    usages: 1,
    weights: ["font-bold"],
    scaleName: null,
    inScale: false,
    note: "app/page.tsx — gallery heading",
  },
  {
    cls: "text-3xl",
    px: "30px",
    usages: 1,
    weights: ["font-semibold"],
    scaleName: null,
    inScale: false,
    note: "Carousel story — slide numbers (demo only)",
  },
  {
    cls: "text-4xl",
    px: "36px",
    usages: 2,
    weights: ["font-semibold"],
    scaleName: null,
    inScale: false,
    note: "Carousel story + Card example (demo only)",
  },
]

export const TextStyles: Story = {
  name: "Text Styles",
  render: () => (
    <div className="space-y-4 py-2">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Typography in use</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Every Tailwind text-size class currently referenced across components, stories, and app pages.
          Font: Source Sans 3 · Base size: 16px.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%]">Class</TableHead>
            <TableHead className="w-[6%]">Size</TableHead>
            <TableHead className="w-[7%]">Usages</TableHead>
            <TableHead className="w-[40%]">Specimen</TableHead>
            <TableHead className="w-[18%]">Scale name</TableHead>
            <TableHead className="w-[10%]">Weights used</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((row) => (
            <TableRow key={row.cls} className={!row.inScale ? "bg-yellow-50 dark:bg-yellow-950/20" : ""}>
              <TableCell>
                <Badge variant={row.inScale ? "blue" : "yellow"}>{row.cls}</Badge>
              </TableCell>
              <TableCell className="text-sm tabular-nums text-muted-foreground">
                {row.px}
              </TableCell>
              <TableCell className="text-sm tabular-nums text-muted-foreground">
                {row.usages}
              </TableCell>
              <TableCell>
                <span className={`${row.cls} text-foreground`}>{SPECIMEN}</span>
              </TableCell>
              <TableCell>
                {row.scaleName ? (
                  <span className="text-sm text-foreground">{row.scaleName}</span>
                ) : (
                  <span className="text-xs text-muted-foreground">{row.note}</span>
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {row.weights.map((w) => (
                    <Badge key={w} variant="grey">{w.replace("font-", "")}</Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p className="text-xs text-muted-foreground">
        Rows highlighted in yellow fall outside the defined type scale.
      </p>
    </div>
  ),
}
