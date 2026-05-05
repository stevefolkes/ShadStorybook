import type { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta: Meta = {
  title: "Design System/Colours",
  parameters: { layout: "padded" },
}
export default meta
type Story = StoryObj

// ─── Swatch primitives ────────────────────────────────────────────────────────

type SwatchProps = {
  token: string          // CSS variable name, e.g. "--primary"
  label: string          // Display name
  tailwind?: string      // Tailwind utility, e.g. "bg-primary"
  fgToken?: string       // Optional foreground token to overlay as "Aa" preview
  hex?: string           // Hardcoded colour (for badge palette which has no CSS var)
}

function Swatch({ token, label, tailwind, fgToken, hex }: SwatchProps) {
  const bg = hex ?? `var(${token})`
  const fg = fgToken ? `var(${fgToken})` : undefined

  return (
    <div className="rounded-lg overflow-hidden border border-border text-left min-w-0">
      {/* Colour block */}
      <div
        className="h-16 w-full flex items-center justify-center"
        style={{ background: bg }}
      >
        {fg && (
          <span className="text-lg font-semibold select-none" style={{ color: fg }}>
            Aa
          </span>
        )}
      </div>
      {/* Label */}
      <div className="p-2 space-y-0.5">
        <p className="text-xs font-semibold text-foreground truncate">{label}</p>
        <p className="text-xs font-mono text-muted-foreground truncate">{token}</p>
        {tailwind && (
          <p className="text-xs text-muted-foreground truncate">{tailwind}</p>
        )}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold text-foreground border-b border-border pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
        {children}
      </div>
    </section>
  )
}

// ─── Story ────────────────────────────────────────────────────────────────────

export const AllColours: Story = {
  name: "All Colours",
  render: () => (
    <div className="space-y-10 py-2">

      <div>
        <h1 className="text-xl font-semibold text-foreground">Colour Tokens</h1>
        <p className="text-sm text-muted-foreground mt-1">
          All CSS custom properties defined in globals.css. Swatches update automatically in dark mode.
        </p>
      </div>

      {/* Brand */}
      <Section title="Brand">
        <Swatch token="--primary"            label="Primary"            tailwind="bg-primary"            fgToken="--primary-foreground" />
        <Swatch token="--primary-foreground" label="Primary Foreground" tailwind="bg-primary-foreground" />
      </Section>

      {/* Backgrounds */}
      <Section title="Backgrounds &amp; Surfaces">
        <Swatch token="--background"         label="Background"         tailwind="bg-background"         fgToken="--foreground" />
        <Swatch token="--foreground"         label="Foreground"         tailwind="text-foreground" />
        <Swatch token="--card"               label="Card"               tailwind="bg-card"               fgToken="--card-foreground" />
        <Swatch token="--card-foreground"    label="Card Foreground"    tailwind="text-card-foreground" />
        <Swatch token="--popover"            label="Popover"            tailwind="bg-popover"            fgToken="--popover-foreground" />
        <Swatch token="--popover-foreground" label="Popover Foreground" tailwind="text-popover-foreground" />
        <Swatch token="--secondary"          label="Secondary"          tailwind="bg-secondary"          fgToken="--secondary-foreground" />
        <Swatch token="--secondary-foreground" label="Secondary Foreground" tailwind="text-secondary-foreground" />
        <Swatch token="--muted"              label="Muted"              tailwind="bg-muted"              fgToken="--muted-foreground" />
        <Swatch token="--muted-foreground"   label="Muted Foreground"   tailwind="text-muted-foreground" />
        <Swatch token="--accent"             label="Accent"             tailwind="bg-accent"             fgToken="--accent-foreground" />
        <Swatch token="--accent-foreground"  label="Accent Foreground"  tailwind="text-accent-foreground" />
      </Section>

      {/* Semantic */}
      <Section title="Semantic">
        <Swatch token="--destructive" label="Destructive" tailwind="bg-destructive" />
      </Section>

      {/* Utility */}
      <Section title="Utility">
        <Swatch token="--border" label="Border" tailwind="border-border" />
        <Swatch token="--input"  label="Input"  tailwind="border-input" />
        <Swatch token="--ring"   label="Ring"   tailwind="ring-ring" />
      </Section>

      {/* Badge palette */}
      <Section title="Badge Palette">
        <Swatch token="--badge-grey"   label="Grey"   hex="#f3f4f6" fgToken={undefined} />
        <Swatch token="--badge-blue"   label="Blue"   hex="#dbeafe" fgToken={undefined} />
        <Swatch token="--badge-yellow" label="Yellow" hex="#fef9c3" fgToken={undefined} />
        <Swatch token="--badge-purple" label="Purple" hex="#f3e8ff" fgToken={undefined} />
        <Swatch token="--badge-green"  label="Green"  hex="#dcfce7" fgToken={undefined} />
        <Swatch token="--badge-red"    label="Red"    hex="#fee2e2" fgToken={undefined} />
      </Section>

      {/* Badge text colours */}
      <Section title="Badge Text">
        <Swatch token="--badge-grey-text"   label="Grey text"   hex="#71717a" />
        <Swatch token="--badge-blue-text"   label="Blue text"   hex="#2563eb" />
        <Swatch token="--badge-yellow-text" label="Yellow text" hex="#854d0e" />
        <Swatch token="--badge-purple-text" label="Purple text" hex="#7e22ce" />
        <Swatch token="--badge-green-text"  label="Green text"  hex="#0f766e" />
        <Swatch token="--badge-red-text"    label="Red text"    hex="#b91c1c" />
      </Section>

      {/* Sidebar */}
      <Section title="Sidebar">
        <Swatch token="--sidebar"                    label="Sidebar"                    tailwind="bg-sidebar"                    fgToken="--sidebar-foreground" />
        <Swatch token="--sidebar-foreground"         label="Sidebar Foreground"         tailwind="text-sidebar-foreground" />
        <Swatch token="--sidebar-primary"            label="Sidebar Primary"            tailwind="bg-sidebar-primary"            fgToken="--sidebar-primary-foreground" />
        <Swatch token="--sidebar-primary-foreground" label="Sidebar Primary Foreground" tailwind="text-sidebar-primary-foreground" />
        <Swatch token="--sidebar-accent"             label="Sidebar Accent"             tailwind="bg-sidebar-accent"             fgToken="--sidebar-accent-foreground" />
        <Swatch token="--sidebar-accent-foreground"  label="Sidebar Accent Foreground"  tailwind="text-sidebar-accent-foreground" />
        <Swatch token="--sidebar-border"             label="Sidebar Border"             tailwind="border-sidebar-border" />
        <Swatch token="--sidebar-ring"               label="Sidebar Ring"               tailwind="ring-sidebar-ring" />
      </Section>

      {/* Charts */}
      <Section title="Charts">
        <Swatch token="--chart-1" label="Chart 1" tailwind="bg-chart-1" />
        <Swatch token="--chart-2" label="Chart 2" tailwind="bg-chart-2" />
        <Swatch token="--chart-3" label="Chart 3" tailwind="bg-chart-3" />
        <Swatch token="--chart-4" label="Chart 4" tailwind="bg-chart-4" />
        <Swatch token="--chart-5" label="Chart 5" tailwind="bg-chart-5" />
      </Section>

    </div>
  ),
}
