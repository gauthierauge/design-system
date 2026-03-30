import type { Preview } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import "../app/globals.css";

function ThemeDecorator(Story: React.ComponentType, context: { globals: { theme?: string } }) {
  const theme = context.globals.theme || "light";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-[100px] p-6 bg-background text-foreground">
      <Story />
    </div>
  );
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [ThemeDecorator],
  globalTypes: {
    theme: {
      description: "Toggle dark mode",
      toolbar: {
        title: "Theme",
        icon: "moon",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
};

export default preview;
