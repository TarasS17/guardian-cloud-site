'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';
import TopologyMap from '@/components/TopologyMap';
import AuditReportMap from '@/components/AuditReportMap';

type Item = { label: string; desc: string };

type Data = {
  h: string;
  topoH: string;
  topoLead: string;
  topo: Item[];
  topoNote: string;
  stepsH: string;
  steps: Item[];
  closing: string;
  diag: { topology: string; lifecycle: string; gate: string; invariants: string };
};

const DATA: Record<string, Data> = {
  en: {
    h: 'Platform deployment & the full operating cycle',
    topoH: 'Where it runs',
    topoLead:
      'Nothing heavy runs on your server — just one lightweight agent. It talks to the platform over encrypted channels (gRPC + HTTPS) and, by default, changes nothing without your decision. All the compute lives on the platform side, in three layers:',
    topo: [
      { label: 'Control plane', desc: 'Orchestration: the task queue, the Sysadmin Officer logic, the model gateway, the Doctrine knowledge base, monitoring and alerting. All state and your service history live here.' },
      { label: 'AI model fleet', desc: 'The officers and specialists on GPU, deployed in your region — so your telemetry and code stay inside the contour and never leave. Validation is self-hosted too — GLM-5.2, the main brain, reviews higher-risk changes inside the contour; nothing calls out.' },
      { label: 'Multi-region', desc: 'A platform node is deployed in your region, on any major cloud or on-prem. When demand appears in Asia or the Americas, we stand up a stack there, so both your data and your latency stay local.' },
    ],
    topoNote:
      'For a closed contour, the whole stack deploys inside your own perimeter — the Enterprise tier, a local model fleet, with zero outbound calls.',
    stepsH: 'What the system does — step by step',
    steps: [
      { label: 'Onboarding & provisioning', desc: 'You connect a server — it passes the billing gate and registers in a single asset registry with its own token; you choose the mode (full automation or monitoring). The agent is installed, your service history opens, and every action from here is written into it.' },
      { label: 'Initial audit', desc: 'The agent runs 18 predefined checks: the OS and its state, running services, disk / memory / network load, installed packages, key configurations, log metadata and security signals. The Sysadmin Officer reasons over them and returns a tightly structured report — summary, risk level, what is healthy, issues, optimizations and a plan; each plan item carries its own action, effort estimate, commands and an auto-apply flag.' },
      { label: 'Your decision', desc: 'You review the report right in the interface through Cloud AI and approve the plan. Safe items apply on their own; anything risky (HIGH / CRITICAL) waits for your word, and the system raises a safety ticket for residual risk.' },
      { label: 'Safety-checked execution', desc: 'For each approved item, the platform specialist generates the exact command for your environment (AWS / GCP / Azure / on-prem). The Sysadmin Officer reviews it — approve, narrow to least privilege, or escalate to a human. The Execution Agent then runs it (dry-run first) and writes the exact result and return code into the service history.' },
      { label: 'Continuous monitoring', desc: 'The Monitoring Agent streams metrics in real time; the platform compares them against thresholds, de-duplicates them and turns them into prioritized recommendations. It sees an anomaly or a brewing incident in an instant — and offers a fix before the problem becomes yours.' },
      { label: 'Threat detection & response', desc: 'At the first sign of an attack or a virus, the agent or an officer alerts the Sysadmin Officer in an instant, and it calls the ITDR module — automatic interception, defense and virus removal. The Sysadmin module then cleans up after the incident and restores the server to its original healthy state, so your users never notice a thing.' },
      { label: 'Modernization through AI Studio', desc: 'Need to extend or scale the system? You describe the task to Cloud AI, the Sysadmin Officer turns it into a job, AI Studio writes the architecture and code, GLM-5.2 reviews every line for correctness and vulnerabilities, the tests run — and after your approval the update integrates into your servers and goes live.' },
    ],
    closing:
      'Two rules run through all seven steps: dry-run by default, and the final word is always yours on anything risky. And every change lands in your service history, audit-ready at any time.',
    diag: { topology: 'Deployment topology', lifecycle: 'Operating cycle', gate: 'Execution safety gate', invariants: 'Dry-run by default · your approval on anything risky · everything in service history' },
  },
  ru: {
    h: 'Где развёрнута платформа и как работает весь цикл',
    topoH: 'Где это работает',
    topoLead:
      'На вашем сервере не крутится ничего тяжёлого — только один лёгкий агент. Он общается с платформой по зашифрованным каналам (gRPC + HTTPS) и по умолчанию ничего не меняет без вашего решения. Вся вычислительная нагрузка — на стороне платформы, в трёх слоях:',
    topo: [
      { label: 'Управляющий слой (control plane)', desc: 'Оркестрация: очередь задач, логика Sysadmin Officer, шлюз к моделям, база знаний Doctrine, мониторинг и уведомления. Здесь же хранится всё состояние и ваша История обслуживания.' },
      { label: 'Флот AI-моделей', desc: 'Офицеры и специалисты на GPU, развёрнуты в вашем регионе — поэтому ваша телеметрия и код остаются внутри контура и не уходят наружу. Валидация тоже self-hosted — GLM-5.2, главный мозг, проверяет изменения повышенного риска внутри контура; наружу ничего не уходит.' },
      { label: 'Мульти-регион', desc: 'Узел платформы разворачивается в вашем регионе, на любом крупном облаке или on-prem. Появляется спрос в Азии или Америке, поднимаем стек там, чтобы и данные, и задержки оставались локальными.' },
    ],
    topoNote:
      'Для закрытого контура весь стек разворачивается прямо в вашем периметре — тариф Enterprise, локальный флот, без единого обращения наружу.',
    stepsH: 'Что делает система — по шагам',
    steps: [
      { label: 'Подключение и провижининг', desc: 'Вы подключаете сервер — он проходит billing-гейт, регистрируется в едином реестре с персональным токеном, вы выбираете режим (полная автоматизация или мониторинг). Ставится агент, открывается История обслуживания, и каждое дальнейшее действие пишется в неё.' },
      { label: 'Первичный аудит', desc: 'Агент выполняет 18 предопределённых проверок: ОС и её состояние, запущенные службы, загрузка диска / памяти / сети, установленные пакеты, ключевые конфигурации, метаданные логов и сигналы безопасности. Sysadmin Officer осмысливает их и возвращает строго структурированный отчёт — сводка, уровень риска, что работает хорошо, проблемы, оптимизации и план; у каждого пункта плана своё действие, оценка трудоёмкости, команды и флаг «можно ли применить автоматически».' },
      { label: 'Ваше решение', desc: 'Вы изучаете отчёт прямо в интерфейсе через Cloud AI и одобряете план. Безопасные пункты применяются сами; всё рискованное (HIGH / CRITICAL) ждёт вашего слова, а на остаточный риск система заводит safety-ticket.' },
      { label: 'Исполнение с проверкой безопасности', desc: 'По каждому одобренному пункту платформенный специалист готовит точную команду под вашу среду (AWS / GCP / Azure / on-prem). Sysadmin Officer проверяет её — одобрить, сузить до минимально достаточной или эскалировать человеку. Execution Agent выполняет, сначала в dry-run, и возвращает точный результат с кодом возврата в Историю.' },
      { label: 'Непрерывный мониторинг', desc: 'Monitoring Agent непрерывно стримит метрики, они сверяются с порогами, дедуплицируются и превращаются в приоритизированные рекомендации. Аномалию или назревающий инцидент система видит сразу — и предлагает решение раньше, чем проблема станет вашей.' },
      { label: 'Обнаружение и реакция на угрозы', desc: 'При первых признаках атаки или вируса агент или офицер мгновенно передаёт сигнал Sysadmin Officer, и тот вызывает ITDR Module — он автоматически блокирует и отражает атаку или уничтожает вирус. После этого Sysadmin устраняет последствия инцидента и восстанавливает сервер в исходное состояние; ваши пользователи даже не заметят, что что-то было.' },
      { label: 'Модернизация через AI Studio', desc: 'Нужно доработать или масштабировать систему? Вы описываете задачу Cloud AI, Sysadmin Officer ставит её в работу, AI Studio пишет архитектуру и код, GLM-5.2 проверяет каждую строку на корректность и уязвимости, прогоняются тесты — и после вашего одобрения обновление интегрируется в ваши серверы и уходит в эксплуатацию.' },
    ],
    closing:
      'Через все семь шагов проходят два неизменных правила: dry-run по умолчанию и последнее слово за вами на всём рискованном. А каждое действие — в Истории обслуживания, готовой к аудиту.',
    diag: { topology: 'Топология развёртывания', lifecycle: 'Рабочий цикл', gate: 'Шлюз безопасности исполнения', invariants: 'Dry-run по умолчанию · ваше одобрение на рискованном · всё в Истории обслуживания' },
  },
  zh: {
    h: '平台部署架構與完整運作流程',
    topoH: '部署環境與運行機制',
    topoLead:
      '您的伺服器端無需承載任何高負載運算 —— 僅需運行一個輕量化 Agent。它透過加密通道（gRPC + HTTPS）與平台進行通訊，且預設情況下未經您的授權絕不擅自更改任何設定。所有的運算核心負載均由平台端承擔，並劃分為以下三個架構層：',
    topo: [
      { label: '控制層（Control Plane）', desc: '負責全局編排，包括：任務佇列（Task Queue）、Sysadmin Officer 核心邏輯、模型閘道（Model Gateway）、「Doctrine」知識庫、系統監控與告警通知。同時，所有系統狀態與您的「維運歷史」均安全儲存於此。' },
      { label: 'AI 模型叢集（AI Model Fleet）', desc: '部署於您所在區域專屬 GPU 上的核心 Officer 與專家模型。這確保了您的遙測數據與原始碼完全鎖定在本地安全邊界之內，絕不外流。驗證同樣採自託管——由核心大腦 GLM-5.2 在邊界內審查高風險變更，絕不對外呼叫。' },
      { label: '多區域架構（Multi-Region）', desc: '平台節點會部署在您所在的區域，可選任一主流雲端或地端。當亞洲或美洲出現需求，我們便在當地建立節點，讓您的資料與延遲都保持在本地。' },
    ],
    topoNote:
      '針對極致安全的「隔離網路環境」，我們支援將完整技術棧完全部署於您的私有邊界內 —— 提供 Enterprise 企業級方案、本地化模型叢集，實現 100% 零外部呼叫通訊。',
    stepsH: '系統自動化運作步驟',
    steps: [
      { label: '串接與配置建置（Provisioning）', desc: '您啟動伺服器連接 —— 系統會引導其通過計費閘道（Billing Gate），並使用專屬憑證（Token）註冊至全局統一資產庫中。隨後，您只需選擇所需的維運模式（全自動化或單純監控）。隨著 Agent 的成功安裝，系統將同步開啟「維運歷史」日誌，後續的每一次操作都將被透明記錄。' },
      { label: '首次深度稽核', desc: 'Agent 會自動執行 18 項預設的核心安全檢查，涵蓋：作業系統狀態、執行中的服務、磁碟 / 記憶體 / 網路負載、已安裝的套件、關鍵組態設定、日誌中繼資料及資安風險訊號。Sysadmin Officer 將對這些數據進行深度推理，並輸出結構極其嚴密、清晰的稽核報告（包含：全局概述、風險評級、健康指標、現存問題、優化建議與行動藍圖）。藍圖中的每個項目均配有具體的操作行為、工時評估、執行指令，以及「是否支援自動部署」的旗標（Flag）。' },
      { label: '您的最終決策', desc: '您可以直接透過介面中的 Cloud AI 助理審閱報告並核准行動藍圖。系統會自動執行所有安全級別的優化項目；而任何涉及高風險（HIGH / CRITICAL）的操作都將暫停，靜待您的明確授權。同時，系統會針對殘留風險（Residual Risk）自動建立安全工單（Safety-ticket）。' },
      { label: '安全驗證與指令執行', desc: '針對每個獲得您核准的項目，平台專職 AI 專家會根據您的實際環境（AWS / GCP / Azure / On-prem）生成精確的底層指令。Sysadmin Officer 將對指令進行嚴格安全審查 —— 決定直接批准、縮小至最小權限原則（Least Privilege），或是向上提報給人工審查。Execution Agent 隨後執行操作（優先採用 Dry-run 模擬），並將精確的執行結果與回傳碼（Return Code）完整同步至維運歷史中。' },
      { label: '持續性智慧監控', desc: 'Monitoring Agent 實時且不間斷地串流系統指標。平台會自動將數據與安全閾值（Thresholds）進行比對，執行去重複化（De-duplication）處理，並將其轉化為具備優先級的維運建議。系統能在毫秒間洞察任何異常行為或潛在事故徵兆 —— 在風險演變成真實災難前，為您提前提供解決方案。' },
      { label: '威脅偵測與即時回應', desc: '一旦偵測到任何攻擊或病毒侵入的初期跡象，端點 Agent 或核心 Officer 將在瞬間向 Sysadmin Officer 發出警報，並立即調用 ITDR 模組 —— 執行全自動化的精確攔截、防禦擊退與病毒清除。隨後，Sysadmin 會自動處理事故善後，將伺服器完美復原至初始健康狀態，確保您的終端用戶完全察覺不到任何業務中斷。' },
      { label: '透過 AI Studio 實現架構升級', desc: '當您需要對系統進行二次開發或彈性擴展時，只需將您的需求描述給 Cloud AI。Sysadmin Officer 會自動將其建立為開發任務，並交由 AI Studio 撰寫系統架構與原始碼。隨後由核心大腦 GLM-5.2 逐行審查程式碼正確性與漏洞，並跑完自動化測試。在獲得您的最終核准後，更新將流暢地整合至您的伺服器並正式上線。' },
    ],
    closing:
      '貫穿所有流程的兩大鐵律：系統預設採用 Dry-run（模擬運行）機制，且所有具備風險的操作最終決定權始終掌握在您手中。每一次的系統變更與操作行為都將沉澱於「維運歷史」中，隨時應對最高規格的合規審計。',
    diag: { topology: '部署拓撲', lifecycle: '運作週期', gate: '執行安全閘道', invariants: '預設 Dry-run · 風險操作需您核准 · 全程記錄於維運歷史' },
  },
};

