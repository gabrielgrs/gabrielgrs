import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { education, links, projects, work } from "./_components/data";
import { LoadTime } from "./_components/load-time";
import { Logo } from "./_components/logo";
import { ThemeToggle } from "./_components/theme-toggle";

const link = "underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

// Timeline scale, in years. Fixed at build time, like the footer's year.
const today = new Date();
const NOW = today.getFullYear() + today.getMonth() / 12;
const FIRST = 2015;
const LAST = Math.ceil(NOW);
const years = Array.from({ length: LAST - FIRST }, (_, i) => FIRST + i);
const pct = (year: number) => `${((year - FIRST) / (LAST - FIRST)) * 100}%`;

/** "2017 — 2018" → 2017–2018, "2018" → that whole year, "2019 — Now" → up to today. */
function span(period: string) {
  const [from, to] = period.split(" — ");
  const start = Number(from);
  return { start, end: to === "Now" ? NOW : to ? Number(to) : start + 1, ongoing: to === "Now" };
}

const timeline = [
  ...work.map((w) => ({ title: w.company, subtitle: w.role, period: w.period, study: false })),
  ...education.map((e) => ({ title: e.school, subtitle: e.course, period: e.period, study: true })),
]
  .map((item) => ({ ...item, ...span(item.period) }))
  .sort((a, b) => b.start - a.start);

const solid = "bg-foreground";
const hatched = "bg-[repeating-linear-gradient(-45deg,var(--foreground)_0_1.5px,transparent_1.5px_5px)] ring-1 ring-foreground ring-inset";

function Heading({ title, aside }: { title: string; aside?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-foreground/15 pt-4 font-mono text-xs text-muted sm:mb-14">
      <h2>{title}</h2>
      {aside}
    </div>
  );
}

function Timeline() {
  return (
    <section className="py-16 sm:py-24">
      <Heading
        title="Work & study"
        aside={
          <p className="flex gap-5">
            <span className="flex items-center gap-2">
              <span className={`h-2 w-5 rounded-full ${solid}`} /> Work
            </span>
            <span className="flex items-center gap-2">
              <span className={`h-2 w-5 rounded-full ${hatched}`} /> Study
            </span>
          </p>
        }
      />

      <div className="relative">
        {years.map((year) => (
          <span key={year} aria-hidden className="absolute inset-y-0 w-px bg-foreground/[0.07]" style={{ left: pct(year) }} />
        ))}

        <ol className="relative">
          {timeline.map((item) => (
            <li
              key={`${item.title}-${item.subtitle}`}
              className="py-3.5"
              style={{ "--from": pct(item.start), "--to": pct(item.end) } as React.CSSProperties}
            >
              <p className="flex flex-wrap items-baseline gap-x-2.5 sm:pl-[var(--from)]">
                <span>{item.title}</span>
                <span className="text-muted">{item.subtitle}</span>
                <span className="font-mono text-xs text-muted">{item.period}</span>
              </p>
              <div className="relative mt-2.5 h-2">
                <span
                  className={`absolute inset-y-0 left-[var(--from)] right-[calc(100%-var(--to))] rounded-full ${item.study ? hatched : solid}`}
                />
                {item.ongoing && (
                  <span aria-hidden className="absolute top-1/2 left-[var(--to)] size-3 -translate-1/2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-foreground/40" />
                    <span className="absolute inset-0 rounded-full bg-foreground" />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>

        <ol aria-hidden className="relative mt-4 h-4 font-mono text-[10px] text-muted">
          {years.map((year) => (
            <li key={year} className={`absolute pl-1.5 ${year % 2 ? "max-sm:hidden" : ""}`} style={{ left: pct(year) }}>
              {year}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="py-16 sm:py-24">
      <Heading title="Projects" aside={<p>Things I build on my own time</p>} />

      <ul className="border-t border-foreground/15">
        {projects.map((project) => (
          <li key={project.name} className="fit border-b border-foreground/15">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-x-10 gap-y-2 py-6 sm:grid-cols-[1fr_17rem] sm:items-center"
            >
              {/* Inherits the condensed width from .fit; hovering lets it relax to normal width. */}
              <span className="flex items-center gap-[0.15em] text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] font-bold tracking-[-0.02em] transition-[font-variation-settings] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[font-variation-settings:'wdth'_100]">
                {project.name}
                <ArrowUpRightIcon
                  aria-hidden
                  className="size-[0.45em] shrink-0 stroke-[2.5] transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:-translate-x-3 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-0 sm:group-hover:opacity-100"
                />
              </span>
              <span className="text-muted [font-variation-settings:normal] sm:text-right">{project.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="@container pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Heading title="Contact" aside={<p>Currently in Brazil</p>} />

      <a
        href="mailto:grxgabriel@gmail.com"
        className="fit block text-[13.2cqi] leading-none font-bold tracking-[-0.02em] underline decoration-foreground/20 decoration-[0.05em] underline-offset-[0.12em] transition-colors hover:decoration-foreground"
      >
        grxgabriel@gmail.com
      </a>

      <ul className="mt-10 flex gap-6 font-mono text-xs">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-8">
      <header className="flex items-center justify-between py-5">
        <Logo className="size-8" />
        <ThemeToggle />
      </header>

      <main>
        <section className="pt-[12vh] pb-12 sm:pb-16">
          <h1 className="name text-[clamp(5rem,27vw,17rem)] leading-[0.8] font-bold tracking-[-0.02em]">
            Gabriel
            <br />
            Ribeiro
          </h1>

          <div className="rise mt-10 max-w-[44ch] sm:mt-14 sm:ml-[calc(10rem+2rem)]" style={{ "--delay": "500ms" } as React.CSSProperties}>
            <p className="text-xl leading-snug text-balance sm:text-2xl">
              Software engineer and digital nomad, currently in Brazil. Specialist in AI and the JavaScript
              ecosystem, building software at Trinca.
            </p>
            <LoadTime className="mt-5 font-mono text-xs text-muted" />
          </div>
        </section>

        <Timeline />
        <Projects />
        <Contact />
      </main>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-foreground/15 py-6 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Gabriel Ribeiro</span>
        <span>Set in Archivo and Martian Mono</span>
      </footer>
    </div>
  );
}
