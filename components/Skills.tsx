const groups = [
  { title: "Languages", items: ["Java", "JavaScript", "TypeScript", "C++", "SQL"] },
  { title: "Backend", items: ["Spring Boot", "Spring Security", "Hibernate / JPA", "REST", "GraphQL", "gRPC", "JWT", "OAuth2", "Node.js", "Express"] },
  { title: "Frontend", items: ["React.js", "Redux", "HTML5", "CSS3", "Next.js"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"] },
  { title: "Cloud & DevOps", items: ["AWS (S3, SES, SNS)", "Azure Blob", "Docker", "Kubernetes", "Helm", "Jenkins"] },
  { title: "Messaging & Observability", items: ["Apache Kafka", "Kafka UI", "Grafana", "Prometheus"] },
  { title: "System Design", items: ["Microservices", "Event-Driven", "Netflix Conductor", "Caching", "WebSockets"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section container-x">
      <p className="h-eyebrow">02 / skills</p>
      <h2 className="h-section">Tools I reach for.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="card">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-soft mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
