import type { Metadata } from "next";
import { Pixelify_Sans, Press_Start_2P } from "next/font/google";
import { ArrowRightIcon, ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { SilkBackground } from "../_components/silk-background";
import { education, links, projects, work } from "../_components/data";
import { PixelMenu } from "./pixel-menu";

const pixelify = Pixelify_Sans({ variable: "--font-pixelify", subsets: ["latin", "latin-ext"] });
const pressStart = Press_Start_2P({ variable: "--font-press-start", weight: "400", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = { title: "Gabriel Ribeiro — Pixel edition" };

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

const link = "underline decoration-2 decoration-foreground/30 underline-offset-4 hover:decoration-accent";

function Hero() {
  return (
    <section id="top" className="px-corners relative isolate overflow-hidden pt-20">
      <SilkBackground pixel={6} className="absolute inset-0 -z-10 size-full" />

      <div className="mx-auto my-10 flex w-full max-w-3xl flex-col items-center px-6 text-center sm:px-10">
        <p className="px-rise text-xl sm:text-2xl" style={delay(100)}>
          Hey <span className="px-wave inline-block">👋</span>, I’m Gabriel
        </p>

        <h1
          className="px-rise mt-6 font-pixel-display text-[clamp(1.25rem,4.2vw,2.25rem)] leading-[1.5] text-balance"
          style={delay(200)}
        >
          Front-end engineer &amp; digital craftsman
          <span aria-hidden className="px-blink text-accent">_</span>
        </h1>

        <p className="px-rise mt-7 max-w-[42ch] text-xl leading-snug text-muted text-balance" style={delay(320)}>
          Nine years building interfaces that feel calm and load fast, mostly with React and Next.js. Senior
          Front-end Developer at Trinca.
        </p>

        <div className="px-rise mt-10 flex flex-wrap items-center justify-center gap-5" style={delay(440)}>
          <a
            href="mailto:grxgabriel@gmail.com"
            className="px-btn inline-flex h-12 items-center gap-2.5 bg-foreground px-5 font-pixel-display text-xs text-background"
          >
            <EnvelopeIcon aria-hidden className="size-5" />
            Contact
          </a>
          <a
            href="#work"
            className="px-btn inline-flex h-12 items-center gap-2.5 bg-background px-5 font-pixel-display text-xs"
          >
            View my work
            <ArrowRightIcon aria-hidden className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="w-full scroll-mt-24 px-3 py-14 sm:px-6 sm:py-16">
      <h2 className="mb-6 font-pixel-display text-xs text-accent">&gt; {title}</h2>
      {children}
    </section>
  );
}

function Rows({ items }: { items: { title: string; subtitle: string; meta: string }[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={`${item.title}-${item.subtitle}`}
          className="flex items-baseline justify-between gap-6 border-t-2 border-dashed border-foreground/20 py-3.5"
        >
          <p>
            {item.title}
            <span className="block text-muted sm:inline">
              <span className="hidden sm:inline"> · </span>
              {item.subtitle}
            </span>
          </p>
          <span className="shrink-0 text-muted tabular-nums">{item.meta}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PixelHome() {
  return (
    <div className={`${pixelify.variable} ${pressStart.variable} font-pixel`}>
      <PixelMenu />
      <main className="p-3 text-lg">
        <Hero />
        <div className="mx-auto max-w-3xl pt-10 pb-6">
          <Section id="work" title="Work">
            <Rows items={work.map((w) => ({ title: w.company, subtitle: w.role, meta: w.period }))} />
            <h3 className="mt-12 mb-6 font-pixel-display text-xs text-muted">&gt; Education</h3>
            <Rows items={education.map((e) => ({ title: e.school, subtitle: e.course, meta: e.period }))} />
          </Section>

          <Section id="projects" title="Projects">
            <ul className="grid gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-box px-card block h-full bg-background p-4"
                  >
                    <span className="flex items-center justify-between gap-2">
                      {project.name}
                      <ArrowUpRightIcon aria-hidden className="size-4 text-muted" />
                    </span>
                    <span className="mt-1 block text-muted">{project.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <p className="leading-relaxed">
              You can find me on{" "}
              {links.map((l, i) => (
                <span key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {l.label}
                  </a>
                  {i < links.length - 2 ? ", " : i === links.length - 2 ? " and " : ""}
                </span>
              ))}
              , or reach me via{" "}
              <a href="mailto:grxgabriel@gmail.com" className={link}>
                email
              </a>
              .
            </p>

            <footer className="mt-16 flex flex-wrap justify-between gap-4 border-t-2 border-dashed border-foreground/20 pt-6 text-muted">
              <span>© {new Date().getFullYear()} Gabriel Ribeiro</span>
              <span className="font-pixel-display text-[10px] leading-loose">Thanks for playing</span>
            </footer>
          </Section>
        </div>
      </main>
    </div>
  );
}
