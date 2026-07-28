'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';
import ItdrTopologyMap from '@/components/ItdrTopologyMap';

type Item = { label: string; desc: string };

type Data = {
  h: string;
  topoH: string;
  topoLead: string;
  topo: Item[];
  topoNote: string;
  stepsH: string;
  steps: Item[];
  ladderH: string;
  ladder: string;
  closing: string;
};

const DATA: Record<string, Data> = {
  en: {
    h: 'How the contour works — from signal to strike',
    topoH: 'Where it runs',
    topoLead:
      'Only a lightweight agent runs on your server — it streams security signals over encrypted channels (gRPC + HTTPS). All detection and reasoning happen on the platform GPU fleet in your region, and the whole ITDR contour is air-gapped: no telemetry and no keys ever leave it.',
    topo: [
      { label: 'Detection layer', desc: 'Three shields (Qwen3-4B + LoRA) on GPU, classifying a threat in a fraction of a second.' },
      { label: 'Decision layer', desc: 'The ITDR Officer (Gemma-4) plus Doctrine (ROE, playbooks, threat intel) — reasoning and policy, entirely in-region.' },
      { label: 'Air-gapped contour', desc: 'No external LLM or API calls inside the contour. The only outbound traffic is reporting an attacker through lawful channels — public blocklists, ISP / CERT / LEO.' },
    ],
    topoNote:
      'For a closed perimeter, the entire contour deploys inside your own infrastructure — the Enterprise tier, fully isolated, with zero outbound calls.',
    stepsH: 'What the system does — step by step',
    steps: [
      { label: 'Signal', desc: 'The instant something looks wrong, the agent — or the Sysadmin Officer — streams a security signal into the contour: suspicious logins, root activity, a process spawning a reverse shell, a file flagged by the antivirus.' },
      { label: 'Detection', desc: 'Three shields classify the signal in under a second — root abuse, credential theft, privilege escalation — each returning a confidence score and a MITRE ATT&CK mapping. If severity is high, the officer is invoked.' },
      { label: 'Officer reasoning', desc: 'The ITDR Officer (Gemma-4) reasons over the correlated incident, consults doctrine for the matching playbook and rules of engagement, and returns a tightly structured verdict — classification, severity, and the exact response actions.' },
      { label: 'Containment', desc: 'The contour acts at once: block the source IP, isolate the host, rotate and invalidate credentials, kill the malicious process. Malware is quarantined by the antivirus. The attack is stopped before it spreads.' },
      { label: 'ROE gate & graduated retaliation', desc: 'Before any active response, the officer checks five Rules-of-Engagement gates — severity, attribution confidence, attacker class, whether the attack is ongoing, and your authorization. All pass → the graduated ladder L1–L4. Any gate fails → cap at passive defense and escalate to a human. This is what makes the strike safe.' },
      { label: 'Forensics & evidence', desc: 'Everything is logged immutably before execution: indicators of compromise extracted, the attacker attributed, the full timeline preserved — audit-ready and admissible.' },
      { label: 'Debrief → doctrine', desc: 'The outcome of every incident is distilled back into doctrine as a reviewable lesson — held pending until approved, then live. Every next decision is sharper than the last.' },
    ],
    ladderH: 'The graduated retaliation ladder',
    ladder:
      'Retaliation is cumulative and ROE-gated. L1–L2 stay on your own server — honeypots and disinformation that feed the attacker false data. L3–L4 act against the attacker through lawful channels only: reporting to global threat-intel networks and coordinating takedown with ISPs, CERTs and law enforcement. The officer runs the full investigation — forensics → attribution → infrastructure — before anything beyond L1, and never strikes third parties.',
    closing:
      'Two invariants run through the whole contour: it is air-gapped, and active retaliation only ever happens under doctrine and with your approval — every action logged immutably.',
  },
  ru: {
    h: 'Как работает контур — от сигнала до удара',
    topoH: 'Где это работает',
    topoLead:
      'На вашем сервере крутится только лёгкий агент — он стримит сигналы безопасности по зашифрованным каналам (gRPC + HTTPS). Вся детекция и reasoning — на GPU-флоте платформы в вашем регионе, и весь контур ITDR изолирован (air-gapped): ни телеметрия, ни ключи наружу не уходят.',
    topo: [
      { label: 'Слой детекции', desc: 'Три щита (Qwen3-4B + LoRA) на GPU, классифицируют угрозу за доли секунды.' },
      { label: 'Слой решения', desc: 'ITDR Officer (Gemma-4) плюс Doctrine (ROE, плейбуки, threat intel) — reasoning и политика, целиком в вашем регионе.' },
      { label: 'Изолированный контур', desc: 'Внутри контура нет обращений к внешним LLM или API. Единственный исходящий трафик — репорт атакующего по законным каналам: публичные чёрные списки, ISP / CERT / правоохранители.' },
    ],
    topoNote:
      'Для закрытого периметра весь контур разворачивается внутри вашей инфраструктуры — тариф Enterprise, полностью изолированно, без единого обращения наружу.',
    stepsH: 'Что делает система — по шагам',
    steps: [
      { label: 'Сигнал', desc: 'Как только что-то выглядит подозрительно, агент — или Sysadmin Officer — стримит сигнал безопасности в контур: подозрительные логины, активность root, процесс, поднимающий reverse shell, файл, помеченный антивирусом.' },
      { label: 'Детекция', desc: 'Три щита классифицируют сигнал меньше чем за секунду — захват root, кража учётных данных, эскалация привилегий — каждый возвращает оценку уверенности и маппинг MITRE ATT&CK. При высокой severity вызывается офицер.' },
      { label: 'Reasoning офицера', desc: 'ITDR Officer (Gemma-4) осмысливает скоррелированный инцидент, сверяется с доктриной — подходящий плейбук и правила применения — и возвращает строго структурированный вердикт: классификация, severity и точные действия по ответу.' },
      { label: 'Сдерживание', desc: 'Контур действует мгновенно: блокирует source IP, изолирует хост, ротирует и аннулирует учётные данные, убивает вредоносный процесс. Малварь отправляется в карантин антивирусом. Атака остановлена до того, как распространится.' },
      { label: 'ROE-гейт и градуированный удар', desc: 'Перед любым активным ответом офицер проверяет пять гейтов правил применения — severity, уверенность атрибуции, класс атакующего, идёт ли атака сейчас и ваше разрешение. Все пройдены → градуированная лестница L1–L4. Любой не пройден → стоп на пассивной обороне и эскалация человеку. Именно это делает удар безопасным.' },
      { label: 'Форензика и улики', desc: 'Всё логируется неизменяемо до исполнения: извлечены индикаторы компрометации (IOC), атакующий атрибутирован, сохранён полный таймлайн — готово к аудиту и юридически пригодно.' },
      { label: 'Дебриф → доктрина', desc: 'Итог каждого инцидента дистиллируется обратно в доктрину как проверяемый урок — держится в pending до одобрения, затем в работе. Каждое следующее решение острее предыдущего.' },
    ],
    ladderH: 'Градуированная лестница возмездия',
    ladder:
      'Удар возмездия кумулятивен и ограничен ROE. L1–L2 остаются на вашем сервере — ловушки и дезинформация, скармливающие атакующему ложные данные. L3–L4 действуют против атакующего только законными каналами: репорт в глобальные threat-intel сети и координация takedown с провайдерами, CERT и правоохранителями. Офицер проводит полное расследование — форензика → атрибуция → инфраструктура — прежде чем что-либо выше L1, и никогда не бьёт по третьим сторонам.',
    closing:
      'Через весь контур проходят два инварианта: он изолирован (air-gapped), и активный удар возмездия случается только по доктрине и с вашего одобрения — каждое действие в неизменяемом логе.',
  },
  zh: {
    h: '防禦鏈如何運作 —— 從訊號到反制',
    topoH: '部署環境與運行機制',
    topoLead:
      '您的伺服器端僅運行一個輕量化 Agent —— 它透過加密通道（gRPC + HTTPS）串流資安訊號。所有偵測與推理均在您所在區域的平台 GPU 叢集上完成，且整條 ITDR 防禦鏈皆為隔離（air-gapped）架構：遙測數據與金鑰絕不外流。',
    topo: [
      { label: '偵測層', desc: 'GPU 上的三重護盾（Qwen3-4B + LoRA），在須臾之間完成威脅分類。' },
      { label: '決策層', desc: 'ITDR 安全官（Gemma-4）搭配「Doctrine」（ROE、行動手冊、威脅情報）—— 推理與策略，完全在地化運行。' },
      { label: '隔離防禦鏈', desc: '防禦鏈內部不呼叫任何外部 LLM 或 API。唯一的對外流量是透過合法管道呈報攻擊者：公開黑名單、ISP / CERT / 執法機關。' },
    ],
    topoNote:
      '針對封閉式邊界，整條防禦鏈可完全部署於您的私有基礎設施內 —— Enterprise 企業級方案，完全隔離，零對外通訊。',
    stepsH: '系統自動化運作步驟',
    steps: [
      { label: '訊號', desc: '一旦出現任何異常跡象，Agent —— 或 Sysadmin Officer —— 便將資安訊號串流入防禦鏈：可疑登入、root 活動、產生反向 Shell 的程序、被防毒標記的檔案。' },
      { label: '偵測', desc: '三重護盾在一秒內完成訊號分類 —— root 濫用、憑證竊取、權限提升 —— 各自回傳信心分數與 MITRE ATT&CK 對應。若嚴重度偏高，即調用安全官。' },
      { label: '安全官推理', desc: 'ITDR 安全官（Gemma-4）對關聯後的事件進行推理，比對知識庫以取得對應的行動手冊與交戰守則，並回傳結構嚴密的裁決：分類、嚴重度與精確的回應動作。' },
      { label: '圍堵', desc: '防禦鏈即刻行動：封鎖來源 IP、隔離主機、輪換並作廢憑證、終止惡意程序。惡意軟體由防毒隔離。攻擊在擴散前即被遏止。' },
      { label: 'ROE 閘門與分級反制', desc: '在任何主動回應之前，安全官會檢查五道交戰守則閘門 —— 嚴重度、歸因信心、攻擊者等級、攻擊是否進行中，以及您的授權。全部通過 → 分級階梯 L1–L4。任一閘門未過 → 上限為被動防禦並上報人工。這正是讓反制「安全」的關鍵。' },
      { label: '鑑識與證據', desc: '一切在執行前皆不可變地記錄：提取入侵指標（IOC）、完成攻擊者歸因、保全完整時間軸 —— 可供稽核且具法律效力。' },
      { label: '事後復盤 → 知識庫', desc: '每起事件的結果都被提煉回知識庫，成為可審閱的經驗 —— 在核准前維持 pending 狀態，核准後即生效。每一次決策都比上一次更銳利。' },
    ],
    ladderH: '分級反制階梯',
    ladder:
      '反制是累進式的，並受 ROE 嚴格約束。L1–L2 僅在您自己的伺服器上進行 —— 以蜜罐與假情報餵給攻擊者錯誤資料。L3–L4 僅透過合法管道對攻擊者行動：呈報全球威脅情報網路，並協同 ISP、CERT 與執法機關進行下架（takedown）。在採取任何高於 L1 的行動前，安全官會完成完整調查 —— 鑑識 → 歸因 → 基礎設施 —— 且絕不波及第三方。',
    closing:
      '貫穿整條防禦鏈的兩大不變法則：它是隔離（air-gapped）的；主動反制僅在守則允許且取得您的授權下執行 —— 每一個動作皆不可變地記錄在案。',
  },
};

