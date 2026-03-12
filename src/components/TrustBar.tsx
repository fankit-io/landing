import { getTranslations } from "next-intl/server";

export default async function TrustBar() {
  const t = await getTranslations("TrustBar");

  return (
    <section className="border-y border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-center sm:gap-10">
        <span className="text-sm font-medium uppercase tracking-widest text-text-muted">
          {t("worksWith")}
        </span>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <img
            src="/add-to-apple-wallet.webp"
            alt="Add to Apple Wallet"
            width={200}
            height={60}
            className="transition-opacity hover:opacity-80"
          />

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          <img
            src="/add-to-google-wallet.webp"
            alt="Add to Google Wallet"
            width={200}
            height={60}
            className="transition-opacity hover:opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
