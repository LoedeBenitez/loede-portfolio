// TODO: replace these placeholders with your real links before publishing.
const links = [
  { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { label: "GitHub", value: "github.com/your-handle", href: "https://github.com/your-handle" },
  { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://linkedin.com/in/your-handle" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Contact
        </p>
        <h2 className="mt-3 max-w-xl text-balance font-serif text-3xl sm:text-4xl">
          Want to talk shop about Laravel, SAP integrations, or bakery
          software?
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Open to conversations about backend architecture, internal
          tooling, or new opportunities.
        </p>

        <dl className="mt-10 divide-y divide-border border-y border-border">
          {links.map((link) => (
            <div
              key={link.label}
              className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-6"
            >
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {link.label}
              </dt>
              <dd>
                <a
                  href={link.href}
                  className="underline decoration-border underline-offset-4 transition hover:decoration-accent hover:text-accent"
                >
                  {link.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
