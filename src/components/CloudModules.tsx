'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import ModuleCard from '@/components/ModuleCard';
import { ModuleStatus } from '@/components/StatusBadge';

const HEAD: Record<string, { h: string; lead: string; sub: string }> = {
  en: {
    h: 'Platform modules',
    lead: 'This section holds the technical detail of the Guardian Cloud platform’s systems.',
    sub: 'Each module lists the functions we have actually implemented, the architecture behind them and our end-to-end test results. A maturity badge marks what is live and proven versus what is still in design — so you can judge for yourself.',
  },
  ru: {
    h: 'Модули платформы',
    lead: 'В этом блоке — техническая информация о системах платформы Guardian Cloud.',
    sub: 'В каждом модуле — функции, которые мы реально реализовали, их архитектура и результаты сквозного тестирования. Бейдж зрелости показывает, что уже работает и проверено, а что ещё в проекте, — чтобы вы судили сами.',
  },
  zh: {
    h: '平台模組',
    lead: '本區塊提供 Guardian Cloud 平台各系統的技術資訊。',
    sub: '每個模組都列出我們已實際實作的功能、其背後的架構，以及我們的端到端測試結果。成熟度標章標示出哪些已上線並經過驗證、哪些仍在設計階段——讓您自行判斷。',
  },
  fr: {
    h: 'Modules de la plateforme',
    lead: 'Cette section présente le détail technique des systèmes de la plateforme Guardian Cloud.',
    sub: "Chaque module liste les fonctions que nous avons réellement implémentées, l'architecture qui les sous-tend et nos résultats de tests de bout en bout. Un badge de maturité indique ce qui est en production et validé par rapport à ce qui est encore en conception — à vous d'en juger.",
  },
  de: {
    h: 'Plattformmodule',
    lead: 'Dieser Abschnitt enthält die technischen Details der Systeme der Guardian-Cloud-Plattform.',
    sub: 'Jedes Modul listet die Funktionen auf, die wir tatsächlich implementiert haben, die zugrunde liegende Architektur und unsere End-to-End-Testergebnisse. Ein Reifegrad-Badge kennzeichnet, was live und geprüft ist, und was noch in der Konzeptionsphase steht — damit Sie selbst urteilen können.',
  },
  es: {
    h: 'Módulos de la plataforma',
    lead: 'Esta sección contiene el detalle técnico de los sistemas de la plataforma Guardian Cloud.',
    sub: 'Cada módulo enumera las funciones que realmente hemos implementado, la arquitectura detrás de ellas y los resultados de nuestras pruebas de extremo a extremo. Una insignia de madurez indica qué está en producción y validado frente a lo que aún está en diseño, para que usted mismo lo juzgue.',
  },
  it: {
    h: 'Moduli della piattaforma',
    lead: 'Questa sezione contiene i dettagli tecnici dei sistemi della piattaforma Guardian Cloud.',
    sub: "Ogni modulo elenca le funzioni che abbiamo effettivamente implementato, l'architettura che le sottende e i risultati dei nostri test end-to-end. Un badge di maturità indica cosa è in produzione e verificato rispetto a cosa è ancora in fase di progettazione — così potete giudicare da soli.",
  },
  ja: {
    h: 'プラットフォームモジュール',
    lead: 'このセクションでは、Guardian Cloud プラットフォームの各システムの技術的な詳細を扱います。',
    sub: '各モジュールには、実際に実装した機能、その背後にあるアーキテクチャ、そしてエンドツーエンドのテスト結果が記載されています。成熟度バッジは、実運用され検証済みのものと、まだ設計段階にあるものを示します——ご自身で判断していただけます。',
  },
  uk: {
    h: 'Модулі платформи',
    lead: 'У цьому розділі — технічні подробиці про системи платформи Guardian Cloud.',
    sub: 'У кожному модулі перелічені функції, які ми реально реалізували, їхня архітектура та результати наскрізного тестування. Бейдж зрілості показує, що вже працює й перевірено, а що ще в проєктуванні — щоб ви могли судити самі.',
  },
  sr: {
    h: 'Moduli platforme',
    lead: 'Ovaj odeljak sadrži tehničke detalje o sistemima platforme Guardian Cloud.',
    sub: 'Svaki modul navodi funkcije koje smo zaista implementirali, arhitekturu iza njih i rezultate naših end-to-end testova. Oznaka zrelosti pokazuje šta je u produkciji i verifikovano, a šta je još u fazi dizajna — kako biste sami procenili.',
  },
  pt: {
    h: 'Módulos da plataforma',
    lead: 'Esta seção reúne os detalhes técnicos dos sistemas da plataforma Guardian Cloud.',
    sub: 'Cada módulo lista as funções que realmente implementamos, a arquitetura por trás delas e os resultados dos nossos testes de ponta a ponta. Um selo de maturidade indica o que está em produção e validado versus o que ainda está em fase de design — para que você julgue por si mesmo.',
  },
  hi: {
    h: 'प्लेटफ़ॉर्म मॉड्यूल',
    lead: 'इस सेक्शन में Guardian Cloud प्लेटफ़ॉर्म की प्रणालियों का तकनीकी विवरण दिया गया है।',
    sub: 'हर मॉड्यूल में वे फंक्शन सूचीबद्ध हैं जिन्हें हमने वास्तव में लागू किया है, उनके पीछे की आर्किटेक्चर और हमारे एंड-टू-एंड परीक्षण परिणाम। एक मैच्योरिटी बैज दिखाता है कि क्या लाइव और सत्यापित है बनाम क्या अभी भी डिज़ाइन चरण में है — ताकि आप खुद निर्णय ले सकें।',
  },
  tr: {
    h: 'Platform modülleri',
    lead: 'Bu bölüm, Guardian Cloud platformunun sistemlerine ait teknik ayrıntıları içerir.',
    sub: 'Her modül, gerçekten hayata geçirdiğimiz işlevleri, bunların arkasındaki mimariyi ve uçtan uca test sonuçlarımızı listeler. Bir olgunluk rozeti, neyin canlı ve kanıtlanmış olduğunu, neyin hâlâ tasarım aşamasında olduğunu gösterir — böylece kendiniz karar verebilirsiniz.',
  },
  ar: {
    h: 'وحدات المنصة',
    lead: 'يحتوي هذا القسم على التفاصيل التقنية لأنظمة منصة Guardian Cloud.',
    sub: 'تسرد كل وحدة الوظائف التي قمنا بتنفيذها فعليًا، والبنية التقنية وراءها، ونتائج اختباراتنا الشاملة من طرف إلى طرف. يشير شارة النضج إلى ما هو فعلي ومُثبت مقابل ما لا يزال قيد التصميم — لتحكموا بأنفسكم.',
  },
  el: {
    h: 'Ενότητες πλατφόρμας',
    lead: 'Αυτή η ενότητα περιέχει τις τεχνικές λεπτομέρειες των συστημάτων της πλατφόρμας Guardian Cloud.',
    sub: 'Κάθε ενότητα παραθέτει τις λειτουργίες που έχουμε όντως υλοποιήσει, την αρχιτεκτονική πίσω από αυτές και τα αποτελέσματα των end-to-end δοκιμών μας. Ένα σήμα ωριμότητας δείχνει τι είναι σε λειτουργία και επαληθευμένο έναντι του τι βρίσκεται ακόμη σε σχεδιασμό — ώστε να κρίνετε μόνοι σας.',
  },
};

