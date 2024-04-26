"use client";
import React, { useRef } from "react";

import Header from "@/components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

export default function MainLayout() {
  const rootRef = useRef(null);

  return (
    <div ref={rootRef} className="app" id="top">
      <Header />

      <main className="container">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <div className="animate__animated animate__fadeIn animate__delay-5s">
        <ScrollToTop />
      </div>

      <Footer />
    </div>
  );
}
