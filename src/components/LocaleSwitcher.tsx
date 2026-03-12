"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "English",
  es: "Español",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value });
  }

  return (
    <select
      value={locale}
      onChange={onChange}
      className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-white/20 hover:text-text focus:outline-none focus:border-accent-purple"
    >
      {Object.entries(localeLabels).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
