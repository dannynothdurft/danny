"use client";

import React, { ReactNode, RefObject, useEffect, useRef } from "react";
import { ThemeProviders } from "@/providers/theme";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/module/scroll/ScrollToTop";

export function LayoutProviders({ children }: { children: ReactNode }) {
  const rootRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    window.setTimeout(() => {
      rootRef.current?.style.removeProperty("pointer-events");
    }, 5000);
  }, []);

  return (
    <ThemeProviders>
      <div
        ref={rootRef}
        className="app"
        id="top"
        style={{ pointerEvents: "none" }}
      >
        <Header />
        {children}
        <div className="animate__animated animate__fadeIn animate__delay-5s">
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </ThemeProviders>
  );
}
