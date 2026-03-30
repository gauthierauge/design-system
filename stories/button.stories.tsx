import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Trash2, Plus, Check, AlertTriangle } from "lucide-react";
import { Button } from "../registry/new-york/blocks/button/button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "success",
        "warning",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
};

export const Success: Story = {
  args: { variant: "success", children: "Confirm" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Warning" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Link: Story = {
  args: { variant: "link", children: "Link" },
};

export const Small: Story = {
  args: { size: "sm", children: "Small" },
};

export const ExtraSmall: Story = {
  args: { size: "xs", children: "XS" },
};

export const Large: Story = {
  args: { size: "lg", children: "Large" },
};

export const WithIcon: Story = {
  args: { children: undefined },
  render: () => (
    <Button>
      <Plus /> Create
    </Button>
  ),
};

export const IconOnly: Story = {
  args: { size: "icon", children: undefined },
  render: () => (
    <Button size="icon" aria-label="Delete">
      <Trash2 />
    </Button>
  ),
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive"><Trash2 /> Destructive</Button>
      <Button variant="success"><Check /> Success</Button>
      <Button variant="warning"><AlertTriangle /> Warning</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-xs" aria-label="Add"><Plus /></Button>
      <Button size="icon-sm" aria-label="Add"><Plus /></Button>
      <Button size="icon" aria-label="Add"><Plus /></Button>
      <Button size="icon-lg" aria-label="Add"><Plus /></Button>
    </div>
  ),
};
