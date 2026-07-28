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
    h: 'Platform vs a sysadmin team',
    lead: 'We don’t replace your judgment — we take the routine and the scale off your hands. The strategy and the final word on anything risky stay with you.',
    stats: [
      { big: '24/7/365', sub: 'always on — no shifts, no gaps' },
      { big: '100s–1000s', sub: 'servers per operator' },
      { big: 'Seconds', sub: 'to detect and act' },
    ],
    thHuman: 'Traditional team',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Coverage', '8 hours, shifts, night gaps', '24/7/365, no breaks'],
      ['Response', 'minutes to hours', 'seconds to minutes'],
      ['Scale', 'dozens of servers per admin', 'hundreds–thousands per operator'],
      ['Consistency', 'fatigue, slips of attention', 'the same quality every time'],
      ['Expertise', 'one or two clouds', 'AWS, GCP, Azure, on-prem & security at once'],
      ['Security', 'responds in business hours', 'instant detection & response, 24/7'],
      ['Learning', 'slow, siloed', 'daily briefings, shared experience'],
      ['Cost', 'salaries of a whole team', 'a fraction of it'],
      ['Audit', 'manual logs', 'a full service history'],
      ['Hiring & churn', 'search, onboard, attrition', 'instant, never quits'],
    ],
    closing: 'AI’s speed and scale — with your judgment on the loop. You get both.',
  },
  ru: {
    h: 'Платформа против команды сисадминов',
    lead: 'Мы не заменяем ваше суждение — мы снимаем с вас рутину и масштаб. Стратегия и последнее слово на рискованном остаются за вами.',
    stats: [
      { big: '24/7/365', sub: 'всегда на посту — без смен и дыр' },
      { big: 'Сотни–тысячи', sub: 'серверов на оператора' },
      { big: 'Секунды', sub: 'на реакцию' },
    ],
    thHuman: 'Традиционная команда',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Покрытие', '8 часов, дежурства, ночные дыры', '24/7/365, без перерывов'],
      ['Реакция', 'минуты–часы', 'секунды–минуты'],
      ['Масштаб', 'десятки серверов на админа', 'сотни–тысячи на оператора'],
      ['Стабильность', 'усталость, ошибки внимания', 'одинаковое качество всегда'],
      ['Экспертиза', 'одно-два облака', 'AWS, GCP, Azure, on-prem и кибербез сразу'],
      ['Безопасность', 'реакция в рабочее время', 'мгновенная детекция и отражение 24/7'],
      ['Обучение', 'медленно, разрозненно', 'ежедневные брифинги, общий опыт'],
      ['Стоимость', 'зарплаты целой команды', 'доля стоимости'],
      ['Аудит', 'ручные логи', 'полная История обслуживания'],
      ['Найм и текучка', 'поиск, онбординг, увольнения', 'мгновенно, не увольняется'],
    ],
    closing: 'Скорость и масштаб ИИ — и ваше суждение на петле. Вы получаете и то, и другое.',
  },
  zh: {
    h: '平台 vs 系統管理團隊',
    lead: '我們不取代您的判斷，而是替您卸下繁瑣與規模壓力。策略與高風險操作的最終決定權，始終掌握在您手中。',
    stats: [
      { big: '24/7/365', sub: '全年無休 — 無班次、無空窗' },
      { big: '數百至數千', sub: '每位操作員管理的伺服器' },
      { big: '數秒', sub: '完成偵測與行動' },
    ],
    thHuman: '傳統團隊',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['覆蓋時間', '每天 8 小時、輪班、夜間空窗', '全年無休 24/7，無中斷'],
      ['反應速度', '數分鐘至數小時', '數秒至數分鐘'],
      ['規模', '每位管理員數十台伺服器', '每位操作員數百至數千台'],
      ['穩定性', '疲勞、疏忽出錯', '始終如一的品質'],
      ['專業廣度', '一兩種雲端', 'AWS、GCP、Azure、地端與資安一次到位'],
      ['安全', '僅在上班時間回應', '24/7 即時偵測與反制'],
      ['學習', '緩慢、各自為政', '每日簡報、共享經驗'],
      ['成本', '整個團隊的薪資', '僅為其中一小部分'],
      ['稽核', '手動日誌', '完整的維運歷史'],
      ['招聘與流動', '招募、上手、離職', '即時上線，永不離職'],
    ],
    closing: 'AI 的速度與規模，加上您的判斷力 —— 兩者兼得。',
  },
  fr: {
    h: 'La plateforme face à une équipe de sysadmins',
    lead: 'Nous ne remplaçons pas votre jugement — nous vous déchargeons de la routine et de l’échelle. La stratégie et le dernier mot sur tout ce qui est risqué restent les vôtres.',
    stats: [
      { big: '24/7/365', sub: 'toujours actif — sans roulement ni faille' },
      { big: 'Centaines–milliers', sub: 'de serveurs par opérateur' },
      { big: 'Secondes', sub: 'pour détecter et agir' },
    ],
    thHuman: 'Équipe traditionnelle',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Couverture', '8 heures, roulements, trous nocturnes', '24/7/365, sans interruption'],
      ['Réaction', 'minutes à heures', 'secondes à minutes'],
      ['Échelle', 'dizaines de serveurs par admin', 'centaines à milliers par opérateur'],
      ['Constance', 'fatigue, baisses d’attention', 'la même qualité à chaque fois'],
      ['Expertise', 'un ou deux clouds', 'AWS, GCP, Azure, on-prem et sécurité à la fois'],
      ['Sécurité', 'réagit aux heures ouvrées', 'détection et réponse instantanées, 24/7'],
      ['Apprentissage', 'lent, cloisonné', 'briefings quotidiens, expérience partagée'],
      ['Coût', 'salaires d’une équipe entière', 'une fraction de ce coût'],
      ['Audit', 'journaux manuels', 'un historique de service complet'],
      ['Recrutement & turnover', 'recherche, intégration, attrition', 'instantané, ne démissionne jamais'],
    ],
    closing: 'La vitesse et l’échelle de l’IA — avec votre jugement dans la boucle. Vous avez les deux.',
  },
  de: {
    h: 'Plattform vs. Sysadmin-Team',
    lead: 'Wir ersetzen nicht Ihr Urteilsvermögen — wir nehmen Ihnen Routine und Skalierung ab. Strategie und das letzte Wort bei allem Riskanten bleiben bei Ihnen.',
    stats: [
      { big: '24/7/365', sub: 'immer im Einsatz — ohne Schichten, ohne Lücken' },
      { big: 'Hunderte–Tausende', sub: 'Server pro Operator' },
      { big: 'Sekunden', sub: 'bis Erkennung und Reaktion' },
    ],
    thHuman: 'Traditionelles Team',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Abdeckung', '8 Stunden, Schichten, Nachtlücken', '24/7/365, ohne Pausen'],
      ['Reaktion', 'Minuten bis Stunden', 'Sekunden bis Minuten'],
      ['Skalierung', 'Dutzende Server pro Admin', 'Hunderte bis Tausende pro Operator'],
      ['Konstanz', 'Ermüdung, Aufmerksamkeitsfehler', 'stets gleiche Qualität'],
      ['Expertise', 'ein bis zwei Clouds', 'AWS, GCP, Azure, on-prem und Security zugleich'],
      ['Sicherheit', 'reagiert zu Geschäftszeiten', 'sofortige Erkennung & Reaktion, 24/7'],
      ['Lernen', 'langsam, isoliert', 'tägliche Briefings, geteilte Erfahrung'],
      ['Kosten', 'Gehälter eines ganzen Teams', 'ein Bruchteil davon'],
      ['Audit', 'manuelle Logs', 'vollständige Service-Historie'],
      ['Einstellung & Fluktuation', 'Suche, Onboarding, Fluktuation', 'sofort verfügbar, kündigt nie'],
    ],
    closing: 'Geschwindigkeit und Skalierung von KI — mit Ihrem Urteilsvermögen im Loop. Sie bekommen beides.',
  },
  es: {
    h: 'La plataforma frente a un equipo de sysadmins',
    lead: 'No sustituimos su criterio: le quitamos de encima la rutina y la escala. La estrategia y la última palabra sobre lo arriesgado siguen siendo suyas.',
    stats: [
      { big: '24/7/365', sub: 'siempre activo — sin turnos ni huecos' },
      { big: 'Cientos–miles', sub: 'de servidores por operador' },
      { big: 'Segundos', sub: 'para detectar y actuar' },
    ],
    thHuman: 'Equipo tradicional',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Cobertura', '8 horas, turnos, huecos nocturnos', '24/7/365, sin interrupciones'],
      ['Respuesta', 'minutos a horas', 'segundos a minutos'],
      ['Escala', 'decenas de servidores por admin', 'cientos a miles por operador'],
      ['Consistencia', 'fatiga, fallos de atención', 'la misma calidad siempre'],
      ['Experiencia', 'una o dos nubes', 'AWS, GCP, Azure, on-prem y seguridad a la vez'],
      ['Seguridad', 'responde en horario laboral', 'detección y respuesta instantáneas, 24/7'],
      ['Aprendizaje', 'lento, aislado', 'informes diarios, experiencia compartida'],
      ['Costo', 'salarios de todo un equipo', 'una fracción de eso'],
      ['Auditoría', 'registros manuales', 'historial de servicio completo'],
      ['Contratación y rotación', 'búsqueda, incorporación, bajas', 'instantáneo, nunca renuncia'],
    ],
    closing: 'La velocidad y escala de la IA, con su criterio en el bucle. Obtiene ambas cosas.',
  },
  it: {
    h: 'La piattaforma contro un team di sysadmin',
    lead: 'Non sostituiamo il vostro giudizio: vi togliamo di mano la routine e la scala. La strategia e l’ultima parola su tutto ciò che è rischioso restano vostre.',
    stats: [
      { big: '24/7/365', sub: 'sempre attivo — senza turni né vuoti' },
      { big: 'Centinaia–migliaia', sub: 'di server per operatore' },
      { big: 'Secondi', sub: 'per rilevare e agire' },
    ],
    thHuman: 'Team tradizionale',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Copertura', '8 ore, turni, vuoti notturni', '24/7/365, senza interruzioni'],
      ['Reazione', 'da minuti a ore', 'da secondi a minuti'],
      ['Scala', 'decine di server per admin', 'centinaia–migliaia per operatore'],
      ['Costanza', 'affaticamento, cali di attenzione', 'stessa qualità ogni volta'],
      ['Competenza', 'uno o due cloud', 'AWS, GCP, Azure, on-prem e sicurezza insieme'],
      ['Sicurezza', 'risponde in orario lavorativo', 'rilevamento e risposta istantanei, 24/7'],
      ['Apprendimento', 'lento, isolato', 'briefing quotidiani, esperienza condivisa'],
      ['Costo', 'stipendi di un intero team', 'una frazione di quel costo'],
      ['Audit', 'log manuali', 'cronologia completa del servizio'],
      ['Assunzioni e turnover', 'ricerca, onboarding, attrito', 'istantaneo, non si dimette mai'],
    ],
    closing: 'Velocità e scala dell’IA, con il vostro giudizio nel ciclo. Ottenete entrambe le cose.',
  },
  ja: {
    h: 'プラットフォーム vs システム管理チーム',
    lead: '私たちはあなたの判断力を置き換えるのではなく、ルーティン作業と規模の負担を取り除きます。戦略とリスクを伴う判断の最終決定権は常にあなたにあります。',
    stats: [
      { big: '24時間365日', sub: '常時稼働——シフトも空白もなし' },
      { big: '数百〜数千台', sub: 'オペレーター1人あたりのサーバー数' },
      { big: '数秒', sub: '検知から対応まで' },
    ],
    thHuman: '従来のチーム',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['対応時間', '1日8時間、シフト制、夜間の空白', '24時間365日、休みなし'],
      ['対応速度', '数分〜数時間', '数秒〜数分'],
      ['規模', '管理者1人あたり数十台', 'オペレーター1人あたり数百〜数千台'],
      ['一貫性', '疲労や注意力の低下', '常に同じ品質'],
      ['専門性', '1〜2つのクラウド', 'AWS、GCP、Azure、オンプレ、セキュリティを同時に'],
      ['セキュリティ', '営業時間内の対応', '24時間即時検知・対応'],
      ['学習', '遅く、属人的', '毎日のブリーフィング、経験の共有'],
      ['コスト', 'チーム全体の給与', 'その一部のコスト'],
      ['監査', '手動ログ', '完全なサービス履歴'],
      ['採用と離職', '採用活動、オンボーディング、離職', '即時対応、離職なし'],
    ],
    closing: 'AIの速度とスケール——そしてあなたの判断がループの中に。両方を手に入れられます。',
  },
  uk: {
    h: 'Платформа проти команди сисадмінів',
    lead: 'Ми не замінюємо ваше судження — ми знімаємо з вас рутину та масштаб. Стратегія та останнє слово щодо ризикованого залишаються за вами.',
    stats: [
      { big: '24/7/365', sub: 'завжди на посту — без змін і прогалин' },
      { big: 'Сотні–тисячі', sub: 'серверів на оператора' },
      { big: 'Секунди', sub: 'на виявлення та реакцію' },
    ],
    thHuman: 'Традиційна команда',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Покриття', '8 годин, чергування, нічні прогалини', '24/7/365, без перерв'],
      ['Реакція', 'хвилини–години', 'секунди–хвилини'],
      ['Масштаб', 'десятки серверів на адміна', 'сотні–тисячі на оператора'],
      ['Стабільність', 'втома, помилки уваги', 'однакова якість завжди'],
      ['Експертиза', 'одна-дві хмари', 'AWS, GCP, Azure, on-prem і безпека одразу'],
      ['Безпека', 'реакція в робочий час', 'миттєве виявлення й відбиття 24/7'],
      ['Навчання', 'повільно, розрізнено', 'щоденні брифінги, спільний досвід'],
      ['Вартість', 'зарплати цілої команди', 'частка вартості'],
      ['Аудит', 'ручні логи', 'повна історія обслуговування'],
      ['Найм і плинність', 'пошук, онбординг, звільнення', 'миттєво, не звільняється'],
    ],
    closing: 'Швидкість і масштаб ШІ — і ваше судження в контурі. Ви отримуєте і те, і інше.',
  },
  sr: {
    h: 'Platforma protiv tima sistem administratora',
    lead: 'Ne zamenjujemo vašu procenu — skidamo vam sa vrata rutinu i obim. Strategija i poslednja reč o svemu rizičnom ostaju kod vas.',
    stats: [
      { big: '24/7/365', sub: 'uvek aktivan — bez smena i praznina' },
      { big: 'Stotine–hiljade', sub: 'servera po operateru' },
      { big: 'Sekunde', sub: 'za detekciju i reakciju' },
    ],
    thHuman: 'Tradicionalni tim',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Pokrivenost', '8 sati, smene, noćne praznine', '24/7/365, bez prekida'],
      ['Reakcija', 'minuti do sati', 'sekunde do minuta'],
      ['Obim', 'desetine servera po administratoru', 'stotine–hiljade po operateru'],
      ['Doslednost', 'umor, greške pažnje', 'isti kvalitet svaki put'],
      ['Stručnost', 'jedan ili dva clouda', 'AWS, GCP, Azure, on-prem i bezbednost odjednom'],
      ['Bezbednost', 'reaguje u radno vreme', 'trenutna detekcija i odgovor, 24/7'],
      ['Učenje', 'sporo, izolovano', 'dnevni brifinzi, deljeno iskustvo'],
      ['Trošak', 'plate celog tima', 'delić toga'],
      ['Revizija', 'ručni logovi', 'kompletna istorija servisa'],
      ['Zapošljavanje i fluktuacija', 'traženje, uvođenje, odlasci', 'trenutno, nikad ne odustaje'],
    ],
    closing: 'Brzina i obim AI — uz vašu procenu u petlji. Dobijate oboje.',
  },
  pt: {
    h: 'A plataforma vs. uma equipa de sysadmins',
    lead: 'Não substituímos o seu julgamento — retiramos-lhe a rotina e a escala. A estratégia e a última palavra sobre o que é arriscado continuam a ser suas.',
    stats: [
      { big: '24/7/365', sub: 'sempre ativo — sem turnos, sem falhas' },
      { big: 'Centenas–milhares', sub: 'de servidores por operador' },
      { big: 'Segundos', sub: 'para detetar e agir' },
    ],
    thHuman: 'Equipa tradicional',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Cobertura', '8 horas, turnos, falhas noturnas', '24/7/365, sem interrupções'],
      ['Resposta', 'minutos a horas', 'segundos a minutos'],
      ['Escala', 'dezenas de servidores por admin', 'centenas a milhares por operador'],
      ['Consistência', 'fadiga, falhas de atenção', 'a mesma qualidade sempre'],
      ['Especialização', 'uma ou duas clouds', 'AWS, GCP, Azure, on-prem e segurança em conjunto'],
      ['Segurança', 'responde em horário comercial', 'deteção e resposta instantâneas, 24/7'],
      ['Aprendizagem', 'lenta, isolada', 'briefings diários, experiência partilhada'],
      ['Custo', 'salários de uma equipa inteira', 'uma fração disso'],
      ['Auditoria', 'registos manuais', 'histórico de serviço completo'],
      ['Contratação e rotatividade', 'procura, integração, saídas', 'instantâneo, nunca se demite'],
    ],
    closing: 'A velocidade e a escala da IA — com o seu julgamento no ciclo. Tem os dois.',
  },
  hi: {
    h: 'प्लेटफ़ॉर्म बनाम सिसएडमिन टीम',
    lead: 'हम आपके निर्णय की जगह नहीं लेते — हम आपसे रूटीन और स्केल का बोझ हटाते हैं। रणनीति और जोखिम भरे मामलों पर अंतिम निर्णय हमेशा आपका होता है।',
    stats: [
      { big: '24/7/365', sub: 'हमेशा सक्रिय — बिना शिफ्ट, बिना अंतराल' },
      { big: 'सैकड़ों–हज़ारों', sub: 'प्रति ऑपरेटर सर्वर' },
      { big: 'सेकंड', sub: 'पहचान और कार्रवाई में' },
    ],
    thHuman: 'पारंपरिक टीम',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['कवरेज', '8 घंटे, शिफ्ट, रात के अंतराल', '24/7/365, बिना रुकावट'],
      ['प्रतिक्रिया', 'मिनटों से घंटों तक', 'सेकंड से मिनटों तक'],
      ['स्केल', 'प्रति एडमिन दर्जनों सर्वर', 'प्रति ऑपरेटर सैकड़ों–हज़ारों'],
      ['निरंतरता', 'थकान, ध्यान चूकना', 'हर बार एक जैसी गुणवत्ता'],
      ['विशेषज्ञता', 'एक या दो क्लाउड', 'AWS, GCP, Azure, on-prem और सुरक्षा एक साथ'],
      ['सुरक्षा', 'कार्यालय समय में प्रतिक्रिया', 'तुरंत पहचान और प्रतिक्रिया, 24/7'],
      ['सीखना', 'धीमा, अलग-थलग', 'रोज़ाना ब्रीफिंग, साझा अनुभव'],
      ['लागत', 'पूरी टीम का वेतन', 'उसका एक अंश'],
      ['ऑडिट', 'मैनुअल लॉग', 'पूरी सेवा इतिहास'],
      ['भर्ती और टर्नओवर', 'खोज, ऑनबोर्डिंग, इस्तीफे', 'तुरंत, कभी इस्तीफा नहीं देता'],
    ],
    closing: 'AI की गति और स्केल — साथ में आपका निर्णय भी। आपको दोनों मिलते हैं।',
  },
  tr: {
    h: 'Platform ile sistem yöneticisi ekibi karşılaştırması',
    lead: 'Kararınızın yerini almıyoruz — rutini ve ölçeği elinizden alıyoruz. Strateji ve riskli her konudaki son söz her zaman sizde kalır.',
    stats: [
      { big: '24/7/365', sub: 'her zaman aktif — vardiyasız, boşluksuz' },
      { big: 'Yüzlerce–binlerce', sub: 'operatör başına sunucu' },
      { big: 'Saniyeler', sub: 'içinde tespit ve müdahale' },
    ],
    thHuman: 'Geleneksel ekip',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Kapsam', '8 saat, vardiyalar, gece boşlukları', '24/7/365, kesintisiz'],
      ['Tepki süresi', 'dakikalar–saatler', 'saniyeler–dakikalar'],
      ['Ölçek', 'yönetici başına düzinelerce sunucu', 'operatör başına yüzlerce–binlerce'],
      ['Tutarlılık', 'yorgunluk, dikkat kaymaları', 'her seferinde aynı kalite'],
      ['Uzmanlık', 'bir veya iki bulut', 'AWS, GCP, Azure, on-prem ve güvenlik bir arada'],
      ['Güvenlik', 'mesai saatlerinde yanıt verir', 'anlık tespit ve müdahale, 7/24'],
      ['Öğrenme', 'yavaş, izole', 'günlük brifingler, paylaşılan deneyim'],
      ['Maliyet', 'tüm bir ekibin maaşları', 'bunun bir kısmı'],
      ['Denetim', 'manuel kayıtlar', 'tam hizmet geçmişi'],
      ['İşe alım ve devir', 'arama, işe alıştırma, ayrılmalar', 'anında, asla istifa etmez'],
    ],
    closing: 'Yapay zekanın hızı ve ölçeği — kararınız döngünün içinde. İkisini birden alıyorsunuz.',
  },
  ar: {
    h: 'المنصة مقابل فريق مسؤولي الأنظمة',
    lead: 'نحن لا نحل محل حكمك — بل نرفع عنك عبء الروتين والحجم. تبقى الاستراتيجية والكلمة الأخيرة في أي أمر محفوف بالمخاطر بيدك.',
    stats: [
      { big: '24/7/365', sub: 'يعمل دائمًا — بلا نوبات وبلا فجوات' },
      { big: 'مئات–آلاف', sub: 'الخوادم لكل مشغّل' },
      { big: 'ثوانٍ', sub: 'للكشف والتصرف' },
    ],
    thHuman: 'فريق تقليدي',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['التغطية', '8 ساعات، نوبات، فجوات ليلية', '24/7/365، بلا انقطاع'],
      ['الاستجابة', 'دقائق إلى ساعات', 'ثوانٍ إلى دقائق'],
      ['الحجم', 'عشرات الخوادم لكل مسؤول', 'مئات إلى آلاف لكل مشغّل'],
      ['الاتساق', 'الإرهاق وزلات الانتباه', 'نفس الجودة في كل مرة'],
      ['الخبرة', 'سحابة أو سحابتان', 'AWS وGCP وAzure والبنية المحلية والأمن معًا'],
      ['الأمن', 'يستجيب خلال ساعات العمل', 'كشف واستجابة فوريان، 24/7'],
      ['التعلّم', 'بطيء ومعزول', 'إحاطات يومية وخبرة مشتركة'],
      ['التكلفة', 'رواتب فريق كامل', 'جزء يسير من ذلك'],
      ['التدقيق', 'سجلات يدوية', 'سجل خدمة كامل'],
      ['التوظيف ودوران الموظفين', 'بحث وتأهيل واستقالات', 'فوري، لا يستقيل أبدًا'],
    ],
    closing: 'سرعة الذكاء الاصطناعي وحجمه — مع حكمك ضمن الحلقة. تحصل على الاثنين معًا.',
  },
  el: {
    h: 'Η πλατφόρμα έναντι μιας ομάδας sysadmin',
    lead: 'Δεν αντικαθιστούμε την κρίση σας — σας απαλλάσσουμε από τη ρουτίνα και την κλίμακα. Η στρατηγική και ο τελευταίος λόγος σε οτιδήποτε ρισκάρει παραμένουν δικά σας.',
    stats: [
      { big: '24/7/365', sub: 'πάντα ενεργό — χωρίς βάρδιες, χωρίς κενά' },
      { big: 'Εκατοντάδες–χιλιάδες', sub: 'διακομιστές ανά χειριστή' },
      { big: 'Δευτερόλεπτα', sub: 'για εντοπισμό και δράση' },
    ],
    thHuman: 'Παραδοσιακή ομάδα',
    thPlatform: 'Guardian Cloud',
    rows: [
      ['Κάλυψη', '8 ώρες, βάρδιες, νυχτερινά κενά', '24/7/365, χωρίς διακοπές'],
      ['Απόκριση', 'λεπτά έως ώρες', 'δευτερόλεπτα έως λεπτά'],
      ['Κλίμακα', 'δεκάδες διακομιστές ανά admin', 'εκατοντάδες–χιλιάδες ανά χειριστή'],
      ['Συνέπεια', 'κόπωση, πτώση προσοχής', 'ίδια ποιότητα κάθε φορά'],
      ['Εξειδίκευση', 'ένα ή δύο cloud', 'AWS, GCP, Azure, on-prem και ασφάλεια ταυτόχρονα'],
      ['Ασφάλεια', 'ανταποκρίνεται σε εργάσιμες ώρες', 'άμεσος εντοπισμός & απόκριση, 24/7'],
      ['Μάθηση', 'αργή, αποσπασματική', 'καθημερινά briefings, κοινή εμπειρία'],
      ['Κόστος', 'μισθοί ολόκληρης ομάδας', 'ένα κλάσμα αυτού'],
      ['Έλεγχος', 'χειροκίνητα logs', 'πλήρες ιστορικό υπηρεσίας'],
      ['Προσλήψεις & αποχωρήσεις', 'αναζήτηση, ένταξη, αποχωρήσεις', 'άμεσο, ποτέ δεν παραιτείται'],
    ],
    closing: 'Η ταχύτητα και η κλίμακα του AI — με την κρίση σας μέσα στον βρόχο. Κερδίζετε και τα δύο.',
  },
};

export default function SysadminAdvantages() {
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
              className="rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-cyan-900/30 to-gray-900/30 p-6 text-center shadow-[0_6px_20px_rgba(34,211,238,0.18)]"
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

        <p className="mt-8 rounded-xl border border-cyan-500/30 bg-gradient-to-b from-cyan-900/20 to-gray-900/20 p-5 text-center text-lg font-medium text-white/90">
          {d.closing}
        </p>
      </div>
    </section>
  );
}
