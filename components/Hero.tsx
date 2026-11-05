import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.35fr]">
      <div>
        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Concepteur développeur d&apos;applications
        </p>
        <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">
          Charly Lamena
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-300">
          Après 13 ans d&apos;ébénisterie, je conçois des applications avec
          la même exigence : un travail précis, solide et durable, qui répond aux besoins client.
        </p>
    <div className="mt-8 flex flex-wrap gap-4">
    <a
        href="#projets"
        className="rounded bg-white px-5 py-3 text-neutral-900 transition-colors hover:bg-neutral-300"
    >
        Voir mes projets
    </a>
    <a
        href="#contact"
        className="rounded border border-neutral-600 px-5 py-3 text-white transition-colors hover:border-white hover:bg-white hover:text-neutral-900"
    >
        Me contacter
    </a>
    </div>
      </div>

<figure className="relative">
  <div
    aria-hidden
    className="absolute -bottom-3 -right-3 h-full w-full border border-accent/40"
  />
  <div className="relative border border-neutral-700 bg-neutral-950">
    <Image
      src="/images/hero-bois-code.png"
      alt="Assemblage à queue d'aronde entre une planche de chêne et un éditeur de code"
      width={1672}
      height={941}
      quality={90}
      sizes="(min-width: 1024px) 700px, 100vw"
      priority
      className="block h-auto w-full"
    />
  </div>
  <figcaption className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
    <span aria-hidden className="h-px w-8 bg-accent" />
    De l&apos;atelier au code
  </figcaption>
</figure>
    </section>
  );
}