import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="border-t border-neutral-800">
        <About />
      </div>
      <div className="border-t border-neutral-800 bg-white/[0.03]">
        <Skills />
      </div>
      <div className="border-t border-neutral-800">
        <Projects />
      </div>
      <div className="border-t border-neutral-800 bg-white/[0.03]">
        <Testimonials />
      </div>
      <div className="border-t border-neutral-800">
        <Contact />
      </div>
    </main>
  );
}