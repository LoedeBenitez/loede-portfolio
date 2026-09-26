export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "rois",
    name: "ROIS",
    subtitle: "Restaurant Operations & Inventory System",
    description:
      "A backend-driven operations platform connecting inventory, ordering, receiving, purchasing, feedback, readiness, and store operations into one system.",
    tags: ["Laravel", "PHP", "MySQL", "REST API", "Authentication", "Business Logic"],
  },
  {
    slug: "bms-extractor",
    name: "BMS Extractor",
    subtitle: "Automated cross-system data extraction",
    description:
      "An automated data extraction service built to move operational data between business systems and simplify daily reporting workflows.",
    tags: ["PHP", "Laravel", "MySQL", "Automation", "Data Processing"],
  },
  {
    slug: "poshq-api",
    name: "POSHQ API",
    subtitle: "Central point-of-sale integration layer",
    description:
      "Central API infrastructure for connecting point-of-sale data with internal systems and operational services.",
    tags: ["REST API", "Laravel", "SAP Integration", "Data Synchronization"],
  },
  {
    slug: "one-mary-grace-api",
    name: "One Mary Grace API",
    subtitle: "Internal tooling & approvals backend",
    description:
      "Backend services supporting internal tools, approvals, data access, and operational workflows.",
    tags: ["Laravel", "API", "Authentication", "MySQL"],
  },
  {
    slug: "mg-service-reports",
    name: "MG Service Reports",
    subtitle: "Store-level operational reporting",
    description:
      "An internal reporting system designed to turn operational data into useful store-level insights.",
    tags: ["PHP", "Laravel", "MySQL", "Reporting"],
  },
];
