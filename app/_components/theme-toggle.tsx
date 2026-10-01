"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

type Theme = "light" | "dark";

const root = () => document.documentElement;
const current = () => (root().dataset.theme as Theme | undefined) ?? "light";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(root(), { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, current, () => "light" as Theme);

  // Follow the system setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      root().dataset.theme = media.matches ? "dark" : "light";
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = current() === "dark" ? "light" : "dark";
    root().dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Dark mode"
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="ml-0.5 grid size-9 shrink-0 cursor-pointer place-items-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10"
    >
      <MoonIcon aria-hidden className="theme-light-only size-5" />
      <SunIcon aria-hidden className="theme-dark-only size-5" />
    </button>
  );
}
