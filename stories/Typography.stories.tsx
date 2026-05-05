import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Separator } from "@/components/ui/separator"

const meta: Meta = {
  title: "Design System/Typography",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
}
export default meta
type Story = StoryObj

const styles = [
  {
    name: "Title Super / 20",
    tag: "<H1>",
    tailwind: "text-xl",
    className: "text-xl font-semibold leading-6",
    spec: { size: "20px (1.25rem)", weight: "semibold (600)", lineHeight: "24 (1.5rem)" },
  },
  {
    name: "Title Large / 18",
    tag: "<H2>",
    tailwind: "text-lg",
    className: "text-lg font-semibold leading-6",
    spec: { size: "18px (1.125rem)", weight: "semibold (600)", lineHeight: "24 (1.5rem)" },
  },
  {
    name: "Title Standard / 16",
    tag: "<H3>",
    tailwind: "text-base",
    className: "text-base font-semibold leading-5",
    spec: { size: "16px (1rem)", weight: "semibold (600)", lineHeight: "20 (1.25rem)" },
  },
  {
    name: "Body Standard / 16",
    tag: "<p>",
    tailwind: "text-base",
    className: "text-base font-normal leading-5",
    spec: { size: "16px (1rem)", weight: "normal (400)", lineHeight: "20 (1.25rem)" },
  },
  {
    name: "Body Small / 14",
    tag: "<p small>",
    tailwind: "text-sm",
    className: "text-sm font-normal leading-5",
    spec: { size: "14px (0.875rem)", weight: "normal (400)", lineHeight: "20 (1.25rem)" },
  },
  {
    name: "Body Extra Small / 12",
    tag: "<p extrasmall>",
    tailwind: "text-xs",
    className: "text-xs font-normal leading-4",
    spec: { size: "12px (0.75rem)", weight: "normal (400)", lineHeight: "16 (1rem)" },
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="border border-border bg-muted rounded-full px-4 py-1 text-sm font-semibold text-foreground whitespace-nowrap">
        {children}
      </span>
      <Separator className="flex-1" />
    </div>
  )
}

export const AllStyles: Story = {
  name: "All Styles",
  render: () => (
    <div className="max-w-3xl space-y-10 py-4">

      {/* Fonts */}
      <section>
        <SectionLabel>Fonts</SectionLabel>
        <p className="text-xl font-normal text-foreground mb-1">Source Sans 3 / Pro</p>
        <a
          href="https://fonts.google.com/specimen/Source+Sans+3"
          target="_blank"
          rel="noreferrer"
          className="text-base text-primary underline underline-offset-2"
        >
          https://fonts.google.com/specimen/Source+Sans+3
        </a>
      </section>

      {/* Weights */}
      <section>
        <SectionLabel>Weights</SectionLabel>
        <div className="space-y-1 text-base text-foreground">
          <p className="font-normal">Regular (400)</p>
          <p className="font-semibold">Semibold (600)</p>
        </div>
      </section>

      {/* Styles */}
      <section>
        <SectionLabel>Styles</SectionLabel>

        {/* Header row */}
        <div className="grid grid-cols-[2fr_2fr_1fr] gap-4 px-0 pb-2">
          <span className="text-xs text-muted-foreground">Name</span>
          <span className="text-xs text-muted-foreground">Spec</span>
          <span className="text-xs text-muted-foreground">Tailwind Tag</span>
        </div>
        <Separator />

        {styles.map((style) => (
          <div key={style.name}>
            <div className="grid grid-cols-[2fr_2fr_1fr] gap-4 items-start py-5">
              {/* Name + example */}
              <div className="space-y-1">
                <p className={`${style.className} text-foreground`}>{style.name}</p>
                <p className="text-xs text-muted-foreground">Style/class: {style.tag}</p>
              </div>

              {/* Spec */}
              <div className="text-sm text-foreground space-y-0.5">
                <p>font-size: {style.spec.size}</p>
                <p>font-weight: {style.spec.weight}</p>
                <p>line-height: {style.spec.lineHeight}</p>
              </div>

              {/* Tailwind tag */}
              <p className="text-sm text-foreground font-mono">{style.tailwind}</p>
            </div>
            <Separator />
          </div>
        ))}
      </section>
    </div>
  ),
}
