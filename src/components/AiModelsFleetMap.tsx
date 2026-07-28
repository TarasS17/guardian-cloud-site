'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { DefsSheen, SvgNode, SvgLink } from '@/components/diagramParts';

const HEAD: Record<string, { h: string; lead: string }> = {
  en: {
    h: 'The fleet',
    lead: 'A model gateway routes each task to the model built for it — officers reason, shields detect, specialists generate commands, coders write code, the embedder retrieves doctrine. A frontier cloud model is consulted only on the highest-risk changes.',
  },
  ru: {
    h: 'Парк моделей',
    lead: 'Шлюз моделей направляет каждую задачу той модели, что создана под неё — офицеры рассуждают, щиты детектят, специалисты генерируют команды, кодеры пишут код, embedder достаёт доктрину. Флагманская облачная модель подключается только на изменениях наивысшего риска.',
  },
  zh: {
    h: '模型艦隊',
    lead: '模型閘道將每一項任務導向為其打造的模型——安全官負責推理、護盾負責偵測、專家生成指令、編碼模型撰寫程式碼、嵌入模型檢索知識庫。僅在風險最高的變更上，才會引入頂尖雲端模型。',
  },
};

export default function AiModelsFleetMap() {
  const { locale } = useLocale();
  const t = HEAD[locale] ?? HEAD.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{t.lead}</p>

        <div className="overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
          <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">
            Model fleet — gateway routes each task to its specialist
          </p>
          <svg viewBox="0 0 1000 600" className="h-auto w-full min-w-[780px]" role="img" aria-label="AI model fleet">
            <DefsSheen />
            <defs>
              <radialGradient id="fm-hub-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="1000" height="600" rx="18" fill="#070a12" />

            {/* gateway halo */}
            <ellipse cx="500" cy="300" rx="150" ry="92" fill="url(#fm-hub-halo)" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
            </ellipse>

            {/* links gateway <-> groups */}
            <SvgLink d="M380 270 C330 200, 320 150, 300 130" color="#8b5cf6" />
            <SvgLink d="M620 270 C670 200, 680 150, 700 130" color="#fb7185" />
            <SvgLink d="M372 300 L246 300" color="#f59e0b" />
            <SvgLink d="M628 300 L754 300" color="#4285F4" />
            <SvgLink d="M380 330 C330 400, 320 450, 300 472" color="#34d399" />
            <SvgLink d="M620 330 C670 400, 680 450, 700 472" color="#38bdf8" />
            {/* gateway -> validators (dashed, high-risk only) */}
            <SvgLink d="M500 348 L500 540" color="#f59e0b" dashed />
            <text x="512" y="450" fill="rgba(245,158,11,0.8)" fontSize="11">high-risk only</text>

            {/* gateway */}
            <SvgNode cx={500} cy={300} w={252} h={92} color="#22d3ee" title="Model Gateway" sub="routes each task to its model" big />

            {/* officers */}
            <SvgNode cx={300} cy={100} w={216} h={64} color="#8b5cf6" title="Audit Officer" sub="Qwen3-30B-A3B-Thinking" />
            <SvgNode cx={700} cy={100} w={216} h={64} color="#fb7185" title="ITDR Officer" sub="Gemma-4-26B-A4B" />

            {/* shields & specialists */}
            <SvgNode cx={130} cy={300} w={212} h={64} color="#f59e0b" title="Detection shields" sub="3× Qwen3-4B-Instruct-2507" />
            <SvgNode cx={870} cy={300} w={216} h={64} color="#4285F4" title="Cloud specialists" sub="Qwen3-Coder-30B-A3B-Instruct" />

            {/* coders & embedder */}
            <SvgNode cx={300} cy={500} w={216} h={64} color="#34d399" title="Coding models" sub="Coder gen + Thinking review" />
            <SvgNode cx={700} cy={500} w={216} h={64} color="#38bdf8" title="Doctrine embedder" sub="Qwen3-VL-Embedding-8B + Reranker-2B" />

            {/* cloud validators */}
            <SvgNode cx={500} cy={566} w={360} h={48} color="#f59e0b" title="GLM-5.2 — main brain & validator (self-hosted)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
