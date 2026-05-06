import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none fixed -top-40 -left-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-blob" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
