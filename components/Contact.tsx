import { contact } from "@/data/contact";
import SectionHeading from "./SectionHeading";

const linkClass =
  "flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-4 text-neutral-200 transition-colors hover:border-accent/50 hover:text-white";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="05" title="Contact" />
      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
<p className="max-w-xl text-2xl font-semibold leading-snug text-white sm:text-xl">
  <span className="text-accent">Disponible</span> pour un poste de
  développeur web dans le Haut-Bugey, à Bourg-en-Bresse, à Lyon ou en
  télétravail.
</p>
          <a
            href={contact.cv}
            download
            className="mt-8 inline-block rounded bg-white px-5 py-3 text-neutral-900 transition-colors hover:bg-neutral-300"
          >
            Télécharger mon CV
          </a>
        </div>

        <ul className="space-y-3">
          <li>
            <a href={`mailto:${contact.email}`} className={linkClass}>
              <span>{contact.email}</span>
              <span aria-hidden className="text-accent">→</span>
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <span>LinkedIn</span>
              <span aria-hidden className="text-accent">→</span>
            </a>
          </li>
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <span>GitHub</span>
              <span aria-hidden className="text-accent">→</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}