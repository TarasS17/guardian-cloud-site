'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Card = { h: string; items: string[] };
type Data = { h: string; lead: string; cards: Card[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'Why a fleet, not one model',
    lead: 'Separation is a safety and quality decision, not an accident of history.',
    cards: [
      { h: 'Right tool, right job', items: ['Fast 4B models detect; deep models reason', 'Command models are platform-aware (AWS / GCP / Azure / on-prem)', 'Source-code models are kept separate from sysadmin models', 'Each model is tuned for one job — and good at it'] },
      { h: 'Self-hosted by default', items: ['Models run on GPU inside your operating region', 'Your telemetry and code stay within the contour', 'The ITDR contour is fully air-gapped', 'No external dependency — validation is self-hosted too'] },
      { h: 'Separation is safety', items: ['Sysadmin models generate shell commands only', 'Source-code changes go through a separate generator + reviewer', 'An officer reviews every command before it runs', 'Doctrine retrieval is its own embedding model'] },
      { h: 'A dedicated check on high risk', items: ['GLM-5.2 (self-hosted) reviews the riskiest changes', 'Consulted only at MEDIUM / HIGH risk — never on every change', 'A second, independent opinion before anything irreversible', 'You keep the final word'] },
    ],
  },
  ru: {
    h: 'Почему парк, а не одна модель',
    lead: 'Разделение — это решение про безопасность и качество, а не случайность истории.',
    cards: [
      { h: 'Каждой задаче — своя модель', items: ['Быстрые 4B детектят; глубокие модели рассуждают', 'Командные модели знают платформу (AWS / GCP / Azure / on-prem)', 'Модели исходного кода отделены от сисадминских', 'Каждая модель заточена под одну задачу — и хороша в ней'] },
      { h: 'Self-hosted по умолчанию', items: ['Модели работают на GPU в вашем регионе', 'Ваша телеметрия и код остаются внутри контура', 'Контур ITDR полностью изолирован (air-gapped)', 'Внешних зависимостей нет — валидация тоже self-hosted'] },
      { h: 'Разделение = безопасность', items: ['Сисадминские модели генерируют только shell-команды', 'Изменения кода идут через отдельный генератор + ревьюер', 'Офицер проверяет каждую команду до исполнения', 'Поиск по доктрине — это своя embedding-модель'] },
      { h: 'Отдельная проверка на риске', items: ['GLM-5.2 (self-hosted) проверяет самые рискованные изменения', 'Подключается только на MEDIUM / HIGH риске — не на каждом', 'Второе независимое мнение перед необратимым', 'Последнее слово остаётся за вами'] },
    ],
  },
  zh: {
    h: '為何是艦隊，而非單一模型',
    lead: '分離是一項關於安全與品質的決策，而非歷史的偶然。',
    cards: [
      { h: '專事專模', items: ['輕量 4B 模型負責偵測；深度模型負責推理', '指令模型貼合平台（AWS / GCP / Azure / 地端）', '原始碼模型與系統管理模型分離', '每個模型只專注一件事——並做到極致'] },
      { h: '預設自託管', items: ['模型運行於您所在區域的 GPU 上', '您的遙測數據與程式碼留在防禦邊界內', 'ITDR 防禦鏈完全隔離（air-gapped）', '無外部依賴——驗證同樣自託管'] },
      { h: '分離即安全', items: ['系統管理模型僅生成 shell 指令', '程式碼變更經由獨立的生成器 + 審查器', '安全官在每條指令執行前進行審查', '知識庫檢索使用專屬嵌入模型'] },
      { h: '高風險時的專屬把關', items: ['GLM-5.2（自託管）審查風險最高的變更', '僅在 MEDIUM / HIGH 風險時引入——而非每次', '在任何不可逆操作前提供第二個獨立意見', '最終決定權始終屬於您'] },
    ],
  },
};

export default function AiModelsWhyFleet() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {d.cards.map((c) => (
            <div key={c.h} className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-900/15 to-gray-900/30 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">{c.h}</h3>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-0.5 text-cyan-400">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
