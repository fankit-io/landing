import { getTranslations } from "next-intl/server";
import WaitlistForm from "./WaitlistForm";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Animated gradient mesh blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="animate-mesh-drift absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--color-accent-purple), transparent 70%)" }}
        />
        <div
          className="animate-mesh-drift absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle, var(--color-accent-pink), transparent 70%)",
            animationDelay: "-7s",
          }}
        />
        <div
          className="animate-mesh-drift absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, var(--color-accent-orange), transparent 70%)",
            animationDelay: "-13s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Coming Soon pill */}
        <div className="animate-float mb-8 inline-flex items-center gap-2 rounded-full border border-accent-purple/40 bg-accent-purple/10 px-5 py-2 text-sm font-medium text-accent-purple">
          <span className="h-2 w-2 rounded-full bg-accent-purple animate-pulse" />
          {t("badge")}
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl gradient-text-animated">
          {t("headline")}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
          {t("sub")}
        </p>

        {/* Waitlist form */}
        <div className="mt-10 w-full flex justify-center">
          <WaitlistForm />
        </div>

        {/* Helper text */}
        <p className="mt-4 text-sm text-text-muted">{t("cta")}</p>
      </div>
    </section>
  );
}
