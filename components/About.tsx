import SectionHeading from "./SectionHeading";

const parcours = [
  { title: "Ébéniste", detail: "13 ans de métier" },
  { title: "Titre professionnel CDA", detail: "École O'clock, 2026" },
  { title: "Stage de deux mois", detail: "IDCOM, WordPress et WooCommerce" },
  { title: "À la recherche d'un poste", detail: "Haut-Bugey, Bourg-en-Bresse, Lyon" },
];
const strengths = [
  {
    title: "Analyser le besoin",
    text: "Des années d'artisanat à comprendre la demande client, concevoir, réaliser et livrer, avec ses contraintes de budget, de délai et de normes.",
  },
  {
    title: "Relation client",
    text: "Passé par la vente auprès de clientèles variées, je sais identifier ce qu’un client cherche vraiment et lui proposer la solution qui lui correspond.",
  },
  {
    title: "Mise en pratique",
    text: "Product Owner sur GreenRoots : 25 User Stories rédigées, périmètre MVP arbitré, backlog priorisé en équipe de cinq.",
  },
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
  <li className="relative">
    <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-neutral-950 motion-safe:animate-pulse" />
    <span
      aria-hidden
      className="absolute -left-[25px] top-full h-16 border-l border-dashed border-neutral-600 [mask-image:linear-gradient(to_bottom,black,transparent)]"
    />
    <p className="font-semibold text-white">Prochaine étape</p>
    <p className="text-sm text-neutral-400">Rejoindre une équipe de développement</p>
  </li>
</ol>
      </div>
      <div className="mt-16">
  <h3 className="text-lg font-semibold text-white">Ce qui me différencie</h3>
  <p className="mt-2 max-w-2xl text-sm text-neutral-400">
    Écrire du code est une partie du métier. Je m&apos;appuie aussi sur mon
    expérience professionnelle pour comprendre ce que le client attend vraiment.
  </p>
  <div className="mt-5 grid gap-4 md:grid-cols-3">
    {strengths.map((s) => (
      <div
        key={s.title}
        className="rounded-xl border border-neutral-700 bg-neutral-800/70 p-6"
      >
        <span className="block h-0.5 w-8 bg-accent" />
        <p className="mt-4 font-semibold text-white">{s.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">{s.text}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}