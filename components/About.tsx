export default function About() {
  return (
    <section id="about" className="section container-x">
      <p className="h-eyebrow">01 / about</p>
      <h2 className="h-section">A bit about me.</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-white/75 leading-relaxed text-lg">
          <p>
            I&apos;m a backend developer focused on building reliable services at
            scale — gRPC contracts, Kafka topics, Conductor workflows, and the
            unglamorous plumbing that keeps event-driven systems honest.
          </p>
          <p>
            At <span className="text-white">Commotion</span> I work on the AI
            Worker / Agent platform: CRUD APIs, MCP server tooling, voice-agent
            capabilities, and journey-builder orchestration. I migrated Twilio
            callbacks to Kafka, replaced a third-party email vendor with AWS SES
            + SNS, and tuned consumer concurrency across services.
          </p>
          <p>
            Before that I shipped REST/GraphQL endpoints, integrated Elasticsearch
            for tenant search, and spent a chunk of 2022 living in React. I like
            problems that look small until you read the second paragraph of the
            ticket.
          </p>
        </div>
        <aside className="card font-mono text-sm space-y-3">
          <div className="flex justify-between gap-4"><span className="text-white/50 shrink-0">role</span><span className="text-right">Associate Backend Developer</span></div>
          <div className="flex justify-between gap-4"><span className="text-white/50 shrink-0">company</span><span className="text-right">Commotion</span></div>
          <div className="flex justify-between gap-4"><span className="text-white/50 shrink-0">stack</span><span className="text-right">Java · Spring · Kafka</span></div>
          <div className="flex justify-between gap-4"><span className="text-white/50 shrink-0">edu</span><span className="text-right">MSc IT, DAU</span></div>
          <div className="flex justify-between gap-4"><span className="text-white/50 shrink-0">leetcode</span><span className="text-right">1905 peak</span></div>
        </aside>
      </div>
    </section>
  );
}