function Step({ n, item }: { n: number; item: Item }) {
  return (
    <div className="mb-6 flex gap-4">
      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-300">
        {n}
      </span>
      <p className="text-white/80">
        <span className="font-semibold text-white">{item.label}.</span>{' '}
        <span className="text-white/70">{item.desc}</span>
      </p>
    </div>
  );
}

const STEP_NODES = ['Connect', 'Audit', 'Decide', 'Execute', 'Monitor', 'ITDR response', 'Modernize'];
const GATE_NODES = ['Specialist → command', 'Officer review', 'Dry-run', 'Your approval (if risky)', 'Execute', 'Service history'];
const MONITOR_NODES = ['Metrics stream', 'Threshold check', 'De-duplicate', 'Prioritized recommendation'];
const ITDR_NODES = ['Attack / virus signal', 'Sysadmin Officer', 'ITDR Module — block · repel · remove', 'Cleanup & restore', 'Service history'];
const STUDIO_NODES = ['Request → Cloud AI', 'Sysadmin Officer', 'AI Studio writes code', 'GLM-5.2 review', 'Tests', 'Your approval', 'Live'];

/** Block 4 — deployment + full operating cycle. Text broken up by six schemas. Prose en/ru/zh; diagrams EN. */
export default function SysadminHowItWorks() {
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
            <li key={t.label} className="border-l-2 border-cyan-500/40 pl-4">
              <span className="font-semibold text-white">{t.label}</span>{' '}
              <span className="text-white/70">— {t.desc}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8 rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 text-sm text-amber-100/80">
          {d.topoNote}
        </p>

        {/* Schema 1 — topology */}
        <TopologyMap />

        {/* What the system does */}
        <h3 className="mb-5 text-2xl font-bold text-white">{d.stepsH}</h3>

        {/* Schema 2 — lifecycle overview */}
        <FlowMap caption="Operating cycle" items={STEP_NODES} />

        {/* Setup: onboarding + audit */}
        <Step n={1} item={d.steps[0]} />
        <Step n={2} item={d.steps[1]} />
        {/* Schema 3 — audit report */}
        <AuditReportMap />
        <Step n={3} item={d.steps[2]} />

        {/* Execution */}
        <Step n={4} item={d.steps[3]} />
        {/* Schema 4 — execution safety gate */}
        <FlowMap caption="Execution safety gate" items={GATE_NODES} />

        {/* Monitoring */}
        <Step n={5} item={d.steps[4]} />
        {/* Schema 5 — monitoring */}
        <FlowMap caption="Continuous monitoring" items={MONITOR_NODES} />

        {/* Threat */}
        <Step n={6} item={d.steps[5]} />
        {/* Schema 6 — ITDR escalation */}
        <FlowMap caption="Threat response" items={ITDR_NODES} />

        {/* Modernization */}
        <Step n={7} item={d.steps[6]} />
        {/* Schema 7 — AI Studio pipeline */}
        <FlowMap caption="AI Studio pipeline" items={STUDIO_NODES} />

        <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-white/70">
          {d.closing}
        </p>
      </div>
    </section>
  );
}
