import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Сохранено из прежнего next.config.js — не блокировать сборку на pre-existing TS/ESLint.
  typescript: { ignoreBuildErrors: true },
  // Партнёрская программа закрыта (2026-10): старые ссылки на /referral ведут на главную.
  async redirects() {
    return [{ source: '/referral', destination: '/', permanent: false }];
  },
};

export default nextConfig;
