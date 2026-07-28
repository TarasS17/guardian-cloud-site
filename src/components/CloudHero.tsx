'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import RegisterCta from '@/components/RegisterCta';


type Hero = { sub: string; body: string; cta1: string; cta2: string };

const HERO: Record<string, Hero> = {
  en: {
    sub: 'An autonomous AI operations & security team for your servers',
    body: 'One lightweight agent runs a full AI sysadmin and security contour on your infrastructure — audit, monitoring, remediation, intrusion response and malware defense — with a human kept in the loop on every change.',
    cta1: 'Explore the modules',
    cta2: 'Get started',
  },
  ru: {
    sub: 'Автономная AI-команда эксплуатации и безопасности для ваших серверов',
    body: 'Один лёгкий агент разворачивает полный AI-контур сисадминства и безопасности на вашей инфраструктуре — аудит, мониторинг, исправления, реакция на вторжения и защита от вирусов — с человеком в контуре на каждом изменении.',
    cta1: 'Изучить модули',
    cta2: 'Начать',
  },
  zh: {
    sub: '為您的伺服器而生的自主 AI 維運與安全團隊',
    body: '一個輕量化 Agent 即可在您的基礎設施上運行完整的 AI 系統管理與安全防禦鏈——稽核、監控、修復、入侵回應與惡意軟體防禦——且每一次變更都有人工參與把關。',
    cta1: '探索模組',
    cta2: '立即開始',
  },
};

/** Localized hub hero for /cloud (en / ru / zh). Brand title stays as-is. */
export default function CloudHero() {
  const { locale } = useLocale();
  const t = HERO[locale] ?? HERO.en;

  return (
    <VideoBackground videoSrc="/videos/cloud_h.mp4" loop={false} className="flex min-h-[62vh] items-center">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="gradient-text mb-5 text-5xl font-bold md:text-7xl">Guardian Cloud</h1>
        <p className="mx-auto mb-4 max-w-3xl text-2xl font-semibold text-cyan-300">{t.sub}</p>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80">{t.body}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/sysadmin"
            className="rounded-lg bg-cyan-500 px-8 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-cyan-400"
          >
            {t.cta1}
          </Link>
          <RegisterCta className="rounded-lg border border-cyan-500 px-8 py-4 text-lg font-bold text-cyan-300 transition-colors hover:bg-cyan-500/10">
            {t.cta2}
          </RegisterCta>
        </div>
      </div>
    </VideoBackground>
  );
}
