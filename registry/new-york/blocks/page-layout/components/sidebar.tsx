import type * as React from "react";

import { cn } from "@/lib/utils";

interface SidebarProps extends React.ComponentProps<"aside"> {
  collapsed?: boolean;
}

function Sidebar({
  className,
  collapsed = false,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      data-slot="sidebar"
      className={cn(
        "flex flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] duration-200",
        collapsed ? "w-16" : "w-64",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
}

export { Sidebar };
export type { SidebarProps };
