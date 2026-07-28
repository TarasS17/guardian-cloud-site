'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';
import WaitlistForm from '@/components/WaitlistForm';

// Заглушка продукта: тянет переведённый контент из home-JSON (name/subtitle/description),
// показывает статус и, при waitlist, форму захвата. Никаких 404 — чистая страница.

interface Props {
  contentKey: string; // напр. 'home.section_8_products_block_3.blackwings'
  img?: string;
  dark?: boolean;
  status?: string; // override; иначе d.status или локализованное "Скоро"
  waitlist?: boolean;
}

export default function ComingSoon({ contentKey, img, dark = false, status, waitlist = false }: Props) {
  const { t, locale } = useTranslation();
  const raw = t(contentKey);
  const d: Record<string, string> = raw && typeof raw === 'object' ? (raw as Record<string, string>) : {};
  const descs = d.description
    ? [d.description]
    : [d.description_1, d.description_2, d.description_3, d.description_4].filter(Boolean);
  const soon = locale === 'ru' ? 'Скоро' : locale === 'zh' ? '即将上线' : 'Coming soon';
  const back = locale === 'ru' ? 'На главную' : locale === 'zh' ? '返回首页' : 'Back home';
  const badge = status ?? d.status ?? (waitlist ? '' : soon);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 pt-16 text-center text-white">
      {img && (
        <div className={`relative mb-8 h-40 w-full max-w-md ${dark ? '' : 'overflow-hidden rounded-xl'}`}>
          <Image src={img} alt={d.name || contentKey} fill sizes="(max-width:768px) 100vw, 448px" className={dark ? 'object-contain' : 'object-cover'} />
        </div>
      )}
      <h1 className="gradient-text text-4xl font-bold md:text-6xl">{d.name}</h1>
      {d.subtitle && <p className="mt-3 text-xl text-white/60 italic">{d.subtitle}</p>}
      {badge && (
        <span className="mt-5 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-sm font-semibold text-amber-300">{badge}</span>
      )}
      {descs.length > 0 && (
        <div className="mt-6 max-w-2xl space-y-3">
          {descs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-white/80">{p}</p>
          ))}
        </div>
      )}
      {waitlist && <WaitlistForm className="mt-8" />}
      <Link href="/" className="mt-10 text-white/50 transition-colors hover:text-white">← {back}</Link>
    </div>
  );
}
