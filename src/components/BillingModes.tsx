'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Mode = { h: string; tagline: string; items: string[] };
type Data = { h: string; lead: string; monitoring: Mode; automation: Mode };

const DATA: Record<string, Data> = {
  en: {
    h: 'Automated server vs monitoring',
    lead: 'Each server you connect runs in one of two modes. Plans are sized by how many of each you get.',
    monitoring: {
      h: 'Monitoring',
      tagline: 'watches and advises — never changes anything',
      items: [
        'Watches the server 24/7: metrics, health, logs',
        'Detects anomalies, attacks and viruses (ITDR/SIEM)',
        'Raises alerts and prioritized recommendations',
        'Does not act on its own — you (or your team) apply the advice',
      ],
    },
    automation: {
      h: 'Automated maintenance',
      tagline: 'the AI team actually administers the server',
      items: [
        'Runs the initial AI audit and a structured plan',
        'Applies fixes — dry-run first, your approval on anything risky',
        'Continuous remediation and optimization',
        'ITDR auto-blocks and repels attacks, removes malware, then restores the server',
        'A human stays in the loop on every risky change',
      ],
    },
  },
  ru: {
    h: 'Автоматическое обслуживание vs мониторинг',
    lead: 'Каждый подключённый сервер работает в одном из двух режимов. Тарифы различаются тем, сколько серверов каждого типа вы получаете.',
    monitoring: {
      h: 'Мониторинг',
      tagline: 'наблюдает и советует — ничего сам не меняет',
      items: [
        'Следит за сервером 24/7: метрики, здоровье, логи',
        'Обнаруживает аномалии, атаки и вирусы (ITDR/SIEM)',
        'Поднимает алерты и приоритизированные рекомендации',
        'Сам не действует — вы (или ваша команда) применяете советы',
      ],
    },
    automation: {
      h: 'Автоматическое обслуживание',
      tagline: 'AI-команда реально администрирует сервер',
      items: [
        'Проводит первичный AI-аудит и строит структурированный план',
        'Применяет исправления — сначала dry-run, ваше одобрение на рискованном',
        'Непрерывное устранение проблем и оптимизация',
        'ITDR автоматически блокирует и отражает атаки, удаляет вирусы и восстанавливает сервер',
        'Человек в контуре на каждом рискованном изменении',
      ],
    },
  },
  zh: {
    h: '自動化維運 vs 監控',
    lead: '您連接的每一台伺服器都以兩種模式之一運行。方案的差異在於各類型伺服器的數量。',
    monitoring: {
      h: '監控',
      tagline: '觀察並給出建議——絕不擅自更改',
      items: [
        '全天候監看伺服器：指標、健康狀態、日誌',
        '偵測異常、攻擊與病毒（ITDR/SIEM）',
        '發出告警與具優先級的建議',
        '不會自行採取行動——由您（或您的團隊）執行建議',
      ],
    },
    automation: {
      h: '自動化維運',
      tagline: 'AI 團隊真正地管理伺服器',
      items: [
        '執行首次 AI 稽核並產出結構化藍圖',
        '套用修復——先 Dry-run，高風險操作需您核准',
        '持續修復與優化',
        'ITDR 自動攔截並擊退攻擊、清除病毒，並還原伺服器',
        '每一次高風險變更皆有人工參與把關',
      ],
    },
  },
};

export default function BillingModes() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-900/15 to-gray-900/30 p-6">
            <h3 className="text-lg font-bold text-white">{d.monitoring.h}</h3>
            <p className="mb-3 text-xs text-sky-300/80">{d.monitoring.tagline}</p>
            <ul className="space-y-2">
              {d.monitoring.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-white/75">
                  <span className="mt-0.5 text-sky-400">▸</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-900/20 to-gray-900/30 p-6">
            <h3 className="text-lg font-bold text-white">{d.automation.h}</h3>
            <p className="mb-3 text-xs text-emerald-300/80">{d.automation.tagline}</p>
            <ul className="space-y-2">
              {d.automation.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-white/75">
                  <span className="mt-0.5 text-emerald-400">▸</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
