import { getTranslations } from "next-intl/server";
import FadeIn from "./FadeIn";

const stepKeys = ["step1", "step2", "step3"] as const;

export default async function HowItWorks() {
  const t = await getTranslations("HowItWorks");

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl lg:text-5xl gradient-text">
            {t("title")}
          </h2>
        </FadeIn>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-12 left-[16.67%] right-[16.67%] hidden h-px bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange md:block" />

          {stepKeys.map((key, i) => (
            <FadeIn key={key} delay={i * 150}>
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-surface">
                  <span className="font-heading text-4xl font-bold gradient-text">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-text">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
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
