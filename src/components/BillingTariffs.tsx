'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Tier = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

type Data = { h: string; lead: string; includes: string; tiers: Tier[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'Plans',
    lead: 'From a single server to a data center — the same platform, sized to the customer.',
    includes: 'The price covers the whole fleet, not each server · Additional server $150/mo · Every plan includes ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/server/mo', tagline: 'Entry — monitoring + advice', features: ['$20 per monitoring server · 1 user', 'Alerts & recommendations', '3 incident/virus + 1 cyber-attack response/mo included', 'Extra: incident/virus from $20, cyber-attack $500', 'Cloud AI — 1 seat', 'Audit, fixes, automation — add-ons', 'Support 48h · 30-day retention'] },
      { name: 'Server', price: '$500', period: '/mo', tagline: '3 servers, all automated', features: ['3 fully automated servers · 3 users', 'Initial audit included', 'SIEM (Wazuh/Elastic), log analysis', 'Cloud AI — 1 seat · AI Studio — 1 seat', 'Cyber-attack defence — 1/mo · extra $500', 'Support 24h · 30-day retention'] },
      { name: 'Cluster', price: '$1500', period: '/mo', tagline: '13 servers, all automated', popular: true, features: ['13 fully automated servers · 10 users', 'Custom rules · firewall management', 'RBAC · audit log', 'Cloud AI — 3 seats · AI Studio — 3 seats', 'Cyber-attack defence — 2/mo · extra $500', 'Priority support 4h · 90-day retention'] },
      { name: 'Platform', price: '$3500', period: '/mo', tagline: '40 servers, all automated', features: ['40 fully automated servers · 25 users', 'SSO · on-prem (optional) · AI tuning', '99.9% SLA · white-label · compliance', 'Cloud AI — 5 seats · AI Studio — 5 seats', 'Cyber-attack defence — 5/mo · extra $500', 'Dedicated support · 90-day retention'] },
      { name: 'Enterprise', price: 'Custom', period: 'calculated individually', tagline: 'Unlimited, air-gapped', features: ['Unlimited servers & users', 'On-prem full isolation · air-gapped', 'Custom ML training · all features', 'Cloud AI & AI Studio — unlimited', 'Cyber-attack defence — unlimited', '99.99% SLA · 365-day retention'] },
    ],
  },
  ru: {
    h: 'Тарифы',
    lead: 'От одного сервера до дата-центра — одна платформа, под размер клиента.',
    includes: 'Цена за весь парк серверов, а не за каждый · Добор сервера $150/мес · На каждом тарифе включены ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/сервер/мес', tagline: 'Старт — мониторинг + советы', features: ['$20 за сервер мониторинга · 1 юзер', 'Алерты и рекомендации', 'Включено 3 инцидента/вируса + 1 кибер-атака/мес', 'Сверх: инцидент/вирус от $20, кибер-атака $500', 'Cloud AI — 1 место', 'Аудит, фиксы, автоматизация — add-on', 'Саппорт 48ч · retention 30д'] },
      { name: 'Server', price: '$500', period: '/мес', tagline: '3 сервера, все в автомате', features: ['3 сервера полностью в автомате · 3 юзера', 'Initial audit включён', 'SIEM (Wazuh/Elastic), анализ логов', 'Cloud AI — 1 место · AI Studio — 1 место', 'Защита от кибер-атак — 1/мес · сверх $500', 'Саппорт 24ч · retention 30д'] },
      { name: 'Cluster', price: '$1500', period: '/мес', tagline: '13 серверов, все в автомате', popular: true, features: ['13 серверов полностью в автомате · 10 юзеров', 'Custom-правила · управление firewall', 'RBAC · audit log', 'Cloud AI — 3 места · AI Studio — 3 места', 'Защита от кибер-атак — 2/мес · сверх $500', 'Prio-саппорт 4ч · retention 90д'] },
      { name: 'Platform', price: '$3500', period: '/мес', tagline: '40 серверов, все в автомате', features: ['40 серверов полностью в автомате · 25 юзеров', 'SSO · on-prem (опц.) · AI-tuning', '99.9% SLA · white-label · compliance', 'Cloud AI — 5 мест · AI Studio — 5 мест', 'Защита от кибер-атак — 5/мес · сверх $500', 'Dedicated support · retention 90д'] },
      { name: 'Enterprise', price: 'Custom', period: 'рассчитывается индивидуально', tagline: 'Безлимит, air-gapped', features: ['Безлимит серверов и юзеров', 'On-prem полная изоляция · air-gapped', 'Custom ML training · все фичи', 'Cloud AI и AI Studio — безлимит', 'Защита от кибер-атак — безлимит', '99.99% SLA · retention 365д'] },
    ],
  },
  zh: {
    h: '方案',
    lead: '從單一伺服器到資料中心——同一個平台，依客戶規模而設。',
    includes: '價格涵蓋整個伺服器群，而非每台單獨計費 · 加購伺服器每台每月 $150 · 每一種方案皆包含 ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/伺服器/月', tagline: '入門——監控 + 建議', features: ['每台監控伺服器 $20 · 1 位使用者', '告警與建議', '每月含 3 次事件/病毒 + 1 次網路攻擊回應', '超額：事件/病毒 $20 起、網路攻擊 $500', 'Cloud AI —— 1 個席位', '稽核、修復、自動化——加購', '支援 48 小時 · 保留 30 天'] },
      { name: 'Server', price: '$500', period: '/月', tagline: '3 台伺服器，全部自動化', features: ['3 台伺服器全部自動化 · 3 位使用者', '含首次稽核', 'SIEM（Wazuh/Elastic）、日誌分析', 'Cloud AI —— 1 席 · AI Studio —— 1 席', '網路攻擊防禦 —— 1 次/月 · 超出每次 $500', '支援 24 小時 · 保留 30 天'] },
      { name: 'Cluster', price: '$1500', period: '/月', tagline: '13 台伺服器，全部自動化', popular: true, features: ['13 台伺服器全部自動化 · 10 位使用者', '自訂規則 · 防火牆管理', 'RBAC · 稽核日誌', 'Cloud AI —— 3 席 · AI Studio —— 3 席', '網路攻擊防禦 —— 2 次/月 · 超出每次 $500', '優先支援 4 小時 · 保留 90 天'] },
      { name: 'Platform', price: '$3500', period: '/月', tagline: '40 台伺服器，全部自動化', features: ['40 台伺服器全部自動化 · 25 位使用者', 'SSO · 地端（選用）· AI 調校', '99.9% SLA · 白標 · 合規', 'Cloud AI —— 5 席 · AI Studio —— 5 席', '網路攻擊防禦 —— 5 次/月 · 超出每次 $500', '專屬支援 · 保留 90 天'] },
      { name: 'Enterprise', price: 'Custom', period: '客製化計價', tagline: '無上限、隔離部署', features: ['無上限伺服器與使用者', '地端完全隔離 · air-gapped', '自訂 ML 訓練 · 全功能', 'Cloud AI 與 AI Studio —— 無上限', '網路攻擊防禦 —— 無上限', '99.99% SLA · 保留 365 天'] },
    ],
  },
};

export default function BillingTariffs() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-2 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>
        <p className="mb-8 inline-block rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-200">
          {d.includes}
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {d.tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                t.popular
                  ? 'border-cyan-400/60 bg-gradient-to-b from-cyan-900/30 to-gray-900/40 shadow-[0_8px_30px_rgba(34,211,238,0.16)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-3 py-0.5 text-xs font-bold text-gray-900">
                  ★
                </span>
              )}
              <p className="text-lg font-bold text-white">{t.name}</p>
              <p className="mb-1 text-xs text-white/50">{t.tagline}</p>
              <div className="mb-4 mt-2">
                <span className="gradient-text text-3xl font-bold">{t.price}</span>
                <span className="ml-1 text-xs text-white/55">{t.period}</span>
              </div>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-0.5 text-cyan-400">▸</span>
                    <span>{f}</span>
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
