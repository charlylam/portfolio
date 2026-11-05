"use client";

import { useEffect, useState } from "react";
import { contact } from "@/data/contact";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-800/70 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a href="#" className="font-semibold text-white">
          Charly Lamena
        </a>

        <ul className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contact.cv}
              download
              className="rounded border border-neutral-600 px-4 py-2 text-white transition-colors hover:border-accent hover:text-accent"
            >
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="rounded p-2 text-neutral-200 transition-colors hover:text-accent md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="menu-mobile"
          className="border-t border-neutral-700 px-6 py-3 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-neutral-200 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contact.cv}
              download
              onClick={() => setOpen(false)}
              className="block py-3 text-neutral-200 transition-colors hover:text-accent"
            >
              Télécharger mon CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}