function Step({ n, item }: { n: number; item: Item }) {
  return (
    <div className="mb-6 flex gap-4">
      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-rose-500/20 text-sm font-bold text-rose-300">
        {n}
      </span>
      <p className="text-white/80">
        <span className="font-semibold text-white">{item.label}.</span>{' '}
        <span className="text-white/70">{item.desc}</span>
      </p>
    </div>
  );
}

const CYCLE_NODES = ['Signal', 'Detect · 3 shields', 'Officer reasons', 'Contain', 'ROE gate', 'Forensics', 'Debrief → doctrine'];
const DETECT_NODES = ['Security signal', '3 shields classify ≤1s', 'Confidence + MITRE', 'High severity → Officer'];
const GATE_NODES = ['Incident correlated', 'Severity ≥ 8', 'Attribution ≥ 85%', 'Actor: nation-state / crime', 'Ongoing + authorized', 'All pass → L1–L4', 'Any fail → cap L1 + escalate'];
const GATE_COLORS = ['#22d3ee', '#38bdf8', '#818cf8', '#a855f7', '#f59e0b', '#34d399', '#fb7185'];
const LADDER_NODES = ['L1 Passive · honeypot', 'L2 Active deception', 'L3 Coordinated takedown', 'L4 Advanced'];
const LADDER_COLORS = ['#fbbf24', '#f59e0b', '#fb7185', '#ef4444'];
const DEBRIEF_NODES = ['Incident outcome', 'Distill lesson', 'Doctrine · pending', 'Approved → live', 'Smarter next time'];

