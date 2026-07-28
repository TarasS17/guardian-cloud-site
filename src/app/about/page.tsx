'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';
import WaitlistForm from '@/components/WaitlistForm';
import { CompanyIntro, CompanyPrinciples } from '@/components/CompanySections';

// Home — корпоративная страница ALFACAN Defence Group: кто мы и принципы
// (CompanySections) + четыре направления (Guardian Cloud, Mercanon, AI Studio, BlackWings)
// + партнёрская программа. Контент — из src/lib/i18n/locales/{ru,en,zh}.json под ключом `home`.
//
// Это страница КОМПАНИИ, не продукта: модельный флот, объёмы обучения и статусы
// развёртывания сюда не ставим — им место на страницах продуктов.

const IMG: Record<string, string> = {
  ai_studio: '/images/progect-g.jpg',
  g_coder: '/images/hero-coder.jpg',
  g_tester: '/images/hero-tester.jpg',
  g_studio: '/images/hero-g_studio.jpg',
  blackwings: '/images/bw2.png',
  architect: '/images/BLACKWINGS-Architect.png',
  arsenal: '/images/BLACKWINGS-Arsenal.png',
  training_center: '/images/BLACKWINGS-Training-Center.png',
};


interface CardData {
  name: string;
  subtitle?: string;
  description?: string;
  status?: string;
  cta?: string;
  cta_url?: string;
}

