import { NotchMenu } from "./notch-menu";
import { SilkBackground } from "./silk-background";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-t-5xl pt-16"
    >
      <SilkBackground className="absolute inset-0 size-full" />

      <div className="relative mx-auto my-10 flex w-full max-w-3xl flex-col items-center px-6 text-center sm:px-10">
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

        {/* Not inside .rise: its leftover translate/filter would trap the fixed, docked menu. */}
        <div className="mt-10">
          <NotchMenu />
        </div>
      </div>
    </section>
  );
}
