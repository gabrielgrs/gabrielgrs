"use client";

import { useSyncExternalStore } from "react";
import { ThemeToggle } from "../_components/theme-toggle";

const ITEMS = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function subscribe(onChange: () => void) {
  let frame = 0;
  const onScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(onChange);
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  return () => {
    cancelAnimationFrame(frame);
    removeEventListener("scroll", onScroll);
    removeEventListener("resize", onScroll);
  };
}

/** The last section whose top has passed 40% of the viewport, or the last one at the bottom of the page. */
function snapshot() {
  let active = ITEMS[0].id;
  for (const { id } of ITEMS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) active = id;
  }
  // The last section is short; once the page can't scroll further, it's the one being read.
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) active = ITEMS[ITEMS.length - 1].id;
  return active;
}

export function PixelMenu() {
  const active = useSyncExternalStore(subscribe, snapshot, () => "top");

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
