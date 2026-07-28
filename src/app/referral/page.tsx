'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import WalkthroughVideo from '@/components/WalkthroughVideo';
import { useTranslation } from '@/lib/i18n/useTranslation';
import VisitorCounter from '@/components/VisitorCounter';

export default function ReferralProgramPage() {
  const { locale } = useLocale();
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const PARTNER_URL = 'https://part.alfa-can.com/register';
  const [activeVideo, setActiveVideo] = useState<string>('');

// Вспомогательные функции для типизации
  const getArray = (key: string): string[] => {
    const value = t(key);
    return Array.isArray(value) ? value as string[] : [];
  };

  const openVideo = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    setIsVideoOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <VideoBackground
          videoSrc="/videos/oder2.mp4"
          loop={false}
          className="min-h-screen flex items-center"
        >
          <div className="container mx-auto py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            {t('referral.hero.title')}
          </h1>
          {t('referral.hero.subtitle') ? (
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 font-semibold">
              {t('referral.hero.subtitle')}
            </h2>
          ) : null}
          <p className="text-lg text-white/80 max-w-4xl mx-auto mb-10">
            {t('referral.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('partner-program-conditions')}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              {locale === 'ru'
                ? 'Стать партнёром'
                : locale === 'zh'
                ? '成为合作伙伴'
                : 'Become a Partner'
              }
            </button>
            <button
              onClick={() => scrollToSection('partner-program-conditions')}
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              {locale === 'ru'
                ? 'Узнать условия'
                : locale === 'zh'
                ? '了解条件'
                : 'Learn Conditions'
              }
            </button>
          </div>
        </div>
      </VideoBackground>

      {/* 2. ЧТО МЕНЯЕТСЯ — согласованный текст владельца, дословно */}
      <section className="py-20 bg-gray-900">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="text-lg leading-relaxed text-white/80">
            {t('referral.shift.intro')}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white">
            {t('referral.shift.change')}
          </p>

          <div className="mt-8 space-y-2 border-l-2 border-cyan-400 pl-6">
            <p className="text-lg leading-relaxed text-white/80">{t('referral.shift.bad')}</p>
            <p className="text-lg font-medium leading-relaxed text-white">{t('referral.shift.good')}</p>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-white">
            {t('referral.shift.risk')}
          </p>

          <p className="mt-6 text-lg font-bold leading-relaxed text-cyan-300">
            {t('referral.shift.bring')}
          </p>

          <div className="mt-10">
            <button
              onClick={() => scrollToSection('partner-program-conditions')}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              {locale === 'ru'
                ? 'Узнать условия'
                : locale === 'zh'
                ? '了解条件'
                : 'Learn Conditions'
              }
            </button>
          </div>
        </div>
      </section>

      {/* 3. ЕСЛИ ВЫ В ШТАТЕ — сценарий «шеф просит проверить» */}
      <section className="py-20 bg-black">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            {t('referral.insider.title')}
          </h2>
          <p className="text-lg leading-relaxed text-white/80">{t('referral.insider.lead')}</p>

          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">{t('referral.insider.s1_title')}</h3>
              <p className="text-lg leading-relaxed text-white/75">{t('referral.insider.s1_text')}</p>
            </div>
            <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-6">
              <h3 className="mb-3 text-xl font-bold text-white">{t('referral.insider.s2_title')}</h3>
              <p className="text-lg leading-relaxed text-white/85">{t('referral.insider.s2_text')}</p>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium leading-relaxed text-white">
            {t('referral.insider.close')}
          </p>
        </div>
      </section>

      {/* 4. ПРИЗЫВ */}
      <section className="border-y border-cyan-500/30 bg-cyan-500/5 py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold leading-snug text-white md:text-3xl md:leading-snug">
            {t('referral.callout.line1')}
          </p>
          <p className="mt-6 text-2xl font-bold leading-snug text-cyan-300 md:text-3xl md:leading-snug">
            {t('referral.callout.line2')}
          </p>
        </div>
      </section>

      {/* 5. MSP — вторая аудитория: владелец аутсорса, разговор про маржу и штат */}
      <section className="py-20 bg-gray-900">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            {t('referral.msp.title')}
          </h2>

          <p className="text-lg leading-relaxed text-white/80">{t('referral.msp.p1')}</p>
          <p className="mt-5 text-lg leading-relaxed text-white/80">{t('referral.msp.p2')}</p>

          <div className="mt-10 space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{t('referral.msp.s1_title')}</h3>
              <p className="text-lg leading-relaxed text-white/75">{t('referral.msp.s1_text')}</p>
            </div>
            <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{t('referral.msp.s2_title')}</h3>
              <p className="text-lg leading-relaxed text-white/85">{t('referral.msp.s2_text')}</p>
            </div>
          </div>

          <h3 className="mt-12 mb-6 text-xl font-bold text-white">{t('referral.msp.list_title')}</h3>
          <ul className="space-y-4">
            {getArray('referral.msp.points').map((point, index) => {
              const item = point as unknown as { title: string; text: string };
              return (
                <li key={index} className="border-l-2 border-cyan-400/60 pl-5">
                  <span className="text-lg font-semibold text-white">{item.title}</span>
                  <span className="text-lg leading-relaxed text-white/75"> {item.text}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-6">
            <p className="text-lg leading-relaxed text-white/90">{t('referral.msp.transition')}</p>
          </div>

          <p className="mt-12 text-lg font-bold leading-relaxed text-white">
            {t('referral.msp.close')}
          </p>
        </div>
      </section>

      {/* Плавный переход: видео по языку, без документа */}
      <WalkthroughVideo videoRu="3GGeJbMukbM" videoEn="GdBYgZsQRsA" variant="partner" />

      {/* 6. ЭКОСИСТЕМА — что партнёр получает кроме процента */}
      <section className="py-20 bg-black">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            {t('referral.ecosystem.title')}
          </h2>
          <p className="text-lg italic leading-relaxed text-white/70">{t('referral.ecosystem.lead')}</p>
          <hr className="mt-8 border-white/10" />

          <div className="mt-10 space-y-6">
            {getArray('referral.ecosystem.points').map((point, index) => {
              const item = point as unknown as { title: string; text: string };
              return (
                <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-bold text-cyan-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-lg leading-relaxed text-white/75">{item.text}</p>
                </div>
              );
            })}
          </div>

          <hr className="mt-10 border-white/10" />
          <blockquote className="mt-10 border-l-2 border-cyan-400 pl-6 text-lg font-medium leading-relaxed text-white">
            {t('referral.ecosystem.close')}
          </blockquote>
        </div>
      </section>


      {/* 7. УСЛОВИЯ ПРОГРАММЫ */}
      <section id="partner-program-conditions" className="py-20 bg-gradient-to-b from-gray-900 to-cyan-900/20">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t('referral.pricing.title')}
          </h2>
          <p className="text-lg leading-relaxed text-white/80">{t('referral.pricing.subtitle')}</p>

          {/* Лесенка ставки */}
          <h3 className="mt-12 mb-5 text-xl font-bold text-white">{t('referral.pricing.ladder.title')}</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-3 text-sm font-semibold text-white/60">
                    {t('referral.pricing.ladder.col_clients')}
                  </th>
                  <th className="px-6 py-3 text-sm font-semibold text-white/60">
                    {t('referral.pricing.ladder.col_rate')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {getArray('referral.pricing.ladder.steps').map((step, index) => {
                  const row = step as unknown as { clients: string; rate: string };
                  return (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="px-6 py-3 text-lg text-white/80">{row.clients}</td>
                      <td className="px-6 py-3 text-lg font-bold text-cyan-300">{row.rate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-white/60">{t('referral.pricing.ladder.note')}</p>

          {/* Приведённые партнёры и реселлер */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">{t('referral.pricing.subpartner.title')}</h3>
              <p className="leading-relaxed text-white/75">{t('referral.pricing.subpartner.text')}</p>
            </div>
            <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">{t('referral.pricing.reseller.title')}</h3>
              <p className="leading-relaxed text-white/85">{t('referral.pricing.reseller.text')}</p>
            </div>
          </div>

          {/* Выплаты */}
          <h3 className="mt-12 mb-5 text-xl font-bold text-white">{t('referral.pricing.payouts.title')}</h3>
          <dl className="divide-y divide-white/10 rounded-xl border border-white/10">
            {getArray('referral.pricing.payouts.rows').map((row, index) => {
              const item = row as unknown as { k: string; v: string };
              return (
                <div key={index} className="flex flex-col gap-1 px-6 py-4 md:flex-row md:gap-6">
                  <dt className="text-white/60 md:w-56 md:shrink-0">{item.k}</dt>
                  <dd className="text-lg text-white/85">{item.v}</dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-10">
            <button
              onClick={() => window.open(PARTNER_URL, '_blank')}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              {t('referral.pricing.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* 8. ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-cyan-900/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t('referral.faq.title')}
          </h2>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q1.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q1.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q2.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q2.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q3.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q3.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q4.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q4.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q5.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q5.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q6.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q6.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q7.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q7.answer')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">
              {t('referral.faq.q8.question')}
            </h3>
            <p className="text-lg text-white/80">
              {t('referral.faq.q8.answer')}
            </p>
          </div>
        </div>
      </section>

      {/* 9. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-cyan-900/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('referral.finalCTA.title')}
          </h2>
          <p className="text-lg text-cyan-400 mb-4">
            {t('referral.finalCTA.subtitle')}
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t('referral.finalCTA.description')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button 
              onClick={() => window.open(PARTNER_URL, '_blank')}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              {t('referral.finalCTA.primaryButton')}
            </button>
          </div>

          <p className="text-white/60">
            {t('referral.finalCTA.note')}
          </p>
        </div>
      </section>

      {/* 10. Partner Dashboard Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'ru' 
              ? 'Ваш партнёрский кабинет'
              : locale === 'zh'
              ? '您的合作伙伴仪表板'
              : 'Your Partner Dashboard'
            }
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {locale === 'ru' 
              ? 'Всё в одном месте: отслеживайте клиентов, комиссии, прогресс и получайте аналитику в реальном времени'
              : locale === 'zh'
              ? '一切尽在一处：实时跟踪客户、佣金、进度并获取分析'
              : 'Everything in one place: track clients, commissions, progress and get real-time analytics'
            }
          </p>
          
          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                {locale === 'ru'
                  ? 'Открыть партнёрский кабинет'
                  : locale === 'zh'
                  ? '打开合作伙伴仪表板'
                  : 'Open Partner Dashboard'
                }
              </a>
              <a
                href="https://part.alfa-can.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                {locale === 'ru'
                  ? 'Войти в кабинет'
                  : locale === 'zh'
                  ? '登录仪表板'
                  : 'Sign In'
                }
              </a>
            </div>
          </div>
        </div>
      </section>


{/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-sm mx-4">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              <track kind="subtitles" srcLang="en" label="English" />
              <track kind="subtitles" srcLang="ru" label="Русский" />
              <track kind="subtitles" srcLang="zh" label="中文" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <VisitorCounter />
    </div>
  );
}
