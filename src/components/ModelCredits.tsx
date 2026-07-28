'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Maker = { name: string; models: string; note: string };
type Data = { h: string; lead: string; makers: Maker[]; anthropicH: string; anthropic: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Model credits & thanks',
    lead: 'Guardian’s fleet is built on the work of leading model labs. Our thanks to the teams whose models we fine-tune and self-host — each adapted for its own specialization.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'cloud specialists, audit reasoning, detection shields, doctrine embedder & reranker' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'the ITDR officer & Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'the main brain and validator of the council: frontier-grade open weights under the MIT licence, self-hosted inside the perimeter' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'This platform was engineered together with Claude — Opus 4.7 and Opus 4.8. Our special thanks to Anthropic; their models helped us shape the architecture, write and harden the code. In production, all validation runs on our self-hosted GLM-5.2 — your code never leaves the contour.',
  },
  ru: {
    h: 'Благодарности и используемые модели',
    lead: 'Парк Guardian построен на труде ведущих модельных лабораторий. Спасибо командам, чьи модели мы дообучаем и держим на собственных серверах — каждую под свою специализацию.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'облачные специалисты, reasoning аудита, щиты детекции, embedder и reranker доктрины' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'офицер ITDR и Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'главный мозг и валидатор совета: открытые веса переднего края под лицензией MIT, self-hosted внутри периметра' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Эту платформу мы проектировали вместе с Claude — Opus 4.7 и Opus 4.8. Отдельная благодарность Anthropic: их модели помогли с архитектурой, написанием и защитой кода. В продакшене вся валидация — на нашей self-hosted GLM-5.2, ваш код не покидает контур.',
  },
  zh: {
    h: '致謝與所用模型',
    lead: 'Guardian 艦隊建立在頂尖模型實驗室的成果之上。感謝這些團隊——我們對其模型進行微調並自託管，每一個都針對其專屬領域。',
    makers: [
      { name: 'Qwen 團隊 — 阿里巴巴', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: '雲端專家、稽核推理、偵測護盾、知識庫嵌入與重排' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ITDR 安全官與 Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: '委員會的主腦與驗證者：MIT 授權的前沿開放權重，自託管於邊界之內' },
    ],
    anthropicH: 'Anthropic',
    anthropic: '此平台由我們與 Claude（Opus 4.7 與 Opus 4.8）共同打造。特別感謝 Anthropic——其模型協助我們構建架構、撰寫並強化程式碼。在生產環境中，所有驗證均由自託管的 GLM-5.2 執行，您的程式碼絕不離開安全邊界。',
  },
};

export default function ModelCredits() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl leading-relaxed text-white/70">{d.lead}</p>

        <div className="space-y-3">
          {d.makers.map((m) => (
            <div key={m.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">{m.name}</p>
              <p className="mt-1 text-sm font-medium text-cyan-200">{m.models}</p>
              <p className="mt-1 text-sm text-white/55">— {m.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-violet-500/30 bg-gradient-to-b from-violet-900/20 to-gray-900/30 p-5">
          <p className="font-semibold text-white">{d.anthropicH}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{d.anthropic}</p>
        </div>
      </div>
    </section>
  );
}
