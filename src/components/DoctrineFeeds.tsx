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
