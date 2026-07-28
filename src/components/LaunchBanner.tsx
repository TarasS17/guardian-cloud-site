'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import RegisterCta from '@/components/RegisterCta';


type Data = { eyebrow: string; h: string; body: string; offer: string; cta: string };

const DATA: Record<string, Data> = {
  en: {
    eyebrow: 'Get started',
    h: 'Connect your servers',
    body: 'Guardian Cloud takes over administration and defence of your infrastructure. Connecting takes minutes.',
    offer: 'The first 100 clients to connect get 50% off the annual service plan.',
    cta: 'Register',
  },
  ru: {
    eyebrow: 'Начало работы',
    h: 'Подключите свои серверы',
    body: 'Guardian Cloud берёт администрирование и защиту вашей инфраструктуры на себя. Подключение занимает минуты.',
    offer: 'Первые 100 подключившихся клиентов получают 50% скидку на годовой тариф обслуживания.',
    cta: 'Зарегистрироваться',
  },
  zh: {
    eyebrow: '開始使用',
    h: '接入您的伺服器',
    body: 'Guardian Cloud 將全面接管您基礎設施的維運與防護。接入僅需幾分鐘。',
    offer: '前 100 名接入服務的客戶，可享年度服務方案 50% 折扣。',
    cta: '立即註冊',
  },
};

export default function LaunchBanner() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-900/40 via-gray-900/40 to-violet-900/30 p-8 text-center shadow-[0_10px_40px_rgba(34,211,238,0.18)] md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300/80">{d.eyebrow}</p>
          <h2 className="gradient-text mb-4 text-3xl font-bold md:text-5xl">{d.h}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/80">{d.body}</p>

          <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-4">
            <span className="text-base font-semibold text-emerald-200">{d.offer}</span>
          </div>

          <RegisterCta className="inline-block rounded-lg bg-cyan-500 px-10 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-cyan-400">
            {d.cta}
          </RegisterCta>
        </div>
      </div>
    </section>
  );
}
