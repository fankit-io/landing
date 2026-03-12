import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <img src="/fan-kit-logo.svg" alt="Fan Kit" width={100} height={30} />
          <span className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Fan Kit. {t("rights")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 sm:items-end">
          <div className="flex items-center gap-8 text-sm text-text-muted">
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
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
