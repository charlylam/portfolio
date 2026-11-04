import { testimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="avis" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="04" title="Avis" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6"
          >
            <span
              aria-hidden
              className="absolute right-5 top-2 font-serif text-6xl leading-none text-accent/30"
            >
              “
            </span>
            <blockquote className="italic text-neutral-100">{t.quote}</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-400">
              <span className="font-semibold text-white">{t.author}</span>
              <br />
              {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}