"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  addEventListener("load", onChange);
  return () => removeEventListener("load", onChange);
}

// loadEventStart is set right before "load" fires, so it's ready inside the listener. 0 until then.
const snapshot = () => (performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined)?.loadEventStart ?? 0;

/** The claim's receipt: how long this very page took to load, measured in the visitor's browser. */
export function LoadTime({ className = "" }: { className?: string }) {
  const ms = useSyncExternalStore(subscribe, snapshot, () => 0);

  return (
    // Reserves its line until measured, so nothing shifts when the number lands.
    <p className={`transition-opacity duration-500 ${ms ? "" : "invisible opacity-0"} ${className}`}>
      This page loaded in <span className="text-foreground tabular-nums">{(ms / 1000).toFixed(2)}&thinsp;s</span>.
    </p>
  );
}
