import { Braces, Database, Workflow, Link2, Zap, LayoutDashboard, type LucideIcon } from "lucide-react";

export const capabilities: { title: string; detail: string; route: string; icon: LucideIcon }[] = [
  { title: "API Design", detail: "REST APIs, authentication, integrations, service architecture", route: "/api/design", icon: Braces },
  { title: "Databases", detail: "MySQL, relational data modeling, queries, data integrity", route: "/data/schema", icon: Database },
  { title: "Backend Systems", detail: "Business logic, workflows, permissions, internal platforms", route: "/domain/logic", icon: Workflow },
  { title: "Integrations", detail: "SAP, POS, third-party APIs, data synchronization", route: "/sync/map", icon: Link2 },
  { title: "Automation", detail: "Data extraction, processing pipelines, operational workflows", route: "/jobs/queue", icon: Zap },
  { title: "Internal Tools", detail: "Admin systems, reporting platforms, operational software", route: "/tools/internal", icon: LayoutDashboard },
];
