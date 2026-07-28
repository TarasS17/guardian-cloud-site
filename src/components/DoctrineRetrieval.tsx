'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';

type Card = { h: string; body: string };
type Data = { h: string; lead: string; recall: Card; rerank: Card };

const DATA: Record<string, Data> = {
  en: {
    h: 'Two-stage semantic retrieval',
    lead: 'Recall broadly, then rerank precisely — so the model sees the few most relevant pieces, not a keyword dump.',
    recall: { h: 'Recall', body: 'The instruction-aware 8B embedder finds candidates by meaning, not exact words — so the officer’s intent (“how do I report and contain this attacker”) surfaces the right doctrine.' },
    rerank: { h: 'Rerank', body: 'A cross-encoder reranker scores each candidate against the query and keeps only the strongest — precision over volume.' },
  },
  ru: {
    h: 'Двухэтапный семантический поиск',
    lead: 'Сначала широкий recall, затем точный rerank — модель видит несколько самых релевантных фрагментов, а не свалку по ключевым словам.',
    recall: { h: 'Recall', body: 'Instruction-aware 8B-эмбеддер находит кандидатов по смыслу, а не по точным словам — намерение офицера («как зарепортить и сдержать этого атакующего») поднимает нужную доктрину.' },
    rerank: { h: 'Rerank', body: 'Кросс-энкодер-реранкер оценивает каждого кандидата против запроса и оставляет только сильнейших — точность важнее объёма.' },
  },
  zh: {
    h: '兩階段語義檢索',
    lead: '先廣泛召回，再精準重排——讓模型只看見最相關的少數片段，而非關鍵字堆砌。',
    recall: { h: '召回（Recall）', body: '具指令感知的 8B 嵌入模型按語義（而非字面）尋找候選——安全官的意圖（「如何呈報並圍堵此攻擊者」）即可帶出正確的知識。' },
    rerank: { h: '重排（Rerank）', body: '交叉編碼重排器針對查詢為每個候選評分，僅保留最強者——精準優於數量。' },
  },
};

const FLOW = ['Query · intent', 'Embed · Qwen3-VL-Embedding-8B · 1024-dim', 'Rerank · Qwen3-VL-Reranker-2B', 'Top-K → prompt'];

export default function DoctrineRetrieval() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <FlowMap caption="Retrieval pipeline" items={FLOW} colors={['#22d3ee', '#a855f7', '#fb7185', '#34d399']} />

        <div className="grid gap-4 md:grid-cols-2">
          {[d.recall, d.rerank].map((c) => (
            <div key={c.h} className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-900/15 to-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">{c.h}</h3>
              <p className="text-sm leading-relaxed text-white/75">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