/** Карточка продукта: Project G — яркое изображение сверху; BlackWings — логотип на чёрном. */
function ProductCard({ d, imgKey, video, dark = false }: { d: CardData; imgKey?: string; video?: string; dark?: boolean }) {
  const img = imgKey ? IMG[imgKey] : undefined;
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-cyan-500/20 bg-gray-900/40 transition-colors hover:border-cyan-400/50">
      {d.status && (
        <span className="absolute right-4 top-4 z-10 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
          {d.status}
        </span>
      )}
      {video ? (
        <div className="relative h-44 w-full overflow-hidden bg-black">
          <video src={video} autoPlay muted loop playsInline className="h-full w-full object-cover" />
        </div>
      ) : img ? (
        <div className={`relative h-44 w-full ${dark ? 'bg-black' : ''}`}>
          <Image src={img} alt={d.name} fill sizes="(max-width:768px) 100vw, 400px" className={dark ? 'object-contain p-6' : 'object-cover'} />
        </div>
      ) : (
        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-white">{d.name}</h3>
        {d.subtitle && <p className="mt-1 text-white/50 italic">{d.subtitle}</p>}
        {d.description && <p className="mt-4 leading-relaxed text-white/80">{d.description}</p>}
        {d.cta && d.cta_url && (
          <Link href={d.cta_url} className="mt-5 inline-block font-semibold text-cyan-400 transition-colors hover:text-cyan-300">
            → {d.cta}
          </Link>
        )}
      </div>
    </div>
  );
}

/** Umbrella-карточка (AI Studio / BlackWings): широкая, с несколькими параграфами. */
function Umbrella({ d, imgKey, dark = false }: { d: Record<string, string>; imgKey: string; dark?: boolean }) {
  const descs = [d.description_1, d.description_2, d.description_3, d.description_4].filter(Boolean);
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-gray-900/50">
      <div className="grid md:grid-cols-2">
        <div className={`relative min-h-[220px] ${dark ? 'bg-black' : ''}`}>
          <Image src={IMG[imgKey]} alt={d.name} fill sizes="(max-width:768px) 100vw, 600px" className={dark ? 'object-contain p-8' : 'object-cover'} />
        </div>
        <div className="flex flex-col justify-center p-8">
          <h3 className="text-3xl font-bold text-white">{d.name}</h3>
          {d.subtitle && <p className="mt-1 text-white/50 italic">{d.subtitle}</p>}
          <div className="mt-4 space-y-3">
            {descs.map((p, i) => (
              <p key={i} className="leading-relaxed text-white/80">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t, locale, loading } = useTranslation();

  const s6 = t('home.section_6_products_block_1');
  const s7 = t('home.section_7_products_block_2');
  const s8 = t('home.section_8_products_block_3');
  const s9 = t('home.section_9_partner_program');
  const prog: Record<string, string> = (s9 && typeof s9 === 'object' ? s9.program : {}) || {};

  const waitlistHead =
    locale === 'ru'
      ? 'Хотите быть в курсе наших новых разработок?'
      : locale === 'zh'
      ? '想掌握我們的最新研發嗎？'
      : 'Would you like to follow what we are building?';

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero — эмблема + предрегистрация прямо в первом экране */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-4 py-12">
        <div className="animate-fadeIn w-full max-w-lg">
          <Image
            src="/images/ALFACAN-Defence-Group.png"
            alt={t('home.hero.logo_alt')}
            width={1100}
            height={733}
            priority
            sizes="(max-width: 768px) 100vw, 512px"
            className="h-auto w-full select-none"
          />
        </div>
        <p className="animate-fadeIn max-w-2xl text-center text-lg leading-relaxed text-white/80 md:text-xl">
          {t('home.hero.tagline')}
        </p>
        <a
          href="#who-we-are"
          className="animate-fadeIn rounded-lg border border-cyan-500/60 px-8 py-3 font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/10 hover:text-cyan-200"
        >
          {t('home.hero.cta')}
        </a>
      </section>

      {loading ? null : (
        <>
          {/* Секции 1-2 — кто мы и принципы (корпоративный уровень, без продуктовых деталей) */}
          <div className="space-y-20 bg-gradient-to-b from-[#0A0F1E] to-[#000814] py-24 md:space-y-24">
            <CompanyIntro data={t('home.company_intro')} id="who-we-are" />
            <CompanyPrinciples data={t('home.company_principles')} />
          </div>

          {/* Секция 6 — облачная инфраструктура: Guardian Cloud убран (это Home ЭТОГО сайта),
              Mercanon остаётся как описание экосистемы. */}
          <section className="bg-[#000814] py-20">
            <div className="container mx-auto max-w-6xl px-4">
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70">{s6?.intro}</p>
              <p className="mt-4 text-center text-xl font-semibold text-white">{s6?.presenting}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-1 max-w-md mx-auto">
                <ProductCard d={{ ...s6?.mercanon, cta_url: undefined }} video="/videos/guardianops_l.mp4" />
              </div>
            </div>
          </section>

          {/* Секция 7 — AI Studio (umbrella + G-*); теперь отдельный сайт ai-studio.alfa-can.com */}
          <section className="bg-gradient-to-b from-[#0A0F1E] to-[#000814] py-20">
            <div className="container mx-auto max-w-6xl px-4">
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70">{s7?.intro}</p>
              <p className="mt-4 text-center text-xl font-semibold text-white">{s7?.presenting}</p>
              <div className="mt-10">
                <Umbrella d={s7?.ai_studio} imgKey="ai_studio" />
                <a href="https://ai-studio.alfa-can.com" target="_blank" rel="noopener noreferrer" className="mt-4 block text-center font-semibold text-cyan-400 hover:text-cyan-300">
                  ALFACAN AI Studio →
                </a>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <ProductCard d={{ ...s7?.g_coder, cta_url: 'https://ai-studio.alfa-can.com/g-coder' }} imgKey="g_coder" />
                <ProductCard d={{ ...s7?.g_tester, cta_url: 'https://ai-studio.alfa-can.com/g-tester' }} imgKey="g_tester" />
                <ProductCard d={{ ...s7?.g_studio, cta_url: 'https://ai-studio.alfa-can.com/g-studio' }} imgKey="g_studio" />
              </div>
            </div>
          </section>

          {/* Секция 8 — BlackWings (umbrella + направления); нет своего сайта пока — описание
              экосистемы без кликабельных ссылок. */}
          <section className="bg-black py-20">
            <div className="container mx-auto max-w-6xl px-4">
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70">{s8?.intro}</p>
              <p className="mt-4 text-center text-xl font-semibold text-white">{s8?.presenting}</p>
              <div className="mt-10">
                <Umbrella d={s8?.blackwings} imgKey="blackwings" dark />
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <ProductCard d={{ ...s8?.architect, cta_url: undefined }} imgKey="architect" dark />
                <ProductCard d={{ ...s8?.arsenal, cta_url: undefined }} imgKey="arsenal" dark />
                <ProductCard d={{ ...s8?.training_center, cta_url: undefined }} imgKey="training_center" dark />
              </div>
            </div>
          </section>

          {/* Ранний доступ — захват лончевого трафика (waitlist → /api/contact) */}
          <section className="bg-[#000814] py-16">
            <div className="container mx-auto max-w-2xl px-4 text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">{waitlistHead}</h2>
              <WaitlistForm className="mt-6" variant="updates" />
            </div>
          </section>

          {/* Секция 9 — партнёрская программа */}
          <section className="bg-gradient-to-b from-[#0A0F1E] to-[#000814] py-20">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="mx-auto max-w-3xl space-y-5 text-center">
                <p className="text-lg leading-relaxed text-white/70">{s9?.intro_1}</p>
                <p className="text-lg leading-relaxed text-white/70">{s9?.intro_2}</p>
                {s9?.intro_3 && <p className="text-lg leading-relaxed text-white/85">{s9.intro_3}</p>}
                {s9?.intro_4 && <p className="text-lg leading-relaxed text-white/70">{s9.intro_4}</p>}
                {s9?.referral_cta && (
                  <Link
                    href="/referral"
                    className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    {s9.referral_cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
              <div className="mt-10 overflow-hidden rounded-2xl border border-cyan-500/25 bg-gray-900/40">
                <div className="grid items-center gap-8 p-8 md:grid-cols-[auto_1fr]">
                  {/* Слева — вертикальное видео команды */}
                  <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-xl bg-black md:mx-0" style={{ aspectRatio: '720 / 1120' }}>
                    <video src="/videos/partners.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
                  </div>
                  {/* Справа — текст */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{prog.name}</h3>
                    {prog.subtitle && <p className="mt-1 text-white/50 italic">{prog.subtitle}</p>}
                    <div className="mt-4 space-y-3">
                      {[prog.description_1, prog.description_2, prog.description_3, prog.description_4].filter(Boolean).map((p, i) => (
                        <p key={i} className="leading-relaxed text-white/80">{p}</p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                      <Link href={prog.cta_primary_url || '/referral'} className="rounded-lg bg-cyan-500 px-8 py-3 text-center font-bold text-gray-900 transition-colors hover:bg-cyan-400">
                        {prog.cta_primary}
                      </Link>
                      <Link href={prog.cta_secondary_url || '/referral#terms'} className="rounded-lg border border-cyan-500 px-8 py-3 text-center font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/10">
                        {prog.cta_secondary}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
