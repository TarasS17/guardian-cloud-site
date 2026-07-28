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
  fr: {
    h: 'Plateforme vs équipe de sécurité',
    lead: 'Un SOC alerte et attend un humain. ITDR détecte, décide et répond seul — et riposte contre l’attaquant, toujours dans le cadre de la doctrine et avec votre approbation.',
    stats: [
      { big: '24/7/365', sub: 'la ligne ne dort jamais' },
      { big: '< 1 s', sub: 'pour détecter — trois boucliers' },
      { big: '0', sub: 'sur-autorisations · garde-fou de sécurité 100%' },
    ],
    thHuman: 'SOC / EDR + analystes',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Couverture', 'équipes de 8 h, fatigue des alertes, trous de nuit', '24/7/365, jamais fatigué'],
      ['Détection', 'minutes dans une file de triage', 'moins d’une seconde, trois boucliers'],
      ['Réponse', 'procédure humaine, minutes à heures', 'autonome, secondes'],
      ['Raisonnement', 'dépend de l’analyste de service', 'officier Gemma-4 — conforme à la doctrine à chaque fois'],
      ['Représailles', 'rares, manuelles, hésitation juridique', 'graduées L1–L4, encadrées par ROE, légales, automatiques'],
      ['Constance', 'varie selon la personne et la fatigue', 'garde-fou 100%, 0 sur-autorisation'],
      ['Preuves', 'collectées à la main après coup', 'expertise immuable, IOC + attribution automatiques'],
      ['Apprentissage', 'un post-mortem occasionnel', 'chaque incident → doctrine, chaque frappe plus fine'],
      ['Exposition des données', 'SIEM cloud et outils tiers', 'isolé (air-gapped) — rien ne sort'],
      ['Coût', 'une équipe SOC complète', 'une fraction de celle-ci'],
    ],
    closing: 'Vitesse de la machine et discipline du soldat — on ne riposte que si la doctrine l’autorise. La ligne ne dort jamais.',
  },
  de: {
    h: 'Plattform vs. Sicherheitsteam',
    lead: 'Ein SOC alarmiert und wartet auf einen Menschen. ITDR erkennt, entscheidet und reagiert selbst — und schlägt gegen den Angreifer zurück, stets nur nach Doktrin und mit Ihrer Zustimmung.',
    stats: [
      { big: '24/7/365', sub: 'die Linie schläft nie' },
      { big: '< 1 s', sub: 'bis zur Erkennung — drei Schilde' },
      { big: '0', sub: 'Überautorisierungen · Sicherheits-Gate 100%' },
    ],
    thHuman: 'SOC / EDR + Analysten',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Abdeckung', '8-Stunden-Schichten, Alarmmüdigkeit, nächtliche Lücken', '24/7/365, nie müde'],
      ['Erkennung', 'Minuten in einer Triage-Warteschlange', 'unter einer Sekunde, drei Schilde'],
      ['Reaktion', 'menschliches Runbook, Minuten bis Stunden', 'autonom, Sekunden'],
      ['Reasoning', 'abhängig vom diensthabenden Analysten', 'Gemma-4-Offizier — jedes Mal doktrinkonform'],
      ['Vergeltung', 'selten, manuell, rechtliches Zögern', 'gestuft L1–L4, ROE-gesteuert, rechtmäßig, automatisch'],
      ['Konsistenz', 'variiert mit Person und Müdigkeit', 'Sicherheits-Gate 100%, 0 Überautorisierungen'],
      ['Beweise', 'nachträglich von Hand gesammelt', 'unveränderliche Forensik, IOC + Zuordnung automatisch'],
      ['Lernen', 'gelegentliches Post-Mortem', 'jeder Vorfall → Doktrin, jeder Schlag klüger'],
      ['Datenexposition', 'Cloud-SIEM und Drittanbieter-Tools', 'air-gapped — nichts verlässt das System'],
      ['Kosten', 'ein komplettes SOC-Team', 'ein Bruchteil davon'],
    ],
    closing: 'Maschinengeschwindigkeit und soldatische Disziplin — nur zurückschlagen, wenn die Doktrin es erlaubt. Die Linie schläft nie.',
  },
  es: {
    h: 'Plataforma frente a equipo de seguridad',
    lead: 'Un SOC alerta y espera a un humano. ITDR detecta, decide y responde por sí solo — y contraataca al atacante, siempre dentro de la doctrina y con su aprobación.',
    stats: [
      { big: '24/7/365', sub: 'la línea nunca duerme' },
      { big: '< 1 s', sub: 'para detectar — tres escudos' },
      { big: '0', sub: 'sobreautorizaciones · barrera de seguridad 100%' },
    ],
    thHuman: 'SOC / EDR + analistas',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Cobertura', 'turnos de 8 horas, fatiga de alertas, huecos nocturnos', '24/7/365, nunca se cansa'],
      ['Detección', 'minutos en una cola de triaje', 'menos de un segundo, tres escudos'],
      ['Respuesta', 'manual de procedimiento humano, minutos a horas', 'autónoma, segundos'],
      ['Razonamiento', 'depende del analista de turno', 'oficial Gemma-4 — coherente con la doctrina siempre'],
      ['Represalia', 'rara, manual, dudas legales', 'graduada L1–L4, controlada por ROE, legal, automática'],
      ['Consistencia', 'varía según la persona y el cansancio', 'barrera de seguridad 100%, 0 sobreautorizaciones'],
      ['Evidencia', 'recopilada a mano después del hecho', 'forense inmutable, IOC + atribución automáticos'],
      ['Aprendizaje', 'un post-mortem ocasional', 'cada incidente → doctrina, cada golpe más inteligente'],
      ['Exposición de datos', 'SIEM en la nube y herramientas de terceros', 'aislado (air-gapped) — nada sale'],
      ['Costo', 'un equipo SOC completo', 'una fracción de ello'],
    ],
    closing: 'Velocidad de máquina y disciplina de soldado — solo contraataca cuando la doctrina lo permite. La línea nunca duerme.',
  },
  it: {
    h: 'Piattaforma vs team di sicurezza',
    lead: 'Un SOC avvisa e aspetta un umano. ITDR rileva, decide e risponde da solo — e reagisce contro l’attaccante, sempre nel rispetto della dottrina e con la vostra approvazione.',
    stats: [
      { big: '24/7/365', sub: 'la linea non dorme mai' },
      { big: '< 1 s', sub: 'per rilevare — tre scudi' },
      { big: '0', sub: 'sovra-autorizzazioni · gate di sicurezza 100%' },
    ],
    thHuman: 'SOC / EDR + analisti',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Copertura', 'turni di 8 ore, stanchezza da allarmi, buchi notturni', '24/7/365, mai stanco'],
      ['Rilevamento', 'minuti in una coda di triage', 'meno di un secondo, tre scudi'],
      ['Risposta', 'runbook umano, da minuti a ore', 'autonoma, secondi'],
      ['Ragionamento', 'dipende dall’analista di turno', 'ufficiale Gemma-4 — sempre coerente con la dottrina'],
      ['Rappresaglia', 'rara, manuale, esitazione legale', 'graduata L1–L4, regolata da ROE, legale, automatica'],
      ['Coerenza', 'varia con la persona e la stanchezza', 'gate di sicurezza 100%, 0 sovra-autorizzazioni'],
      ['Prove', 'raccolte a mano a posteriori', 'forense immutabile, IOC + attribuzione automatici'],
      ['Apprendimento', 'un post-mortem occasionale', 'ogni incidente → dottrina, ogni colpo più intelligente'],
      ['Esposizione dei dati', 'SIEM cloud e strumenti di terze parti', 'air-gapped — nulla esce'],
      ['Costo', 'un intero team SOC', 'una frazione di esso'],
    ],
    closing: 'Velocità di macchina e disciplina da soldato — si reagisce solo quando la dottrina lo consente. La linea non dorme mai.',
  },
  ja: {
    h: 'プラットフォーム vs セキュリティチーム',
    lead: 'SOCはアラートを出して人間を待ちます。ITDRは自ら検知・判断・対応し——攻撃者に反撃しますが、常にドクトリンの範囲内であなたの承認のもとで行います。',
    stats: [
      { big: '24/7/365', sub: '防衛ラインは眠らない' },
      { big: '< 1秒', sub: '検知まで——3つのシールド' },
      { big: '0', sub: '過剰権限行使 · セーフティゲート100%' },
    ],
    thHuman: 'SOC / EDR + アナリスト',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['カバレッジ', '8時間交代制、アラート疲れ、夜間の空白', '24時間365日、疲れ知らず'],
      ['検知', 'トリアージ待ちで数分', '1秒未満、3つのシールド'],
      ['対応', '人間のランブック、数分〜数時間', '自律的、数秒'],
      ['推論', '当直アナリストに依存', 'Gemma-4オフィサー——常にドクトリンに整合'],
      ['報復', '稀・手動・法的躊躇', '段階的L1〜L4、ROE管理、合法、自動'],
      ['一貫性', '人と疲労により変動', 'セーフティゲート100%、過剰権限行使0件'],
      ['証拠', '事後に手作業で収集', '改ざん不能なフォレンジック、IOC＋帰属自動'],
      ['学習', '時折のポストモーテム', 'すべてのインシデント→ドクトリンへ、反撃は毎回より賢く'],
      ['データ露出', 'クラウドSIEMとサードパーティツール', 'エアギャップ——外部に一切出ない'],
      ['コスト', 'SOCチーム丸ごと', 'その一部のコスト'],
    ],
    closing: 'マシンの速度と兵士の規律——ドクトリンが許す時にのみ反撃する。防衛ラインは眠らない。',
  },
  uk: {
    h: 'Платформа проти команди безпеки',
    lead: 'SOC надсилає алерт і чекає людину. ITDR сам виявляє, вирішує і відповідає — і завдає удару по атакуючому, але лише за доктриною і з вашого схвалення.',
    stats: [
      { big: '24/7/365', sub: 'оборона ніколи не спить' },
      { big: '< 1 с', sub: 'на детекцію — три щити' },
      { big: '0', sub: 'перевищень повноважень · safety-gate 100%' },
    ],
    thHuman: 'SOC / EDR + аналітики',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Покриття', '8-годинні зміни, втома від алертів, нічні прогалини', '24/7/365, ніколи не втомлюється'],
      ['Детекція', 'хвилини в черзі тріажу', 'менше секунди, три щити'],
      ['Реакція', 'людський runbook, хвилини–години', 'автономно, секунди'],
      ['Reasoning', 'залежить від аналітика на зміні', 'офіцер Gemma-4 — за доктриною, завжди однаково'],
      ['Удар відплати', 'рідко, вручну, юридичні вагання', 'градуйовано L1–L4, за ROE, законно, автоматично'],
      ['Стабільність', 'залежить від людини і втоми', 'safety-gate 100%, 0 перевищень'],
      ['Докази', 'збираються вручну постфактум', 'незмінна форензика, IOC + атрибуція автоматично'],
      ['Навчання', 'зрідка пост-мортем', 'кожен інцидент → доктрина, кожен удар розумніший'],
      ['Витік даних', 'хмарний SIEM і сторонні інструменти', 'air-gapped — нічого не йде назовні'],
      ['Вартість', 'ціла команда SOC', 'частка вартості'],
    ],
    closing: 'Швидкість машини і дисципліна солдата — б’ємо у відповідь лише коли доктрина це дозволяє. Оборона ніколи не спить.',
  },
  sr: {
    h: 'Platforma protiv bezbednosnog tima',
    lead: 'SOC upozorava i čeka čoveka. ITDR sam detektuje, odlučuje i odgovara — i uzvraća napadaču, uvek u skladu sa doktrinom i uz vaše odobrenje.',
    stats: [
      { big: '24/7/365', sub: 'linija odbrane nikad ne spava' },
      { big: '< 1 s', sub: 'za detekciju — tri štita' },
      { big: '0', sub: 'prekoračenja ovlašćenja · bezbednosna kapija 100%' },
    ],
    thHuman: 'SOC / EDR + analitičari',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Pokrivenost', 'smene od 8 sati, zamor od upozorenja, noćne rupe', '24/7/365, nikad umoran'],
      ['Detekcija', 'minuti u redu za trijažu', 'manje od sekunde, tri štita'],
      ['Odgovor', 'ljudski priručnik, minuti do sati', 'autonomno, sekunde'],
      ['Rasuđivanje', 'zavisi od analitičara na smeni', 'oficir Gemma-4 — uvek u skladu sa doktrinom'],
      ['Odmazda', 'retko, ručno, pravna neizvesnost', 'stepenovano L1–L4, kontrolisano ROE, zakonito, automatski'],
      ['Doslednost', 'varira u zavisnosti od osobe i umora', 'bezbednosna kapija 100%, 0 prekoračenja'],
      ['Dokazi', 'prikupljaju se ručno naknadno', 'nepromenljiva forenzika, IOC + atribucija automatski'],
      ['Učenje', 'povremena analiza posle incidenta', 'svaki incident → doktrina, svaki udar pametniji'],
      ['Izloženost podataka', 'oblak SIEM i alati trećih strana', 'izolovano (air-gapped) — ništa ne izlazi'],
      ['Trošak', 'ceo SOC tim', 'delić toga'],
    ],
    closing: 'Brzina mašine i disciplina vojnika — uzvraćamo samo kada doktrina to dozvoljava. Linija odbrane nikad ne spava.',
  },
  pt: {
    h: 'Plataforma vs. equipa de segurança',
    lead: 'Um SOC alerta e espera por um humano. O ITDR deteta, decide e responde sozinho — e contra-ataca o agressor, sempre dentro da doutrina e com a sua aprovação.',
    stats: [
      { big: '24/7/365', sub: 'a linha nunca dorme' },
      { big: '< 1 s', sub: 'para detetar — três escudos' },
      { big: '0', sub: 'sobre-autorizações · barreira de segurança 100%' },
    ],
    thHuman: 'SOC / EDR + analistas',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Cobertura', 'turnos de 8 horas, fadiga de alertas, lacunas noturnas', '24/7/365, nunca se cansa'],
      ['Deteção', 'minutos numa fila de triagem', 'menos de um segundo, três escudos'],
      ['Resposta', 'manual humano, minutos a horas', 'autónoma, segundos'],
      ['Raciocínio', 'depende do analista de serviço', 'oficial Gemma-4 — sempre consistente com a doutrina'],
      ['Retaliação', 'rara, manual, hesitação legal', 'graduada L1–L4, controlada por ROE, legal, automática'],
      ['Consistência', 'varia com a pessoa e o cansaço', 'barreira de segurança 100%, 0 sobre-autorizações'],
      ['Evidência', 'recolhida manualmente após o facto', 'perícia imutável, IOC + atribuição automáticas'],
      ['Aprendizagem', 'um post-mortem ocasional', 'cada incidente → doutrina, cada ataque mais inteligente'],
      ['Exposição de dados', 'SIEM na nuvem e ferramentas de terceiros', 'isolado (air-gapped) — nada sai'],
      ['Custo', 'uma equipa SOC completa', 'uma fração disso'],
    ],
    closing: 'Velocidade de máquina e disciplina de soldado — só contra-ataca quando a doutrina permite. A linha nunca dorme.',
  },
  hi: {
    h: 'प्लेटफ़ॉर्म बनाम सुरक्षा टीम',
    lead: 'SOC अलर्ट भेजता है और इंसान का इंतज़ार करता है। ITDR खुद पहचानता है, निर्णय लेता है और जवाब देता है — और हमलावर पर पलटवार करता है, लेकिन हमेशा सिद्धांत (doctrine) के दायरे में और आपकी स्वीकृति से।',
    stats: [
      { big: '24/7/365', sub: 'रक्षा-रेखा कभी नहीं सोती' },
      { big: '< 1 सेकंड', sub: 'पहचानने में — तीन शील्ड' },
      { big: '0', sub: 'अति-अधिकार · सेफ्टी गेट 100%' },
    ],
    thHuman: 'SOC / EDR + विश्लेषक',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['कवरेज', '8-घंटे की शिफ्ट, अलर्ट थकान, रात की खामियां', '24/7/365, कभी न थकने वाला'],
      ['पहचान', 'ट्राइएज कतार में मिनट', 'एक सेकंड से कम, तीन शील्ड'],
      ['प्रतिक्रिया', 'मानव रनबुक, मिनट से घंटे', 'स्वायत्त, सेकंड में'],
      ['तर्क', 'शिफ्ट पर मौजूद विश्लेषक पर निर्भर', 'Gemma-4 अधिकारी — हर बार सिद्धांत के अनुरूप'],
      ['प्रतिशोध', 'दुर्लभ, मैनुअल, कानूनी हिचकिचाहट', 'चरणबद्ध L1–L4, ROE-नियंत्रित, वैध, स्वचालित'],
      ['निरंतरता', 'व्यक्ति और थकान के अनुसार बदलती है', 'सेफ्टी गेट 100%, 0 अति-अधिकार'],
      ['साक्ष्य', 'घटना के बाद मैन्युअल रूप से एकत्र', 'अपरिवर्तनीय फोरेंसिक, IOC + एट्रिब्यूशन स्वचालित'],
      ['सीखना', 'कभी-कभी पोस्ट-मॉर्टम', 'हर घटना → सिद्धांत में, हर प्रहार पहले से चतुर'],
      ['डेटा एक्सपोज़र', 'क्लाउड SIEM और तृतीय-पक्ष उपकरण', 'एयर-गैप्ड — कुछ भी बाहर नहीं जाता'],
      ['लागत', 'एक पूरी SOC टीम', 'उसका एक अंश'],
    ],
    closing: 'मशीन की गति और सैनिक का अनुशासन — केवल तभी पलटवार जब सिद्धांत अनुमति दे। रक्षा-रेखा कभी नहीं सोती।',
  },
  tr: {
    h: 'Platform ile güvenlik ekibi karşılaştırması',
    lead: 'Bir SOC uyarı verir ve bir insanı bekler. ITDR kendi başına tespit eder, karar verir ve yanıt verir — ve saldırgana karşılık verir, ancak her zaman doktrin çerçevesinde ve sizin onayınızla.',
    stats: [
      { big: '24/7/365', sub: 'hat asla uyumaz' },
      { big: '< 1 sn', sub: 'tespit için — üç kalkan' },
      { big: '0', sub: 'aşırı yetkilendirme · güvenlik kapısı %100' },
    ],
    thHuman: 'SOC / EDR + analistler',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Kapsama', '8 saatlik vardiyalar, uyarı yorgunluğu, gece boşlukları', '7/24/365, asla yorulmaz'],
      ['Tespit', 'triyaj kuyruğunda dakikalar', 'saniyeden kısa, üç kalkan'],
      ['Yanıt', 'insan iş akışı, dakikalar-saatler', 'otonom, saniyeler'],
      ['Muhakeme', 'vardiyadaki analiste bağlı', 'Gemma-4 subayı — her seferinde doktrine uygun'],
      ['Misilleme', 'nadir, manuel, hukuki tereddüt', 'kademeli L1–L4, ROE kontrollü, yasal, otomatik'],
      ['Tutarlılık', 'kişiye ve yorgunluğa göre değişir', 'güvenlik kapısı %100, 0 aşırı yetkilendirme'],
      ['Kanıt', 'olay sonrası elle toplanır', 'değiştirilemez adli kayıt, IOC + atıf otomatik'],
      ['Öğrenme', 'ara sıra yapılan olay sonrası inceleme', 'her olay → doktrine, her saldırı bir öncekinden daha akıllı'],
      ['Veri açığa çıkması', 'bulut SIEM ve üçüncü taraf araçlar', 'hava boşluklu (air-gapped) — hiçbir şey dışarı çıkmaz'],
      ['Maliyet', 'tam bir SOC ekibi', 'bunun bir kesri'],
    ],
    closing: 'Makine hızı ve asker disiplini — yalnızca doktrin izin verdiğinde karşılık verir. Hat asla uyumaz.',
  },
  ar: {
    h: 'المنصة مقابل فريق الأمن',
    lead: 'مركز العمليات الأمنية (SOC) ينبّه وينتظر إنساناً. أما ITDR فيكتشف ويقرر ويستجيب بمفرده — ويرد على المهاجم، دائماً ضمن العقيدة الأمنية وبموافقتكم.',
    stats: [
      { big: '24/7/365', sub: 'الخط الدفاعي لا ينام أبداً' },
      { big: '< 1 ثانية', sub: 'للكشف — ثلاث دروع' },
      { big: '0', sub: 'تجاوز صلاحيات · بوابة أمان 100%' },
    ],
    thHuman: 'SOC / EDR + محللون',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['التغطية', 'ورديات 8 ساعات، إرهاق من التنبيهات، فجوات ليلية', '24/7/365، لا يتعب أبداً'],
      ['الكشف', 'دقائق في طابور الفرز', 'أقل من ثانية، ثلاث دروع'],
      ['الاستجابة', 'دليل إجراءات بشري، من دقائق إلى ساعات', 'مستقلة، خلال ثوانٍ'],
      ['التحليل', 'يعتمد على المحلل المناوب', 'ضابط Gemma-4 — متسق مع العقيدة دائماً'],
      ['الانتقام', 'نادر، يدوي، تردد قانوني', 'متدرج L1–L4، محكوم بقواعد الاشتباك، قانوني، آلي'],
      ['الاتساق', 'يختلف حسب الشخص والإرهاق', 'بوابة أمان 100%، صفر تجاوز صلاحيات'],
      ['الأدلة', 'تُجمع يدوياً بعد وقوع الحدث', 'تحليل جنائي غير قابل للتعديل، IOC + إسناد آلي'],
      ['التعلّم', 'مراجعة عرضية بعد الحدث', 'كل حادثة → عقيدة، كل ضربة أذكى'],
      ['تعرّض البيانات', 'SIEM سحابي وأدوات طرف ثالث', 'معزول تماماً — لا شيء يخرج'],
      ['التكلفة', 'فريق SOC كامل', 'جزء يسير من ذلك'],
    ],
    closing: 'سرعة الآلة وانضباط الجندي — لا يُرد إلا حين تسمح العقيدة. الخط الدفاعي لا ينام أبداً.',
  },
  el: {
    h: 'Πλατφόρμα εναντίον ομάδας ασφαλείας',
    lead: 'Ένα SOC ειδοποιεί και περιμένει έναν άνθρωπο. Το ITDR εντοπίζει, αποφασίζει και αποκρίνεται μόνο του — και αντεπιτίθεται στον επιτιθέμενο, πάντα εντός του δόγματος και με τη δική σας έγκριση.',
    stats: [
      { big: '24/7/365', sub: 'η γραμμή άμυνας δεν κοιμάται ποτέ' },
      { big: '< 1 δλ', sub: 'για εντοπισμό — τρεις ασπίδες' },
      { big: '0', sub: 'υπερεξουσιοδοτήσεις · πύλη ασφαλείας 100%' },
    ],
    thHuman: 'SOC / EDR + αναλυτές',
    thPlatform: 'Guardian ITDR',
    rows: [
      ['Κάλυψη', 'βάρδιες 8 ωρών, κόπωση από ειδοποιήσεις, νυχτερινά κενά', '24/7/365, ποτέ κουρασμένο'],
      ['Εντοπισμός', 'λεπτά σε ουρά διαλογής', 'κάτω από ένα δευτερόλεπτο, τρεις ασπίδες'],
      ['Απόκριση', 'ανθρώπινο εγχειρίδιο, λεπτά έως ώρες', 'αυτόνομη, δευτερόλεπτα'],
      ['Συλλογισμός', 'εξαρτάται από τον αναλυτή βάρδιας', 'αξιωματικός Gemma-4 — πάντα σύμφωνος με το δόγμα'],
      ['Αντεκδίκηση', 'σπάνια, χειροκίνητη, νομικός δισταγμός', 'διαβαθμισμένη L1–L4, ελεγχόμενη από ROE, νόμιμη, αυτόματη'],
      ['Συνέπεια', 'ποικίλλει ανάλογα με το άτομο και την κόπωση', 'πύλη ασφαλείας 100%, 0 υπερεξουσιοδοτήσεις'],
      ['Αποδεικτικά στοιχεία', 'συλλέγονται χειροκίνητα εκ των υστέρων', 'αμετάβλητη εγκληματολογική ανάλυση, αυτόματα IOC + απόδοση'],
      ['Μάθηση', 'περιστασιακό post-mortem', 'κάθε περιστατικό → δόγμα, κάθε χτύπημα εξυπνότερο'],
      ['Έκθεση δεδομένων', 'cloud SIEM και εργαλεία τρίτων', 'πλήρως απομονωμένο — τίποτα δεν διαρρέει'],
      ['Κόστος', 'μια ολόκληρη ομάδα SOC', 'ένα κλάσμα αυτού'],
    ],
    closing: 'Ταχύτητα μηχανής και πειθαρχία στρατιώτη — αντεπίθεση μόνο όταν το επιτρέπει το δόγμα. Η γραμμή άμυνας δεν κοιμάται ποτέ.',
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
