import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  const t = await getTranslations("Navbar");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-heading text-2xl font-bold gradient-text">
          Fan Kit
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-text transition-all hover:bg-white/20 hover:scale-105"
        >
          {t("waitlist")}
        </a>
      </div>
    </nav>
  );
}
