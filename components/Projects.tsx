const featured = [
  {
    title: "ParcelPlus",
    year: "2025",
    blurb:
      "On-demand logistics platform with Spring Boot microservices for booking, dynamic pricing, driver assignment, and real-time shipment tracking. WebSocket + Google Maps for live GPS, Redis caching, and GCP Global Load Balancer for high-concurrency traffic.",
    tags: ["Spring Boot", "React.js", "PostgreSQL", "WebSocket", "Redis", "GCP"],
    repo: "https://github.com/TulsiRathod/ParcelPlus",
  },
  {
    title: "AlmaPlus",
    year: "2024",
    blurb:
      "Multi-portal alumni-engagement platform across four React apps (Main, Admin, Institute) backed by a Node/Express + MongoDB server. Alumni profiles with editable education/experience, follower-graph and search/filter, real-time 1:1 chat and notifications via Socket.IO, an events module with create/RSVP flows, and an alumni-driven HelpStudents mentorship feature. Full auth lifecycle with JWT, Nodemailer OTP password reset, and Multer image uploads. Companion dashboards built with CKEditor, Material-Table, Google Maps, and Firebase.",
    tags: ["React 18", "Node.js", "Express", "MongoDB", "Socket.IO", "MUI", "JWT", "Firebase"],
    repo: "https://github.com/TulsiRathod/AlmaPlus",
  },
  {
    title: "SegPlay",
    year: "2024",
    blurb:
      "Gamified stock-market simulator where users trade virtual shares against a live market feed, compete on a leaderboard, and use power-ups to short-sell or exchange holdings. Built the trading dashboard — portfolio, wallet, order placement, day-news feed, and a live timer for round-based gameplay with real-time price updates and order matching via Socket.IO. Designed short-sell and special-card mechanics with full transaction history and an exchange flow.",
    tags: ["React 18", "Socket.IO", "MUI", "Bootstrap", "Axios"],
    repo: "https://github.com/TulsiRathod/SEGPLAY-main",
  },
];

const more = [
  {
    title: "JAMES — RFID Attendance ERP",
    blurb:
      "Automatic attendance management system using RFID + IoT integrated with a web app. Role-based dashboards for daily/weekly/monthly attendance and admin-level report generation.",
    tags: ["IoT", "RFID", "Web"],
    repo: "https://github.com/TulsiRathod/JAMES",
  },
  {
    title: "Rockoly",
    blurb:
      "Team event management web app for organizing and managing team-building events across schools, companies, and chefs — bookings, scheduling, and participant flows.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/TulsiRathod/Rockoly",
  },
  {
    title: "NewsAPI",
    blurb:
      "Java service exposing a database-less news feed API — clean controller layering and external API integration.",
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

      <div className="space-y-6">
        {featured.map((p) => (
          <a
            key={p.title}
            href={p.repo}
            target="_blank"
            className="card block md:p-8 group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-medium">{p.title}</h3>
              <span className="font-mono text-xs text-accent-soft shrink-0">{p.year} ↗</span>
            </div>
            <p className="mt-3 text-white/70 leading-relaxed">{p.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </a>
        ))}
      </div>

      <h3 className="mt-16 mb-6 font-mono text-sm uppercase tracking-widest text-accent-soft">
        more from github
      </h3>
      <div className="grid md:grid-cols-2 gap-5">
        {more.map((p) => (
          <a key={p.title} href={p.repo} target="_blank" className="card block group">
            <div className="flex items-baseline justify-between">
              <h4 className="text-lg font-medium">{p.title}</h4>
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
