'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[] };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'the knowledge the AI reasons with',
    paras: [
      'Doctrine is a living knowledge base the AI reasons with — not a static rule file. Rules of engagement, playbooks, verified intelligence and the lessons of past incidents, retrieved by meaning and fed into every decision the officers make.',
      'Retrieval is two-stage: an instruction-aware embedder (Qwen3-VL-Embedding-8B, 1024-dim) recalls candidates by intent, and a cross-encoder reranker (Qwen3-VL-Reranker-2B) keeps only the most precise — the model sees the few most relevant pieces, not a keyword dump.',
      'The knowledge is layered and governed: rules of engagement always sit on top, unreviewed entries stay out of live reasoning, and after every incident the outcome is distilled back into doctrine — so each next decision is sharper than the last.',
    ],
  },
  ru: {
    sub: 'знание, которым думает ИИ',
    paras: [
      'Доктрина — это живая база знаний, которой думает ИИ, а не статичный файл правил. Правила применения (ROE), плейбуки, проверенная разведка и уроки прошлых инцидентов — извлекаются по смыслу и подаются в каждое решение офицеров.',
      'Поиск двухэтапный: instruction-aware эмбеддер (Qwen3-VL-Embedding-8B, 1024-dim) находит кандидатов по смыслу, а кросс-энкодер-реранкер (Qwen3-VL-Reranker-2B) оставляет только самые точные — модель видит несколько самых релевантных фрагментов, а не свалку по ключевым словам.',
      'Знание расслоено и управляемо: правила применения всегда наверху, непроверенные записи исключены из живого reasoning, а после каждого инцидента вывод дистиллируется обратно в доктрину — каждое следующее решение острее предыдущего.',
    ],
  },
  zh: {
    sub: 'AI 賴以思考的知識',
    paras: [
      '「Doctrine」是一套 AI 賴以推理的活知識庫——而非靜態的規則檔案。交戰守則（ROE）、行動手冊、經查證的情報與過往事件的經驗，皆按語義檢索，並注入安全官的每一項決策。',
      '檢索分為兩階段：具指令感知的嵌入模型（Qwen3-VL-Embedding-8B，1024 維）依意圖召回候選，交叉編碼重排器（Qwen3-VL-Reranker-2B）僅保留最精準者——模型只看見最相關的少數片段，而非關鍵字堆砌。',
      '知識分層且受治理：交戰守則永遠位居頂層，未經審閱的條目不進入即時推理；每起事件之後，其結果都被提煉回知識庫——讓每一次決策都比上一次更銳利。',
    ],
  },
};

/** Localized hero + intro for the Doctrine module page (en / ru / zh). */
export default function DoctrineIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/doctrine_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">Doctrine</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
        </div>
      </VideoBackground>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          {t.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
