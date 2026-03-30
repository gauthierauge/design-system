import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageLayout } from "../registry/new-york/blocks/page-layout/page";
import { Header } from "../registry/new-york/blocks/page-layout/components/header";
import { Sidebar } from "../registry/new-york/blocks/page-layout/components/sidebar";
import { Button } from "../registry/new-york/blocks/button/button";
import { Menu, Bell } from "lucide-react";

const meta = {
  title: "Components/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PageLayout>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground mt-2">Welcome back.</p>
    </PageLayout>
  ),
};

export const WithCustomHeader: Story = {
  render: () => (
    <PageLayout
      header={
        <Header
          left={
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu />
            </Button>
          }
          right={
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell />
            </Button>
          }
        >
          <span className="font-semibold">My App</span>
        </Header>
      }
    >
      <h1 className="text-2xl font-semibold">Page Content</h1>
    </PageLayout>
  ),
};

export const CollapsedSidebar: Story = {
  render: () => (
    <PageLayout
      sidebar={
        <Sidebar collapsed>
          <div className="flex flex-col items-center gap-2 p-2 mt-4">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu />
            </Button>
          </div>
        </Sidebar>
      }
    >
      <h1 className="text-2xl font-semibold">Collapsed sidebar</h1>
    </PageLayout>
  ),
};

export const SidebarWithContent: Story = {
  render: () => (
    <PageLayout
      sidebar={
        <Sidebar>
          <div className="p-4 font-semibold text-lg">My App</div>
          <nav className="flex flex-col gap-1 px-2">
            <Button variant="secondary" className="justify-start">Dashboard</Button>
            <Button variant="ghost" className="justify-start">Settings</Button>
            <Button variant="ghost" className="justify-start">Profile</Button>
          </nav>
        </Sidebar>
      }
    >
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground mt-2">Sidebar with navigation.</p>
    </PageLayout>
  ),
};
