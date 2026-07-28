'use client';

import Link from 'next/link';

/*
 * Корпоративные секции главной: кто мы (секция 1) и принципы (секция 2).
 * Это страница КОМПАНИИ, а не продукта, здесь нет модельного флота, цифр обучения
 * и статусов развёртывания: они живут на страницах Guardian Cloud / AI Studio.
 * Визуальный словарь, как на sysadmin/ITDR: белые заголовки без градиента,
 * max-w-3xl, циан только в акцентах и рамках.
 */

interface Point {
  title: string;
  text: string;
}

export interface CompanyIntroData {
  title: string;
  legal: string;
  jurisdiction: string;
  experience: string;
  mission: string;
  contract_lead: string;
  contract_cta: string;
  points: Point[];
}

export function CompanyIntro({ data, id }: { data: CompanyIntroData; id?: string }) {
  if (!data?.title) return null;
  return (
    <section id={id} className="mx-auto max-w-3xl scroll-mt-24 px-4">
      <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{data.title}</h2>

      <p className="text-lg font-medium leading-relaxed text-white/90">{data.legal}</p>
      <p className="mt-2 text-lg leading-relaxed text-white/70">{data.jurisdiction}</p>

      <p className="mt-6 text-lg leading-relaxed text-white/85">{data.experience}</p>
      <p className="mt-4 text-lg leading-relaxed text-white/85">{data.mission}</p>

      <div className="mt-8 rounded-xl border border-cyan-500/25 bg-cyan-500/5 p-6">
        <p className="text-lg leading-relaxed text-white/85">{data.contract_lead}</p>
        <Link
          href="/terms"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
        >
          {data.contract_cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-10 space-y-6">
        {(data.points ?? []).map((p) => (
          <div key={p.title}>
            <h3 className="mb-1 text-lg font-semibold text-white">{p.title}</h3>
            <p className="text-lg leading-relaxed text-white/75">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export interface CompanyPrinciplesData {
  title: string;
  principles: Point[];
}

export function CompanyPrinciples({ data }: { data: CompanyPrinciplesData }) {
  if (!data?.title) return null;
  return (
    <section className="mx-auto max-w-3xl px-4">
      <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">{data.title}</h2>
      <div className="space-y-5">
        {(data.principles ?? []).map((p, i) => (
          <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-cyan-400">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            </div>
            <p className="mt-2 text-lg leading-relaxed text-white/75">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
