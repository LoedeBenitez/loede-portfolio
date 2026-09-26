export const experience: {
  period: string;
  role: string;
  org: string;
  bullets: { label?: string; text: string }[];
  tags?: string[];
}[] = [
  {
    period: "Jan 2023 — Current",
    role: "IT Programmer",
    org: "Mary Grace Foods, Inc. — Parañaque",
    bullets: [
      {
        text: "Backend developer (and occasional full-stack) across the HRMS, centralized company portal, supply chain, and warehouse systems detailed in Selected Work.",
      },
      {
        text: "Worked with development and QA teams to deliver solutions that met client requirements for functionality, scalability, and performance.",
      },
    ],
  },
  {
    period: "Sep 2022 — Nov 2022",
    role: "Associate Software Engineer",
    org: "PrimeTechCorp — Las Piñas",
    bullets: [
      { text: "Built a major project, a Ticketing System, using Laravel and Vue." },
      { text: "Drafted ideas on solving problems or issues in the system." },
    ],
    tags: ["Laravel", "Vue"],
  },
];
