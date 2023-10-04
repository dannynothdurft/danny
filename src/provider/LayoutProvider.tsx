"use client"
import React, { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

function LayoutProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <Navigation />
      <div className="main--container">{children}</div>
      <Footer />
    </>
  );
}

export default LayoutProvider;