"use client";

import { useSyncExternalStore } from "react";
import { ThemeToggle } from "./theme-toggle";

export const ITEMS = [
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

/** "docked|activeId": the active item is the last section whose top has passed 40% of the viewport, or the last one at the bottom of the page. */
function snapshot() {
  // Docks once the pill's slot in the hero reaches the top of the viewport.
  const slot = document.getElementById("menu");
  const docked = !!slot && slot.getBoundingClientRect().top <= 0;
  let active = ITEMS[0].id;
  for (const { id } of ITEMS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) active = id;
  }
  // The last section is short; once the page can't scroll further, it's the one being read.
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) active = ITEMS[ITEMS.length - 1].id;
  return `${docked}|${active}`;
}

/** [docked, activeId] for the menu, kept in sync with scrolling. */
export function useMenu() {
  return useSyncExternalStore(subscribe, snapshot, () => "false|top").split("|") as [string, string];
}

/** Sits as a pill in the hero and docks into a MacBook-style notch once it scrolls up to the top. */
export function NotchMenu() {
  const [docked, active] = useMenu();
  const isDocked = docked === "true";

  return (
    // The slot keeps the pill's height in the hero while the pill itself is fixed to the top.
    <div id="menu" className="h-12">
      <nav
        aria-label="Main"
        className={isDocked ? "fixed top-0 left-1/2 z-50 -translate-x-1/2" : undefined}
      >
        <div
          className="notch flex items-center gap-0.5 p-1.5 text-sm font-medium sm:gap-1"
          data-docked={isDocked || undefined}
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
    </div>
  );
}
