'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Item = { name: string; desc?: string; price: string; unit?: string; hot?: boolean };
type Group = { title: string; note?: string; items: Item[] };
type Data = {
  h: string;
  lead: string;
  wallet: string;
  groups: Group[];
  grandfather: string;
};

// PAYG per-server component pricing (ТЗ TD_guardian-cloud-payg + migrations 035/036).
// Prices are constant across locales; only copy is translated. Owner-approved 2026-08-31.
const DATA: Record<string, Data> = {
  en: {
    h: 'Pay-as-you-go',
    lead: 'Build protection per server from components — pay only for what you switch on. Start with one server at $20; scale as you grow.',
    wallet: 'Prepaid wallet · monthly debit for the active configuration · one-off events charged on the spot · auto-topup so you never fall into a soft-limit',
    groups: [
      { title: 'Server service level — pick one', items: [
        { name: 'Monitoring', desc: 'Detect + diagnose + send you the fix commands. You apply them.', price: '$20', unit: '/server/mo' },
        { name: 'Sysadmin (full auto)', desc: 'Detect → diagnose → fixes it → verifies. Includes monitoring.', price: '$250', unit: '/server/mo', hot: true },
      ] },
      { title: 'On-demand fix (on top of Monitoring)', note: 'You are on $20 but ask us to fix a specific problem — one-off, AI prices by complexity.', items: [
        { name: 'Simple', price: '$50', unit: '/fix' },
        { name: 'Medium', price: '$150', unit: '/fix' },
        { name: 'Complex', price: '$300', unit: '/fix' },
      ] },
      { title: 'Cyber-defence (ITDR) — add to any level', items: [
        { name: 'Cyber-defence (ITDR)', desc: 'Real-time detection → shields up → block/contain → STOP, then proposes a solution. 1 repelled attack/mo included.', price: '$250', unit: '/server/mo' },
      ] },
      { title: 'Ready-made builds', items: [
        { name: 'Observation', desc: 'Monitoring', price: '$20', unit: '/server/mo' },
        { name: 'Full auto-server', desc: 'Sysadmin + Cyber-defence', price: '$500', unit: '/server/mo', hot: true },
      ] },
      { title: 'Incident tier — à la carte, your call', note: 'Kicks in after ITDR containment. You decide and pay per step.', items: [
        { name: 'Investigation', desc: 'Full repel + hunt every implant/backdoor/persistence', price: '$750', unit: '/incident' },
        { name: 'Investigation & response', desc: 'Investigation, attribution and coordinated response, ROE L1–L4', price: '+$1,500', unit: '/incident' },
        { name: 'Recovery — small', desc: '1–2 services, configs, rollback', price: '$300', unit: '' },
        { name: 'Recovery — medium', desc: 'Reinstall / data, several nodes', price: '$1,500', unit: '' },
        { name: 'Recovery — large', desc: 'Full system/cluster recovery', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Nodes are billed per node (auto OR monitoring, not both); cyber-defence per cluster.', items: [
        { name: 'Node — auto', price: '$200', unit: '/node/mo' },
        { name: 'Node — monitoring', price: '$20', unit: '/node/mo' },
        { name: 'Cluster cyber-defence', price: '$500', unit: '/cluster/mo' },
      ] },
      { title: 'Mandatory onboarding audit (via G-Tester, −30%)', items: [
        { name: 'System vulnerability test', price: '$525', unit: 'once' },
        { name: 'Server audit', price: '$105', unit: 'once' },
        { name: 'Full package', price: '$1,715', unit: 'once' },
      ] },
    ],
    grandfather: 'Every server includes ITDR · SIEM · RAG. Enterprise (unlimited, on-prem, air-gapped) is calculated individually. Existing fixed-tier customers keep their price through 30.10.2026.',
  },
  ru: {
    h: 'Оплата по факту (PAYG)',
    lead: 'Собери защиту на каждый сервер из компонентов — плати только за то, что включил. Старт с одного сервера за $20; растёшь — растёт чек.',
    wallet: 'Предоплатный кошелёк · помесячное списание за активную конфигурацию · разовые события списываются по факту · авто-долив, чтобы не падать в soft-лимит',
    groups: [
      { title: 'Уровень обслуживания сервера — выбрать один', items: [
        { name: 'Мониторинг', desc: 'Детект + диагноз + шлём тебе команды на фикс. Чинишь сам.', price: '$20', unit: '/сервер/мес' },
        { name: 'Sysadmin (полный автомат)', desc: 'Детект → диагноз → сам устраняет → верификация. Включает мониторинг.', price: '$250', unit: '/сервер/мес', hot: true },
      ] },
      { title: 'On-demand фикс (поверх Мониторинга)', note: 'Ты на $20, но конкретную проблему просишь устранить нас — разово, AI оценивает по сложности.', items: [
        { name: 'Простая', price: '$50', unit: '/фикс' },
        { name: 'Средняя', price: '$150', unit: '/фикс' },
        { name: 'Сложная', price: '$300', unit: '/фикс' },
      ] },
      { title: 'Киберзащита (ITDR) — опция к любому уровню', items: [
        { name: 'Киберзащита (ITDR)', desc: 'Реалтайм-детект → выставление щитов → блокировка/сдерживание → СТОП, далее предлагает решение. 1 отражённая атака/мес включена.', price: '$250', unit: '/сервер/мес' },
      ] },
      { title: 'Готовые сборки', items: [
        { name: 'Наблюдение', desc: 'Мониторинг', price: '$20', unit: '/сервер/мес' },
        { name: 'Полный авто-сервер', desc: 'Sysadmin + Киберзащита', price: '$500', unit: '/сервер/мес', hot: true },
      ] },
      { title: 'Incident-тир — à la carte, по твоему решению', note: 'Наступает после сдерживания ITDR. Ты решаешь и платишь за шаг.', items: [
        { name: 'Расследование', desc: 'Полное отражение + поиск всех внедрений/бэкдоров/персистенса', price: '$750', unit: '/инцидент' },
        { name: 'Расследование и противодействие', desc: 'Расследование, атрибуция и координированное противодействие, ROE L1–L4', price: '+$1,500', unit: '/инцидент' },
        { name: 'Восстановление — малое', desc: '1–2 сервиса, конфиги, откат', price: '$300', unit: '' },
        { name: 'Восстановление — среднее', desc: 'Переустановка / данные, неск. узлов', price: '$1,500', unit: '' },
        { name: 'Восстановление — большое', desc: 'Полное восстановление системы/кластера', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Ноды — по нодам (авто ИЛИ мониторинг, не суммируются); киберзащита — на кластер.', items: [
        { name: 'Нода — авто', price: '$200', unit: '/нода/мес' },
        { name: 'Нода — мониторинг', price: '$20', unit: '/нода/мес' },
        { name: 'Киберзащита кластера', price: '$500', unit: '/кластер/мес' },
      ] },
      { title: 'Обязательный аудит при онбординге (через G-Tester, −30%)', items: [
        { name: 'Тест уязвимости системы', price: '$525', unit: 'разово' },
        { name: 'Аудит сервера', price: '$105', unit: 'разово' },
        { name: 'Полный пакет', price: '$1,715', unit: 'разово' },
      ] },
    ],
    grandfather: 'На каждом сервере включены ITDR · SIEM · RAG. Enterprise (безлимит, on-prem, air-gapped) считается индивидуально. Клиенты на фикс-тирах сохраняют свою цену до 30.10.2026.',
  },
  es: {
    h: 'Pago por uso (PAYG)',
    lead: 'Arma la protección por servidor a partir de componentes: paga solo por lo que activas. Empieza con un servidor por $20 y escala a medida que creces.',
    wallet: 'Monedero prepago · cobro mensual por la configuración activa · los eventos puntuales se cobran al instante · recarga automática para no caer en un límite blando',
    groups: [
      { title: 'Nivel de servicio del servidor — elige uno', items: [
        { name: 'Monitoreo', desc: 'Detecta + diagnostica + te envía los comandos de corrección. Tú los aplicas.', price: '$20', unit: '/servidor/mes' },
        { name: 'Sysadmin (automático total)', desc: 'Detecta → diagnostica → lo corrige → verifica. Incluye monitoreo.', price: '$250', unit: '/servidor/mes', hot: true },
      ] },
      { title: 'Corrección bajo demanda (además del Monitoreo)', note: 'Estás en $20 pero nos pides resolver un problema concreto — puntual, la IA lo tarifica por complejidad.', items: [
        { name: 'Simple', price: '$50', unit: '/corrección' },
        { name: 'Media', price: '$150', unit: '/corrección' },
        { name: 'Compleja', price: '$300', unit: '/corrección' },
      ] },
      { title: 'Ciberdefensa (ITDR) — se añade a cualquier nivel', items: [
        { name: 'Ciberdefensa (ITDR)', desc: 'Detección en tiempo real → escudos → bloqueo/contención → STOP, luego propone una solución. 1 ataque repelido/mes incluido.', price: '$250', unit: '/servidor/mes' },
      ] },
      { title: 'Configuraciones listas', items: [
        { name: 'Observación', desc: 'Monitoreo', price: '$20', unit: '/servidor/mes' },
        { name: 'Servidor totalmente automático', desc: 'Sysadmin + Ciberdefensa', price: '$500', unit: '/servidor/mes', hot: true },
      ] },
      { title: 'Nivel de incidentes — à la carte, tú decides', note: 'Entra en juego tras la contención del ITDR. Tú decides y pagas por paso.', items: [
        { name: 'Investigación', desc: 'Repulsión total + búsqueda de todo implante/backdoor/persistencia', price: '$750', unit: '/incidente' },
        { name: 'Investigación y respuesta', desc: 'Investigación, atribución y respuesta coordinada, ROE L1–L4', price: '+$1,500', unit: '/incidente' },
        { name: 'Recuperación — pequeña', desc: '1–2 servicios, configuraciones, rollback', price: '$300', unit: '' },
        { name: 'Recuperación — media', desc: 'Reinstalación / datos, varios nodos', price: '$1,500', unit: '' },
        { name: 'Recuperación — grande', desc: 'Recuperación completa del sistema/clúster', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Los nodos se facturan por nodo (auto O monitoreo, no ambos); la ciberdefensa por clúster.', items: [
        { name: 'Nodo — auto', price: '$200', unit: '/nodo/mes' },
        { name: 'Nodo — monitoreo', price: '$20', unit: '/nodo/mes' },
        { name: 'Ciberdefensa del clúster', price: '$500', unit: '/clúster/mes' },
      ] },
      { title: 'Auditoría de onboarding obligatoria (vía G-Tester, −30%)', items: [
        { name: 'Test de vulnerabilidad del sistema', price: '$525', unit: 'única vez' },
        { name: 'Auditoría de servidor', price: '$105', unit: 'única vez' },
        { name: 'Paquete completo', price: '$1,715', unit: 'única vez' },
      ] },
    ],
    grandfather: 'Cada servidor incluye ITDR · SIEM · RAG. Enterprise (ilimitado, on-prem, air-gapped) se calcula individualmente. Los clientes con tarifas fijas mantienen su precio hasta el 30.10.2026.',
  },
  uk: {
    h: 'Оплата за фактом (PAYG)',
    lead: 'Збери захист на кожен сервер із компонентів — плати лише за те, що ввімкнув. Старт з одного сервера за $20; ростеш — росте чек.',
    wallet: 'Передплатний гаманець · щомісячне списання за активну конфігурацію · разові події списуються за фактом · авто-поповнення, щоб не падати в soft-ліміт',
    groups: [
      { title: 'Рівень обслуговування сервера — обрати один', items: [
        { name: 'Моніторинг', desc: 'Детект + діагноз + надсилаємо тобі команди на виправлення. Лагодиш сам.', price: '$20', unit: '/сервер/міс' },
        { name: 'Sysadmin (повний автомат)', desc: 'Детект → діагноз → сам усуває → верифікація. Включає моніторинг.', price: '$250', unit: '/сервер/міс', hot: true },
      ] },
      { title: 'On-demand фікс (понад Моніторинг)', note: 'Ти на $20, але конкретну проблему просиш усунути нас — разово, AI оцінює за складністю.', items: [
        { name: 'Проста', price: '$50', unit: '/фікс' },
        { name: 'Середня', price: '$150', unit: '/фікс' },
        { name: 'Складна', price: '$300', unit: '/фікс' },
      ] },
      { title: 'Кіберзахист (ITDR) — опція до будь-якого рівня', items: [
        { name: 'Кіберзахист (ITDR)', desc: 'Реалтайм-детект → виставлення щитів → блокування/стримування → СТОП, далі пропонує рішення. 1 відбита атака/міс включена.', price: '$250', unit: '/сервер/міс' },
      ] },
      { title: 'Готові збірки', items: [
        { name: 'Спостереження', desc: 'Моніторинг', price: '$20', unit: '/сервер/міс' },
        { name: 'Повний авто-сервер', desc: 'Sysadmin + Кіберзахист', price: '$500', unit: '/сервер/міс', hot: true },
      ] },
      { title: 'Incident-тір — à la carte, за твоїм рішенням', note: 'Настає після стримування ITDR. Ти вирішуєш і платиш за крок.', items: [
        { name: 'Розслідування', desc: 'Повне відбиття + пошук усіх упроваджень/бекдорів/персистенції', price: '$750', unit: '/інцидент' },
        { name: 'Розслідування та протидія', desc: 'Розслідування, атрибуція та координована протидія, ROE L1–L4', price: '+$1,500', unit: '/інцидент' },
        { name: 'Відновлення — мале', desc: '1–2 сервіси, конфіги, відкат', price: '$300', unit: '' },
        { name: 'Відновлення — середнє', desc: 'Перевстановлення / дані, кілька вузлів', price: '$1,500', unit: '' },
        { name: 'Відновлення — велике', desc: 'Повне відновлення системи/кластера', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Ноди — за нодами (авто АБО моніторинг, не сумуються); кіберзахист — на кластер.', items: [
        { name: 'Нода — авто', price: '$200', unit: '/нода/міс' },
        { name: 'Нода — моніторинг', price: '$20', unit: '/нода/міс' },
        { name: 'Кіберзахист кластера', price: '$500', unit: '/кластер/міс' },
      ] },
      { title: 'Обовʼязковий аудит при онбордингу (через G-Tester, −30%)', items: [
        { name: 'Тест уразливості системи', price: '$525', unit: 'разово' },
        { name: 'Аудит сервера', price: '$105', unit: 'разово' },
        { name: 'Повний пакет', price: '$1,715', unit: 'разово' },
      ] },
    ],
    grandfather: 'На кожному сервері включені ITDR · SIEM · RAG. Enterprise (безліміт, on-prem, air-gapped) рахується індивідуально. Клієнти на фікс-тарифах зберігають свою ціну до 30.10.2026.',
  },
  sr: {
    h: 'Plaćanje po korišćenju (PAYG)',
    lead: 'Sastavi zaštitu po serveru od komponenti — plaćaš samo ono što uključiš. Počni sa jednim serverom za $20 i skaliraj kako rasteš.',
    wallet: 'Pretplaćeni novčanik · mesečno zaduženje za aktivnu konfiguraciju · jednokratni događaji naplaćuju se odmah · auto-dopuna da nikad ne padneš u meki limit',
    groups: [
      { title: 'Nivo usluge servera — izaberi jedan', items: [
        { name: 'Nadzor', desc: 'Detekcija + dijagnoza + šaljemo ti komande za popravku. Ti ih primenjuješ.', price: '$20', unit: '/server/mes' },
        { name: 'Sysadmin (potpuno automatski)', desc: 'Detekcija → dijagnoza → sam popravlja → verifikacija. Uključuje nadzor.', price: '$250', unit: '/server/mes', hot: true },
      ] },
      { title: 'Popravka na zahtev (uz Nadzor)', note: 'Na $20 si, ali tražiš da mi rešimo konkretan problem — jednokratno, AI određuje cenu po složenosti.', items: [
        { name: 'Jednostavna', price: '$50', unit: '/popravka' },
        { name: 'Srednja', price: '$150', unit: '/popravka' },
        { name: 'Složena', price: '$300', unit: '/popravka' },
      ] },
      { title: 'Sajber-odbrana (ITDR) — dodaj na bilo koji nivo', items: [
        { name: 'Sajber-odbrana (ITDR)', desc: 'Detekcija u realnom vremenu → štitovi → blokada/obuzdavanje → STOP, zatim predlaže rešenje. 1 odbijen napad/mes uključen.', price: '$250', unit: '/server/mes' },
      ] },
      { title: 'Gotove konfiguracije', items: [
        { name: 'Osmatranje', desc: 'Nadzor', price: '$20', unit: '/server/mes' },
        { name: 'Potpuno automatski server', desc: 'Sysadmin + Sajber-odbrana', price: '$500', unit: '/server/mes', hot: true },
      ] },
      { title: 'Nivo incidenata — à la carte, tvoja odluka', note: 'Nastupa nakon obuzdavanja ITDR-a. Ti odlučuješ i plaćaš po koraku.', items: [
        { name: 'Istraga', desc: 'Potpuno odbijanje + lov na svaki implant/backdoor/perzistenciju', price: '$750', unit: '/incident' },
        { name: 'Istraga i odgovor', desc: 'Istraga, atribucija i koordinisan odgovor, ROE L1–L4', price: '+$1,500', unit: '/incident' },
        { name: 'Oporavak — mali', desc: '1–2 servisa, konfiguracije, rollback', price: '$300', unit: '' },
        { name: 'Oporavak — srednji', desc: 'Reinstalacija / podaci, više čvorova', price: '$1,500', unit: '' },
        { name: 'Oporavak — veliki', desc: 'Potpuni oporavak sistema/klastera', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Čvorovi se naplaćuju po čvoru (auto ILI nadzor, ne oba); sajber-odbrana po klasteru.', items: [
        { name: 'Čvor — auto', price: '$200', unit: '/čvor/mes' },
        { name: 'Čvor — nadzor', price: '$20', unit: '/čvor/mes' },
        { name: 'Sajber-odbrana klastera', price: '$500', unit: '/klaster/mes' },
      ] },
      { title: 'Obavezna onboarding revizija (preko G-Tester, −30%)', items: [
        { name: 'Test ranjivosti sistema', price: '$525', unit: 'jednokratno' },
        { name: 'Revizija servera', price: '$105', unit: 'jednokratno' },
        { name: 'Potpuni paket', price: '$1,715', unit: 'jednokratno' },
      ] },
    ],
    grandfather: 'Svaki server uključuje ITDR · SIEM · RAG. Enterprise (neograničeno, on-prem, air-gapped) obračunava se individualno. Klijenti na fiksnim tarifama zadržavaju svoju cenu do 30.10.2026.',
  },
  de: {
    h: 'Pay-as-you-go',
    lead: 'Stelle den Schutz pro Server aus Komponenten zusammen — zahle nur für das, was du aktivierst. Starte mit einem Server für $20 und skaliere mit dem Wachstum.',
    wallet: 'Prepaid-Wallet · monatliche Abbuchung für die aktive Konfiguration · Einmalereignisse werden sofort berechnet · Auto-Aufladung, damit du nie in ein Soft-Limit fällst',
    groups: [
      { title: 'Server-Serviceniveau — eines wählen', items: [
        { name: 'Monitoring', desc: 'Erkennen + diagnostizieren + Fix-Befehle senden. Du wendest sie an.', price: '$20', unit: '/Server/Monat' },
        { name: 'Sysadmin (vollautomatisch)', desc: 'Erkennen → diagnostizieren → behebt es → verifiziert. Inklusive Monitoring.', price: '$250', unit: '/Server/Monat', hot: true },
      ] },
      { title: 'Fix auf Abruf (zusätzlich zum Monitoring)', note: 'Du bist bei $20, bittest uns aber, ein konkretes Problem zu lösen — einmalig, die KI bepreist nach Komplexität.', items: [
        { name: 'Einfach', price: '$50', unit: '/Fix' },
        { name: 'Mittel', price: '$150', unit: '/Fix' },
        { name: 'Komplex', price: '$300', unit: '/Fix' },
      ] },
      { title: 'Cyber-Abwehr (ITDR) — zu jedem Niveau hinzufügbar', items: [
        { name: 'Cyber-Abwehr (ITDR)', desc: 'Echtzeit-Erkennung → Schilde → Blockieren/Eindämmen → STOP, danach Lösungsvorschlag. 1 abgewehrter Angriff/Monat inklusive.', price: '$250', unit: '/Server/Monat' },
      ] },
      { title: 'Fertige Konfigurationen', items: [
        { name: 'Beobachtung', desc: 'Monitoring', price: '$20', unit: '/Server/Monat' },
        { name: 'Voll-Auto-Server', desc: 'Sysadmin + Cyber-Abwehr', price: '$500', unit: '/Server/Monat', hot: true },
      ] },
      { title: 'Incident-Stufe — à la carte, deine Entscheidung', note: 'Greift nach der ITDR-Eindämmung. Du entscheidest und zahlst pro Schritt.', items: [
        { name: 'Untersuchung', desc: 'Vollständige Abwehr + Suche nach jedem Implantat/Backdoor/Persistenz', price: '$750', unit: '/Vorfall' },
        { name: 'Untersuchung & Reaktion', desc: 'Untersuchung, Attribution und koordinierte Reaktion, ROE L1–L4', price: '+$1,500', unit: '/Vorfall' },
        { name: 'Wiederherstellung — klein', desc: '1–2 Dienste, Konfigurationen, Rollback', price: '$300', unit: '' },
        { name: 'Wiederherstellung — mittel', desc: 'Neuinstallation / Daten, mehrere Knoten', price: '$1,500', unit: '' },
        { name: 'Wiederherstellung — groß', desc: 'Vollständige System-/Cluster-Wiederherstellung', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Knoten werden pro Knoten berechnet (Auto ODER Monitoring, nicht beides); Cyber-Abwehr pro Cluster.', items: [
        { name: 'Knoten — Auto', price: '$200', unit: '/Knoten/Monat' },
        { name: 'Knoten — Monitoring', price: '$20', unit: '/Knoten/Monat' },
        { name: 'Cluster-Cyber-Abwehr', price: '$500', unit: '/Cluster/Monat' },
      ] },
      { title: 'Verpflichtendes Onboarding-Audit (via G-Tester, −30%)', items: [
        { name: 'System-Schwachstellentest', price: '$525', unit: 'einmalig' },
        { name: 'Server-Audit', price: '$105', unit: 'einmalig' },
        { name: 'Komplettpaket', price: '$1,715', unit: 'einmalig' },
      ] },
    ],
    grandfather: 'Jeder Server enthält ITDR · SIEM · RAG. Enterprise (unbegrenzt, On-Prem, air-gapped) wird individuell berechnet. Bestandskunden mit Festtarifen behalten ihren Preis bis zum 30.10.2026.',
  },
  fr: {
    h: 'Paiement à l’usage (PAYG)',
    lead: 'Composez la protection par serveur à partir de composants — ne payez que ce que vous activez. Commencez avec un serveur à $20 et évoluez à mesure que vous grandissez.',
    wallet: 'Portefeuille prépayé · débit mensuel de la configuration active · les événements ponctuels sont facturés immédiatement · recharge automatique pour ne jamais tomber sous une limite souple',
    groups: [
      { title: 'Niveau de service du serveur — en choisir un', items: [
        { name: 'Surveillance', desc: 'Détecte + diagnostique + vous envoie les commandes de correction. Vous les appliquez.', price: '$20', unit: '/serveur/mois' },
        { name: 'Sysadmin (tout automatique)', desc: 'Détecte → diagnostique → corrige → vérifie. Surveillance incluse.', price: '$250', unit: '/serveur/mois', hot: true },
      ] },
      { title: 'Correction à la demande (en plus de la Surveillance)', note: 'Vous êtes à $20 mais nous demandez de corriger un problème précis — ponctuel, l’IA tarife selon la complexité.', items: [
        { name: 'Simple', price: '$50', unit: '/correction' },
        { name: 'Moyenne', price: '$150', unit: '/correction' },
        { name: 'Complexe', price: '$300', unit: '/correction' },
      ] },
      { title: 'Cyberdéfense (ITDR) — à ajouter à tout niveau', items: [
        { name: 'Cyberdéfense (ITDR)', desc: 'Détection en temps réel → boucliers → blocage/confinement → STOP, puis propose une solution. 1 attaque repoussée/mois incluse.', price: '$250', unit: '/serveur/mois' },
      ] },
      { title: 'Configurations prêtes', items: [
        { name: 'Observation', desc: 'Surveillance', price: '$20', unit: '/serveur/mois' },
        { name: 'Serveur tout automatique', desc: 'Sysadmin + Cyberdéfense', price: '$500', unit: '/serveur/mois', hot: true },
      ] },
      { title: 'Niveau incident — à la carte, votre décision', note: 'Intervient après le confinement ITDR. Vous décidez et payez par étape.', items: [
        { name: 'Investigation', desc: 'Repoussée totale + recherche de tout implant/backdoor/persistance', price: '$750', unit: '/incident' },
        { name: 'Enquête et réponse', desc: 'Enquête, attribution et réponse coordonnée, ROE L1–L4', price: '+$1,500', unit: '/incident' },
        { name: 'Récupération — petite', desc: '1–2 services, configurations, rollback', price: '$300', unit: '' },
        { name: 'Récupération — moyenne', desc: 'Réinstallation / données, plusieurs nœuds', price: '$1,500', unit: '' },
        { name: 'Récupération — grande', desc: 'Récupération complète du système/cluster', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Les nœuds sont facturés par nœud (auto OU surveillance, pas les deux) ; la cyberdéfense par cluster.', items: [
        { name: 'Nœud — auto', price: '$200', unit: '/nœud/mois' },
        { name: 'Nœud — surveillance', price: '$20', unit: '/nœud/mois' },
        { name: 'Cyberdéfense du cluster', price: '$500', unit: '/cluster/mois' },
      ] },
      { title: 'Audit d’intégration obligatoire (via G-Tester, −30%)', items: [
        { name: 'Test de vulnérabilité du système', price: '$525', unit: 'une fois' },
        { name: 'Audit du serveur', price: '$105', unit: 'une fois' },
        { name: 'Pack complet', price: '$1,715', unit: 'une fois' },
      ] },
    ],
    grandfather: 'Chaque serveur inclut ITDR · SIEM · RAG. Enterprise (illimité, on-prem, air-gapped) est calculé individuellement. Les clients aux forfaits fixes conservent leur prix jusqu’au 30.10.2026.',
  },
  it: {
    h: 'Paga in base al consumo (PAYG)',
    lead: 'Componi la protezione per server a partire dai componenti — paghi solo ciò che attivi. Inizia con un server a $20 e cresci man mano.',
    wallet: 'Portafoglio prepagato · addebito mensile per la configurazione attiva · gli eventi una tantum sono addebitati subito · ricarica automatica per non cadere mai in un limite morbido',
    groups: [
      { title: 'Livello di servizio del server — scegline uno', items: [
        { name: 'Monitoraggio', desc: 'Rileva + diagnostica + ti invia i comandi di correzione. Li applichi tu.', price: '$20', unit: '/server/mese' },
        { name: 'Sysadmin (completamente automatico)', desc: 'Rileva → diagnostica → corregge → verifica. Include il monitoraggio.', price: '$250', unit: '/server/mese', hot: true },
      ] },
      { title: 'Correzione on-demand (oltre al Monitoraggio)', note: 'Sei a $20 ma ci chiedi di risolvere un problema specifico — una tantum, l’IA lo tariffa per complessità.', items: [
        { name: 'Semplice', price: '$50', unit: '/correzione' },
        { name: 'Media', price: '$150', unit: '/correzione' },
        { name: 'Complessa', price: '$300', unit: '/correzione' },
      ] },
      { title: 'Cyber-difesa (ITDR) — da aggiungere a qualsiasi livello', items: [
        { name: 'Cyber-difesa (ITDR)', desc: 'Rilevamento in tempo reale → scudi → blocco/contenimento → STOP, poi propone una soluzione. 1 attacco respinto/mese incluso.', price: '$250', unit: '/server/mese' },
      ] },
      { title: 'Configurazioni pronte', items: [
        { name: 'Osservazione', desc: 'Monitoraggio', price: '$20', unit: '/server/mese' },
        { name: 'Server completamente automatico', desc: 'Sysadmin + Cyber-difesa', price: '$500', unit: '/server/mese', hot: true },
      ] },
      { title: 'Livello incidenti — à la carte, decidi tu', note: 'Entra in gioco dopo il contenimento ITDR. Decidi e paghi per passo.', items: [
        { name: 'Indagine', desc: 'Respingimento totale + caccia a ogni impianto/backdoor/persistenza', price: '$750', unit: '/incidente' },
        { name: 'Indagine e risposta', desc: 'Indagine, attribuzione e risposta coordinata, ROE L1–L4', price: '+$1,500', unit: '/incidente' },
        { name: 'Ripristino — piccolo', desc: '1–2 servizi, configurazioni, rollback', price: '$300', unit: '' },
        { name: 'Ripristino — medio', desc: 'Reinstallazione / dati, più nodi', price: '$1,500', unit: '' },
        { name: 'Ripristino — grande', desc: 'Ripristino completo del sistema/cluster', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'I nodi sono fatturati per nodo (auto O monitoraggio, non entrambi); la cyber-difesa per cluster.', items: [
        { name: 'Nodo — auto', price: '$200', unit: '/nodo/mese' },
        { name: 'Nodo — monitoraggio', price: '$20', unit: '/nodo/mese' },
        { name: 'Cyber-difesa del cluster', price: '$500', unit: '/cluster/mese' },
      ] },
      { title: 'Audit di onboarding obbligatorio (via G-Tester, −30%)', items: [
        { name: 'Test di vulnerabilità del sistema', price: '$525', unit: 'una tantum' },
        { name: 'Audit del server', price: '$105', unit: 'una tantum' },
        { name: 'Pacchetto completo', price: '$1,715', unit: 'una tantum' },
      ] },
    ],
    grandfather: 'Ogni server include ITDR · SIEM · RAG. Enterprise (illimitato, on-prem, air-gapped) è calcolato individualmente. I clienti con tariffe fisse mantengono il loro prezzo fino al 30.10.2026.',
  },
  pt: {
    h: 'Pague conforme o uso (PAYG)',
    lead: 'Monte a proteção por servidor a partir de componentes — pague apenas pelo que ativar. Comece com um servidor por $20 e escale conforme cresce.',
    wallet: 'Carteira pré-paga · débito mensal da configuração ativa · eventos avulsos são cobrados na hora · recarga automática para nunca cair em um limite flexível',
    groups: [
      { title: 'Nível de serviço do servidor — escolha um', items: [
        { name: 'Monitoramento', desc: 'Detecta + diagnostica + envia os comandos de correção. Você os aplica.', price: '$20', unit: '/servidor/mês' },
        { name: 'Sysadmin (totalmente automático)', desc: 'Detecta → diagnostica → corrige → verifica. Inclui monitoramento.', price: '$250', unit: '/servidor/mês', hot: true },
      ] },
      { title: 'Correção sob demanda (além do Monitoramento)', note: 'Você está no $20 mas pede que a gente resolva um problema específico — avulso, a IA precifica por complexidade.', items: [
        { name: 'Simples', price: '$50', unit: '/correção' },
        { name: 'Média', price: '$150', unit: '/correção' },
        { name: 'Complexa', price: '$300', unit: '/correção' },
      ] },
      { title: 'Ciberdefesa (ITDR) — adicione a qualquer nível', items: [
        { name: 'Ciberdefesa (ITDR)', desc: 'Detecção em tempo real → escudos → bloqueio/contenção → STOP, depois propõe uma solução. 1 ataque repelido/mês incluído.', price: '$250', unit: '/servidor/mês' },
      ] },
      { title: 'Configurações prontas', items: [
        { name: 'Observação', desc: 'Monitoramento', price: '$20', unit: '/servidor/mês' },
        { name: 'Servidor totalmente automático', desc: 'Sysadmin + Ciberdefesa', price: '$500', unit: '/servidor/mês', hot: true },
      ] },
      { title: 'Nível de incidentes — à la carte, você decide', note: 'Entra em ação após a contenção do ITDR. Você decide e paga por etapa.', items: [
        { name: 'Investigação', desc: 'Repulsão total + caça a todo implante/backdoor/persistência', price: '$750', unit: '/incidente' },
        { name: 'Investigação e resposta', desc: 'Investigação, atribuição e resposta coordenada, ROE L1–L4', price: '+$1,500', unit: '/incidente' },
        { name: 'Recuperação — pequena', desc: '1–2 serviços, configurações, rollback', price: '$300', unit: '' },
        { name: 'Recuperação — média', desc: 'Reinstalação / dados, vários nós', price: '$1,500', unit: '' },
        { name: 'Recuperação — grande', desc: 'Recuperação completa do sistema/cluster', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Os nós são cobrados por nó (auto OU monitoramento, não ambos); a ciberdefesa por cluster.', items: [
        { name: 'Nó — auto', price: '$200', unit: '/nó/mês' },
        { name: 'Nó — monitoramento', price: '$20', unit: '/nó/mês' },
        { name: 'Ciberdefesa do cluster', price: '$500', unit: '/cluster/mês' },
      ] },
      { title: 'Auditoria de onboarding obrigatória (via G-Tester, −30%)', items: [
        { name: 'Teste de vulnerabilidade do sistema', price: '$525', unit: 'única vez' },
        { name: 'Auditoria de servidor', price: '$105', unit: 'única vez' },
        { name: 'Pacote completo', price: '$1,715', unit: 'única vez' },
      ] },
    ],
    grandfather: 'Cada servidor inclui ITDR · SIEM · RAG. Enterprise (ilimitado, on-prem, air-gapped) é calculado individualmente. Clientes com tarifas fixas mantêm seu preço até 30.10.2026.',
  },
  tr: {
    h: 'Kullandıkça öde (PAYG)',
    lead: 'Korumayı sunucu başına bileşenlerden oluştur — yalnızca açtığın kadarını öde. Tek sunucuyla $20’dan başla, büyüdükçe ölçekle.',
    wallet: 'Ön ödemeli cüzdan · aktif yapılandırma için aylık tahsilat · tek seferlik olaylar anında ücretlendirilir · yumuşak limite düşmemek için otomatik yükleme',
    groups: [
      { title: 'Sunucu hizmet seviyesi — birini seç', items: [
        { name: 'İzleme', desc: 'Tespit + teşhis + düzeltme komutlarını sana gönderir. Sen uygularsın.', price: '$20', unit: '/sunucu/ay' },
        { name: 'Sysadmin (tam otomatik)', desc: 'Tespit → teşhis → düzeltir → doğrular. İzlemeyi içerir.', price: '$250', unit: '/sunucu/ay', hot: true },
      ] },
      { title: 'Talep üzerine düzeltme (İzlemeye ek)', note: '$20’dasın ama belirli bir sorunu bizim çözmemizi istiyorsun — tek seferlik, YZ karmaşıklığa göre fiyatlandırır.', items: [
        { name: 'Basit', price: '$50', unit: '/düzeltme' },
        { name: 'Orta', price: '$150', unit: '/düzeltme' },
        { name: 'Karmaşık', price: '$300', unit: '/düzeltme' },
      ] },
      { title: 'Siber savunma (ITDR) — her seviyeye eklenir', items: [
        { name: 'Siber savunma (ITDR)', desc: 'Gerçek zamanlı tespit → kalkanlar → engelleme/sınırlama → DUR, ardından çözüm önerir. Ayda 1 püskürtülen saldırı dahil.', price: '$250', unit: '/sunucu/ay' },
      ] },
      { title: 'Hazır yapılandırmalar', items: [
        { name: 'Gözlem', desc: 'İzleme', price: '$20', unit: '/sunucu/ay' },
        { name: 'Tam otomatik sunucu', desc: 'Sysadmin + Siber savunma', price: '$500', unit: '/sunucu/ay', hot: true },
      ] },
      { title: 'Olay katmanı — à la carte, senin kararın', note: 'ITDR sınırlamasından sonra devreye girer. Adım başına sen karar verir, sen ödersin.', items: [
        { name: 'Soruşturma', desc: 'Tam püskürtme + her implant/arka kapı/kalıcılık avı', price: '$750', unit: '/olay' },
        { name: 'Soruşturma ve müdahale', desc: 'Soruşturma, atıf ve koordineli müdahale, ROE L1–L4', price: '+$1,500', unit: '/olay' },
        { name: 'Kurtarma — küçük', desc: '1–2 servis, yapılandırma, geri alma', price: '$300', unit: '' },
        { name: 'Kurtarma — orta', desc: 'Yeniden kurulum / veri, birkaç düğüm', price: '$1,500', unit: '' },
        { name: 'Kurtarma — büyük', desc: 'Tam sistem/küme kurtarma', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Düğümler düğüm başına faturalanır (oto VEYA izleme, ikisi birden değil); siber savunma küme başına.', items: [
        { name: 'Düğüm — oto', price: '$200', unit: '/düğüm/ay' },
        { name: 'Düğüm — izleme', price: '$20', unit: '/düğüm/ay' },
        { name: 'Küme siber savunması', price: '$500', unit: '/küme/ay' },
      ] },
      { title: 'Zorunlu başlangıç denetimi (G-Tester ile, −30%)', items: [
        { name: 'Sistem güvenlik açığı testi', price: '$525', unit: 'tek seferlik' },
        { name: 'Sunucu denetimi', price: '$105', unit: 'tek seferlik' },
        { name: 'Tam paket', price: '$1,715', unit: 'tek seferlik' },
      ] },
    ],
    grandfather: 'Her sunucu ITDR · SIEM · RAG içerir. Enterprise (sınırsız, şirket içi, air-gapped) ayrı hesaplanır. Sabit tarifedeki mevcut müşteriler fiyatlarını 30.10.2026’ya kadar korur.',
  },
  zh: {
    h: '按用量付费',
    lead: '按服务器以组件方式搭建防护——只为你开启的部分付费。单台服务器 $20 起步，随成长而扩展。',
    wallet: '预付钱包 · 按当前生效配置每月扣费 · 一次性事件即时计费 · 自动充值，避免跌入软限额',
    groups: [
      { title: '服务器服务级别——选择其一', items: [
        { name: '监控', desc: '检测 + 诊断 + 将修复命令发给你，由你执行。', price: '$20', unit: '/服务器/月' },
        { name: 'Sysadmin（全自动）', desc: '检测 → 诊断 → 自动修复 → 验证。含监控。', price: '$250', unit: '/服务器/月', hot: true },
      ] },
      { title: '按需修复（在监控之上）', note: '你在 $20 档，但请我们修复某个具体问题——一次性，由 AI 按复杂度定价。', items: [
        { name: '简单', price: '$50', unit: '/次' },
        { name: '中等', price: '$150', unit: '/次' },
        { name: '复杂', price: '$300', unit: '/次' },
      ] },
      { title: '网络防御（ITDR）——可加到任意级别', items: [
        { name: '网络防御（ITDR）', desc: '实时检测 → 布防 → 阻断/围堵 → 停止，随后提出解决方案。每月含 1 次已击退攻击。', price: '$250', unit: '/服务器/月' },
      ] },
      { title: '现成组合', items: [
        { name: '观察', desc: '监控', price: '$20', unit: '/服务器/月' },
        { name: '全自动服务器', desc: 'Sysadmin + 网络防御', price: '$500', unit: '/服务器/月', hot: true },
      ] },
      { title: '事件层级——按需选择，由你决定', note: '在 ITDR 围堵之后启动。你逐步决定并付费。', items: [
        { name: '调查', desc: '完全击退 + 排查所有植入/后门/驻留', price: '$750', unit: '/事件' },
        { name: '调查与响应', desc: '调查、溯源与协同响应，ROE L1–L4', price: '+$1,500', unit: '/事件' },
        { name: '恢复——小', desc: '1–2 个服务、配置、回滚', price: '$300', unit: '' },
        { name: '恢复——中', desc: '重装 / 数据，多个节点', price: '$1,500', unit: '' },
        { name: '恢复——大', desc: '整个系统/集群完全恢复', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: '节点按节点计费（自动 或 监控，不叠加）；网络防御按集群计费。', items: [
        { name: '节点——自动', price: '$200', unit: '/节点/月' },
        { name: '节点——监控', price: '$20', unit: '/节点/月' },
        { name: '集群网络防御', price: '$500', unit: '/集群/月' },
      ] },
      { title: '强制入驻审计（通过 G-Tester，−30%）', items: [
        { name: '系统漏洞测试', price: '$525', unit: '一次性' },
        { name: '服务器审计', price: '$105', unit: '一次性' },
        { name: '完整套餐', price: '$1,715', unit: '一次性' },
      ] },
    ],
    grandfather: '每台服务器均含 ITDR · SIEM · RAG。Enterprise（无上限、本地部署、隔离）单独计价。固定套餐的现有客户在 2026.10.30 前保留其价格。',
  },
  ja: {
    h: '従量課金（PAYG）',
    lead: 'サーバーごとにコンポーネントから防御を組み立て——オンにした分だけ支払います。1台$20から始め、成長に合わせて拡張。',
    wallet: 'プリペイドウォレット · 有効な構成に対して毎月課金 · 単発イベントは即時課金 · ソフト上限に落ちないための自動チャージ',
    groups: [
      { title: 'サーバーのサービスレベル——1つ選択', items: [
        { name: '監視', desc: '検知 + 診断 + 修正コマンドを送付。適用はお客様が行います。', price: '$20', unit: '/サーバー/月' },
        { name: 'Sysadmin（フルオート）', desc: '検知 → 診断 → 自動修正 → 検証。監視を含みます。', price: '$250', unit: '/サーバー/月', hot: true },
      ] },
      { title: 'オンデマンド修正（監視に追加）', note: '$20プランだが特定の問題の解決を依頼——単発、AIが複雑さで価格設定。', items: [
        { name: '簡単', price: '$50', unit: '/件' },
        { name: '中程度', price: '$150', unit: '/件' },
        { name: '複雑', price: '$300', unit: '/件' },
      ] },
      { title: 'サイバー防御（ITDR）——任意のレベルに追加', items: [
        { name: 'サイバー防御（ITDR）', desc: 'リアルタイム検知 → シールド展開 → ブロック/封じ込め → 停止、その後に解決策を提案。月1回の撃退攻撃を含む。', price: '$250', unit: '/サーバー/月' },
      ] },
      { title: '既成の構成', items: [
        { name: '観測', desc: '監視', price: '$20', unit: '/サーバー/月' },
        { name: 'フルオートサーバー', desc: 'Sysadmin + サイバー防御', price: '$500', unit: '/サーバー/月', hot: true },
      ] },
      { title: 'インシデント階層——アラカルト、お客様の判断', note: 'ITDR封じ込め後に発動。ステップごとに判断・支払い。', items: [
        { name: '調査', desc: '完全撃退 + すべてのインプラント/バックドア/永続化の探索', price: '$750', unit: '/インシデント' },
        { name: '調査と対応', desc: '調査・攻撃者特定・協調対応、ROE L1–L4', price: '+$1,500', unit: '/インシデント' },
        { name: '復旧——小', desc: '1〜2サービス、設定、ロールバック', price: '$300', unit: '' },
        { name: '復旧——中', desc: '再インストール / データ、複数ノード', price: '$1,500', unit: '' },
        { name: '復旧——大', desc: 'システム/クラスター全体の復旧', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'ノードはノード単位で課金（自動 または 監視、併用不可）；サイバー防御はクラスター単位。', items: [
        { name: 'ノード——自動', price: '$200', unit: '/ノード/月' },
        { name: 'ノード——監視', price: '$20', unit: '/ノード/月' },
        { name: 'クラスターのサイバー防御', price: '$500', unit: '/クラスター/月' },
      ] },
      { title: '必須オンボーディング監査（G-Tester経由、−30%）', items: [
        { name: 'システム脆弱性テスト', price: '$525', unit: '1回' },
        { name: 'サーバー監査', price: '$105', unit: '1回' },
        { name: 'フルパッケージ', price: '$1,715', unit: '1回' },
      ] },
    ],
    grandfather: '各サーバーにITDR · SIEM · RAGを含みます。Enterprise（無制限・オンプレミス・エアギャップ）は個別に算定。固定プランの既存顧客は2026.10.30まで価格を維持します。',
  },
  hi: {
    h: 'उपयोग अनुसार भुगतान (PAYG)',
    lead: 'प्रति सर्वर सुरक्षा को घटकों से बनाएं — केवल उसी के लिए भुगतान करें जो आप चालू करते हैं। एक सर्वर $20 से शुरू करें; बढ़ने के साथ स्केल करें।',
    wallet: 'प्रीपेड वॉलेट · सक्रिय कॉन्फ़िगरेशन के लिए मासिक कटौती · एकबारगी घटनाओं का तुरंत शुल्क · सॉफ्ट-लिमिट में न गिरने के लिए ऑटो-टॉपअप',
    groups: [
      { title: 'सर्वर सेवा स्तर — एक चुनें', items: [
        { name: 'मॉनिटरिंग', desc: 'पहचान + निदान + आपको फिक्स कमांड भेजता है। आप उन्हें लागू करते हैं।', price: '$20', unit: '/सर्वर/माह' },
        { name: 'Sysadmin (पूर्ण स्वचालित)', desc: 'पहचान → निदान → स्वयं ठीक करता है → सत्यापन। मॉनिटरिंग शामिल।', price: '$250', unit: '/सर्वर/माह', hot: true },
      ] },
      { title: 'ऑन-डिमांड फिक्स (मॉनिटरिंग के ऊपर)', note: 'आप $20 पर हैं पर किसी विशेष समस्या को हमसे ठीक कराते हैं — एकबारगी, AI जटिलता अनुसार मूल्य तय करता है।', items: [
        { name: 'सरल', price: '$50', unit: '/फिक्स' },
        { name: 'मध्यम', price: '$150', unit: '/फिक्स' },
        { name: 'जटिल', price: '$300', unit: '/फिक्स' },
      ] },
      { title: 'साइबर-रक्षा (ITDR) — किसी भी स्तर में जोड़ें', items: [
        { name: 'साइबर-रक्षा (ITDR)', desc: 'रीयल-टाइम पहचान → शील्ड → ब्लॉक/नियंत्रण → STOP, फिर समाधान सुझाता है। प्रति माह 1 विफल किया गया हमला शामिल।', price: '$250', unit: '/सर्वर/माह' },
      ] },
      { title: 'तैयार संयोजन', items: [
        { name: 'अवलोकन', desc: 'मॉनिटरिंग', price: '$20', unit: '/सर्वर/माह' },
        { name: 'पूर्ण स्वचालित सर्वर', desc: 'Sysadmin + साइबर-रक्षा', price: '$500', unit: '/सर्वर/माह', hot: true },
      ] },
      { title: 'इंसिडेंट टियर — à la carte, आपका निर्णय', note: 'ITDR नियंत्रण के बाद सक्रिय होता है। आप प्रति चरण निर्णय और भुगतान करते हैं।', items: [
        { name: 'जांच', desc: 'पूर्ण प्रतिकार + हर इम्प्लांट/बैकडोर/परसिस्टेंस की खोज', price: '$750', unit: '/इंसिडेंट' },
        { name: 'जांच और प्रतिक्रिया', desc: 'जांच, पहचान और समन्वित प्रतिक्रिया, ROE L1–L4', price: '+$1,500', unit: '/इंसिडेंट' },
        { name: 'पुनर्प्राप्ति — छोटी', desc: '1–2 सेवाएँ, कॉन्फ़िग, रोलबैक', price: '$300', unit: '' },
        { name: 'पुनर्प्राप्ति — मध्यम', desc: 'पुनः इंस्टॉल / डेटा, कई नोड', price: '$1,500', unit: '' },
        { name: 'पुनर्प्राप्ति — बड़ी', desc: 'पूर्ण सिस्टम/क्लस्टर पुनर्प्राप्ति', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'नोड प्रति नोड बिल होते हैं (ऑटो या मॉनिटरिंग, दोनों नहीं); साइबर-रक्षा प्रति क्लस्टर।', items: [
        { name: 'नोड — ऑटो', price: '$200', unit: '/नोड/माह' },
        { name: 'नोड — मॉनिटरिंग', price: '$20', unit: '/नोड/माह' },
        { name: 'क्लस्टर साइबर-रक्षा', price: '$500', unit: '/क्लस्टर/माह' },
      ] },
      { title: 'अनिवार्य ऑनबोर्डिंग ऑडिट (G-Tester के माध्यम से, −30%)', items: [
        { name: 'सिस्टम भेद्यता परीक्षण', price: '$525', unit: 'एकबार' },
        { name: 'सर्वर ऑडिट', price: '$105', unit: 'एकबार' },
        { name: 'पूर्ण पैकेज', price: '$1,715', unit: 'एकबार' },
      ] },
    ],
    grandfather: 'हर सर्वर में ITDR · SIEM · RAG शामिल है। Enterprise (असीमित, ऑन-प्रेम, एयर-गैप्ड) की गणना व्यक्तिगत रूप से होती है। फिक्स्ड-टियर के मौजूदा ग्राहक 30.10.2026 तक अपना मूल्य बनाए रखते हैं।',
  },
  ar: {
    h: 'الدفع حسب الاستخدام (PAYG)',
    lead: 'ابنِ الحماية لكل خادم من مكوّنات — ادفع فقط مقابل ما تُفعّله. ابدأ بخادم واحد بـ $20 وتوسّع مع نموّك.',
    wallet: 'محفظة مسبقة الدفع · خصم شهري للتهيئة النشطة · الأحداث لمرة واحدة تُحتسب فورًا · إعادة شحن تلقائية كي لا تسقط في حدّ مرن',
    groups: [
      { title: 'مستوى خدمة الخادم — اختر واحدًا', items: [
        { name: 'المراقبة', desc: 'كشف + تشخيص + إرسال أوامر الإصلاح إليك. أنت تطبّقها.', price: '$20', unit: '/خادم/شهر' },
        { name: 'Sysadmin (آلي بالكامل)', desc: 'كشف → تشخيص → يُصلح بنفسه → تحقّق. يشمل المراقبة.', price: '$250', unit: '/خادم/شهر', hot: true },
      ] },
      { title: 'إصلاح عند الطلب (فوق المراقبة)', note: 'أنت على $20 لكن تطلب منّا إصلاح مشكلة محددة — لمرة واحدة، يُسعّرها الذكاء الاصطناعي حسب التعقيد.', items: [
        { name: 'بسيط', price: '$50', unit: '/إصلاح' },
        { name: 'متوسط', price: '$150', unit: '/إصلاح' },
        { name: 'معقّد', price: '$300', unit: '/إصلاح' },
      ] },
      { title: 'الدفاع السيبراني (ITDR) — يُضاف إلى أي مستوى', items: [
        { name: 'الدفاع السيبراني (ITDR)', desc: 'كشف فوري → رفع الدروع → حظر/احتواء → إيقاف، ثم يقترح حلًّا. هجوم واحد مصدود/شهر مشمول.', price: '$250', unit: '/خادم/شهر' },
      ] },
      { title: 'تهيئات جاهزة', items: [
        { name: 'المراقبة البصرية', desc: 'المراقبة', price: '$20', unit: '/خادم/شهر' },
        { name: 'خادم آلي بالكامل', desc: 'Sysadmin + الدفاع السيبراني', price: '$500', unit: '/خادم/شهر', hot: true },
      ] },
      { title: 'مستوى الحوادث — حسب الطلب، قرارك أنت', note: 'يبدأ بعد احتواء ITDR. أنت تقرّر وتدفع لكل خطوة.', items: [
        { name: 'تحقيق', desc: 'صدّ كامل + تعقّب كل زرع/باب خلفي/استمرارية', price: '$750', unit: '/حادثة' },
        { name: 'التحقيق والاستجابة', desc: 'التحقيق والإسناد والاستجابة المنسّقة، ROE L1–L4', price: '+$1,500', unit: '/حادثة' },
        { name: 'استعادة — صغيرة', desc: '1–2 خدمة، إعدادات، تراجع', price: '$300', unit: '' },
        { name: 'استعادة — متوسطة', desc: 'إعادة تثبيت / بيانات، عدة عُقد', price: '$1,500', unit: '' },
        { name: 'استعادة — كبيرة', desc: 'استعادة كاملة للنظام/العنقود', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'العُقد تُحتسب لكل عقدة (آلي أو مراقبة، لا كليهما)؛ الدفاع السيبراني لكل عنقود.', items: [
        { name: 'عقدة — آلي', price: '$200', unit: '/عقدة/شهر' },
        { name: 'عقدة — مراقبة', price: '$20', unit: '/عقدة/شهر' },
        { name: 'دفاع سيبراني للعنقود', price: '$500', unit: '/عنقود/شهر' },
      ] },
      { title: 'تدقيق إلزامي عند الإعداد (عبر G-Tester، −30%)', items: [
        { name: 'اختبار ثغرات النظام', price: '$525', unit: 'مرة واحدة' },
        { name: 'تدقيق الخادم', price: '$105', unit: 'مرة واحدة' },
        { name: 'الحزمة الكاملة', price: '$1,715', unit: 'مرة واحدة' },
      ] },
    ],
    grandfather: 'كل خادم يشمل ITDR · SIEM · RAG. تُحسب Enterprise (غير محدود، محلي، معزول) بشكل فردي. يحتفظ عملاء الباقات الثابتة بسعرهم حتى 30.10.2026.',
  },
  el: {
    h: 'Πληρωμή με τη χρήση (PAYG)',
    lead: 'Χτίσε την προστασία ανά διακομιστή από στοιχεία — πλήρωσε μόνο ό,τι ενεργοποιείς. Ξεκίνα με έναν διακομιστή στα $20 και κλιμάκωσε καθώς μεγαλώνεις.',
    wallet: 'Προπληρωμένο πορτοφόλι · μηνιαία χρέωση για την ενεργή διαμόρφωση · τα εφάπαξ συμβάντα χρεώνονται άμεσα · αυτόματη αναπλήρωση ώστε να μην πέφτεις σε ήπιο όριο',
    groups: [
      { title: 'Επίπεδο υπηρεσίας διακομιστή — διάλεξε ένα', items: [
        { name: 'Παρακολούθηση', desc: 'Εντοπισμός + διάγνωση + σου στέλνει τις εντολές διόρθωσης. Τις εφαρμόζεις εσύ.', price: '$20', unit: '/διακομιστή/μήνα' },
        { name: 'Sysadmin (πλήρως αυτόματο)', desc: 'Εντοπισμός → διάγνωση → διορθώνει → επαληθεύει. Περιλαμβάνει παρακολούθηση.', price: '$250', unit: '/διακομιστή/μήνα', hot: true },
      ] },
      { title: 'Διόρθωση κατ’ απαίτηση (πάνω από την Παρακολούθηση)', note: 'Είσαι στα $20 αλλά μας ζητάς να λύσουμε ένα συγκεκριμένο πρόβλημα — εφάπαξ, η ΤΝ τιμολογεί κατά πολυπλοκότητα.', items: [
        { name: 'Απλή', price: '$50', unit: '/διόρθωση' },
        { name: 'Μεσαία', price: '$150', unit: '/διόρθωση' },
        { name: 'Σύνθετη', price: '$300', unit: '/διόρθωση' },
      ] },
      { title: 'Κυβερνοάμυνα (ITDR) — προστίθεται σε κάθε επίπεδο', items: [
        { name: 'Κυβερνοάμυνα (ITDR)', desc: 'Ανίχνευση σε πραγματικό χρόνο → ασπίδες → μπλοκάρισμα/περιορισμός → STOP, μετά προτείνει λύση. 1 αποκρουσθείσα επίθεση/μήνα περιλαμβάνεται.', price: '$250', unit: '/διακομιστή/μήνα' },
      ] },
      { title: 'Έτοιμες διαμορφώσεις', items: [
        { name: 'Παρατήρηση', desc: 'Παρακολούθηση', price: '$20', unit: '/διακομιστή/μήνα' },
        { name: 'Πλήρως αυτόματος διακομιστής', desc: 'Sysadmin + Κυβερνοάμυνα', price: '$500', unit: '/διακομιστή/μήνα', hot: true },
      ] },
      { title: 'Επίπεδο περιστατικών — à la carte, δική σου απόφαση', note: 'Ενεργοποιείται μετά τον περιορισμό του ITDR. Αποφασίζεις και πληρώνεις ανά βήμα.', items: [
        { name: 'Έρευνα', desc: 'Πλήρης απόκρουση + κυνήγι κάθε εμφύτευμα/backdoor/persistence', price: '$750', unit: '/περιστατικό' },
        { name: 'Έρευνα και απόκριση', desc: 'Έρευνα, απόδοση και συντονισμένη απόκριση, ROE L1–L4', price: '+$1,500', unit: '/περιστατικό' },
        { name: 'Ανάκτηση — μικρή', desc: '1–2 υπηρεσίες, διαμορφώσεις, rollback', price: '$300', unit: '' },
        { name: 'Ανάκτηση — μεσαία', desc: 'Επανεγκατάσταση / δεδομένα, πολλοί κόμβοι', price: '$1,500', unit: '' },
        { name: 'Ανάκτηση — μεγάλη', desc: 'Πλήρης ανάκτηση συστήματος/συστάδας', price: '$4,000', unit: '' },
      ] },
      { title: 'Kubernetes', note: 'Οι κόμβοι χρεώνονται ανά κόμβο (auto Ή παρακολούθηση, όχι και τα δύο)· κυβερνοάμυνα ανά συστάδα.', items: [
        { name: 'Κόμβος — auto', price: '$200', unit: '/κόμβο/μήνα' },
        { name: 'Κόμβος — παρακολούθηση', price: '$20', unit: '/κόμβο/μήνα' },
        { name: 'Κυβερνοάμυνα συστάδας', price: '$500', unit: '/συστάδα/μήνα' },
      ] },
      { title: 'Υποχρεωτικός έλεγχος onboarding (μέσω G-Tester, −30%)', items: [
        { name: 'Έλεγχος ευπαθειών συστήματος', price: '$525', unit: 'εφάπαξ' },
        { name: 'Έλεγχος διακομιστή', price: '$105', unit: 'εφάπαξ' },
        { name: 'Πλήρες πακέτο', price: '$1,715', unit: 'εφάπαξ' },
      ] },
    ],
    grandfather: 'Κάθε διακομιστής περιλαμβάνει ITDR · SIEM · RAG. Το Enterprise (απεριόριστο, on-prem, air-gapped) υπολογίζεται ξεχωριστά. Οι υπάρχοντες πελάτες σταθερών πλάνων διατηρούν την τιμή τους έως τις 30.10.2026.',
  },
};

export default function BillingTariffs() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>
        <p className="mb-10 inline-block rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm font-semibold text-cyan-200">
          {d.wallet}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {d.groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-base font-bold text-white">{g.title}</p>
              {g.note && <p className="mt-1 text-xs text-white/50">{g.note}</p>}
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className={`flex items-start justify-between gap-3 rounded-lg px-3 py-2 ${
                      it.hot ? 'bg-cyan-500/10 ring-1 ring-cyan-400/30' : 'bg-white/[0.03]'
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{it.name}</p>
                      {it.desc && <p className="text-xs leading-relaxed text-white/60">{it.desc}</p>}
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="gradient-text text-lg font-bold">{it.price}</span>
                      {it.unit && <span className="ml-1 block text-[11px] text-white/50">{it.unit}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">{d.grandfather}</p>
      </div>
    </section>
  );
}
