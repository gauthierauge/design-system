import type * as React from "react";

import { cn } from "@/lib/utils";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

interface PageLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

function PageLayout({ children, sidebar, header, className }: PageLayoutProps) {
  return (
    <div className={cn("flex min-h-svh", className)}>
      {sidebar ?? <Sidebar />}
      <div className="flex flex-1 flex-col">
        {header ?? <Header />}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export { PageLayout };
export type { PageLayoutProps };
