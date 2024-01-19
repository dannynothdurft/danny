"use client";
import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

function LayoutProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="main--container">{children}</div>
      <Footer />
    </>
  );
}

export default LayoutProvider;
