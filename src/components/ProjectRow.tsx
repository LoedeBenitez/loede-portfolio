import type { Project } from "@/data/projects";

export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="border-t border-border py-5 first:border-t-0 sm:py-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
        <span className="font-mono text-sm text-muted sm:w-8 sm:shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-medium">{project.name}</h3>
          <span className="text-sm text-muted">{project.tagline}</span>
        </div>
        <span className="font-mono text-xs text-muted sm:shrink-0">
          {project.stack.slice(0, 3).join(" · ")}
        </span>
      </div>
    </div>
  );
}
