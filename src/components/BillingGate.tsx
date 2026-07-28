'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';

type Data = { h: string; lead: string; cardH: string; items: string[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'How the billing gate works',
    lead: 'Billing is enforced the moment a server is connected — not after the fact.',
    cardH: 'A hard gate, fully audited',
    items: [
      'On connect, the platform checks whether the client can add this server',
      'If capacity is unpaid, onboarding is blocked and the client is sent to billing',
      'The denial is written to service history — nothing is silent',
      'Once paid, the server registers and provisioning continues automatically',
    ],
  },
  ru: {
    h: 'Как работает billing-гейт',
    lead: 'Оплата проверяется в момент подключения сервера — не постфактум.',
    cardH: 'Жёсткий гейт, полностью под аудитом',
    items: [
      'При подключении платформа проверяет, может ли клиент добавить этот сервер',
      'Если ёмкость не оплачена, онбординг блокируется, клиент отправляется в billing',
      'Отказ пишется в Историю обслуживания — ничего по-тихому',
      'После оплаты сервер регистрируется и провижининг продолжается автоматически',
    ],
  },
  zh: {
    h: '計費閘門如何運作',
    lead: '計費在伺服器連接的當下即強制執行——而非事後補算。',
    cardH: '硬性閘門，全程稽核',
    items: [
      '連接時，平台會檢查客戶是否可新增此伺服器',
      '若容量未付費，接入將被攔截，並引導客戶前往計費',
      '拒絕記錄會寫入維運歷史——絕不靜默',
      '付費後，伺服器即註冊，並自動繼續配置建置',
    ],
  },
};

const FLOW = ['Connect a server', 'Check subscription / capacity', 'Paid → register & provision', 'Unpaid → blocked + recorded'];

export default function BillingGate() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <FlowMap caption="Connect-time billing gate" items={FLOW} colors={['#22d3ee', '#38bdf8', '#34d399', '#fb7185']} />

        <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-900/15 to-gray-900/30 p-6">
          <h3 className="mb-3 text-lg font-bold text-white">{d.cardH}</h3>
          <ul className="space-y-2">
            {d.items.map((it) => (
              <li key={it} className="flex gap-2 text-sm text-white/75">
                <span className="mt-0.5 text-cyan-400">▸</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
