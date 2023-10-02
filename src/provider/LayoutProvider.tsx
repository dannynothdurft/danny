"use client"
import React, { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function LayoutProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="main--container">{children}</div>
      <Footer />
    </>
  );
}

export default LayoutProvider;