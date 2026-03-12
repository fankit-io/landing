import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-heading text-lg font-bold gradient-text">
            Fan Kit
          </span>
          <span className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Fan Kit. {t("rights")}
          </span>
        </div>

        <div className="flex gap-8 text-sm text-text-muted">
          <a href="#" className="transition-colors hover:text-text">
            {t("privacy")}
          </a>
          <a href="#" className="transition-colors hover:text-text">
            {t("terms")}
          </a>
          <a href="#" className="transition-colors hover:text-text">
            {t("contact")}
          </a>
        </div>
      </div>
    </footer>
  );
}
