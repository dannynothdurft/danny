"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="container">
      <About />
      {/*  <Projects />*/}
      <Skills />
      <Contact />
    </main>
  );
}
