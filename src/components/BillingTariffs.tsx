'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Tier = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

type Data = { h: string; lead: string; includes: string; tiers: Tier[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'Plans',
    lead: 'From a single server to a data center — the same platform, sized to the customer.',
    includes: 'The price covers the whole fleet, not each server · Additional server $150/mo · Every plan includes ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/server/mo', tagline: 'Entry — monitoring + advice', features: ['$20 per monitoring server · 1 user', 'Alerts & recommendations', '3 incident/virus + 1 cyber-attack response/mo included', 'Extra: incident/virus from $20, cyber-attack $500', 'Cloud AI — 1 seat', 'Audit, fixes, automation — add-ons', 'Support 48h · 30-day retention'] },
      { name: 'Server', price: '$500', period: '/mo', tagline: '3 servers, all automated', features: ['3 fully automated servers · 3 users', 'Initial audit included', 'SIEM (Wazuh/Elastic), log analysis', 'Cloud AI — 1 seat · AI Studio — 1 seat', 'Cyber-attack defence — 1/mo · extra $500', 'Support 24h · 30-day retention'] },
      { name: 'Cluster', price: '$1500', period: '/mo', tagline: '13 servers, all automated', popular: true, features: ['13 fully automated servers · 10 users', 'Custom rules · firewall management', 'RBAC · audit log', 'Cloud AI — 3 seats · AI Studio — 3 seats', 'Cyber-attack defence — 2/mo · extra $500', 'Priority support 4h · 90-day retention'] },
      { name: 'Platform', price: '$3500', period: '/mo', tagline: '40 servers, all automated', features: ['40 fully automated servers · 25 users', 'SSO · on-prem (optional) · AI tuning', '99.9% SLA · white-label · compliance', 'Cloud AI — 5 seats · AI Studio — 5 seats', 'Cyber-attack defence — 5/mo · extra $500', 'Dedicated support · 90-day retention'] },
      { name: 'Enterprise', price: 'Custom', period: 'calculated individually', tagline: 'Unlimited, air-gapped', features: ['Unlimited servers & users', 'On-prem full isolation · air-gapped', 'Custom ML training · all features', 'Cloud AI & AI Studio — unlimited', 'Cyber-attack defence — unlimited', '99.99% SLA · 365-day retention'] },
    ],
  },
  ru: {
    h: 'Тарифы',
    lead: 'От одного сервера до дата-центра — одна платформа, под размер клиента.',
    includes: 'Цена за весь парк серверов, а не за каждый · Добор сервера $150/мес · На каждом тарифе включены ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/сервер/мес', tagline: 'Старт — мониторинг + советы', features: ['$20 за сервер мониторинга · 1 юзер', 'Алерты и рекомендации', 'Включено 3 инцидента/вируса + 1 кибер-атака/мес', 'Сверх: инцидент/вирус от $20, кибер-атака $500', 'Cloud AI — 1 место', 'Аудит, фиксы, автоматизация — add-on', 'Саппорт 48ч · retention 30д'] },
      { name: 'Server', price: '$500', period: '/мес', tagline: '3 сервера, все в автомате', features: ['3 сервера полностью в автомате · 3 юзера', 'Initial audit включён', 'SIEM (Wazuh/Elastic), анализ логов', 'Cloud AI — 1 место · AI Studio — 1 место', 'Защита от кибер-атак — 1/мес · сверх $500', 'Саппорт 24ч · retention 30д'] },
      { name: 'Cluster', price: '$1500', period: '/мес', tagline: '13 серверов, все в автомате', popular: true, features: ['13 серверов полностью в автомате · 10 юзеров', 'Custom-правила · управление firewall', 'RBAC · audit log', 'Cloud AI — 3 места · AI Studio — 3 места', 'Защита от кибер-атак — 2/мес · сверх $500', 'Prio-саппорт 4ч · retention 90д'] },
      { name: 'Platform', price: '$3500', period: '/мес', tagline: '40 серверов, все в автомате', features: ['40 серверов полностью в автомате · 25 юзеров', 'SSO · on-prem (опц.) · AI-tuning', '99.9% SLA · white-label · compliance', 'Cloud AI — 5 мест · AI Studio — 5 мест', 'Защита от кибер-атак — 5/мес · сверх $500', 'Dedicated support · retention 90д'] },
      { name: 'Enterprise', price: 'Custom', period: 'рассчитывается индивидуально', tagline: 'Безлимит, air-gapped', features: ['Безлимит серверов и юзеров', 'On-prem полная изоляция · air-gapped', 'Custom ML training · все фичи', 'Cloud AI и AI Studio — безлимит', 'Защита от кибер-атак — безлимит', '99.99% SLA · retention 365д'] },
    ],
  },
  zh: {
    h: '方案',
    lead: '從單一伺服器到資料中心——同一個平台，依客戶規模而設。',
    includes: '價格涵蓋整個伺服器群，而非每台單獨計費 · 加購伺服器每台每月 $150 · 每一種方案皆包含 ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/伺服器/月', tagline: '入門——監控 + 建議', features: ['每台監控伺服器 $20 · 1 位使用者', '告警與建議', '每月含 3 次事件/病毒 + 1 次網路攻擊回應', '超額：事件/病毒 $20 起、網路攻擊 $500', 'Cloud AI —— 1 個席位', '稽核、修復、自動化——加購', '支援 48 小時 · 保留 30 天'] },
      { name: 'Server', price: '$500', period: '/月', tagline: '3 台伺服器，全部自動化', features: ['3 台伺服器全部自動化 · 3 位使用者', '含首次稽核', 'SIEM（Wazuh/Elastic）、日誌分析', 'Cloud AI —— 1 席 · AI Studio —— 1 席', '網路攻擊防禦 —— 1 次/月 · 超出每次 $500', '支援 24 小時 · 保留 30 天'] },
      { name: 'Cluster', price: '$1500', period: '/月', tagline: '13 台伺服器，全部自動化', popular: true, features: ['13 台伺服器全部自動化 · 10 位使用者', '自訂規則 · 防火牆管理', 'RBAC · 稽核日誌', 'Cloud AI —— 3 席 · AI Studio —— 3 席', '網路攻擊防禦 —— 2 次/月 · 超出每次 $500', '優先支援 4 小時 · 保留 90 天'] },
      { name: 'Platform', price: '$3500', period: '/月', tagline: '40 台伺服器，全部自動化', features: ['40 台伺服器全部自動化 · 25 位使用者', 'SSO · 地端（選用）· AI 調校', '99.9% SLA · 白標 · 合規', 'Cloud AI —— 5 席 · AI Studio —— 5 席', '網路攻擊防禦 —— 5 次/月 · 超出每次 $500', '專屬支援 · 保留 90 天'] },
      { name: 'Enterprise', price: 'Custom', period: '客製化計價', tagline: '無上限、隔離部署', features: ['無上限伺服器與使用者', '地端完全隔離 · air-gapped', '自訂 ML 訓練 · 全功能', 'Cloud AI 與 AI Studio —— 無上限', '網路攻擊防禦 —— 無上限', '99.99% SLA · 保留 365 天'] },
    ],
  },
  fr: {
    h: 'Offres',
    lead: "D'un seul serveur à un data center — la même plateforme, adaptée à la taille du client.",
    includes: "Le prix couvre l'ensemble du parc, pas chaque serveur · Serveur supplémentaire $150/mois · Chaque offre inclut ITDR · SIEM · RAG",
    tiers: [
      { name: 'Monitor', price: '$20', period: '/serveur/mois', tagline: 'Entrée — surveillance + conseils', features: ['20 $ par serveur de supervision · 1 utilisateur', 'Alertes et recommandations', '3 incidents/virus + 1 réponse à cyberattaque/mois inclus', 'Supplément : incident/virus à partir de 20 $, cyberattaque 500 $', 'Cloud AI — 1 poste', 'Audit, correctifs, automatisation — en option', 'Support 48h · rétention 30 jours'] },
      { name: 'Server', price: '$500', period: '/mois', tagline: '3 serveurs, tout automatisé', features: ['3 serveurs entièrement automatisés · 3 utilisateurs', 'Audit initial inclus', 'SIEM (Wazuh/Elastic), analyse des journaux', 'Cloud AI — 1 poste · AI Studio — 1 poste', 'Défense anti-cyberattaque — 1/mois · supplément 500 $', 'Support 24h · rétention 30 jours'] },
      { name: 'Cluster', price: '$1500', period: '/mois', tagline: '13 serveurs, tout automatisé', popular: true, features: ['13 serveurs entièrement automatisés · 10 utilisateurs', 'Règles personnalisées · gestion du pare-feu', "RBAC · journal d'audit", 'Cloud AI — 3 postes · AI Studio — 3 postes', 'Défense anti-cyberattaque — 2/mois · supplément 500 $', 'Support prioritaire 4h · rétention 90 jours'] },
      { name: 'Platform', price: '$3500', period: '/mois', tagline: '40 serveurs, tout automatisé', features: ['40 serveurs entièrement automatisés · 25 utilisateurs', "SSO · on-prem (en option) · réglage de l'IA", '99,9 % SLA · marque blanche · conformité', 'Cloud AI — 5 postes · AI Studio — 5 postes', 'Défense anti-cyberattaque — 5/mois · supplément 500 $', 'Support dédié · rétention 90 jours'] },
      { name: 'Enterprise', price: 'Custom', period: 'calculé individuellement', tagline: 'Illimité, isolé (air-gapped)', features: ['Serveurs et utilisateurs illimités', 'Isolation totale on-prem · air-gapped', 'Entraînement ML personnalisé · toutes les fonctionnalités', 'Cloud AI et AI Studio — illimités', 'Défense anti-cyberattaque — illimitée', '99,99 % SLA · rétention 365 jours'] },
    ],
  },
  de: {
    h: 'Pläne',
    lead: 'Von einem einzelnen Server bis zum Rechenzentrum — dieselbe Plattform, passend zur Kundengröße.',
    includes: 'Der Preis gilt für die gesamte Serverflotte, nicht pro Server · Zusätzlicher Server $150/Monat · Jeder Plan enthält ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/Server/Monat', tagline: 'Einstieg — Monitoring + Beratung', features: ['$20 pro Monitoring-Server · 1 Nutzer', 'Warnungen & Empfehlungen', '3 Vorfälle/Viren + 1 Cyberangriff-Reaktion/Monat inklusive', 'Zusätzlich: Vorfall/Virus ab $20, Cyberangriff $500', 'Cloud AI — 1 Platz', 'Audit, Fixes, Automatisierung — Add-ons', 'Support 48h · Aufbewahrung 30 Tage'] },
      { name: 'Server', price: '$500', period: '/Monat', tagline: '3 Server, vollautomatisiert', features: ['3 vollautomatisierte Server · 3 Nutzer', 'Erstaudit inklusive', 'SIEM (Wazuh/Elastic), Log-Analyse', 'Cloud AI — 1 Platz · AI Studio — 1 Platz', 'Cyberangriffsabwehr — 1/Monat · zusätzlich $500', 'Support 24h · Aufbewahrung 30 Tage'] },
      { name: 'Cluster', price: '$1500', period: '/Monat', tagline: '13 Server, vollautomatisiert', popular: true, features: ['13 vollautomatisierte Server · 10 Nutzer', 'Individuelle Regeln · Firewall-Verwaltung', 'RBAC · Audit-Log', 'Cloud AI — 3 Plätze · AI Studio — 3 Plätze', 'Cyberangriffsabwehr — 2/Monat · zusätzlich $500', 'Priority-Support 4h · Aufbewahrung 90 Tage'] },
      { name: 'Platform', price: '$3500', period: '/Monat', tagline: '40 Server, vollautomatisiert', features: ['40 vollautomatisierte Server · 25 Nutzer', 'SSO · On-Prem (optional) · KI-Feintuning', '99,9 % SLA · White-Label · Compliance', 'Cloud AI — 5 Plätze · AI Studio — 5 Plätze', 'Cyberangriffsabwehr — 5/Monat · zusätzlich $500', 'Dedizierter Support · Aufbewahrung 90 Tage'] },
      { name: 'Enterprise', price: 'Custom', period: 'individuell kalkuliert', tagline: 'Unbegrenzt, air-gapped', features: ['Unbegrenzte Server & Nutzer', 'Vollständige On-Prem-Isolation · air-gapped', 'Individuelles ML-Training · alle Funktionen', 'Cloud AI & AI Studio — unbegrenzt', 'Cyberangriffsabwehr — unbegrenzt', '99,99 % SLA · Aufbewahrung 365 Tage'] },
    ],
  },
  es: {
    h: 'Planes',
    lead: 'Desde un único servidor hasta un centro de datos — la misma plataforma, ajustada al tamaño del cliente.',
    includes: 'El precio cubre toda la flota, no cada servidor · Servidor adicional $150/mes · Todos los planes incluyen ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/servidor/mes', tagline: 'Entrada — monitoreo + asesoramiento', features: ['$20 por servidor de monitoreo · 1 usuario', 'Alertas y recomendaciones', '3 incidentes/virus + 1 respuesta a ciberataque/mes incluidos', 'Extra: incidente/virus desde $20, ciberataque $500', 'Cloud AI — 1 puesto', 'Auditoría, correcciones, automatización — complementos', 'Soporte 48h · retención 30 días'] },
      { name: 'Server', price: '$500', period: '/mes', tagline: '3 servidores, todo automatizado', features: ['3 servidores totalmente automatizados · 3 usuarios', 'Auditoría inicial incluida', 'SIEM (Wazuh/Elastic), análisis de registros', 'Cloud AI — 1 puesto · AI Studio — 1 puesto', 'Defensa ante ciberataques — 1/mes · extra $500', 'Soporte 24h · retención 30 días'] },
      { name: 'Cluster', price: '$1500', period: '/mes', tagline: '13 servidores, todo automatizado', popular: true, features: ['13 servidores totalmente automatizados · 10 usuarios', 'Reglas personalizadas · gestión de firewall', 'RBAC · registro de auditoría', 'Cloud AI — 3 puestos · AI Studio — 3 puestos', 'Defensa ante ciberataques — 2/mes · extra $500', 'Soporte prioritario 4h · retención 90 días'] },
      { name: 'Platform', price: '$3500', period: '/mes', tagline: '40 servidores, todo automatizado', features: ['40 servidores totalmente automatizados · 25 usuarios', 'SSO · on-prem (opcional) · ajuste de IA', '99.9% SLA · white-label · cumplimiento normativo', 'Cloud AI — 5 puestos · AI Studio — 5 puestos', 'Defensa ante ciberataques — 5/mes · extra $500', 'Soporte dedicado · retención 90 días'] },
      { name: 'Enterprise', price: 'Custom', period: 'calculado individualmente', tagline: 'Ilimitado, aislado (air-gapped)', features: ['Servidores y usuarios ilimitados', 'Aislamiento total on-prem · air-gapped', 'Entrenamiento de ML personalizado · todas las funciones', 'Cloud AI y AI Studio — ilimitados', 'Defensa ante ciberataques — ilimitada', '99.99% SLA · retención 365 días'] },
    ],
  },
  it: {
    h: 'Piani',
    lead: 'Da un singolo server a un data center — la stessa piattaforma, dimensionata sul cliente.',
    includes: "Il prezzo copre l'intera flotta, non ogni singolo server · Server aggiuntivo $150/mese · Ogni piano include ITDR · SIEM · RAG",
    tiers: [
      { name: 'Monitor', price: '$20', period: '/server/mese', tagline: 'Ingresso — monitoraggio + consulenza', features: ['$20 per server di monitoraggio · 1 utente', 'Avvisi e raccomandazioni', '3 incidenti/virus + 1 risposta ad attacco informatico/mese inclusi', 'Extra: incidente/virus da $20, attacco informatico $500', 'Cloud AI — 1 postazione', 'Audit, correzioni, automazione — componenti aggiuntivi', 'Supporto 48h · conservazione 30 giorni'] },
      { name: 'Server', price: '$500', period: '/mese', tagline: '3 server, tutti automatizzati', features: ['3 server completamente automatizzati · 3 utenti', 'Audit iniziale incluso', 'SIEM (Wazuh/Elastic), analisi dei log', 'Cloud AI — 1 postazione · AI Studio — 1 postazione', 'Difesa da attacchi informatici — 1/mese · extra $500', 'Supporto 24h · conservazione 30 giorni'] },
      { name: 'Cluster', price: '$1500', period: '/mese', tagline: '13 server, tutti automatizzati', popular: true, features: ['13 server completamente automatizzati · 10 utenti', 'Regole personalizzate · gestione firewall', 'RBAC · log di audit', 'Cloud AI — 3 postazioni · AI Studio — 3 postazioni', 'Difesa da attacchi informatici — 2/mese · extra $500', 'Supporto prioritario 4h · conservazione 90 giorni'] },
      { name: 'Platform', price: '$3500', period: '/mese', tagline: '40 server, tutti automatizzati', features: ['40 server completamente automatizzati · 25 utenti', 'SSO · on-prem (opzionale) · tuning AI', '99,9% SLA · white-label · conformità', 'Cloud AI — 5 postazioni · AI Studio — 5 postazioni', 'Difesa da attacchi informatici — 5/mese · extra $500', 'Supporto dedicato · conservazione 90 giorni'] },
      { name: 'Enterprise', price: 'Custom', period: 'calcolato individualmente', tagline: 'Illimitato, air-gapped', features: ['Server e utenti illimitati', 'Isolamento on-prem completo · air-gapped', 'Addestramento ML personalizzato · tutte le funzionalità', 'Cloud AI e AI Studio — illimitati', 'Difesa da attacchi informatici — illimitata', '99,99% SLA · conservazione 365 giorni'] },
    ],
  },
  ja: {
    h: 'プラン',
    lead: '単一サーバーからデータセンターまで — 同じプラットフォームを、お客様の規模に合わせて提供。',
    includes: '料金は各サーバー単位ではなくフリート全体に適用 · サーバー追加 $150/月 · すべてのプランにITDR・SIEM・RAGを含む',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/サーバー/月', tagline: 'エントリー — 監視 + アドバイス', features: ['監視サーバー1台あたり$20・1ユーザー', 'アラートと推奨事項', '月3件のインシデント/ウイルス + 1件のサイバー攻撃対応が含まれます', '追加：インシデント/ウイルスは$20から、サイバー攻撃は$500', 'Cloud AI — 1シート', '監査・修正・自動化 — アドオン', 'サポート48時間・保持期間30日'] },
      { name: 'Server', price: '$500', period: '/月', tagline: '3台のサーバー、すべて自動化', features: ['完全自動化サーバー3台・3ユーザー', '初回監査込み', 'SIEM（Wazuh/Elastic）、ログ分析', 'Cloud AI — 1シート・AI Studio — 1シート', 'サイバー攻撃防御 — 月1件・追加$500', 'サポート24時間・保持期間30日'] },
      { name: 'Cluster', price: '$1500', period: '/月', tagline: '13台のサーバー、すべて自動化', popular: true, features: ['完全自動化サーバー13台・10ユーザー', 'カスタムルール・ファイアウォール管理', 'RBAC・監査ログ', 'Cloud AI — 3シート・AI Studio — 3シート', 'サイバー攻撃防御 — 月2件・追加$500', '優先サポート4時間・保持期間90日'] },
      { name: 'Platform', price: '$3500', period: '/月', tagline: '40台のサーバー、すべて自動化', features: ['完全自動化サーバー40台・25ユーザー', 'SSO・オンプレミス（オプション）・AIチューニング', '99.9% SLA・ホワイトラベル・コンプライアンス', 'Cloud AI — 5シート・AI Studio — 5シート', 'サイバー攻撃防御 — 月5件・追加$500', '専任サポート・保持期間90日'] },
      { name: 'Enterprise', price: 'Custom', period: '個別に算定', tagline: '無制限、エアギャップ', features: ['サーバー・ユーザー数無制限', 'オンプレミス完全隔離・エアギャップ', 'カスタムML学習・全機能', 'Cloud AI と AI Studio — 無制限', 'サイバー攻撃防御 — 無制限', '99.99% SLA・保持期間365日'] },
    ],
  },
  uk: {
    h: 'Тарифи',
    lead: 'Від одного сервера до дата-центру — та сама платформа, під розмір клієнта.',
    includes: 'Ціна за весь парк серверів, а не за кожен окремо · Додатковий сервер $150/міс · Кожен тариф включає ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/сервер/міс', tagline: 'Старт — моніторинг + поради', features: ['$20 за сервер моніторингу · 1 користувач', 'Сповіщення та рекомендації', 'Включено 3 інциденти/віруси + 1 реагування на кібератаку/міс', 'Понад ліміт: інцидент/вірус від $20, кібератака $500', 'Cloud AI — 1 місце', 'Аудит, виправлення, автоматизація — додаткові опції', 'Підтримка 48 год · зберігання 30 днів'] },
      { name: 'Server', price: '$500', period: '/міс', tagline: '3 сервери, все в автоматі', features: ['3 сервери повністю в автоматі · 3 користувачі', 'Початковий аудит включено', 'SIEM (Wazuh/Elastic), аналіз логів', 'Cloud AI — 1 місце · AI Studio — 1 місце', 'Захист від кібератак — 1/міс · понад ліміт $500', 'Підтримка 24 год · зберігання 30 днів'] },
      { name: 'Cluster', price: '$1500', period: '/міс', tagline: '13 серверів, все в автоматі', popular: true, features: ['13 серверів повністю в автоматі · 10 користувачів', 'Власні правила · керування фаєрволом', 'RBAC · журнал аудиту', 'Cloud AI — 3 місця · AI Studio — 3 місця', 'Захист від кібератак — 2/міс · понад ліміт $500', 'Пріоритетна підтримка 4 год · зберігання 90 днів'] },
      { name: 'Platform', price: '$3500', period: '/міс', tagline: '40 серверів, все в автоматі', features: ['40 серверів повністю в автоматі · 25 користувачів', 'SSO · on-prem (опційно) · AI-тюнінг', '99.9% SLA · white-label · комплаєнс', 'Cloud AI — 5 місць · AI Studio — 5 місць', 'Захист від кібератак — 5/міс · понад ліміт $500', 'Виділена підтримка · зберігання 90 днів'] },
      { name: 'Enterprise', price: 'Custom', period: 'розраховується індивідуально', tagline: 'Безліміт, air-gapped', features: ['Безліміт серверів і користувачів', 'Повна ізоляція on-prem · air-gapped', 'Власне навчання ML · всі функції', 'Cloud AI та AI Studio — безліміт', 'Захист від кібератак — безліміт', '99.99% SLA · зберігання 365 днів'] },
    ],
  },
  sr: {
    h: 'Planovi',
    lead: 'Od jednog servera do podatkovnog centra — ista platforma, prilagođena veličini klijenta.',
    includes: 'Cena pokriva ceo park servera, ne svaki server pojedinačno · Dodatni server $150/mes · Svaki plan uključuje ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/server/mes', tagline: 'Ulazni nivo — nadzor + saveti', features: ['$20 po serveru za nadzor · 1 korisnik', 'Upozorenja i preporuke', '3 incidenta/virusa + 1 odgovor na sajber napad mesečno uključeno', 'Dodatno: incident/virus od $20, sajber napad $500', 'Cloud AI — 1 mesto', 'Revizija, ispravke, automatizacija — dodaci', 'Podrška 48h · zadržavanje podataka 30 dana'] },
      { name: 'Server', price: '$500', period: '/mes', tagline: '3 servera, sve automatizovano', features: ['3 potpuno automatizovana servera · 3 korisnika', 'Početna revizija uključena', 'SIEM (Wazuh/Elastic), analiza logova', 'Cloud AI — 1 mesto · AI Studio — 1 mesto', 'Odbrana od sajber napada — 1/mes · dodatno $500', 'Podrška 24h · zadržavanje podataka 30 dana'] },
      { name: 'Cluster', price: '$1500', period: '/mes', tagline: '13 servera, sve automatizovano', popular: true, features: ['13 potpuno automatizovanih servera · 10 korisnika', 'Prilagođena pravila · upravljanje firewall-om', 'RBAC · dnevnik revizije', 'Cloud AI — 3 mesta · AI Studio — 3 mesta', 'Odbrana od sajber napada — 2/mes · dodatno $500', 'Prioritetna podrška 4h · zadržavanje podataka 90 dana'] },
      { name: 'Platform', price: '$3500', period: '/mes', tagline: '40 servera, sve automatizovano', features: ['40 potpuno automatizovanih servera · 25 korisnika', 'SSO · on-prem (opciono) · AI podešavanje', '99,9% SLA · white-label · usklađenost', 'Cloud AI — 5 mesta · AI Studio — 5 mesta', 'Odbrana od sajber napada — 5/mes · dodatno $500', 'Posvećena podrška · zadržavanje podataka 90 dana'] },
      { name: 'Enterprise', price: 'Custom', period: 'obračunava se individualno', tagline: 'Neograničeno, izolovano (air-gapped)', features: ['Neograničen broj servera i korisnika', 'Potpuna on-prem izolacija · air-gapped', 'Prilagođeno ML obučavanje · sve funkcije', 'Cloud AI i AI Studio — neograničeno', 'Odbrana od sajber napada — neograničeno', '99,99% SLA · zadržavanje podataka 365 dana'] },
    ],
  },
  pt: {
    h: 'Planos',
    lead: 'De um único servidor a um data center — a mesma plataforma, dimensionada para o cliente.',
    includes: 'O preço cobre toda a frota, não cada servidor · Servidor adicional $150/mês · Todos os planos incluem ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/servidor/mês', tagline: 'Entrada — monitoramento + orientação', features: ['$20 por servidor de monitoramento · 1 usuário', 'Alertas e recomendações', '3 incidentes/vírus + 1 resposta a ciberataque/mês incluídos', 'Extra: incidente/vírus a partir de $20, ciberataque $500', 'Cloud AI — 1 assento', 'Auditoria, correções, automação — complementos', 'Suporte 48h · retenção de 30 dias'] },
      { name: 'Server', price: '$500', period: '/mês', tagline: '3 servidores, tudo automatizado', features: ['3 servidores totalmente automatizados · 3 usuários', 'Auditoria inicial incluída', 'SIEM (Wazuh/Elastic), análise de logs', 'Cloud AI — 1 assento · AI Studio — 1 assento', 'Defesa contra ciberataques — 1/mês · extra $500', 'Suporte 24h · retenção de 30 dias'] },
      { name: 'Cluster', price: '$1500', period: '/mês', tagline: '13 servidores, tudo automatizado', popular: true, features: ['13 servidores totalmente automatizados · 10 usuários', 'Regras personalizadas · gestão de firewall', 'RBAC · log de auditoria', 'Cloud AI — 3 assentos · AI Studio — 3 assentos', 'Defesa contra ciberataques — 2/mês · extra $500', 'Suporte prioritário 4h · retenção de 90 dias'] },
      { name: 'Platform', price: '$3500', period: '/mês', tagline: '40 servidores, tudo automatizado', features: ['40 servidores totalmente automatizados · 25 usuários', 'SSO · on-prem (opcional) · ajuste de IA', '99,9% SLA · white-label · conformidade', 'Cloud AI — 5 assentos · AI Studio — 5 assentos', 'Defesa contra ciberataques — 5/mês · extra $500', 'Suporte dedicado · retenção de 90 dias'] },
      { name: 'Enterprise', price: 'Custom', period: 'calculado individualmente', tagline: 'Ilimitado, isolado (air-gapped)', features: ['Servidores e usuários ilimitados', 'Isolamento total on-prem · air-gapped', 'Treinamento de ML personalizado · todos os recursos', 'Cloud AI e AI Studio — ilimitados', 'Defesa contra ciberataques — ilimitada', '99,99% SLA · retenção de 365 dias'] },
    ],
  },
  hi: {
    h: 'योजनाएँ',
    lead: 'एकल सर्वर से लेकर डेटा सेंटर तक — वही प्लेटफ़ॉर्म, ग्राहक के आकार के अनुसार।',
    includes: 'यह मूल्य पूरे बेड़े को कवर करता है, प्रत्येक सर्वर को नहीं · अतिरिक्त सर्वर $150/माह · हर योजना में ITDR · SIEM · RAG शामिल है',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/सर्वर/माह', tagline: 'एंट्री — मॉनिटरिंग + सलाह', features: ['प्रति मॉनिटरिंग सर्वर $20 · 1 उपयोगकर्ता', 'अलर्ट और सिफारिशें', 'प्रति माह 3 घटना/वायरस + 1 साइबर-अटैक प्रतिक्रिया शामिल', 'अतिरिक्त: घटना/वायरस $20 से, साइबर-अटैक $500', 'Cloud AI — 1 सीट', 'ऑडिट, फिक्स, ऑटोमेशन — ऐड-ऑन', 'सपोर्ट 48घं · 30-दिन रिटेंशन'] },
      { name: 'Server', price: '$500', period: '/माह', tagline: '3 सर्वर, पूरी तरह स्वचालित', features: ['3 पूर्णतः स्वचालित सर्वर · 3 उपयोगकर्ता', 'प्रारंभिक ऑडिट शामिल', 'SIEM (Wazuh/Elastic), लॉग विश्लेषण', 'Cloud AI — 1 सीट · AI Studio — 1 सीट', 'साइबर-अटैक सुरक्षा — 1/माह · अतिरिक्त $500', 'सपोर्ट 24घं · 30-दिन रिटेंशन'] },
      { name: 'Cluster', price: '$1500', period: '/माह', tagline: '13 सर्वर, पूरी तरह स्वचालित', popular: true, features: ['13 पूर्णतः स्वचालित सर्वर · 10 उपयोगकर्ता', 'कस्टम नियम · फ़ायरवॉल प्रबंधन', 'RBAC · ऑडिट लॉग', 'Cloud AI — 3 सीट · AI Studio — 3 सीट', 'साइबर-अटैक सुरक्षा — 2/माह · अतिरिक्त $500', 'प्राथमिकता सपोर्ट 4घं · 90-दिन रिटेंशन'] },
      { name: 'Platform', price: '$3500', period: '/माह', tagline: '40 सर्वर, पूरी तरह स्वचालित', features: ['40 पूर्णतः स्वचालित सर्वर · 25 उपयोगकर्ता', 'SSO · ऑन-प्रेम (वैकल्पिक) · AI ट्यूनिंग', '99.9% SLA · व्हाइट-लेबल · अनुपालन', 'Cloud AI — 5 सीट · AI Studio — 5 सीट', 'साइबर-अटैक सुरक्षा — 5/माह · अतिरिक्त $500', 'समर्पित सपोर्ट · 90-दिन रिटेंशन'] },
      { name: 'Enterprise', price: 'Custom', period: 'व्यक्तिगत रूप से गणना की जाती है', tagline: 'असीमित, एयर-गैप्ड', features: ['असीमित सर्वर और उपयोगकर्ता', 'ऑन-प्रेम पूर्ण अलगाव · एयर-गैप्ड', 'कस्टम ML प्रशिक्षण · सभी सुविधाएँ', 'Cloud AI और AI Studio — असीमित', 'साइबर-अटैक सुरक्षा — असीमित', '99.99% SLA · 365-दिन रिटेंशन'] },
    ],
  },
  tr: {
    h: 'Planlar',
    lead: 'Tek bir sunucudan bir veri merkezine kadar — aynı platform, müşterinin ölçeğine göre.',
    includes: 'Fiyat sunucu başına değil tüm filo için geçerlidir · Ek sunucu $150/ay · Her plan ITDR · SIEM · RAG içerir',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/sunucu/ay', tagline: 'Giriş — izleme + tavsiye', features: ['İzleme sunucusu başına $20 · 1 kullanıcı', 'Uyarılar ve öneriler', 'Ayda 3 olay/virüs + 1 siber saldırı yanıtı dahil', "Ek: olay/virüs $20'dan başlar, siber saldırı $500", 'Cloud AI — 1 koltuk', 'Denetim, düzeltmeler, otomasyon — eklentiler', 'Destek 48 saat · 30 günlük saklama'] },
      { name: 'Server', price: '$500', period: '/ay', tagline: '3 sunucu, tamamen otomatik', features: ['3 tamamen otomatik sunucu · 3 kullanıcı', 'İlk denetim dahil', 'SIEM (Wazuh/Elastic), günlük analizi', 'Cloud AI — 1 koltuk · AI Studio — 1 koltuk', 'Siber saldırı savunması — ayda 1 · ek $500', 'Destek 24 saat · 30 günlük saklama'] },
      { name: 'Cluster', price: '$1500', period: '/ay', tagline: '13 sunucu, tamamen otomatik', popular: true, features: ['13 tamamen otomatik sunucu · 10 kullanıcı', 'Özel kurallar · güvenlik duvarı yönetimi', 'RBAC · denetim günlüğü', 'Cloud AI — 3 koltuk · AI Studio — 3 koltuk', 'Siber saldırı savunması — ayda 2 · ek $500', 'Öncelikli destek 4 saat · 90 günlük saklama'] },
      { name: 'Platform', price: '$3500', period: '/ay', tagline: '40 sunucu, tamamen otomatik', features: ['40 tamamen otomatik sunucu · 25 kullanıcı', 'SSO · şirket içi (opsiyonel) · AI ayarlama', '%99,9 SLA · white-label · uyumluluk', 'Cloud AI — 5 koltuk · AI Studio — 5 koltuk', 'Siber saldırı savunması — ayda 5 · ek $500', 'Özel destek · 90 günlük saklama'] },
      { name: 'Enterprise', price: 'Custom', period: 'ayrı olarak hesaplanır', tagline: 'Sınırsız, air-gapped', features: ['Sınırsız sunucu ve kullanıcı', 'Tam şirket içi izolasyon · air-gapped', 'Özel ML eğitimi · tüm özellikler', 'Cloud AI ve AI Studio — sınırsız', 'Siber saldırı savunması — sınırsız', '%99,99 SLA · 365 günlük saklama'] },
    ],
  },
  ar: {
    h: 'الخطط',
    lead: 'من خادم واحد إلى مركز بيانات كامل — نفس المنصة، بحجم يناسب العميل.',
    includes: 'السعر يغطي الأسطول بأكمله وليس كل خادم على حدة · خادم إضافي $150/شهريًا · تشمل كل خطة ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/خادم/شهريًا', tagline: 'مبدئي — مراقبة + استشارة', features: ['$20 لكل خادم مراقبة · مستخدم واحد', 'تنبيهات وتوصيات', '3 حوادث/فيروسات + استجابة واحدة لهجوم سيبراني شهريًا مشمولة', 'إضافي: حادثة/فيروس بدءًا من $20، هجوم سيبراني $500', 'Cloud AI — مقعد واحد', 'التدقيق والإصلاحات والأتمتة — إضافات', 'الدعم 48 ساعة · الاحتفاظ بالبيانات 30 يومًا'] },
      { name: 'Server', price: '$500', period: '/شهريًا', tagline: '3 خوادم، كلها آلية', features: ['3 خوادم آلية بالكامل · 3 مستخدمين', 'تدقيق أولي مشمول', 'SIEM (Wazuh/Elastic)، تحليل السجلات', 'Cloud AI — مقعد واحد · AI Studio — مقعد واحد', 'الدفاع ضد الهجمات السيبرانية — 1 شهريًا · إضافي $500', 'الدعم 24 ساعة · الاحتفاظ بالبيانات 30 يومًا'] },
      { name: 'Cluster', price: '$1500', period: '/شهريًا', tagline: '13 خادمًا، كلها آلية', popular: true, features: ['13 خادمًا آليًا بالكامل · 10 مستخدمين', 'قواعد مخصصة · إدارة جدار الحماية', 'RBAC · سجل تدقيق', 'Cloud AI — 3 مقاعد · AI Studio — 3 مقاعد', 'الدفاع ضد الهجمات السيبرانية — 2 شهريًا · إضافي $500', 'دعم ذو أولوية 4 ساعات · الاحتفاظ بالبيانات 90 يومًا'] },
      { name: 'Platform', price: '$3500', period: '/شهريًا', tagline: '40 خادمًا، كلها آلية', features: ['40 خادمًا آليًا بالكامل · 25 مستخدمًا', 'SSO · محلي (اختياري) · ضبط الذكاء الاصطناعي', '99.9% اتفاقية مستوى الخدمة · علامة بيضاء · امتثال', 'Cloud AI — 5 مقاعد · AI Studio — 5 مقاعد', 'الدفاع ضد الهجمات السيبرانية — 5 شهريًا · إضافي $500', 'دعم مخصص · الاحتفاظ بالبيانات 90 يومًا'] },
      { name: 'Enterprise', price: 'Custom', period: 'يُحسب بشكل فردي', tagline: 'غير محدود، معزول تمامًا (air-gapped)', features: ['خوادم ومستخدمون غير محدودين', 'عزل كامل محلي · air-gapped', 'تدريب نماذج تعلم آلي مخصص · جميع الميزات', 'Cloud AI و AI Studio — غير محدود', 'الدفاع ضد الهجمات السيبرانية — غير محدود', '99.99% اتفاقية مستوى الخدمة · الاحتفاظ بالبيانات 365 يومًا'] },
    ],
  },
  el: {
    h: 'Πλάνα',
    lead: 'Από έναν μόνο διακομιστή έως ένα data center — η ίδια πλατφόρμα, προσαρμοσμένη στο μέγεθος του πελάτη.',
    includes: 'Η τιμή καλύπτει ολόκληρο τον στόλο, όχι κάθε διακομιστή ξεχωριστά · Επιπλέον διακομιστής $150/μήνα · Κάθε πλάνο περιλαμβάνει ITDR · SIEM · RAG',
    tiers: [
      { name: 'Monitor', price: '$20', period: '/διακομιστή/μήνα', tagline: 'Είσοδος — παρακολούθηση + συμβουλές', features: ['$20 ανά διακομιστή παρακολούθησης · 1 χρήστης', 'Ειδοποιήσεις & συστάσεις', '3 περιστατικά/ιοί + 1 απόκριση σε κυβερνοεπίθεση/μήνα περιλαμβάνονται', 'Επιπλέον: περιστατικό/ιός από $20, κυβερνοεπίθεση $500', 'Cloud AI — 1 θέση', 'Έλεγχος, διορθώσεις, αυτοματοποίηση — πρόσθετα', 'Υποστήριξη 48ω · διατήρηση 30 ημερών'] },
      { name: 'Server', price: '$500', period: '/μήνα', tagline: '3 διακομιστές, όλα αυτοματοποιημένα', features: ['3 πλήρως αυτοματοποιημένοι διακομιστές · 3 χρήστες', 'Αρχικός έλεγχος περιλαμβάνεται', 'SIEM (Wazuh/Elastic), ανάλυση αρχείων καταγραφής', 'Cloud AI — 1 θέση · AI Studio — 1 θέση', 'Άμυνα κατά κυβερνοεπιθέσεων — 1/μήνα · επιπλέον $500', 'Υποστήριξη 24ω · διατήρηση 30 ημερών'] },
      { name: 'Cluster', price: '$1500', period: '/μήνα', tagline: '13 διακομιστές, όλα αυτοματοποιημένα', popular: true, features: ['13 πλήρως αυτοματοποιημένοι διακομιστές · 10 χρήστες', 'Προσαρμοσμένοι κανόνες · διαχείριση firewall', 'RBAC · αρχείο καταγραφής ελέγχου', 'Cloud AI — 3 θέσεις · AI Studio — 3 θέσεις', 'Άμυνα κατά κυβερνοεπιθέσεων — 2/μήνα · επιπλέον $500', 'Υποστήριξη προτεραιότητας 4ω · διατήρηση 90 ημερών'] },
      { name: 'Platform', price: '$3500', period: '/μήνα', tagline: '40 διακομιστές, όλα αυτοματοποιημένα', features: ['40 πλήρως αυτοματοποιημένοι διακομιστές · 25 χρήστες', 'SSO · on-prem (προαιρετικό) · συντονισμός AI', '99,9% SLA · white-label · συμμόρφωση', 'Cloud AI — 5 θέσεις · AI Studio — 5 θέσεις', 'Άμυνα κατά κυβερνοεπιθέσεων — 5/μήνα · επιπλέον $500', 'Αποκλειστική υποστήριξη · διατήρηση 90 ημερών'] },
      { name: 'Enterprise', price: 'Custom', period: 'υπολογίζεται ξεχωριστά', tagline: 'Απεριόριστο, πλήρως απομονωμένο (air-gapped)', features: ['Απεριόριστοι διακομιστές & χρήστες', 'Πλήρης απομόνωση on-prem · air-gapped', 'Προσαρμοσμένη εκπαίδευση ML · όλες οι λειτουργίες', 'Cloud AI & AI Studio — απεριόριστα', 'Άμυνα κατά κυβερνοεπιθέσεων — απεριόριστη', '99,99% SLA · διατήρηση 365 ημερών'] },
    ],
  },
};

export default function BillingTariffs() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-2 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>
        <p className="mb-8 inline-block rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-200">
          {d.includes}
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {d.tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                t.popular
                  ? 'border-cyan-400/60 bg-gradient-to-b from-cyan-900/30 to-gray-900/40 shadow-[0_8px_30px_rgba(34,211,238,0.16)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-3 py-0.5 text-xs font-bold text-gray-900">
                  ★
                </span>
              )}
              <p className="text-lg font-bold text-white">{t.name}</p>
              <p className="mb-1 text-xs text-white/50">{t.tagline}</p>
              <div className="mb-4 mt-2">
                <span className="gradient-text text-3xl font-bold">{t.price}</span>
                <span className="ml-1 text-xs text-white/55">{t.period}</span>
              </div>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-0.5 text-cyan-400">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
