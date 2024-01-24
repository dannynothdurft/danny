import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
