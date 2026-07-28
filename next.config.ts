import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Сохранено из прежнего next.config.js — не блокировать сборку на pre-existing TS/ESLint.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
