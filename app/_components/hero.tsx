import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { SilkBackground } from "./silk-background";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden rounded-t-5xl pt-16"
    >
      <SilkBackground className="absolute inset-0 -z-10 size-full" />

      <div className="mx-auto my-10 flex w-full max-w-3xl flex-col items-center px-6 text-center sm:px-10">
        <p className="rise text-lg font-medium sm:text-xl" style={delay(100)}>
          Hey <span className="wave inline-block">👋</span>, I’m Gabriel
        </p>

        <h1
          className="rise mt-5 text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-balance"
          style={delay(200)}
        >
          Front-end engineer &amp; digital craftsman
        </h1>

        <p
          className="rise mt-7 max-w-[42ch] text-lg leading-relaxed text-muted text-balance sm:text-xl"
          style={delay(320)}
        >
          Nine years building interfaces that feel calm and load fast, mostly
          with React and Next.js. Senior Front-end Developer at Trinca.
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center justify-center gap-3"
          style={delay(440)}
        >
          <a
            href="mailto:grxgabriel@gmail.com"
            className="inline-flex h-12 items-center gap-2.5 rounded-2xl bg-foreground px-6 font-semibold text-background transition-transform active:scale-[0.97]"
          >
            <EnvelopeIcon aria-hidden className="size-5" />
            Contact
          </a>
          <a
            href="#work"
            className="group inline-flex h-12 items-center gap-2.5 rounded-2xl bg-background/40 px-6 font-semibold ring-1 ring-foreground/15 backdrop-blur-md transition-[background-color,transform] hover:bg-background/70 active:scale-[0.97]"
          >
            View my work
            <ArrowRightIcon
              aria-hidden
              className="size-5 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
