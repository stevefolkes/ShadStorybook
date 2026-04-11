import type { Preview } from "@storybook/nextjs-vite"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "hsl(0 0% 100%)" },
        { name: "dark", value: "hsl(0 0% 3.9%)" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === "hsl(0 0% 3.9%)"
      return (
        <div className={isDark ? "dark" : ""}>
          <div className="bg-background text-foreground min-h-screen p-8">
            <Story />
          </div>
        </div>
      )
    },
  ],
}

export default preview
