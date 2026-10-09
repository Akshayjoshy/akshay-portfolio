"use client";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LINKS } from "@/lib/constants";
const nav = ["About", "Experience", "Projects", "Skills", "Contact"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false),
    [dark, setDark] = useState(() =>
      typeof document === "undefined"
        ? true
        : document.documentElement.classList.contains("dark"),
    );
  useEffect(() => {
    const f = () => setScrolled(scrollY > 20);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try {
      localStorage.theme = d ? "dark" : "light";
    } catch {}
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-white/10 backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_75%,transparent)] py-2" : "py-4"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="font-semibold">
          Akshay Joshy
        </a>
        <nav aria-label="Primary" className="hidden gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="text-sm text-(--fg2) hover:text-(--fg)"
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/5"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={LINKS.resume}
            download
            className="hidden min-h-11 items-center rounded-full border border-(--ac)/50 bg-(--ac)/10 px-4 text-sm sm:inline-flex"
          >
            Resume
          </a>
          <button
            className="grid h-11 w-11 place-items-center md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-(--line) bg-(--bg) px-5 py-4 md:hidden">
          {nav.map((n) => (
            <a
              key={n}
              onClick={() => setOpen(false)}
              href={`#${n.toLowerCase()}`}
              className="block min-h-11 py-2"
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
