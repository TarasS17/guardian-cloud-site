'use client';

import { useEffect, useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';
import WaitlistForm from '@/components/WaitlistForm';

/*
 * Кнопка регистрации, общая для Guardian Cloud и AI Studio.
 *
 * Оба контура сейчас недоступны: cloud.alfa-can.com и studio.alfa-can.com не отвечают
 * (переезд с GCP). Кнопки НЕ отключены и не ведут в оборванное соединение, по клику
 * открывается баннер с честным уведомлением и формой: посетитель оставляет почту и
 * получает письмо, когда регистрация откроется. Тупик превращается в лид.
 *
 * Два текста:
 *   product="cloud" , идут технические работы, откроется в ближайшее время;
 *   product="studio", запуск платформы 10 августа 2026, предрегистрация с 1 августа (таймер до неё).
 *
 * 👉 Вернуть регистрацию: выставить нужный флаг в OPEN. Больше ничего менять не нужно —
 *    все точки входа ходят через этот компонент.
 */

export const OPEN: Record<Product, boolean> = { cloud: false, studio: false };

export const URLS: Record<Product, string> = {
  cloud: 'https://cloud.alfa-can.com/register',
  studio: 'https://studio.alfa-can.com',
};

export type Product = 'cloud' | 'studio';

type Copy = { title: string; body: string; ask: string; close: string; countdown_label?: string };

const COPY: Record<Product, Record<string, Copy>> = {
  cloud: {
    ru: {
      title: 'Извините, идут технические работы',
      body: 'Регистрация будет доступна в ближайшее время.',
      ask: 'Оставьте свой e-mail, мы сообщим вам, как только она откроется.',
      close: 'Закрыть',
    },
    en: {
      title: 'Sorry, maintenance is in progress',
      body: 'Registration will be available shortly.',
      ask: 'Leave your e-mail and we will write to you the moment it reopens.',
      close: 'Close',
    },
    zh: {
      title: '抱歉，系統正在維護',
      body: '註冊功能將於近期開放。',
      ask: '留下您的電子郵件，開放時我們會第一時間通知您。',
      close: '關閉',
    },
  },
  studio: {
    ru: {
      title: 'Регистрация',
      body: 'Запуск платформы состоится 10 августа. Регистрация открывается 1 августа.',
      countdown_label: 'До открытия регистрации',
      ask: '',
      close: 'Закрыть',
    },
    en: {
      title: 'Registration',
      body: 'The platform launches on 10 August. Registration opens on 1 August.',
      countdown_label: 'Until registration opens',
      ask: '',
      close: 'Close',
    },
    zh: {
      title: '註冊',
      body: '平台將於 8 月 10 日上線。註冊將於 8 月 1 日開放。',
      countdown_label: '距註冊開放',
      ask: '',
      close: '關閉',
    },
  },
};

// Предварительная регистрация AI Studio, 1 августа 2026, 15:00 по Лондону (BST = UTC+1).
// Таймер отсчитывает до предрегистрации; сам запуск платформы — 10 августа.
const LAUNCH_AT = new Date('2026-08-01T15:00:00+01:00').getTime();

const UNITS: Record<string, [string, string, string, string]> = {
  ru: ['дней', 'часов', 'минут', 'секунд'],
  en: ['days', 'hours', 'minutes', 'seconds'],
  zh: ['天', '小時', '分', '秒'],
};

/** Обратный отсчёт до запуска. Рендерится только внутри открытой модалки, на сервере
 *  не выполняется, поэтому расхождения гидратации быть не может. */
export function Countdown({ locale }: { locale: string }) {
  const [left, setLeft] = useState(() => LAUNCH_AT - Date.now());

  useEffect(() => {
    const t = setInterval(() => setLeft(LAUNCH_AT - Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (left <= 0) return null;

  const s = Math.floor(left / 1000);
  const parts = [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
  const labels = UNITS[locale] ?? UNITS.en;

  return (
    <div className="mt-5 grid grid-cols-4 gap-2">
      {parts.map((v, i) => (
        <div key={labels[i]} className="rounded-lg border border-amber-400/25 bg-amber-400/5 py-3 text-center">
          <div className="font-mono text-2xl font-bold tabular-nums text-amber-300">
            {String(v).padStart(2, '0')}
          </div>
          <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/45">{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}

export default function RegisterCta({
  product = 'cloud',
  className = '',
  children,
}: {
  product?: Product;
  className?: string;
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const c = COPY[product][locale] ?? COPY[product].en;

  if (OPEN[product]) {
    return (
      <a href={URLS[product]} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-amber-400/30 bg-[#0A0F1E] p-7 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-white">{c.title}</h3>
            <p className="mt-2 leading-relaxed text-white/80">{c.body}</p>

            {product === 'studio' && (
              <>
                {c.countdown_label && <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/45">{c.countdown_label}</p>}
                <Countdown locale={locale} />
              </>
            )}

            {c.ask && <p className="mt-5 leading-relaxed text-white/70">{c.ask}</p>}

            <WaitlistForm className="mt-4" variant="registration" />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 w-full py-2 text-sm text-white/50 transition-colors hover:text-white/80"
            >
              {c.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
