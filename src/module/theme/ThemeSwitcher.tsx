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

  const setThemeMode = (mode: string) => {
    setTheme(mode);
  };

  useEffect(() => {
    if (resolvedTheme !== undefined) {
      const oldThemeName = resolvedTheme === "dark" ? "light" : "dark";
      document.body.classList.remove(oldThemeName);
      document.body.classList.add(resolvedTheme);
    }
  }, [resolvedTheme]);

  if (!mounted)
    return (
      <button
        type="button"
        aria-label="toggle theme"
        className="btn btn--icon nav__button nav__theme"
      >
        <Setting />
      </button>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        type="button"
        aria-label="toggle theme"
        className="btn btn--icon nav__button nav__theme"
        onClick={() => setThemeMode("light")}
      >
        <Sun />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        type="button"
        aria-label="toggle theme"
        className="btn btn--icon nav__button nav__theme"
        onClick={() => setThemeMode("dark")}
      >
        <Moon />
      </button>
    );
  }
}
