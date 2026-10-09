import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { jobs } from "@/data/experience";
import { skills } from "@/data/skills";
import { LINKS } from "@/lib/constants";
const W = "mx-auto max-w-7xl px-5 sm:px-6 lg:px-8";
const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
    {children}
  </h2>
);
const stats = [
  ["2+", "Years experience"],
  ["Full-stack", "Development"],
  ["4", "Featured projects"],
  ["React + Java", "Core stack"],
];
const pipeline = [
  "Idea",
  "Design",
  "Frontend",
  "API",
  "Backend",
  "Database",
  "Deployment",
];
const steps = [
  ["Understand", "Understand the requirement and user problem."],
  [
    "Design",
    "Translate product requirements and UI designs into practical interfaces.",
  ],
  [
    "Build",
    "Develop reusable frontend components and reliable backend services.",
  ],
  [
    "Integrate",
    "Connect APIs, authentication, databases, and application workflows.",
  ],
  [
    "Improve",
    "Test, debug, refine, and improve usability and maintainability.",
  ],
];
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div
          className={`${W} grid grid-cols-2 gap-8 border-y border-[var(--line)] py-10 lg:grid-cols-4`}
        >
          {stats.map(([a, b]) => (
            <div key={b}>
              <p className="text-3xl font-semibold">{a}</p>
              <p className="text-sm text-[var(--fg2)]">{b}</p>
            </div>
          ))}
        </div>
        <section id="about">
          <div className={`${W} grid gap-12 lg:grid-cols-2`}>
            <div>
              <H>About me</H>
              <div className="mt-6 max-w-prose space-y-4 text-lg text-[var(--fg2)]">
                <p>
                  I&apos;m a Software Developer with hands-on experience building
                  full-stack web and mobile applications using React,
                  TypeScript, Java, Spring Boot, MongoDB, and MySQL.
                </p>
                <p>
                  I enjoy turning product requirements and UI designs into
                  clean, responsive interfaces and reliable backend systems. My
                  experience includes frontend development, REST API
                  integration, authentication and authorization, database-driven
                  applications, and collaborative Agile development.
                </p>
                <p>
                  I&apos;ve worked on enterprise applications as well as freelance
                  and personal projects, giving me experience across different
                  types of products and development environments.
                </p>
              </div>
            </div>
            <ol
              className="mono space-y-2 self-center text-sm"
              aria-label="How a product gets built"
            >
              {pipeline.map((p, i) => (
                <li key={p} className="text-[var(--fg2)]">
                  {i > 0 && (
                    <span className="block pl-2 text-[var(--mute)]">↓</span>
                  )}
                  <span className="inline-block rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5">
                    {p}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="experience">
          <div className={W}>
            <H>Experience</H>
            {jobs.map((j) => (
              <div
                key={j.company}
                className="mt-10 border-l border-[var(--ac)]/50 pl-6"
              >
                <p className="mono text-sm text-[var(--mute)]">{j.period}</p>
                <h3 className="mt-1 text-2xl font-semibold">
                  {j.role}, {j.company}
                </h3>
                <p className="mt-3 max-w-prose text-[var(--fg2)]">
                  {j.summary}
                </p>
                <ul className="mt-4 max-w-prose list-disc space-y-1 pl-5 text-[var(--fg2)]">
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {j.tech.map((t) => (
                    <span
                      key={t}
                      className="mono rounded-md border border-[var(--line)] px-2 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold">
                Freelance &amp; independent projects
              </h3>
              <p className="mt-2 max-w-prose text-[var(--fg2)]">
                Worked on independent and freelance software projects involving
                frontend development, full-stack applications, and mobile
                application development.
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className={W}>
            <H>Selected work</H>
            <p className="mt-4 max-w-prose text-lg text-[var(--fg2)]">
              A selection of applications I&apos;ve designed and developed across
              web, mobile, and backend systems.
            </p>
            <ProjectGallery />
          </div>
        </section>
        <section id="skills">
          <div className={W}>
            <H>Technical toolkit</H>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((g) => (
                <div key={g.title}>
                  <h3 className="mb-3 font-medium">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span
                        key={i.name}
                        title={i.hint}
                        tabIndex={0}
                        className="mono cursor-default rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-[var(--ac)]/60"
                      >
                        {i.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className={W}>
            <H>How I build</H>
            <ol className="mt-10 grid gap-6 md:grid-cols-5">
              {steps.map(([t, d], i) => (
                <li key={t} className="border-t border-[var(--ac)]/50 pt-4">
                  <span className="mono text-sm text-[var(--ac2)]">
                    0{i + 1}
                  </span>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="text-sm text-[var(--fg2)]">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section>
          <div className={W}>
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-6 grid gap-6 text-[var(--fg2)] md:grid-cols-2">
              <p>
                <b className="text-[var(--fg)]">
                  B.Tech, Computer Science and Engineering
                </b>
                <br />
                Sree Narayana Gurukulam College of Engineering, Kadayiruppu
                <br />
                2018 – 2022 · CGPA 6.20
              </p>
              <p>
                <b className="text-[var(--fg)]">
                  Java Spring – Full Stack Development
                </b>
                <br />
                Luminar Technolab · Intern · 2023
              </p>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className={W}>
            <h2 className="text-4xl font-semibold tracking-tight lg:text-6xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 max-w-prose text-lg text-[var(--fg2)]">
              I&apos;m open to software development opportunities, freelance
              projects, and collaborations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LINKS.email}
                className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] px-6 font-medium text-white"
              >
                Email me
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] px-6"
              >
                LinkedIn
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] px-6"
              >
                GitHub
              </a>
            </div>
            <p className="mt-6 text-sm text-[var(--mute)]">
              Phone: +91 9207185463
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-[var(--line)] py-8">
        <div
          className={`${W} flex flex-wrap justify-between gap-4 text-sm text-[var(--fg2)]`}
        >
          <span>© 2026 Akshay Joshy</span>
          <span>Built with Next.js &amp; TypeScript.</span>
          <nav className="flex gap-4">
            <a href={LINKS.github}>GitHub</a>
            <a href={LINKS.linkedin}>LinkedIn</a>
            <a href={LINKS.email}>Email</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
