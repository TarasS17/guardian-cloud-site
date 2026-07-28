'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[]; trialLabel: string; trial: string };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'one platform, sized to your fleet',
    paras: [
      'A per-server subscription with a hard billing gate: capacity is onboarded only when it is paid for, and every gate decision is written to your service history.',
      'Five plans — from a single server to a data center. Every plan includes Cloud AI, ITDR, SIEM and RAG; plans differ by how many servers you monitor and automate.',
    ],
    trialLabel: 'Free trial',
    trial: 'After you register — 10 days free: 1 automated + 1 monitoring server to get to know the platform. When the trial ends, choose and connect your plan right in your dashboard.',
  },
  ru: {
    sub: 'одна платформа под размер вашего парка',
    paras: [
      'Подписка по числу серверов с жёстким billing-гейтом: мощность подключается только когда оплачена, и каждое решение гейта пишется в вашу Историю обслуживания.',
      'Пять тарифов — от одного сервера до дата-центра. На каждом тарифе включены Cloud AI, ITDR, SIEM и RAG; тарифы различаются числом серверов на мониторинге и автоматизации.',
    ],
    trialLabel: 'Бесплатный период',
    trial: 'После регистрации — 10 дней бесплатно: 1 автоматизированный + 1 мониторинговый сервер, чтобы познакомиться с работой платформы. По окончании пробного периода выберите и подключите свой тариф прямо в своём дашборде.',
  },
  zh: {
    sub: '一個平台，依您的規模量身而設',
    paras: [
      '按伺服器數計費，並設有硬性計費閘門：唯有付費後才會接入相應容量，且每一次閘門決策都會寫入您的維運歷史。',
      '五種方案——從單一伺服器到資料中心。每一種方案皆包含 Cloud AI、ITDR、SIEM 與 RAG；方案之間的差異在於可監控與自動化的伺服器數量。',
    ],
    trialLabel: '免費試用',
    trial: '註冊後——10 天免費：1 台自動 + 1 台監控伺服器，讓您熟悉平台運作。試用期結束後，直接在您的儀表板中選擇並開通方案。',
  },
};

/** Static (non-video) hero + intro for the Billing page. */
export default function BillingIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/35 via-gray-950 to-violet-900/25" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="bh-bar" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="bh-bar2" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="bh-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* faint grid */}
          <g stroke="#ffffff" strokeOpacity="0.05">
            <line x1="0" y1="140" x2="1440" y2="140" />
            <line x1="0" y1="240" x2="1440" y2="240" />
            <line x1="0" y1="340" x2="1440" y2="340" />
            <line x1="0" y1="440" x2="1440" y2="440" />
            <line x1="0" y1="540" x2="1440" y2="540" />
          </g>

          {/* big faint currency glyphs */}
          <text x="640" y="330" fill="#ffffff" fillOpacity="0.03" fontSize="420" fontWeight="800" textAnchor="middle">$</text>

          {/* growth bars, bottom-right */}
          <g>
            <rect x="980" y="470" width="40" height="70" rx="6" fill="url(#bh-bar)" />
            <rect x="1044" y="440" width="40" height="100" rx="6" fill="url(#bh-bar2)" />
            <rect x="1108" y="450" width="40" height="90" rx="6" fill="url(#bh-bar)" />
            <rect x="1172" y="390" width="40" height="150" rx="6" fill="url(#bh-bar2)" />
            <rect x="1236" y="400" width="40" height="140" rx="6" fill="url(#bh-bar)" />
            <rect x="1300" y="340" width="40" height="200" rx="6" fill="url(#bh-bar2)" />
            <rect x="1364" y="290" width="40" height="250" rx="6" fill="url(#bh-bar)" />
          </g>

          {/* upward trend line */}
          <g style={{ filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.4))' }}>
            <polyline points="0,470 240,452 480,460 720,408 960,360 1200,300 1380,252" fill="none" stroke="url(#bh-line)" strokeWidth="3" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="720" cy="408" r="5" fill="#22d3ee" />
            <circle cx="960" cy="360" r="5" fill="#38bdf8" />
            <circle cx="1200" cy="300" r="5" fill="#a855f7" />
          </g>

          {/* invoice / plan cards, top-left */}
          <g>
            <rect x="150" y="180" width="250" height="160" rx="16" fill="#a855f7" fillOpacity="0.05" stroke="#a855f7" strokeOpacity="0.2" />
            <rect x="110" y="120" width="250" height="160" rx="16" fill="#22d3ee" fillOpacity="0.06" stroke="#22d3ee" strokeOpacity="0.25" />
            <rect x="134" y="150" width="120" height="12" rx="6" fill="#ffffff" fillOpacity="0.14" />
            <rect x="134" y="182" width="202" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.08" />
            <rect x="134" y="200" width="170" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.08" />
            <rect x="134" y="218" width="190" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.08" />
            <text x="312" y="258" fill="#22d3ee" fillOpacity="0.5" fontSize="34" fontWeight="800" textAnchor="end">$</text>
          </g>
        </svg>
        <div className="container relative z-10 mx-auto max-w-5xl px-4 py-24 text-center md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">Tariffs &amp; Billing</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
        </div>
      </section>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          {t.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-900/25 to-gray-900/30 p-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">{t.trialLabel}</p>
            <p className="text-base text-white/85">{t.trial}</p>
          </div>
        </div>
      </section>
    </>
  );
}
