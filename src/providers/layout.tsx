"use client";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeProviders } from "@/providers/theme";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/module/scroll/ScrollToTop";

export function LayoutProviders({ children }: { children: ReactNode }) {
  const rootRef: RefObject<HTMLDivElement> = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      rootRef.current?.style.removeProperty("pointer-events");
      setAnimate(true);
    }, 4000);
  }, []);

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (!animate) {
        event.preventDefault();
      }
    };

    document.body.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.body.removeEventListener("wheel", handleScroll);
    };
  }, [animate]);

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
        <div>
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </ThemeProviders>
  );
}
