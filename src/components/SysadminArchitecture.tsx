'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import ArchitectureMap from '@/components/ArchitectureMap';

type Named = { name: string; desc: string };

type Arch = {
  h: string;
  intro: string[];
  officersH: string;
  officers: Named[];
  agentsH: string;
  agents: Named[];
  roleH: string;
  role: string[];
  diag: {
    input: string;
    tInput: string;
    tChief: string;
    tSpec: string;
    tAgents: string;
    tConnected: string;
    validation: string;
  };
};

const ARCH: Record<string, Arch> = {
  en: {
    h: 'Architecture: a neural network for system administration',
    intro: [
      'Sysadmin is not a single module or a single model. It is a neural network for system administration: a team of AI officers, each with its own area of responsibility, commanding a set of execution agents that live on your servers. Together they behave like a team of system administrators that never tires.',
      'The work flows top-down. An audit, an incident or a request from you enters at the top. The chief officer makes sense of it, breaks it into steps, and routes each step to the specialist who knows that ground best. Nothing reaches your server until its safety has been checked, and nothing risky runs without your word.',
    ],
    officersH: 'The officers — thinking and orchestration',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'the chief orchestrator and commanding officer of the whole module. It receives the audit, incident or task, understands the situation, builds the plan, vets the safety of every command and delegates the work among the specialists — and on danger (a cyber-attack or a virus) it calls the entire ITDR module through the ITDR Officer to resolve it. It also consolidates all logs and data into a single report and stays in touch with you through the Cloud AI assistant in your interface. You can ask Cloud AI to bring the Sysadmin Officer into a shared chat and hold a meeting or a briefing with it — settling whatever concerns you or mapping out the work ahead.',
      },
      {
        name: 'GCP Officer',
        desc: 'the Google Cloud specialist. Fluent in gcloud, GCE and GKE, IAM, firewall rules and service accounts, it turns a finding into the exact, native GCP action.',
      },
      {
        name: 'AWS Officer',
        desc: 'the Amazon Web Services specialist. EC2, S3, IAM, security groups, the aws CLI — it knows the platform’s edges and its footguns, and works within them.',
      },
      {
        name: 'Azure Officer',
        desc: 'the Microsoft Azure specialist. The az CLI, virtual machines, network security groups, resource groups — fluent in Azure’s own logic and language.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'the generalist. Bare-metal Linux, on-prem estates and hybrid environments are its home; it takes on everything not tied to a single cloud, and backs you up when an environment is non-standard.',
      },
    ],
    agentsH: 'The agents — the officers’ eyes and hands on your servers',
    agents: [
      { name: 'Audit Agent', desc: 'gathers the signals for the audit — eighteen checks that paint a full picture of the host.' },
      { name: 'Monitoring Agent', desc: 'streams health metrics continuously, so the officers always see the live state.' },
      { name: 'Execution Agent', desc: 'carries out approved commands (dry-run first) and returns the exact result.' },
      { name: 'Antivirus Agent', desc: 'runs scheduled ClamAV scans; what it finds goes to quarantine, never deleted silently.' },
      { name: 'Inventory Agent', desc: 'keeps a live inventory of packages and services, so nothing drifts unnoticed.' },
      { name: 'Forensics Agent', desc: 'pulls the artifacts and logs an incident needs, so the analysis rests on facts.' },
      { name: 'Patch Agent', desc: 'applies updates and patches once approved, and verifies the system is healthy.' },
      { name: 'Backup Agent', desc: 'takes a snapshot before any risky change, so there is always a way back.' },
    ],
    roleH: 'Sysadmin — the platform’s control module',
    role: [
      'When an agent or an officer spots signs of a cyber-attack or a virus on your server, it relays this to the Sysadmin Officer in an instant, and it immediately calls the ITDR module, which removes the threat completely. After that, the Sysadmin module clears every aftereffect of the incident and restores your servers to their original healthy state. Your users will not even notice anything was wrong — because the whole thing takes minutes, perhaps seconds.',
      'The Sysadmin module also drives every upgrade of your servers. Want to scale? Done. The module carries out all the work and the integration of the new features you have in mind. You and Cloud AI only set the vision; the Sysadmin Officer runs every process: AI Studio writes the architecture and code needed, and the Sysadmin Officer tests it all and integrates it into your servers. Validation is performed by GLM-5.2, our self-hosted main brain — it reviews every line of code for correctness and vulnerabilities inside the contour and produces recommendations that the Sysadmin Officer implements in full. And you get the best possible result.',
    ],
    diag: {
      input: 'Audit · Incident · Your task',
      tInput: 'Input',
      tChief: 'Chief officer',
      tSpec: 'Platform specialists',
      tAgents: 'Agents on your server',
      tConnected: 'Connected modules',
      validation: 'AI Studio validation: GLM-5.2 (self-hosted)',
    },
  },
  ru: {
    h: 'Архитектура: нейросеть системного администрирования',
    intro: [
      'Sysadmin — это не один модуль и не одна модель. Это нейросеть системного администрирования: команда AI-офицеров, у каждого своя зона ответственности, а под их началом агенты-исполнители на ваших серверах. Вместе они ведут себя как команда системных администраторов, которая никогда не устаёт.',
      'Работа идёт сверху вниз. Наверху входит аудит, инцидент или ваша задача. Главный офицер осмысливает её, разбивает на шаги и направляет каждый шаг тому специалисту, кто знает эту территорию лучше всех. Ничего не доходит до сервера, пока не проверена безопасность, и ничего рискованного не выполняется без вашего слова.',
    ],
    officersH: 'Офицеры — мышление и оркестрация',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'главный оркестратор и командующий офицер всего модуля. Принимает аудит, инцидент или задачу, понимает ситуацию, строит план, проверяет безопасность каждой команды и распределяет работу между специалистами, а в случае опасности (кибератака или вирус) вызывает через ITDR Officer весь модуль ITDR для решения проблемы. Он же сводит все логи и данные в единый отчёт и держит связь с вами через помощника Cloud AI в вашем интерфейсе. Вы можете попросить Cloud AI вызвать Sysadmin Officer в общий чат и провести совещание или брифинг совместно с ним — решая все волнующие вопросы или намечая планы работ.',
      },
      { name: 'GCP Officer', desc: 'специалист по Google Cloud. Свободно владеет gcloud, GCE и GKE, IAM, firewall-правилами, сервис-аккаунтами и превращает находку в точное, «родное» для GCP действие.' },
      { name: 'AWS Officer', desc: 'специалист по Amazon Web Services. EC2, S3, IAM, security groups, aws CLI — знает грани платформы и её подводные камни и работает в их рамках.' },
      { name: 'Azure Officer', desc: 'специалист по Microsoft Azure. az CLI, виртуальные машины, network security groups, resource groups, свободно говорит на «языке» Azure.' },
      { name: 'All-Platform Officer', desc: 'универсал. Bare-metal Linux, on-prem и смешанные среды — его дом; берёт всё, что не привязано к одному облаку, и подстраховывает, когда окружение нестандартное.' },
    ],
    agentsH: 'Агенты — глаза и руки офицеров на ваших серверах',
    agents: [
      { name: 'Audit Agent', desc: 'собирает сигналы для аудита: восемнадцать проверок, дающих полную картину хоста.' },
      { name: 'Monitoring Agent', desc: 'непрерывно стримит метрики, чтобы офицеры всегда видели живую картину.' },
      { name: 'Execution Agent', desc: 'выполняет одобренные команды (сначала dry-run) и возвращает точный результат.' },
      { name: 'Antivirus Agent', desc: 'плановые ClamAV-сканы; найденное — в карантин, ничего не удаляя молча.' },
      { name: 'Inventory Agent', desc: 'ведёт живую инвентаризацию пакетов и служб, чтобы ничего не «уплыло» незаметно.' },
      { name: 'Forensics Agent', desc: 'поднимает артефакты и логи для разбора инцидента, чтобы анализ опирался на факты.' },
      { name: 'Patch Agent', desc: 'накатывает обновления и патчи после одобрения и подтверждает, что система здорова.' },
      { name: 'Backup Agent', desc: 'делает снимок перед любым рискованным изменением, чтобы всегда был путь назад.' },
    ],
    roleH: 'Sysadmin — управляющий модуль платформы',
    role: [
      'Когда агент или офицер обнаруживает признаки кибератаки или вируса на вашем сервере, он моментально передаёт это Sysadmin Officer, и тот сразу вызывает ITDR Module, который полностью устраняет проблему. После этого Sysadmin Module устраняет все последствия инцидента и восстанавливает работу ваших серверов в первоначальное состояние. Ваши пользователи даже не увидят, что были какие-либо проблемы, — потому что это займёт считаные минуты, а возможно, и секунды.',
      'Sysadmin Module ведёт и все работы по модернизации ваших серверов. Хотите масштабироваться? — Пожалуйста. Модуль полностью проведёт все работы и интеграцию новых функций, которые вы задумали. Вы и Cloud AI задаёте только ваше видение, а Sysadmin Officer управляет всеми процессами: AI Studio пишет нужную архитектуру и код, Sysadmin Officer всё тестирует и интегрирует в ваши серверы. Валидацию выполняет GLM-5.2, наш self-hosted главный мозг — он проверяет каждую строчку кода на корректность и уязвимости внутри контура и выдаёт рекомендации, которые Sysadmin Officer реализует полностью. И вы получаете наилучший результат.',
    ],
    diag: {
      input: 'Аудит · Инцидент · Ваша задача',
      tInput: 'Вход',
      tChief: 'Главный офицер',
      tSpec: 'Платформенные специалисты',
      tAgents: 'Агенты на вашем сервере',
      tConnected: 'Связанные модули',
      validation: 'Валидация AI Studio: GLM-5.2 (self-hosted)',
    },
  },
  zh: {
    h: '架構設計：系統維運神經網路',
    intro: [
      'Sysadmin 絕非單一模組或單一模型。它是一整套「系統維運神經網路」：由一隊各司其職的 AI 高階官員（AI Officers）組成核心，並由部署在您伺服器上的執行代理（Agents）聽從調遣。它們協同運作，宛如一支永不疲倦的頂尖系統管理員團隊。',
      '系統採用自上而下的運作機制。當架構接收到稽核請求、突發事件或您的客製化任務時，主控官（Chief Officer）會對其進行深度理解與任務拆解，並將各個步驟派發給該領域最專業的專家官員。在安全性未通過驗證前，任何指令絕不會觸及伺服器；而在未取得您的明確授權前，任何高風險操作絕不執行。',
    ],
    officersH: '核心官員層 —— 思維與編排（Thinking & Orchestration）',
    officers: [
      {
        name: 'Sysadmin Officer（系統維運主控官）',
        desc: '整個模組的核心編排者與最高指揮官。負責接收稽核、事件或任務，評估全局、制定行動方案、嚴格審查每條指令的安全性，並在各專家間分配工作。一旦偵測到網路攻擊或病毒威脅，它會立即透過 ITDR Officer 調動整個 ITDR 模組。同時，它負責將所有日誌與數據彙整為單一報告，並透過您的 Cloud AI 助理保持即時溝通。您甚至可以要求 Cloud AI 將 Sysadmin Officer 呼叫至共同對話中，直接召開線上會議或技術簡報，共同解決疑慮並規劃工作藍圖。',
      },
      { name: 'GCP Officer（Google Cloud 專家官員）', desc: '深諳 Google Cloud 生態。精通 gcloud、GCE、GKE、IAM 權限管理、防火牆規則（Firewall Rules）及服務帳戶（Service Accounts），能將維運需求轉化為精確且原生（Native）的 GCP 操作。' },
      { name: 'AWS Officer（Amazon Web Services 專家官員）', desc: 'AWS 雲端環境專家。全面掌控 EC2、S3、IAM、安全群組（Security Groups）及 aws CLI，熟知平台特性與潛在陷阱，並在最佳實踐框架下高效維運。' },
      { name: 'Azure Officer（Microsoft Azure 專家官員）', desc: 'Microsoft Azure 專職官員。熟練運用 az CLI、虛擬機器（VMs）、網路安全群組（NSGs）及資源群組（Resource Groups），精通 Azure 的底層邏輯與技術語言。' },
      { name: 'All-Platform Officer（全平台通用官員）', desc: '多平台多棲通用型專家。Bare-metal 實體 Linux 伺服器、On-premise 地端機房及混合雲環境是其核心領域；它全權接管所有不依賴特定雲端廠商的維運工作，並在非標準環境下提供強大的技術墊底。' },
    ],
    agentsH: '執行代理層 —— 伺服器端官員的眼與手（Agents）',
    agents: [
      { name: 'Audit Agent（稽核代理）', desc: '負責收集稽核訊號，執行 18 項核心指標檢查，提供主機狀態的全局可視化圖譜。' },
      { name: 'Monitoring Agent（監控代理）', desc: '即時且不間斷地串流（Stream）各項效能指標，確保核心官員隨時掌握系統的真實運作動態。' },
      { name: 'Execution Agent（執行代理）', desc: '負責執行通過審查的指令（優先採用 Dry-run 模擬），並回傳精確的執行結果。' },
      { name: 'Antivirus Agent（防毒代理）', desc: '執行排程的 ClamAV 病毒掃描；發現威脅時自動移至隔離區（Quarantine），絕不在背景默默刪除任何檔案。' },
      { name: 'Inventory Agent（資產盤點代理）', desc: '對系統套件與執行中的服務進行即時資產盤點，嚴防任何未授權的變更或潛在漂移（Drift）。' },
      { name: 'Forensics Agent（數位鑑識代理）', desc: '在發生突發事件時，快速提取系統關鍵構件（Artifacts）與日誌，確保事故分析完全基於客觀事實。' },
      { name: 'Patch Agent（補丁管理代理）', desc: '在獲得您的明確授權後，自動下載並部署系統更新與安全補丁（Patches），並驗證系統健康度。' },
      { name: 'Backup Agent（備份代理）', desc: '在執行任何高風險變更前自動建立系統快照（Snapshot），確保系統隨時具備完美的復原回滾（Rollback）路徑。' },
    ],
    roleH: 'Sysadmin —— 平台的最高管理控制核心',
    role: [
      '當部署在伺服器端的 Agent 或核心 Officer 偵測到任何網路攻擊或惡意病毒的跡象時，資訊將在毫秒間同步至 Sysadmin Officer。後者會立即調用 ITDR 模組進行徹底的威脅清除。隨後，Sysadmin 模組將全自動接管事故善後工作，將您的伺服器架構完美復原至初始健康狀態。您的終端用戶甚至完全不會察覺到任何異常 —— 因為整個防禦與復原流程將在短短數分鐘甚至數秒鐘之內完成。',
      '同時，Sysadmin 模組也是您伺服器架構升級與擴展的發動機。想要彈性擴展？沒問題。該模組會全權負責您所規劃的新功能整合與全面架構部署。您與 Cloud AI 只需負責勾勒願景，Sysadmin Officer 則負責指揮全局：AI Studio 將自動撰寫所需的系統架構與原始碼，並由 Sysadmin Officer 完成全套自動化測試與環境整合。',
      '在上線前，系統將由自託管的核心大腦 GLM-5.2 執行頂級驗證（Validation）—— 在安全邊界內逐行審查程式碼的正確性與潛在安全漏洞，並輸出優化建議，由 Sysadmin Officer 100% 落地執行。這確保了您最終獲得最高規格、安全無虞的升級成果。',
    ],
    diag: {
      input: '稽核 · 事件 · 您的任務',
      tInput: '輸入',
      tChief: '主控官',
      tSpec: '平台專家官員',
      tAgents: '伺服器端代理',
      tConnected: '關聯模組',
      validation: 'AI Studio 驗證：GLM-5.2（自託管）',
    },
  },
};

