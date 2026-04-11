"use client"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

const meta: Meta = {
  title: "UI/Calendar",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },
}

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<{ from: Date | undefined; to?: Date }>({
      from: new Date(),
      to: undefined,
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={(r) => setRange(r ?? { from: undefined })}
        className="rounded-md border"
        numberOfMonths={2}
      />
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Calendar
      mode="single"
      className="rounded-md border"
      disabled
    />
  ),
}
