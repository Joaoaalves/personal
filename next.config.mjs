/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "pt-BR",
    localeDetection: false,
  },
};

export default nextConfig;