/** ITDR block — full operating contour, prose broken up by schemas. Prose en/ru/zh; diagrams EN. */
export default function ItdrHowItWorks() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>

        {/* Where it runs */}
        <h3 className="mb-3 text-2xl font-bold text-white">{d.topoH}</h3>
        <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/80">{d.topoLead}</p>
        <ul className="mb-6 space-y-4">
          {d.topo.map((t) => (
            <li key={t.label} className="border-l-2 border-rose-500/40 pl-4">
              <span className="font-semibold text-white">{t.label}</span>{' '}
              <span className="text-white/70">— {t.desc}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8 rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 text-sm text-amber-100/80">
          {d.topoNote}
        </p>

        {/* Schema 1 — topology */}
        <ItdrTopologyMap />

        {/* What the system does */}
        <h3 className="mb-5 text-2xl font-bold text-white">{d.stepsH}</h3>

        {/* Schema 2 — operating cycle */}
        <FlowMap caption="Operating cycle" items={CYCLE_NODES} />

        <Step n={1} item={d.steps[0]} />
        <Step n={2} item={d.steps[1]} />
        {/* Schema 3 — detection */}
        <FlowMap caption="Detection" items={DETECT_NODES} colors={['#22d3ee', '#fb7185', '#a855f7', '#34d399']} />

        <Step n={3} item={d.steps[2]} />
        <Step n={4} item={d.steps[3]} />

        <Step n={5} item={d.steps[4]} />
        {/* Schema 4 — ROE gate */}
        <FlowMap caption="ROE safety gate" items={GATE_NODES} colors={GATE_COLORS} />

        {/* Retaliation ladder */}
        <h3 className="mb-3 mt-4 text-2xl font-bold text-white">{d.ladderH}</h3>
        <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/80">{d.ladder}</p>
        {/* Schema 5 — ladder */}
        <FlowMap caption="Graduated retaliation — cumulative, ROE-gated" items={LADDER_NODES} colors={LADDER_COLORS} />

        <Step n={6} item={d.steps[5]} />
        <Step n={7} item={d.steps[6]} />
        {/* Schema 6 — debrief loop */}
        <FlowMap caption="Debrief → doctrine learns" items={DEBRIEF_NODES} />

        <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-white/70">
          {d.closing}
        </p>
      </div>
    </section>
  );
}
