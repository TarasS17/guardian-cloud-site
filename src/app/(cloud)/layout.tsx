'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/lib/i18n/LocaleContext';

const LABELS: Record<string, { overview: string; billing: string }> = {
  en: { overview: 'Overview', billing: 'Tariffs & Billing' },
  ru: { overview: 'Обзор', billing: 'Тарифы и биллинг' },
  zh: { overview: '總覽', billing: '方案與計費' },
};

/**
 * Guardian Cloud sub-site shell: a sticky module menu under the main header,
 * shared by the hub and every module page. Module names stay English (brand);
 * Overview / Tariffs & Billing are localized.
 */
export default function CloudLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { locale } = useLocale();
  const L = LABELS[locale] ?? LABELS.en;

  const NAV = [
    { href: '/', label: L.overview },
    { href: '/sysadmin', label: 'Sysadmin' },
    { href: '/itdr', label: 'ITDR' },
    { href: '/ai-models', label: 'AI Models' },
    { href: '/doctrine', label: 'Doctrine' },
    { href: '/billing', label: L.billing },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-16 text-white">
      <nav className="sticky top-16 z-40 border-b border-cyan-500/20 bg-gray-950/85 backdrop-blur">
        <div className="container mx-auto flex gap-1 overflow-x-auto px-4 py-3 text-sm">
          {NAV.map((n) => {
            const active =
              n.href === '/' ? pathname === '/' : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`whitespace-nowrap rounded-lg px-4 py-2 font-medium transition-colors ${
                  active
                    ? 'bg-cyan-500 text-gray-900'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </div>
      </nav>
      {children}
    </div>
  );
}
