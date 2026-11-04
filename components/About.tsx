import SectionHeading from "./SectionHeading";

const parcours = [
  { title: "Ébéniste", detail: "13 ans de métier" },
  { title: "Titre professionnel CDA", detail: "École O'clock, 2026" },
  { title: "Stage de deux mois", detail: "IDCOM, WordPress et WooCommerce" },
  { title: "À la recherche d'un poste", detail: "Haut-Bugey, Bourg-en-Bresse, Lyon" },
];

export default function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="01" title="À propos" />
      <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-neutral-300">
          <p>
            Ébéniste pendant treize ans, je me suis reconverti dans le
            développement web. J&apos;ai obtenu en 2026 le titre professionnel
            de concepteur développeur d&apos;applications à l&apos;École
            O&apos;clock, puis fait un stage de deux mois dans une agence web,
            sur des sites WordPress et WooCommerce.
          </p>
          <p>
            À l&apos;atelier, j&apos;avais envie d&apos;évoluer et
            d&apos;apprendre de nouvelles choses. Le développement m&apos;a
            attiré parce qu&apos;il reprend ce que j&apos;aimais dans mon
            métier : partir d&apos;un besoin, concevoir, construire, puis
            résoudre les problèmes qui se présentent en chemin.
          </p>
          <p>
            Un meuble comme une application demande de la logique, un plan
            précis et du soin dans l&apos;assemblage. Je garde cette façon de
            travailler : je cadre le besoin, je construis par étapes, et je
            cherche l&apos;origine d&apos;un problème avant de le corriger.
          </p>
        </div>

        <ol className="relative space-y-6 border-l border-neutral-800 pl-6">
          {parcours.map((step) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-semibold text-white">{step.title}</p>
              <p className="text-sm text-neutral-400">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}