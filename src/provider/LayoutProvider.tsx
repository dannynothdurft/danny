"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function LayoutProvider({ children }: { children: React.ReactNode }) {

  return (
    <>
      
          <Navigation />
          <div className="main--container">{children}</div>
          <Footer />
     
    </>
  );
}

export default LayoutProvider;
