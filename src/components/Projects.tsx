import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Selected work
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl sm:text-4xl">
            Eight systems, one back-office platform.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            These aren&rsquo;t disconnected side projects &mdash; they&rsquo;re
            a connected family of Laravel services I&rsquo;ve built and
            maintained for Mary Grace, sharing auth patterns, API
            conventions, and SAP integration points across POS, supply chain,
            inventory, HR, and store operations.
          </p>
        </div>

        <div className="mt-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Other systems
          </p>
          <div className="mt-4">
            {rest.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
