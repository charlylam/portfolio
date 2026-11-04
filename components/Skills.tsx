import { hardSkills, softSkills } from "@/data/skills";
import SectionHeading from "./SectionHeading";

function SubHeading({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <span className="text-sm text-neutral-500">{caption}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="02" title="Compétences" />

      <div className="mt-12">
        <SubHeading title="Hard skills" caption="Technologies, outils et méthodes" />
        <div className="mt-5 divide-y divide-neutral-700 rounded-xl border border-neutral-700 bg-neutral-800/70">
          {hardSkills.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 px-6 py-5 md:grid-cols-[9rem_1fr] md:items-baseline"
            >
              <h4 className="flex items-center gap-2 text-base font-semibold text-white">
  <span aria-hidden className="h-4 w-1 rounded-full bg-accent" />
  {group.category}
</h4>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-600 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SubHeading title="Soft skills" caption="Ce que mon parcours en montre" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {softSkills.map((skill) => (
            <div
              key={skill.label}
              className="rounded-xl border border-neutral-700 bg-neutral-800/70 p-6"
            >
              <span className="block h-0.5 w-8 bg-accent" />
              <p className="mt-4 font-semibold text-white">{skill.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}