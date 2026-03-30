import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "../registry/new-york/blocks/input/input";

const meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const Email: Story = {
  args: { type: "email", placeholder: "email@example.com" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Password" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};

export const Invalid: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
  },
};

export const WithFile: Story = {
  args: { type: "file" },
};
