import { getTranslations } from "next-intl/server";
import FadeIn from "./FadeIn";

const featureKeys = ["noApp", "engagement", "location", "realtime"] as const;

const featureIcons = {
  noApp: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  engagement: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  location: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  realtime: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
    </svg>
  ),
};

export default async function Features() {
  const t = await getTranslations("Features");

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl lg:text-5xl gradient-text">
            {t("title")}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((key, i) => (
            <FadeIn key={key} delay={i * 100}>
              <div className="glass group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:border-accent-purple/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <div className="mb-5 inline-flex rounded-xl bg-accent-purple/10 p-3 text-accent-purple transition-colors group-hover:bg-accent-purple/20">
                  {featureIcons[key]}
                </div>
                <h3 className="font-heading text-xl font-bold text-text">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {t(`${key}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
