'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';

// Самодостаточная форма предрегистрации (waitlist). Ни от чат-бота, ни от AI-бэкенда не зависит.
// Шлёт лид в рабочий /api/contact (nodemailer → GMAIL_USER). Вставляется в любую вёрстку: <WaitlistForm />.
// Копирайт — placeholder RU/EN/ZH, заменяется без правки логики.

type Status = 'idle' | 'sending' | 'ok' | 'error';

/** 'launch' — ранний доступ к запуску (ComingSoon, страницы AI Studio).
 *  'updates' — подписка на новости о разработках (главная, сбор лидов).
 *  'registration' — регистрация в Cloud временно закрыта (баннер в CloudCta):
 *                   сообщим, когда откроется. */
export type WaitlistVariant = 'launch' | 'updates' | 'registration';

interface Copy {
  emailPh: string; namePh: string; btn: string; sending: string; ok: string; err: string; note: string;
}

const COPY: Record<WaitlistVariant, Record<string, Copy>> = {
  launch: {
    ru: {
      emailPh: 'Ваш email', namePh: 'Имя (необязательно)', btn: 'Ранний доступ', sending: 'Отправляю…',
      ok: 'Готово! Вы в списке — сообщим о запуске первыми.', err: 'Не отправилось. Попробуйте ещё раз.',
      note: 'Оставьте email — узнаете о запуске раньше всех.',
    },
    en: {
      emailPh: 'Your email', namePh: 'Name (optional)', btn: 'Get early access', sending: 'Sending…',
      ok: "You're in — we'll let you know first at launch.", err: "Couldn't send. Please try again.",
      note: 'Leave your email — be first to know at launch.',
    },
    zh: {
      emailPh: '您的郵箱', namePh: '姓名（選填）', btn: '搶先體驗', sending: '提交中…',
      ok: '已加入！我們會第一時間通知您上線。', err: '發送失敗，請重試。',
      note: '留下郵箱——第一時間獲取上線通知。',
    },
  },
  registration: {
    ru: {
      emailPh: 'Ваш email', namePh: 'Имя (необязательно)', btn: 'Сообщить мне', sending: 'Отправляю…',
      ok: 'Готово. Напишем вам, как только регистрация откроется.', err: 'Не отправилось. Попробуйте ещё раз.',
      note: '',
    },
    en: {
      emailPh: 'Your email', namePh: 'Name (optional)', btn: 'Notify me', sending: 'Sending…',
      ok: 'Done. We will write the moment registration reopens.', err: "Couldn't send. Please try again.",
      note: '',
    },
    zh: {
      emailPh: '您的郵箱', namePh: '姓名（選填）', btn: '通知我', sending: '提交中…',
      ok: '完成。開放註冊時我們會立即通知您。', err: '發送失敗，請重試。',
      note: '',
    },
  },
  updates: {
    ru: {
      emailPh: 'Ваш email', namePh: 'Имя (необязательно)', btn: 'Подписаться', sending: 'Отправляю…',
      ok: 'Готово. Будем держать вас в курсе.', err: 'Не отправилось. Попробуйте ещё раз.',
      note: 'Оставьте email — напишем, когда появится что-то стоящее.',
    },
    en: {
      emailPh: 'Your email', namePh: 'Name (optional)', btn: 'Subscribe', sending: 'Sending…',
      ok: 'Done. We will keep you informed.', err: "Couldn't send. Please try again.",
      note: 'Leave your email and we will write when there is something worth reading.',
    },
    zh: {
      emailPh: '您的郵箱', namePh: '姓名（選填）', btn: '訂閱', sending: '提交中…',
      ok: '完成。我們會持續讓您掌握進度。', err: '發送失敗，請重試。',
      note: '留下郵箱，有值得一讀的進展時我們會通知您。',
    },
  },
};

export default function WaitlistForm({
  className = '',
  variant = 'launch',
}: { className?: string; variant?: WaitlistVariant }) {
  const { locale } = useLocale();
  const set = COPY[variant] ?? COPY.launch;
  const c = set[locale] ?? set.en;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name.trim() || email.split('@')[0],
          lastName: '',
          email: email.trim(),
          businessSphere:
            variant === 'updates'
              ? 'Newsletter — product updates (home page)'
              : 'Waitlist — pre-registration (Product Hunt)',
        }),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-lg font-medium text-cyan-300">✓ {c.ok}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`mx-auto w-full max-w-md ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.emailPh}
          className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-gray-900 transition-colors hover:bg-cyan-400 disabled:opacity-60"
        >
          {status === 'sending' ? c.sending : c.btn}
        </button>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={c.namePh}
        className="mt-3 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500"
      />
      <p className="mt-3 text-sm text-white/50">{c.note}</p>
      {status === 'error' && <p className="mt-2 text-sm text-red-400">{c.err}</p>}
    </form>
  );
}
