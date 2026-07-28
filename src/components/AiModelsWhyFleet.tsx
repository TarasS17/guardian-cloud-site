'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Card = { h: string; items: string[] };
type Data = { h: string; lead: string; cards: Card[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'Why a fleet, not one model',
    lead: 'Separation is a safety and quality decision, not an accident of history.',
    cards: [
      { h: 'Right tool, right job', items: ['Fast 4B models detect; deep models reason', 'Command models are platform-aware (AWS / GCP / Azure / on-prem)', 'Source-code models are kept separate from sysadmin models', 'Each model is tuned for one job — and good at it'] },
      { h: 'Self-hosted by default', items: ['Models run on GPU inside your operating region', 'Your telemetry and code stay within the contour', 'The ITDR contour is fully air-gapped', 'No external dependency — validation is self-hosted too'] },
      { h: 'Separation is safety', items: ['Sysadmin models generate shell commands only', 'Source-code changes go through a separate generator + reviewer', 'An officer reviews every command before it runs', 'Doctrine retrieval is its own embedding model'] },
      { h: 'A dedicated check on high risk', items: ['GLM-5.2 (self-hosted) reviews the riskiest changes', 'Consulted only at MEDIUM / HIGH risk — never on every change', 'A second, independent opinion before anything irreversible', 'You keep the final word'] },
    ],
  },
  ru: {
    h: 'Почему парк, а не одна модель',
    lead: 'Разделение — это решение про безопасность и качество, а не случайность истории.',
    cards: [
      { h: 'Каждой задаче — своя модель', items: ['Быстрые 4B детектят; глубокие модели рассуждают', 'Командные модели знают платформу (AWS / GCP / Azure / on-prem)', 'Модели исходного кода отделены от сисадминских', 'Каждая модель заточена под одну задачу — и хороша в ней'] },
      { h: 'Self-hosted по умолчанию', items: ['Модели работают на GPU в вашем регионе', 'Ваша телеметрия и код остаются внутри контура', 'Контур ITDR полностью изолирован (air-gapped)', 'Внешних зависимостей нет — валидация тоже self-hosted'] },
      { h: 'Разделение = безопасность', items: ['Сисадминские модели генерируют только shell-команды', 'Изменения кода идут через отдельный генератор + ревьюер', 'Офицер проверяет каждую команду до исполнения', 'Поиск по доктрине — это своя embedding-модель'] },
      { h: 'Отдельная проверка на риске', items: ['GLM-5.2 (self-hosted) проверяет самые рискованные изменения', 'Подключается только на MEDIUM / HIGH риске — не на каждом', 'Второе независимое мнение перед необратимым', 'Последнее слово остаётся за вами'] },
    ],
  },
  zh: {
    h: '為何是艦隊，而非單一模型',
    lead: '分離是一項關於安全與品質的決策，而非歷史的偶然。',
    cards: [
      { h: '專事專模', items: ['輕量 4B 模型負責偵測；深度模型負責推理', '指令模型貼合平台（AWS / GCP / Azure / 地端）', '原始碼模型與系統管理模型分離', '每個模型只專注一件事——並做到極致'] },
      { h: '預設自託管', items: ['模型運行於您所在區域的 GPU 上', '您的遙測數據與程式碼留在防禦邊界內', 'ITDR 防禦鏈完全隔離（air-gapped）', '無外部依賴——驗證同樣自託管'] },
      { h: '分離即安全', items: ['系統管理模型僅生成 shell 指令', '程式碼變更經由獨立的生成器 + 審查器', '安全官在每條指令執行前進行審查', '知識庫檢索使用專屬嵌入模型'] },
      { h: '高風險時的專屬把關', items: ['GLM-5.2（自託管）審查風險最高的變更', '僅在 MEDIUM / HIGH 風險時引入——而非每次', '在任何不可逆操作前提供第二個獨立意見', '最終決定權始終屬於您'] },
    ],
  },
  fr: {
    h: 'Pourquoi une flotte, pas un seul modèle',
    lead: "La séparation est une décision de sécurité et de qualité, pas un accident de l'histoire.",
    cards: [
      { h: 'Le bon outil pour la bonne tâche', items: ['Des modèles 4B rapides détectent ; des modèles profonds raisonnent', 'Les modèles de commandes connaissent la plateforme (AWS / GCP / Azure / on-prem)', 'Les modèles de code source sont séparés des modèles sysadmin', 'Chaque modèle est ajusté pour une tâche — et y excelle'] },
      { h: 'Auto-hébergé par défaut', items: ['Les modèles tournent sur GPU dans votre région d\'exploitation', 'Votre télémétrie et votre code restent dans le périmètre', 'Le périmètre ITDR est entièrement isolé (air-gapped)', 'Aucune dépendance externe — la validation est aussi auto-hébergée'] },
      { h: 'La séparation, c\'est la sécurité', items: ['Les modèles sysadmin génèrent uniquement des commandes shell', 'Les changements de code source passent par un générateur + réviseur distinct', 'Un officer vérifie chaque commande avant exécution', 'La récupération de la doctrine a son propre modèle d\'embedding'] },
      { h: 'Un contrôle dédié sur les risques élevés', items: ['GLM-5.2 (auto-hébergé) examine les changements les plus risqués', 'Consulté uniquement en risque MEDIUM / HIGH — jamais à chaque changement', 'Un second avis indépendant avant tout ce qui est irréversible', 'Vous gardez le dernier mot'] },
    ],
  },
  de: {
    h: 'Warum eine Flotte, kein Einzelmodell',
    lead: 'Trennung ist eine Sicherheits- und Qualitätsentscheidung, kein Zufall der Geschichte.',
    cards: [
      { h: 'Das richtige Werkzeug für die richtige Aufgabe', items: ['Schnelle 4B-Modelle erkennen; tiefe Modelle schlussfolgern', 'Befehlsmodelle sind plattformbewusst (AWS / GCP / Azure / On-Prem)', 'Quellcode-Modelle sind von Sysadmin-Modellen getrennt', 'Jedes Modell ist auf eine Aufgabe abgestimmt — und darin gut'] },
      { h: 'Standardmäßig selbst gehostet', items: ['Modelle laufen auf GPU in Ihrer Betriebsregion', 'Ihre Telemetrie und Ihr Code bleiben innerhalb der Umgebung', 'Die ITDR-Umgebung ist vollständig air-gapped', 'Keine externe Abhängigkeit — auch die Validierung ist selbst gehostet'] },
      { h: 'Trennung ist Sicherheit', items: ['Sysadmin-Modelle generieren ausschließlich Shell-Befehle', 'Quellcode-Änderungen laufen über einen separaten Generator + Reviewer', 'Ein Officer prüft jeden Befehl vor der Ausführung', 'Die Doktrin-Suche hat ihr eigenes Embedding-Modell'] },
      { h: 'Eine dedizierte Prüfung bei hohem Risiko', items: ['GLM-5.2 (selbst gehostet) prüft die riskantesten Änderungen', 'Nur bei MEDIUM- / HIGH-Risiko hinzugezogen — nie bei jeder Änderung', 'Eine zweite, unabhängige Meinung vor allem Irreversiblen', 'Sie behalten das letzte Wort'] },
    ],
  },
  es: {
    h: 'Por qué una flota, no un solo modelo',
    lead: 'La separación es una decisión de seguridad y calidad, no un accidente de la historia.',
    cards: [
      { h: 'La herramienta adecuada para cada tarea', items: ['Los modelos 4B rápidos detectan; los modelos profundos razonan', 'Los modelos de comandos conocen la plataforma (AWS / GCP / Azure / on-prem)', 'Los modelos de código fuente están separados de los modelos sysadmin', 'Cada modelo está ajustado para una tarea — y es bueno en ella'] },
      { h: 'Autoalojado por defecto', items: ['Los modelos se ejecutan en GPU dentro de su región operativa', 'Su telemetría y código permanecen dentro del perímetro', 'El perímetro ITDR está completamente aislado (air-gapped)', 'Sin dependencias externas — la validación también es autoalojada'] },
      { h: 'La separación es seguridad', items: ['Los modelos sysadmin solo generan comandos shell', 'Los cambios de código fuente pasan por un generador + revisor independiente', 'Un officer revisa cada comando antes de ejecutarlo', 'La recuperación de doctrina tiene su propio modelo de embedding'] },
      { h: 'Una verificación dedicada en alto riesgo', items: ['GLM-5.2 (autoalojado) revisa los cambios más riesgosos', 'Se consulta solo en riesgo MEDIUM / HIGH — nunca en cada cambio', 'Una segunda opinión independiente antes de cualquier acción irreversible', 'Usted conserva la última palabra'] },
    ],
  },
  it: {
    h: 'Perché una flotta, non un solo modello',
    lead: 'La separazione è una decisione di sicurezza e qualità, non un caso della storia.',
    cards: [
      { h: 'Lo strumento giusto per il compito giusto', items: ['I modelli 4B veloci rilevano; i modelli profondi ragionano', 'I modelli di comando conoscono la piattaforma (AWS / GCP / Azure / on-prem)', 'I modelli di codice sorgente sono separati dai modelli sysadmin', 'Ogni modello è ottimizzato per un compito — ed è bravo in quello'] },
      { h: 'Self-hosted di default', items: ['I modelli girano su GPU nella vostra regione operativa', 'La vostra telemetria e il codice restano nel perimetro', 'Il perimetro ITDR è completamente isolato (air-gapped)', 'Nessuna dipendenza esterna — anche la validazione è self-hosted'] },
      { h: 'La separazione è sicurezza', items: ['I modelli sysadmin generano solo comandi shell', 'Le modifiche al codice sorgente passano da un generatore + revisore separato', 'Un officer verifica ogni comando prima dell\'esecuzione', 'Il recupero della dottrina ha un proprio modello di embedding'] },
      { h: 'Un controllo dedicato sui rischi elevati', items: ['GLM-5.2 (self-hosted) esamina le modifiche più rischiose', 'Consultato solo su rischio MEDIUM / HIGH — mai su ogni modifica', 'Un secondo parere indipendente prima di qualsiasi azione irreversibile', 'L\'ultima parola resta a voi'] },
    ],
  },
  ja: {
    h: 'なぜ艦隊なのか、単一モデルではなく',
    lead: '分離は安全性と品質のための決定であり、歴史の偶然ではありません。',
    cards: [
      { h: '適材適所', items: ['高速な4Bモデルが検知し、深いモデルが推論する', 'コマンドモデルはプラットフォームを理解する（AWS / GCP / Azure / オンプレミス）', 'ソースコードモデルはシステム管理モデルと分離されている', '各モデルは一つの任務に特化し、それを高い精度でこなす'] },
      { h: 'デフォルトで自社ホスト', items: ['モデルはお客様の運用リージョン内のGPUで稼働', 'テレメトリとコードは境界内にとどまる', 'ITDR環境は完全にエアギャップされている', '外部依存なし——検証も自社ホスト'] },
      { h: '分離が安全性である', items: ['システム管理モデルはシェルコマンドのみを生成', 'ソースコードの変更は専用の生成モデル＋レビューモデルを経由', 'すべてのコマンドは実行前にオフィサーが確認', 'ドクトリン検索は専用の埋め込みモデルが担う'] },
      { h: '高リスク時の専用チェック', items: ['GLM-5.2（自社ホスト）が最もリスクの高い変更を確認', 'MEDIUM / HIGH リスクの場合のみ参照——毎回ではない', '不可逆な操作の前に第二の独立した見解を提供', '最終判断は常にお客様に委ねられる'] },
    ],
  },
  uk: {
    h: 'Чому флот, а не одна модель',
    lead: 'Розділення — це рішення про безпеку та якість, а не випадковість історії.',
    cards: [
      { h: 'Кожному завданню — свою модель', items: ['Швидкі 4B моделі виявляють; глибокі моделі міркують', 'Командні моделі знають платформу (AWS / GCP / Azure / on-prem)', 'Моделі вихідного коду відокремлені від моделей sysadmin', 'Кожна модель заточена під одне завдання — і добре з ним справляється'] },
      { h: 'Self-hosted за замовчуванням', items: ['Моделі працюють на GPU у вашому операційному регіоні', 'Ваша телеметрія та код залишаються всередині контуру', 'Контур ITDR повністю ізольований (air-gapped)', 'Жодних зовнішніх залежностей — валідація теж self-hosted'] },
      { h: 'Розділення = безпека', items: ['Моделі sysadmin генерують лише shell-команди', 'Зміни коду проходять через окремий генератор + рев\'юер', 'Офіцер перевіряє кожну команду до виконання', 'Пошук за доктриною має власну embedding-модель'] },
      { h: 'Окрема перевірка на високому ризику', items: ['GLM-5.2 (self-hosted) перевіряє найризикованіші зміни', 'Підключається лише при MEDIUM / HIGH ризику — не на кожній зміні', 'Друга незалежна думка перед будь-якою незворотною дією', 'Останнє слово залишається за вами'] },
    ],
  },
  sr: {
    h: 'Зашто флота, а не један модел',
    lead: 'Раздвајање је одлука о безбедности и квалитету, а не случајност историје.',
    cards: [
      { h: 'Прави алат за прави посао', items: ['Брзи 4B модели детектују; дубоки модели закључују', 'Командни модели познају платформу (AWS / GCP / Azure / on-prem)', 'Модели изворног кода одвојени су од sysadmin модела', 'Сваки модел је прилагођен једном задатку — и добар је у томе'] },
      { h: 'Self-hosted по подразумеваном', items: ['Модели раде на GPU у вашем оперативном региону', 'Ваша телеметрија и код остају унутар периметра', 'ITDR периметар је потпуно изолован (air-gapped)', 'Нема спољних зависности — валидација је такође self-hosted'] },
      { h: 'Раздвајање је безбедност', items: ['Sysadmin модели генеришу само shell команде', 'Промене изворног кода пролазе кроз посебан генератор + рецензента', 'Официр проверава сваку команду пре извршења', 'Претрага доктрине има сопствени embedding модел'] },
      { h: 'Посебна провера код високог ризика', items: ['GLM-5.2 (self-hosted) прегледа најризичније промене', 'Консултује се само код MEDIUM / HIGH ризика — не код сваке промене', 'Друго, независно мишљење пре сваке неповратне радње', 'Последња реч остаје вама'] },
    ],
  },
  pt: {
    h: 'Por que uma frota, não um único modelo',
    lead: 'A separação é uma decisão de segurança e qualidade, não um acidente da história.',
    cards: [
      { h: 'A ferramenta certa para a tarefa certa', items: ['Modelos 4B rápidos detectam; modelos profundos raciocinam', 'Modelos de comando conhecem a plataforma (AWS / GCP / Azure / on-prem)', 'Modelos de código-fonte ficam separados dos modelos sysadmin', 'Cada modelo é ajustado para uma tarefa — e é bom nela'] },
      { h: 'Auto-hospedado por padrão', items: ['Os modelos rodam em GPU dentro da sua região operacional', 'Sua telemetria e código permanecem dentro do perímetro', 'O perímetro ITDR é totalmente isolado (air-gapped)', 'Sem dependência externa — a validação também é auto-hospedada'] },
      { h: 'Separação é segurança', items: ['Os modelos sysadmin geram apenas comandos shell', 'Mudanças de código-fonte passam por um gerador + revisor separado', 'Um officer revisa cada comando antes da execução', 'A busca de doutrina tem seu próprio modelo de embedding'] },
      { h: 'Uma verificação dedicada em alto risco', items: ['O GLM-5.2 (auto-hospedado) revisa as mudanças mais arriscadas', 'Consultado apenas em risco MEDIUM / HIGH — nunca em toda mudança', 'Uma segunda opinião independente antes de qualquer ação irreversível', 'A última palavra é sempre sua'] },
    ],
  },
  hi: {
    h: 'एक मॉडल क्यों नहीं, बेड़ा क्यों',
    lead: 'यह अलगाव सुरक्षा और गुणवत्ता का निर्णय है, इतिहास की कोई दुर्घटना नहीं।',
    cards: [
      { h: 'सही काम के लिए सही उपकरण', items: ['तेज़ 4B मॉडल डिटेक्ट करते हैं; गहरे मॉडल तर्क करते हैं', 'कमांड मॉडल प्लेटफ़ॉर्म को समझते हैं (AWS / GCP / Azure / ऑन-प्रेम)', 'सोर्स-कोड मॉडल sysadmin मॉडलों से अलग रखे जाते हैं', 'हर मॉडल एक काम के लिए ट्यून किया गया है — और उसमें माहिर है'] },
      { h: 'डिफ़ॉल्ट रूप से सेल्फ़-होस्टेड', items: ['मॉडल आपके परिचालन क्षेत्र के भीतर GPU पर चलते हैं', 'आपकी टेलीमेट्री और कोड परिधि के भीतर ही रहते हैं', 'ITDR परिधि पूरी तरह एयर-गैप्ड है', 'कोई बाहरी निर्भरता नहीं — सत्यापन भी सेल्फ़-होस्टेड है'] },
      { h: 'अलगाव ही सुरक्षा है', items: ['Sysadmin मॉडल केवल शेल कमांड जनरेट करते हैं', 'सोर्स-कोड बदलाव एक अलग जनरेटर + रिव्यूअर से होकर गुजरते हैं', 'हर कमांड चलाने से पहले एक ऑफ़िसर उसकी समीक्षा करता है', 'सिद्धांत (doctrine) की खोज का अपना अलग एम्बेडिंग मॉडल है'] },
      { h: 'उच्च जोखिम पर एक समर्पित जांच', items: ['GLM-5.2 (सेल्फ़-होस्टेड) सबसे जोखिम भरे बदलावों की समीक्षा करता है', 'केवल MEDIUM / HIGH जोखिम पर परामर्श किया जाता है — हर बदलाव पर नहीं', 'किसी भी अपरिवर्तनीय कार्रवाई से पहले एक दूसरी, स्वतंत्र राय', 'अंतिम निर्णय हमेशा आपके पास रहता है'] },
    ],
  },
  tr: {
    h: 'Neden tek model değil, filo',
    lead: 'Ayrım, tarihin bir tesadüfü değil; bir güvenlik ve kalite kararıdır.',
    cards: [
      { h: 'Doğru iş için doğru araç', items: ["Hızlı 4B modeller tespit eder; derin modeller akıl yürütür", 'Komut modelleri platformu tanır (AWS / GCP / Azure / on-prem)', 'Kaynak kodu modelleri sysadmin modellerinden ayrı tutulur', 'Her model tek bir iş için ayarlanmıştır — ve o işte iyidir'] },
      { h: 'Varsayılan olarak self-hosted', items: ["Modeller operasyon bölgenizdeki GPU'larda çalışır", 'Telemetriniz ve kodunuz çevre içinde kalır', 'ITDR çevresi tamamen hava boşluklu (air-gapped) çalışır', 'Harici bağımlılık yok — doğrulama da self-hosted'] },
      { h: 'Ayrım, güvenliktir', items: ['Sysadmin modelleri yalnızca shell komutları üretir', 'Kaynak kodu değişiklikleri ayrı bir üretici + inceleyiciden geçer', 'Her komut çalıştırılmadan önce bir subay tarafından incelenir', 'Doktrin erişimi kendi gömme (embedding) modeline sahiptir'] },
      { h: 'Yüksek riskte özel bir kontrol', items: ['GLM-5.2 (self-hosted) en riskli değişiklikleri inceler', 'Yalnızca MEDIUM / HIGH riskte danışılır — her değişiklikte değil', 'Geri alınamaz herhangi bir işlemden önce ikinci, bağımsız bir görüş', 'Son söz her zaman sizindir'] },
    ],
  },
  ar: {
    h: 'لماذا أسطول لا نموذج واحد',
    lead: 'الفصل قرار متعلق بالأمان والجودة، وليس مصادفة تاريخية.',
    cards: [
      { h: 'الأداة الصحيحة للمهمة الصحيحة', items: ['نماذج 4B السريعة تكتشف؛ النماذج العميقة تستدلّ', 'نماذج الأوامر تراعي المنصة (AWS / GCP / Azure / on-prem)', 'نماذج الشيفرة المصدرية منفصلة عن نماذج إدارة النظام', 'كل نموذج مضبوط لمهمة واحدة — وبارع فيها'] },
      { h: 'مستضاف ذاتيًا افتراضيًا', items: ['النماذج تعمل على GPU داخل منطقة تشغيلكم', 'تبقى بيانات القياس عن بعد والشيفرة داخل المحيط الآمن', 'محيط ITDR معزول بالكامل (air-gapped)', 'لا اعتماد خارجي — والتحقق أيضًا مستضاف ذاتيًا'] },
      { h: 'الفصل هو الأمان', items: ['نماذج إدارة النظام تولّد أوامر shell فقط', 'تغييرات الشيفرة المصدرية تمر عبر مولّد ومراجِع منفصلين', 'يراجع الضابط كل أمر قبل تنفيذه', 'استرجاع العقيدة له نموذج تضمين خاص به'] },
      { h: 'فحص مخصص عند الخطر المرتفع', items: ['يراجع GLM-5.2 (مستضاف ذاتيًا) التغييرات الأكثر خطورة', 'يُستشار فقط عند خطر MEDIUM / HIGH — وليس عند كل تغيير', 'رأي ثانٍ ومستقل قبل أي إجراء لا رجعة فيه', 'تحتفظون دومًا بالكلمة الأخيرة'] },
    ],
  },
  el: {
    h: 'Γιατί στόλος, όχι ένα μοντέλο',
    lead: 'Ο διαχωρισμός είναι απόφαση ασφάλειας και ποιότητας, όχι τυχαίο ιστορικό γεγονός.',
    cards: [
      { h: 'Το σωστό εργαλείο για τη σωστή δουλειά', items: ['Τα γρήγορα μοντέλα 4B εντοπίζουν· τα βαθιά μοντέλα συλλογίζονται', 'Τα μοντέλα εντολών γνωρίζουν την πλατφόρμα (AWS / GCP / Azure / on-prem)', 'Τα μοντέλα πηγαίου κώδικα διαχωρίζονται από τα μοντέλα sysadmin', 'Κάθε μοντέλο είναι συντονισμένο για μία δουλειά — και είναι καλό σε αυτήν'] },
      { h: 'Αυτοφιλοξενία εξ ορισμού', items: ['Τα μοντέλα λειτουργούν σε GPU εντός της περιοχής λειτουργίας σας', 'Η τηλεμετρία και ο κώδικάς σας παραμένουν εντός της περιμέτρου', 'Η περίμετρος ITDR είναι πλήρως απομονωμένη (air-gapped)', 'Καμία εξωτερική εξάρτηση — η επικύρωση είναι επίσης αυτοφιλοξενούμενη'] },
      { h: 'Ο διαχωρισμός είναι ασφάλεια', items: ['Τα μοντέλα sysadmin παράγουν μόνο εντολές shell', 'Οι αλλαγές πηγαίου κώδικα περνούν από ξεχωριστό generator + reviewer', 'Ένας αξιωματικός ελέγχει κάθε εντολή πριν την εκτέλεση', 'Η ανάκτηση δόγματος έχει το δικό της μοντέλο ενσωμάτωσης'] },
      { h: 'Ένας αποκλειστικός έλεγχος σε υψηλό κίνδυνο', items: ['Το GLM-5.2 (αυτοφιλοξενούμενο) εξετάζει τις πιο ριψοκίνδυνες αλλαγές', 'Συμβουλεύεται μόνο σε κίνδυνο MEDIUM / HIGH — ποτέ σε κάθε αλλαγή', 'Μια δεύτερη, ανεξάρτητη γνώμη πριν από οτιδήποτε μη αναστρέψιμο', 'Η τελική απόφαση παραμένει πάντα δική σας'] },
    ],
  },
};

export default function AiModelsWhyFleet() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {d.cards.map((c) => (
            <div key={c.h} className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-900/15 to-gray-900/30 p-6">
              <h3 className="mb-3 text-lg font-bold text-white">{c.h}</h3>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-white/75">
                    <span className="mt-0.5 text-cyan-400">▸</span>
                    <span>{it}</span>
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
