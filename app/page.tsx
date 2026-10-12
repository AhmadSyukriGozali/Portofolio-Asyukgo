import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ahmad Syukri Gozali. All rights reserved.
        </div>
      </footer>
    </main>
  );
}