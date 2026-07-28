'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Data = {
  h: string;
  lead: string;
  stats: { big: string; sub: string }[];
  thHuman: string;
  thPlatform: string;
  rows: [string, string, string][];
  closing: string;
};

const DATA: Record<string, Data> = {
  en: {
    h: 'Platform vs a security team',
    lead: 'A SOC alerts and waits for a human. ITDR detects, decides and responds on its own — and strikes back at the attacker, only ever within doctrine and with your approval.',
    stats: [
      { big: '24/7/365', sub: 'the line never sleeps' },
      { big: '< 1 s', sub: 'to detect — three shields' },
      { big: '0', sub: 'over-authorizations · 100% safety gate' },
    ],
    thHuman: 'SOC / EDR + analysts',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Coverage', '8-hour shifts, alert fatigue, night gaps', '24/7/365, never tired'],
      ['Detection', 'minutes in a triage queue', 'sub-second, three shields'],
      ['Response', 'human runbook, minutes to hours', 'autonomous, seconds'],
      ['Reasoning', 'depends on the analyst on shift', 'Gemma-4 officer — doctrine-consistent every time'],
      ['Retaliation', 'rare, manual, legal hesitation', 'graduated L1–L4, ROE-gated, lawful, automatic'],
      ['Consistency', 'varies with person and fatigue', '100% safety gate, 0 over-authorizations'],
      ['Evidence', 'collected by hand after the fact', 'immutable forensics, IOC + attribution automatic'],
      ['Learning', 'the occasional post-mortem', 'every incident → doctrine, each strike smarter'],
      ['Data exposure', 'cloud SIEM and third-party tools', 'air-gapped — nothing leaves'],
      ['Cost', 'a full SOC team', 'a fraction of it'],
    ],
    closing: 'Machine speed and a soldier’s discipline — hitting back only when doctrine allows. The line never sleeps.',
  },
  ru: {
    h: 'Платформа против команды безопасности',
    lead: 'SOC шлёт алерт и ждёт человека. ITDR сам обнаруживает, решает и отвечает — и наносит удар по атакующему, но только по доктрине и с вашего одобрения.',
    stats: [
      { big: '24/7/365', sub: 'оборона никогда не спит' },
      { big: '< 1 с', sub: 'на детекцию — три щита' },
      { big: '0', sub: 'превышений полномочий · safety-gate 100%' },
    ],
    thHuman: 'SOC / EDR + аналитики',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Покрытие', '8-часовые смены, усталость от алертов, ночные дыры', '24/7/365, никогда не устаёт'],
      ['Детекция', 'минуты в очереди триажа', 'меньше секунды, три щита'],
      ['Реакция', 'человеческий runbook, минуты–часы', 'автономно, секунды'],
      ['Reasoning', 'зависит от аналитика на смене', 'офицер Gemma-4 — по доктрине, всегда одинаково'],
      ['Удар возмездия', 'редко, вручную, юридические колебания', 'градуированно L1–L4, по ROE, законно, автоматически'],
      ['Стабильность', 'зависит от человека и усталости', 'safety-gate 100%, 0 превышений'],
      ['Улики', 'собираются вручную постфактум', 'неизменяемая форензика, IOC + атрибуция автоматом'],
      ['Обучение', 'изредка пост-мортем', 'каждый инцидент → доктрина, каждый удар умнее'],
      ['Утечка данных', 'облачный SIEM и сторонние инструменты', 'air-gapped — ничего не уходит наружу'],
      ['Стоимость', 'целая команда SOC', 'доля стоимости'],
    ],
    closing: 'Скорость машины и дисциплина солдата — бьём в ответ только когда доктрина это позволяет. Оборона никогда не спит.',
  },
  zh: {
    h: '平台 vs 資安團隊',
    lead: 'SOC 只發告警、等待人工。ITDR 自行偵測、裁決並回應——並對攻擊者發動反制，但僅在守則允許且取得您的授權之下。',
    stats: [
      { big: '24/7/365', sub: '防線永不沉睡' },
      { big: '< 1 秒', sub: '完成偵測 — 三重護盾' },
      { big: '0', sub: '越權 · 安全閘門 100%' },
    ],
    thHuman: 'SOC / EDR + 分析師',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['覆蓋時間', '8 小時輪班、告警疲勞、夜間空窗', '全年無休 24/7，永不疲倦'],
      ['偵測', '在分流佇列中等待數分鐘', '一秒內，三重護盾'],
      ['回應', '人工操作手冊，數分鐘至數小時', '自主執行，數秒'],
      ['推理', '取決於當班分析師', 'Gemma-4 安全官 — 每次皆守則一致'],
      ['反制', '罕見、手動、法律上猶豫', '分級 L1–L4，受 ROE 約束，合法，自動'],
      ['穩定性', '因人與疲勞而異', '安全閘門 100%，零越權'],
      ['證據', '事後人工收集', '不可變鑑識，IOC + 歸因自動完成'],
      ['學習', '偶爾的事後檢討', '每起事件 → 知識庫，每次反制更聰明'],
      ['資料外洩', '雲端 SIEM 與第三方工具', '隔離架構 — 數據絕不外流'],
      ['成本', '一整支 SOC 團隊', '僅為其中一小部分'],
    ],
    closing: '機器的速度，軍人的紀律 —— 僅在守則允許時才反擊。防線永不沉睡。',
  },
};

export default function ItdrAdvantages() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        {/* stat cards */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {d.stats.map((s) => (
            <div
              key={s.sub}
              className="rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-950/30 to-gray-900/30 p-6 text-center shadow-[0_6px_20px_rgba(244,63,94,0.18)]"
            >
              <div className="gradient-text text-3xl font-bold md:text-4xl">{s.big}</div>
              <div className="mt-2 text-sm text-white/60">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* comparison table */}
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 font-semibold text-white/60"> </th>
                <th className="px-4 py-3 font-semibold text-amber-200/80">{d.thHuman}</th>
                <th className="px-4 py-3 font-semibold text-emerald-300">{d.thPlatform}</th>
              </tr>
            </thead>
            <tbody>
              {d.rows.map((r) => (
                <tr key={r[0]} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-semibold text-white/90">{r[0]}</td>
                  <td className="px-4 py-3 text-amber-100/55">{r[1]}</td>
                  <td className="bg-emerald-400/5 px-4 py-3 font-medium text-emerald-100/90">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 rounded-xl border border-rose-500/30 bg-gradient-to-b from-rose-950/20 to-gray-900/20 p-5 text-center text-lg font-medium text-white/90">
          {d.closing}
        </p>
      </div>
    </section>
  );
}
