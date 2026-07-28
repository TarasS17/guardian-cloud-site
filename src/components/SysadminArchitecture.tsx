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
  fr: {
    h: 'Architecture : un réseau neuronal pour l’administration système',
    intro: [
      'Sysadmin n’est ni un module unique ni un modèle unique. C’est un réseau neuronal dédié à l’administration système : une équipe d’officiers IA, chacun avec son propre domaine de responsabilité, commandant un ensemble d’agents d’exécution qui vivent sur vos serveurs. Ensemble, ils se comportent comme une équipe de sysadmins qui ne se fatigue jamais.',
      'Le travail circule du haut vers le bas. Un audit, un incident ou une demande de votre part entre par le sommet. L’officier en chef en comprend le sens, le découpe en étapes et achemine chaque étape vers le spécialiste qui connaît le mieux ce terrain. Rien n’atteint votre serveur avant que sa sécurité ait été vérifiée, et rien de risqué ne s’exécute sans votre accord.',
    ],
    officersH: 'Les officiers — pensée et orchestration',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'l’orchestrateur en chef et commandant de tout le module. Il reçoit l’audit, l’incident ou la tâche, comprend la situation, construit le plan, vérifie la sécurité de chaque commande et délègue le travail entre les spécialistes — et en cas de danger (cyberattaque ou virus), il appelle tout le module ITDR via l’ITDR Officer pour le résoudre. Il consolide aussi tous les logs et données en un rapport unique et reste en contact avec vous via l’assistant Cloud AI de votre interface. Vous pouvez demander à Cloud AI de faire venir le Sysadmin Officer dans un chat commun et tenir une réunion ou un point avec lui — pour régler ce qui vous préoccupe ou planifier le travail à venir.',
      },
      {
        name: 'GCP Officer',
        desc: 'le spécialiste Google Cloud. À l’aise avec gcloud, GCE et GKE, IAM, les règles de pare-feu et les comptes de service, il transforme un constat en action native et précise sur GCP.',
      },
      {
        name: 'AWS Officer',
        desc: 'le spécialiste Amazon Web Services. EC2, S3, IAM, groupes de sécurité, la CLI aws — il connaît les limites de la plateforme et ses pièges, et opère dans ce cadre.',
      },
      {
        name: 'Azure Officer',
        desc: 'le spécialiste Microsoft Azure. La CLI az, les machines virtuelles, les groupes de sécurité réseau, les groupes de ressources — il maîtrise la logique et le langage propres à Azure.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'le généraliste. Linux bare-metal, parcs on-prem et environnements hybrides sont son terrain ; il prend en charge tout ce qui n’est pas lié à un seul cloud, et vous soutient quand un environnement sort de l’ordinaire.',
      },
    ],
    agentsH: 'Les agents — les yeux et les mains des officiers sur vos serveurs',
    agents: [
      { name: 'Audit Agent', desc: 'rassemble les signaux pour l’audit — dix-huit contrôles qui dressent un tableau complet de l’hôte.' },
      { name: 'Monitoring Agent', desc: 'diffuse en continu les métriques de santé, afin que les officiers voient toujours l’état en direct.' },
      { name: 'Execution Agent', desc: 'exécute les commandes approuvées (d’abord en dry-run) et renvoie le résultat exact.' },
      { name: 'Antivirus Agent', desc: 'lance des scans ClamAV planifiés ; ce qu’il trouve part en quarantaine, jamais supprimé en silence.' },
      { name: 'Inventory Agent', desc: 'tient un inventaire en direct des paquets et services, pour qu’aucune dérive ne passe inaperçue.' },
      { name: 'Forensics Agent', desc: 'récupère les artefacts et les logs dont un incident a besoin, pour que l’analyse repose sur des faits.' },
      { name: 'Patch Agent', desc: 'applique les mises à jour et correctifs une fois approuvés, et vérifie la bonne santé du système.' },
      { name: 'Backup Agent', desc: 'prend un instantané avant tout changement risqué, pour qu’il y ait toujours un retour en arrière possible.' },
    ],
    roleH: 'Sysadmin — le module de contrôle de la plateforme',
    role: [
      'Lorsqu’un agent ou un officier repère des signes de cyberattaque ou de virus sur votre serveur, il le relaie instantanément au Sysadmin Officer, qui appelle immédiatement le module ITDR, lequel élimine complètement la menace. Ensuite, le module Sysadmin efface toutes les traces de l’incident et restaure vos serveurs dans leur état sain d’origine. Vos utilisateurs ne remarqueront même pas qu’un problème est survenu — car tout cela prend des minutes, voire des secondes.',
      'Le module Sysadmin pilote aussi chaque montée en gamme de vos serveurs. Vous voulez évoluer ? C’est fait. Le module réalise tout le travail et l’intégration des nouvelles fonctionnalités que vous avez en tête. Vous et Cloud AI ne fixez que la vision ; le Sysadmin Officer conduit tout le processus : AI Studio écrit l’architecture et le code nécessaires, et le Sysadmin Officer teste le tout et l’intègre à vos serveurs. La validation est effectuée par GLM-5.2, notre cerveau principal auto-hébergé — il examine chaque ligne de code pour en vérifier la justesse et les vulnérabilités à l’intérieur du contour, et produit des recommandations que le Sysadmin Officer applique intégralement. Et vous obtenez le meilleur résultat possible.',
    ],
    diag: {
      input: 'Audit · Incident · Votre tâche',
      tInput: 'Entrée',
      tChief: 'Officier en chef',
      tSpec: 'Spécialistes de plateforme',
      tAgents: 'Agents sur votre serveur',
      tConnected: 'Modules connectés',
      validation: 'Validation AI Studio : GLM-5.2 (auto-hébergé)',
    },
  },
  de: {
    h: 'Architektur: ein neuronales Netz für die Systemadministration',
    intro: [
      'Sysadmin ist weder ein einzelnes Modul noch ein einzelnes Modell. Es ist ein neuronales Netz für die Systemadministration: ein Team von KI-Offizieren, jeder mit eigenem Verantwortungsbereich, das eine Reihe von Ausführungsagenten befehligt, die auf Ihren Servern leben. Zusammen verhalten sie sich wie ein Team von Systemadministratoren, das nie ermüdet.',
      'Die Arbeit fließt von oben nach unten. Ein Audit, ein Vorfall oder eine Anfrage von Ihnen geht oben ein. Der Chief Officer versteht den Sinn, zerlegt ihn in Schritte und leitet jeden Schritt an den Spezialisten weiter, der dieses Terrain am besten kennt. Nichts erreicht Ihren Server, bevor seine Sicherheit geprüft wurde, und nichts Riskantes läuft ohne Ihr Wort.',
    ],
    officersH: 'Die Offiziere — Denken und Orchestrierung',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'der Chef-Orchestrator und Kommandeur des gesamten Moduls. Er empfängt das Audit, den Vorfall oder die Aufgabe, versteht die Lage, erstellt den Plan, prüft die Sicherheit jedes Befehls und verteilt die Arbeit unter den Spezialisten — und bei Gefahr (Cyberangriff oder Virus) ruft er über den ITDR Officer das gesamte ITDR-Modul zur Lösung. Er konsolidiert außerdem alle Logs und Daten zu einem einzigen Bericht und bleibt über den Cloud-AI-Assistenten in Ihrer Oberfläche mit Ihnen in Kontakt. Sie können Cloud AI bitten, den Sysadmin Officer in einen gemeinsamen Chat zu holen und mit ihm ein Meeting oder Briefing abzuhalten — um Anliegen zu klären oder die anstehende Arbeit zu planen.',
      },
      {
        name: 'GCP Officer',
        desc: 'der Google-Cloud-Spezialist. Versiert in gcloud, GCE und GKE, IAM, Firewall-Regeln und Service-Konten, verwandelt er einen Befund in die exakte, native GCP-Aktion.',
      },
      {
        name: 'AWS Officer',
        desc: 'der Amazon-Web-Services-Spezialist. EC2, S3, IAM, Security Groups, die aws-CLI — er kennt die Grenzen der Plattform und ihre Fallstricke und arbeitet innerhalb davon.',
      },
      {
        name: 'Azure Officer',
        desc: 'der Microsoft-Azure-Spezialist. Die az-CLI, virtuelle Maschinen, Network Security Groups, Resource Groups — versiert in Azures eigener Logik und Sprache.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'der Generalist. Bare-Metal-Linux, On-Prem-Bestände und hybride Umgebungen sind sein Zuhause; er übernimmt alles, was nicht an eine einzelne Cloud gebunden ist, und unterstützt Sie, wenn eine Umgebung untypisch ist.',
      },
    ],
    agentsH: 'Die Agenten — Augen und Hände der Offiziere auf Ihren Servern',
    agents: [
      { name: 'Audit Agent', desc: 'sammelt die Signale für das Audit — achtzehn Prüfungen, die ein vollständiges Bild des Hosts zeichnen.' },
      { name: 'Monitoring Agent', desc: 'streamt kontinuierlich Health-Metriken, sodass die Offiziere stets den Live-Zustand sehen.' },
      { name: 'Execution Agent', desc: 'führt genehmigte Befehle aus (zunächst als Dry-Run) und liefert das exakte Ergebnis zurück.' },
      { name: 'Antivirus Agent', desc: 'führt geplante ClamAV-Scans durch; Funde gehen in Quarantäne, nie still gelöscht.' },
      { name: 'Inventory Agent', desc: 'führt ein Live-Inventar von Paketen und Diensten, damit nichts unbemerkt abdriftet.' },
      { name: 'Forensics Agent', desc: 'zieht die Artefakte und Logs, die ein Vorfall braucht, damit die Analyse auf Fakten ruht.' },
      { name: 'Patch Agent', desc: 'spielt Updates und Patches nach Genehmigung ein und prüft, dass das System gesund ist.' },
      { name: 'Backup Agent', desc: 'erstellt vor jeder riskanten Änderung einen Snapshot, damit es immer einen Weg zurück gibt.' },
    ],
    roleH: 'Sysadmin — das Kontrollmodul der Plattform',
    role: [
      'Erkennt ein Agent oder Offizier Anzeichen eines Cyberangriffs oder Virus auf Ihrem Server, meldet er dies sofort an den Sysadmin Officer, der umgehend das ITDR-Modul ruft, das die Bedrohung vollständig beseitigt. Danach behebt das Sysadmin-Modul alle Nachwirkungen des Vorfalls und stellt Ihre Server in ihren ursprünglichen gesunden Zustand zurück. Ihre Nutzer werden nicht einmal bemerken, dass etwas nicht stimmte — denn das Ganze dauert Minuten, vielleicht Sekunden.',
      'Das Sysadmin-Modul treibt auch jedes Upgrade Ihrer Server voran. Wollen Sie skalieren? Erledigt. Das Modul führt die gesamte Arbeit und Integration der von Ihnen anvisierten neuen Funktionen aus. Sie und Cloud AI legen nur die Vision fest; der Sysadmin Officer steuert jeden Prozess: AI Studio schreibt die benötigte Architektur und den Code, und der Sysadmin Officer testet alles und integriert es in Ihre Server. Die Validierung erfolgt durch GLM-5.2, unser selbst gehostetes Haupt-Gehirn — es prüft jede Codezeile innerhalb des Konturs auf Korrektheit und Schwachstellen und erstellt Empfehlungen, die der Sysadmin Officer vollständig umsetzt. Und Sie erhalten das bestmögliche Ergebnis.',
    ],
    diag: {
      input: 'Audit · Vorfall · Ihre Aufgabe',
      tInput: 'Eingabe',
      tChief: 'Chef-Offizier',
      tSpec: 'Plattform-Spezialisten',
      tAgents: 'Agenten auf Ihrem Server',
      tConnected: 'Verbundene Module',
      validation: 'AI-Studio-Validierung: GLM-5.2 (selbst gehostet)',
    },
  },
  es: {
    h: 'Arquitectura: una red neuronal para la administración de sistemas',
    intro: [
      'Sysadmin no es un único módulo ni un único modelo. Es una red neuronal para la administración de sistemas: un equipo de oficiales de IA, cada uno con su propia área de responsabilidad, al mando de un conjunto de agentes de ejecución que residen en sus servidores. Juntos se comportan como un equipo de administradores de sistemas que nunca se cansa.',
      'El trabajo fluye de arriba hacia abajo. Una auditoría, un incidente o una solicitud suya entra por arriba. El oficial jefe le da sentido, lo divide en pasos y dirige cada paso al especialista que mejor conoce ese terreno. Nada llega a su servidor hasta que se ha comprobado su seguridad, y nada arriesgado se ejecuta sin su palabra.',
    ],
    officersH: 'Los oficiales — pensamiento y orquestación',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'el orquestador jefe y oficial al mando de todo el módulo. Recibe la auditoría, el incidente o la tarea, entiende la situación, elabora el plan, verifica la seguridad de cada comando y delega el trabajo entre los especialistas — y ante un peligro (un ciberataque o un virus) llama a todo el módulo ITDR a través del ITDR Officer para resolverlo. También consolida todos los registros y datos en un único informe y mantiene el contacto con usted a través del asistente Cloud AI en su interfaz. Puede pedirle a Cloud AI que traiga al Sysadmin Officer a un chat compartido y celebrar una reunión o una sesión informativa con él — para resolver lo que le preocupe o planificar el trabajo por venir.',
      },
      {
        name: 'GCP Officer',
        desc: 'el especialista en Google Cloud. Domina gcloud, GCE y GKE, IAM, reglas de firewall y cuentas de servicio, y convierte un hallazgo en la acción exacta y nativa de GCP.',
      },
      {
        name: 'AWS Officer',
        desc: 'el especialista en Amazon Web Services. EC2, S3, IAM, grupos de seguridad, la CLI de aws — conoce los límites de la plataforma y sus trampas, y trabaja dentro de ellos.',
      },
      {
        name: 'Azure Officer',
        desc: 'el especialista en Microsoft Azure. La CLI az, máquinas virtuales, grupos de seguridad de red, grupos de recursos — domina la lógica y el lenguaje propios de Azure.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'el generalista. Linux bare-metal, entornos on-prem e híbridos son su hogar; se encarga de todo lo que no está ligado a una sola nube, y le respalda cuando un entorno no es estándar.',
      },
    ],
    agentsH: 'Los agentes — los ojos y las manos de los oficiales en sus servidores',
    agents: [
      { name: 'Audit Agent', desc: 'reúne las señales para la auditoría — dieciocho comprobaciones que trazan un cuadro completo del host.' },
      { name: 'Monitoring Agent', desc: 'transmite métricas de salud de forma continua, para que los oficiales vean siempre el estado en vivo.' },
      { name: 'Execution Agent', desc: 'ejecuta los comandos aprobados (primero en dry-run) y devuelve el resultado exacto.' },
      { name: 'Antivirus Agent', desc: 'realiza escaneos programados con ClamAV; lo que encuentra va a cuarentena, nunca se elimina en silencio.' },
      { name: 'Inventory Agent', desc: 'mantiene un inventario en vivo de paquetes y servicios, para que nada se desvíe sin ser notado.' },
      { name: 'Forensics Agent', desc: 'extrae los artefactos y registros que necesita un incidente, para que el análisis se apoye en hechos.' },
      { name: 'Patch Agent', desc: 'aplica actualizaciones y parches una vez aprobados, y verifica que el sistema esté sano.' },
      { name: 'Backup Agent', desc: 'toma una instantánea antes de cualquier cambio arriesgado, para que siempre haya un camino de vuelta.' },
    ],
    roleH: 'Sysadmin — el módulo de control de la plataforma',
    role: [
      'Cuando un agente u oficial detecta signos de un ciberataque o un virus en su servidor, lo transmite al instante al Sysadmin Officer, que llama de inmediato al módulo ITDR, el cual elimina por completo la amenaza. Después, el módulo Sysadmin borra todas las secuelas del incidente y restaura sus servidores a su estado saludable original. Sus usuarios ni siquiera notarán que algo estuvo mal, porque todo esto ocurre en minutos, quizá segundos.',
      'El módulo Sysadmin también impulsa cada mejora de sus servidores. ¿Quiere escalar? Hecho. El módulo realiza todo el trabajo y la integración de las nuevas funciones que tenga en mente. Usted y Cloud AI solo definen la visión; el Sysadmin Officer dirige todo el proceso: AI Studio escribe la arquitectura y el código necesarios, y el Sysadmin Officer lo prueba todo y lo integra en sus servidores. La validación la realiza GLM-5.2, nuestro cerebro principal autoalojado, que revisa cada línea de código en busca de corrección y vulnerabilidades dentro del contorno y produce recomendaciones que el Sysadmin Officer implementa por completo. Y usted obtiene el mejor resultado posible.',
    ],
    diag: {
      input: 'Auditoría · Incidente · Su tarea',
      tInput: 'Entrada',
      tChief: 'Oficial jefe',
      tSpec: 'Especialistas de plataforma',
      tAgents: 'Agentes en su servidor',
      tConnected: 'Módulos conectados',
      validation: 'Validación de AI Studio: GLM-5.2 (autoalojado)',
    },
  },
  it: {
    h: 'Architettura: una rete neurale per l’amministrazione dei sistemi',
    intro: [
      'Sysadmin non è un unico modulo né un unico modello. È una rete neurale per l’amministrazione dei sistemi: un team di ufficiali IA, ciascuno con la propria area di responsabilità, al comando di un insieme di agenti esecutivi che vivono sui vostri server. Insieme si comportano come un team di system administrator che non si stanca mai.',
      'Il lavoro scorre dall’alto verso il basso. Un audit, un incidente o una richiesta da parte vostra entra dall’alto. L’ufficiale capo ne coglie il senso, lo scompone in passaggi e instrada ciascun passaggio verso lo specialista che conosce meglio quel terreno. Nulla raggiunge il vostro server prima che la sua sicurezza sia stata verificata, e nulla di rischioso viene eseguito senza la vostra parola.',
    ],
    officersH: 'Gli ufficiali — pensiero e orchestrazione',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'l’orchestratore capo e ufficiale al comando dell’intero modulo. Riceve l’audit, l’incidente o il compito, comprende la situazione, costruisce il piano, verifica la sicurezza di ogni comando e delega il lavoro tra gli specialisti — e in caso di pericolo (attacco informatico o virus) chiama l’intero modulo ITDR tramite l’ITDR Officer per risolverlo. Consolida inoltre tutti i log e i dati in un unico report e rimane in contatto con voi tramite l’assistente Cloud AI nella vostra interfaccia. Potete chiedere a Cloud AI di portare il Sysadmin Officer in una chat condivisa e tenere una riunione o un briefing con lui — per risolvere ciò che vi preoccupa o pianificare il lavoro futuro.',
      },
      {
        name: 'GCP Officer',
        desc: 'lo specialista di Google Cloud. A suo agio con gcloud, GCE e GKE, IAM, regole firewall e service account, trasforma una scoperta nell’esatta azione nativa GCP.',
      },
      {
        name: 'AWS Officer',
        desc: 'lo specialista di Amazon Web Services. EC2, S3, IAM, security group, la CLI aws — conosce i confini della piattaforma e le sue insidie, e opera al loro interno.',
      },
      {
        name: 'Azure Officer',
        desc: 'lo specialista di Microsoft Azure. La CLI az, macchine virtuali, network security group, resource group — padroneggia la logica e il linguaggio propri di Azure.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'il generalista. Linux bare-metal, parchi on-prem e ambienti ibridi sono il suo terreno; si occupa di tutto ciò che non è legato a un unico cloud e vi supporta quando un ambiente è non standard.',
      },
    ],
    agentsH: 'Gli agenti — gli occhi e le mani degli ufficiali sui vostri server',
    agents: [
      { name: 'Audit Agent', desc: 'raccoglie i segnali per l’audit — diciotto controlli che tracciano un quadro completo dell’host.' },
      { name: 'Monitoring Agent', desc: 'trasmette in continuo le metriche di salute, così gli ufficiali vedono sempre lo stato in tempo reale.' },
      { name: 'Execution Agent', desc: 'esegue i comandi approvati (prima in dry-run) e restituisce il risultato esatto.' },
      { name: 'Antivirus Agent', desc: 'esegue scansioni ClamAV pianificate; ciò che trova va in quarantena, mai eliminato silenziosamente.' },
      { name: 'Inventory Agent', desc: 'mantiene un inventario in tempo reale di pacchetti e servizi, così nulla si discosta inosservato.' },
      { name: 'Forensics Agent', desc: 'recupera gli artefatti e i log di cui un incidente ha bisogno, così l’analisi si basa sui fatti.' },
      { name: 'Patch Agent', desc: 'applica aggiornamenti e patch una volta approvati, e verifica che il sistema sia sano.' },
      { name: 'Backup Agent', desc: 'esegue uno snapshot prima di ogni modifica rischiosa, così esiste sempre una via di ritorno.' },
    ],
    roleH: 'Sysadmin — il modulo di controllo della piattaforma',
    role: [
      'Quando un agente o un ufficiale rileva segni di un attacco informatico o di un virus sul vostro server, li trasmette all’istante al Sysadmin Officer, che chiama immediatamente il modulo ITDR, il quale elimina completamente la minaccia. Dopodiché, il modulo Sysadmin cancella ogni conseguenza dell’incidente e riporta i vostri server al loro stato sano originale. I vostri utenti non si accorgeranno nemmeno che qualcosa non andava — perché tutto ciò richiede minuti, forse secondi.',
      'Il modulo Sysadmin guida anche ogni aggiornamento dei vostri server. Volete scalare? Fatto. Il modulo esegue tutto il lavoro e l’integrazione delle nuove funzionalità che avete in mente. Voi e Cloud AI definite solo la visione; il Sysadmin Officer gestisce ogni processo: AI Studio scrive l’architettura e il codice necessari, e il Sysadmin Officer testa tutto e lo integra nei vostri server. La validazione è eseguita da GLM-5.2, il nostro cervello principale self-hosted — che esamina ogni riga di codice per correttezza e vulnerabilità all’interno del contorno e produce raccomandazioni che il Sysadmin Officer applica integralmente. E voi ottenete il miglior risultato possibile.',
    ],
    diag: {
      input: 'Audit · Incidente · Il vostro compito',
      tInput: 'Ingresso',
      tChief: 'Ufficiale capo',
      tSpec: 'Specialisti di piattaforma',
      tAgents: 'Agenti sul vostro server',
      tConnected: 'Moduli collegati',
      validation: 'Validazione AI Studio: GLM-5.2 (self-hosted)',
    },
  },
  ja: {
    h: 'アーキテクチャ：システム管理のためのニューラルネットワーク',
    intro: [
      'Sysadminは単一のモジュールでも単一のモデルでもありません。これはシステム管理のためのニューラルネットワークです——それぞれ独自の責任領域を持つAIオフィサーのチームが、サーバー上で稼働する実行エージェント群を指揮します。全体として、決して疲れることのないシステム管理者チームのように機能します。',
      '作業はトップダウンで流れます。監査、インシデント、またはあなたからの依頼が最上位に入ります。チーフオフィサーがその意味を理解し、手順に分解し、各ステップをその領域を最もよく知る専門officerに振り分けます。安全性が確認されるまで何もサーバーには到達せず、あなたの承認なしにリスクのある操作は実行されません。',
    ],
    officersH: 'オフィサー——思考とオーケストレーション',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'モジュール全体の主指揮官かつオーケストレーター。監査、インシデント、タスクを受け取り、状況を理解し、計画を立て、すべてのコマンドの安全性を審査し、専門家間で作業を分配します。危険（サイバー攻撃やウイルス）を検知すると、ITDR Officerを通じてITDRモジュール全体を呼び出して解決します。すべてのログとデータを単一のレポートに統合し、インターフェース上のCloud AIアシスタントを通じてあなたと連絡を保ちます。Cloud AIにSysadmin Officerを共有チャットに呼び込むよう依頼し、懸念事項の解決や今後の作業計画についてミーティングやブリーフィングを行うこともできます。',
      },
      {
        name: 'GCP Officer',
        desc: 'Google Cloud専門officer。gcloud、GCE、GKE、IAM、ファイアウォールルール、サービスアカウントに精通し、発見事項を正確でネイティブなGCPのアクションに変換します。',
      },
      {
        name: 'AWS Officer',
        desc: 'Amazon Web Services専門officer。EC2、S3、IAM、セキュリティグループ、aws CLI——プラットフォームの限界と落とし穴を熟知し、その範囲内で作業します。',
      },
      {
        name: 'Azure Officer',
        desc: 'Microsoft Azure専門officer。az CLI、仮想マシン、ネットワークセキュリティグループ、リソースグループ——Azure独自のロジックと言語に精通しています。',
      },
      {
        name: 'All-Platform Officer',
        desc: 'ゼネラリスト。ベアメタルLinux、オンプレミス環境、ハイブリッド環境が主戦場であり、単一クラウドに紐づかないすべてを引き受け、環境が非標準的な場合にサポートします。',
      },
    ],
    agentsH: 'エージェント——サーバー上でオフィサーの目と手となる存在',
    agents: [
      { name: 'Audit Agent', desc: '監査のための信号を収集します——ホストの全体像を描く18項目のチェック。' },
      { name: 'Monitoring Agent', desc: 'ヘルスメトリクスを継続的にストリーミングし、オフィサーが常にライブの状態を把握できるようにします。' },
      { name: 'Execution Agent', desc: '承認されたコマンドを実行し（まずdry-run）、正確な結果を返します。' },
      { name: 'Antivirus Agent', desc: '定期的なClamAVスキャンを実行します。検出されたものは隔離され、無断で削除されることはありません。' },
      { name: 'Inventory Agent', desc: 'パッケージとサービスのライブ台帳を維持し、変化が見過ごされないようにします。' },
      { name: 'Forensics Agent', desc: 'インシデントに必要なアーティファクトとログを取得し、分析が事実に基づくようにします。' },
      { name: 'Patch Agent', desc: '承認後にアップデートとパッチを適用し、システムが健全であることを確認します。' },
      { name: 'Backup Agent', desc: 'リスクのある変更の前にスナップショットを取得し、常に元に戻せる状態を確保します。' },
    ],
    roleH: 'Sysadmin——プラットフォームの制御モジュール',
    role: [
      'エージェントやオフィサーがあなたのサーバー上でサイバー攻撃やウイルスの兆候を検知すると、即座にSysadmin Officerに伝達され、すぐさまITDRモジュールを呼び出して脅威を完全に除去します。その後、Sysadminモジュールはインシデントのあらゆる影響を除去し、サーバーを元の健全な状態に復元します。ユーザーは何も異常があったことに気づくことすらありません——すべてが数分、場合によっては数秒で完了するからです。',
      'Sysadminモジュールはまた、サーバーのあらゆるアップグレードを推進します。スケールしたいですか？お任せください。モジュールがあなたの構想する新機能のすべての作業と統合を実行します。あなたとCloud AIはビジョンを設定するだけで、Sysadmin Officerがすべてのプロセスを運用します：AI Studioが必要なアーキテクチャとコードを記述し、Sysadmin Officerがすべてをテストしてサーバーに統合します。検証は自社ホスティングの主脳であるGLM-5.2が行います——コンター内のすべてのコード行の正確性と脆弱性をレビューし、Sysadmin Officerが完全に実装する推奨事項を生成します。そして、あなたは最良の結果を得られます。',
    ],
    diag: {
      input: '監査・インシデント・あなたのタスク',
      tInput: '入力',
      tChief: 'チーフオフィサー',
      tSpec: 'プラットフォーム専門officer',
      tAgents: 'サーバー上のエージェント',
      tConnected: '連携モジュール',
      validation: 'AI Studio検証：GLM-5.2（自社ホスティング）',
    },
  },
  uk: {
    h: 'Архітектура: нейромережа системного адміністрування',
    intro: [
      'Sysadmin — це не один модуль і не одна модель. Це нейромережа системного адміністрування: команда AI-офіцерів, у кожного своя зона відповідальності, а під їхнім керівництвом — агенти-виконавці на ваших серверах. Разом вони поводяться як команда системних адміністраторів, яка ніколи не втомлюється.',
      'Робота йде згори вниз. Нагорі входить аудит, інцидент або ваше завдання. Головний офіцер осмислює його, розбиває на кроки і спрямовує кожен крок тому спеціалісту, який знає цю територію найкраще. Ніщо не доходить до сервера, поки не перевірено безпеку, і ніщо ризиковане не виконується без вашого слова.',
    ],
    officersH: 'Офіцери — мислення та оркестрація',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'головний оркестратор і командувач офіцер усього модуля. Приймає аудит, інцидент чи задачу, розуміє ситуацію, будує план, перевіряє безпеку кожної команди і розподіляє роботу між спеціалістами — а в разі небезпеки (кібератака чи вірус) викликає через ITDR Officer весь модуль ITDR для вирішення проблеми. Він же зводить усі логи й дані в єдиний звіт і підтримує зв’язок з вами через помічника Cloud AI у вашому інтерфейсі. Ви можете попросити Cloud AI викликати Sysadmin Officer у спільний чат і провести нараду чи брифінг разом з ним — вирішуючи всі питання, що вас турбують, або плануючи майбутню роботу.',
      },
      { name: 'GCP Officer', desc: 'спеціаліст з Google Cloud. Вільно володіє gcloud, GCE та GKE, IAM, правилами файрвола, сервіс-акаунтами і перетворює знахідку на точну, «рідну» для GCP дію.' },
      { name: 'AWS Officer', desc: 'спеціаліст з Amazon Web Services. EC2, S3, IAM, security groups, aws CLI — знає межі платформи та її підводні камені й працює в їхніх рамках.' },
      { name: 'Azure Officer', desc: 'спеціаліст з Microsoft Azure. az CLI, віртуальні машини, network security groups, resource groups — вільно говорить «мовою» Azure.' },
      { name: 'All-Platform Officer', desc: 'універсал. Bare-metal Linux, on-prem та змішані середовища — його дім; бере все, що не прив’язане до однієї хмари, і підстраховує, коли середовище нестандартне.' },
    ],
    agentsH: 'Агенти — очі та руки офіцерів на ваших серверах',
    agents: [
      { name: 'Audit Agent', desc: 'збирає сигнали для аудиту: вісімнадцять перевірок, що дають повну картину хоста.' },
      { name: 'Monitoring Agent', desc: 'безперервно стрімить метрики, щоб офіцери завжди бачили живу картину.' },
      { name: 'Execution Agent', desc: 'виконує схвалені команди (спочатку dry-run) і повертає точний результат.' },
      { name: 'Antivirus Agent', desc: 'планові ClamAV-скани; знайдене — у карантин, нічого не видаляючи мовчки.' },
      { name: 'Inventory Agent', desc: 'веде живу інвентаризацію пакетів і служб, щоб нічого не «зникло» непомітно.' },
      { name: 'Forensics Agent', desc: 'піднімає артефакти й логи для розбору інциденту, щоб аналіз спирався на факти.' },
      { name: 'Patch Agent', desc: 'накочує оновлення й патчі після схвалення і підтверджує, що система здорова.' },
      { name: 'Backup Agent', desc: 'робить знімок перед будь-якою ризикованою зміною, щоб завжди був шлях назад.' },
    ],
    roleH: 'Sysadmin — керуючий модуль платформи',
    role: [
      'Коли агент чи офіцер виявляє ознаки кібератаки або вірусу на вашому сервері, він миттєво передає це Sysadmin Officer, і той одразу викликає ITDR Module, який повністю усуває проблему. Після цього Sysadmin Module усуває всі наслідки інциденту і відновлює роботу ваших серверів у початковий стан. Ваші користувачі навіть не помітять, що були якісь проблеми, — бо це займе лічені хвилини, а можливо, і секунди.',
      'Sysadmin Module веде й усі роботи з модернізації ваших серверів. Хочете масштабуватися? Будь ласка. Модуль повністю проведе всі роботи та інтеграцію нових функцій, які ви задумали. Ви та Cloud AI задаєте лише ваше бачення, а Sysadmin Officer керує всіма процесами: AI Studio пише потрібну архітектуру та код, Sysadmin Officer усе тестує та інтегрує у ваші сервери. Валідацію виконує GLM-5.2, наш self-hosted головний мозок — він перевіряє кожен рядок коду на коректність та вразливості всередині контуру й видає рекомендації, які Sysadmin Officer реалізує повністю. І ви отримуєте найкращий результат.',
    ],
    diag: {
      input: 'Аудит · Інцидент · Ваша задача',
      tInput: 'Вхід',
      tChief: 'Головний офіцер',
      tSpec: 'Платформні спеціалісти',
      tAgents: 'Агенти на вашому сервері',
      tConnected: 'Пов’язані модулі',
      validation: 'Валідація AI Studio: GLM-5.2 (self-hosted)',
    },
  },
  sr: {
    h: 'Arhitektura: neuronska mreža za administraciju sistema',
    intro: [
      'Sysadmin nije jedan modul niti jedan model. To je neuronska mreža za administraciju sistema: tim AI oficira, svaki sa sopstvenom oblašću odgovornosti, koji komanduju skupom izvršnih agenata koji žive na vašim serverima. Zajedno se ponašaju kao tim sistem administratora koji se nikada ne umara.',
      'Rad teče od vrha ka dnu. Revizija, incident ili vaš zahtev ulaze na vrhu. Glavni oficir shvata smisao, deli ga na korake i usmerava svaki korak specijalisti koji najbolje poznaje to područje. Ništa ne stiže do vašeg servera dok se ne proveri njegova bezbednost, i ništa rizično se ne izvršava bez vaše reči.',
    ],
    officersH: 'Oficiri — razmišljanje i orkestracija',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'glavni orkestrator i komandujući oficir celog modula. Prima reviziju, incident ili zadatak, razume situaciju, gradi plan, proverava bezbednost svake komande i deli posao među specijalistima — a u opasnosti (sajber-napad ili virus) poziva ceo ITDR modul preko ITDR Officer-a da to reši. Takođe konsoliduje sve logove i podatke u jedinstven izveštaj i ostaje u kontaktu s vama preko Cloud AI asistenta u vašem interfejsu. Možete zamoliti Cloud AI da dovede Sysadmin Officer-a u zajednički chat i održite sastanak ili brifing s njim — rešavajući sve što vas brine ili planirajući predstojeći posao.',
      },
      { name: 'GCP Officer', desc: 'specijalista za Google Cloud. Tečno vlada gcloud-om, GCE i GKE, IAM-om, firewall pravilima i servisnim nalozima i pretvara nalaz u tačnu, nativnu GCP akciju.' },
      { name: 'AWS Officer', desc: 'specijalista za Amazon Web Services. EC2, S3, IAM, security grupe, aws CLI — poznaje granice platforme i njene zamke i radi u tim okvirima.' },
      { name: 'Azure Officer', desc: 'specijalista za Microsoft Azure. az CLI, virtuelne mašine, network security grupe, resource grupe — tečno govori „jezikom“ Azure-a.' },
      { name: 'All-Platform Officer', desc: 'generalista. Bare-metal Linux, on-prem i hibridna okruženja su njegov dom; preuzima sve što nije vezano za jedan cloud i pomaže kada je okruženje nestandardno.' },
    ],
    agentsH: 'Agenti — oči i ruke oficira na vašim serverima',
    agents: [
      { name: 'Audit Agent', desc: 'prikuplja signale za reviziju — osamnaest provera koje daju potpunu sliku hosta.' },
      { name: 'Monitoring Agent', desc: 'neprekidno strimuje metrike zdravlja, tako da oficiri uvek vide stanje uživo.' },
      { name: 'Execution Agent', desc: 'izvršava odobrene komande (prvo dry-run) i vraća tačan rezultat.' },
      { name: 'Antivirus Agent', desc: 'pokreće planirane ClamAV skenove; pronađeno ide u karantin, nikad se tiho ne briše.' },
      { name: 'Inventory Agent', desc: 'vodi živi inventar paketa i servisa, tako da ništa ne odstupi neopaženo.' },
      { name: 'Forensics Agent', desc: 'izvlači artefakte i logove koji su potrebni incidentu, tako da se analiza oslanja na činjenice.' },
      { name: 'Patch Agent', desc: 'primenjuje ažuriranja i zakrpe nakon odobrenja i proverava da je sistem zdrav.' },
      { name: 'Backup Agent', desc: 'pravi snimak pre bilo koje rizične promene, tako da uvek postoji put nazad.' },
    ],
    roleH: 'Sysadmin — kontrolni modul platforme',
    role: [
      'Kada agent ili oficir uoči znake sajber-napada ili virusa na vašem serveru, momentalno to prenosi Sysadmin Officer-u, koji odmah poziva ITDR modul, koji potpuno uklanja pretnju. Nakon toga, Sysadmin modul uklanja sve posledice incidenta i vraća vaše servere u prvobitno zdravo stanje. Vaši korisnici neće ni primetiti da je nešto bilo pogrešno — jer sve to traje minute, možda sekunde.',
      'Sysadmin modul takođe vodi svaku nadogradnju vaših servera. Želite da skalirate? Gotovo. Modul obavlja sav posao i integraciju novih funkcija koje imate na umu. Vi i Cloud AI samo postavljate viziju; Sysadmin Officer vodi sve procese: AI Studio piše potrebnu arhitekturu i kod, a Sysadmin Officer sve to testira i integriše u vaše servere. Validaciju sprovodi GLM-5.2, naš samostalno hostovan glavni mozak — pregleda svaku liniju koda radi ispravnosti i ranjivosti unutar konture i daje preporuke koje Sysadmin Officer u potpunosti sprovodi. I vi dobijate najbolji mogući rezultat.',
    ],
    diag: {
      input: 'Revizija · Incident · Vaš zadatak',
      tInput: 'Ulaz',
      tChief: 'Glavni oficir',
      tSpec: 'Platformski specijalisti',
      tAgents: 'Agenti na vašem serveru',
      tConnected: 'Povezani moduli',
      validation: 'Validacija AI Studio: GLM-5.2 (samostalno hostovan)',
    },
  },
  pt: {
    h: 'Arquitetura: uma rede neural para a administração de sistemas',
    intro: [
      'O Sysadmin não é um único módulo nem um único modelo. É uma rede neural para a administração de sistemas: uma equipa de oficiais de IA, cada um com a sua própria área de responsabilidade, comandando um conjunto de agentes de execução que vivem nos seus servidores. Juntos, comportam-se como uma equipa de administradores de sistemas que nunca se cansa.',
      'O trabalho flui de cima para baixo. Uma auditoria, um incidente ou um pedido seu entra pelo topo. O oficial-chefe compreende o significado, divide-o em etapas e encaminha cada etapa para o especialista que melhor conhece esse terreno. Nada chega ao seu servidor antes de a sua segurança ser verificada, e nada arriscado é executado sem a sua palavra.',
    ],
    officersH: 'Os oficiais — pensamento e orquestração',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'o orquestrador-chefe e oficial comandante de todo o módulo. Recebe a auditoria, o incidente ou a tarefa, compreende a situação, elabora o plano, verifica a segurança de cada comando e delega o trabalho entre os especialistas — e perante um perigo (um ciberataque ou um vírus) chama todo o módulo ITDR através do ITDR Officer para o resolver. Também consolida todos os registos e dados num único relatório e mantém contacto consigo através do assistente Cloud AI na sua interface. Pode pedir ao Cloud AI que traga o Sysadmin Officer para um chat partilhado e realizar uma reunião ou briefing com ele — resolvendo o que o preocupa ou planeando o trabalho futuro.',
      },
      {
        name: 'GCP Officer',
        desc: 'o especialista em Google Cloud. Fluente em gcloud, GCE e GKE, IAM, regras de firewall e contas de serviço, transforma uma descoberta na ação exata e nativa do GCP.',
      },
      {
        name: 'AWS Officer',
        desc: 'o especialista em Amazon Web Services. EC2, S3, IAM, security groups, a CLI aws — conhece os limites da plataforma e as suas armadilhas, e trabalha dentro deles.',
      },
      {
        name: 'Azure Officer',
        desc: 'o especialista em Microsoft Azure. A CLI az, máquinas virtuais, network security groups, resource groups — fluente na lógica e linguagem próprias do Azure.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'o generalista. Linux bare-metal, ambientes on-prem e híbridos são o seu terreno; assume tudo o que não está ligado a uma única cloud, e apoia-o quando um ambiente é fora do padrão.',
      },
    ],
    agentsH: 'Os agentes — os olhos e as mãos dos oficiais nos seus servidores',
    agents: [
      { name: 'Audit Agent', desc: 'reúne os sinais para a auditoria — dezoito verificações que traçam um quadro completo do host.' },
      { name: 'Monitoring Agent', desc: 'transmite métricas de saúde continuamente, para que os oficiais vejam sempre o estado em direto.' },
      { name: 'Execution Agent', desc: 'executa os comandos aprovados (primeiro em dry-run) e devolve o resultado exato.' },
      { name: 'Antivirus Agent', desc: 'executa scans ClamAV agendados; o que encontra vai para quarentena, nunca é apagado silenciosamente.' },
      { name: 'Inventory Agent', desc: 'mantém um inventário em direto de pacotes e serviços, para que nada se desvie sem ser notado.' },
      { name: 'Forensics Agent', desc: 'extrai os artefactos e registos de que um incidente necessita, para que a análise assente em factos.' },
      { name: 'Patch Agent', desc: 'aplica atualizações e patches depois de aprovados, e verifica se o sistema está saudável.' },
      { name: 'Backup Agent', desc: 'faz um snapshot antes de qualquer alteração arriscada, para que haja sempre um caminho de volta.' },
    ],
    roleH: 'Sysadmin — o módulo de controlo da plataforma',
    role: [
      'Quando um agente ou oficial deteta sinais de um ciberataque ou de um vírus no seu servidor, transmite-o instantaneamente ao Sysadmin Officer, que chama de imediato o módulo ITDR, o qual elimina completamente a ameaça. Depois, o módulo Sysadmin apaga todos os efeitos do incidente e restaura os seus servidores ao seu estado saudável original. Os seus utilizadores nem sequer notarão que algo estava errado — porque tudo isto demora minutos, talvez segundos.',
      'O módulo Sysadmin também conduz todas as melhorias dos seus servidores. Quer escalar? Está feito. O módulo realiza todo o trabalho e a integração das novas funcionalidades que tem em mente. Você e o Cloud AI apenas definem a visão; o Sysadmin Officer gere todos os processos: o AI Studio escreve a arquitetura e o código necessários, e o Sysadmin Officer testa tudo e integra-o nos seus servidores. A validação é feita pelo GLM-5.2, o nosso cérebro principal autoalojado — que revê cada linha de código quanto à correção e vulnerabilidades dentro do contorno e produz recomendações que o Sysadmin Officer implementa na totalidade. E obtém o melhor resultado possível.',
    ],
    diag: {
      input: 'Auditoria · Incidente · A sua tarefa',
      tInput: 'Entrada',
      tChief: 'Oficial-chefe',
      tSpec: 'Especialistas de plataforma',
      tAgents: 'Agentes no seu servidor',
      tConnected: 'Módulos ligados',
      validation: 'Validação AI Studio: GLM-5.2 (autoalojado)',
    },
  },
  hi: {
    h: 'आर्किटेक्चर: सिस्टम प्रशासन के लिए एक न्यूरल नेटवर्क',
    intro: [
      'Sysadmin कोई एक मॉड्यूल या एक मॉडल नहीं है। यह सिस्टम प्रशासन के लिए एक न्यूरल नेटवर्क है: AI ऑफिसरों की एक टीम, जिनमें से हर एक की अपनी जिम्मेदारी का क्षेत्र है, जो आपके सर्वरों पर रहने वाले निष्पादन एजेंटों के समूह की कमान संभालते हैं। साथ मिलकर वे ऐसी सिस्टम एडमिनिस्ट्रेटर टीम की तरह काम करते हैं जो कभी थकती नहीं।',
      'काम ऊपर से नीचे की ओर बहता है। एक ऑडिट, एक घटना, या आपकी ओर से एक अनुरोध सबसे ऊपर आता है। चीफ ऑफिसर उसका अर्थ समझता है, उसे चरणों में तोड़ता है, और हर चरण को उस विशेषज्ञ के पास भेजता है जो उस क्षेत्र को सबसे अच्छी तरह जानता है। जब तक सुरक्षा की जाँच नहीं हो जाती, तब तक कुछ भी आपके सर्वर तक नहीं पहुँचता, और आपकी अनुमति के बिना कोई भी जोखिम भरा काम नहीं होता।',
    ],
    officersH: 'ऑफिसर — सोच और समन्वय',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'पूरे मॉड्यूल का मुख्य समन्वयक और कमांडिंग ऑफिसर। यह ऑडिट, घटना या कार्य प्राप्त करता है, स्थिति को समझता है, योजना बनाता है, हर कमांड की सुरक्षा जाँचता है और विशेषज्ञों के बीच काम बाँटता है — और खतरे (साइबर हमला या वायरस) की स्थिति में यह ITDR Officer के माध्यम से पूरे ITDR मॉड्यूल को बुलाकर समस्या हल करता है। यह सभी लॉग और डेटा को एक ही रिपोर्ट में संकलित भी करता है और आपके इंटरफ़ेस में Cloud AI सहायक के माध्यम से आपसे संपर्क में रहता है। आप Cloud AI से Sysadmin Officer को साझा चैट में लाने और उसके साथ बैठक या ब्रीफिंग करने के लिए कह सकते हैं — चाहे कोई चिंता सुलझानी हो या आगे के काम की योजना बनानी हो।',
      },
      {
        name: 'GCP Officer',
        desc: 'Google Cloud विशेषज्ञ। gcloud, GCE और GKE, IAM, फ़ायरवॉल नियमों और सर्विस अकाउंट में निपुण, यह किसी खोज को सटीक, मूल GCP कार्रवाई में बदल देता है।',
      },
      {
        name: 'AWS Officer',
        desc: 'Amazon Web Services विशेषज्ञ। EC2, S3, IAM, सिक्योरिटी ग्रुप्स, aws CLI — यह प्लेटफ़ॉर्म की सीमाओं और उसकी बारीकियों को जानता है और उन्हीं के भीतर काम करता है।',
      },
      {
        name: 'Azure Officer',
        desc: 'Microsoft Azure विशेषज्ञ। az CLI, वर्चुअल मशीनें, नेटवर्क सिक्योरिटी ग्रुप्स, रिसोर्स ग्रुप्स — Azure की अपनी तर्कशैली और भाषा में निपुण।',
      },
      {
        name: 'All-Platform Officer',
        desc: 'जनरलिस्ट। बेयर-मेटल Linux, ऑन-प्रेम और हाइब्रिड वातावरण इसका क्षेत्र है; यह हर वह काम संभालता है जो किसी एक क्लाउड से जुड़ा नहीं है, और जब वातावरण गैर-मानक हो तो आपका साथ देता है।',
      },
    ],
    agentsH: 'एजेंट — आपके सर्वरों पर ऑफिसरों की आँखें और हाथ',
    agents: [
      { name: 'Audit Agent', desc: 'ऑडिट के लिए संकेत इकट्ठा करता है — अठारह जाँचें जो होस्ट की पूरी तस्वीर दिखाती हैं।' },
      { name: 'Monitoring Agent', desc: 'लगातार स्वास्थ्य मेट्रिक्स स्ट्रीम करता है, ताकि ऑफिसर हमेशा लाइव स्थिति देख सकें।' },
      { name: 'Execution Agent', desc: 'स्वीकृत कमांड निष्पादित करता है (पहले dry-run) और सटीक परिणाम लौटाता है।' },
      { name: 'Antivirus Agent', desc: 'निर्धारित ClamAV स्कैन चलाता है; जो मिलता है वह क्वारंटीन में जाता है, चुपचाप कभी नहीं हटाया जाता।' },
      { name: 'Inventory Agent', desc: 'पैकेजों और सेवाओं की लाइव इन्वेंटरी रखता है, ताकि कुछ भी अनदेखा न रहे।' },
      { name: 'Forensics Agent', desc: 'घटना के लिए आवश्यक आर्टिफैक्ट्स और लॉग निकालता है, ताकि विश्लेषण तथ्यों पर आधारित हो।' },
      { name: 'Patch Agent', desc: 'स्वीकृति के बाद अपडेट और पैच लागू करता है, और पुष्टि करता है कि सिस्टम स्वस्थ है।' },
      { name: 'Backup Agent', desc: 'किसी भी जोखिम भरे बदलाव से पहले एक स्नैपशॉट लेता है, ताकि हमेशा वापस लौटने का रास्ता रहे।' },
    ],
    roleH: 'Sysadmin — प्लेटफ़ॉर्म का नियंत्रण मॉड्यूल',
    role: [
      'जब कोई एजेंट या ऑफिसर आपके सर्वर पर साइबर हमले या वायरस के संकेत देखता है, तो वह तुरंत इसे Sysadmin Officer तक पहुँचाता है, और यह तुरंत ITDR मॉड्यूल को बुलाता है, जो खतरे को पूरी तरह हटा देता है। इसके बाद, Sysadmin मॉड्यूल घटना के हर प्रभाव को साफ करता है और आपके सर्वरों को उनकी मूल स्वस्थ स्थिति में बहाल करता है। आपके उपयोगकर्ताओं को कुछ गलत होने का एहसास तक नहीं होगा — क्योंकि पूरी प्रक्रिया मिनटों, शायद सेकंडों में पूरी हो जाती है।',
      'Sysadmin मॉड्यूल आपके सर्वरों के हर अपग्रेड को भी संचालित करता है। स्केल करना चाहते हैं? हो गया। मॉड्यूल आपकी सोची हुई नई सुविधाओं का सारा काम और एकीकरण करता है। आप और Cloud AI केवल दृष्टिकोण तय करते हैं; Sysadmin Officer हर प्रक्रिया चलाता है: AI Studio आवश्यक आर्किटेक्चर और कोड लिखता है, और Sysadmin Officer सब कुछ टेस्ट करके आपके सर्वरों में एकीकृत करता है। सत्यापन हमारे सेल्फ-होस्टेड मुख्य मस्तिष्क GLM-5.2 द्वारा किया जाता है — यह कॉन्टूर के भीतर कोड की हर पंक्ति की शुद्धता और कमजोरियों की समीक्षा करता है और सिफारिशें देता है जिन्हें Sysadmin Officer पूरी तरह लागू करता है। और आपको सर्वोत्तम संभव परिणाम मिलता है।',
    ],
    diag: {
      input: 'ऑडिट · घटना · आपका कार्य',
      tInput: 'इनपुट',
      tChief: 'चीफ ऑफिसर',
      tSpec: 'प्लेटफ़ॉर्म विशेषज्ञ',
      tAgents: 'आपके सर्वर पर एजेंट',
      tConnected: 'जुड़े हुए मॉड्यूल',
      validation: 'AI Studio सत्यापन: GLM-5.2 (सेल्फ-होस्टेड)',
    },
  },
  tr: {
    h: 'Mimari: sistem yönetimi için bir sinir ağı',
    intro: [
      'Sysadmin tek bir modül veya tek bir model değildir. Bu, sistem yönetimi için bir sinir ağıdır: her biri kendi sorumluluk alanına sahip AI subaylarından oluşan bir ekip, sunucularınızda yaşayan yürütme ajanlarını komuta eder. Birlikte, asla yorulmayan bir sistem yöneticileri ekibi gibi davranırlar.',
      'İş yukarıdan aşağıya akar. Bir denetim, bir olay veya sizden gelen bir talep en üstten girer. Baş subay bunu anlamlandırır, adımlara böler ve her adımı o alanı en iyi bilen uzmana yönlendirir. Güvenliği kontrol edilmeden hiçbir şey sunucunuza ulaşmaz ve sizin onayınız olmadan riskli hiçbir şey çalıştırılmaz.',
    ],
    officersH: 'Subaylar — düşünme ve orkestrasyon',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'tüm modülün baş orkestratörü ve komuta subayı. Denetimi, olayı veya görevi alır, durumu anlar, planı oluşturur, her komutun güvenliğini denetler ve işi uzmanlar arasında dağıtır — tehlike durumunda (siber saldırı veya virüs) bunu çözmek için ITDR Officer aracılığıyla tüm ITDR modülünü çağırır. Ayrıca tüm günlükleri ve verileri tek bir rapora birleştirir ve arayüzünüzdeki Cloud AI asistanı aracılığıyla sizinle iletişim halinde kalır. Cloud AI’dan Sysadmin Officer’ı ortak bir sohbete getirmesini isteyip onunla bir toplantı ya da brifing yapabilir — sizi endişelendiren konuları çözebilir ya da önümüzdeki işleri planlayabilirsiniz.',
      },
      {
        name: 'GCP Officer',
        desc: 'Google Cloud uzmanı. gcloud, GCE ve GKE, IAM, güvenlik duvarı kuralları ve servis hesaplarına hâkimdir; bir bulguyu tam ve yerel bir GCP eylemine dönüştürür.',
      },
      {
        name: 'AWS Officer',
        desc: 'Amazon Web Services uzmanı. EC2, S3, IAM, güvenlik grupları, aws CLI — platformun sınırlarını ve tuzaklarını bilir ve bunların içinde çalışır.',
      },
      {
        name: 'Azure Officer',
        desc: 'Microsoft Azure uzmanı. az CLI, sanal makineler, ağ güvenlik grupları, kaynak grupları — Azure’un kendi mantığına ve diline hâkimdir.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'genelci. Bare-metal Linux, on-prem yapılar ve hibrit ortamlar onun uzmanlık alanıdır; tek bir buluta bağlı olmayan her şeyi üstlenir ve ortam standart dışı olduğunda size destek olur.',
      },
    ],
    agentsH: 'Ajanlar — sunucularınızdaki subayların göz ve elleri',
    agents: [
      { name: 'Audit Agent', desc: 'denetim için sinyalleri toplar — sunucunun tam bir resmini çıkaran on sekiz kontrol.' },
      { name: 'Monitoring Agent', desc: 'sağlık metriklerini sürekli olarak akıtır, böylece subaylar her zaman canlı durumu görür.' },
      { name: 'Execution Agent', desc: 'onaylanan komutları çalıştırır (önce dry-run) ve tam sonucu döndürür.' },
      { name: 'Antivirus Agent', desc: 'planlanmış ClamAV taramaları yapar; bulunanlar karantinaya alınır, asla sessizce silinmez.' },
      { name: 'Inventory Agent', desc: 'paketlerin ve servislerin canlı envanterini tutar, böylece hiçbir şey fark edilmeden kayamaz.' },
      { name: 'Forensics Agent', desc: 'bir olayın ihtiyaç duyduğu artefaktları ve günlükleri çıkarır, böylece analiz gerçeklere dayanır.' },
      { name: 'Patch Agent', desc: 'onaylandıktan sonra güncellemeleri ve yamaları uygular ve sistemin sağlıklı olduğunu doğrular.' },
      { name: 'Backup Agent', desc: 'riskli her değişiklikten önce bir anlık görüntü alır, böylece her zaman geri dönüş yolu olur.' },
    ],
    roleH: 'Sysadmin — platformun kontrol modülü',
    role: [
      'Bir ajan veya subay sunucunuzda bir siber saldırı veya virüs belirtisi tespit ettiğinde, bunu anında Sysadmin Officer’a iletir ve o da tehdidi tamamen ortadan kaldıran ITDR modülünü hemen çağırır. Bundan sonra, Sysadmin modülü olayın tüm etkilerini temizler ve sunucularınızı orijinal sağlıklı durumuna geri döndürür. Kullanıcılarınız bir şeylerin yanlış gittiğini fark bile etmeyecek — çünkü tüm bunlar dakikalar, belki saniyeler içinde gerçekleşir.',
      'Sysadmin modülü ayrıca sunucularınızın her yükseltmesini yürütür. Ölçeklenmek mi istiyorsunuz? Tamamdır. Modül, aklınızdaki yeni özelliklerin tüm işini ve entegrasyonunu gerçekleştirir. Siz ve Cloud AI yalnızca vizyonu belirlersiniz; Sysadmin Officer her süreci yürütür: AI Studio gerekli mimariyi ve kodu yazar, Sysadmin Officer ise her şeyi test eder ve sunucularınıza entegre eder. Doğrulama, kendi barındırdığımız ana beynimiz GLM-5.2 tarafından yapılır — kontur içindeki her kod satırını doğruluk ve zafiyet açısından inceler ve Sysadmin Officer’ın tamamen uyguladığı öneriler üretir. Ve siz mümkün olan en iyi sonucu elde edersiniz.',
    ],
    diag: {
      input: 'Denetim · Olay · Göreviniz',
      tInput: 'Giriş',
      tChief: 'Baş subay',
      tSpec: 'Platform uzmanları',
      tAgents: 'Sunucunuzdaki ajanlar',
      tConnected: 'Bağlı modüller',
      validation: 'AI Studio doğrulaması: GLM-5.2 (kendi barındırılan)',
    },
  },
  ar: {
    h: 'البنية: شبكة عصبية لإدارة الأنظمة',
    intro: [
      'Sysadmin ليس وحدة واحدة ولا نموذجًا واحدًا. إنه شبكة عصبية لإدارة الأنظمة: فريق من ضباط الذكاء الاصطناعي، لكل منهم مجال مسؤوليته الخاص، يقودون مجموعة من عملاء التنفيذ الذين يعيشون على خوادمك. معًا يتصرفون كفريق من مسؤولي الأنظمة لا يتعب أبدًا.',
      'يتدفق العمل من الأعلى إلى الأسفل. يدخل التدقيق أو الحادث أو طلبك من القمة. يفهم الضابط الرئيسي المعنى، ويقسّمه إلى خطوات، ويوجّه كل خطوة إلى المتخصص الذي يعرف هذا المجال أفضل من غيره. لا شيء يصل إلى خادمك قبل التحقق من أمانه، ولا يُنفَّذ أي أمر محفوف بالمخاطر دون موافقتك.',
    ],
    officersH: 'الضباط — التفكير والتنسيق',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'المنسّق الرئيسي والضابط القائد للوحدة بأكملها. يستقبل التدقيق أو الحادث أو المهمة، ويفهم الموقف، ويضع الخطة، ويتحقق من أمان كل أمر، ويوزّع العمل بين المتخصصين — وعند وجود خطر (هجوم إلكتروني أو فيروس)، يستدعي وحدة ITDR بأكملها عبر ITDR Officer لحل الأمر. كما يجمّع كل السجلات والبيانات في تقرير واحد ويبقى على تواصل معك عبر مساعد Cloud AI في واجهتك. يمكنك أن تطلب من Cloud AI إحضار Sysadmin Officer إلى محادثة مشتركة وعقد اجتماع أو إحاطة معه — لحل ما يشغلك أو التخطيط للعمل القادم.',
      },
      {
        name: 'GCP Officer',
        desc: 'متخصص Google Cloud. متمكن من gcloud وGCE وGKE وIAM وقواعد جدار الحماية وحسابات الخدمة، يحوّل النتيجة إلى إجراء دقيق وأصلي على GCP.',
      },
      {
        name: 'AWS Officer',
        desc: 'متخصص Amazon Web Services. EC2 وS3 وIAM ومجموعات الأمان وواجهة أوامر aws — يعرف حدود المنصة ومزالقها ويعمل ضمنها.',
      },
      {
        name: 'Azure Officer',
        desc: 'متخصص Microsoft Azure. واجهة أوامر az والأجهزة الافتراضية ومجموعات أمان الشبكة ومجموعات الموارد — متمكن من منطق Azure ولغته الخاصة.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'المتخصص العام. لينكس على العتاد الفعلي والبنية المحلية والبيئات المختلطة هي مجاله؛ يتولى كل ما لا يرتبط بسحابة واحدة، ويدعمك عندما تكون البيئة غير قياسية.',
      },
    ],
    agentsH: 'العملاء — عيون الضباط وأياديهم على خوادمك',
    agents: [
      { name: 'Audit Agent', desc: 'يجمع الإشارات اللازمة للتدقيق — ثمانية عشر فحصًا ترسم صورة كاملة للمضيف.' },
      { name: 'Monitoring Agent', desc: 'يبث مقاييس الصحة باستمرار، ليرى الضباط الحالة الحية دائمًا.' },
      { name: 'Execution Agent', desc: 'ينفّذ الأوامر المعتمدة (أولاً كتجربة جافة) ويعيد النتيجة الدقيقة.' },
      { name: 'Antivirus Agent', desc: 'يجري فحوصات ClamAV مجدولة؛ ما يجده يُعزل في الحجر الصحي، ولا يُحذف أبدًا بصمت.' },
      { name: 'Inventory Agent', desc: 'يحتفظ بجرد حي للحزم والخدمات، حتى لا ينزلق شيء دون أن يُلاحظ.' },
      { name: 'Forensics Agent', desc: 'يستخرج الآثار والسجلات التي يحتاجها الحادث، ليستند التحليل إلى الحقائق.' },
      { name: 'Patch Agent', desc: 'يطبّق التحديثات والتصحيحات بعد الموافقة، ويتحقق من سلامة النظام.' },
      { name: 'Backup Agent', desc: 'يأخذ لقطة قبل أي تغيير محفوف بالمخاطر، حتى يبقى دائمًا مسار للعودة.' },
    ],
    roleH: 'Sysadmin — وحدة التحكم في المنصة',
    role: [
      'عندما يرصد عميل أو ضابط علامات هجوم إلكتروني أو فيروس على خادمك، ينقل ذلك فورًا إلى Sysadmin Officer، الذي يستدعي على الفور وحدة ITDR التي تزيل التهديد بالكامل. بعد ذلك، تزيل وحدة Sysadmin كل آثار الحادث وتعيد خوادمك إلى حالتها السليمة الأصلية. لن يلاحظ مستخدموك حتى أن شيئًا كان خاطئًا — لأن كل ذلك يستغرق دقائق، وربما ثوانٍ.',
      'تقود وحدة Sysadmin أيضًا كل ترقية لخوادمك. تريد التوسّع؟ تم. تنفّذ الوحدة كل العمل ودمج الميزات الجديدة التي تفكر فيها. أنت وCloud AI تحددان فقط الرؤية؛ ويدير Sysadmin Officer كل عملية: يكتب AI Studio البنية والكود اللازمين، ويختبر Sysadmin Officer كل شيء ويدمجه في خوادمك. يتم التحقق بواسطة GLM-5.2، عقلنا الرئيسي المستضاف ذاتيًا — يراجع كل سطر من الكود من حيث الصحة والثغرات داخل الكنتور، وينتج توصيات ينفّذها Sysadmin Officer بالكامل. وتحصل أنت على أفضل نتيجة ممكنة.',
    ],
    diag: {
      input: 'تدقيق · حادث · مهمتك',
      tInput: 'الإدخال',
      tChief: 'الضابط الرئيسي',
      tSpec: 'متخصصو المنصة',
      tAgents: 'العملاء على خادمك',
      tConnected: 'الوحدات المتصلة',
      validation: 'تحقق AI Studio: GLM-5.2 (مستضاف ذاتيًا)',
    },
  },
  el: {
    h: 'Αρχιτεκτονική: ένα νευρωνικό δίκτυο για τη διαχείριση συστημάτων',
    intro: [
      'Το Sysadmin δεν είναι ούτε ένα μεμονωμένο module ούτε ένα μεμονωμένο μοντέλο. Είναι ένα νευρωνικό δίκτυο για τη διαχείριση συστημάτων: μια ομάδα αξιωματικών AI, ο καθένας με τη δική του περιοχή ευθύνης, που διοικούν ένα σύνολο πρακτόρων εκτέλεσης που ζουν στους διακομιστές σας. Μαζί συμπεριφέρονται σαν μια ομάδα διαχειριστών συστημάτων που δεν κουράζεται ποτέ.',
      'Η εργασία ρέει από πάνω προς τα κάτω. Ένας έλεγχος, ένα περιστατικό ή ένα αίτημά σας εισέρχεται από την κορυφή. Ο επικεφαλής αξιωματικός κατανοεί το νόημα, το χωρίζει σε βήματα και δρομολογεί κάθε βήμα στον ειδικό που γνωρίζει καλύτερα αυτό το πεδίο. Τίποτα δεν φτάνει στον διακομιστή σας πριν ελεγχθεί η ασφάλειά του, και τίποτα ριψοκίνδυνο δεν εκτελείται χωρίς τη δική σας έγκριση.',
    ],
    officersH: 'Οι αξιωματικοί — σκέψη και ενορχήστρωση',
    officers: [
      {
        name: 'Sysadmin Officer',
        desc: 'ο κύριος ενορχηστρωτής και διοικητής όλου του module. Λαμβάνει τον έλεγχο, το περιστατικό ή την εργασία, κατανοεί την κατάσταση, καταρτίζει το σχέδιο, ελέγχει την ασφάλεια κάθε εντολής και αναθέτει την εργασία στους ειδικούς — και σε περίπτωση κινδύνου (κυβερνοεπίθεση ή ιός) καλεί ολόκληρο το module ITDR μέσω του ITDR Officer για να το επιλύσει. Επίσης, ενοποιεί όλα τα logs και τα δεδομένα σε μία ενιαία αναφορά και παραμένει σε επαφή μαζί σας μέσω του βοηθού Cloud AI στη διεπαφή σας. Μπορείτε να ζητήσετε από το Cloud AI να φέρει τον Sysadmin Officer σε μια κοινή συνομιλία και να πραγματοποιήσετε μια συνάντηση ή ενημέρωση μαζί του — επιλύοντας οτιδήποτε σας απασχολεί ή σχεδιάζοντας την επόμενη εργασία.',
      },
      {
        name: 'GCP Officer',
        desc: 'ο ειδικός σε Google Cloud. Άνετος με gcloud, GCE και GKE, IAM, κανόνες firewall και λογαριασμούς υπηρεσιών, μετατρέπει ένα εύρημα σε ακριβή, native ενέργεια GCP.',
      },
      {
        name: 'AWS Officer',
        desc: 'ο ειδικός σε Amazon Web Services. EC2, S3, IAM, security groups, το aws CLI — γνωρίζει τα όρια της πλατφόρμας και τις παγίδες της, και εργάζεται εντός αυτών.',
      },
      {
        name: 'Azure Officer',
        desc: 'ο ειδικός σε Microsoft Azure. Το az CLI, εικονικές μηχανές, network security groups, resource groups — γνωρίζει άπταιστα τη λογική και τη γλώσσα του Azure.',
      },
      {
        name: 'All-Platform Officer',
        desc: 'ο generalist. Bare-metal Linux, on-prem εγκαταστάσεις και υβριδικά περιβάλλοντα είναι το πεδίο του· αναλαμβάνει όλα όσα δεν συνδέονται με ένα μόνο cloud, και σας υποστηρίζει όταν ένα περιβάλλον είναι μη τυπικό.',
      },
    ],
    agentsH: 'Οι πράκτορες — τα μάτια και τα χέρια των αξιωματικών στους διακομιστές σας',
    agents: [
      { name: 'Audit Agent', desc: 'συλλέγει τα σήματα για τον έλεγχο — δεκαοκτώ ελέγχους που σχηματίζουν μια πλήρη εικόνα του host.' },
      { name: 'Monitoring Agent', desc: 'μεταδίδει συνεχώς μετρήσεις υγείας, ώστε οι αξιωματικοί να βλέπουν πάντα την κατάσταση σε πραγματικό χρόνο.' },
      { name: 'Execution Agent', desc: 'εκτελεί εγκεκριμένες εντολές (πρώτα ως dry-run) και επιστρέφει το ακριβές αποτέλεσμα.' },
      { name: 'Antivirus Agent', desc: 'εκτελεί προγραμματισμένες σαρώσεις ClamAV· ό,τι βρίσκει τίθεται σε καραντίνα, ποτέ δεν διαγράφεται σιωπηλά.' },
      { name: 'Inventory Agent', desc: 'διατηρεί ζωντανή απογραφή πακέτων και υπηρεσιών, ώστε τίποτα να μην παρεκκλίνει απαρατήρητο.' },
      { name: 'Forensics Agent', desc: 'ανασύρει τα αρχεία και τα logs που χρειάζεται ένα περιστατικό, ώστε η ανάλυση να βασίζεται σε γεγονότα.' },
      { name: 'Patch Agent', desc: 'εφαρμόζει ενημερώσεις και patches μετά την έγκριση, και επαληθεύει ότι το σύστημα είναι υγιές.' },
      { name: 'Backup Agent', desc: 'λαμβάνει ένα snapshot πριν από κάθε ριψοκίνδυνη αλλαγή, ώστε να υπάρχει πάντα δρόμος επιστροφής.' },
    ],
    roleH: 'Sysadmin — το module ελέγχου της πλατφόρμας',
    role: [
      'Όταν ένας πράκτορας ή αξιωματικός εντοπίσει ενδείξεις κυβερνοεπίθεσης ή ιού στον διακομιστή σας, το μεταφέρει άμεσα στον Sysadmin Officer, ο οποίος καλεί αμέσως το module ITDR, που εξαλείφει πλήρως την απειλή. Στη συνέχεια, το module Sysadmin καθαρίζει κάθε συνέπεια του περιστατικού και επαναφέρει τους διακομιστές σας στην αρχική τους υγιή κατάσταση. Οι χρήστες σας δεν θα αντιληφθούν καν ότι κάτι πήγε στραβά — γιατί όλο αυτό διαρκεί λεπτά, ίσως δευτερόλεπτα.',
      'Το module Sysadmin καθοδηγεί επίσης κάθε αναβάθμιση των διακομιστών σας. Θέλετε να κλιμακωθείτε; Έγινε. Το module εκτελεί όλη την εργασία και την ενσωμάτωση των νέων λειτουργιών που έχετε κατά νου. Εσείς και το Cloud AI ορίζετε μόνο το όραμα· ο Sysadmin Officer διαχειρίζεται κάθε διαδικασία: το AI Studio γράφει την απαραίτητη αρχιτεκτονική και τον κώδικα, και ο Sysadmin Officer τα δοκιμάζει όλα και τα ενσωματώνει στους διακομιστές σας. Η επικύρωση γίνεται από το GLM-5.2, τον κύριο εγκέφαλό μας που φιλοξενείται αυτόνομα — εξετάζει κάθε γραμμή κώδικα για ορθότητα και τρωτά σημεία εντός του περιγράμματος και παράγει συστάσεις που ο Sysadmin Officer εφαρμόζει πλήρως. Και εσείς λαμβάνετε το καλύτερο δυνατό αποτέλεσμα.',
    ],
    diag: {
      input: 'Έλεγχος · Περιστατικό · Η εργασία σας',
      tInput: 'Είσοδος',
      tChief: 'Επικεφαλής αξιωματικός',
      tSpec: 'Ειδικοί πλατφόρμας',
      tAgents: 'Πράκτορες στον διακομιστή σας',
      tConnected: 'Συνδεδεμένα modules',
      validation: 'Επικύρωση AI Studio: GLM-5.2 (αυτοφιλοξενούμενο)',
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
