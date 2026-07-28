// components/VisitorCounter.tsx
'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';

const translations = {
  ru: { visits: 'Посещений', pageviews: 'Просмотров', visitors: 'Посетителей' },
  en: { visits: 'Visits', pageviews: 'Pageviews', visitors: 'Visitors' },
  zh: { visits: '访问次数', pageviews: '浏览次数', visitors: '访问者' },
};

interface UmamiStats {
  visits: number;
  pageviews: number;
  visitors: number;
}

export default function VisitorCounter() {
  const { locale = 'ru' } = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const [stats, setStats] = useState<UmamiStats>({
    visits: 0,
    pageviews: 0,
    visitors: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/umami', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch Umami stats');

        const data = await res.json();

        // ✅ данные уже плоские, без .total
        setStats({
          visits: data.visits ?? 0,
          pageviews: data.pageviews ?? 0,
          visitors: data.visitors ?? 0,
        });
      } catch (error) {
        console.error('Error fetching Umami stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 z-40 text-white/80 px-4 py-2 bg-gray-900/80 rounded-lg">
        Loading…
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-4 py-3 space-y-1">
        <p className="text-white/80 text-xs">
          {t.visits}:{' '}
          <span className="text-sm font-bold text-cyan-400">
            {stats.visits.toLocaleString(locale)}
          </span>
        </p>
        <p className="text-white/80 text-xs">
          {t.pageviews}:{' '}
          <span className="text-sm font-bold text-cyan-400">
            {stats.pageviews.toLocaleString(locale)}
          </span>
        </p>
        <p className="text-white/80 text-xs">
          {t.visitors}:{' '}
          <span className="text-sm font-bold text-cyan-400">
            {stats.visitors.toLocaleString(locale)}
          </span>
        </p>
      </div>
    </div>
  );
}
