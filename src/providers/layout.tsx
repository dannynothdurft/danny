"use client";

import React, { ReactNode } from "react";
import { ThemeProviders } from "@/providers/theme";

export function LayoutProviders({ children }: { children: ReactNode }) {
  return <ThemeProviders>{children}</ThemeProviders>;
}
