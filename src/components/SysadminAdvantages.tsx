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
    h: 'Platform vs a sysadmin team',
    lead: 'We don’t replace your judgment — we take the routine and the scale off your hands. The strategy and the final word on anything risky stay with you.',
    stats: [
      { big: '24/7/365', sub: 'always on — no shifts, no gaps' },
      { big: '100s–1000s', sub: 'servers per operator' },
      { big: 'Seconds', sub: 'to detect and act' },
    ],
    thHuman: 'Traditional team',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Coverage', '8 hours, shifts, night gaps', '24/7/365, no breaks'],
      ['Response', 'minutes to hours', 'seconds to minutes'],
      ['Scale', 'dozens of servers per admin', 'hundreds–thousands per operator'],
      ['Consistency', 'fatigue, slips of attention', 'the same quality every time'],
      ['Expertise', 'one or two clouds', 'AWS, GCP, Azure, on-prem & security at once'],
      ['Security', 'responds in business hours', 'instant detection & response, 24/7'],
      ['Learning', 'slow, siloed', 'daily briefings, shared experience'],
      ['Cost', 'salaries of a whole team', 'a fraction of it'],
      ['Audit', 'manual logs', 'a full service history'],
      ['Hiring & churn', 'search, onboard, attrition', 'instant, never quits'],
    ],
    closing: 'AI’s speed and scale — with your judgment on the loop. You get both.',
  },
  ru: {
    h: 'Платформа против команды сисадминов',
    lead: 'Мы не заменяем ваше суждение — мы снимаем с вас рутину и масштаб. Стратегия и последнее слово на рискованном остаются за вами.',
    stats: [
      { big: '24/7/365', sub: 'всегда на посту — без смен и дыр' },
      { big: 'Сотни–тысячи', sub: 'серверов на оператора' },
      { big: 'Секунды', sub: 'на реакцию' },
    ],
    thHuman: 'Традиционная команда',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Покрытие', '8 часов, дежурства, ночные дыры', '24/7/365, без перерывов'],
      ['Реакция', 'минуты–часы', 'секунды–минуты'],
      ['Масштаб', 'десятки серверов на админа', 'сотни–тысячи на оператора'],
      ['Стабильность', 'усталость, ошибки внимания', 'одинаковое качество всегда'],
      ['Экспертиза', 'одно-два облака', 'AWS, GCP, Azure, on-prem и кибербез сразу'],
      ['Безопасность', 'реакция в рабочее время', 'мгновенная детекция и отражение 24/7'],
      ['Обучение', 'медленно, разрозненно', 'ежедневные брифинги, общий опыт'],
      ['Стоимость', 'зарплаты целой команды', 'доля стоимости'],
      ['Аудит', 'ручные логи', 'полная История обслуживания'],
      ['Найм и текучка', 'поиск, онбординг, увольнения', 'мгновенно, не увольняется'],
    ],
    closing: 'Скорость и масштаб ИИ — и ваше суждение на петле. Вы получаете и то, и другое.',
  },
  zh: {
    h: '平台 vs 系統管理團隊',
    lead: '我們不取代您的判斷，而是替您卸下繁瑣與規模壓力。策略與高風險操作的最終決定權，始終掌握在您手中。',
    stats: [
      { big: '24/7/365', sub: '全年無休 — 無班次、無空窗' },
      { big: '數百至數千', sub: '每位操作員管理的伺服器' },
      { big: '數秒', sub: '完成偵測與行動' },
    ],
    thHuman: '傳統團隊',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['覆蓋時間', '每天 8 小時、輪班、夜間空窗', '全年無休 24/7，無中斷'],
      ['反應速度', '數分鐘至數小時', '數秒至數分鐘'],
      ['規模', '每位管理員數十台伺服器', '每位操作員數百至數千台'],
      ['穩定性', '疲勞、疏忽出錯', '始終如一的品質'],
      ['專業廣度', '一兩種雲端', 'AWS、GCP、Azure、地端與資安一次到位'],
      ['安全', '僅在上班時間回應', '24/7 即時偵測與反制'],
      ['學習', '緩慢、各自為政', '每日簡報、共享經驗'],
      ['成本', '整個團隊的薪資', '僅為其中一小部分'],
      ['稽核', '手動日誌', '完整的維運歷史'],
      ['招聘與流動', '招募、上手、離職', '即時上線，永不離職'],
    ],
    closing: 'AI 的速度與規模，加上您的判斷力 —— 兩者兼得。',
  },
};

export default function SysadminAdvantages() {
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
              className="rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-cyan-900/30 to-gray-900/30 p-6 text-center shadow-[0_6px_20px_rgba(34,211,238,0.18)]"
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

        <p className="mt-8 rounded-xl border border-cyan-500/30 bg-gradient-to-b from-cyan-900/20 to-gray-900/20 p-5 text-center text-lg font-medium text-white/90">
          {d.closing}
        </p>
      </div>
    </section>
  );
}
