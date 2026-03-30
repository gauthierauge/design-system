import type * as React from "react";

import { cn } from "@/lib/utils";

interface HeaderProps extends React.ComponentProps<"header"> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function Header({ className, left, right, children, ...props }: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={cn(
        "flex h-14 items-center gap-4 border-b bg-background px-6",
        className
      )}
      {...props}
    >
      {left && <div className="flex items-center gap-2">{left}</div>}
      <div className="flex-1">{children}</div>
      {right && (
        <div className="flex items-center gap-2">{right}</div>
      )}
    </header>
  );
}

export { Header };
export type { HeaderProps };
