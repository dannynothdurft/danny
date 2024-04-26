"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Sun from "@/svg/sun";
import Moon from "@/svg/moon";
import Setting from "@/svg/setting";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Setting />;

  if (resolvedTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <Sun />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button onClick={() => setTheme("dark")}>
        <Moon />
      </button>
    );
  }
}
