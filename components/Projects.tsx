const projects = [
  {
    title: "ParcelPlus",
    blurb:
      "On-demand logistics platform with Spring Boot microservices for booking, dynamic pricing, driver assignment, and real-time shipment tracking. WebSocket + Google Maps for live GPS, Redis cache, GCP load balancer for scale.",
    tags: ["Spring Boot", "React", "PostgreSQL", "WebSocket", "Redis", "GCP"],
    repo: "https://github.com/TulsiRathod/ParcelPlus",
    featured: true,
  },
  {
    title: "JAMES — RFID Attendance ERP",
    blurb:
      "Automatic attendance management system using RFID + IoT, integrated with a web app. Role-based dashboards for daily/weekly/monthly attendance and admin-level report generation.",
    tags: ["IoT", "RFID", "Web", "Reports"],
    repo: "https://github.com/TulsiRathod/JAMES",
  },
  {
    title: "AlmaPlus",
    blurb:
      "Alumni network application — connecting graduates, events, and opportunities. JavaScript stack with a focus on community features.",
    tags: ["JavaScript", "Node.js"],
    repo: "https://github.com/TulsiRathod/AlmaPlus",
  },
  {
    title: "Rockoly",
    blurb:
      "Team event management web app for organizing and managing team-building events across schools, companies, and chefs — bookings, scheduling, and participant flows in a React/Node stack.",
    tags: ["React", "Node.js", "Event Management"],
    repo: "https://github.com/TulsiRathod/Rockoly",
  },
  {
    title: "SEGPLAY",
    blurb:
      "React-based gaming/play platform — UI components, state-driven gameplay views, and responsive layouts. Built as part of an early frontend deep-dive.",
    tags: ["React", "JavaScript", "UI"],
    repo: "https://github.com/TulsiRathod/SEGPLAY-main",
  },
  {
    title: "NewsAPI",
    blurb:
      "Java service exposing a database-less news feed API — focused on clean controller layering and external API integration.",
    tags: ["Java", "REST"],
    repo: "https://github.com/TulsiRathod/NewsAPI",
  },
  {
    title: "Chess",
    blurb:
      "Browser chess implementation — board state, move validation, and game-loop logic in vanilla JavaScript.",
    tags: ["JavaScript", "Game logic"],
    repo: "https://github.com/TulsiRathod/Chess",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container-x">
      <p className="h-eyebrow">04 / projects</p>
      <h2 className="h-section">Things I&apos;ve built.</h2>

      {projects.filter(p => p.featured).map((p) => (
        <a
          key={p.title}
          href={p.repo}
          target="_blank"
          className="card block mb-6 md:p-8 group"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-medium">{p.title}</h3>
            <span className="font-mono text-xs text-accent-soft">FEATURED ↗</span>
          </div>
          <p className="mt-3 text-white/70 leading-relaxed">{p.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </a>
      ))}

      <div className="grid md:grid-cols-2 gap-5">
        {projects.filter(p => !p.featured).map((p) => (
          <a key={p.title} href={p.repo} target="_blank" className="card block group">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <span className="font-mono text-xs text-white/40 group-hover:text-accent-soft transition">↗</span>
            </div>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </a>
        ))}
      </div>

      <p className="mt-8 text-sm text-white/50">
        More on{" "}
        <a className="link" href="https://github.com/TulsiRathod" target="_blank">
          github.com/TulsiRathod
        </a>.
      </p>
    </section>
  );
}
