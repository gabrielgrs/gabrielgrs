import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const work = [
  { company: "Trinca", role: "Senior Front-end Developer", period: "2019 — Now" },
  { company: "Biodinâmica Saúde", role: "Senior Full-stack Developer", period: "2018 — 2019" },
  { company: "Stefanini IT", role: "Full-stack Developer", period: "2018" },
  { company: "Stefanini IT", role: "Intern", period: "2017 — 2018" },
];

export const education = [
  { school: "FIAP", course: "MBA, Software Engineering", period: "2018 — 2021" },
  { school: "Senac", course: "Systems Analysis and Development", period: "2015 — 2021" },
];

export const projects = [
  {
    name: "Rebun",
    href: "https://rebun.dev",
    description: "Database, auth, storage and functions in one Brazilian backend.",
  },
  {
    name: "Psiseguro",
    href: "https://psiseguro.com.br",
    description: "Find a psychologist, with discounted sessions for the whole family.",
  },
  {
    name: "Oh My Ship",
    href: "https://ohmyship.com",
    description: "A leaderboard where paid support gets you ahead.",
  },
  {
    name: "Link Zero",
    href: "https://link-zero.vercel.app",
    description: "A store and marketplace for selling digital products.",
  },
  {
    name: "Mongo Studio",
    href: "https://mongo-studio.vercel.app",
    description: "A MongoDB client that runs in the browser.",
  },
  {
    name: "Dotfiles",
    href: "https://github.com/gabrielgrs/dotfiles",
    description: "Neovim, Ghostty, AeroSpace and friends.",
  },
];

export const links = [
  { label: "GitHub", href: "https://github.com/gabrielgrs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabrielgrs" },
  { label: "X", href: "https://x.com/gabugando" },
];

const link = "underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="w-full scroll-mt-24 px-3 py-14 sm:px-6 sm:py-16">
      <h2 className="mb-5 text-muted">{title}</h2>
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
          className="flex items-baseline justify-between gap-6 border-t border-foreground/10 py-3.5"
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

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-1 ${link}`}>
      {children}
      <ArrowUpRightIcon
        aria-hidden
        className="size-3.5 text-muted transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
      />
    </a>
  );
}

export function Work() {
  return (
    <Section id="work" title="Work">
      <Rows items={work.map((w) => ({ title: w.company, subtitle: w.role, meta: w.period }))} />
      <h3 className="mt-12 mb-5 text-muted">Education</h3>
      <Rows items={education.map((e) => ({ title: e.school, subtitle: e.course, meta: e.period }))} />
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <External href={project.href}>{project.name}</External>
            <p className="mt-1 text-muted">{project.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  return (
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

      <footer className="mt-16 border-t border-foreground/10 pt-6 text-muted">
        © {new Date().getFullYear()} Gabriel Ribeiro
      </footer>
    </Section>
  );
}
