export default function Contact() {
  return (
    <section id="contact" className="section container-x">
      <p className="h-eyebrow">05 / contact</p>
      <h2 className="h-section">Get in touch.</h2>
      <div className="card md:p-10">
        <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
          I&apos;m always open to interesting backend problems, distributed-systems
          puzzles, or just a good conversation about Kafka consumer rebalancing.
          The fastest way to reach me is email.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <a href="mailto:tulsirathod9102@gmail.com" className="card flex items-center justify-between hover:border-accent">
            <div>
              <p className="font-mono text-xs text-accent-soft">EMAIL</p>
              <p className="mt-1">tulsirathod9102@gmail.com</p>
            </div><span>→</span>
          </a>
          <a href="https://linkedin.com/in/tulsi-rathod" target="_blank" className="card flex items-center justify-between hover:border-accent">
            <div>
              <p className="font-mono text-xs text-accent-soft">LINKEDIN</p>
              <p className="mt-1">linkedin.com/in/tulsi-rathod</p>
            </div><span>↗</span>
          </a>
          <a href="https://github.com/TulsiRathod" target="_blank" className="card flex items-center justify-between hover:border-accent">
            <div>
              <p className="font-mono text-xs text-accent-soft">GITHUB</p>
              <p className="mt-1">github.com/TulsiRathod</p>
            </div><span>↗</span>
          </a>
          <a href="tel:+919054349910" className="card flex items-center justify-between hover:border-accent">
            <div>
              <p className="font-mono text-xs text-accent-soft">PHONE</p>
              <p className="mt-1">+91 90543 49910</p>
            </div><span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