/** Sysadmin architecture block (block 2) — localized prose + rich SVG system map. */
export default function SysadminArchitecture() {
  const { locale } = useLocale();
  const a = ARCH[locale] ?? ARCH.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{a.h}</h2>
        <div className="mb-10 space-y-5 text-lg leading-relaxed text-white/80">
          {a.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* System map (rich SVG) */}
        <ArchitectureMap />

        {/* Officers */}
        <h3 className="mb-5 text-2xl font-bold text-white">{a.officersH}</h3>
        <ul className="mb-10 space-y-4">
          {a.officers.map((o) => (
            <li key={o.name} className="border-l-2 border-cyan-500/40 pl-4">
              <span className="font-semibold text-white">{o.name}</span>{' '}
              <span className="text-white/70">— {o.desc}</span>
            </li>
          ))}
        </ul>

        {/* Agents */}
        <h3 className="mb-5 text-2xl font-bold text-white">{a.agentsH}</h3>
        <ul className="mb-10 space-y-3">
          {a.agents.map((o) => (
            <li key={o.name} className="border-l-2 border-cyan-500/40 pl-4">
              <span className="font-semibold text-white">{o.name}</span>{' '}
              <span className="text-white/70">— {o.desc}</span>
            </li>
          ))}
        </ul>

        {/* Role */}
        <h3 className="mb-5 text-2xl font-bold text-white">{a.roleH}</h3>
        <div className="space-y-5 text-lg leading-relaxed text-white/80">
          {a.role.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
