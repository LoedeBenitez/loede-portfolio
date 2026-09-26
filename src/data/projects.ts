export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  category: "API" | "Web App" | "Tool";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "scm-api",
    name: "SCM API",
    tagline: "Supply chain & manufacturing platform for Mary Grace's bakery production",
    description:
      "The backbone API for Mary Grace's production floor — tracking bakery manufacturing batches from order to bake to assembly, running quality-assurance disposition on sub-standard items, logging warehouse receipts, and keeping goods-receipt records in sync with SAP.",
    stack: ["PHP 8.1", "Laravel 10", "Sanctum", "MySQL", "Queues"],
    role: "Sole backend developer",
    metrics: [
      { label: "Commits", value: "1,684" },
      { label: "Lines of code", value: "~34.7k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "Order-to-Assemble / Order-to-Bake (OTA/OTB) batch tracking for real bakery production lines",
      "Quality-assurance workflow for flagging and dispositioning sub-standard items",
      "Retry-safe SAP goods-receipt sync job so a failed ERP call never silently loses a receipt",
    ],
    category: "API",
    featured: true,
  },
  {
    slug: "sis-api",
    name: "SIS API",
    tagline: "Store Inventory System powering day-to-day operations across branches",
    description:
      "The most actively iterated system in the stack — store-level operations covering opening-readiness checklists, purchase requests with reusable templates, customer returns, stock conversion reporting, and push notifications to store staff devices.",
    stack: ["PHP 8.1", "Laravel 10", "Sanctum", "Google Auth", "Push Notifications"],
    role: "Sole backend developer",
    metrics: [
      { label: "Commits", value: "2,519" },
      { label: "Lines of code", value: "~30.4k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "Store-readiness \"Insights\" module that scores operational health per branch",
      "Device-token-based push notifications to a companion mobile app for store staff",
      "Purchase-request templates and approval flow used daily across branches",
    ],
    category: "API",
    featured: true,
  },
  {
    slug: "poshq",
    name: "POSHQ",
    tagline: "Central reconciliation hub for POS data across every store",
    description:
      "Ingests POS export files from every branch, reconciles them into a central sales datamart across multiple database servers without relying on cross-server SQL joins, and tracks whether every sales invoice successfully reached SAP/BPA.",
    stack: ["PHP 8.1", "Laravel 10", "Passport", "Livewire 3", "Redis"],
    role: "Sole backend developer",
    metrics: [
      { label: "Sales-invoice tracking", value: "Live" },
      { label: "Lines of code", value: "~17.6k" },
      { label: "Architecture doc", value: "Written" },
    ],
    highlights: [
      "Designed and documented a multi-database pagination strategy that merges store data without joins",
      "Per-record Redis caching, deliberately scoped to avoid cache-explosion and thundering-herd failure modes",
      "Sales-invoice transmission tracking against an external SAP/BPA system",
    ],
    category: "Web App",
    featured: true,
  },
  {
    slug: "poshq-api",
    name: "POSHQ API",
    tagline: "Versioned REST API connecting store POS terminals to SAP",
    description:
      "The POS-facing counterpart to POSHQ — a versioned API handling sales transactions, discounts, item master data, and payment terminals, with a queue-driven job that automatically pushes sales invoices into SAP and records any stock-out errors that come back.",
    stack: ["PHP 8.1", "Laravel 10", "Sanctum", "Queues", "SAP integration"],
    role: "Sole backend developer",
    metrics: [
      { label: "Commits", value: "83" },
      { label: "Lines of code", value: "~8.9k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "Employee-ID-based auto-provisioning login — no separate registration step for new staff",
      "Auto-queued SAP sales-invoice creation with explicit stock-out error tracking",
      "Versioned (v1) API surface designed for backward compatibility as terminals update on their own schedule",
    ],
    category: "API",
  },
  {
    slug: "mgios",
    name: "MG-IOS",
    tagline: "Inventory & ordering system with SAP-integrated auto-ordering",
    description:
      "Mary Grace's inventory and procurement backbone — item, variant, and batch management, purchase orders, receiving, delivery-route consolidation, and rule-based automatic ordering, mapped through to SAP.",
    stack: ["PHP 8.0", "Laravel 9", "Livewire 2", "Breeze", "Chart.js"],
    role: "Sole backend developer",
    metrics: [
      { label: "Commits", value: "375" },
      { label: "Lines of code", value: "~26k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "Automatic ordering logic driven by consumption and stock thresholds",
      "Delivery-route consolidation across multiple stores in a single order run",
      "SAP item-classification mapping for procurement reporting",
    ],
    category: "Web App",
  },
  {
    slug: "mgsr",
    name: "MG Service Reports",
    tagline: "Approval-workflow app built on the newest Laravel stack",
    description:
      "An internal workflow for submitting, approving, acknowledging, and clearing service reports, with a full role-based approval chain, signature capture at sign-off, and an audited activity history. Built on the latest Laravel/Livewire/Tailwind release line, with an AI-assisted development workflow wired in from day one.",
    stack: ["PHP 8.3", "Laravel 13", "Livewire 4", "Tailwind 4", "Vite 8"],
    role: "Sole developer",
    metrics: [
      { label: "Stack", value: "Bleeding-edge" },
      { label: "Lines of code", value: "~16k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "Digital signature capture for acknowledgment and sign-off steps",
      "Role-separated approval chain: requester, approver, and acknowledger are distinct paths",
      "Built and iterated with an AI-assisted dev workflow (Claude Code + MCP) from the first commit",
    ],
    category: "Web App",
  },
  {
    slug: "onemarygrace-api",
    name: "One Mary Grace API",
    tagline: "HRIS backend for employee self-service and multi-level approvals",
    description:
      "The API behind Mary Grace's employee self-service portal — employment records, disciplinary actions, education and government IDs, emergency contacts and beneficiaries, all routed through an organizational-structure-aware, multi-level approval system. Built and maintained alongside other developers.",
    stack: ["PHP 8.1", "Laravel 10", "Passport (OAuth2)", "Sanctum", "Livewire 2"],
    role: "Backend developer, team project",
    metrics: [
      { label: "Commits", value: "323" },
      { label: "Lines of code", value: "~22k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "OAuth2 authentication (Laravel Passport) for a system holding sensitive HR data",
      "Multi-level approval chains that follow the real organizational structure",
      "Collaborated with other engineers across feature branches on a shared codebase",
    ],
    category: "API",
  },
  {
    slug: "bms-extractor",
    name: "BMS Extractor",
    tagline: "Cross-database data extraction service with a documented caching strategy",
    description:
      "Pulls records out of a legacy system spread across multiple database servers, merges and paginates them without cross-server SQL joins, and caches individual records in Redis with a strategy explicitly designed to avoid cache-explosion and thundering-herd problems at scale.",
    stack: ["PHP 8.1", "Laravel 10", "Livewire 3", "Redis", "Playwright"],
    role: "Sole developer",
    metrics: [
      { label: "Commits", value: "168" },
      { label: "Lines of code", value: "~27k" },
      { label: "Since", value: "Ongoing" },
    ],
    highlights: [
      "Multi-database architecture, written up in its own design document",
      "Per-record Redis caching tuned specifically to avoid cache-explosion and thundering-herd failures",
      "Browser-level test coverage with Playwright and a written deployment checklist",
    ],
    category: "Tool",
  },
];
