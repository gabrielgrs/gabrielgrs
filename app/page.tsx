import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { education, links, projects, work } from "./_components/data";
import { LoadTime } from "./_components/load-time";
import { Logo } from "./_components/logo";
import { ThemeToggle } from "./_components/theme-toggle";

const link = "underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-x-8 gap-y-5 border-t border-foreground/15 py-10 sm:grid-cols-[10rem_1fr] sm:py-14">
      <h2 className="pt-1.5 font-mono text-xs text-muted">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Rows({ items }: { items: { title: string; subtitle: string; meta: string }[] }) {
  return (
    <ul className="space-y-4 sm:space-y-3">
      {items.map((item) => (
        <li key={`${item.title}-${item.subtitle}`} className="flex items-baseline justify-between gap-6">
          <p>
            {item.title}
            <span className="block text-muted sm:inline">
              <span className="hidden sm:inline"> — </span>
              {item.subtitle}
            </span>
          </p>
          <span className="shrink-0 font-mono text-xs text-muted tabular-nums">{item.meta}</span>
        </li>
      ))}
    </ul>
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
        <section className="pt-[12vh] pb-20 sm:pb-28">
          <h1 className="name text-[clamp(5rem,27vw,17rem)] leading-[0.8] font-bold tracking-[-0.02em]">
            Gabriel
            <br />
            Ribeiro
          </h1>

          <div className="rise mt-10 max-w-[44ch] sm:mt-14 sm:ml-[calc(10rem+2rem)]" style={{ "--delay": "500ms" } as React.CSSProperties}>
            <p className="text-xl leading-snug text-balance sm:text-2xl">
              Front-end engineer in Florianópolis, Brazil. Nine years building interfaces that feel calm and load
              fast, mostly with React and Next.js. Senior Front-end Developer at Trinca.
            </p>
            <LoadTime className="mt-5 font-mono text-xs text-muted" />
          </div>
        </section>

        <Section title="Work">
          <Rows items={work.map((w) => ({ title: w.company, subtitle: w.role, meta: w.period }))} />
        </Section>

        <Section title="Education">
          <Rows items={education.map((e) => ({ title: e.school, subtitle: e.course, meta: e.period }))} />
        </Section>

        <Section title="Projects">
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name}>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className={`inline-flex items-center gap-1 ${link} group-hover:decoration-foreground`}>
                    {project.name}
                    <ArrowUpRightIcon
                      aria-hidden
                      className="size-3.5 text-muted transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                    />
                  </span>
                  <span className="mt-1 block text-muted">{project.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Contact">
          <a href="mailto:grxgabriel@gmail.com" className={`text-2xl sm:text-3xl ${link}`}>
            grxgabriel@gmail.com
          </a>
          <ul className="mt-6 flex gap-6 font-mono text-xs">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-foreground/15 py-6 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Gabriel Ribeiro</span>
        <span>Set in Archivo and Martian Mono</span>
      </footer>
    </div>
  );
}
