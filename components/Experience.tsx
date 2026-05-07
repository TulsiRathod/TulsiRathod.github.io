const jobs = [
  {
    role: "Associate Backend Developer",
    company: "Commotion",
    period: "Jul 2025 — Present",
    location: "Mumbai, IN",
    bullets: [
      "Shipped end-to-end AI Worker / AI Agent platform CRUD APIs, MCP server tooling, knowledge-base settings, deployment workflows, and gRPC contracts across services.",
      "Built AWS SES email integration with SNS callback handling, auto-confirmation, and per-connection configuration sets — replacing a third-party vendor.",
      "Engineered bulk-import pipelines for SMS templates and entity imports (Assets, Stores, Products) using Netflix Conductor with full upload-history tracking.",
      "Delivered voice-agent capabilities (voice-to-text continuity, inbound agents) and queue working-hours support with fallback routing across gRPC + Helm.",
      "Implemented journey-builder pause semantics across scheduler/decision nodes, fixing circular dependencies and event-topic routing; built multi-tab agent console sync via real-time message broadcast.",
      "Tuned Kafka consumer concurrency across services and migrated Twilio callbacks to Kafka, provisioning new topics across Helm charts; authored org-level data cleanup APIs in db-manager.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "gRPC", "Conductor", "Helm", "AWS"],
  },
  {
    role: "Backend Intern",
    company: "Commotion",
    period: "Jan 2025 — Jun 2025",
    location: "Mumbai, IN",
    bullets: [
      "Developed REST and GraphQL endpoints across core backend services for notifications, templates, and tenant configuration.",
      "Implemented Elasticsearch-based search with index design and query construction for tenant data lookup.",
      "Wrote unit/integration tests on critical flows, debugged production issues using Grafana, reviewed event-driven workflows.",
      "Improved analytics dimension lookups for nested group operations, refactored scheduler trigger macros, and hardened third-party integration reliability (Brevo unsubscribe opt-out, vendor product import null-safety); standardized the frontend Input component across the Automation module.",
    ],
    tags: ["Java", "Spring Boot", "GraphQL", "Elasticsearch", "Grafana"],
  },
  {
    role: "React Developer",
    company: "Technoyuga Soft Pvt. Ltd.",
    period: "Jun 2022 — Jan 2023",
    location: "Surat, IN",
    bullets: [
      "Owned end-to-end development of the Marketing Campaign module in a large-scale React/TypeScript enterprise app — campaign creation, listing, and detail flows with form validation, discard/confirmation modals, publish/save lifecycle, and multiple production bug fixes.",
      "Designed and implemented UI + Redux state management for External Integrations & Credentials — connected third-party channels via REST APIs, built reusable channel cards, listing views, and context-menu-driven actions (view/delete).",
      "Drove platform-wide UI and infrastructure improvements — standardized the shared Input component, migrated CSS → SCSS, added Axios interceptors and lazy-loading for performance, and contributed to multi-agentic chat features including a context-menu popup chat and multi-tab message-sync reliability fixes.",
    ],
    tags: ["React", "TypeScript", "Redux", "SCSS", "Axios"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section container-x">
      <p className="h-eyebrow">03 / experience</p>
      <h2 className="h-section">Where I&apos;ve worked.</h2>
      <ol className="relative border-l border-white/10 ml-2 space-y-10">
        {jobs.map((j) => (
          <li key={j.role + j.period} className="pl-8 relative">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(124,92,255,0.15)]" />
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-xl font-medium">{j.role}</h3>
                <span className="text-accent-soft">@ {j.company}</span>
              </div>
              <span className="font-mono text-xs text-white/50 shrink-0 text-right">{j.period}</span>
            </div>
            <p className="font-mono text-xs text-white/40 mt-1">{j.location}</p>
            <ul className="mt-4 space-y-2 text-white/75 leading-relaxed">
              {j.bullets.map((b, i) => (
                <li key={i} className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {j.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
