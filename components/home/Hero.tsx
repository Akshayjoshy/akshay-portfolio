"use client";
import { motion, useReducedMotion } from "motion/react";
import { LINKS } from "@/lib/constants";
const stack = ["React", "REST API", "Spring Boot", "MySQL / MongoDB"];
export default function Hero() {
  const rm = useReducedMotion();
  const up = (d: number) => ({
    initial: rm ? {} : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d },
  });
  return (
    <section id="top" className="pt-36 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.p {...up(0.05)} className="mono text-sm text-(--ac2)">
            Software Developer, full-stack
          </motion.p>
          <motion.h1
            {...up(0.15)}
            className="mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building software that solves{" "}
            <span className="grad">real problems.</span>
          </motion.h1>
          <motion.p {...up(0.3)} className="mt-6 max-w-xl text-lg text-(--fg2)">
            I&apos;m Akshay Joshy, a Software Developer focused on building
            modern web and mobile applications with React, TypeScript, Java, and
            Spring Boot.
          </motion.p>
          <motion.div
            {...up(0.4)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center rounded-full bg-linear-to-br from-[#8B5CF6] to-[#A78BFA] px-6 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,.35)]"
            >
              View my work
            </a>
            <a
              href={LINKS.resume}
              download
              className="inline-flex min-h-11 items-center rounded-full border border-(--line) px-6 transition hover:-translate-y-0.5"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="min-h-11 px-2 py-2.5 text-(--fg2) hover:text-(--fg)"
            >
              Let&apos;s connect
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={rm ? {} : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl border border-(--line) bg-(--card) shadow-2xl shadow-black/30"
          aria-label="Application stack diagram"
        >
          <div className="flex items-center gap-2 border-b border-(--line) px-4 py-3">
            <i className="h-3 w-3 rounded-full bg-zinc-600" />
            <i className="h-3 w-3 rounded-full bg-zinc-600" />
            <i className="h-3 w-3 rounded-full bg-zinc-600" />
            <span className="mono ml-auto text-xs text-(--mute)">
              akshay.dev
            </span>
          </div>
          <div className="mono space-y-3 p-6 text-sm">
            {stack.map((s, i) => (
              <div key={s}>
                <span className={i % 2 ? "text-(--ac2)" : "text-(--fg)"}>
                  {s}
                </span>
                {i < stack.length - 1 && <div className="text-(--mute)">↓</div>}
              </div>
            ))}
            <p className="pt-3 text-(--mute)">
              status: <span className="text-(--ac2)">production-ready</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
