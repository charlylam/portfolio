import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="03" title="Projets" />
      <div className="mt-10 space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}