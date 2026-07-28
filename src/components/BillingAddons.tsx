'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Addon = { name: string; desc: string; price: string };
type Data = { h: string; lead: string; addons: Addon[]; note: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Add-ons',
    lead: 'Scale any plan à la carte — pay only for the extra capacity you actually use.',
    addons: [
      { name: '+1 monitoring server', desc: 'Another server in monitoring mode — alerts and advice, no automated changes.', price: '$20 /mo' },
      { name: '+1 automated server', desc: 'Another fully-automated server — audit, fixes and ITDR active response; adds 2 cyber-attack responses/mo.', price: '$350 /mo' },
      { name: '+1 Cloud AI seat', desc: 'One more seat for the Cloud AI assistant.', price: '$50 /mo' },
      { name: '+1 AI Studio seat', desc: 'One more AI Studio (coding) seat; usage billed by tokens.', price: '$20–100 /mo' },
      { name: 'Extra cyber-attack response', desc: 'Beyond the included quota of 2 per automated server / month.', price: '$500 each' },
      { name: 'One-time audit & fix', desc: 'A one-off audit of the server state and remediation of what it finds, for monitoring-mode servers (automated servers get this continuously). Full vulnerability testing is priced by the G-Tester menu, minus 10% as a Guardian Cloud client.', price: '$100' },
    ],
    note: 'The add-on catalog rolls out with launch (Phase 2).',
  },
  ru: {
    h: 'Дополнения (add-on)',
    lead: 'Масштабируйте любой тариф по выбору — платите только за реально нужную ёмкость.',
    addons: [
      { name: '+1 сервер мониторинга', desc: 'Ещё один сервер в режиме мониторинга — алерты и советы, без автоматических изменений.', price: '$20 /мес' },
      { name: '+1 автоматизированный сервер', desc: 'Ещё один полностью автоматизированный сервер — аудит, фиксы и активная реакция ITDR; даёт +2 квоты кибер-атак/мес.', price: '$350 /мес' },
      { name: '+1 место Cloud AI', desc: 'Ещё одно рабочее место AI-ассистента Cloud AI.', price: '$50 /мес' },
      { name: '+1 место AI Studio', desc: 'Ещё одно рабочее место AI Studio (кодинг); оплата по токенам.', price: '$20–100 /мес' },
      { name: 'Доп. отражение кибер-атаки', desc: 'Сверх включённой квоты — 2 на 1 автомат-сервер в месяц.', price: '$500 за раз' },
      { name: 'Разовый аудит и фикс', desc: 'Разовый аудит состояния сервера и устранение найденного, для режима мониторинга (на автомате это идёт постоянно). Полное тестирование на уязвимости считается по расценкам G-Tester, за вычетом 10% как клиенту Guardian Cloud.', price: '$100' },
    ],
    note: 'Каталог дополнений выкатывается с запуском (Phase 2).',
  },
  zh: {
    h: '加購項目',
    lead: '依需求彈性擴充任一方案——只為您實際使用的額外容量付費。',
    addons: [
      { name: '+1 台監控伺服器', desc: '再增加一台監控模式伺服器——告警與建議，不做自動變更。', price: '$20 /月' },
      { name: '+1 台自動伺服器', desc: '再增加一台全自動伺服器——稽核、修復與 ITDR 主動回應；額外提供 2 次/月網路攻擊防禦。', price: '$350 /月' },
      { name: '+1 個 Cloud AI 席位', desc: '再增加一個 Cloud AI 助理席位。', price: '$50 /月' },
      { name: '+1 個 AI Studio 席位', desc: '再增加一個 AI Studio（編碼）席位；依 token 計費。', price: '$20–100 /月' },
      { name: '額外網路攻擊防禦', desc: '超出內含額度——每台自動伺服器每月 2 次——之後。', price: '每次 $500' },
      { name: '一次性稽核與修復', desc: '針對監控模式伺服器，一次性稽核其狀態並修復所發現的問題（自動化伺服器則持續進行）。完整的漏洞測試依 G-Tester 價目計算，作為 Guardian Cloud 客戶可享 10% 折扣。', price: '$100' },
    ],
    note: '加購目錄將隨正式發布推出（第二階段）。',
  },
  fr: {
    h: 'Modules complémentaires',
    lead: "Faites évoluer n'importe quel forfait à la carte — ne payez que pour la capacité supplémentaire que vous utilisez réellement.",
    addons: [
      { name: '+1 serveur de supervision', desc: "Un serveur supplémentaire en mode supervision — alertes et recommandations, sans modification automatisée.", price: '$20 /mois' },
      { name: '+1 serveur automatisé', desc: "Un serveur entièrement automatisé de plus — audit, correctifs et réponse active ITDR ; ajoute 2 réponses aux cyberattaques/mois.", price: '$350 /mois' },
      { name: '+1 poste Cloud AI', desc: "Un poste supplémentaire pour l'assistant Cloud AI.", price: '$50 /mois' },
      { name: '+1 poste AI Studio', desc: "Un poste AI Studio (codage) supplémentaire ; usage facturé au token.", price: '$20–100 /mois' },
      { name: 'Réponse à cyberattaque supplémentaire', desc: "Au-delà du quota inclus de 2 par serveur automatisé / mois.", price: "$500 l'unité" },
      { name: 'Audit et correction ponctuels', desc: "Un audit ponctuel de l'état du serveur et la correction des problèmes détectés, pour les serveurs en mode supervision (les serveurs automatisés en bénéficient en continu). Les tests de vulnérabilité complets sont facturés selon le tarif G-Tester, moins 10 % en tant que client Guardian Cloud.", price: '$100' },
    ],
    note: 'Le catalogue de modules complémentaires sera déployé au lancement (Phase 2).',
  },
  de: {
    h: 'Add-ons',
    lead: 'Erweitern Sie jeden Plan nach Bedarf — zahlen Sie nur für die zusätzliche Kapazität, die Sie tatsächlich nutzen.',
    addons: [
      { name: '+1 Monitoring-Server', desc: 'Ein weiterer Server im Monitoring-Modus — Warnungen und Empfehlungen, keine automatisierten Änderungen.', price: '$20 /Monat' },
      { name: '+1 automatisierter Server', desc: 'Ein weiterer vollautomatisierter Server — Audit, Fixes und aktive ITDR-Reaktion; fügt 2 Cyberangriff-Reaktionen/Monat hinzu.', price: '$350 /Monat' },
      { name: '+1 Cloud-AI-Platz', desc: 'Ein weiterer Platz für den Cloud-AI-Assistenten.', price: '$50 /Monat' },
      { name: '+1 AI-Studio-Platz', desc: 'Ein weiterer AI-Studio-Platz (Coding); Nutzung wird nach Tokens abgerechnet.', price: '$20–100 /Monat' },
      { name: 'Zusätzliche Cyberangriff-Reaktion', desc: 'Über das enthaltene Kontingent von 2 pro automatisiertem Server / Monat hinaus.', price: '$500 pro Stück' },
      { name: 'Einmaliges Audit & Fix', desc: 'Ein einmaliges Audit des Serverzustands und die Behebung der gefundenen Probleme, für Server im Monitoring-Modus (automatisierte Server erhalten dies fortlaufend). Vollständige Schwachstellentests werden nach dem G-Tester-Menü berechnet, abzüglich 10 % als Guardian-Cloud-Kunde.', price: '$100' },
    ],
    note: 'Der Add-on-Katalog wird mit dem Launch eingeführt (Phase 2).',
  },
  es: {
    h: 'Complementos',
    lead: 'Escale cualquier plan a la carta — pague solo por la capacidad adicional que realmente utilice.',
    addons: [
      { name: '+1 servidor de monitoreo', desc: 'Otro servidor en modo monitoreo — alertas y recomendaciones, sin cambios automatizados.', price: '$20 /mes' },
      { name: '+1 servidor automatizado', desc: 'Otro servidor totalmente automatizado — auditoría, correcciones y respuesta activa ITDR; añade 2 respuestas a ciberataques/mes.', price: '$350 /mes' },
      { name: '+1 puesto de Cloud AI', desc: 'Un puesto adicional para el asistente Cloud AI.', price: '$50 /mes' },
      { name: '+1 puesto de AI Studio', desc: 'Un puesto adicional de AI Studio (programación); el uso se factura por tokens.', price: '$20–100 /mes' },
      { name: 'Respuesta adicional a ciberataque', desc: 'Más allá de la cuota incluida de 2 por servidor automatizado / mes.', price: '$500 cada una' },
      { name: 'Auditoría y corrección puntual', desc: 'Una auditoría puntual del estado del servidor y la corrección de lo que se encuentre, para servidores en modo monitoreo (los servidores automatizados lo reciben de forma continua). Las pruebas completas de vulnerabilidades se cobran según el menú de G-Tester, menos un 10 % como cliente de Guardian Cloud.', price: '$100' },
    ],
    note: 'El catálogo de complementos se lanzará con el lanzamiento (Fase 2).',
  },
  it: {
    h: 'Componenti aggiuntivi',
    lead: 'Amplia qualsiasi piano a la carte — paghi solo per la capacità extra che utilizzi davvero.',
    addons: [
      { name: '+1 server di monitoraggio', desc: 'Un altro server in modalità monitoraggio — avvisi e consigli, senza modifiche automatizzate.', price: '$20 /mese' },
      { name: '+1 server automatizzato', desc: 'Un altro server completamente automatizzato — audit, correzioni e risposta attiva ITDR; aggiunge 2 risposte agli attacchi informatici/mese.', price: '$350 /mese' },
      { name: '+1 postazione Cloud AI', desc: "Una postazione in più per l'assistente Cloud AI.", price: '$50 /mese' },
      { name: '+1 postazione AI Studio', desc: 'Una postazione AI Studio (coding) in più; utilizzo fatturato a token.', price: '$20–100 /mese' },
      { name: 'Risposta extra a un attacco informatico', desc: 'Oltre alla quota inclusa di 2 per server automatizzato / mese.', price: '$500 cadauna' },
      { name: 'Audit e correzione una tantum', desc: 'Un audit una tantum dello stato del server e la correzione di quanto rilevato, per i server in modalità monitoraggio (i server automatizzati lo ricevono in continuo). I test di vulnerabilità completi sono tariffati secondo il listino G-Tester, meno il 10% come cliente Guardian Cloud.', price: '$100' },
    ],
    note: 'Il catalogo dei componenti aggiuntivi verrà pubblicato al lancio (Fase 2).',
  },
  ja: {
    h: 'アドオン',
    lead: 'どのプランでもアラカルトで拡張可能 — 実際に使用する追加容量分のみ料金が発生します。',
    addons: [
      { name: '+1 監視サーバー', desc: 'もう1台のサーバーを監視モードで追加 — アラートとアドバイスのみ、自動変更は行いません。', price: '$20 /月' },
      { name: '+1 自動化サーバー', desc: 'もう1台の完全自動化サーバー — 監査、修正、ITDRによる能動的対応。サイバー攻撃対応を月2件追加。', price: '$350 /月' },
      { name: '+1 Cloud AIシート', desc: 'Cloud AIアシスタントのシートをもう1つ追加。', price: '$50 /月' },
      { name: '+1 AI Studioシート', desc: 'AI Studio（コーディング）のシートをもう1つ追加。利用量はトークン課金。', price: '$20–100 /月' },
      { name: '追加のサイバー攻撃対応', desc: '自動化サーバー1台あたり月2件の含有クォータを超えた分。', price: '$500 / 件' },
      { name: '単発の監査と修正', desc: '監視モードのサーバーに対する単発の状態監査と、発見事項の是正（自動化サーバーには継続的に提供されます）。完全な脆弱性テストはG-Testerのメニューに基づき、Guardian Cloudのお客様は10%割引となります。', price: '$100' },
    ],
    note: 'アドオンカタログはローンチ（フェーズ2）で公開されます。',
  },
  uk: {
    h: 'Додаткові опції',
    lead: 'Масштабуйте будь-який тариф на власний розсуд — платіть лише за додаткову ємність, яку реально використовуєте.',
    addons: [
      { name: '+1 сервер моніторингу', desc: 'Ще один сервер у режимі моніторингу — сповіщення та рекомендації, без автоматичних змін.', price: '$20 /міс' },
      { name: '+1 автоматизований сервер', desc: 'Ще один повністю автоматизований сервер — аудит, виправлення та активна реакція ITDR; додає 2 реагування на кібератаки/міс.', price: '$350 /міс' },
      { name: '+1 місце Cloud AI', desc: 'Ще одне робоче місце асистента Cloud AI.', price: '$50 /міс' },
      { name: '+1 місце AI Studio', desc: 'Ще одне робоче місце AI Studio (кодинг); оплата за токенами.', price: '$20–100 /міс' },
      { name: 'Додаткове реагування на кібератаку', desc: 'Понад включену квоту — 2 на автоматизований сервер на місяць.', price: '$500 за раз' },
      { name: 'Разовий аудит і виправлення', desc: 'Разовий аудит стану сервера та усунення знайденого, для серверів у режимі моніторингу (автоматизовані сервери отримують це постійно). Повне тестування на вразливості тарифікується за прайсом G-Tester, мінус 10% як клієнту Guardian Cloud.', price: '$100' },
    ],
    note: 'Каталог додаткових опцій запускається разом із запуском (Фаза 2).',
  },
  sr: {
    h: 'Dodaci',
    lead: 'Proširite bilo koji plan po meri — platite samo za dodatni kapacitet koji zaista koristite.',
    addons: [
      { name: '+1 server za nadzor', desc: 'Još jedan server u režimu nadzora — upozorenja i preporuke, bez automatizovanih izmena.', price: '$20 /mes' },
      { name: '+1 automatizovani server', desc: 'Još jedan potpuno automatizovani server — revizija, ispravke i aktivan ITDR odgovor; dodaje 2 odgovora na sajber napade/mes.', price: '$350 /mes' },
      { name: '+1 mesto za Cloud AI', desc: 'Još jedno mesto za Cloud AI asistenta.', price: '$50 /mes' },
      { name: '+1 mesto za AI Studio', desc: 'Još jedno mesto za AI Studio (programiranje); naplata po tokenima.', price: '$20–100 /mes' },
      { name: 'Dodatni odgovor na sajber napad', desc: 'Preko uključene kvote od 2 po automatizovanom serveru mesečno.', price: '$500 po komadu' },
      { name: 'Jednokratna revizija i ispravka', desc: 'Jednokratna revizija stanja servera i otklanjanje uočenih problema, za servere u režimu nadzora (automatizovani serveri ovo dobijaju kontinuirano). Kompletno testiranje ranjivosti se naplaćuje po cenovniku G-Tester, umanjeno za 10% kao klijentu Guardian Cloud.', price: '$100' },
    ],
    note: 'Katalog dodataka se pokreće sa lansiranjem (Faza 2).',
  },
  pt: {
    h: 'Complementos',
    lead: 'Amplie qualquer plano à la carte — pague apenas pela capacidade extra que realmente utilizar.',
    addons: [
      { name: '+1 servidor de monitoramento', desc: 'Mais um servidor em modo de monitoramento — alertas e recomendações, sem alterações automatizadas.', price: '$20 /mês' },
      { name: '+1 servidor automatizado', desc: 'Mais um servidor totalmente automatizado — auditoria, correções e resposta ativa do ITDR; adiciona 2 respostas a ciberataques/mês.', price: '$350 /mês' },
      { name: '+1 assento Cloud AI', desc: 'Mais um assento para o assistente Cloud AI.', price: '$50 /mês' },
      { name: '+1 assento AI Studio', desc: 'Mais um assento de AI Studio (programação); uso cobrado por tokens.', price: '$20–100 /mês' },
      { name: 'Resposta extra a ciberataque', desc: 'Além da cota incluída de 2 por servidor automatizado / mês.', price: '$500 cada' },
      { name: 'Auditoria e correção pontual', desc: 'Uma auditoria pontual do estado do servidor e a correção do que for encontrado, para servidores em modo de monitoramento (servidores automatizados recebem isso continuamente). Testes completos de vulnerabilidade são cobrados conforme a tabela do G-Tester, menos 10% como cliente Guardian Cloud.', price: '$100' },
    ],
    note: 'O catálogo de complementos será lançado com o lançamento (Fase 2).',
  },
  hi: {
    h: 'ऐड-ऑन',
    lead: 'किसी भी योजना को अपनी ज़रूरत के अनुसार बढ़ाएँ — केवल उतनी अतिरिक्त क्षमता के लिए भुगतान करें जितनी आप वास्तव में उपयोग करते हैं।',
    addons: [
      { name: '+1 मॉनिटरिंग सर्वर', desc: 'मॉनिटरिंग मोड में एक और सर्वर — अलर्ट और सलाह, बिना किसी स्वचालित बदलाव के।', price: '$20 /माह' },
      { name: '+1 स्वचालित सर्वर', desc: 'एक और पूर्णतः स्वचालित सर्वर — ऑडिट, फिक्स और सक्रिय ITDR प्रतिक्रिया; प्रति माह 2 साइबर-अटैक रिस्पॉन्स जोड़ता है।', price: '$350 /माह' },
      { name: '+1 Cloud AI सीट', desc: 'Cloud AI असिस्टेंट के लिए एक और सीट।', price: '$50 /माह' },
      { name: '+1 AI Studio सीट', desc: 'AI Studio (कोडिंग) की एक और सीट; उपयोग टोकन के अनुसार बिल किया जाता है।', price: '$20–100 /माह' },
      { name: 'अतिरिक्त साइबर-अटैक प्रतिक्रिया', desc: 'प्रति स्वचालित सर्वर / माह शामिल 2 कोटा से अधिक।', price: '$500 प्रत्येक' },
      { name: 'एक बार का ऑडिट और फिक्स', desc: 'मॉनिटरिंग-मोड सर्वरों के लिए सर्वर की स्थिति का एक बार का ऑडिट और पाई गई समस्याओं का समाधान (स्वचालित सर्वरों को यह निरंतर मिलता है)। पूर्ण भेद्यता परीक्षण G-Tester मेनू के अनुसार, Guardian Cloud ग्राहक के रूप में 10% छूट के साथ, चार्ज किया जाता है।', price: '$100' },
    ],
    note: 'ऐड-ऑन कैटलॉग लॉन्च (फेज़ 2) के साथ उपलब्ध होगा।',
  },
  tr: {
    h: 'Eklentiler',
    lead: 'Herhangi bir planı ihtiyacınıza göre genişletin — yalnızca gerçekten kullandığınız ek kapasite için ödeme yapın.',
    addons: [
      { name: '+1 izleme sunucusu', desc: 'İzleme modunda bir sunucu daha — uyarılar ve öneriler, otomatik değişiklik yok.', price: '$20 /ay' },
      { name: '+1 otomatik sunucu', desc: 'Tamamen otomatik bir sunucu daha — denetim, düzeltmeler ve aktif ITDR yanıtı; ayda 2 siber saldırı yanıtı ekler.', price: '$350 /ay' },
      { name: '+1 Cloud AI koltuğu', desc: 'Cloud AI asistanı için bir koltuk daha.', price: '$50 /ay' },
      { name: '+1 AI Studio koltuğu', desc: 'Bir AI Studio (kodlama) koltuğu daha; kullanım token bazında faturalandırılır.', price: '$20–100 /ay' },
      { name: 'Ek siber saldırı yanıtı', desc: 'Otomatik sunucu başına ayda dahil olan 2 kotanın ötesinde.', price: '$500 / adet' },
      { name: 'Tek seferlik denetim ve düzeltme', desc: 'İzleme modundaki sunucular için sunucu durumunun tek seferlik denetimi ve tespit edilenlerin giderilmesi (otomatik sunucularda bu sürekli sağlanır). Tam güvenlik açığı testi, Guardian Cloud müşterisi olarak %10 indirimle G-Tester fiyat listesine göre ücretlendirilir.', price: '$100' },
    ],
    note: 'Eklenti kataloğu lansmanla (Faz 2) birlikte kullanıma sunulacak.',
  },
  ar: {
    h: 'الإضافات',
    lead: 'وسّع أي خطة حسب الطلب — وادفع فقط مقابل السعة الإضافية التي تستخدمها فعليًا.',
    addons: [
      { name: '+1 خادم مراقبة', desc: 'خادم إضافي في وضع المراقبة — تنبيهات وتوصيات، دون أي تغييرات آلية.', price: '$20 /شهريًا' },
      { name: '+1 خادم آلي', desc: 'خادم آخر آلي بالكامل — تدقيق وإصلاحات واستجابة نشطة من ITDR؛ يضيف استجابتين لهجمات سيبرانية شهريًا.', price: '$350 /شهريًا' },
      { name: '+1 مقعد Cloud AI', desc: 'مقعد إضافي لمساعد Cloud AI.', price: '$50 /شهريًا' },
      { name: '+1 مقعد AI Studio', desc: 'مقعد إضافي في AI Studio (البرمجة)؛ يُحتسب الاستخدام حسب الرموز (tokens).', price: '$20–100 /شهريًا' },
      { name: 'استجابة إضافية لهجوم سيبراني', desc: 'زيادة عن الحصة المشمولة البالغة 2 لكل خادم آلي / شهريًا.', price: '$500 لكل استجابة' },
      { name: 'تدقيق وإصلاح لمرة واحدة', desc: 'تدقيق لمرة واحدة لحالة الخادم وإصلاح ما يتم اكتشافه، للخوادم في وضع المراقبة (الخوادم الآلية تحصل على ذلك بشكل مستمر). يُحتسب اختبار الثغرات الكامل وفق قائمة أسعار G-Tester، مع خصم 10% كعميل لدى Guardian Cloud.', price: '$100' },
    ],
    note: 'سيتم إطلاق كتالوج الإضافات مع الإطلاق (المرحلة 2).',
  },
  el: {
    h: 'Πρόσθετα',
    lead: "Επεκτείνετε οποιοδήποτε πλάνο κατ' επιλογήν — πληρώνετε μόνο για την επιπλέον χωρητικότητα που πραγματικά χρησιμοποιείτε.",
    addons: [
      { name: '+1 διακομιστής παρακολούθησης', desc: 'Ένας ακόμη διακομιστής σε λειτουργία παρακολούθησης — ειδοποιήσεις και συστάσεις, χωρίς αυτοματοποιημένες αλλαγές.', price: '$20 /μήνα' },
      { name: '+1 αυτοματοποιημένος διακομιστής', desc: 'Ένας ακόμη πλήρως αυτοματοποιημένος διακομιστής — έλεγχος, διορθώσεις και ενεργή απόκριση ITDR· προσθέτει 2 αποκρίσεις σε κυβερνοεπιθέσεις/μήνα.', price: '$350 /μήνα' },
      { name: '+1 θέση Cloud AI', desc: 'Μία ακόμη θέση για τον βοηθό Cloud AI.', price: '$50 /μήνα' },
      { name: '+1 θέση AI Studio', desc: 'Μία ακόμη θέση AI Studio (προγραμματισμός)· η χρήση χρεώνεται ανά token.', price: '$20–100 /μήνα' },
      { name: 'Επιπλέον απόκριση σε κυβερνοεπίθεση', desc: 'Πέρα από την περιλαμβανόμενη ποσόστωση των 2 ανά αυτοματοποιημένο διακομιστή / μήνα.', price: '$500 ανά περίπτωση' },
      { name: 'Εφάπαξ έλεγχος & διόρθωση', desc: 'Ένας εφάπαξ έλεγχος της κατάστασης του διακομιστή και διόρθωση των ευρημάτων, για διακομιστές σε λειτουργία παρακολούθησης (οι αυτοματοποιημένοι διακομιστές το λαμβάνουν συνεχώς). Ο πλήρης έλεγχος τρωτότητας χρεώνεται βάσει του τιμοκαταλόγου G-Tester, μείον 10% ως πελάτης Guardian Cloud.', price: '$100' },
    ],
    note: 'Ο κατάλογος πρόσθετων θα κυκλοφορήσει με την κυκλοφορία (Φάση 2).',
  },
};

export default function BillingAddons() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-3 md:grid-cols-2">
          {d.addons.map((a) => (
            <div key={a.name} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-white">{a.name}</span>
                <span className="flex-none text-sm font-bold text-cyan-300">{a.price}</span>
              </div>
              <p className="mt-1 text-sm text-white/55">{a.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-white/45">{d.note}</p>
      </div>
    </section>
  );
}
