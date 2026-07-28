'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';

type Layer = { name: string; note: string };
type Data = { h: string; lead: string; layersH: string; layers: Layer[]; layerNote: string; evolveH: string; evolveLead: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Layered and governed',
    lead: 'Not all knowledge is equal. Doctrine is ranked by authority and gated by review.',
    layersH: 'The authority cascade',
    layers: [
      { name: 'Rules of engagement', note: 'always injected · top authority' },
      { name: 'Playbooks', note: 'operational procedures' },
      { name: 'Verified references', note: 'trusted intel & vendor guidance' },
      { name: 'Community knowledge', note: 'lowest authority' },
    ],
    layerNote: 'Higher-authority layers win when guidance conflicts. Unreviewed entries are excluded from live reasoning.',
    evolveH: 'The evolve loop',
    evolveLead: 'After an incident, the outcome is distilled into a lesson — held pending until a human approves it, then it becomes active doctrine. Superseded guidance is retired, never silently overwritten.',
  },
  ru: {
    h: 'Расслоено и управляемо',
    lead: 'Не всякое знание равноценно. Доктрина ранжирована по авторитету и закрыта ревью.',
    layersH: 'Каскад авторитета',
    layers: [
      { name: 'Правила применения (ROE)', note: 'всегда инжектятся · высший авторитет' },
      { name: 'Плейбуки', note: 'операционные процедуры' },
      { name: 'Проверенные источники', note: 'доверенная разведка и вендорские гайды' },
      { name: 'Community-знание', note: 'низший авторитет' },
    ],
    layerNote: 'При конфликте побеждает слой с более высоким авторитетом. Непроверенные записи исключены из живого reasoning.',
    evolveH: 'Evolve-петля',
    evolveLead: 'После инцидента вывод дистиллируется в урок — держится в pending до одобрения человеком, затем становится активной доктриной. Устаревшее руководство выводится из оборота, а не молча перезаписывается.',
  },
  zh: {
    h: '分層且受治理',
    lead: '並非所有知識都等價。知識庫依權威分級，並以審閱把關。',
    layersH: '權威階層',
    layers: [
      { name: '交戰守則（ROE）', note: '永遠注入 · 最高權威' },
      { name: '行動手冊', note: '操作程序' },
      { name: '經查證的參考', note: '可信情報與廠商指引' },
      { name: '社群知識', note: '最低權威' },
    ],
    layerNote: '指引衝突時，權威較高的層級勝出。未經審閱的條目不進入即時推理。',
    evolveH: '演進迴路',
    evolveLead: '事件之後，其結果被提煉為一則經驗——在人工核准前維持 pending 狀態，核准後即成為生效知識。被取代的指引會退役，而非被悄悄覆寫。',
  },
};

const EVOLVE = ['Incident outcome', 'Distill lesson', 'Pending review', 'Approved → active', 'Sharper decision'];
const LAYER_COLORS = ['#fb7185', '#f59e0b', '#38bdf8', '#8b5cf6'];

export default function DoctrineGoverned() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* authority cascade */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">{d.layersH}</h3>
            <div className="space-y-2">
              {d.layers.map((l, i) => (
                <div
                  key={l.name}
                  className="rounded-xl border p-4"
                  style={{
                    borderColor: `${LAYER_COLORS[i]}66`,
                    background: `linear-gradient(90deg, ${LAYER_COLORS[i]}1f, transparent)`,
                    marginLeft: `${i * 18}px`,
                  }}
                >
                  <p className="font-semibold text-white">{l.name}</p>
                  <p className="text-xs text-white/55">{l.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{d.layerNote}</p>
          </div>

          {/* evolve loop */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">{d.evolveH}</h3>
            <p className="mb-5 text-sm leading-relaxed text-white/75">{d.evolveLead}</p>
            <FlowMap caption="Debrief → doctrine learns" items={EVOLVE} />
          </div>
        </div>
      </div>
    </section>
  );
}
