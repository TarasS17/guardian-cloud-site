'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Addon = { name: string; desc: string; price: string };
type Data = { h: string; lead: string; addons: Addon[]; note: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Add-ons',
    lead: 'Scale any plan à la carte — pay only for the extra capacity you actually use.',
    addons: [
      { name: '+1 monitoring server', desc: 'Another server in monitoring mode — alerts and advice, no automated changes.', price: '$20 /mo' },
      { name: '+1 automated server', desc: 'Another fully-automated server — audit, fixes and ITDR active response; adds 2 cyber-attack responses/mo.', price: '$350 /mo' },
      { name: '+1 Cloud AI seat', desc: 'One more seat for the Cloud AI assistant.', price: '$50 /mo' },
      { name: '+1 AI Studio seat', desc: 'One more AI Studio (coding) seat; usage billed by tokens.', price: '$20–100 /mo' },
      { name: 'Extra cyber-attack response', desc: 'Beyond the included quota of 2 per automated server / month.', price: '$500 each' },
      { name: 'One-time audit & fix', desc: 'A one-off audit of the server state and remediation of what it finds, for monitoring-mode servers (automated servers get this continuously). Full vulnerability testing is priced by the G-Tester menu, minus 10% as a Guardian Cloud client.', price: '$100' },
    ],
    note: 'The add-on catalog rolls out with launch (Phase 2).',
  },
  ru: {
    h: 'Дополнения (add-on)',
    lead: 'Масштабируйте любой тариф по выбору — платите только за реально нужную ёмкость.',
    addons: [
      { name: '+1 сервер мониторинга', desc: 'Ещё один сервер в режиме мониторинга — алерты и советы, без автоматических изменений.', price: '$20 /мес' },
      { name: '+1 автоматизированный сервер', desc: 'Ещё один полностью автоматизированный сервер — аудит, фиксы и активная реакция ITDR; даёт +2 квоты кибер-атак/мес.', price: '$350 /мес' },
      { name: '+1 место Cloud AI', desc: 'Ещё одно рабочее место AI-ассистента Cloud AI.', price: '$50 /мес' },
      { name: '+1 место AI Studio', desc: 'Ещё одно рабочее место AI Studio (кодинг); оплата по токенам.', price: '$20–100 /мес' },
      { name: 'Доп. отражение кибер-атаки', desc: 'Сверх включённой квоты — 2 на 1 автомат-сервер в месяц.', price: '$500 за раз' },
      { name: 'Разовый аудит и фикс', desc: 'Разовый аудит состояния сервера и устранение найденного, для режима мониторинга (на автомате это идёт постоянно). Полное тестирование на уязвимости считается по расценкам G-Tester, за вычетом 10% как клиенту Guardian Cloud.', price: '$100' },
    ],
    note: 'Каталог дополнений выкатывается с запуском (Phase 2).',
  },
  zh: {
    h: '加購項目',
    lead: '依需求彈性擴充任一方案——只為您實際使用的額外容量付費。',
    addons: [
      { name: '+1 台監控伺服器', desc: '再增加一台監控模式伺服器——告警與建議，不做自動變更。', price: '$20 /月' },
      { name: '+1 台自動伺服器', desc: '再增加一台全自動伺服器——稽核、修復與 ITDR 主動回應；額外提供 2 次/月網路攻擊防禦。', price: '$350 /月' },
      { name: '+1 個 Cloud AI 席位', desc: '再增加一個 Cloud AI 助理席位。', price: '$50 /月' },
      { name: '+1 個 AI Studio 席位', desc: '再增加一個 AI Studio（編碼）席位；依 token 計費。', price: '$20–100 /月' },
      { name: '額外網路攻擊防禦', desc: '超出內含額度——每台自動伺服器每月 2 次——之後。', price: '每次 $500' },
      { name: '一次性稽核與修復', desc: '針對監控模式伺服器，一次性稽核其狀態並修復所發現的問題（自動化伺服器則持續進行）。完整的漏洞測試依 G-Tester 價目計算，作為 Guardian Cloud 客戶可享 10% 折扣。', price: '$100' },
    ],
    note: '加購目錄將隨正式發布推出（第二階段）。',
  },
};

export default function BillingAddons() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-3 md:grid-cols-2">
          {d.addons.map((a) => (
            <div key={a.name} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-white">{a.name}</span>
                <span className="flex-none text-sm font-bold text-cyan-300">{a.price}</span>
              </div>
              <p className="mt-1 text-sm text-white/55">{a.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-white/45">{d.note}</p>
      </div>
    </section>
  );
}
