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
  fr: {
    h: 'Déploiement de la plateforme et cycle opérationnel complet',
    topoH: 'Où cela s’exécute',
    topoLead:
      'Rien de lourd ne tourne sur votre serveur — juste un agent léger. Il communique avec la plateforme via des canaux chiffrés (gRPC + HTTPS) et, par défaut, ne change rien sans votre décision. Tout le calcul se trouve côté plateforme, en trois couches :',
    topo: [
      { label: 'Control plane', desc: 'Orchestration : la file de tâches, la logique du Sysadmin Officer, la passerelle de modèles, la base de connaissances Doctrine, le monitoring et les alertes. Tout l’état et votre historique de service vivent ici.' },
      { label: 'Flotte de modèles IA', desc: 'Les officiers et spécialistes sur GPU, déployés dans votre région — ainsi votre télémétrie et votre code restent à l’intérieur du contour et ne le quittent jamais. La validation est aussi auto-hébergée — GLM-5.2, le cerveau principal, examine les changements à plus haut risque à l’intérieur du contour ; rien ne sort.' },
      { label: 'Multi-région', desc: 'Un nœud de plateforme est déployé dans votre région, sur n’importe quel grand cloud ou on-prem. Quand la demande apparaît en Asie ou aux Amériques, nous y montons une pile, afin que vos données et votre latence restent locales.' },
    ],
    topoNote:
      'Pour un contour fermé, toute la pile se déploie à l’intérieur de votre propre périmètre — le palier Enterprise, une flotte de modèles locale, avec zéro appel sortant.',
    stepsH: 'Ce que fait le système — étape par étape',
    steps: [
      { label: 'Intégration & provisionnement', desc: 'Vous connectez un serveur — il passe la porte de facturation et s’enregistre dans un registre d’actifs unique avec son propre jeton ; vous choisissez le mode (automatisation complète ou surveillance). L’agent est installé, votre historique de service s’ouvre, et chaque action à partir de là y est consignée.' },
      { label: 'Audit initial', desc: 'L’agent exécute 18 contrôles prédéfinis : l’OS et son état, les services en cours, la charge disque / mémoire / réseau, les paquets installés, les configurations clés, les métadonnées de logs et les signaux de sécurité. Le Sysadmin Officer les analyse et renvoie un rapport rigoureusement structuré — résumé, niveau de risque, ce qui va bien, problèmes, optimisations et un plan ; chaque élément du plan porte sa propre action, une estimation d’effort, des commandes et un indicateur d’application automatique.' },
      { label: 'Votre décision', desc: 'Vous examinez le rapport directement dans l’interface via Cloud AI et approuvez le plan. Les éléments sûrs s’appliquent d’eux-mêmes ; tout ce qui est risqué (HIGH / CRITICAL) attend votre accord, et le système ouvre un ticket de sécurité pour le risque résiduel.' },
      { label: 'Exécution vérifiée pour la sécurité', desc: 'Pour chaque élément approuvé, le spécialiste de plateforme génère la commande exacte pour votre environnement (AWS / GCP / Azure / on-prem). Le Sysadmin Officer la vérifie — approuver, restreindre au moindre privilège, ou escalader vers un humain. L’Execution Agent l’exécute ensuite (d’abord en dry-run) et consigne le résultat exact et le code de retour dans l’historique de service.' },
      { label: 'Surveillance continue', desc: 'Le Monitoring Agent diffuse les métriques en temps réel ; la plateforme les compare à des seuils, les déduplique et les transforme en recommandations priorisées. Elle repère une anomalie ou un incident naissant en un instant — et propose une solution avant que le problème ne devienne le vôtre.' },
      { label: 'Détection et réponse aux menaces', desc: 'Au premier signe d’une attaque ou d’un virus, l’agent ou un officier alerte instantanément le Sysadmin Officer, qui appelle le module ITDR — interception, défense et suppression du virus automatiques. Le module Sysadmin nettoie ensuite les séquelles de l’incident et restaure le serveur dans son état sain d’origine, sans que vos utilisateurs ne remarquent rien.' },
      { label: 'Modernisation via AI Studio', desc: 'Besoin d’étendre ou de faire évoluer le système ? Vous décrivez la tâche à Cloud AI, le Sysadmin Officer la transforme en travail, AI Studio écrit l’architecture et le code, GLM-5.2 vérifie chaque ligne pour la justesse et les vulnérabilités, les tests s’exécutent — et après votre approbation, la mise à jour s’intègre à vos serveurs et passe en production.' },
    ],
    closing:
      'Deux règles traversent les sept étapes : dry-run par défaut, et le dernier mot est toujours le vôtre sur tout ce qui est risqué. Et chaque changement atterrit dans votre historique de service, prêt pour l’audit à tout moment.',
    diag: { topology: 'Topologie de déploiement', lifecycle: 'Cycle opérationnel', gate: 'Porte de sécurité d’exécution', invariants: 'Dry-run par défaut · votre accord sur tout risque · tout dans l’historique de service' },
  },
  de: {
    h: 'Plattformbereitstellung & der vollständige Betriebszyklus',
    topoH: 'Wo es läuft',
    topoLead:
      'Auf Ihrem Server läuft nichts Schweres — nur ein leichter Agent. Er kommuniziert mit der Plattform über verschlüsselte Kanäle (gRPC + HTTPS) und ändert standardmäßig nichts ohne Ihre Entscheidung. Die gesamte Rechenlast liegt auf Plattformseite, in drei Schichten:',
    topo: [
      { label: 'Control Plane', desc: 'Orchestrierung: die Aufgabenwarteschlange, die Sysadmin-Officer-Logik, das Modell-Gateway, die Doctrine-Wissensdatenbank, Monitoring und Alarmierung. Hier liegen der gesamte Zustand und Ihre Service-Historie.' },
      { label: 'KI-Modellflotte', desc: 'Die Offiziere und Spezialisten auf GPU, bereitgestellt in Ihrer Region — sodass Ihre Telemetrie und Ihr Code innerhalb des Konturs bleiben und ihn nie verlassen. Auch die Validierung ist selbst gehostet — GLM-5.2, das Hauptgehirn, prüft risikoreichere Änderungen innerhalb des Konturs; nichts ruft nach außen.' },
      { label: 'Multi-Region', desc: 'Ein Plattform-Knoten wird in Ihrer Region bereitgestellt, auf jeder großen Cloud oder On-Prem. Entsteht Bedarf in Asien oder Amerika, richten wir dort einen Stack ein, damit sowohl Ihre Daten als auch Ihre Latenz lokal bleiben.' },
    ],
    topoNote:
      'Für einen geschlossenen Kontur wird der gesamte Stack innerhalb Ihres eigenen Perimeters bereitgestellt — die Enterprise-Stufe, eine lokale Modellflotte, mit null ausgehenden Aufrufen.',
    stepsH: 'Was das System tut — Schritt für Schritt',
    steps: [
      { label: 'Onboarding & Provisionierung', desc: 'Sie verbinden einen Server — er durchläuft das Billing-Gate und registriert sich in einem zentralen Asset-Register mit eigenem Token; Sie wählen den Modus (volle Automatisierung oder Monitoring). Der Agent wird installiert, Ihre Service-Historie öffnet sich, und jede Aktion ab hier wird darin festgehalten.' },
      { label: 'Erstaudit', desc: 'Der Agent führt 18 vordefinierte Prüfungen durch: das Betriebssystem und seinen Zustand, laufende Dienste, Disk-/Speicher-/Netzwerklast, installierte Pakete, Schlüsselkonfigurationen, Log-Metadaten und Sicherheitssignale. Der Sysadmin Officer wertet sie aus und liefert einen streng strukturierten Bericht — Zusammenfassung, Risikostufe, was gesund ist, Probleme, Optimierungen und einen Plan; jeder Planpunkt trägt seine eigene Aktion, eine Aufwandsschätzung, Befehle und eine Auto-Apply-Kennzeichnung.' },
      { label: 'Ihre Entscheidung', desc: 'Sie prüfen den Bericht direkt in der Oberfläche über Cloud AI und genehmigen den Plan. Sichere Punkte werden von selbst angewendet; alles Riskante (HIGH / CRITICAL) wartet auf Ihr Wort, und das System eröffnet für das Restrisiko ein Safety-Ticket.' },
      { label: 'Sicherheitsgeprüfte Ausführung', desc: 'Für jeden genehmigten Punkt erzeugt der Plattform-Spezialist den exakten Befehl für Ihre Umgebung (AWS / GCP / Azure / On-Prem). Der Sysadmin Officer prüft ihn — genehmigen, auf das Mindestprivileg einschränken oder an einen Menschen eskalieren. Der Execution Agent führt ihn dann aus (zunächst als Dry-Run) und schreibt das exakte Ergebnis und den Rückgabecode in die Service-Historie.' },
      { label: 'Kontinuierliches Monitoring', desc: 'Der Monitoring Agent streamt Metriken in Echtzeit; die Plattform vergleicht sie mit Schwellenwerten, dedupliziert sie und verwandelt sie in priorisierte Empfehlungen. Sie erkennt eine Anomalie oder einen aufkommenden Vorfall augenblicklich — und bietet eine Lösung an, bevor das Problem Ihres wird.' },
      { label: 'Bedrohungserkennung & -reaktion', desc: 'Beim ersten Anzeichen eines Angriffs oder eines Virus alarmiert der Agent oder ein Offizier sofort den Sysadmin Officer, der das ITDR-Modul ruft — automatisches Abfangen, Abwehr und Virenentfernung. Das Sysadmin-Modul beseitigt anschließend die Folgen des Vorfalls und stellt den Server in seinen ursprünglichen gesunden Zustand zurück, sodass Ihre Nutzer nichts bemerken.' },
      { label: 'Modernisierung über AI Studio', desc: 'Müssen Sie das System erweitern oder skalieren? Sie beschreiben die Aufgabe gegenüber Cloud AI, der Sysadmin Officer macht daraus einen Auftrag, AI Studio schreibt Architektur und Code, GLM-5.2 prüft jede Zeile auf Korrektheit und Schwachstellen, die Tests laufen — und nach Ihrer Genehmigung wird das Update in Ihre Server integriert und geht live.' },
    ],
    closing:
      'Zwei Regeln ziehen sich durch alle sieben Schritte: Dry-Run standardmäßig, und das letzte Wort bei allem Riskanten haben immer Sie. Und jede Änderung landet in Ihrer Service-Historie, jederzeit auditbereit.',
    diag: { topology: 'Bereitstellungstopologie', lifecycle: 'Betriebszyklus', gate: 'Ausführungs-Sicherheitstor', invariants: 'Dry-Run standardmäßig · Ihre Genehmigung bei allem Riskanten · alles in der Service-Historie' },
  },
  es: {
    h: 'Despliegue de la plataforma y el ciclo operativo completo',
    topoH: 'Dónde se ejecuta',
    topoLead:
      'En su servidor no se ejecuta nada pesado, solo un agente ligero. Se comunica con la plataforma a través de canales cifrados (gRPC + HTTPS) y, por defecto, no cambia nada sin su decisión. Toda la computación reside en el lado de la plataforma, en tres capas:',
    topo: [
      { label: 'Plano de control', desc: 'Orquestación: la cola de tareas, la lógica del Sysadmin Officer, la puerta de enlace de modelos, la base de conocimiento Doctrine, monitoreo y alertas. Aquí residen todo el estado y su historial de servicio.' },
      { label: 'Flota de modelos de IA', desc: 'Los oficiales y especialistas en GPU, desplegados en su región, de modo que su telemetría y código permanecen dentro del contorno y nunca salen. La validación también es autoalojada: GLM-5.2, el cerebro principal, revisa los cambios de mayor riesgo dentro del contorno; nada sale al exterior.' },
      { label: 'Multi-región', desc: 'Se despliega un nodo de la plataforma en su región, en cualquier nube importante u on-prem. Cuando aparece demanda en Asia o América, montamos allí una pila, para que tanto sus datos como su latencia permanezcan locales.' },
    ],
    topoNote:
      'Para un contorno cerrado, toda la pila se despliega dentro de su propio perímetro: el nivel Enterprise, una flota de modelos local, con cero llamadas salientes.',
    stepsH: 'Qué hace el sistema — paso a paso',
    steps: [
      { label: 'Incorporación y aprovisionamiento', desc: 'Conecta un servidor: pasa la puerta de facturación y se registra en un único registro de activos con su propio token; usted elige el modo (automatización total o monitoreo). Se instala el agente, se abre su historial de servicio, y cada acción a partir de ahí queda registrada en él.' },
      { label: 'Auditoría inicial', desc: 'El agente ejecuta 18 comprobaciones predefinidas: el SO y su estado, servicios en ejecución, carga de disco / memoria / red, paquetes instalados, configuraciones clave, metadatos de registros y señales de seguridad. El Sysadmin Officer razona sobre ellas y devuelve un informe estrictamente estructurado: resumen, nivel de riesgo, qué está sano, problemas, optimizaciones y un plan; cada elemento del plan lleva su propia acción, una estimación de esfuerzo, comandos y un indicador de aplicación automática.' },
      { label: 'Su decisión', desc: 'Revisa el informe directamente en la interfaz a través de Cloud AI y aprueba el plan. Los elementos seguros se aplican por sí solos; todo lo arriesgado (HIGH / CRITICAL) espera su palabra, y el sistema abre un ticket de seguridad para el riesgo residual.' },
      { label: 'Ejecución verificada de seguridad', desc: 'Para cada elemento aprobado, el especialista de la plataforma genera el comando exacto para su entorno (AWS / GCP / Azure / on-prem). El Sysadmin Officer lo revisa: aprobar, reducir al mínimo privilegio o escalar a un humano. El Execution Agent lo ejecuta entonces (primero en dry-run) y escribe el resultado exacto y el código de retorno en el historial de servicio.' },
      { label: 'Monitoreo continuo', desc: 'El Monitoring Agent transmite métricas en tiempo real; la plataforma las compara con umbrales, las desduplica y las convierte en recomendaciones priorizadas. Detecta una anomalía o un incidente en gestación al instante, y ofrece una solución antes de que el problema sea suyo.' },
      { label: 'Detección y respuesta a amenazas', desc: 'Ante el primer indicio de un ataque o un virus, el agente o un oficial alerta al instante al Sysadmin Officer, que llama al módulo ITDR: intercepción, defensa y eliminación de virus automáticas. Después, el módulo Sysadmin limpia las secuelas del incidente y restaura el servidor a su estado saludable original, sin que sus usuarios noten nada.' },
      { label: 'Modernización a través de AI Studio', desc: '¿Necesita ampliar o escalar el sistema? Describe la tarea a Cloud AI, el Sysadmin Officer la convierte en un trabajo, AI Studio escribe la arquitectura y el código, GLM-5.2 revisa cada línea en busca de corrección y vulnerabilidades, se ejecutan las pruebas, y tras su aprobación la actualización se integra en sus servidores y entra en producción.' },
    ],
    closing:
      'Dos reglas atraviesan los siete pasos: dry-run por defecto, y la última palabra sobre cualquier riesgo siempre es suya. Y cada cambio queda en su historial de servicio, listo para auditoría en cualquier momento.',
    diag: { topology: 'Topología de despliegue', lifecycle: 'Ciclo operativo', gate: 'Puerta de seguridad de ejecución', invariants: 'Dry-run por defecto · su aprobación en todo lo arriesgado · todo en el historial de servicio' },
  },
  it: {
    h: 'Deployment della piattaforma e ciclo operativo completo',
    topoH: 'Dove viene eseguito',
    topoLead:
      'Sul vostro server non gira nulla di pesante — solo un agente leggero. Comunica con la piattaforma tramite canali cifrati (gRPC + HTTPS) e, per impostazione predefinita, non cambia nulla senza la vostra decisione. Tutto il calcolo risiede lato piattaforma, in tre livelli:',
    topo: [
      { label: 'Control plane', desc: 'Orchestrazione: la coda dei task, la logica del Sysadmin Officer, il gateway dei modelli, la base di conoscenza Doctrine, monitoraggio e allerte. Qui risiedono tutto lo stato e la vostra cronologia di servizio.' },
      { label: 'Flotta di modelli IA', desc: 'Gli ufficiali e gli specialisti su GPU, distribuiti nella vostra regione — così telemetria e codice restano all’interno del contorno e non ne escono mai. Anche la validazione è self-hosted — GLM-5.2, il cervello principale, esamina le modifiche a rischio più elevato all’interno del contorno; nulla esce.' },
      { label: 'Multi-regione', desc: 'Un nodo della piattaforma viene distribuito nella vostra regione, su qualsiasi cloud principale o on-prem. Quando emerge domanda in Asia o nelle Americhe, allestiamo uno stack lì, così dati e latenza restano locali.' },
    ],
    topoNote:
      'Per un contorno chiuso, l’intero stack viene distribuito all’interno del vostro perimetro — il livello Enterprise, una flotta di modelli locale, con zero chiamate in uscita.',
    stepsH: 'Cosa fa il sistema — passo dopo passo',
    steps: [
      { label: 'Onboarding e provisioning', desc: 'Collegate un server — passa il gate di fatturazione e si registra in un registro unico di asset con un proprio token; scegliete la modalità (automazione completa o monitoraggio). L’agente viene installato, si apre la vostra cronologia di servizio, e ogni azione da qui in poi vi viene scritta.' },
      { label: 'Audit iniziale', desc: 'L’agente esegue 18 controlli predefiniti: il sistema operativo e il suo stato, i servizi in esecuzione, il carico di disco / memoria / rete, i pacchetti installati, le configurazioni chiave, i metadati dei log e i segnali di sicurezza. Il Sysadmin Officer li elabora e restituisce un report rigorosamente strutturato — riepilogo, livello di rischio, cosa è sano, problemi, ottimizzazioni e un piano; ogni voce del piano ha la propria azione, una stima dell’impegno, comandi e un flag di applicazione automatica.' },
      { label: 'La vostra decisione', desc: 'Esaminate il report direttamente nell’interfaccia tramite Cloud AI e approvate il piano. Gli elementi sicuri si applicano da soli; tutto ciò che è rischioso (HIGH / CRITICAL) attende la vostra parola, e il sistema apre un safety-ticket per il rischio residuo.' },
      { label: 'Esecuzione verificata per la sicurezza', desc: 'Per ogni elemento approvato, lo specialista di piattaforma genera il comando esatto per il vostro ambiente (AWS / GCP / Azure / on-prem). Il Sysadmin Officer lo esamina — approva, restringe al privilegio minimo, o lo inoltra a un umano. L’Execution Agent lo esegue quindi (prima in dry-run) e scrive il risultato esatto e il codice di ritorno nella cronologia di servizio.' },
      { label: 'Monitoraggio continuo', desc: 'Il Monitoring Agent trasmette le metriche in tempo reale; la piattaforma le confronta con soglie, le deduplica e le trasforma in raccomandazioni prioritizzate. Rileva un’anomalia o un incidente in formazione in un istante — e propone una soluzione prima che il problema diventi vostro.' },
      { label: 'Rilevamento e risposta alle minacce', desc: 'Al primo segno di un attacco o di un virus, l’agente o un ufficiale allerta istantaneamente il Sysadmin Officer, che chiama il modulo ITDR — intercettazione, difesa e rimozione del virus automatiche. Il modulo Sysadmin ripulisce quindi le conseguenze dell’incidente e riporta il server al suo stato sano originale, senza che i vostri utenti si accorgano di nulla.' },
      { label: 'Modernizzazione tramite AI Studio', desc: 'Dovete estendere o scalare il sistema? Descrivete il compito a Cloud AI, il Sysadmin Officer lo trasforma in un lavoro, AI Studio scrive architettura e codice, GLM-5.2 esamina ogni riga per correttezza e vulnerabilità, i test vengono eseguiti — e dopo la vostra approvazione l’aggiornamento si integra nei vostri server e va in produzione.' },
    ],
    closing:
      'Due regole attraversano tutti e sette i passaggi: dry-run per impostazione predefinita, e l’ultima parola su tutto ciò che è rischioso è sempre vostra. E ogni modifica finisce nella vostra cronologia di servizio, pronta per l’audit in qualsiasi momento.',
    diag: { topology: 'Topologia di deployment', lifecycle: 'Ciclo operativo', gate: 'Gate di sicurezza dell’esecuzione', invariants: 'Dry-run per impostazione predefinita · vostra approvazione su tutto ciò che è rischioso · tutto nella cronologia di servizio' },
  },
  ja: {
    h: 'プラットフォームのデプロイと完全な運用サイクル',
    topoH: '実行される場所',
    topoLead:
      'あなたのサーバー上では重い処理は何も動きません——軽量なエージェントが一つだけです。暗号化されたチャネル（gRPC + HTTPS）でプラットフォームと通信し、デフォルトではあなたの判断なしに何も変更しません。すべての計算処理はプラットフォーム側の3層で行われます。',
    topo: [
      { label: 'コントロールプレーン', desc: 'オーケストレーション：タスクキュー、Sysadmin Officerのロジック、モデルゲートウェイ、Doctrineナレッジベース、モニタリングとアラート。すべての状態とあなたのサービス履歴はここにあります。' },
      { label: 'AIモデルフリート', desc: 'あなたのリージョンにデプロイされたGPU上のオフィサーと専門家——これによりテレメトリとコードはコンター内にとどまり、決して外に出ません。検証も自社ホスティングです——主脳であるGLM-5.2が、コンター内でリスクの高い変更をレビューします。外部呼び出しは一切ありません。' },
      { label: 'マルチリージョン', desc: 'プラットフォームノードはあなたのリージョン内に、主要クラウドまたはオンプレミス上にデプロイされます。アジアやアメリカで需要が生まれれば、そこにスタックを立ち上げ、データとレイテンシの両方をローカルに保ちます。' },
    ],
    topoNote:
      '閉域環境の場合、スタック全体があなた自身の境界内にデプロイされます——Enterpriseティア、ローカルモデルフリート、外部呼び出しゼロで。',
    stepsH: 'システムが行うこと——ステップごとに',
    steps: [
      { label: 'オンボーディングとプロビジョニング', desc: 'サーバーを接続すると、請求ゲートを通過し、独自のトークンで単一の資産レジストリに登録されます。モード（完全自動化またはモニタリング）を選択します。エージェントがインストールされ、サービス履歴が開かれ、以降のすべての操作がそこに記録されます。' },
      { label: '初期監査', desc: 'エージェントは18の事前定義されたチェックを実行します：OSとその状態、実行中のサービス、ディスク／メモリ／ネットワーク負荷、インストール済みパッケージ、主要な構成、ログのメタデータ、セキュリティシグナル。Sysadmin Officerがそれらを推論し、厳密に構造化されたレポート——概要、リスクレベル、正常な部分、問題点、最適化、そして計画——を返します。計画の各項目には、それぞれのアクション、工数見積もり、コマンド、自動適用フラグが付いています。' },
      { label: 'あなたの判断', desc: 'インターフェース内でCloud AIを通じてレポートを確認し、計画を承認します。安全な項目は自動的に適用されます。リスクのある項目（HIGH／CRITICAL）はあなたの判断を待ち、システムは残留リスクに対して安全チケットを発行します。' },
      { label: '安全性確認済みの実行', desc: '承認された各項目について、プラットフォーム専門officerがあなたの環境（AWS／GCP／Azure／オンプレミス）に対する正確なコマンドを生成します。Sysadmin Officerがそれをレビューします——承認、最小権限への縮小、または人間へのエスカレーション。その後、Execution Agentが実行し（まずdry-run）、正確な結果とリターンコードをサービス履歴に記録します。' },
      { label: '継続的なモニタリング', desc: 'Monitoring Agentがリアルタイムでメトリクスをストリーミングし、プラットフォームがそれらをしきい値と比較し、重複を除去し、優先順位付けされた推奨事項に変換します。異常や芽生えつつあるインシデントを瞬時に検知し、問題があなたのものになる前に解決策を提示します。' },
      { label: '脅威の検知と対応', desc: '攻撃やウイルスの最初の兆候で、エージェントまたはオフィサーが即座にSysadmin Officerに警告し、それがITDRモジュールを呼び出します——自動的な遮断、防御、ウイルス除去。その後、Sysadminモジュールがインシデントの後始末をし、サーバーを元の健全な状態に復元します。ユーザーは何も気づきません。' },
      { label: 'AI Studioによるモダナイゼーション', desc: 'システムの拡張やスケーリングが必要ですか？Cloud AIにタスクを説明すると、Sysadmin Officerがそれをジョブに変換し、AI Studioがアーキテクチャとコードを書き、GLM-5.2がすべての行の正確性と脆弱性をレビューし、テストが実行されます——そしてあなたの承認後、更新がサーバーに統合され本番稼働します。' },
    ],
    closing:
      '7つのステップすべてを貫く2つのルール：デフォルトでdry-run、そしてリスクを伴う事項の最終判断は常にあなたにあります。そしてすべての変更はサービス履歴に記録され、いつでも監査に対応できます。',
    diag: { topology: 'デプロイトポロジー', lifecycle: '運用サイクル', gate: '実行安全ゲート', invariants: 'デフォルトでdry-run・リスクのある事項はあなたの承認・すべてサービス履歴に記録' },
  },
  uk: {
    h: 'Розгортання платформи та повний робочий цикл',
    topoH: 'Де це працює',
    topoLead:
      'На вашому сервері не крутиться нічого важкого — лише один легкий агент. Він спілкується з платформою зашифрованими каналами (gRPC + HTTPS) і за замовчуванням нічого не змінює без вашого рішення. Усе обчислювальне навантаження — на боці платформи, у трьох шарах:',
    topo: [
      { label: 'Керуючий шар (control plane)', desc: 'Оркестрація: черга завдань, логіка Sysadmin Officer, шлюз до моделей, база знань Doctrine, моніторинг і сповіщення. Тут же зберігається весь стан і ваша Історія обслуговування.' },
      { label: 'Флот AI-моделей', desc: 'Офіцери та спеціалісти на GPU, розгорнуті у вашому регіоні — тому ваша телеметрія та код залишаються всередині контуру і не йдуть назовні. Валідація теж self-hosted — GLM-5.2, головний мозок, перевіряє зміни підвищеного ризику всередині контуру; назовні нічого не йде.' },
      { label: 'Мульти-регіон', desc: 'Вузол платформи розгортається у вашому регіоні, на будь-якій великій хмарі чи on-prem. З’являється попит в Азії чи Америці — піднімаємо стек там, щоб і дані, і затримки залишалися локальними.' },
    ],
    topoNote:
      'Для закритого контуру весь стек розгортається прямо у вашому периметрі — тариф Enterprise, локальний флот, без жодного звернення назовні.',
    stepsH: 'Що робить система — покроково',
    steps: [
      { label: 'Підключення та провіжинінг', desc: 'Ви підключаєте сервер — він проходить billing-гейт, реєструється в єдиному реєстрі з персональним токеном, ви обираєте режим (повна автоматизація чи моніторинг). Встановлюється агент, відкривається Історія обслуговування, і кожна подальша дія записується в неї.' },
      { label: 'Первинний аудит', desc: 'Агент виконує 18 попередньо визначених перевірок: ОС та її стан, запущені служби, навантаження диска / пам’яті / мережі, встановлені пакети, ключові конфігурації, метадані логів і сигнали безпеки. Sysadmin Officer осмислює їх і повертає чітко структурований звіт — зведення, рівень ризику, що працює добре, проблеми, оптимізації та план; у кожного пункту плану своя дія, оцінка трудомісткості, команди та прапорець «чи можна застосувати автоматично».' },
      { label: 'Ваше рішення', desc: 'Ви вивчаєте звіт прямо в інтерфейсі через Cloud AI і схвалюєте план. Безпечні пункти застосовуються самі; усе ризиковане (HIGH / CRITICAL) чекає на ваше слово, а на залишковий ризик система заводить safety-ticket.' },
      { label: 'Виконання з перевіркою безпеки', desc: 'За кожним схваленим пунктом платформний спеціаліст готує точну команду під ваше середовище (AWS / GCP / Azure / on-prem). Sysadmin Officer перевіряє її — схвалити, звузити до мінімально достатньої або ескалувати людині. Execution Agent виконує, спочатку в dry-run, і повертає точний результат з кодом повернення до Історії.' },
      { label: 'Безперервний моніторинг', desc: 'Monitoring Agent безперервно стрімить метрики, вони звіряються з порогами, дедуплікуються і перетворюються на пріоритизовані рекомендації. Аномалію чи назріваючий інцидент система бачить одразу — і пропонує рішення раніше, ніж проблема стане вашою.' },
      { label: 'Виявлення та реакція на загрози', desc: 'При перших ознаках атаки чи вірусу агент чи офіцер миттєво передає сигнал Sysadmin Officer, і той викликає ITDR Module — він автоматично блокує і відбиває атаку чи знищує вірус. Після цього Sysadmin усуває наслідки інциденту й відновлює сервер у вихідний стан; ваші користувачі навіть не помітять, що щось було.' },
      { label: 'Модернізація через AI Studio', desc: 'Потрібно доопрацювати чи масштабувати систему? Ви описуєте задачу Cloud AI, Sysadmin Officer ставить її в роботу, AI Studio пише архітектуру та код, GLM-5.2 перевіряє кожен рядок на коректність і вразливості, проганяються тести — і після вашого схвалення оновлення інтегрується у ваші сервери й іде в експлуатацію.' },
    ],
    closing:
      'Крізь усі сім кроків проходять два незмінних правила: dry-run за замовчуванням і останнє слово за вами на всьому ризикованому. А кожна дія — в Історії обслуговування, готовій до аудиту.',
    diag: { topology: 'Топологія розгортання', lifecycle: 'Робочий цикл', gate: 'Шлюз безпеки виконання', invariants: 'Dry-run за замовчуванням · ваше схвалення на ризикованому · усе в Історії обслуговування' },
  },
  sr: {
    h: 'Postavljanje platforme i kompletan radni ciklus',
    topoH: 'Gde se izvršava',
    topoLead:
      'Na vašem serveru ne radi ništa teško — samo jedan lagani agent. On komunicira sa platformom putem šifrovanih kanala (gRPC + HTTPS) i podrazumevano ne menja ništa bez vaše odluke. Sav proračun se odvija na strani platforme, u tri sloja:',
    topo: [
      { label: 'Kontrolna ravan (control plane)', desc: 'Orkestracija: red zadataka, logika Sysadmin Officer-a, mrežni prolaz ka modelima, baza znanja Doctrine, monitoring i obaveštenja. Ovde se čuva celokupno stanje i vaša istorija servisa.' },
      { label: 'Flota AI modela', desc: 'Oficiri i specijalisti na GPU, raspoređeni u vašem regionu — tako da vaša telemetrija i kod ostaju unutar konture i nikada je ne napuštaju. Validacija je takođe samostalno hostovana — GLM-5.2, glavni mozak, proverava izmene višeg rizika unutar konture; ništa ne izlazi napolje.' },
      { label: 'Multi-region', desc: 'Čvor platforme se postavlja u vašem regionu, na bilo kom velikom cloud-u ili on-prem. Kada se pojavi potražnja u Aziji ili Americi, podižemo stek tamo, tako da i podaci i kašnjenje ostaju lokalni.' },
    ],
    topoNote:
      'Za zatvorenu konturu, ceo stek se postavlja unutar vašeg sopstvenog perimetra — Enterprise nivo, lokalna flota modela, sa nula izlaznih poziva.',
    stepsH: 'Šta sistem radi — korak po korak',
    steps: [
      { label: 'Onboarding i provisioning', desc: 'Povezujete server — on prolazi kroz billing kapiju i registruje se u jedinstvenom registru resursa sa sopstvenim tokenom; birate režim (potpuna automatizacija ili monitoring). Agent se instalira, otvara se vaša istorija servisa, i svaka naredna radnja se u nju upisuje.' },
      { label: 'Početna revizija', desc: 'Agent izvršava 18 unapred definisanih provera: OS i njegovo stanje, aktivne servise, opterećenje diska / memorije / mreže, instalirane pakete, ključne konfiguracije, metapodatke logova i bezbednosne signale. Sysadmin Officer ih analizira i vraća strogo strukturiran izveštaj — sažetak, nivo rizika, šta je zdravo, probleme, optimizacije i plan; svaka stavka plana nosi sopstvenu akciju, procenu napora, komande i oznaku automatske primene.' },
      { label: 'Vaša odluka', desc: 'Pregledate izveštaj direktno u interfejsu preko Cloud AI i odobravate plan. Bezbedne stavke se primenjuju same; sve rizično (HIGH / CRITICAL) čeka vašu reč, a sistem otvara safety-ticket za preostali rizik.' },
      { label: 'Izvršenje sa bezbednosnom proverom', desc: 'Za svaku odobrenu stavku, platformski specijalista generiše tačnu komandu za vaše okruženje (AWS / GCP / Azure / on-prem). Sysadmin Officer je proverava — odobrava, sužava na najmanju privilegiju ili eskalira čoveku. Execution Agent je zatim izvršava (prvo dry-run) i upisuje tačan rezultat i povratni kod u istoriju servisa.' },
      { label: 'Kontinuirani monitoring', desc: 'Monitoring Agent u realnom vremenu strimuje metrike; platforma ih upoređuje sa pragovima, deduplikuje i pretvara u prioritizovane preporuke. Trenutno uočava anomaliju ili incident u nastajanju — i nudi rešenje pre nego što problem postane vaš.' },
      { label: 'Detekcija i odgovor na pretnje', desc: 'Na prvi znak napada ili virusa, agent ili oficir trenutno upozorava Sysadmin Officer-a, koji poziva ITDR modul — automatsko presretanje, odbranu i uklanjanje virusa. Sysadmin modul zatim čisti posledice incidenta i vraća server u prvobitno zdravo stanje, tako da vaši korisnici ništa ne primete.' },
      { label: 'Modernizacija kroz AI Studio', desc: 'Treba li vam proširenje ili skaliranje sistema? Opisujete zadatak Cloud AI-u, Sysadmin Officer ga pretvara u posao, AI Studio piše arhitekturu i kod, GLM-5.2 proverava svaku liniju radi ispravnosti i ranjivosti, testovi se izvršavaju — i nakon vašeg odobrenja ažuriranje se integriše u vaše servere i pušta u rad.' },
    ],
    closing:
      'Dva pravila prožimaju svih sedam koraka: podrazumevani dry-run, i poslednja reč o svemu rizičnom je uvek vaša. A svaka promena završava u vašoj istoriji servisa, spremna za reviziju u svakom trenutku.',
    diag: { topology: 'Topologija postavljanja', lifecycle: 'Radni ciklus', gate: 'Bezbednosna kapija izvršenja', invariants: 'Podrazumevani dry-run · vaše odobrenje za sve rizično · sve u istoriji servisa' },
  },
  pt: {
    h: 'Implantação da plataforma e o ciclo operacional completo',
    topoH: 'Onde é executado',
    topoLead:
      'No seu servidor não corre nada pesado — apenas um agente leve. Ele comunica com a plataforma através de canais encriptados (gRPC + HTTPS) e, por defeito, não altera nada sem a sua decisão. Toda a computação reside do lado da plataforma, em três camadas:',
    topo: [
      { label: 'Control plane', desc: 'Orquestração: a fila de tarefas, a lógica do Sysadmin Officer, o gateway de modelos, a base de conhecimento Doctrine, monitorização e alertas. Todo o estado e o seu histórico de serviço residem aqui.' },
      { label: 'Frota de modelos de IA', desc: 'Os oficiais e especialistas em GPU, implantados na sua região — assim a sua telemetria e código permanecem dentro do contorno e nunca saem. A validação também é autoalojada — o GLM-5.2, o cérebro principal, revê alterações de maior risco dentro do contorno; nada sai.' },
      { label: 'Multi-região', desc: 'Um nó da plataforma é implantado na sua região, em qualquer cloud principal ou on-prem. Quando surge procura na Ásia ou nas Américas, montamos uma stack lá, para que os seus dados e a sua latência permaneçam locais.' },
    ],
    topoNote:
      'Para um contorno fechado, toda a stack é implantada dentro do seu próprio perímetro — o nível Enterprise, uma frota de modelos local, com zero chamadas de saída.',
    stepsH: 'O que o sistema faz — passo a passo',
    steps: [
      { label: 'Onboarding e provisionamento', desc: 'Você liga um servidor — ele passa a porta de faturação e regista-se num registo único de ativos com o seu próprio token; escolhe o modo (automação total ou monitorização). O agente é instalado, o seu histórico de serviço abre, e cada ação a partir daqui fica registada nele.' },
      { label: 'Auditoria inicial', desc: 'O agente executa 18 verificações predefinidas: o SO e o seu estado, serviços em execução, carga de disco / memória / rede, pacotes instalados, configurações-chave, metadados de logs e sinais de segurança. O Sysadmin Officer raciocina sobre eles e devolve um relatório rigorosamente estruturado — resumo, nível de risco, o que está saudável, problemas, otimizações e um plano; cada item do plano tem a sua própria ação, uma estimativa de esforço, comandos e um indicador de aplicação automática.' },
      { label: 'A sua decisão', desc: 'Revê o relatório diretamente na interface através do Cloud AI e aprova o plano. Os itens seguros aplicam-se sozinhos; tudo o que é arriscado (HIGH / CRITICAL) espera a sua palavra, e o sistema abre um safety-ticket para o risco residual.' },
      { label: 'Execução verificada quanto à segurança', desc: 'Para cada item aprovado, o especialista de plataforma gera o comando exato para o seu ambiente (AWS / GCP / Azure / on-prem). O Sysadmin Officer revê-o — aprova, restringe ao privilégio mínimo, ou escala para um humano. O Execution Agent executa-o então (primeiro em dry-run) e escreve o resultado exato e o código de retorno no histórico de serviço.' },
      { label: 'Monitorização contínua', desc: 'O Monitoring Agent transmite métricas em tempo real; a plataforma compara-as com limiares, remove duplicados e transforma-as em recomendações priorizadas. Deteta uma anomalia ou um incidente em formação num instante — e oferece uma correção antes de o problema se tornar seu.' },
      { label: 'Deteção e resposta a ameaças', desc: 'Ao primeiro sinal de um ataque ou vírus, o agente ou um oficial alerta instantaneamente o Sysadmin Officer, que chama o módulo ITDR — interceção, defesa e remoção de vírus automáticas. O módulo Sysadmin limpa depois as sequelas do incidente e restaura o servidor ao seu estado saudável original, sem que os seus utilizadores notem nada.' },
      { label: 'Modernização através do AI Studio', desc: 'Precisa de expandir ou escalar o sistema? Descreve a tarefa ao Cloud AI, o Sysadmin Officer transforma-a num trabalho, o AI Studio escreve a arquitetura e o código, o GLM-5.2 revê cada linha quanto a correção e vulnerabilidades, os testes são executados — e após a sua aprovação a atualização integra-se nos seus servidores e entra em produção.' },
    ],
    closing:
      'Duas regras percorrem os sete passos: dry-run por defeito, e a última palavra sobre tudo o que é arriscado é sempre sua. E cada alteração fica registada no seu histórico de serviço, pronto para auditoria a qualquer momento.',
    diag: { topology: 'Topologia de implantação', lifecycle: 'Ciclo operacional', gate: 'Porta de segurança de execução', invariants: 'Dry-run por defeito · a sua aprovação em tudo o que é arriscado · tudo no histórico de serviço' },
  },
  hi: {
    h: 'प्लेटफ़ॉर्म तैनाती और पूरा संचालन चक्र',
    topoH: 'यह कहाँ चलता है',
    topoLead:
      'आपके सर्वर पर कुछ भी भारी नहीं चलता — सिर्फ एक हल्का एजेंट। यह एन्क्रिप्टेड चैनलों (gRPC + HTTPS) पर प्लेटफ़ॉर्म से बात करता है और डिफ़ॉल्ट रूप से आपके निर्णय के बिना कुछ नहीं बदलता। सारी कंप्यूटिंग प्लेटफ़ॉर्म की ओर, तीन परतों में होती है:',
    topo: [
      { label: 'कंट्रोल प्लेन', desc: 'ऑर्केस्ट्रेशन: टास्क कतार, Sysadmin Officer तर्क, मॉडल गेटवे, Doctrine नॉलेज बेस, मॉनिटरिंग और अलर्टिंग। सारी स्थिति और आपकी सेवा इतिहास यहीं रहता है।' },
      { label: 'AI मॉडल फ्लीट', desc: 'GPU पर ऑफिसर और विशेषज्ञ, आपके क्षेत्र में तैनात — इसलिए आपका टेलीमेट्री और कोड कॉन्टूर के भीतर रहता है और कभी बाहर नहीं जाता। सत्यापन भी सेल्फ-होस्टेड है — GLM-5.2, मुख्य मस्तिष्क, कॉन्टूर के भीतर उच्च-जोखिम वाले बदलावों की समीक्षा करता है; कुछ भी बाहर नहीं जाता।' },
      { label: 'मल्टी-रीजन', desc: 'एक प्लेटफ़ॉर्म नोड आपके क्षेत्र में, किसी भी प्रमुख क्लाउड या on-prem पर तैनात होता है। जब एशिया या अमेरिका में मांग दिखती है, हम वहां एक स्टैक खड़ा करते हैं, ताकि आपका डेटा और लेटेंसी दोनों स्थानीय रहें।' },
    ],
    topoNote:
      'बंद कॉन्टूर के लिए, पूरा स्टैक आपकी अपनी परिधि के भीतर तैनात होता है — Enterprise स्तर, एक स्थानीय मॉडल फ्लीट, बिना किसी आउटबाउंड कॉल के।',
    stepsH: 'सिस्टम क्या करता है — चरण दर चरण',
    steps: [
      { label: 'ऑनबोर्डिंग और प्रोविजनिंग', desc: 'आप एक सर्वर कनेक्ट करते हैं — यह बिलिंग गेट पार करता है और अपने टोकन के साथ एक एकल एसेट रजिस्ट्री में पंजीकृत होता है; आप मोड चुनते हैं (पूर्ण स्वचालन या मॉनिटरिंग)। एजेंट स्थापित होता है, आपकी सेवा इतिहास खुलती है, और यहां से हर कार्रवाई उसमें लिखी जाती है।' },
      { label: 'प्रारंभिक ऑडिट', desc: 'एजेंट 18 पूर्वनिर्धारित जाँचें चलाता है: OS और उसकी स्थिति, चल रही सेवाएँ, डिस्क / मेमोरी / नेटवर्क लोड, इंस्टॉल किए गए पैकेज, मुख्य कॉन्फ़िगरेशन, लॉग मेटाडेटा और सुरक्षा संकेत। Sysadmin Officer उन पर तर्क करता है और एक कड़ाई से संरचित रिपोर्ट लौटाता है — सारांश, जोखिम स्तर, क्या स्वस्थ है, समस्याएँ, अनुकूलन और एक योजना; योजना की हर मद में अपनी कार्रवाई, प्रयास अनुमान, कमांड और एक ऑटो-अप्लाई फ्लैग होता है।' },
      { label: 'आपका निर्णय', desc: 'आप Cloud AI के माध्यम से इंटरफ़ेस में सीधे रिपोर्ट की समीक्षा करते हैं और योजना को मंजूरी देते हैं। सुरक्षित मदें स्वयं लागू हो जाती हैं; कोई भी जोखिम भरी चीज़ (HIGH / CRITICAL) आपके शब्द की प्रतीक्षा करती है, और सिस्टम बचे हुए जोखिम के लिए एक सेफ्टी टिकट खोलता है।' },
      { label: 'सुरक्षा-जाँचित निष्पादन', desc: 'हर स्वीकृत मद के लिए, प्लेटफ़ॉर्म विशेषज्ञ आपके वातावरण (AWS / GCP / Azure / on-prem) के लिए सटीक कमांड बनाता है। Sysadmin Officer इसकी समीक्षा करता है — स्वीकृत करें, न्यूनतम विशेषाधिकार तक सीमित करें, या किसी इंसान को बढ़ाएं। फिर Execution Agent इसे चलाता है (पहले dry-run) और सटीक परिणाम और रिटर्न कोड सेवा इतिहास में लिखता है।' },
      { label: 'निरंतर मॉनिटरिंग', desc: 'Monitoring Agent रीयल-टाइम में मेट्रिक्स स्ट्रीम करता है; प्लेटफ़ॉर्म उन्हें थ्रेशोल्ड से तुलना करता है, उन्हें डिड्यूप्लिकेट करता है, और उन्हें प्राथमिकता वाली सिफारिशों में बदल देता है। यह तुरंत विसंगति या पनपती हुई घटना देखता है — और समस्या आपकी बनने से पहले समाधान प्रस्तुत करता है।' },
      { label: 'खतरे की पहचान और प्रतिक्रिया', desc: 'हमले या वायरस के पहले संकेत पर, एजेंट या ऑफिसर तुरंत Sysadmin Officer को सचेत करता है, और यह ITDR मॉड्यूल को बुलाता है — स्वचालित अवरोधन, बचाव और वायरस हटाना। इसके बाद Sysadmin मॉड्यूल घटना के बाद की सफाई करता है और सर्वर को उसकी मूल स्वस्थ स्थिति में बहाल करता है, ताकि आपके उपयोगकर्ताओं को कुछ भी नज़र न आए।' },
      { label: 'AI Studio के माध्यम से आधुनिकीकरण', desc: 'सिस्टम को विस्तारित या स्केल करना है? आप Cloud AI को कार्य का वर्णन करते हैं, Sysadmin Officer इसे एक कार्य में बदलता है, AI Studio आर्किटेक्चर और कोड लिखता है, GLM-5.2 हर पंक्ति की शुद्धता और कमजोरियों की समीक्षा करता है, टेस्ट चलते हैं — और आपकी मंजूरी के बाद अपडेट आपके सर्वरों में एकीकृत होकर लाइव हो जाता है।' },
    ],
    closing:
      'सातों चरणों में दो नियम चलते हैं: डिफ़ॉल्ट रूप से dry-run, और किसी भी जोखिम भरी चीज़ पर अंतिम शब्द हमेशा आपका है। और हर बदलाव आपकी सेवा इतिहास में दर्ज होता है, किसी भी समय ऑडिट के लिए तैयार।',
    diag: { topology: 'तैनाती टोपोलॉजी', lifecycle: 'संचालन चक्र', gate: 'निष्पादन सुरक्षा गेट', invariants: 'डिफ़ॉल्ट रूप से dry-run · जोखिम भरे मामलों पर आपकी मंजूरी · सब कुछ सेवा इतिहास में' },
  },
  tr: {
    h: 'Platform dağıtımı ve tam işletim döngüsü',
    topoH: 'Nerede çalışır',
    topoLead:
      'Sunucunuzda ağır hiçbir şey çalışmaz — sadece hafif bir ajan. Şifreli kanallar (gRPC + HTTPS) üzerinden platformla konuşur ve varsayılan olarak sizin kararınız olmadan hiçbir şeyi değiştirmez. Tüm hesaplama, üç katmanda platform tarafında yaşar:',
    topo: [
      { label: 'Kontrol düzlemi', desc: 'Orkestrasyon: görev kuyruğu, Sysadmin Officer mantığı, model ağ geçidi, Doctrine bilgi tabanı, izleme ve uyarılar. Tüm durum ve hizmet geçmişiniz burada yaşar.' },
      { label: 'AI model filosu', desc: 'Bölgenizde dağıtılan GPU üzerindeki subaylar ve uzmanlar — böylece telemetriniz ve kodunuz kontur içinde kalır ve asla dışarı çıkmaz. Doğrulama da kendi barındırılır — ana beyin GLM-5.2, kontur içinde daha yüksek riskli değişiklikleri inceler; hiçbir şey dışarıyı aramaz.' },
      { label: 'Çoklu bölge', desc: 'Bir platform düğümü, herhangi bir büyük bulut veya on-prem üzerinde bölgenizde dağıtılır. Asya veya Amerika’da talep ortaya çıktığında, orada bir yığın kurarız, böylece hem verileriniz hem de gecikmeniz yerel kalır.' },
    ],
    topoNote:
      'Kapalı bir kontur için, tüm yığın kendi çevrenizin içinde dağıtılır — Enterprise katmanı, yerel bir model filosu ve sıfır giden çağrı ile.',
    stepsH: 'Sistem ne yapar — adım adım',
    steps: [
      { label: 'Onboarding ve provizyon', desc: 'Bir sunucu bağlarsınız — faturalama kapısından geçer ve kendi jetonuyla tek bir varlık kaydına kaydolur; modu seçersiniz (tam otomasyon veya izleme). Ajan kurulur, hizmet geçmişiniz açılır ve buradan itibaren her eylem ona yazılır.' },
      { label: 'İlk denetim', desc: 'Ajan 18 önceden tanımlanmış kontrol çalıştırır: işletim sistemi ve durumu, çalışan servisler, disk / bellek / ağ yükü, kurulu paketler, kritik yapılandırmalar, günlük meta verileri ve güvenlik sinyalleri. Sysadmin Officer bunlar üzerinde akıl yürütür ve sıkıca yapılandırılmış bir rapor döndürür — özet, risk seviyesi, sağlıklı olan, sorunlar, optimizasyonlar ve bir plan; her plan öğesi kendi eylemini, çaba tahminini, komutlarını ve otomatik uygulama bayrağını taşır.' },
      { label: 'Sizin kararınız', desc: 'Raporu doğrudan arayüzde Cloud AI üzerinden inceler ve planı onaylarsınız. Güvenli öğeler kendiliğinden uygulanır; riskli olan her şey (HIGH / CRITICAL) sizin sözünüzü bekler ve sistem kalan risk için bir güvenlik bileti açar.' },
      { label: 'Güvenlik kontrollü yürütme', desc: 'Onaylanan her öğe için platform uzmanı, ortamınıza (AWS / GCP / Azure / on-prem) özgü tam komutu üretir. Sysadmin Officer bunu inceler — onaylar, en az ayrıcalığa daraltır veya bir insana yükseltir. Ardından Execution Agent onu çalıştırır (önce dry-run) ve tam sonucu ve dönüş kodunu hizmet geçmişine yazar.' },
      { label: 'Sürekli izleme', desc: 'Monitoring Agent metrikleri gerçek zamanlı olarak akıtır; platform bunları eşiklerle karşılaştırır, tekrarları ayıklar ve önceliklendirilmiş önerilere dönüştürür. Bir anomaliyi veya oluşmakta olan bir olayı anında görür — ve sorun sizin olmadan önce bir çözüm sunar.' },
      { label: 'Tehdit tespiti ve müdahale', desc: 'Bir saldırının veya virüsün ilk belirtisinde, ajan veya subay Sysadmin Officer’ı anında uyarır ve o da ITDR modülünü çağırır — otomatik engelleme, savunma ve virüs temizleme. Sysadmin modülü ardından olayın izlerini temizler ve sunucuyu orijinal sağlıklı durumuna geri getirir, böylece kullanıcılarınız hiçbir şey fark etmez.' },
      { label: 'AI Studio ile modernizasyon', desc: 'Sistemi genişletmeniz veya ölçeklendirmeniz mi gerekiyor? Görevi Cloud AI’a anlatırsınız, Sysadmin Officer onu bir işe dönüştürür, AI Studio mimariyi ve kodu yazar, GLM-5.2 her satırı doğruluk ve zafiyetler açısından inceler, testler çalıştırılır — ve onayınızdan sonra güncelleme sunucularınıza entegre olur ve canlıya alınır.' },
    ],
    closing:
      'Yedi adımın tamamında iki kural geçerlidir: varsayılan olarak dry-run ve riskli her konuda son söz her zaman sizindir. Ve her değişiklik hizmet geçmişinize düşer, her an denetime hazır halde.',
    diag: { topology: 'Dağıtım topolojisi', lifecycle: 'İşletim döngüsü', gate: 'Yürütme güvenlik kapısı', invariants: 'Varsayılan olarak dry-run · riskli her şeyde sizin onayınız · her şey hizmet geçmişinde' },
  },
  ar: {
    h: 'نشر المنصة ودورة التشغيل الكاملة',
    topoH: 'أين يعمل',
    topoLead:
      'لا يعمل شيء ثقيل على خادمك — فقط عميل واحد خفيف الوزن. يتحدث مع المنصة عبر قنوات مشفّرة (gRPC + HTTPS) ولا يغيّر شيئًا افتراضيًا دون قرارك. يعيش كل الحساب في جانب المنصة، ضمن ثلاث طبقات:',
    topo: [
      { label: 'مستوى التحكم (control plane)', desc: 'التنسيق: طابور المهام، منطق Sysadmin Officer، بوابة النماذج، قاعدة معرفة Doctrine، المراقبة والتنبيهات. هنا تعيش كل الحالة وسجل خدمتك.' },
      { label: 'أسطول نماذج الذكاء الاصطناعي', desc: 'الضباط والمتخصصون على وحدات معالجة الرسوميات (GPU)، منشورون في منطقتك — بحيث تبقى بياناتك القياسية وكودك داخل الكنتور ولا يغادرانه أبدًا. التحقق أيضًا مستضاف ذاتيًا — GLM-5.2، العقل الرئيسي، يراجع التغييرات الأعلى خطورة داخل الكنتور؛ لا شيء يستدعي الخارج.' },
      { label: 'متعدد المناطق', desc: 'يُنشر عقدة من المنصة في منطقتك، على أي سحابة رئيسية أو بنية محلية. عندما يظهر طلب في آسيا أو الأمريكتين، ننشئ حزمة هناك، بحيث تبقى بياناتك وزمن الاستجابة محليين.' },
    ],
    topoNote:
      'بالنسبة لكنتور مغلق، تُنشر الحزمة بأكملها داخل محيطك الخاص — مستوى Enterprise، أسطول نماذج محلي، بدون أي مكالمات صادرة.',
    stepsH: 'ما يفعله النظام — خطوة بخطوة',
    steps: [
      { label: 'الإعداد والتزويد', desc: 'تصل خادمًا — يجتاز بوابة الفوترة ويسجَّل في سجل أصول واحد برمز خاص به؛ تختار الوضع (أتمتة كاملة أو مراقبة). يُثبَّت العميل، ويُفتح سجل خدمتك، ويُسجَّل فيه كل إجراء من هنا فصاعدًا.' },
      { label: 'التدقيق الأولي', desc: 'يجري العميل 18 فحصًا محددًا مسبقًا: نظام التشغيل وحالته، الخدمات الجارية، حِمل القرص / الذاكرة / الشبكة، الحزم المثبتة، الإعدادات الرئيسية، بيانات السجلات الوصفية وإشارات الأمان. يستنتج Sysadmin Officer منها ويعيد تقريرًا منظمًا بدقة — ملخص، مستوى الخطورة، ما هو سليم، المشكلات، التحسينات وخطة؛ يحمل كل بند من الخطة إجراءه الخاص، وتقدير الجهد، والأوامر، وعلامة التطبيق التلقائي.' },
      { label: 'قرارك', desc: 'تراجع التقرير مباشرة في الواجهة عبر Cloud AI وتوافق على الخطة. تُطبَّق البنود الآمنة من تلقاء نفسها؛ وينتظر أي أمر محفوف بالمخاطر (HIGH / CRITICAL) كلمتك، ويفتح النظام تذكرة أمان للخطر المتبقي.' },
      { label: 'التنفيذ المتحقق من أمانه', desc: 'لكل بند تمت الموافقة عليه، يولّد متخصص المنصة الأمر الدقيق لبيئتك (AWS / GCP / Azure / بنية محلية). يراجعه Sysadmin Officer — الموافقة، أو التضييق إلى أقل امتياز، أو التصعيد إلى إنسان. ثم ينفّذه Execution Agent (كتجربة جافة أولاً) ويسجّل النتيجة الدقيقة ورمز الإرجاع في سجل الخدمة.' },
      { label: 'المراقبة المستمرة', desc: 'يبث Monitoring Agent المقاييس في الوقت الفعلي؛ تقارنها المنصة بالحدود، وتزيل التكرار منها، وتحوّلها إلى توصيات مرتبة حسب الأولوية. يرى شذوذًا أو حادثًا وشيكًا في لحظة — ويقدّم حلاً قبل أن تصبح المشكلة مشكلتك.' },
      { label: 'كشف التهديدات والاستجابة لها', desc: 'عند أول علامة على هجوم أو فيروس، ينبّه العميل أو الضابط Sysadmin Officer على الفور، الذي يستدعي وحدة ITDR — اعتراض ودفاع وإزالة فيروس تلقائيًا. تنظّف وحدة Sysadmin بعد ذلك آثار الحادث وتعيد الخادم إلى حالته السليمة الأصلية، بحيث لا يلاحظ مستخدموك أي شيء.' },
      { label: 'التحديث عبر AI Studio', desc: 'تحتاج إلى توسيع النظام أو تكبيره؟ تصف المهمة لـ Cloud AI، ويحوّلها Sysadmin Officer إلى عمل، ويكتب AI Studio البنية والكود، ويراجع GLM-5.2 كل سطر من حيث الصحة والثغرات، وتُشغَّل الاختبارات — وبعد موافقتك، يُدمَج التحديث في خوادمك ويُطلَق فعليًا.' },
    ],
    closing:
      'قاعدتان تسريان عبر الخطوات السبع كلها: التجربة الجافة افتراضيًا، والكلمة الأخيرة في أي أمر محفوف بالمخاطر تبقى دائمًا لك. وكل تغيير يُسجَّل في سجل خدمتك، جاهزًا للتدقيق في أي وقت.',
    diag: { topology: 'طوبولوجيا النشر', lifecycle: 'دورة التشغيل', gate: 'بوابة أمان التنفيذ', invariants: 'تجربة جافة افتراضيًا · موافقتك على كل ما هو محفوف بالمخاطر · كل شيء في سجل الخدمة' },
  },
  el: {
    h: 'Ανάπτυξη πλατφόρμας & πλήρης λειτουργικός κύκλος',
    topoH: 'Πού εκτελείται',
    topoLead:
      'Στον διακομιστή σας δεν εκτελείται τίποτα βαρύ — μόνο ένας ελαφρύς agent. Επικοινωνεί με την πλατφόρμα μέσω κρυπτογραφημένων καναλιών (gRPC + HTTPS) και, από προεπιλογή, δεν αλλάζει τίποτα χωρίς τη δική σας απόφαση. Όλη η υπολογιστική ισχύς βρίσκεται στην πλευρά της πλατφόρμας, σε τρία επίπεδα:',
    topo: [
      { label: 'Επίπεδο ελέγχου (control plane)', desc: 'Ενορχήστρωση: η ουρά εργασιών, η λογική του Sysadmin Officer, η πύλη μοντέλων, η βάση γνώσεων Doctrine, monitoring και ειδοποιήσεις. Εδώ ζουν όλη η κατάσταση και το ιστορικό υπηρεσίας σας.' },
      { label: 'Στόλος μοντέλων AI', desc: 'Οι αξιωματικοί και οι ειδικοί σε GPU, αναπτυγμένοι στην περιοχή σας — έτσι η τηλεμετρία και ο κώδικάς σας παραμένουν εντός του περιγράμματος και δεν το εγκαταλείπουν ποτέ. Η επικύρωση είναι επίσης αυτοφιλοξενούμενη — το GLM-5.2, ο κύριος εγκέφαλος, εξετάζει αλλαγές υψηλότερου κινδύνου εντός του περιγράμματος· τίποτα δεν καλεί προς τα έξω.' },
      { label: 'Πολλαπλές περιοχές', desc: 'Ένας κόμβος πλατφόρμας αναπτύσσεται στην περιοχή σας, σε οποιοδήποτε μεγάλο cloud ή on-prem. Όταν εμφανίζεται ζήτηση στην Ασία ή στην Αμερική, στήνουμε ένα stack εκεί, ώστε τα δεδομένα και η καθυστέρησή σας να παραμένουν τοπικά.' },
    ],
    topoNote:
      'Για ένα κλειστό περίγραμμα, ολόκληρο το stack αναπτύσσεται εντός της δικής σας περιμέτρου — το επίπεδο Enterprise, ένας τοπικός στόλος μοντέλων, με μηδέν εξερχόμενες κλήσεις.',
    stepsH: 'Τι κάνει το σύστημα — βήμα προς βήμα',
    steps: [
      { label: 'Onboarding & provisioning', desc: 'Συνδέετε έναν διακομιστή — περνάει την πύλη χρέωσης και καταχωρείται σε ένα ενιαίο μητρώο assets με το δικό του token· επιλέγετε τη λειτουργία (πλήρης αυτοματοποίηση ή monitoring). Ο agent εγκαθίσταται, ανοίγει το ιστορικό υπηρεσίας σας, και κάθε ενέργεια από εδώ και πέρα καταγράφεται σε αυτό.' },
      { label: 'Αρχικός έλεγχος', desc: 'Ο agent εκτελεί 18 προκαθορισμένους ελέγχους: το λειτουργικό σύστημα και την κατάστασή του, τις εκτελούμενες υπηρεσίες, το φορτίο δίσκου / μνήμης / δικτύου, εγκατεστημένα πακέτα, βασικές διαμορφώσεις, μεταδεδομένα logs και σήματα ασφαλείας. Ο Sysadmin Officer τα αναλύει και επιστρέφει μια αυστηρά δομημένη αναφορά — σύνοψη, επίπεδο κινδύνου, τι είναι υγιές, προβλήματα, βελτιστοποιήσεις και ένα σχέδιο· κάθε στοιχείο του σχεδίου φέρει τη δική του ενέργεια, εκτίμηση προσπάθειας, εντολές και μια σημαία αυτόματης εφαρμογής.' },
      { label: 'Η απόφασή σας', desc: 'Εξετάζετε την αναφορά απευθείας στη διεπαφή μέσω του Cloud AI και εγκρίνετε το σχέδιο. Τα ασφαλή στοιχεία εφαρμόζονται μόνα τους· οτιδήποτε ριψοκίνδυνο (HIGH / CRITICAL) περιμένει τη δική σας έγκριση, και το σύστημα ανοίγει ένα safety-ticket για τον υπολειπόμενο κίνδυνο.' },
      { label: 'Εκτέλεση με έλεγχο ασφαλείας', desc: 'Για κάθε εγκεκριμένο στοιχείο, ο ειδικός της πλατφόρμας δημιουργεί την ακριβή εντολή για το περιβάλλον σας (AWS / GCP / Azure / on-prem). Ο Sysadmin Officer την εξετάζει — εγκρίνει, τη στενεύει στο ελάχιστο προνόμιο, ή την κλιμακώνει σε άνθρωπο. Στη συνέχεια, ο Execution Agent την εκτελεί (πρώτα ως dry-run) και καταγράφει το ακριβές αποτέλεσμα και τον κωδικό επιστροφής στο ιστορικό υπηρεσίας.' },
      { label: 'Συνεχής παρακολούθηση', desc: 'Ο Monitoring Agent μεταδίδει μετρήσεις σε πραγματικό χρόνο· η πλατφόρμα τις συγκρίνει με όρια, τις αποδιπλασιάζει και τις μετατρέπει σε ιεραρχημένες συστάσεις. Εντοπίζει μια ανωμαλία ή ένα αναδυόμενο περιστατικό σε μια στιγμή — και προσφέρει λύση πριν το πρόβλημα γίνει δικό σας.' },
      { label: 'Εντοπισμός & απόκριση απειλών', desc: 'Στο πρώτο σημάδι μιας επίθεσης ή ενός ιού, ο agent ή ένας αξιωματικός ειδοποιεί άμεσα τον Sysadmin Officer, ο οποίος καλεί το module ITDR — αυτόματη αναχαίτιση, άμυνα και αφαίρεση ιού. Το module Sysadmin στη συνέχεια καθαρίζει τις συνέπειες του περιστατικού και επαναφέρει τον διακομιστή στην αρχική υγιή κατάστασή του, ώστε οι χρήστες σας να μην αντιληφθούν τίποτα.' },
      { label: 'Εκσυγχρονισμός μέσω AI Studio', desc: 'Χρειάζεστε επέκταση ή κλιμάκωση του συστήματος; Περιγράφετε την εργασία στο Cloud AI, ο Sysadmin Officer τη μετατρέπει σε εργασία, το AI Studio γράφει την αρχιτεκτονική και τον κώδικα, το GLM-5.2 εξετάζει κάθε γραμμή για ορθότητα και τρωτά σημεία, εκτελούνται τα tests — και μετά την έγκρισή σας η ενημέρωση ενσωματώνεται στους διακομιστές σας και τίθεται σε λειτουργία.' },
    ],
    closing:
      'Δύο κανόνες διατρέχουν και τα επτά βήματα: dry-run από προεπιλογή, και ο τελευταίος λόγος σε οτιδήποτε ριψοκίνδυνο είναι πάντα δικός σας. Και κάθε αλλαγή καταλήγει στο ιστορικό υπηρεσίας σας, έτοιμη για έλεγχο ανά πάσα στιγμή.',
    diag: { topology: 'Τοπολογία ανάπτυξης', lifecycle: 'Λειτουργικός κύκλος', gate: 'Πύλη ασφαλείας εκτέλεσης', invariants: 'Dry-run από προεπιλογή · η έγκρισή σας σε οτιδήποτε ριψοκίνδυνο · όλα στο ιστορικό υπηρεσίας' },
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
