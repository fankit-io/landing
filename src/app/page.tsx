"use client";

import { useEffect } from "react";
import { routing } from "@/i18n/routing";

export default function RootPage() {
  useEffect(() => {
    const preferred = navigator.language.split("-")[0];
    const locale = routing.locales.includes(preferred as "en" | "es")
      ? preferred
      : routing.defaultLocale;
    window.location.replace(`/${locale}`);
  }, []);

  return null;
}