type Localized = { tagline: string; points: string[] };

interface Module {
  title: string;
  href: string;
  status: ModuleStatus;
  t: Record<string, Localized>;
}

const MODULES: Module[] = [
  {
    title: 'Sysadmin',
    href: '/sysadmin',
    status: 'live',
    t: {
      en: {
        tagline:
          'An AI system administrator for your server fleet — onboarding, audit, monitoring and risk-gated remediation.',
        points: [
          'One-command provisioning with billing gate and per-client service history',
          'Initial AI audit: 18 signals → structured risk report and action plan',
          'Continuous monitoring with prioritised recommendations',
          'Automated remediation, dry-run first, human approval on HIGH/CRITICAL',
        ],
      },
      ru: {
        tagline:
          'AI-системный администратор для вашего парка серверов — онбординг, аудит, мониторинг и remediation с контролем риска.',
        points: [
          'Подключение в один шаг с billing-гейтом и Историей обслуживания по каждому клиенту',
          'Начальный AI-аудит: 18 сигналов → структурированный отчёт о рисках и план действий',
          'Непрерывный мониторинг с приоритизированными рекомендациями',
          'Автоматический remediation: сначала dry-run, для HIGH/CRITICAL — подтверждение человеком',
        ],
      },
      zh: {
        tagline: '為您的伺服器叢集服務的 AI 系統管理員——上線部署、稽核、監控與風險分級的自動修復。',
        points: [
          '一鍵部署，內建計費門檻與各客戶的維運歷史',
          '首次 AI 稽核：18 項訊號 → 結構化風險報告與行動計畫',
          '持續監控，並提供分優先級的建議',
          '自動修復：預設先模擬運行，HIGH/CRITICAL 變更需人工核准',
        ],
      },
      fr: {
        tagline:
          "Un administrateur système IA pour votre parc de serveurs — intégration, audit, supervision et remédiation à risque contrôlé.",
        points: [
          'Provisionnement en une commande avec verrou de facturation et historique de service par client',
          'Audit IA initial : 18 signaux → rapport de risque structuré et plan d\'action',
          'Supervision continue avec recommandations priorisées',
          "Remédiation automatisée, d'abord en simulation (dry-run), approbation humaine pour HIGH/CRITICAL",
        ],
      },
      de: {
        tagline:
          'Ein KI-Systemadministrator für Ihre Serverflotte — Onboarding, Audit, Monitoring und risikogesteuerte Behebung.',
        points: [
          'Ein-Befehl-Bereitstellung mit Billing-Gate und kundenspezifischer Servicehistorie',
          'Erstes KI-Audit: 18 Signale → strukturierter Risikobericht und Aktionsplan',
          'Kontinuierliches Monitoring mit priorisierten Empfehlungen',
          'Automatisierte Behebung, zunächst als Dry-Run, menschliche Freigabe bei HIGH/CRITICAL',
        ],
      },
      es: {
        tagline:
          'Un administrador de sistemas con IA para su flota de servidores — incorporación, auditoría, monitoreo y remediación con control de riesgo.',
        points: [
          'Aprovisionamiento con un solo comando, con puerta de facturación e historial de servicio por cliente',
          'Auditoría inicial de IA: 18 señales → informe de riesgo estructurado y plan de acción',
          'Monitoreo continuo con recomendaciones priorizadas',
          'Remediación automatizada, primero en modo de prueba (dry-run), aprobación humana en HIGH/CRITICAL',
        ],
      },
      it: {
        tagline:
          'Un amministratore di sistema IA per la tua flotta di server — onboarding, audit, monitoraggio e remediation con controllo del rischio.',
        points: [
          'Provisioning con un solo comando, con billing gate e cronologia di servizio per cliente',
          "Audit IA iniziale: 18 segnali → report di rischio strutturato e piano d'azione",
          'Monitoraggio continuo con raccomandazioni prioritizzate',
          'Remediation automatizzata, prima in dry-run, approvazione umana per HIGH/CRITICAL',
        ],
      },
      ja: {
        tagline:
          'サーバー群のためのAIシステム管理者 — オンボーディング、監査、監視、リスクに応じたゲート付き是正措置。',
        points: [
          'ビリングゲートとクライアントごとのサービス履歴を備えたワンコマンドでのプロビジョニング',
          '初回AI監査：18のシグナル → 構造化されたリスクレポートとアクションプラン',
          '優先順位付けされた推奨事項による継続的な監視',
          '自動化された是正措置。まずドライランを実行し、HIGH/CRITICALでは人による承認が必要',
        ],
      },
      uk: {
        tagline:
          'AI системний адміністратор для вашого парку серверів — онбординг, аудит, моніторинг і виправлення з контролем ризику.',
        points: [
          'Підключення в один крок із billing-гейтом та історією обслуговування по кожному клієнту',
          'Початковий AI-аудит: 18 сигналів → структурований звіт про ризики та план дій',
          'Безперервний моніторинг із пріоритизованими рекомендаціями',
          'Автоматичне виправлення: спершу dry-run, для HIGH/CRITICAL — підтвердження людиною',
        ],
      },
      sr: {
        tagline:
          'AI sistem administrator za vaš park servera — onboarding, revizija, nadzor i otklanjanje problema uz kontrolu rizika.',
        points: [
          'Podešavanje jednom komandom, sa billing gate-om i istorijom usluga po klijentu',
          'Početna AI revizija: 18 signala → strukturisan izveštaj o rizicima i akcioni plan',
          'Kontinuirani nadzor sa prioritizovanim preporukama',
          'Automatizovano otklanjanje problema, prvo dry-run, ljudsko odobrenje za HIGH/CRITICAL',
        ],
      },
      pt: {
        tagline:
          'Um administrador de sistemas com IA para sua frota de servidores — onboarding, auditoria, monitoramento e remediação com controle de risco.',
        points: [
          'Provisionamento com um único comando, com billing gate e histórico de serviço por cliente',
          'Auditoria inicial de IA: 18 sinais → relatório de risco estruturado e plano de ação',
          'Monitoramento contínuo com recomendações priorizadas',
          'Remediação automatizada, primeiro em dry-run, aprovação humana em HIGH/CRITICAL',
        ],
      },
      hi: {
        tagline:
          'आपके सर्वर बेड़े के लिए एक AI सिस्टम एडमिनिस्ट्रेटर — ऑनबोर्डिंग, ऑडिट, मॉनिटरिंग और जोखिम-नियंत्रित समाधान।',
        points: [
          'बिलिंग गेट और प्रति-क्लाइंट सेवा इतिहास के साथ एक-कमांड प्रोविज़निंग',
          'प्रारंभिक AI ऑडिट: 18 सिग्नल → संरचित जोखिम रिपोर्ट और कार्य योजना',
          'प्राथमिकता वाली सिफारिशों के साथ निरंतर मॉनिटरिंग',
          'स्वचालित समाधान, पहले ड्राई-रन, HIGH/CRITICAL पर मानव अनुमोदन',
        ],
      },
      tr: {
        tagline:
          'Sunucu filonuz için bir AI sistem yöneticisi — onboarding, denetim, izleme ve riske dayalı düzeltme.',
        points: [
          'Faturalandırma kapısı ve müşteri bazlı hizmet geçmişiyle tek komutla kurulum',
          'İlk AI denetimi: 18 sinyal → yapılandırılmış risk raporu ve eylem planı',
          'Önceliklendirilmiş önerilerle sürekli izleme',
          'Otomatik düzeltme, önce kuru çalıştırma (dry-run), HIGH/CRITICAL için insan onayı',
        ],
      },
      ar: {
        tagline:
          'مسؤول نظام يعمل بالذكاء الاصطناعي لأسطول خوادمك — الإعداد، التدقيق، المراقبة، والمعالجة المتحكم بها حسب المخاطر.',
        points: [
          'إعداد بأمر واحد مع بوابة فوترة وسجل خدمة لكل عميل',
          'تدقيق أولي بالذكاء الاصطناعي: 18 إشارة ← تقرير مخاطر منظم وخطة عمل',
          'مراقبة مستمرة مع توصيات مرتبة حسب الأولوية',
          'معالجة آلية، تجربة أولية (dry-run) أولًا، وموافقة بشرية على الحالات HIGH/CRITICAL',
        ],
      },
      el: {
        tagline:
          'Ένας διαχειριστής συστήματος AI για τον στόλο διακομιστών σας — ένταξη, έλεγχος, παρακολούθηση και αποκατάσταση με έλεγχο κινδύνου.',
        points: [
          'Παροχή με μία εντολή, με πύλη χρέωσης και ιστορικό εξυπηρέτησης ανά πελάτη',
          'Αρχικός έλεγχος AI: 18 σήματα → δομημένη αναφορά κινδύνου και σχέδιο δράσης',
          'Συνεχής παρακολούθηση με ιεραρχημένες συστάσεις',
          'Αυτοματοποιημένη αποκατάσταση, πρώτα σε δοκιμαστική εκτέλεση (dry-run), ανθρώπινη έγκριση για HIGH/CRITICAL',
        ],
      },
    },
  },
  {
    title: 'ITDR',
    href: '/itdr',
    status: 'live',
    t: {
      en: {
        tagline:
          'Intrusion detection & response plus malware defense — detection shields, an AI officer, doctrine and rules of engagement.',
        points: [
          'Three detection shields (root / credential / privilege abuse)',
          'AI officer reasoning → confirmed-threat verdict and containment',
          'Built-in malware defense: scheduled ClamAV, quarantine-not-delete',
          'Graduated, human-governed rules of engagement',
        ],
      },
      ru: {
        tagline:
          'Обнаружение вторжений и реагирование плюс защита от вредоносного ПО — щиты-детекторы, AI-офицер, доктрина и правила применения.',
        points: [
          'Три щита-детектора (root / учётные данные / эскалация привилегий)',
          'Рассуждение AI-офицера → вердикт «подтверждённая угроза» и сдерживание',
          'Встроенная защита от вредоносов: плановый ClamAV, карантин вместо удаления',
          'Ступенчатые правила применения под контролем человека',
        ],
      },
      zh: {
        tagline: '入侵偵測與回應，外加惡意軟體防禦——偵測護盾、AI 安全官、知識庫與交戰守則。',
        points: [
          '三重偵測護盾（root／憑證／權限濫用）',
          'AI 安全官推理 → 確認威脅判定與圍堵',
          '內建惡意軟體防禦：排程 ClamAV，隔離而非刪除',
          '分級、由人類掌控的交戰守則',
        ],
      },
      fr: {
        tagline:
          'Détection et réponse aux intrusions, plus défense antimalware — boucliers de détection, un officier IA, doctrine et règles d\'engagement.',
        points: [
          "Trois boucliers de détection (root / identifiants / abus de privilèges)",
          'Raisonnement de l\'officier IA → verdict de menace confirmée et confinement',
          'Défense antimalware intégrée : ClamAV planifié, mise en quarantaine plutôt que suppression',
          "Règles d'engagement graduées, sous contrôle humain",
        ],
      },
      de: {
        tagline:
          'Angriffserkennung und -reaktion sowie Malware-Abwehr — Erkennungsschilde, ein KI-Offizier, Doktrin und Einsatzregeln.',
        points: [
          'Drei Erkennungsschilde (Root / Zugangsdaten / Rechte-Missbrauch)',
          'KI-Offizier-Reasoning → Verdikt „bestätigte Bedrohung“ und Eindämmung',
          'Integrierte Malware-Abwehr: geplantes ClamAV, Quarantäne statt Löschen',
          'Abgestufte, vom Menschen kontrollierte Einsatzregeln',
        ],
      },
      es: {
        tagline:
          'Detección y respuesta a intrusiones más defensa antimalware — escudos de detección, un oficial de IA, doctrina y reglas de enfrentamiento.',
        points: [
          'Tres escudos de detección (root / credenciales / abuso de privilegios)',
          'Razonamiento del oficial de IA → veredicto de amenaza confirmada y contención',
          'Defensa antimalware integrada: ClamAV programado, cuarentena en lugar de eliminación',
          'Reglas de enfrentamiento graduales, gobernadas por humanos',
        ],
      },
      it: {
        tagline:
          "Rilevamento e risposta alle intrusioni più difesa antimalware — scudi di rilevamento, un ufficiale IA, dottrina e regole d'ingaggio.",
        points: [
          'Tre scudi di rilevamento (root / credenziali / abuso di privilegi)',
          'Ragionamento dell\'ufficiale IA → verdetto di minaccia confermata e contenimento',
          'Difesa antimalware integrata: ClamAV programmato, quarantena anziché eliminazione',
          "Regole d'ingaggio graduate, governate dall'uomo",
        ],
      },
      ja: {
        tagline:
          '侵入検知・対応に加えマルウェア防御 — 検知シールド、AIオフィサー、ドクトリン、交戦規則。',
        points: [
          '3つの検知シールド（root／認証情報／権限乱用）',
          'AIオフィサーの推論 → 脅威確定の判定と封じ込め',
          '組み込みマルウェア防御：定期的なClamAV実行、削除ではなく隔離',
          '段階的で、人間が統制する交戦規則',
        ],
      },
      uk: {
        tagline:
          'Виявлення вторгнень і реагування плюс захист від шкідливого ПЗ — щити виявлення, AI-офіцер, доктрина та правила застосування.',
        points: [
          'Три щити виявлення (root / облікові дані / зловживання привілеями)',
          'Міркування AI-офіцера → вердикт «підтверджена загроза» та стримування',
          'Вбудований захист від шкідливого ПЗ: плановий ClamAV, карантин замість видалення',
          'Ступеневі правила застосування під контролем людини',
        ],
      },
      sr: {
        tagline:
          'Detekcija upada i odgovor, uz odbranu od malvera — detekcioni štitovi, AI oficir, doktrina i pravila angažovanja.',
        points: [
          'Tri detekciona štita (root / kredencijali / zloupotreba privilegija)',
          'Rasuđivanje AI oficira → presuda o potvrđenoj pretnji i obuzdavanje',
          'Ugrađena odbrana od malvera: planirani ClamAV, karantin umesto brisanja',
          'Stepenasta pravila angažovanja pod ljudskom kontrolom',
        ],
      },
      pt: {
        tagline:
          'Detecção e resposta a intrusões, além de defesa contra malware — escudos de detecção, um oficial de IA, doutrina e regras de engajamento.',
        points: [
          'Três escudos de detecção (root / credenciais / abuso de privilégios)',
          'Raciocínio do oficial de IA → veredito de ameaça confirmada e contenção',
          'Defesa integrada contra malware: ClamAV agendado, quarentena em vez de exclusão',
          'Regras de engajamento graduais, governadas por humanos',
        ],
      },
      hi: {
        tagline:
          'घुसपैठ का पता लगाना और प्रतिक्रिया, साथ ही मैलवेयर से सुरक्षा — डिटेक्शन शील्ड, एक AI ऑफिसर, सिद्धांत (doctrine) और एंगेजमेंट के नियम।',
        points: [
          'तीन डिटेक्शन शील्ड (root / क्रेडेंशियल / प्रिविलेज दुरुपयोग)',
          'AI ऑफिसर का तर्क → पुष्टि-की-गई धमकी का निर्णय और नियंत्रण',
          'बिल्ट-इन मैलवेयर सुरक्षा: शेड्यूल्ड ClamAV, हटाने के बजाय क्वारंटीन',
          'क्रमिक, मानव-नियंत्रित एंगेजमेंट के नियम',
        ],
      },
      tr: {
        tagline:
          'Saldırı tespiti ve müdahalesi ile birlikte kötü amaçlı yazılım savunması — tespit kalkanları, bir AI subayı, doktrin ve angajman kuralları.',
        points: [
          'Üç tespit kalkanı (root / kimlik bilgisi / yetki suistimali)',
          'AI subayı muhakemesi → doğrulanmış tehdit kararı ve izolasyon',
          'Yerleşik kötü amaçlı yazılım savunması: zamanlanmış ClamAV, silme yerine karantina',
          'Kademeli, insan kontrolündeki angajman kuralları',
        ],
      },
      ar: {
        tagline:
          'كشف الاختراقات والاستجابة لها بالإضافة إلى الدفاع ضد البرمجيات الخبيثة — دروع كشف، ضابط ذكاء اصطناعي، عقيدة وقواعد اشتباك.',
        points: [
          'ثلاثة دروع كشف (الجذر / بيانات الاعتماد / إساءة استخدام الصلاحيات)',
          'استدلال الضابط الذكي ← حكم بتهديد مؤكد واحتواء',
          'دفاع مدمج ضد البرمجيات الخبيثة: فحص ClamAV مجدول، الحجر الصحي بدلًا من الحذف',
          'قواعد اشتباك متدرجة يحكمها البشر',
        ],
      },
      el: {
        tagline:
          'Ανίχνευση και αντιμετώπιση εισβολών, καθώς και άμυνα κατά κακόβουλου λογισμικού — ασπίδες ανίχνευσης, ένας αξιωματικός AI, δόγμα και κανόνες εμπλοκής.',
        points: [
          'Τρεις ασπίδες ανίχνευσης (root / διαπιστευτήρια / κατάχρηση προνομίων)',
          'Συλλογιστική του αξιωματικού AI → επιβεβαιωμένη ετυμηγορία απειλής και συγκράτηση',
          'Ενσωματωμένη άμυνα κατά κακόβουλου λογισμικού: προγραμματισμένο ClamAV, καραντίνα αντί διαγραφής',
          'Διαβαθμισμένοι κανόνες εμπλοκής υπό ανθρώπινο έλεγχο',
        ],
      },
    },
  },
  {
    title: 'Fleet of AI Models',
    href: '/ai-models',
    status: 'live',
    t: {
      en: {
        tagline:
          'The fleet of specialised models behind the platform — audit officer, ITDR officer, detection shields, cloud specialists, coding models and the doctrine embedder.',
        points: [
          'A model per job, self-hosted on GPU',
          'Cloud specialists validated at 97% / 94% / 91%',
          'Your telemetry and code stay inside your contour',
        ],
      },
      ru: {
        tagline:
          'Флот специализированных моделей за платформой — офицер аудита, офицер ITDR, щиты-детекторы, облачные специалисты, кодинг-модели и эмбеддер доктрины.',
        points: [
          'Своя модель под каждую задачу, на собственных GPU',
          'Облачные специалисты с точностью 97% / 94% / 91%',
          'Ваша телеметрия и код остаются внутри вашего контура',
        ],
      },
      zh: {
        tagline:
          '平台背後的專用模型艦隊——稽核安全官、ITDR 安全官、偵測護盾、雲端專家、編碼模型與知識庫嵌入模型。',
        points: [
          '每項任務專屬一個模型，自建於 GPU 上',
          '雲端專家經驗證達 97%／94%／91%',
          '您的遙測資料與程式碼留在您的安全邊界內',
        ],
      },
      fr: {
        tagline:
          'La flotte de modèles spécialisés derrière la plateforme — officier d\'audit, officier ITDR, boucliers de détection, spécialistes cloud, modèles de codage et l\'embedder de doctrine.',
        points: [
          'Un modèle par tâche, auto-hébergé sur GPU',
          'Spécialistes cloud validés à 97 % / 94 % / 91 %',
          'Vos télémétries et votre code restent à l\'intérieur de votre périmètre',
        ],
      },
      de: {
        tagline:
          'Die Flotte spezialisierter Modelle hinter der Plattform — Audit-Offizier, ITDR-Offizier, Erkennungsschilde, Cloud-Spezialisten, Coding-Modelle und der Doktrin-Embedder.',
        points: [
          'Ein Modell pro Aufgabe, selbst gehostet auf GPU',
          'Cloud-Spezialisten validiert mit 97 % / 94 % / 91 %',
          'Ihre Telemetrie und Ihr Code bleiben innerhalb Ihrer Kontur',
        ],
      },
      es: {
        tagline:
          'La flota de modelos especializados detrás de la plataforma — oficial de auditoría, oficial ITDR, escudos de detección, especialistas de nube, modelos de programación y el embedder de doctrina.',
        points: [
          'Un modelo por tarea, autoalojado en GPU',
          'Especialistas en la nube validados con 97 % / 94 % / 91 %',
          'Su telemetría y código permanecen dentro de su contorno',
        ],
      },
      it: {
        tagline:
          "La flotta di modelli specializzati dietro la piattaforma — ufficiale di audit, ufficiale ITDR, scudi di rilevamento, specialisti cloud, modelli di coding e l'embedder della dottrina.",
        points: [
          'Un modello per ogni compito, self-hosted su GPU',
          'Specialisti cloud validati al 97% / 94% / 91%',
          'La tua telemetria e il tuo codice restano all\'interno del tuo contorno',
        ],
      },
      ja: {
        tagline:
          'プラットフォームを支える専門モデル群 — 監査オフィサー、ITDRオフィサー、検知シールド、クラウドスペシャリスト、コーディングモデル、ドクトリン埋め込みモデル。',
        points: [
          'タスクごとに専用モデルを自社GPUでホスティング',
          'クラウドスペシャリストは97%／94%／91%の精度で検証済み',
          'テレメトリとコードはお客様のコントゥア内に留まります',
        ],
      },
      uk: {
        tagline:
          'Флот спеціалізованих моделей за платформою — офіцер аудиту, офіцер ITDR, щити виявлення, хмарні спеціалісти, кодинг-моделі та ембедер доктрини.',
        points: [
          'Окрема модель під кожну задачу, на власних GPU',
          'Хмарні спеціалісти з підтвердженою точністю 97% / 94% / 91%',
          'Ваша телеметрія та код залишаються всередині вашого контуру',
        ],
      },
      sr: {
        tagline:
          'Flota specijalizovanih modela iza platforme — oficir za reviziju, ITDR oficir, detekcioni štitovi, cloud specijalisti, modeli za kodiranje i embedder doktrine.',
        points: [
          'Po jedan model za svaki zadatak, samostalno hostovan na GPU',
          'Cloud specijalisti validirani sa 97% / 94% / 91%',
          'Vaša telemetrija i kod ostaju unutar vašeg konture',
        ],
      },
      pt: {
        tagline:
          'A frota de modelos especializados por trás da plataforma — oficial de auditoria, oficial ITDR, escudos de detecção, especialistas de nuvem, modelos de codificação e o embedder de doutrina.',
        points: [
          'Um modelo por tarefa, auto-hospedado em GPU',
          'Especialistas de nuvem validados em 97% / 94% / 91%',
          'Sua telemetria e código permanecem dentro do seu contorno',
        ],
      },
      hi: {
        tagline:
          'प्लेटफ़ॉर्म के पीछे विशेष मॉडलों का बेड़ा — ऑडिट ऑफिसर, ITDR ऑफिसर, डिटेक्शन शील्ड, क्लाउड स्पेशलिस्ट, कोडिंग मॉडल और डॉक्ट्रिन एम्बेडर।',
        points: [
          'हर कार्य के लिए एक मॉडल, GPU पर सेल्फ-होस्टेड',
          'क्लाउड स्पेशलिस्ट 97% / 94% / 91% पर मान्य',
          'आपकी टेलीमेट्री और कोड आपके कॉन्टूर के भीतर ही रहते हैं',
        ],
      },
      tr: {
        tagline:
          'Platformun arkasındaki uzman modeller filosu — denetim subayı, ITDR subayı, tespit kalkanları, bulut uzmanları, kodlama modelleri ve doktrin gömme modeli.',
        points: [
          'Her görev için ayrı bir model, GPU üzerinde kendi barındırdığımız',
          'Bulut uzmanları %97 / %94 / %91 doğrulukla doğrulandı',
          'Telemetriniz ve kodunuz kendi çevrenizin içinde kalır',
        ],
      },
      ar: {
        tagline:
          'أسطول من النماذج المتخصصة وراء المنصة — ضابط التدقيق، ضابط ITDR، دروع الكشف، متخصصو السحابة، نماذج البرمجة، ومُضمّن العقيدة.',
        points: [
          'نموذج لكل مهمة، مُستضاف ذاتيًا على GPU',
          'تم التحقق من متخصصي السحابة بدقة 97% / 94% / 91%',
          'تبقى بيانات القياس عن بُعد والكود الخاص بك داخل محيطك',
        ],
      },
      el: {
        tagline:
          'Ο στόλος εξειδικευμένων μοντέλων πίσω από την πλατφόρμα — αξιωματικός ελέγχου, αξιωματικός ITDR, ασπίδες ανίχνευσης, ειδικοί cloud, μοντέλα κώδικα και ο embedder δόγματος.',
        points: [
          'Ένα μοντέλο ανά εργασία, self-hosted σε GPU',
          'Οι ειδικοί cloud επικυρωμένοι στο 97% / 94% / 91%',
          'Η τηλεμετρία και ο κώδικάς σας παραμένουν εντός του δικού σας περιγράμματος',
        ],
      },
    },
  },
  {
    title: 'Doctrine',
    href: '/doctrine',
    status: 'live',
    t: {
      en: {
        tagline:
          'A living, governed knowledge base the AI reasons with — rules of engagement, playbooks, verified intel and incident lessons.',
        points: [
          'Two-stage semantic retrieval (recall + rerank)',
          'Layered, review-gated knowledge with an evolve loop',
          'Continuously enriched from open malware databases',
        ],
      },
      ru: {
        tagline:
          'Живая управляемая база знаний, с которой рассуждает AI — правила применения, плейбуки, проверенная разведка и уроки инцидентов.',
        points: [
          'Двухстадийный семантический поиск (recall + rerank)',
          'Слоистые знания с гейтингом по ревью и петлёй развития',
          'Непрерывное обогащение из открытых баз вредоносного ПО',
        ],
      },
      zh: {
        tagline:
          '一個持續演進、受治理的知識庫，供 AI 推理使用——交戰守則、應對手冊、經驗證的情報與事件教訓。',
        points: [
          '兩階段語意檢索（召回 + 重排）',
          '分層、需審核把關的知識，並具備演進迴路',
          '持續從開放惡意軟體資料庫擴充',
        ],
      },
      fr: {
        tagline:
          "Une base de connaissances vivante et gouvernée avec laquelle l'IA raisonne — règles d'engagement, playbooks, renseignements vérifiés et enseignements tirés des incidents.",
        points: [
          'Recherche sémantique en deux étapes (rappel + reclassement)',
          "Connaissances en couches, soumises à validation, avec une boucle d'évolution",
          'Enrichissement continu à partir de bases de données publiques de malwares',
        ],
      },
      de: {
        tagline:
          'Eine lebendige, kontrollierte Wissensbasis, mit der die KI argumentiert — Einsatzregeln, Playbooks, verifizierte Informationen und Erkenntnisse aus Vorfällen.',
        points: [
          'Zweistufiger semantischer Retrieval (Recall + Rerank)',
          'Geschichtetes, review-gesteuertes Wissen mit Evolutions-Schleife',
          'Kontinuierliche Anreicherung aus offenen Malware-Datenbanken',
        ],
      },
      es: {
        tagline:
          'Una base de conocimiento viva y gobernada con la que razona la IA — reglas de enfrentamiento, playbooks, inteligencia verificada y lecciones de incidentes.',
        points: [
          'Recuperación semántica en dos etapas (recall + rerank)',
          'Conocimiento en capas, validado por revisión, con un ciclo de evolución',
          'Enriquecimiento continuo a partir de bases de datos abiertas de malware',
        ],
      },
      it: {
        tagline:
          "Una base di conoscenza viva e governata con cui l'IA ragiona — regole d'ingaggio, playbook, intelligence verificata e lezioni apprese dagli incidenti.",
        points: [
          'Recupero semantico a due fasi (recall + rerank)',
          'Conoscenza a strati, soggetta a revisione, con un ciclo evolutivo',
          'Arricchimento continuo da database aperti di malware',
        ],
      },
      ja: {
        tagline:
          'AIが推論に用いる、生きた統制されたナレッジベース — 交戦規則、プレイブック、検証済みインテリジェンス、インシデントからの教訓。',
        points: [
          '2段階の意味検索（recall + rerank）',
          'レビューによってゲート制御された階層型ナレッジと進化ループ',
          'オープンなマルウェアデータベースからの継続的な強化',
        ],
      },
      uk: {
        tagline:
          'Жива, керована база знань, з якою міркує AI — правила застосування, плейбуки, перевірена розвідка та уроки з інцидентів.',
        points: [
          'Двоетапний семантичний пошук (recall + rerank)',
          'Шарувата база знань із гейтингом за ревʼю та циклом розвитку',
          'Постійне збагачення з відкритих баз шкідливого ПЗ',
        ],
      },
      sr: {
        tagline:
          'Živa, upravljana baza znanja sa kojom AI rasuđuje — pravila angažovanja, priručnici, proverena obaveštajna saznanja i pouke iz incidenata.',
        points: [
          'Dvostepeno semantičko pretraživanje (recall + rerank)',
          'Slojevito znanje pod kontrolom recenzije, sa petljom evolucije',
          'Kontinuirano obogaćivanje iz otvorenih baza podataka o malveru',
        ],
      },
      pt: {
        tagline:
          'Uma base de conhecimento viva e governada com a qual a IA raciocina — regras de engajamento, playbooks, inteligência verificada e lições de incidentes.',
        points: [
          'Recuperação semântica em duas etapas (recall + rerank)',
          'Conhecimento em camadas, validado por revisão, com um ciclo de evolução',
          'Enriquecimento contínuo a partir de bases de dados abertas de malware',
        ],
      },
      hi: {
        tagline:
          'एक जीवंत, नियंत्रित नॉलेज बेस जिसके साथ AI तर्क करता है — एंगेजमेंट के नियम, प्लेबुक, सत्यापित इंटेल और घटनाओं से सीख।',
        points: [
          'दो-चरणीय सिमेंटिक रिट्रीवल (रिकॉल + रीरैंक)',
          'समीक्षा-नियंत्रित, स्तरित ज्ञान एक इवॉल्व लूप के साथ',
          'खुले मैलवेयर डेटाबेस से निरंतर संवर्धन',
        ],
      },
      tr: {
        tagline:
          "AI'nın akıl yürütmede kullandığı canlı, denetimli bir bilgi tabanı — angajman kuralları, oyun kitapları, doğrulanmış istihbarat ve olay derslerinden çıkarılan bilgiler.",
        points: [
          'İki aşamalı anlamsal erişim (recall + rerank)',
          'İnceleme kapılı, katmanlı bilgi ve bir gelişim döngüsü',
          'Açık kötü amaçlı yazılım veri tabanlarından sürekli zenginleştirme',
        ],
      },
      ar: {
        tagline:
          'قاعدة معرفية حية وخاضعة للحوكمة يستند إليها تفكير الذكاء الاصطناعي — قواعد الاشتباك، أدلة الإجراءات، معلومات مؤكدة ودروس مستفادة من الحوادث.',
        points: [
          'استرجاع دلالي على مرحلتين (الاسترجاع + إعادة الترتيب)',
          'معرفة متعددة الطبقات تخضع للمراجعة، مع حلقة تطور مستمرة',
          'إثراء مستمر من قواعد بيانات البرمجيات الخبيثة المفتوحة',
        ],
      },
      el: {
        tagline:
          'Μια ζωντανή, ελεγχόμενη βάση γνώσης με την οποία συλλογίζεται το AI — κανόνες εμπλοκής, playbooks, επαληθευμένες πληροφορίες και διδάγματα από περιστατικά.',
        points: [
          'Διβάθμια σημασιολογική ανάκτηση (recall + rerank)',
          'Στρωματοποιημένη γνώση με έλεγχο αναθεώρησης και βρόχο εξέλιξης',
          'Συνεχής εμπλουτισμός από ανοιχτές βάσεις δεδομένων κακόβουλου λογισμικού',
        ],
      },
    },
  },
  {
    title: 'Tariffs & Billing',
    href: '/billing',
    status: 'live',
    t: {
      en: {
        tagline: 'Subscription model and the billing gate that governs onboarding and capacity.',
        points: [
          'Per-server subscription with a hard billing gate on connect',
          'Tier model from single servers to data centres and white-label',
        ],
      },
      ru: {
        tagline: 'Модель подписки и billing-гейт, который управляет подключением и ёмкостью.',
        points: [
          'Подписка на каждый сервер с жёстким billing-гейтом при подключении',
          'Тарифная модель от одиночных серверов до дата-центров и white-label',
        ],
      },
      zh: {
        tagline: '訂閱模式，以及掌控上線與容量的計費門檻。',
        points: [
          '依伺服器計費的訂閱，連接時設有硬性計費門檻',
          '方案涵蓋從單台伺服器到資料中心與白標',
        ],
      },
      fr: {
        tagline: "Modèle d'abonnement et verrou de facturation qui régissent l'intégration et la capacité.",
        points: [
          "Abonnement par serveur avec un verrou de facturation strict à la connexion",
          'Modèle par paliers, du serveur unique aux data centers et au marque blanche',
        ],
      },
      de: {
        tagline: 'Abonnementmodell und das Billing-Gate, das Onboarding und Kapazität steuert.',
        points: [
          'Abonnement pro Server mit einem strikten Billing-Gate bei der Verbindung',
          'Stufenmodell vom Einzelserver bis zum Rechenzentrum und White-Label',
        ],
      },
      es: {
        tagline: 'Modelo de suscripción y la puerta de facturación que gobierna la incorporación y la capacidad.',
        points: [
          'Suscripción por servidor con una puerta de facturación estricta al conectar',
          'Modelo por niveles, desde servidores individuales hasta centros de datos y marca blanca',
        ],
      },
      it: {
        tagline: 'Modello di abbonamento e billing gate che governa onboarding e capacità.',
        points: [
          'Abbonamento per server con un rigido billing gate al momento della connessione',
          'Modello a livelli, da singoli server a data center e white-label',
        ],
      },
      ja: {
        tagline: 'オンボーディングと容量を管理するサブスクリプションモデルとビリングゲート。',
        points: [
          'サーバー単位のサブスクリプション、接続時に厳格なビリングゲートを適用',
          '単一サーバーからデータセンター、ホワイトラベルまでの階層モデル',
        ],
      },
      uk: {
        tagline: 'Модель підписки та billing-гейт, що керує онбордингом і ємністю.',
        points: [
          'Підписка на кожен сервер із жорстким billing-гейтом при підключенні',
          'Ярусна модель від одиночних серверів до дата-центрів і white-label',
        ],
      },
      sr: {
        tagline: 'Model pretplate i billing gate koji upravlja onboardingom i kapacitetom.',
        points: [
          'Pretplata po serveru sa strogim billing gate-om prilikom povezivanja',
          'Slojeviti model od pojedinačnih servera do podatkovnih centara i white-label rešenja',
        ],
      },
      pt: {
        tagline: 'Modelo de assinatura e o billing gate que governa o onboarding e a capacidade.',
        points: [
          'Assinatura por servidor com um billing gate rígido na conexão',
          'Modelo em camadas, de servidores individuais a data centers e white-label',
        ],
      },
      hi: {
        tagline: 'सब्सक्रिप्शन मॉडल और बिलिंग गेट जो ऑनबोर्डिंग और क्षमता को नियंत्रित करता है।',
        points: [
          'कनेक्ट करते समय सख्त बिलिंग गेट के साथ प्रति-सर्वर सब्सक्रिप्शन',
          'एकल सर्वर से लेकर डेटा सेंटर और व्हाइट-लेबल तक का टियर मॉडल',
        ],
      },
      tr: {
        tagline: 'Onboarding ve kapasiteyi yöneten abonelik modeli ve faturalandırma kapısı.',
        points: [
          'Bağlantı sırasında sıkı bir faturalandırma kapısıyla sunucu başına abonelik',
          'Tek sunucudan veri merkezlerine ve white-label\'a kadar katman modeli',
        ],
      },
      ar: {
        tagline: 'نموذج الاشتراك وبوابة الفوترة التي تحكم الإعداد والسعة.',
        points: [
          'اشتراك لكل خادم مع بوابة فوترة صارمة عند الاتصال',
          'نموذج طبقي يمتد من الخوادم الفردية إلى مراكز البيانات والعلامة البيضاء',
        ],
      },
      el: {
        tagline: 'Μοντέλο συνδρομής και η πύλη χρέωσης που διέπει την ένταξη και τη χωρητικότητα.',
        points: [
          'Συνδρομή ανά διακομιστή με αυστηρή πύλη χρέωσης κατά τη σύνδεση',
          'Διαβαθμισμένο μοντέλο από μεμονωμένους διακομιστές έως data centers και white-label',
        ],
      },
    },
  },
];

/** Localized "Platform modules" grid for the Guardian Cloud hub. */
export default function CloudModules() {
  const { locale } = useLocale();
  const head = HEAD[locale] ?? HEAD.en;

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">{head.h}</h2>
        <p className="mx-auto mb-2 max-w-3xl text-center text-lg text-white/80">{head.lead}</p>
        <p className="mx-auto mb-10 max-w-3xl text-center text-white/65">{head.sub}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => {
            const t = m.t[locale] ?? m.t.en;
            return (
              <ModuleCard
                key={m.href}
                title={m.title}
                href={m.href}
                status={m.status}
                tagline={t.tagline}
                points={t.points}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
