import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet, FieldTitle } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const meta: Meta = {
  title: "UI/Field",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email">Email address</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
    </Field>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="johndoe" />
      <FieldDescription>This will be your public display name.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email-err">Email address</FieldLabel>
      <Input id="email-err" type="email" defaultValue="notvalid" aria-invalid="true" />
      <FieldError errors={[{ message: "Please enter a valid email address." }]} />
    </Field>
  ),
}

export const FieldGroupExample: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="fname">First name</FieldLabel>
        <Input id="fname" placeholder="John" />
      </Field>
      <Field>
        <FieldLabel htmlFor="lname">Last name</FieldLabel>
        <Input id="lname" placeholder="Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea id="bio" placeholder="Tell us about yourself…" />
        <FieldDescription>Max 160 characters.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldTitle>Email address</FieldTitle>
      <Input type="email" placeholder="you@example.com" />
    </Field>
  ),
}
