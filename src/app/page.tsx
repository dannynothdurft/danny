"use client";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="container">
      <About />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </main>
  );
}
