import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="stack" className="border-y border-border bg-card px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Tech stack
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl sm:text-4xl">
            Kept in step with Laravel, from 9 to 13.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Across eight production codebases I&rsquo;ve tracked the framework
            through five major versions, while the actual day-to-day work
            leans on a consistent set of tools for APIs, auth, and ERP
            integration.
          </p>
        </div>

        <dl className="mt-10 divide-y divide-border border-y border-border">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {group.title}
              </dt>
              <dd className="text-[15px]">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
