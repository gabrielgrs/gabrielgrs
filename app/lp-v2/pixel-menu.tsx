"use client";

import { ITEMS, useMenu } from "../_components/notch-menu";
import { ThemeToggle } from "../_components/theme-toggle";

export function PixelMenu() {
  const [, active] = useMenu();

  return (
    <nav aria-label="Main" className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="px-box px-menu flex items-center gap-0.5 bg-background p-1.5 font-pixel-display text-[9px] sm:gap-1 sm:text-[11px]">
        {ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
            className="px-2.5 py-2.5 text-foreground/55 hover:text-foreground aria-[current]:bg-foreground aria-[current]:text-background sm:px-3"
          >
            {label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
