'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Row = { check: string; detail: string };
type Data = { h: string; lead: string; rows: Row[]; note: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Validation & test results',
    lead: 'The doctrine pipeline was exercised end-to-end against a live embedder on GPU — write, retrieve, learn, govern.',
    rows: [
      { check: 'Write', detail: 'New entries indexed and made retrievable' },
      { check: 'Semantic read', detail: 'A query by intent returned exactly the relevant intel at the top' },
      { check: 'Debrief → doctrine', detail: 'Incident outcome written back as a reviewable lesson' },
      { check: 'Governance', detail: 'Pending lessons excluded from live reasoning until approved' },
    ],
    note: 'End-to-end on the live srag-l4 embedder (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) over Qdrant — 2026-06-13.',
  },
  ru: {
    h: 'Валидация и результаты тестов',
    lead: 'Пайплайн доктрины прогнан end-to-end против живого эмбеддера на GPU — запись, поиск, обучение, управление.',
    rows: [
      { check: 'Запись', detail: 'Новые записи проиндексированы и доступны для поиска' },
      { check: 'Семантическое чтение', detail: 'Запрос по смыслу вернул именно релевантную разведку наверху' },
      { check: 'Дебриф → доктрина', detail: 'Итог инцидента записан обратно как проверяемый урок' },
      { check: 'Управление', detail: 'Pending-уроки исключены из живого reasoning до одобрения' },
    ],
    note: 'End-to-end на живом эмбеддере srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) поверх Qdrant — 2026-06-13.',
  },
  zh: {
    h: '驗證與測試結果',
    lead: '知識庫流程已針對 GPU 上的即時嵌入模型完成端到端驗證——寫入、檢索、學習、治理。',
    rows: [
      { check: '寫入', detail: '新條目已建立索引並可供檢索' },
      { check: '語義讀取', detail: '依意圖查詢，將最相關的情報精準置頂' },
      { check: '復盤 → 知識庫', detail: '事件結果回寫為可審閱的經驗' },
      { check: '治理', detail: '待審經驗在核准前不進入即時推理' },
    ],
    note: '於即時 srag-l4 嵌入模型（Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B）搭配 Qdrant 完成端到端驗證——2026-06-13。',
  },
};

export default function DoctrineValidation() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="overflow-x-auto rounded-xl border border-emerald-500/20">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white/70">
                <th className="px-4 py-3 font-semibold">Check</th>
                <th className="px-4 py-3 font-semibold">Detail</th>
                <th className="px-4 py-3 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {d.rows.map((r) => (
                <tr key={r.check} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-medium text-white/90">{r.check}</td>
                  <td className="px-4 py-3 text-white/60">{r.detail}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-300">✅ PASS</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-white/45">{d.note}</p>
      </div>
    </section>
  );
}
