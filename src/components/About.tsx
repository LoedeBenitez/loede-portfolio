const stats = [
  { value: "8", label: "production systems" },
  { value: "5,000+", label: "commits shipped" },
  { value: "5", label: "Laravel major versions" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          About
        </p>
        <h2 className="mt-3 max-w-xl text-balance font-serif text-3xl sm:text-4xl">
          I build for the store floor and the back office, not the demo.
        </h2>

        <div className="mt-8 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              I&rsquo;m a developer at Mary Grace, where I design and maintain
              the internal platforms that keep the business running &mdash;
              from tracking a bakery batch as it moves through production, to
              reconciling POS sales across every branch, to routing HR
              approvals through the real org chart.
            </p>
            <p>
              Most of that work lives in Laravel, but the interesting parts
              are rarely the framework: they&rsquo;re things like designing a
              multi-database architecture that avoids cross-server joins, or
              writing a Redis caching strategy that&rsquo;s deliberately tuned
              against cache-explosion and thundering-herd failures &mdash; and
              then writing it down so the next person (often future me)
              doesn&rsquo;t have to reverse-engineer it.
            </p>
            <p>
              I care about systems that stay correct under real operational
              pressure: retries when SAP is down, auto-provisioning so store
              staff aren&rsquo;t blocked by onboarding, and approval chains
              that actually match how the organization works.
            </p>
          </div>

          <dl className="flex flex-col divide-y divide-border border-y border-border sm:border-y-0 sm:border-l sm:pl-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 py-4 sm:justify-start sm:py-0 sm:pb-6">
                <dt className="order-2 text-sm text-muted sm:order-2">{stat.label}</dt>
                <dd className="order-1 font-serif text-3xl text-accent sm:order-1 sm:mr-3">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
