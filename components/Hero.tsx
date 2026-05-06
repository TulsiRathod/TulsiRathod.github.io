export default function Hero() {
  return (
    <section id="top" className="container-x pt-28 pb-24">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm text-accent-soft mb-5">
          <span className="text-white/40">$</span> whoami
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          <span className="gradient-text">Tulsi Rathod.</span>
          <br />
          <span className="text-white/90">Backend developer building</span>
          <br />
          <span className="text-white/60">distributed, event-driven systems.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
          Associate Backend Developer at{" "}
          <span className="text-white">Commotion</span>, shipping AI agent
          platforms, voice-agent infrastructure, and Kafka-driven microservices
          in Java &amp; Spring Boot. Previously a React developer; now mostly at
          home in JVM-land.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium transition hover:bg-accent-soft">
            See projects
          </a>
          <a href="#contact" className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-accent/60 hover:text-accent-soft">
            Contact me
          </a>
          <a
            href="https://github.com/TulsiRathod"
            target="_blank"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-white/40"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-white/50">
          <span><span className="text-accent">●</span> Mumbai, IN</span>
          <span><span className="text-accent">●</span> 800+ LeetCode solved · 1905 peak</span>
          <span><span className="text-accent">●</span> Open to interesting work</span>
        </div>
      </div>
    </section>
  );
}
