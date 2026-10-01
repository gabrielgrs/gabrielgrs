"use client";

import { useSyncExternalStore } from "react";
import { ThemeToggle } from "./theme-toggle";

const ITEMS = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Scrolled past this many pixels, the floating pill docks into the notch.
const DOCK_AT = 24;

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

/** "docked|activeId": the active item is the last section whose top has passed 40% of the viewport, or the last one at the bottom of the page. */
function snapshot() {
  const docked = scrollY > DOCK_AT;
  let active = ITEMS[0].id;
  for (const { id } of ITEMS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) active = id;
  }
  // The last section is short; once the page can't scroll further, it's the one being read.
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) active = ITEMS[ITEMS.length - 1].id;
  return `${docked}|${active}`;
}

/** Floats as a pill at the top of the page and docks into a MacBook-style notch once you scroll. */
export function NotchMenu() {
  const [docked, active] = useSyncExternalStore(subscribe, snapshot, () => "false|top").split("|");

  return (
    <nav aria-label="Main" className="fixed top-0 left-1/2 z-50 -translate-x-1/2">
      <div
        className="notch flex items-center gap-0.5 p-1.5 text-sm font-medium sm:gap-1"
        data-docked={docked === "true" || undefined}
      >
        {ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
            className="rounded-full px-3 py-2 text-foreground/55 transition-colors hover:text-foreground aria-[current]:bg-foreground/10 aria-[current]:text-foreground sm:px-4"
          >
            {label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
