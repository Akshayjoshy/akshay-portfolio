"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";
const Badge = ({ t }: { t: string }) => (
  <span className="mono rounded-md border border-[var(--line)] px-2 py-1 text-xs text-[var(--fg2)]">
    {t}
  </span>
);
function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.focus();
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] grid items-end bg-black/70 sm:place-items-center"
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        exit={{ y: 40 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92dvh] w-full overflow-y-auto rounded-t-2xl border border-[var(--line)] bg-[var(--bg2)] p-6 sm:max-w-2xl sm:rounded-2xl sm:p-8"
      >
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-[var(--fg2)]">{p.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-white/5"
          >
            <X />
          </button>
        </div>
        <h4 className="mt-6 font-medium">Overview</h4>
        <p className="text-[var(--fg2)]">{p.description}</p>
        <h4 className="mt-6 font-medium">My contribution</h4>
        <p className="text-[var(--fg2)]">{p.contribution}</p>
        <h4 className="mt-6 font-medium">Key features</h4>
        <ul className="list-disc space-y-1 pl-5 text-[var(--fg2)]">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <h4 className="mt-6 font-medium">Architecture</h4>
        <ol className="mono mt-2 text-sm">
          {p.architecture.map((a, i) => (
            <li key={a} className="text-[var(--fg2)]">
              {i > 0 && <div className="text-[var(--mute)]">↓</div>}
              {a}
            </li>
          ))}
        </ol>
        <h4 className="mt-6 font-medium">Technology</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <Badge key={t} t={t} />
          ))}
        </div>
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-1 text-[var(--ac2)]"
          >
            View on GitHub <ArrowUpRight size={16} />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
export default function ProjectGallery() {
  const [sel, setSel] = useState<Project | null>(null);
  return (
    <>
      <div className="mt-14 space-y-10">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`group grid gap-8 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 transition hover:border-[var(--ac)]/50 sm:p-10 md:grid-cols-2 md:items-center ${i === 0 ? "md:py-14" : ""}`}
          >
            <div className={i % 2 ? "md:order-2" : ""}>
              <p className="mono text-sm text-[var(--mute)]">
                {p.number} · {p.type} · {p.year}
              </p>
              <h3 className="mt-3 text-3xl font-semibold">{p.title}</h3>
              <p className="text-[var(--ac2)]">{p.subtitle}</p>
              <p className="mt-4 text-[var(--fg2)]">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <Badge key={t} t={t} />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => setSel(p)}
                  className="inline-flex min-h-11 items-center gap-1 font-medium transition group-hover:text-[var(--ac2)]"
                >
                  View case study <ArrowUpRight size={16} />
                </button>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-[var(--fg2)] hover:text-[var(--fg)]"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <div
              className={`grid aspect-[4/3] place-items-center rounded-2xl border border-[var(--line)] bg-[var(--bg2)] ${i % 2 ? "md:order-1" : ""}`}
              aria-hidden
            >
              {i === 0 ? (
                <div className="h-64 w-32 rounded-[1.6rem] border-4 border-zinc-700 bg-[var(--bg)] p-3 shadow-xl transition group-hover:-translate-y-2">
                  <div className="h-3 w-12 rounded bg-[var(--ac)]" />
                  <div className="mt-4 space-y-2">
                    {[0, 1, 2].map((n) => (
                      <div
                        key={n}
                        className="h-10 rounded-lg border border-[var(--line)] bg-[var(--card)]"
                      />
                    ))}
                  </div>
                  <div className="mt-4 h-7 rounded-full bg-[var(--ac)]/80" />
                </div>
              ) : (
                <div className="w-3/4 space-y-2">
                  <div className="h-3 w-1/3 rounded bg-[var(--ac)]/70" />
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((n) => (
                      <div
                        key={n}
                        className="h-12 rounded-lg border border-[var(--line)] bg-[var(--card)]"
                      />
                    ))}
                  </div>
                  <div className="h-24 rounded-lg border border-[var(--line)] bg-[var(--card)]" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <AnimatePresence>
        {sel && <Modal p={sel} onClose={() => setSel(null)} />}
      </AnimatePresence>
    </>
  );
}
