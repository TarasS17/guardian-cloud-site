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
    h: 'How the contour works — from signal to response',
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
      { label: 'ROE gate & graduated response', desc: 'Before any active response, the officer checks five Rules-of-Engagement gates — severity, attribution confidence, attacker class, whether the attack is ongoing, and your authorization. All pass → the graduated ladder L1–L4. Any gate fails → cap at passive defense and escalate to a human. This is what makes the response safe.' },
      { label: 'Forensics & evidence', desc: 'Everything is logged immutably before execution: indicators of compromise extracted, the attacker attributed, the full timeline preserved — audit-ready and admissible.' },
      { label: 'Debrief → doctrine', desc: 'The outcome of every incident is distilled back into doctrine as a reviewable lesson — held pending until approved, then live. Every next decision is sharper than the last.' },
    ],
    ladderH: 'The graduated response ladder',
    ladder:
      'The response is cumulative and ROE-gated. L1–L2 stay on your own server — honeypots and disinformation that feed the attacker false data. L3–L4 act against the attacker through lawful channels only: reporting to global threat-intel networks and coordinating takedown with ISPs, CERTs and law enforcement. The officer runs the full investigation — forensics → attribution → infrastructure — before anything beyond L1, and never strikes third parties.',
    closing:
      'Two invariants run through the whole contour: it is air-gapped, and active response only ever happens under doctrine and with your approval — every action logged immutably.',
  },
  ru: {
    h: 'Как работает контур — от сигнала до ответа',
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
      { label: 'ROE-гейт и градуированный ответ', desc: 'Перед любым активным ответом офицер проверяет пять гейтов правил применения — severity, уверенность атрибуции, класс атакующего, идёт ли атака сейчас и ваше разрешение. Все пройдены → градуированная лестница L1–L4. Любой не пройден → стоп на пассивной обороне и эскалация человеку. Именно это делает ответ безопасным.' },
      { label: 'Форензика и улики', desc: 'Всё логируется неизменяемо до исполнения: извлечены индикаторы компрометации (IOC), атакующий атрибутирован, сохранён полный таймлайн — готово к аудиту и юридически пригодно.' },
      { label: 'Дебриф → доктрина', desc: 'Итог каждого инцидента дистиллируется обратно в доктрину как проверяемый урок — держится в pending до одобрения, затем в работе. Каждое следующее решение острее предыдущего.' },
    ],
    ladderH: 'Градуированная лестница противодействия',
    ladder:
      'Противодействие кумулятивно и ограничено ROE. L1–L2 остаются на вашем сервере — ловушки и дезинформация, скармливающие атакующему ложные данные. L3–L4 действуют против атакующего только законными каналами: репорт в глобальные threat-intel сети и координация takedown с провайдерами, CERT и правоохранителями. Офицер проводит полное расследование — форензика → атрибуция → инфраструктура — прежде чем что-либо выше L1, и никогда не бьёт по третьим сторонам.',
    closing:
      'Через весь контур проходят два инварианта: он изолирован (air-gapped), и активное противодействие случается только по доктрине и с вашего одобрения — каждое действие в неизменяемом логе.',
  },
  zh: {
    h: '防禦鏈如何運作 —— 從訊號到回應',
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
      { label: 'ROE 閘門與分級回應', desc: '在任何主動回應之前，安全官會檢查五道交戰守則閘門 —— 嚴重度、歸因信心、攻擊者等級、攻擊是否進行中，以及您的授權。全部通過 → 分級階梯 L1–L4。任一閘門未過 → 上限為被動防禦並上報人工。這正是讓回應「安全」的關鍵。' },
      { label: '鑑識與證據', desc: '一切在執行前皆不可變地記錄：提取入侵指標（IOC）、完成攻擊者歸因、保全完整時間軸 —— 可供稽核且具法律效力。' },
      { label: '事後復盤 → 知識庫', desc: '每起事件的結果都被提煉回知識庫，成為可審閱的經驗 —— 在核准前維持 pending 狀態，核准後即生效。每一次決策都比上一次更銳利。' },
    ],
    ladderH: '分級回應階梯',
    ladder:
      '回應是累進式的，並受 ROE 嚴格約束。L1–L2 僅在您自己的伺服器上進行 —— 以蜜罐與假情報餵給攻擊者錯誤資料。L3–L4 僅透過合法管道對攻擊者行動：呈報全球威脅情報網路，並協同 ISP、CERT 與執法機關進行下架（takedown）。在採取任何高於 L1 的行動前，安全官會完成完整調查 —— 鑑識 → 歸因 → 基礎設施 —— 且絕不波及第三方。',
    closing:
      '貫穿整條防禦鏈的兩大不變法則：它是隔離（air-gapped）的；主動回應僅在守則允許且取得您的授權下執行 —— 每一個動作皆不可變地記錄在案。',
  },
  fr: {
    h: 'Comment fonctionne le contour — du signal à la frappe',
    topoH: 'Où cela fonctionne',
    topoLead: "Seul un agent léger tourne sur votre serveur — il diffuse des signaux de sécurité via des canaux chiffrés (gRPC + HTTPS). Toute la détection et le raisonnement se font sur la flotte GPU de la plateforme dans votre région, et l'ensemble du contour ITDR est air-gapped : aucune télémétrie ni clé n'en sort jamais.",
    topo: [
      { label: 'Couche de détection', desc: 'Trois boucliers (Qwen3-4B + LoRA) sur GPU, classifiant une menace en une fraction de seconde.' },
      { label: 'Couche de décision', desc: "L'officier ITDR (Gemma-4) plus Doctrine (ROE, playbooks, threat intel) — raisonnement et politique, entièrement dans la région." },
      { label: 'Contour air-gapped', desc: "Aucun appel LLM ou API externe à l'intérieur du contour. Le seul trafic sortant consiste à signaler un attaquant par des canaux légaux — listes noires publiques, FAI / CERT / forces de l'ordre." },
    ],
    topoNote: "Pour un périmètre fermé, tout le contour se déploie au sein de votre propre infrastructure — le palier Enterprise, entièrement isolé, sans aucun appel sortant.",
    stepsH: 'Ce que fait le système — étape par étape',
    steps: [
      { label: 'Signal', desc: "Dès que quelque chose semble suspect, l'agent — ou l'officier Sysadmin — diffuse un signal de sécurité dans le contour : connexions suspectes, activité root, un processus lançant un reverse shell, un fichier signalé par l'antivirus." },
      { label: 'Détection', desc: 'Trois boucliers classifient le signal en moins d\'une seconde — abus root, vol de credentials, escalade de privilèges — chacun renvoyant un score de confiance et une correspondance MITRE ATT&CK. Si la sévérité est élevée, l\'officier est invoqué.' },
      { label: "Raisonnement de l'officier", desc: "L'officier ITDR (Gemma-4) raisonne sur l'incident corrélé, consulte la doctrine pour le playbook correspondant et les règles d'engagement, et renvoie un verdict strictement structuré — classification, sévérité et actions de réponse exactes." },
      { label: 'Confinement', desc: "Le contour agit immédiatement : bloque l'IP source, isole l'hôte, fait tourner et invalide les credentials, tue le processus malveillant. Le malware est mis en quarantaine par l'antivirus. L'attaque est stoppée avant de se propager." },
      { label: 'Porte ROE & riposte graduée', desc: "Avant toute réponse active, l'officier vérifie cinq portes de règles d'engagement — sévérité, confiance d'attribution, classe de l'attaquant, si l'attaque est en cours, et votre autorisation. Tout passe → l'échelle graduée L1–L4. Une porte échoue → plafonné à la défense passive et escaladé vers un humain. C'est ce qui rend la frappe sûre." },
      { label: 'Forensique & preuves', desc: "Tout est journalisé de manière immuable avant exécution : indicateurs de compromission extraits, attaquant attribué, chronologie complète préservée — prêt pour audit et recevable." },
      { label: 'Débriefing → doctrine', desc: "Le résultat de chaque incident est distillé dans la doctrine comme une leçon révisable — en attente jusqu'à approbation, puis actif. Chaque décision suivante est plus affûtée que la précédente." },
    ],
    ladderH: 'L\'échelle de riposte graduée',
    ladder: "La riposte est cumulative et contrôlée par les ROE. L1–L2 restent sur votre propre serveur — pots de miel et désinformation qui nourrissent l'attaquant de fausses données. L3–L4 agissent contre l'attaquant uniquement par des canaux légaux : signalement aux réseaux mondiaux de threat-intel et coordination du démantèlement avec FAI, CERT et forces de l'ordre. L'officier mène l'enquête complète — forensique → attribution → infrastructure — avant tout ce qui dépasse L1, et ne frappe jamais des tiers.",
    closing: "Deux invariants traversent tout le contour : il est air-gapped, et la riposte active ne survient jamais sans doctrine ni sans votre approbation — chaque action journalisée de manière immuable.",
  },
  de: {
    h: 'Wie das Kontur funktioniert — vom Signal zum Schlag',
    topoH: 'Wo es läuft',
    topoLead: 'Auf Ihrem Server läuft nur ein leichter Agent — er streamt Sicherheitssignale über verschlüsselte Kanäle (gRPC + HTTPS). Alle Erkennung und alles Reasoning erfolgen auf der GPU-Flotte der Plattform in Ihrer Region, und das gesamte ITDR-Kontur ist air-gapped: Weder Telemetrie noch Schlüssel verlassen es jemals.',
    topo: [
      { label: 'Erkennungsebene', desc: 'Drei Schilde (Qwen3-4B + LoRA) auf GPU, die eine Bedrohung in Sekundenbruchteilen klassifizieren.' },
      { label: 'Entscheidungsebene', desc: 'Der ITDR-Offizier (Gemma-4) plus Doctrine (ROE, Playbooks, Threat Intel) — Reasoning und Policy, vollständig in der Region.' },
      { label: 'Air-gapped-Kontur', desc: 'Keine externen LLM- oder API-Aufrufe innerhalb des Konturs. Der einzige ausgehende Verkehr ist die Meldung eines Angreifers über rechtmäßige Kanäle — öffentliche Blocklisten, ISP / CERT / Strafverfolgung.' },
    ],
    topoNote: 'Für einen geschlossenen Perimeter wird das gesamte Kontur innerhalb Ihrer eigenen Infrastruktur bereitgestellt — die Enterprise-Stufe, vollständig isoliert, ohne ausgehende Aufrufe.',
    stepsH: 'Was das System tut — Schritt für Schritt',
    steps: [
      { label: 'Signal', desc: 'Sobald etwas verdächtig aussieht, streamt der Agent — oder der Sysadmin-Offizier — ein Sicherheitssignal in das Kontur: verdächtige Logins, Root-Aktivität, ein Prozess, der eine Reverse-Shell startet, eine vom Antivirus markierte Datei.' },
      { label: 'Erkennung', desc: 'Drei Schilde klassifizieren das Signal in unter einer Sekunde — Root-Missbrauch, Credential-Diebstahl, Privilegieneskalation — jeder liefert einen Confidence-Score und ein MITRE-ATT&CK-Mapping. Bei hoher Schwere wird der Offizier hinzugezogen.' },
      { label: 'Offizier-Reasoning', desc: 'Der ITDR-Offizier (Gemma-4) durchdenkt den korrelierten Vorfall, konsultiert die Doctrine für das passende Playbook und die Einsatzregeln und liefert ein strikt strukturiertes Urteil — Klassifizierung, Schwere und die genauen Reaktionsmaßnahmen.' },
      { label: 'Eindämmung', desc: 'Das Kontur handelt sofort: blockiert die Quell-IP, isoliert den Host, rotiert und entwertet Credentials, beendet den bösartigen Prozess. Malware wird vom Antivirus unter Quarantäne gestellt. Der Angriff wird gestoppt, bevor er sich ausbreitet.' },
      { label: 'ROE-Gate & abgestufte Reaktion', desc: 'Vor jeder aktiven Reaktion prüft der Offizier fünf Rules-of-Engagement-Gates — Schwere, Attributionsvertrauen, Angreiferklasse, ob der Angriff andauert, und Ihre Autorisierung. Alle bestanden → die abgestufte Leiter L1–L4. Ein Gate schlägt fehl → Begrenzung auf passive Verteidigung und Eskalation an einen Menschen. Das macht die Reaktion sicher.' },
      { label: 'Forensik & Beweise', desc: 'Alles wird vor der Ausführung unveränderlich protokolliert: Kompromittierungsindikatoren extrahiert, Angreifer attribuiert, vollständige Zeitleiste bewahrt — auditbereit und zulässig.' },
      { label: 'Debriefing → Doctrine', desc: 'Das Ergebnis jedes Vorfalls wird als überprüfbare Lektion in die Doctrine destilliert — bis zur Genehmigung ausstehend, dann live. Jede nächste Entscheidung ist schärfer als die letzte.' },
    ],
    ladderH: 'Die abgestufte Reaktionsleiter',
    ladder: 'Die Reaktion ist kumulativ und ROE-kontrolliert. L1–L2 bleiben auf Ihrem eigenen Server — Honeypots und Desinformation, die dem Angreifer falsche Daten liefern. L3–L4 handeln gegen den Angreifer nur über rechtmäßige Kanäle: Meldung an globale Threat-Intel-Netzwerke und Koordination der Abschaltung mit ISPs, CERTs und Strafverfolgungsbehörden. Der Offizier führt die vollständige Untersuchung durch — Forensik → Attribution → Infrastruktur — bevor irgendetwas über L1 hinausgeht, und trifft nie Dritte.',
    closing: 'Zwei Invarianten durchziehen das gesamte Kontur: Es ist air-gapped, und aktive Reaktion erfolgt nur nach Doctrine und mit Ihrer Zustimmung — jede Aktion unveränderlich protokolliert.',
  },
  es: {
    h: 'Cómo funciona el contorno — de la señal a la respuesta',
    topoH: 'Dónde funciona',
    topoLead: 'En su servidor solo se ejecuta un agente ligero — transmite señales de seguridad por canales cifrados (gRPC + HTTPS). Toda la detección y el razonamiento ocurren en la flota GPU de la plataforma en su región, y todo el contorno ITDR está air-gapped: ni la telemetría ni las claves salen jamás de él.',
    topo: [
      { label: 'Capa de detección', desc: 'Tres escudos (Qwen3-4B + LoRA) en GPU, clasificando una amenaza en una fracción de segundo.' },
      { label: 'Capa de decisión', desc: 'El oficial ITDR (Gemma-4) más Doctrine (ROE, playbooks, threat intel) — razonamiento y política, enteramente en la región.' },
      { label: 'Contorno air-gapped', desc: 'Sin llamadas a LLM o API externas dentro del contorno. El único tráfico saliente es reportar a un atacante por canales legales — listas negras públicas, ISP / CERT / autoridades.' },
    ],
    topoNote: 'Para un perímetro cerrado, todo el contorno se despliega dentro de su propia infraestructura — el nivel Enterprise, totalmente aislado, sin llamadas salientes.',
    stepsH: 'Qué hace el sistema — paso a paso',
    steps: [
      { label: 'Señal', desc: 'En el instante en que algo parece sospechoso, el agente — o el oficial Sysadmin — transmite una señal de seguridad al contorno: inicios de sesión sospechosos, actividad root, un proceso que genera una reverse shell, un archivo marcado por el antivirus.' },
      { label: 'Detección', desc: 'Tres escudos clasifican la señal en menos de un segundo — abuso de root, robo de credenciales, escalada de privilegios — cada uno devuelve una puntuación de confianza y un mapeo MITRE ATT&CK. Si la severidad es alta, se invoca al oficial.' },
      { label: 'Razonamiento del oficial', desc: 'El oficial ITDR (Gemma-4) razona sobre el incidente correlacionado, consulta la doctrina para el playbook correspondiente y las reglas de enfrentamiento, y devuelve un veredicto estrictamente estructurado — clasificación, severidad y las acciones de respuesta exactas.' },
      { label: 'Contención', desc: 'El contorno actúa de inmediato: bloquea la IP de origen, aísla el host, rota e invalida credenciales, mata el proceso malicioso. El malware es puesto en cuarentena por el antivirus. El ataque se detiene antes de propagarse.' },
      { label: 'Puerta ROE y respuesta graduada', desc: 'Antes de cualquier respuesta activa, el oficial verifica cinco puertas de reglas de enfrentamiento — severidad, confianza de atribución, clase del atacante, si el ataque está en curso, y su autorización. Todas aprobadas → la escalera graduada L1–L4. Cualquier puerta falla → limitado a defensa pasiva y escalado a un humano. Esto es lo que hace segura la respuesta.' },
      { label: 'Forense y evidencia', desc: 'Todo se registra de forma inmutable antes de la ejecución: indicadores de compromiso extraídos, atacante atribuido, cronología completa preservada — listo para auditoría y admisible.' },
      { label: 'Informe → doctrina', desc: 'El resultado de cada incidente se destila de vuelta en la doctrina como una lección revisable — pendiente hasta su aprobación, luego activa. Cada decisión siguiente es más afilada que la anterior.' },
    ],
    ladderH: 'La escalera de respuesta graduada',
    ladder: 'La respuesta es acumulativa y controlada por ROE. L1–L2 se quedan en su propio servidor — honeypots y desinformación que alimentan al atacante con datos falsos. L3–L4 actúan contra el atacante solo por canales legales: reporte a redes globales de threat-intel y coordinación del takedown con ISPs, CERTs y autoridades. El oficial realiza la investigación completa — forense → atribución → infraestructura — antes de nada más allá de L1, y nunca golpea a terceros.',
    closing: 'Dos invariantes atraviesan todo el contorno: es air-gapped, y la respuesta activa solo ocurre bajo doctrina y con su aprobación — cada acción registrada de forma inmutable.',
  },
  it: {
    h: 'Come funziona il contorno — dal segnale alla risposta',
    topoH: 'Dove funziona',
    topoLead: 'Sul vostro server gira solo un agente leggero — trasmette segnali di sicurezza su canali crittografati (gRPC + HTTPS). Tutta la rilevazione e il ragionamento avvengono sulla flotta GPU della piattaforma nella vostra regione, e l\'intero contorno ITDR è air-gapped: né telemetria né chiavi ne escono mai.',
    topo: [
      { label: 'Livello di rilevamento', desc: 'Tre scudi (Qwen3-4B + LoRA) su GPU, che classificano una minaccia in una frazione di secondo.' },
      { label: 'Livello decisionale', desc: 'L\'ufficiale ITDR (Gemma-4) più Doctrine (ROE, playbook, threat intel) — ragionamento e policy, interamente nella regione.' },
      { label: 'Contorno air-gapped', desc: 'Nessuna chiamata LLM o API esterna all\'interno del contorno. L\'unico traffico in uscita è la segnalazione di un attaccante tramite canali legali — blocklist pubbliche, ISP / CERT / forze dell\'ordine.' },
    ],
    topoNote: 'Per un perimetro chiuso, l\'intero contorno viene distribuito all\'interno della vostra infrastruttura — il livello Enterprise, completamente isolato, senza chiamate in uscita.',
    stepsH: 'Cosa fa il sistema — passo dopo passo',
    steps: [
      { label: 'Segnale', desc: 'Nell\'istante in cui qualcosa sembra sospetto, l\'agente — o l\'ufficiale Sysadmin — trasmette un segnale di sicurezza nel contorno: accessi sospetti, attività root, un processo che genera una reverse shell, un file segnalato dall\'antivirus.' },
      { label: 'Rilevamento', desc: 'Tre scudi classificano il segnale in meno di un secondo — abuso di root, furto di credenziali, escalation di privilegi — ciascuno restituisce un punteggio di confidenza e una mappatura MITRE ATT&CK. Se la gravità è alta, viene invocato l\'ufficiale.' },
      { label: 'Ragionamento dell\'ufficiale', desc: 'L\'ufficiale ITDR (Gemma-4) ragiona sull\'incidente correlato, consulta la dottrina per il playbook corrispondente e le regole d\'ingaggio, e restituisce un verdetto rigorosamente strutturato — classificazione, gravità e le azioni di risposta esatte.' },
      { label: 'Contenimento', desc: 'Il contorno agisce immediatamente: blocca l\'IP di origine, isola l\'host, ruota e invalida le credenziali, termina il processo malevolo. Il malware viene messo in quarantena dall\'antivirus. L\'attacco viene fermato prima che si diffonda.' },
      { label: 'Gate ROE e risposta graduata', desc: 'Prima di qualsiasi risposta attiva, l\'ufficiale verifica cinque gate di regole d\'ingaggio — gravità, confidenza di attribuzione, classe dell\'attaccante, se l\'attacco è in corso, e la vostra autorizzazione. Tutti superati → la scala graduata L1–L4. Un gate fallisce → limitato alla difesa passiva ed escalation a un umano. Questo è ciò che rende sicura la risposta.' },
      { label: 'Forense e prove', desc: 'Tutto viene registrato in modo immutabile prima dell\'esecuzione: indicatori di compromissione estratti, attaccante attribuito, cronologia completa preservata — pronto per l\'audit e ammissibile.' },
      { label: 'Debriefing → dottrina', desc: 'Il risultato di ogni incidente viene distillato nella dottrina come lezione rivedibile — in sospeso fino all\'approvazione, poi attivo. Ogni decisione successiva è più affilata della precedente.' },
    ],
    ladderH: 'La scala di risposta graduata',
    ladder: 'La risposta è cumulativa e controllata da ROE. L1–L2 restano sul vostro server — honeypot e disinformazione che alimentano l\'attaccante con dati falsi. L3–L4 agiscono contro l\'attaccante solo tramite canali legali: segnalazione a reti globali di threat-intel e coordinamento del takedown con ISP, CERT e forze dell\'ordine. L\'ufficiale conduce l\'indagine completa — forense → attribuzione → infrastruttura — prima di qualsiasi cosa oltre L1, e non colpisce mai terze parti.',
    closing: 'Due invarianti attraversano l\'intero contorno: è air-gapped, e la risposta attiva avviene solo secondo dottrina e con la vostra approvazione — ogni azione registrata in modo immutabile.',
  },
  ja: {
    h: 'コンターの仕組み — シグナルから反撃まで',
    topoH: '動作環境',
    topoLead: 'サーバー側では軽量エージェントのみが動作し、暗号化チャネル（gRPC + HTTPS）でセキュリティシグナルをストリーミングします。すべての検知と推論はお客様のリージョン内のプラットフォームGPUフリートで行われ、ITDRコンター全体はエアギャップされています——テレメトリも鍵も外部に出ることはありません。',
    topo: [
      { label: '検知層', desc: 'GPU上の3つのシールド（Qwen3-4B + LoRA）が、瞬時に脅威を分類します。' },
      { label: '判断層', desc: 'ITDRオフィサー（Gemma-4）とDoctrine（ROE、プレイブック、脅威インテリジェンス）——推論とポリシーはすべてリージョン内で完結。' },
      { label: 'エアギャップされたコンター', desc: 'コンター内部では外部のLLMやAPI呼び出しは一切ありません。唯一の送信トラフィックは、合法的なチャネルを通じた攻撃者の報告——公開ブロックリスト、ISP/CERT/法執行機関。' },
    ],
    topoNote: '閉域境界の場合、コンター全体がお客様自身のインフラ内に展開されます——Enterpriseティア、完全に隔離、送信呼び出しゼロ。',
    stepsH: 'システムの動作 — ステップごと',
    steps: [
      { label: 'シグナル', desc: '何か不審に見える瞬間、エージェント——またはSysadminオフィサー——がセキュリティシグナルをコンターにストリーミングします：不審なログイン、rootアクティビティ、リバースシェルを起動するプロセス、アンチウイルスにフラグされたファイル。' },
      { label: '検知', desc: '3つのシールドが1秒未満でシグナルを分類します——root悪用、認証情報窃取、権限昇格——それぞれが信頼度スコアとMITRE ATT&CKマッピングを返します。深刻度が高い場合、オフィサーが呼び出されます。' },
      { label: 'オフィサーの推論', desc: 'ITDRオフィサー（Gemma-4）が相関したインシデントを推論し、対応するプレイブックと交戦規則についてドクトリンを参照し、厳密に構造化された判定——分類、深刻度、正確な対応アクション——を返します。' },
      { label: '封じ込め', desc: 'コンターは即座に動作します：送信元IPをブロック、ホストを隔離、認証情報をローテーション・無効化、悪意のあるプロセスを終了。マルウェアはアンチウイルスによって隔離されます。攻撃は拡散前に停止されます。' },
      { label: 'ROEゲートと段階的対応', desc: '能動的な対応の前に、オフィサーは5つの交戦規則ゲートを確認します——深刻度、帰属の信頼度、攻撃者クラス、攻撃が進行中か、そしてお客様の承認。すべて合格→段階的なはしごL1～L4。いずれかのゲートが失敗→受動防御にとどめ、人間にエスカレーション。これが対応を安全にする仕組みです。' },
      { label: 'フォレンジックと証拠', desc: '実行前にすべてが不変的に記録されます：侵害指標の抽出、攻撃者の帰属特定、完全なタイムラインの保存——監査対応かつ証拠能力あり。' },
      { label: 'デブリーフ → ドクトリン', desc: '各インシデントの結果は、審査可能な教訓としてドクトリンに蒸留されます——承認まで保留、その後有効化。次の判断は常に前より鋭くなります。' },
    ],
    ladderH: '段階的対応のはしご',
    ladder: '対応は累積的でROEにより制御されます。L1～L2はお客様自身のサーバー内にとどまります——攻撃者に偽データを与えるハニーポットと偽情報。L3～L4は合法的なチャネルを通じてのみ攻撃者に対して行動します：グローバルな脅威インテリジェンスネットワークへの報告、ISP・CERT・法執行機関との連携によるテイクダウン。オフィサーはL1を超える前に完全な調査——フォレンジック→帰属特定→インフラ——を実施し、第三者を攻撃することは決してありません。',
    closing: 'コンター全体を貫く2つの不変原則：エアギャップされていること、そして能動的な対応は常にドクトリンとお客様の承認のもとでのみ行われること——すべてのアクションが不変的に記録されます。',
  },
  uk: {
    h: 'Як працює контур — від сигналу до відповіді',
    topoH: 'Де це працює',
    topoLead: 'На вашому сервері працює лише легкий агент — він стрімить сигнали безпеки зашифрованими каналами (gRPC + HTTPS). Уся детекція та reasoning відбуваються на GPU-флоті платформи у вашому регіоні, і весь контур ITDR ізольований (air-gapped): ні телеметрія, ні ключі назовні не виходять.',
    topo: [
      { label: 'Шар детекції', desc: 'Три щити (Qwen3-4B + LoRA) на GPU, класифікують загрозу за частку секунди.' },
      { label: 'Шар рішення', desc: 'ITDR Officer (Gemma-4) плюс Doctrine (ROE, плейбуки, threat intel) — reasoning і політика, повністю у вашому регіоні.' },
      { label: 'Ізольований контур', desc: 'Усередині контуру немає звернень до зовнішніх LLM чи API. Єдиний вихідний трафік — репорт атакуючого законними каналами: публічні чорні списки, ISP / CERT / правоохоронці.' },
    ],
    topoNote: 'Для закритого периметра весь контур розгортається всередині вашої інфраструктури — тариф Enterprise, повністю ізольовано, без жодного звернення назовні.',
    stepsH: 'Що робить система — покроково',
    steps: [
      { label: 'Сигнал', desc: 'Щойно щось виглядає підозріло, агент — або Sysadmin Officer — стрімить сигнал безпеки в контур: підозрілі логіни, активність root, процес, що піднімає reverse shell, файл, позначений антивірусом.' },
      { label: 'Детекція', desc: 'Три щити класифікують сигнал менш ніж за секунду — захоплення root, крадіжка облікових даних, ескалація привілеїв — кожен повертає оцінку впевненості та маппінг MITRE ATT&CK. При високій severity викликається офіцер.' },
      { label: 'Reasoning офіцера', desc: 'ITDR Officer (Gemma-4) осмислює скорельований інцидент, звіряється з доктриною — відповідний плейбук і правила застосування — і повертає чітко структурований вердикт: класифікація, severity та точні дії у відповідь.' },
      { label: 'Стримування', desc: 'Контур діє миттєво: блокує source IP, ізолює хост, ротує та анулює облікові дані, вбиває шкідливий процес. Малваре відправляється в карантин антивірусом. Атака зупинена до того, як пошириться.' },
      { label: 'ROE-гейт і градуйована відповідь', desc: 'Перед будь-якою активною відповіддю офіцер перевіряє п\'ять гейтів правил застосування — severity, впевненість атрибуції, клас атакуючого, чи триває атака, і ваш дозвіл. Усі пройдено → градуйована драбина L1–L4. Будь-який не пройдено → стоп на пасивній обороні й ескалація людині. Саме це робить відповідь безпечною.' },
      { label: 'Форензика і докази', desc: 'Усе логується незмінно до виконання: витягнуто індикатори компрометації (IOC), атакуючий атрибутований, збережено повний таймлайн — готово до аудиту та юридично прийнятно.' },
      { label: 'Дебриф → доктрина', desc: 'Підсумок кожного інциденту дистилюється назад у доктрину як перевірюваний урок — тримається у pending до схвалення, потім у роботі. Кожне наступне рішення гостріше за попереднє.' },
    ],
    ladderH: 'Градуйована драбина протидії',
    ladder: 'Протидія кумулятивна і обмежена ROE. L1–L2 залишаються на вашому сервері — пастки й дезінформація, що годують атакуючого хибними даними. L3–L4 діють проти атакуючого лише законними каналами: репорт у глобальні threat-intel мережі та координація takedown з провайдерами, CERT і правоохоронцями. Офіцер проводить повне розслідування — форензика → атрибуція → інфраструктура — перш ніж щось вище L1, і ніколи не б\'є по третіх сторонах.',
    closing: 'Через весь контур проходять два інваріанти: він ізольований (air-gapped), і активне протидія трапляється лише за доктриною та з вашого схвалення — кожна дія в незмінному лозі.',
  },
  sr: {
    h: 'Како функционише контур — од сигнала до одговора',
    topoH: 'Где то ради',
    topoLead: 'На вашем серверу ради само лаки агент — он стримује безбедносне сигнале шифрованим каналима (gRPC + HTTPS). Сва детекција и резоновање се дешавају на GPU флоти платформе у вашем региону, а цео ITDR контур је изолован (air-gapped): ни телеметрија ни кључеви никада не излазе.',
    topo: [
      { label: 'Слој детекције', desc: 'Три штита (Qwen3-4B + LoRA) на GPU, класификују претњу за делић секунде.' },
      { label: 'Слој одлучивања', desc: 'ITDR официр (Gemma-4) плус Doctrine (ROE, playbook-ови, threat intel) — резоновање и политика, потпуно у региону.' },
      { label: 'Изолован контур', desc: 'Унутар контура нема позива ка спољашњим LLM или API. Једини одлазни саобраћај је пријава нападача законитим каналима — јавне блек-листе, ISP / CERT / органи реда.' },
    ],
    topoNote: 'За затворени периметар, цео контур се распоређује унутар ваше сопствене инфраструктуре — Enterprise ниво, потпуно изолован, без иједног одлазног позива.',
    stepsH: 'Шта систем ради — корак по корак',
    steps: [
      { label: 'Сигнал', desc: 'Чим нешто изгледа сумњиво, агент — или Sysadmin официр — стримује безбедносни сигнал у контур: сумњиве пријаве, root активност, процес који покреће reverse shell, фајл означен антивирусом.' },
      { label: 'Детекција', desc: 'Три штита класификују сигнал за мање од секунде — злоупотреба root-а, крађа акредитива, ескалација привилегија — сваки враћа скор поверења и MITRE ATT&CK мапирање. При високој озбиљности позива се официр.' },
      { label: 'Резоновање официра', desc: 'ITDR официр (Gemma-4) резонује о корелисаном инциденту, консултује доктрину за одговарајући playbook и правила ангажовања, и враћа строго структурисану пресуду — класификацију, озбиљност и тачне акције одговора.' },
      { label: 'Заустављање', desc: 'Контур одмах делује: блокира изворни IP, изолује хост, ротира и поништава акредитиве, убија малициозни процес. Малвер се карантинује антивирусом. Напад се зауставља пре ширења.' },
      { label: 'ROE капија и градуиран одговор', desc: 'Пре било које активне реакције, официр проверава пет капија правила ангажовања — озбиљност, поузданост приписивања, класу нападача, да ли је напад у току, и ваше овлашћење. Све прође → градуирана лестница L1–L4. Било која капија не прође → ограничење на пасивну одбрану и ескалација човеку. Управо то чини одговор безбедним.' },
      { label: 'Форензика и докази', desc: 'Све се неизменљиво бележи пре извршења: издвојени индикатори компромитације, приписан нападач, сачувана комплетна временска линија — спремно за ревизију и правно прихватљиво.' },
      { label: 'Дебрифинг → доктрина', desc: 'Исход сваког инцидента се дестилује назад у доктрину као лекција за преглед — на чекању до одобрења, затим активна. Свака следећа одлука је оштрија од претходне.' },
    ],
    ladderH: 'Лествица градуиране одмазде',
    ladder: 'Одговор је кумулативан и ограничен ROE-ом. L1–L2 остају на вашем сопственом серверу — лажне мете и дезинформације које нападачу дају лажне податке. L3–L4 делују против нападача само законитим каналима: пријава глобалним threat-intel мрежама и координација уклањања са ISP-овима, CERT-овима и органима реда. Официр спроводи потпуну истрагу — форензика → приписивање → инфраструктура — пре било чега изнад L1, и никада не удара треће стране.',
    closing: 'Кроз цео контур пролазе две инваријанте: изолован је (air-gapped), а активна одмазда се дешава само по доктрини и уз ваше одобрење — свака акција неизменљиво бележена.',
  },
  pt: {
    h: 'Como funciona o contorno — do sinal ao ataque',
    topoH: 'Onde funciona',
    topoLead: 'No seu servidor corre apenas um agente leve — transmite sinais de segurança por canais encriptados (gRPC + HTTPS). Toda a deteção e raciocínio ocorrem na frota GPU da plataforma na sua região, e todo o contorno ITDR é air-gapped: nem a telemetria nem as chaves saem alguma vez.',
    topo: [
      { label: 'Camada de deteção', desc: 'Três escudos (Qwen3-4B + LoRA) em GPU, classificando uma ameaça numa fração de segundo.' },
      { label: 'Camada de decisão', desc: 'O oficial ITDR (Gemma-4) mais Doctrine (ROE, playbooks, threat intel) — raciocínio e política, inteiramente na região.' },
      { label: 'Contorno air-gapped', desc: 'Sem chamadas a LLM ou API externas dentro do contorno. O único tráfego de saída é reportar um atacante através de canais legais — listas negras públicas, ISP / CERT / forças da ordem.' },
    ],
    topoNote: 'Para um perímetro fechado, todo o contorno é implementado dentro da sua própria infraestrutura — o nível Enterprise, totalmente isolado, sem chamadas de saída.',
    stepsH: 'O que o sistema faz — passo a passo',
    steps: [
      { label: 'Sinal', desc: 'No instante em que algo parece suspeito, o agente — ou o oficial Sysadmin — transmite um sinal de segurança para o contorno: logins suspeitos, atividade root, um processo a gerar uma reverse shell, um ficheiro assinalado pelo antivírus.' },
      { label: 'Deteção', desc: 'Três escudos classificam o sinal em menos de um segundo — abuso de root, roubo de credenciais, escalada de privilégios — cada um devolve uma pontuação de confiança e um mapeamento MITRE ATT&CK. Se a gravidade for alta, o oficial é invocado.' },
      { label: 'Raciocínio do oficial', desc: 'O oficial ITDR (Gemma-4) raciocina sobre o incidente correlacionado, consulta a doutrina para o playbook correspondente e as regras de empenhamento, e devolve um veredito rigorosamente estruturado — classificação, gravidade e as ações de resposta exatas.' },
      { label: 'Contenção', desc: 'O contorno age de imediato: bloqueia o IP de origem, isola o host, roda e invalida credenciais, mata o processo malicioso. O malware é colocado em quarentena pelo antivírus. O ataque é parado antes de se espalhar.' },
      { label: 'Porta ROE e retaliação graduada', desc: 'Antes de qualquer resposta ativa, o oficial verifica cinco portas de regras de empenhamento — gravidade, confiança de atribuição, classe do atacante, se o ataque está em curso, e a sua autorização. Todas aprovadas → a escada graduada L1–L4. Qualquer porta falha → limitado à defesa passiva e escalado para um humano. É isto que torna o ataque seguro.' },
      { label: 'Forense e provas', desc: 'Tudo é registado de forma imutável antes da execução: indicadores de comprometimento extraídos, atacante atribuído, cronologia completa preservada — pronto para auditoria e admissível.' },
      { label: 'Debriefing → doutrina', desc: 'O resultado de cada incidente é destilado de volta na doutrina como uma lição revisável — pendente até aprovação, depois ativa. Cada decisão seguinte é mais afiada do que a anterior.' },
    ],
    ladderH: 'A escada de retaliação graduada',
    ladder: 'A retaliação é cumulativa e controlada por ROE. L1–L2 ficam no seu próprio servidor — honeypots e desinformação que alimentam o atacante com dados falsos. L3–L4 agem contra o atacante apenas por canais legais: reporte a redes globais de threat-intel e coordenação do takedown com ISPs, CERTs e forças da ordem. O oficial conduz a investigação completa — forense → atribuição → infraestrutura — antes de qualquer coisa além de L1, e nunca atinge terceiros.',
    closing: 'Duas invariantes atravessam todo o contorno: é air-gapped, e a retaliação ativa só acontece sob doutrina e com a sua aprovação — cada ação registada de forma imutável.',
  },
  hi: {
    h: 'कॉन्टूर कैसे काम करता है — सिग्नल से स्ट्राइक तक',
    topoH: 'यह कहाँ चलता है',
    topoLead: 'आपके सर्वर पर केवल एक हल्का एजेंट चलता है — यह एन्क्रिप्टेड चैनलों (gRPC + HTTPS) पर सुरक्षा सिग्नल स्ट्रीम करता है। सारी डिटेक्शन और रीज़निंग आपके क्षेत्र में प्लेटफ़ॉर्म के GPU फ्लीट पर होती है, और पूरा ITDR कॉन्टूर एयर-गैप्ड है: न टेलीमेट्री, न कीज़ कभी बाहर जाती हैं।',
    topo: [
      { label: 'डिटेक्शन लेयर', desc: 'GPU पर तीन शील्ड (Qwen3-4B + LoRA), एक सेकंड के अंश में खतरे को वर्गीकृत करते हैं।' },
      { label: 'निर्णय लेयर', desc: 'ITDR ऑफिसर (Gemma-4) प्लस Doctrine (ROE, playbooks, threat intel) — रीज़निंग और नीति, पूरी तरह क्षेत्र में।' },
      { label: 'एयर-गैप्ड कॉन्टूर', desc: 'कॉन्टूर के भीतर कोई बाहरी LLM या API कॉल नहीं। एकमात्र आउटबाउंड ट्रैफ़िक वैध चैनलों के माध्यम से हमलावर की रिपोर्टिंग है — सार्वजनिक ब्लॉकलिस्ट, ISP / CERT / कानून प्रवर्तन।' },
    ],
    topoNote: 'बंद परिधि के लिए, पूरा कॉन्टूर आपके अपने इन्फ्रास्ट्रक्चर के भीतर तैनात होता है — Enterprise स्तर, पूरी तरह पृथक, शून्य आउटबाउंड कॉल के साथ।',
    stepsH: 'सिस्टम क्या करता है — चरण दर चरण',
    steps: [
      { label: 'सिग्नल', desc: 'जिस क्षण कुछ गलत लगता है, एजेंट — या Sysadmin ऑफिसर — कॉन्टूर में एक सुरक्षा सिग्नल स्ट्रीम करता है: संदिग्ध लॉगिन, root गतिविधि, एक प्रोसेस जो reverse shell बनाता है, एक फ़ाइल जिसे एंटीवायरस ने फ़्लैग किया।' },
      { label: 'डिटेक्शन', desc: 'तीन शील्ड एक सेकंड से कम में सिग्नल को वर्गीकृत करते हैं — root दुरुपयोग, क्रेडेंशियल चोरी, विशेषाधिकार वृद्धि — प्रत्येक एक कॉन्फिडेंस स्कोर और MITRE ATT&CK मैपिंग लौटाता है। उच्च गंभीरता पर ऑफिसर बुलाया जाता है।' },
      { label: 'ऑफिसर रीज़निंग', desc: 'ITDR ऑफिसर (Gemma-4) सहसंबद्ध घटना पर विचार करता है, मिलान playbook और सगाई के नियमों के लिए सिद्धांत से परामर्श करता है, और एक कड़ाई से संरचित फैसला लौटाता है — वर्गीकरण, गंभीरता, और सटीक प्रतिक्रिया कार्रवाई।' },
      { label: 'रोकथाम', desc: 'कॉन्टूर तुरंत कार्य करता है: स्रोत IP को ब्लॉक करता है, होस्ट को अलग करता है, क्रेडेंशियल घुमाता और अमान्य करता है, दुर्भावनापूर्ण प्रोसेस को मारता है। मैलवेयर एंटीवायरस द्वारा क्वारंटीन किया जाता है। हमला फैलने से पहले रोक दिया जाता है।' },
      { label: 'ROE गेट और स्तरीय प्रतिक्रिया', desc: 'किसी भी सक्रिय प्रतिक्रिया से पहले, ऑफिसर पांच सगाई नियम गेट जांचता है — गंभीरता, एट्रिब्यूशन कॉन्फिडेंस, हमलावर वर्ग, क्या हमला जारी है, और आपका प्राधिकरण। सभी पास → स्तरीय सीढ़ी L1–L4। कोई भी गेट विफल → निष्क्रिय रक्षा तक सीमित और मानव को एस्केलेट। यही प्रतिक्रिया को सुरक्षित बनाता है।' },
      { label: 'फोरेंसिक्स और सबूत', desc: 'निष्पादन से पहले सब कुछ अपरिवर्तनीय रूप से लॉग किया जाता है: समझौते के संकेतक निकाले गए, हमलावर की पहचान की गई, पूरी टाइमलाइन संरक्षित — ऑडिट-तैयार और स्वीकार्य।' },
      { label: 'डीब्रीफ → सिद्धांत', desc: 'हर घटना का परिणाम समीक्षा योग्य सबक के रूप में सिद्धांत में वापस डिस्टिल्ड होता है — अनुमोदन तक लंबित, फिर लाइव। हर अगला निर्णय पिछले से तेज़ होता है।' },
    ],
    ladderH: 'स्तरीय प्रतिक्रिया सीढ़ी',
    ladder: 'प्रतिक्रिया संचयी और ROE-नियंत्रित है। L1–L2 आपके अपने सर्वर पर रहते हैं — हनीपॉट्स और गलत सूचना जो हमलावर को झूठा डेटा देती है। L3–L4 केवल वैध चैनलों के माध्यम से हमलावर के खिलाफ कार्य करते हैं: वैश्विक थ्रेट-इंटेल नेटवर्क को रिपोर्टिंग और ISPs, CERTs और कानून प्रवर्तन के साथ टेकडाउन का समन्वय। ऑफिसर L1 से आगे कुछ भी करने से पहले पूरी जांच चलाता है — फोरेंसिक्स → एट्रिब्यूशन → इन्फ्रास्ट्रक्चर — और कभी तीसरे पक्ष पर प्रहार नहीं करता।',
    closing: 'पूरे कॉन्टूर में दो अपरिवर्तनीय तत्व चलते हैं: यह एयर-गैप्ड है, और सक्रिय प्रतिक्रिया केवल सिद्धांत के तहत और आपकी स्वीकृति से होती है — हर कार्रवाई अपरिवर्तनीय रूप से लॉग की जाती है।',
  },
  tr: {
    h: 'Kontur nasıl çalışır — sinyalden vuruşa',
    topoH: 'Nerede çalışır',
    topoLead: "Sunucunuzda yalnızca hafif bir ajan çalışır — güvenlik sinyallerini şifreli kanallar (gRPC + HTTPS) üzerinden akışa geçirir. Tüm tespit ve akıl yürütme, bölgenizdeki platform GPU filosunda gerçekleşir ve tüm ITDR konturu air-gapped'dir: ne telemetri ne de anahtarlar asla dışarı çıkmaz.",
    topo: [
      { label: 'Tespit katmanı', desc: "GPU üzerinde üç kalkan (Qwen3-4B + LoRA), bir tehdidi saniyenin çok küçük bir kısmında sınıflandırır." },
      { label: 'Karar katmanı', desc: 'ITDR görevlisi (Gemma-4) artı Doctrine (ROE, playbooklar, threat intel) — akıl yürütme ve politika, tamamen bölge içinde.' },
      { label: 'Air-gapped kontur', desc: 'Kontur içinde harici LLM veya API çağrısı yoktur. Tek giden trafik, saldırganı yasal kanallar aracılığıyla bildirmektir — genel blok listeleri, ISS / CERT / kolluk kuvvetleri.' },
    ],
    topoNote: 'Kapalı bir çevre için, tüm kontur kendi altyapınız içinde konuşlandırılır — tamamen izole, sıfır giden çağrı ile Enterprise katmanı.',
    stepsH: 'Sistem ne yapar — adım adım',
    steps: [
      { label: 'Sinyal', desc: 'Bir şeyler yanlış göründüğü anda, ajan — veya Sysadmin görevlisi — bir güvenlik sinyalini konturuna akıtır: şüpheli girişler, root etkinliği, ters kabuk başlatan bir işlem, antivirüs tarafından işaretlenen bir dosya.' },
      { label: 'Tespit', desc: 'Üç kalkan sinyali bir saniyeden kısa sürede sınıflandırır — root istismarı, kimlik bilgisi hırsızlığı, ayrıcalık yükseltme — her biri bir güven skoru ve MITRE ATT&CK eşlemesi döndürür. Şiddet yüksekse görevli çağrılır.' },
      { label: 'Görevli akıl yürütmesi', desc: 'ITDR görevlisi (Gemma-4) ilişkilendirilmiş olay üzerinde akıl yürütür, eşleşen playbook ve angajman kuralları için doktrine danışır ve sıkı biçimde yapılandırılmış bir karar döndürür — sınıflandırma, şiddet ve tam yanıt eylemleri.' },
      { label: 'Sınırlama', desc: 'Kontur hemen harekete geçer: kaynak IP\'yi engeller, ana bilgisayarı izole eder, kimlik bilgilerini döndürür ve geçersiz kılar, kötü amaçlı işlemi öldürür. Kötü amaçlı yazılım antivirüs tarafından karantinaya alınır. Saldırı yayılmadan önce durdurulur.' },
      { label: 'ROE kapısı ve kademeli müdahale', desc: "Herhangi bir aktif yanıttan önce, görevli beş angajman kuralı kapısını kontrol eder — şiddet, atıf güveni, saldırgan sınıfı, saldırının devam edip etmediği ve yetkilendirmeniz. Hepsi geçerse → kademeli merdiven L1–L4. Herhangi bir kapı başarısız olursa → pasif savunmaya sınırlandırma ve bir insana eskalasyon. Müdahaleyi güvenli kılan budur." },
      { label: 'Adli tıp ve kanıt', desc: 'Yürütmeden önce her şey değiştirilemez şekilde kaydedilir: ele geçirilme göstergeleri çıkarılır, saldırgan atfedilir, tam zaman çizelgesi korunur — denetime hazır ve kabul edilebilir.' },
      { label: 'Değerlendirme → doktrin', desc: 'Her olayın sonucu, gözden geçirilebilir bir ders olarak doktrine geri damıtılır — onaylanana kadar beklemede, sonra canlı. Her bir sonraki karar bir öncekinden daha keskindir.' },
    ],
    ladderH: 'Kademeli müdahale merdiveni',
    ladder: "Misilleme birikimlidir ve ROE tarafından kısıtlanır. L1–L2 kendi sunucunuzda kalır — saldırgana sahte veri besleyen bal küpleri ve yanlış bilgilendirme. L3–L4 saldırgana karşı yalnızca yasal kanallar aracılığıyla hareket eder: küresel threat-intel ağlarına bildirim ve ISS'ler, CERT'ler ve kolluk kuvvetleriyle kapatma koordinasyonu. Görevli, L1'in ötesinde herhangi bir şeyden önce tam soruşturmayı yürütür — adli tıp → atıf → altyapı — ve asla üçüncü tarafları vurmaz.",
    closing: 'Tüm kontur boyunca iki değişmez geçerlidir: air-gapped\'dir ve aktif müdahale yalnızca doktrin altında ve onayınızla gerçekleşir — her eylem değiştirilemez şekilde kaydedilir.',
  },
  ar: {
    h: 'كيف يعمل المحيط — من الإشارة إلى الضربة',
    topoH: 'أين يعمل',
    topoLead: 'يعمل على خادمك وكيل خفيف فقط — يبث إشارات الأمان عبر قنوات مشفرة (gRPC + HTTPS). يحدث كل الكشف والاستدلال على أسطول GPU الخاص بالمنصة في منطقتك، والمحيط الكامل لـ ITDR معزول تمامًا (air-gapped): لا تخرج القياسات عن بُعد ولا المفاتيح منه أبدًا.',
    topo: [
      { label: 'طبقة الكشف', desc: 'ثلاث دروع (Qwen3-4B + LoRA) على GPU، تصنف التهديد في جزء من الثانية.' },
      { label: 'طبقة القرار', desc: 'ضابط ITDR (Gemma-4) بالإضافة إلى Doctrine (ROE، كتيبات اللعب، معلومات التهديد) — الاستدلال والسياسة، بالكامل داخل المنطقة.' },
      { label: 'محيط معزول (air-gapped)', desc: 'لا توجد استدعاءات LLM أو API خارجية داخل المحيط. حركة المرور الصادرة الوحيدة هي الإبلاغ عن مهاجم عبر قنوات قانونية — قوائم حظر عامة، مزود خدمة الإنترنت / CERT / جهات إنفاذ القانون.' },
    ],
    topoNote: 'بالنسبة لمحيط مغلق، يتم نشر المحيط بأكمله داخل بنيتك التحتية الخاصة — مستوى Enterprise، معزول تمامًا، بدون أي استدعاءات صادرة.',
    stepsH: 'ما الذي يفعله النظام — خطوة بخطوة',
    steps: [
      { label: 'الإشارة', desc: 'في اللحظة التي يبدو فيها شيء ما خاطئًا، يقوم الوكيل — أو ضابط Sysadmin — ببث إشارة أمان إلى المحيط: عمليات تسجيل دخول مشبوهة، نشاط root، عملية تُنشئ reverse shell، ملف تم وضع علامة عليه من قِبل مكافح الفيروسات.' },
      { label: 'الكشف', desc: 'تصنف الدروع الثلاثة الإشارة في أقل من ثانية — إساءة استخدام root، سرقة بيانات الاعتماد، تصعيد الامتيازات — يعيد كل منها درجة ثقة وتخطيط MITRE ATT&CK. إذا كانت الخطورة عالية، يتم استدعاء الضابط.' },
      { label: 'استدلال الضابط', desc: 'يستدل ضابط ITDR (Gemma-4) على الحادثة المرتبطة، ويستشير العقيدة للحصول على الكتيب المطابق وقواعد الاشتباك، ويعيد حكمًا منظمًا بدقة — التصنيف والخطورة والإجراءات الدقيقة للاستجابة.' },
      { label: 'الاحتواء', desc: 'يتصرف المحيط على الفور: يحظر عنوان IP المصدر، يعزل المضيف، يُدوّر ويُبطل بيانات الاعتماد، يقتل العملية الخبيثة. يتم عزل البرامج الضارة بواسطة مكافح الفيروسات. يتم إيقاف الهجوم قبل أن ينتشر.' },
      { label: 'بوابة ROE والاستجابة المتدرجة', desc: 'قبل أي استجابة نشطة، يتحقق الضابط من خمس بوابات لقواعد الاشتباك — الخطورة، ثقة الإسناد، فئة المهاجم، ما إذا كان الهجوم مستمرًا، وتفويضك. إذا نجحت جميعها → السلم المتدرج L1–L4. إذا فشلت أي بوابة → الاقتصار على الدفاع السلبي والتصعيد إلى إنسان. هذا ما يجعل الاستجابة آمنة.' },
      { label: 'الطب الشرعي والأدلة', desc: 'يتم تسجيل كل شيء بشكل غير قابل للتغيير قبل التنفيذ: استخراج مؤشرات الاختراق، إسناد المهاجم، الحفاظ على الجدول الزمني الكامل — جاهز للتدقيق ومقبول قانونيًا.' },
      { label: 'الإحاطة → العقيدة', desc: 'يتم تقطير نتيجة كل حادثة مرة أخرى إلى العقيدة كدرس قابل للمراجعة — معلق حتى الموافقة، ثم مباشر. كل قرار تالٍ أكثر حدة من سابقه.' },
    ],
    ladderH: 'سلم الاستجابة المتدرج',
    ladder: 'الاستجابة تراكمية ومقيدة بـ ROE. تبقى L1–L2 على خادمك الخاص — مصائد العسل والتضليل التي تغذي المهاجم ببيانات كاذبة. تتصرف L3–L4 ضد المهاجم فقط عبر قنوات قانونية: الإبلاغ لشبكات معلومات التهديد العالمية والتنسيق لإزالة البنية التحتية مع مزودي خدمة الإنترنت وCERT وجهات إنفاذ القانون. يجري الضابط التحقيق الكامل — الطب الشرعي → الإسناد → البنية التحتية — قبل أي شيء يتجاوز L1، ولا يضرب أطرافًا ثالثة أبدًا.',
    closing: 'يمر ثابتان عبر المحيط بأكمله: أنه معزول (air-gapped)، وأن الاستجابة النشطة لا تحدث إلا وفقًا للعقيدة وبموافقتك — يتم تسجيل كل إجراء بشكل غير قابل للتغيير.',
  },
  el: {
    h: 'Πώς λειτουργεί το περίγραμμα — από το σήμα στο χτύπημα',
    topoH: 'Πού λειτουργεί',
    topoLead: 'Στον διακομιστή σας εκτελείται μόνο ένας ελαφρύς πράκτορας — μεταδίδει σήματα ασφαλείας μέσω κρυπτογραφημένων καναλιών (gRPC + HTTPS). Όλη η ανίχνευση και η συλλογιστική γίνονται στον στόλο GPU της πλατφόρμας στην περιοχή σας, και ολόκληρο το περίγραμμα ITDR είναι απομονωμένο (air-gapped): ούτε τηλεμετρία ούτε κλειδιά φεύγουν ποτέ από αυτό.',
    topo: [
      { label: 'Επίπεδο ανίχνευσης', desc: 'Τρεις ασπίδες (Qwen3-4B + LoRA) σε GPU, ταξινομούν μια απειλή σε κλάσμα δευτερολέπτου.' },
      { label: 'Επίπεδο απόφασης', desc: 'Ο αξιωματικός ITDR (Gemma-4) συν το Doctrine (ROE, playbooks, threat intel) — συλλογιστική και πολιτική, εξ ολοκλήρου εντός της περιοχής.' },
      { label: 'Απομονωμένο περίγραμμα', desc: 'Καμία κλήση εξωτερικού LLM ή API εντός του περιγράμματος. Η μόνη εξερχόμενη κίνηση είναι η αναφορά ενός επιτιθέμενου μέσω νόμιμων καναλιών — δημόσιες λίστες αποκλεισμού, ISP / CERT / αρχές επιβολής νόμου.' },
    ],
    topoNote: 'Για κλειστή περίμετρο, ολόκληρο το περίγραμμα αναπτύσσεται εντός της δικής σας υποδομής — το επίπεδο Enterprise, πλήρως απομονωμένο, χωρίς καμία εξερχόμενη κλήση.',
    stepsH: 'Τι κάνει το σύστημα — βήμα προς βήμα',
    steps: [
      { label: 'Σήμα', desc: 'Τη στιγμή που κάτι φαίνεται ύποπτο, ο πράκτορας — ή ο αξιωματικός Sysadmin — μεταδίδει ένα σήμα ασφαλείας στο περίγραμμα: ύποπτες συνδέσεις, δραστηριότητα root, μια διεργασία που δημιουργεί reverse shell, ένα αρχείο που επισημάνθηκε από το antivirus.' },
      { label: 'Ανίχνευση', desc: 'Τρεις ασπίδες ταξινομούν το σήμα σε λιγότερο από ένα δευτερόλεπτο — κατάχρηση root, κλοπή διαπιστευτηρίων, κλιμάκωση προνομίων — καθεμία επιστρέφει ένα σκορ εμπιστοσύνης και μια αντιστοίχιση MITRE ATT&CK. Αν η σοβαρότητα είναι υψηλή, καλείται ο αξιωματικός.' },
      { label: 'Συλλογιστική αξιωματικού', desc: 'Ο αξιωματικός ITDR (Gemma-4) συλλογίζεται πάνω στο συσχετισμένο περιστατικό, συμβουλεύεται το δόγμα για το αντίστοιχο playbook και τους κανόνες εμπλοκής, και επιστρέφει μια αυστηρά δομημένη ετυμηγορία — ταξινόμηση, σοβαρότητα και τις ακριβείς ενέργειες απόκρισης.' },
      { label: 'Περιορισμός', desc: 'Το περίγραμμα ενεργεί αμέσως: μπλοκάρει την IP πηγής, απομονώνει τον host, εναλλάσσει και ακυρώνει διαπιστευτήρια, τερματίζει την κακόβουλη διεργασία. Το κακόβουλο λογισμικό τίθεται σε καραντίνα από το antivirus. Η επίθεση σταματά πριν εξαπλωθεί.' },
      { label: 'Πύλη ROE & διαβαθμισμένη απόκριση', desc: 'Πριν από οποιαδήποτε ενεργή απόκριση, ο αξιωματικός ελέγχει πέντε πύλες κανόνων εμπλοκής — σοβαρότητα, εμπιστοσύνη απόδοσης, κατηγορία επιτιθέμενου, αν η επίθεση είναι σε εξέλιξη, και την εξουσιοδότησή σας. Όλες περνούν → η διαβαθμισμένη κλίμακα L1–L4. Οποιαδήποτε πύλη αποτυγχάνει → περιορισμός σε παθητική άμυνα και κλιμάκωση σε άνθρωπο. Αυτό κάνει την απόκριση ασφαλή.' },
      { label: 'Εγκληματολογία & αποδεικτικά στοιχεία', desc: 'Όλα καταγράφονται αμετάβλητα πριν την εκτέλεση: εξάγονται δείκτες παραβίασης, αποδίδεται ο επιτιθέμενος, διατηρείται το πλήρες χρονοδιάγραμμα — έτοιμο για έλεγχο και αποδεκτό.' },
      { label: 'Απολογισμός → δόγμα', desc: 'Το αποτέλεσμα κάθε περιστατικού αποστάζεται πίσω στο δόγμα ως ένα εξετάσιμο μάθημα — σε αναμονή έως την έγκριση, μετά ενεργό. Κάθε επόμενη απόφαση είναι πιο αιχμηρή από την προηγούμενη.' },
    ],
    ladderH: 'Η κλίμακα διαβαθμισμένου αντιποίνου',
    ladder: 'Το αντίποινο είναι σωρευτικό και ελέγχεται από τους ROE. Τα L1–L2 παραμένουν στον δικό σας διακομιστή — honeypots και παραπληροφόρηση που τροφοδοτούν τον επιτιθέμενο με ψευδή δεδομένα. Τα L3–L4 ενεργούν κατά του επιτιθέμενου μόνο μέσω νόμιμων καναλιών: αναφορά σε παγκόσμια δίκτυα threat-intel και συντονισμός κατάργησης με ISP, CERT και αρχές επιβολής νόμου. Ο αξιωματικός διεξάγει την πλήρη έρευνα — εγκληματολογία → απόδοση → υποδομή — πριν από οτιδήποτε πέρα από το L1, και ποτέ δεν χτυπά τρίτα μέρη.',
    closing: 'Δύο αμετάβλητα στοιχεία διαπερνούν όλο το περίγραμμα: είναι απομονωμένο (air-gapped), και η ενεργή απόκριση συμβαίνει μόνο υπό δόγμα και με την έγκρισή σας — κάθε ενέργεια καταγράφεται αμετάβλητα.',
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
        <FlowMap caption="Graduated response — cumulative, ROE-gated" items={LADDER_NODES} colors={LADDER_COLORS} />

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
