"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="container">
      <About />
      {/*  <Projects />
        <Skills />*/}
      <Contact />
    </main>
  );
}
