import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [cover, ...others] = project.images;

  return (
    <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm">
      <Image
        src={cover}
        alt={`Capture de ${project.title}`}
        width={1600}
        height={840}
        className="w-full border-b border-neutral-200"
      />

      <div className="space-y-6 p-6 sm:p-8">
        <header>
          <h3 className="text-2xl font-bold text-neutral-900">{project.title}</h3>
          <p className="mt-2 text-neutral-600">{project.tagline}</p>
          <p className="mt-3 text-sm text-neutral-500">{project.context}</p>
        </header>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
            Mon rôle
          </h4>
          <p className="mt-1">{project.role}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700">
            {project.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
            Défi technique : {project.challenge.title}
          </h4>
          <p className="mt-1 text-neutral-700">{project.challenge.text}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
            >
              {tech}
            </li>
          ))}
        </ul>

        {others.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {others.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`Capture de ${project.title}`}
                width={800}
                height={420}
                className="w-full rounded border border-neutral-200"
              />
            ))}
          </div>
        )}

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-700"
            >
              Voir le site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-neutral-300 px-5 py-3 hover:bg-neutral-100"
            >
              Code sur GitHub
            </a>
          )}
        </div>
        {project.note && (
  <p className="text-sm text-neutral-400">{project.note}</p>
)}
      </div>
    </article>
  );
}