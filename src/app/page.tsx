"use client";
import React, { useState, useEffect } from "react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="container">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
