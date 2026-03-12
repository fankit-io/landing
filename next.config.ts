import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_KIT_FORM_ID:
      process.env.NEXT_PUBLIC_KIT_FORM_ID ?? process.env.KIT_FORM_ID,
    NEXT_PUBLIC_KIT_API_KEY:
      process.env.NEXT_PUBLIC_KIT_API_KEY ?? process.env.KIT_API_KEY,
  },
};

export default withNextIntl(nextConfig);
