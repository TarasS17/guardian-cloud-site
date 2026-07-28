'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = {
  sub: string;
  tagline: string;
  paras: string[];
  label: string;
  hl: { phrase: string; body: string };
};

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'your AI cyber-defense officer',
    tagline: 'doesn’t just detect — it strikes back',
    paras: [
      'ITDR holds the line on your servers around the clock: it catches intrusions, attacks and viruses the moment they appear — and responds on its own, automatically.',
      'This is not a passive monitor that fires an alert and waits for a human. Three detection shields catch a threat in a fraction of a second, the AI officer reasons about it, checks it against doctrine and returns a verdict — then blocks and repels the attack or removes the virus while you sleep.',
      'If a threat goes beyond the standard response, the officer escalates it to a human, preserving every piece of evidence for review.',
      'Attacks don’t wait for business hours. Neither does ITDR.',
    ],
    label: 'Retaliation strike',
    hl: {
      phrase: 'We don’t just defend you — we hit back hard at the aggressor who attacked you.',
      body: 'The officer runs a full investigation, identifies the attacker and delivers a retaliation strike — traps and disinformation on your own server, listing the attacker on global blocklists, and coordinating takedown of their infrastructure with ISPs and authorities. All strictly within the rules of engagement (ROE) and with your approval.',
    },
  },
  ru: {
    sub: 'ваш AI-офицер кибербезопасности',
    tagline: 'не просто детектирует — отвечает ударом',
    paras: [
      'ITDR держит оборону ваших серверов круглосуточно: замечает вторжения, атаки и вирусы в момент их появления — и отвечает сам, в автоматическом режиме.',
      'Это не пассивный монитор, который шлёт алерт и ждёт человека. Три щита-детектора ловят угрозу за доли секунды, AI-офицер осмысливает её, сверяется с доктриной и выносит вердикт — а затем блокирует и отражает атаку или уничтожает вирус, пока вы спите.',
      'Если угроза выходит за рамки штатной реакции, офицер эскалирует её человеку, сохранив все улики для разбора.',
      'Атаки не ждут рабочего дня. ITDR — тоже.',
    ],
    label: 'Удар возмездия',
    hl: {
      phrase: 'Мы не просто защищаем вас — мы максимально жёстко наказываем агрессора, напавшего на вас.',
      body: 'Офицер проводит полное расследование, устанавливает атакующего и наносит удар возмездия — ловушки и дезинформация на вашем сервере, занесение атакующего в глобальные чёрные списки, координация takedown его инфраструктуры с провайдерами и правоохранителями. Всё — строго по правилам применения (ROE) и с вашего одобрения.',
    },
  },
  zh: {
    sub: '您的 AI 資安官',
    tagline: '不只是偵測——更會反擊',
    paras: [
      'ITDR 全天候守護您的伺服器：在入侵、攻擊與病毒出現的瞬間就將其捕捉，並以全自動模式自行回應。',
      '這絕非被動發送告警、等待人工處理的監控工具。三重偵測護盾在須臾之間捕捉威脅，AI 安全官隨即推理研判、比對知識庫並做出裁決——接著在您安睡時攔截並擊退攻擊，或清除病毒。',
      '若威脅超出標準回應範圍，安全官會將其上報人工，並完整保全所有證據以供調查。',
      '攻擊不會挑上班時間，ITDR 亦然。',
    ],
    label: '反制打擊',
    hl: {
      phrase: '我們不只是防守——對於膽敢攻擊您的侵略者，我們予以最嚴厲的反擊。',
      body: '安全官展開完整調查、鎖定攻擊者，並發動「反制打擊」——在您的伺服器上佈下誘餌與假情報，將攻擊者列入全球黑名單，並協同網路供應商與執法機關對其基礎設施進行下架（takedown）。一切均嚴格遵循交戰守則（ROE），並在取得您的授權後執行。',
    },
  },
};

/** Localized hero + intro for the ITDR module page (en / ru / zh). */
export default function ItdrIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/itdr_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">ITDR</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
          <p className="mt-2 text-base font-medium text-white/65 md:text-lg">{t.tagline}</p>
        </div>
      </VideoBackground>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          <p>{t.paras[0]}</p>
          <p>{t.paras[1]}</p>

          <div className="relative my-2 overflow-hidden rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-950/50 via-gray-900/50 to-orange-900/30 p-6 shadow-[0_8px_30px_rgba(244,63,94,0.18)] md:p-8">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-rose-500 to-orange-500" />
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
                {t.label}
              </span>
            </div>
            <p className="text-xl font-bold leading-snug text-white md:text-2xl">{t.hl.phrase}</p>
            <p className="mt-3 text-base leading-relaxed text-white/75">{t.hl.body}</p>
          </div>

          <p>{t.paras[2]}</p>
          <p>{t.paras[3]}</p>
        </div>
      </section>
    </>
  );
}
