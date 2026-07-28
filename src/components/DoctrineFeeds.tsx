'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Card = { h: string; items: string[] };
type Domain = { h: string; body: string };
type Data = { h: string; lead: string; cards: Card[]; domainsH: string; domains: Domain[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'Knowledge sources',
    lead: 'Doctrine is grounded in industry standards and vendor documentation — every entry cites a verifiable source, not an invented rule — and enriched by open threat-intel feeds.',
    cards: [
      {
        h: 'Standards & frameworks',
        items: [
          'MITRE ATT&CK — TTP & group mapping',
          'OWASP · CWE — secure-coding',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — incident response',
        ],
      },
      {
        h: 'Vendor & detection docs',
        items: [
          'Wazuh — HIDS rules, FIM, indexer',
          'Elastic / OpenSearch — SIEM correlation',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Open threat-intel feeds — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ feed entries grouped by malware family',
          'Refreshed automatically on a schedule',
        ],
      },
      {
        h: 'Curated malware knowledge',
        items: [
          'Linux families: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, miners, webshells, ransomware',
          'ClamAV signatures + YARA + behavioural detection, MITRE-mapped',
        ],
      },
      {
        h: 'Founding doctrine',
        items: [
          'Rules of engagement — pinned, top layer',
          'CIS-hardening & ops playbooks (sysadmin)',
          'OWASP / CWE secure-coding patterns (coding)',
        ],
      },
    ],
    domainsH: 'Three domains, one engine',
    domains: [
      { h: 'Sysadmin', body: 'Operational playbooks for diagnosis and remediation.' },
      { h: 'ITDR', body: 'Rules of engagement, incident playbooks and threat intel.' },
      { h: 'Coding', body: 'Secure-coding rules and project context for AI Studio.' },
    ],
  },
  ru: {
    h: 'Источники знаний',
    lead: 'Доктрина опирается на индустриальные стандарты и вендорскую документацию — каждая запись ссылается на проверяемый источник, а не выдуманное правило — и обогащается открытыми фидами угроз.',
    cards: [
      {
        h: 'Стандарты и фреймворки',
        items: [
          'MITRE ATT&CK — маппинг TTP и групп',
          'OWASP · CWE — безопасный код',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — реагирование на инциденты',
        ],
      },
      {
        h: 'Вендорские и детект-доки',
        items: [
          'Wazuh — правила HIDS, FIM, indexer',
          'Elastic / OpenSearch — SIEM-корреляция',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Открытые фиды угроз — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ записей фидов, сгруппированы по семействам',
          'Обновляются автоматически по расписанию',
        ],
      },
      {
        h: 'Курируемое знание о малвари',
        items: [
          'Linux-семейства: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, майнеры, вебшеллы, ransomware',
          'Сигнатуры ClamAV + YARA + поведенческая детекция, с MITRE-маппингом',
        ],
      },
      {
        h: 'Базовая доктрина',
        items: [
          'Правила применения (ROE) — pinned, верхний слой',
          'CIS-hardening и ops-плейбуки (sysadmin)',
          'Паттерны OWASP / CWE безопасного кода (coding)',
        ],
      },
    ],
    domainsH: 'Три домена — один движок',
    domains: [
      { h: 'Sysadmin', body: 'Операционные плейбуки для диагностики и устранения.' },
      { h: 'ITDR', body: 'Правила применения, плейбуки инцидентов и threat intel.' },
      { h: 'Coding', body: 'Правила безопасного кода и контекст проекта для AI Studio.' },
    ],
  },
  fr: {
    h: 'Sources de connaissances',
    lead: "La doctrine s'appuie sur des normes du secteur et de la documentation éditeur — chaque entrée cite une source vérifiable, jamais une règle inventée — et s'enrichit de flux de threat intel ouverts.",
    cards: [
      {
        h: 'Normes et référentiels',
        items: [
          'MITRE ATT&CK — cartographie TTP & groupes',
          'OWASP · CWE — codage sécurisé',
          'CIS Benchmarks — durcissement',
          'NIST 800-61r2 — réponse aux incidents',
        ],
      },
      {
        h: 'Docs éditeurs & détection',
        items: [
          'Wazuh — règles HIDS, FIM, indexer',
          'Elastic / OpenSearch — corrélation SIEM',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Flux de threat intel ouverts — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ entrées de flux regroupées par famille de malware',
          'Actualisé automatiquement selon un calendrier',
        ],
      },
      {
        h: 'Connaissance malware sélectionnée',
        items: [
          'Familles Linux : XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, mineurs, webshells, ransomware',
          'Signatures ClamAV + YARA + détection comportementale, cartographiées MITRE',
        ],
      },
      {
        h: 'Doctrine fondatrice',
        items: [
          "Règles d'engagement — épinglées, couche supérieure",
          'Durcissement CIS et playbooks ops (sysadmin)',
          'Modèles de codage sécurisé OWASP / CWE (coding)',
        ],
      },
    ],
    domainsH: 'Trois domaines, un seul moteur',
    domains: [
      { h: 'Sysadmin', body: 'Playbooks opérationnels pour diagnostic et remédiation.' },
      { h: 'ITDR', body: "Règles d'engagement, playbooks d'incidents et threat intel." },
      { h: 'Coding', body: 'Règles de codage sécurisé et contexte projet pour AI Studio.' },
    ],
  },
  de: {
    h: 'Wissensquellen',
    lead: 'Die Doktrin basiert auf Branchenstandards und Herstellerdokumentation — jeder Eintrag verweist auf eine überprüfbare Quelle, keine erfundene Regel — und wird durch offene Threat-Intel-Feeds angereichert.',
    cards: [
      {
        h: 'Standards & Frameworks',
        items: [
          'MITRE ATT&CK — TTP- & Gruppen-Mapping',
          'OWASP · CWE — sicheres Coding',
          'CIS Benchmarks — Hardening',
          'NIST 800-61r2 — Incident Response',
        ],
      },
      {
        h: 'Hersteller- & Detection-Dokus',
        items: [
          'Wazuh — HIDS-Regeln, FIM, Indexer',
          'Elastic / OpenSearch — SIEM-Korrelation',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Offene Threat-Intel-Feeds — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ Feed-Einträge, nach Malware-Familie gruppiert',
          'Automatisch nach Zeitplan aktualisiert',
        ],
      },
      {
        h: 'Kuratiertes Malware-Wissen',
        items: [
          'Linux-Familien: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, Miner, Webshells, Ransomware',
          'ClamAV-Signaturen + YARA + Verhaltenserkennung, MITRE-gemappt',
        ],
      },
      {
        h: 'Gründungsdoktrin',
        items: [
          'Einsatzregeln — angepinnt, oberste Ebene',
          'CIS-Hardening & Ops-Playbooks (sysadmin)',
          'OWASP-/CWE-Muster für sicheres Coding (coding)',
        ],
      },
    ],
    domainsH: 'Drei Domänen, eine Engine',
    domains: [
      { h: 'Sysadmin', body: 'Operative Playbooks für Diagnose und Behebung.' },
      { h: 'ITDR', body: 'Einsatzregeln, Incident-Playbooks und Threat Intel.' },
      { h: 'Coding', body: 'Regeln für sicheres Coding und Projektkontext für AI Studio.' },
    ],
  },
  es: {
    h: 'Fuentes de conocimiento',
    lead: 'La doctrina se basa en estándares de la industria y documentación de proveedores — cada entrada cita una fuente verificable, no una regla inventada — y se enriquece con feeds abiertos de threat intel.',
    cards: [
      {
        h: 'Estándares y marcos',
        items: [
          'MITRE ATT&CK — mapeo de TTP y grupos',
          'OWASP · CWE — codificación segura',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — respuesta a incidentes',
        ],
      },
      {
        h: 'Docs de proveedores y detección',
        items: [
          'Wazuh — reglas HIDS, FIM, indexer',
          'Elastic / OpenSearch — correlación SIEM',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Feeds abiertos de threat intel — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ entradas de feeds agrupadas por familia de malware',
          'Actualizado automáticamente según programación',
        ],
      },
      {
        h: 'Conocimiento curado de malware',
        items: [
          'Familias Linux: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, mineros, webshells, ransomware',
          'Firmas ClamAV + YARA + detección conductual, mapeadas a MITRE',
        ],
      },
      {
        h: 'Doctrina fundacional',
        items: [
          'Reglas de enfrentamiento — fijadas, capa superior',
          'Hardening CIS y playbooks de ops (sysadmin)',
          'Patrones de codificación segura OWASP / CWE (coding)',
        ],
      },
    ],
    domainsH: 'Tres dominios, un solo motor',
    domains: [
      { h: 'Sysadmin', body: 'Playbooks operativos para diagnóstico y remediación.' },
      { h: 'ITDR', body: 'Reglas de enfrentamiento, playbooks de incidentes y threat intel.' },
      { h: 'Coding', body: 'Reglas de codificación segura y contexto de proyecto para AI Studio.' },
    ],
  },
  it: {
    h: 'Fonti di conoscenza',
    lead: 'La dottrina si basa su standard di settore e documentazione dei vendor — ogni voce cita una fonte verificabile, non una regola inventata — ed è arricchita da feed di threat intel aperti.',
    cards: [
      {
        h: 'Standard e framework',
        items: [
          'MITRE ATT&CK — mappatura TTP e gruppi',
          'OWASP · CWE — codifica sicura',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — risposta agli incidenti',
        ],
      },
      {
        h: 'Documenti vendor e detection',
        items: [
          'Wazuh — regole HIDS, FIM, indexer',
          'Elastic / OpenSearch — correlazione SIEM',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Feed di threat intel aperti — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ voci di feed raggruppate per famiglia di malware',
          'Aggiornato automaticamente secondo pianificazione',
        ],
      },
      {
        h: 'Conoscenza malware curata',
        items: [
          'Famiglie Linux: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, miner, webshell, ransomware',
          'Firme ClamAV + YARA + rilevamento comportamentale, mappate su MITRE',
        ],
      },
      {
        h: 'Dottrina fondativa',
        items: [
          'Regole di ingaggio — fissate, livello superiore',
          'Hardening CIS e playbook ops (sysadmin)',
          'Pattern di codifica sicura OWASP / CWE (coding)',
        ],
      },
    ],
    domainsH: 'Tre domini, un solo motore',
    domains: [
      { h: 'Sysadmin', body: 'Playbook operativi per diagnosi e rimedio.' },
      { h: 'ITDR', body: 'Regole di ingaggio, playbook degli incidenti e threat intel.' },
      { h: 'Coding', body: 'Regole di codifica sicura e contesto di progetto per AI Studio.' },
    ],
  },
  ja: {
    h: 'ナレッジソース',
    lead: 'ドクトリンは業界標準とベンダー文書に基づいており、各エントリーは検証可能な出典を引用し、架空のルールではない——さらにオープンな脅威インテリジェンスフィードで強化される。',
    cards: [
      {
        h: '標準とフレームワーク',
        items: [
          'MITRE ATT&CK — TTPとグループのマッピング',
          'OWASP · CWE — セキュアコーディング',
          'CIS Benchmarks — ハードニング',
          'NIST 800-61r2 — インシデント対応',
        ],
      },
      {
        h: 'ベンダー・検知ドキュメント',
        items: [
          'Wazuh — HIDSルール、FIM、indexer',
          'Elastic / OpenSearch — SIEM相関',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'オープン脅威インテリジェンスフィード — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          'マルウェアファミリー別にグループ化された600以上のフィードエントリー',
          'スケジュールに従い自動更新',
        ],
      },
      {
        h: '厳選されたマルウェア知識',
        items: [
          'Linuxファミリー：XorDDoS、Kinsing、TeamTNT、Mirai、BPFDoor、Symbiote、マイナー、Webシェル、ランサムウェア',
          'ClamAVシグネチャ＋YARA＋振る舞い検知、MITREマッピング済み',
        ],
      },
      {
        h: '基盤ドクトリン',
        items: [
          '交戦規定 — ピン留め、最上位層',
          'CIS強化＋運用プレイブック（sysadmin）',
          'OWASP / CWE セキュアコーディングパターン（coding）',
        ],
      },
    ],
    domainsH: '3つの領域、1つのエンジン',
    domains: [
      { h: 'Sysadmin', body: '診断と修復のための運用プレイブック。' },
      { h: 'ITDR', body: '交戦規定、インシデントプレイブック、脅威インテリジェンス。' },
      { h: 'Coding', body: 'AI Studio向けのセキュアコーディングルールとプロジェクトコンテキスト。' },
    ],
  },
  uk: {
    h: 'Джерела знань',
    lead: 'Доктрина спирається на галузеві стандарти й документацію вендорів — кожен запис посилається на перевірюване джерело, а не вигадане правило — і збагачується відкритими фідами threat intel.',
    cards: [
      {
        h: 'Стандарти та фреймворки',
        items: [
          'MITRE ATT&CK — маппінг TTP і груп',
          'OWASP · CWE — безпечний код',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — реагування на інциденти',
        ],
      },
      {
        h: 'Вендорські та детект-документи',
        items: [
          'Wazuh — правила HIDS, FIM, indexer',
          'Elastic / OpenSearch — SIEM-кореляція',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Відкриті фіди threat intel — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ записів фідів, згруповані за родинами шкідливого ПЗ',
          'Оновлюються автоматично за розкладом',
        ],
      },
      {
        h: 'Курійоване знання про малваре',
        items: [
          'Linux-родини: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, майнери, вебшели, ransomware',
          'Сигнатури ClamAV + YARA + поведінкова детекція, з MITRE-маппінгом',
        ],
      },
      {
        h: 'Базова доктрина',
        items: [
          'Правила застосування (ROE) — закріплені, верхній шар',
          'CIS-hardening та ops-плейбуки (sysadmin)',
          'Патерни OWASP / CWE безпечного коду (coding)',
        ],
      },
    ],
    domainsH: 'Три домени — один рушій',
    domains: [
      { h: 'Sysadmin', body: 'Операційні плейбуки для діагностики та усунення.' },
      { h: 'ITDR', body: 'Правила застосування, плейбуки інцидентів і threat intel.' },
      { h: 'Coding', body: 'Правила безпечного коду та контекст проєкту для AI Studio.' },
    ],
  },
  sr: {
    h: 'Izvori znanja',
    lead: 'Doktrina se oslanja na industrijske standarde i dokumentaciju proizvođača — svaki unos citira proverljiv izvor, a ne izmišljeno pravilo — i obogaćena je otvorenim threat-intel fidovima.',
    cards: [
      {
        h: 'Standardi i okviri',
        items: [
          'MITRE ATT&CK — mapiranje TTP i grupa',
          'OWASP · CWE — bezbedno kodiranje',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — odgovor na incidente',
        ],
      },
      {
        h: 'Dokumentacija proizvođača i detekcije',
        items: [
          'Wazuh — HIDS pravila, FIM, indexer',
          'Elastic / OpenSearch — SIEM korelacija',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Otvoreni threat-intel fidovi — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ unosa fidova grupisanih po porodici malvera',
          'Automatski se osvežava po rasporedu',
        ],
      },
      {
        h: 'Kurirano znanje o malveru',
        items: [
          'Linux porodice: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, majneri, webshell-ovi, ransomware',
          'ClamAV potpisi + YARA + bihevioralna detekcija, mapirano na MITRE',
        ],
      },
      {
        h: 'Osnivačka doktrina',
        items: [
          'Pravila angažovanja — zakačena, gornji sloj',
          'CIS-hardening i ops playbook-ovi (sysadmin)',
          'OWASP / CWE šabloni bezbednog kodiranja (coding)',
        ],
      },
    ],
    domainsH: 'Tri domena, jedan motor',
    domains: [
      { h: 'Sysadmin', body: 'Operativni playbook-ovi za dijagnostiku i saniranje.' },
      { h: 'ITDR', body: 'Pravila angažovanja, playbook-ovi incidenata i threat intel.' },
      { h: 'Coding', body: 'Pravila bezbednog kodiranja i kontekst projekta za AI Studio.' },
    ],
  },
  pt: {
    h: 'Fontes de conhecimento',
    lead: 'A doutrina se baseia em padrões do setor e documentação de fornecedores — cada entrada cita uma fonte verificável, não uma regra inventada — e é enriquecida por feeds abertos de threat intel.',
    cards: [
      {
        h: 'Padrões e frameworks',
        items: [
          'MITRE ATT&CK — mapeamento de TTP e grupos',
          'OWASP · CWE — codificação segura',
          'CIS Benchmarks — hardening',
          'NIST 800-61r2 — resposta a incidentes',
        ],
      },
      {
        h: 'Docs de fornecedores e detecção',
        items: [
          'Wazuh — regras HIDS, FIM, indexer',
          'Elastic / OpenSearch — correlação SIEM',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Feeds abertos de threat intel — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ entradas de feeds agrupadas por família de malware',
          'Atualizado automaticamente conforme agenda',
        ],
      },
      {
        h: 'Conhecimento de malware curado',
        items: [
          'Famílias Linux: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, mineradores, webshells, ransomware',
          'Assinaturas ClamAV + YARA + detecção comportamental, mapeadas ao MITRE',
        ],
      },
      {
        h: 'Doutrina fundadora',
        items: [
          'Regras de engajamento — fixadas, camada superior',
          'Hardening CIS e playbooks de ops (sysadmin)',
          'Padrões de codificação segura OWASP / CWE (coding)',
        ],
      },
    ],
    domainsH: 'Três domínios, um único motor',
    domains: [
      { h: 'Sysadmin', body: 'Playbooks operacionais para diagnóstico e remediação.' },
      { h: 'ITDR', body: 'Regras de engajamento, playbooks de incidentes e threat intel.' },
      { h: 'Coding', body: 'Regras de codificação segura e contexto de projeto para AI Studio.' },
    ],
  },
  hi: {
    h: 'ज्ञान स्रोत',
    lead: 'डॉक्ट्रिन उद्योग मानकों और वेंडर दस्तावेज़ पर आधारित है — हर प्रविष्टि एक सत्यापन योग्य स्रोत का हवाला देती है, कोई गढ़ा हुआ नियम नहीं — और यह खुले threat-intel फीड से समृद्ध होती है।',
    cards: [
      {
        h: 'मानक और फ्रेमवर्क',
        items: [
          'MITRE ATT&CK — TTP और ग्रुप मैपिंग',
          'OWASP · CWE — सुरक्षित कोडिंग',
          'CIS Benchmarks — हार्डनिंग',
          'NIST 800-61r2 — इंसिडेंट रिस्पॉन्स',
        ],
      },
      {
        h: 'वेंडर और डिटेक्शन दस्तावेज़',
        items: [
          'Wazuh — HIDS नियम, FIM, indexer',
          'Elastic / OpenSearch — SIEM कोरिलेशन',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'खुले threat-intel फीड — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          'मालवेयर परिवार के अनुसार समूहित 600+ फीड प्रविष्टियाँ',
          'शेड्यूल के अनुसार स्वतः अपडेट',
        ],
      },
      {
        h: 'क्यूरेटेड मालवेयर ज्ञान',
        items: [
          'Linux परिवार: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, माइनर, वेबशेल, रैनसमवेयर',
          'ClamAV सिग्नेचर + YARA + व्यवहार-आधारित डिटेक्शन, MITRE-मैप्ड',
        ],
      },
      {
        h: 'संस्थापक डॉक्ट्रिन',
        items: [
          'रूल्स ऑफ इंगेजमेंट — पिन किया हुआ, शीर्ष स्तर',
          'CIS-हार्डनिंग और ऑप्स प्लेबुक (sysadmin)',
          'OWASP / CWE सुरक्षित कोडिंग पैटर्न (coding)',
        ],
      },
    ],
    domainsH: 'तीन डोमेन, एक इंजन',
    domains: [
      { h: 'Sysadmin', body: 'निदान और समाधान के लिए ऑपरेशनल प्लेबुक।' },
      { h: 'ITDR', body: 'रूल्स ऑफ इंगेजमेंट, इंसिडेंट प्लेबुक और threat intel।' },
      { h: 'Coding', body: 'AI Studio के लिए सुरक्षित कोडिंग नियम और प्रोजेक्ट संदर्भ।' },
    ],
  },
  tr: {
    h: 'Bilgi kaynakları',
    lead: 'Doktrin, sektör standartlarına ve tedarikçi dokümantasyonuna dayanır — her kayıt uydurma bir kural değil, doğrulanabilir bir kaynağa atıf yapar — ve açık threat-intel akışlarıyla zenginleştirilir.',
    cards: [
      {
        h: 'Standartlar ve çerçeveler',
        items: [
          'MITRE ATT&CK — TTP ve grup eşleştirmesi',
          'OWASP · CWE — güvenli kodlama',
          'CIS Benchmarks — sertleştirme',
          'NIST 800-61r2 — olay müdahalesi',
        ],
      },
      {
        h: 'Tedarikçi ve tespit dokümanları',
        items: [
          'Wazuh — HIDS kuralları, FIM, indexer',
          'Elastic / OpenSearch — SIEM korelasyonu',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Açık threat-intel akışları — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          'Zararlı yazılım ailesine göre gruplanmış 600+ akış kaydı',
          'Programa göre otomatik yenilenir',
        ],
      },
      {
        h: 'Derlenmiş zararlı yazılım bilgisi',
        items: [
          'Linux aileleri: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, madenciler, web kabukları, fidye yazılımı',
          'ClamAV imzaları + YARA + davranışsal tespit, MITRE ile eşleştirilmiş',
        ],
      },
      {
        h: 'Kurucu doktrin',
        items: [
          'Angajman kuralları — sabitlenmiş, üst katman',
          'CIS sertleştirme ve ops playbook\'ları (sysadmin)',
          'OWASP / CWE güvenli kodlama desenleri (coding)',
        ],
      },
    ],
    domainsH: 'Üç alan, tek motor',
    domains: [
      { h: 'Sysadmin', body: 'Teşhis ve çözüm için operasyonel playbook\'lar.' },
      { h: 'ITDR', body: 'Angajman kuralları, olay playbook\'ları ve threat intel.' },
      { h: 'Coding', body: 'AI Studio için güvenli kodlama kuralları ve proje bağlamı.' },
    ],
  },
  ar: {
    h: 'مصادر المعرفة',
    lead: 'تستند العقيدة إلى معايير الصناعة ووثائق الموردين — كل إدخال يستشهد بمصدر يمكن التحقق منه، وليس قاعدة مُختلقة — وتُثرى بموجز معلومات تهديدات مفتوحة.',
    cards: [
      {
        h: 'المعايير والأطر',
        items: [
          'MITRE ATT&CK — تخطيط TTP والمجموعات',
          'OWASP · CWE — البرمجة الآمنة',
          'CIS Benchmarks — التصليب',
          'NIST 800-61r2 — الاستجابة للحوادث',
        ],
      },
      {
        h: 'وثائق الموردين والكشف',
        items: [
          'Wazuh — قواعد HIDS وFIM وindexer',
          'Elastic / OpenSearch — ربط SIEM',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'موجزات معلومات تهديدات مفتوحة — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ إدخال موجز مُصنّف حسب عائلة البرمجية الخبيثة',
          'يُحدَّث تلقائياً وفق جدول',
        ],
      },
      {
        h: 'معرفة برمجيات خبيثة منسّقة',
        items: [
          'عائلات لينكس: XorDDoS، Kinsing، TeamTNT، Mirai، BPFDoor، Symbiote، عمّال تعدين، أصداف ويب، برمجيات فدية',
          'توقيعات ClamAV + YARA + كشف سلوكي، مُخطَّطة على MITRE',
        ],
      },
      {
        h: 'العقيدة التأسيسية',
        items: [
          'قواعد الاشتباك — مثبّتة، الطبقة العليا',
          'تصليب CIS وأدلة تشغيل العمليات (sysadmin)',
          'أنماط البرمجة الآمنة OWASP / CWE (coding)',
        ],
      },
    ],
    domainsH: 'ثلاثة مجالات، محرك واحد',
    domains: [
      { h: 'Sysadmin', body: 'أدلة تشغيلية للتشخيص والمعالجة.' },
      { h: 'ITDR', body: 'قواعد الاشتباك، أدلة الحوادث، ومعلومات التهديدات.' },
      { h: 'Coding', body: 'قواعد البرمجة الآمنة وسياق المشروع لـ AI Studio.' },
    ],
  },
  el: {
    h: 'Πηγές γνώσης',
    lead: 'Η δόγμα βασίζεται σε βιομηχανικά πρότυπα και τεκμηρίωση προμηθευτών — κάθε καταχώριση παραπέμπει σε επαληθεύσιμη πηγή, όχι σε επινοημένο κανόνα — και εμπλουτίζεται από ανοιχτές ροές threat intel.',
    cards: [
      {
        h: 'Πρότυπα και πλαίσια',
        items: [
          'MITRE ATT&CK — αντιστοίχιση TTP και ομάδων',
          'OWASP · CWE — ασφαλής κωδικοποίηση',
          'CIS Benchmarks — σκλήρυνση',
          'NIST 800-61r2 — απόκριση σε περιστατικά',
        ],
      },
      {
        h: 'Έγγραφα προμηθευτών & ανίχνευσης',
        items: [
          'Wazuh — κανόνες HIDS, FIM, indexer',
          'Elastic / OpenSearch — συσχέτιση SIEM',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: 'Ανοιχτές ροές threat intel — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ καταχωρίσεις ροών ομαδοποιημένες ανά οικογένεια κακόβουλου λογισμικού',
          'Ανανεώνεται αυτόματα βάσει προγράμματος',
        ],
      },
      {
        h: 'Επιμελημένη γνώση κακόβουλου λογισμικού',
        items: [
          'Οικογένειες Linux: XorDDoS, Kinsing, TeamTNT, Mirai, BPFDoor, Symbiote, miners, webshells, ransomware',
          'Υπογραφές ClamAV + YARA + ανίχνευση συμπεριφοράς, αντιστοιχισμένες σε MITRE',
        ],
      },
      {
        h: 'Ιδρυτική δόγμα',
        items: [
          'Κανόνες εμπλοκής — καρφιτσωμένοι, ανώτερο επίπεδο',
          'Σκλήρυνση CIS και playbooks λειτουργιών (sysadmin)',
          'Πρότυπα ασφαλούς κωδικοποίησης OWASP / CWE (coding)',
        ],
      },
    ],
    domainsH: 'Τρεις τομείς, μία μηχανή',
    domains: [
      { h: 'Sysadmin', body: 'Επιχειρησιακά playbooks για διάγνωση και αποκατάσταση.' },
      { h: 'ITDR', body: 'Κανόνες εμπλοκής, playbooks περιστατικών και threat intel.' },
      { h: 'Coding', body: 'Κανόνες ασφαλούς κωδικοποίησης και πλαίσιο έργου για το AI Studio.' },
    ],
  },
  zh: {
    h: '知識來源',
    lead: '知識庫以業界標準與廠商文件為根基——每一條目皆引用可查證的來源，而非杜撰的規則——並由開放威脅情報饋送持續充實。',
    cards: [
      {
        h: '標準與框架',
        items: [
          'MITRE ATT&CK — TTP 與組織對應',
          'OWASP · CWE — 安全編碼',
          'CIS Benchmarks — 系統加固',
          'NIST 800-61r2 — 事件回應',
        ],
      },
      {
        h: '廠商與偵測文件',
        items: [
          'Wazuh — HIDS 規則、FIM、indexer',
          'Elastic / OpenSearch — SIEM 關聯',
          'Suricata / ET-Open · ModSecurity CRS',
          'auditd · Sysmon-for-Linux · fail2ban / CrowdSec',
        ],
      },
      {
        h: '開放威脅情報饋送 — abuse.ch',
        items: [
          'URLhaus · ThreatFox · Feodo Tracker · SSLBL · MalwareBazaar',
          '600+ 條饋送條目，依惡意軟體家族分組',
          '按排程自動更新',
        ],
      },
      {
        h: '精選惡意軟體知識',
        items: [
          'Linux 家族：XorDDoS、Kinsing、TeamTNT、Mirai、BPFDoor、Symbiote、挖礦、Webshell、勒索軟體',
          'ClamAV 簽章 + YARA + 行為偵測，並對應 MITRE',
        ],
      },
      {
        h: '基礎守則',
        items: [
          '交戰守則（ROE）—— 釘選、頂層',
          'CIS 加固與維運行動手冊（sysadmin）',
          'OWASP / CWE 安全編碼模式（coding）',
        ],
      },
    ],
    domainsH: '三大領域，同一引擎',
    domains: [
      { h: 'Sysadmin', body: '用於診斷與修復的操作行動手冊。' },
      { h: 'ITDR', body: '交戰守則、事件行動手冊與威脅情報。' },
      { h: 'Coding', body: '為 AI Studio 提供的安全編碼規則與專案脈絡。' },
    ],
  },
};

export default function DoctrineFeeds() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {d.cards.map((c) => (
            <div key={c.h} className="rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-900/15 to-gray-900/30 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">{c.h}</h3>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-0.5 text-emerald-400">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-12 text-2xl font-bold text-white">{d.domainsH}</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {d.domains.map((dm) => (
            <div key={dm.h} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-1 font-semibold text-cyan-300">{dm.h}</p>
              <p className="text-sm text-white/65">{dm.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
