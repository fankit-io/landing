import { getTranslations } from "next-intl/server";
import WaitlistForm from "./WaitlistForm";
import FadeIn from "./FadeIn";

export default async function WaitlistCTA() {
  const t = await getTranslations("WaitlistCTA");

  return (
    <section id="waitlist" className="relative overflow-hidden py-24 px-6">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/10 to-transparent" />
        <div
          className="animate-mesh-drift absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--color-accent-pink), transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl gradient-text-animated">
            {t("headline")}
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            {t("sub")}
          </p>
        </FadeIn>

        <FadeIn delay={200} className="mt-10 w-full flex justify-center">
          <WaitlistForm />
        </FadeIn>
      </div>
    </section>
  );
}
