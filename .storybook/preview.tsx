import type { Preview } from "@storybook/nextjs-vite"
import { useEffect } from "react"
import { Roboto, Source_Sans_3, Geist_Mono } from "next/font/google"
import "../app/globals.css"

const robotoHeading = Roboto({ subsets: ["latin"], variable: "--font-heading" })
const sourceSans3 = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const fontClasses = [
  robotoHeading.variable,
  sourceSans3.variable,
  fontMono.variable,
  "font-sans",
  "antialiased",
].join(" ")

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
    options: {
      storySort: {
        order: ["Design System", "UI"],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === "hsl(0 0% 3.9%)"

      useEffect(() => {
        // Apply font variables and dark mode to document.body so that
        // portal-rendered components (Dialog, Sheet, Drawer, etc.) inherit them.
        const classes = fontClasses.split(" ")
        document.body.classList.add(...classes)
        return () => document.body.classList.remove(...classes)
      }, [])

      useEffect(() => {
        if (isDark) {
          document.body.classList.add("dark")
        } else {
          document.body.classList.remove("dark")
        }
      }, [isDark])

      return (
        <div className={`${fontClasses}${isDark ? " dark" : ""}`}>
          <div className="bg-background text-foreground min-h-screen p-8">
            <Story />
          </div>
        </div>
      )
    },
  ],
}

export default preview
