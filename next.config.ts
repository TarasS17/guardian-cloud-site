import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Сохранено из прежнего next.config.js — не блокировать сборку на pre-existing TS/ESLint.
  typescript: { ignoreBuildErrors: true },
  // Партнёрская программа закрыта (2026-10): старые ссылки на /referral ведут на главную.
  async redirects() {
    return [
      { source: '/referral', destination: '/', permanent: false },
      // Ребрендинг 2026-10: G-Coder → α-Coder, G-Tester → α-Tester. Старые адреса статей ведут на новые.
      { source: '/papers/g-coder-paper-en.html', destination: '/papers/alfa-coder-paper-en.html', permanent: true },
      { source: '/papers/g-tester-paper-en.html', destination: '/papers/alfa-tester-paper-en.html', permanent: true },
    ];
  },
};

export default nextConfig;
