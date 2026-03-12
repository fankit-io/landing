"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function WaitlistForm() {
  const t = useTranslations("WaitlistForm");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t("invalid"));
      return;
    }

    setLoading(true);

    try {
      const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID;
      const apiKey = process.env.NEXT_PUBLIC_KIT_API_KEY;

      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: apiKey, email }),
        }
      );

      const data = await res.json();

      if (data.subscription) {
        setSubmitted(true);
      } else {
        setError(data.message || t("error"));
      }
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="animate-fade-in-up text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent-purple/20 px-6 py-3 text-lg font-semibold text-accent-purple">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {t("success")}
        </div>
        <p className="mt-2 text-text-muted">{t("successSub")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder={t("placeholder")}
          disabled={loading}
          className="h-14 w-full rounded-full bg-white/10 px-6 text-text placeholder:text-text-muted outline-none ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-accent-purple focus:shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-50"
        />
        {error && (
          <p className="mt-1 pl-6 text-sm text-accent-pink">{error}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="h-14 cursor-pointer rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange px-8 font-heading font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? "…" : t("button")}
      </button>
    </form>
  );
}
