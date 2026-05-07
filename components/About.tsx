export default function About() {
  return (
    <section id="about" className="section container-x">
      <p className="h-eyebrow">01 / about</p>
      <h2 className="h-section">A bit about me.</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-white/75 leading-relaxed text-lg">
          <p>
            I&apos;m a backend developer who likes the parts of a system most
            people scroll past — the gRPC contracts, the Kafka topic plans, the
            Conductor workflows, the Helm chart values that decide whether a
            release goes smoothly or gets rolled back at 2 a.m.
          </p>
          <p>
            At <span className="text-white">Commotion</span> I work on the AI
            Worker / Agent platform — CRUD APIs, MCP server tooling, voice-agent
            capabilities, and journey-builder orchestration. Recent wins:
            replacing a third-party email vendor with a full AWS SES + SNS
            pipeline, migrating Twilio callbacks onto Kafka, and tuning consumer
            concurrency across services so the queue stops being a mystery.
          </p>
          <p>
            Before backend I spent a year deep in React/TypeScript at Technoyuga
            — owning a Marketing Campaign module in a large enterprise app,
            building Redux-driven integrations, and migrating styles to SCSS. I
            still write frontend when a feature needs end-to-end ownership; this
            site is a small example.
          </p>
          <p>
            Outside of work I&apos;m on{" "}
            <a className="link" href="https://leetcode.com/" target="_blank">LeetCode</a>{" "}
            (800+ solved, peak 1905) and chasing whatever distributed-systems
            paper keeps me curious that week. I like problems that look small
            until you read the second paragraph of the ticket.
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
