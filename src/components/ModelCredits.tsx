'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Maker = { name: string; models: string; note: string };
type Data = { h: string; lead: string; makers: Maker[]; anthropicH: string; anthropic: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Model credits & thanks',
    lead: 'Guardian’s fleet is built on the work of leading model labs. Our thanks to the teams whose models we fine-tune and self-host — each adapted for its own specialization.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'cloud specialists, audit reasoning, detection shields, doctrine embedder & reranker' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'the ITDR officer & Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'the main brain and validator of the council: frontier-grade open weights under the MIT licence, self-hosted inside the perimeter' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'This platform was engineered together with Claude — Opus 4.7 and Opus 4.8. Our special thanks to Anthropic; their models helped us shape the architecture, write and harden the code. In production, all validation runs on our self-hosted GLM-5.2 — your code never leaves the contour.',
  },
  ru: {
    h: 'Благодарности и используемые модели',
    lead: 'Парк Guardian построен на труде ведущих модельных лабораторий. Спасибо командам, чьи модели мы дообучаем и держим на собственных серверах — каждую под свою специализацию.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'облачные специалисты, reasoning аудита, щиты детекции, embedder и reranker доктрины' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'офицер ITDR и Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'главный мозг и валидатор совета: открытые веса переднего края под лицензией MIT, self-hosted внутри периметра' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Эту платформу мы проектировали вместе с Claude — Opus 4.7 и Opus 4.8. Отдельная благодарность Anthropic: их модели помогли с архитектурой, написанием и защитой кода. В продакшене вся валидация — на нашей self-hosted GLM-5.2, ваш код не покидает контур.',
  },
  zh: {
    h: '致謝與所用模型',
    lead: 'Guardian 艦隊建立在頂尖模型實驗室的成果之上。感謝這些團隊——我們對其模型進行微調並自託管，每一個都針對其專屬領域。',
    makers: [
      { name: 'Qwen 團隊 — 阿里巴巴', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: '雲端專家、稽核推理、偵測護盾、知識庫嵌入與重排' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ITDR 安全官與 Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: '委員會的主腦與驗證者：MIT 授權的前沿開放權重，自託管於邊界之內' },
    ],
    anthropicH: 'Anthropic',
    anthropic: '此平台由我們與 Claude（Opus 4.7 與 Opus 4.8）共同打造。特別感謝 Anthropic——其模型協助我們構建架構、撰寫並強化程式碼。在生產環境中，所有驗證均由自託管的 GLM-5.2 執行，您的程式碼絕不離開安全邊界。',
  },
  fr: {
    h: 'Crédits et remerciements des modèles',
    lead: "La flotte de Guardian s'appuie sur le travail des principaux laboratoires de modèles. Merci aux équipes dont nous affinons et hébergeons nous-mêmes les modèles — chacun adapté à sa propre spécialisation.",
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: "spécialistes cloud, raisonnement d'audit, boucliers de détection, embedder et reranker de la doctrine" },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: "l'officier ITDR et Cloud AI" },
      { name: 'Z.ai', models: 'GLM-5.2', note: "cerveau principal et validateur du conseil : poids ouverts de pointe sous licence MIT, auto-hébergés dans le périmètre" },
    ],
    anthropicH: 'Anthropic',
    anthropic: "Cette plateforme a été conçue avec Claude — Opus 4.7 et Opus 4.8. Un remerciement spécial à Anthropic ; leurs modèles nous ont aidés à façonner l'architecture, écrire et durcir le code. En production, toute la validation s'exécute sur notre GLM-5.2 auto-hébergé — votre code ne quitte jamais le périmètre.",
  },
  de: {
    h: 'Modell-Credits & Danksagungen',
    lead: 'Die Flotte von Guardian basiert auf der Arbeit führender Modelllabore. Unser Dank gilt den Teams, deren Modelle wir feinabstimmen und selbst hosten — jedes für seine eigene Spezialisierung angepasst.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'Cloud-Spezialisten, Audit-Reasoning, Erkennungsschilde, Doctrine-Embedder & Reranker' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'der ITDR-Offizier & Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'Hauptgehirn und Validator des Councils: hochmoderne offene Gewichte unter MIT-Lizenz, selbst gehostet innerhalb des Perimeters' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Diese Plattform wurde gemeinsam mit Claude — Opus 4.7 und Opus 4.8 — entwickelt. Besonderer Dank an Anthropic; ihre Modelle halfen uns, die Architektur zu gestalten sowie Code zu schreiben und zu härten. In der Produktion läuft alle Validierung auf unserem selbst gehosteten GLM-5.2 — Ihr Code verlässt den Perimeter nie.',
  },
  es: {
    h: 'Créditos de modelos y agradecimientos',
    lead: 'La flota de Guardian se construye sobre el trabajo de los principales laboratorios de modelos. Nuestro agradecimiento a los equipos cuyos modelos ajustamos y alojamos nosotros mismos — cada uno adaptado a su propia especialización.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'especialistas de nube, razonamiento de auditoría, escudos de detección, embedder y reranker de doctrina' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'el oficial ITDR y Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'cerebro principal y validador del consejo: pesos abiertos de vanguardia bajo licencia MIT, autoalojados dentro del perímetro' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Esta plataforma se diseñó junto con Claude — Opus 4.7 y Opus 4.8. Un agradecimiento especial a Anthropic; sus modelos nos ayudaron a dar forma a la arquitectura, escribir y reforzar el código. En producción, toda la validación se ejecuta en nuestro GLM-5.2 autoalojado — tu código nunca sale del perímetro.',
  },
  it: {
    h: 'Crediti dei modelli e ringraziamenti',
    lead: "La flotta di Guardian si basa sul lavoro dei principali laboratori di modelli. Un ringraziamento ai team i cui modelli affiniamo e ospitiamo autonomamente — ciascuno adattato alla propria specializzazione.",
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'specialisti cloud, ragionamento di audit, scudi di rilevamento, embedder e reranker della dottrina' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: "l'ufficiale ITDR e Cloud AI" },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'cervello principale e validatore del consiglio: pesi aperti di frontiera con licenza MIT, self-hosted all\'interno del perimetro' },
    ],
    anthropicH: 'Anthropic',
    anthropic: "Questa piattaforma è stata progettata insieme a Claude — Opus 4.7 e Opus 4.8. Un ringraziamento speciale ad Anthropic; i loro modelli ci hanno aiutato a definire l'architettura, scrivere e rafforzare il codice. In produzione, tutta la validazione viene eseguita sul nostro GLM-5.2 self-hosted — il tuo codice non lascia mai il perimetro.",
  },
  ja: {
    h: 'モデルへの謝辞とクレジット',
    lead: 'Guardianのフリートは、主要なモデル研究機関の成果の上に構築されています。私たちがファインチューニングし自社ホストしているモデルのチームに感謝します——それぞれが独自の専門分野に適応しています。',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'クラウド専門家、監査推論、検知シールド、ドクトリンのエンベッダーとリランカー' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ITDRオフィサーとCloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: '評議会の中枢兼検証者：MITライセンスの最先端オープンウェイト、境界内で自社ホスト' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'このプラットフォームはClaude（Opus 4.7およびOpus 4.8）と共に構築されました。Anthropicに特に感謝します。彼らのモデルはアーキテクチャの構築、コードの記述と強化に役立ちました。本番環境では、すべての検証は自社ホストのGLM-5.2で実行され、コードが境界を離れることはありません。',
  },
  uk: {
    h: 'Подяки та використані моделі',
    lead: 'Флот Guardian побудований на роботі провідних модельних лабораторій. Дякуємо командам, чиї моделі ми донавчаємо та тримаємо на власних серверах — кожну під свою спеціалізацію.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'хмарні спеціалісти, reasoning аудиту, щити детекції, embedder та reranker доктрини' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'офіцер ITDR та Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'головний мозок і валідатор ради: відкриті ваги переднього краю за ліцензією MIT, self-hosted всередині периметра' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Цю платформу ми проєктували разом із Claude — Opus 4.7 та Opus 4.8. Окрема подяка Anthropic: їхні моделі допомогли з архітектурою, написанням і захистом коду. У продакшені вся валідація — на нашій self-hosted GLM-5.2, ваш код не залишає контур.',
  },
  sr: {
    h: 'Захвалнице и коришћени модели',
    lead: 'Guardian флота је изграђена на раду водећих модел лабораторија. Хвала тимовима чије моделе фино подешавамо и хостујемо сами — сваки прилагођен својој специјализацији.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'облак специјалисти, ревизорско резоновање, штитови детекције, embedder и reranker доктрине' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ITDR официр и Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'главни мозак и валидатор већа: отворене тежине водеће технологије под MIT лиценцом, self-hosted унутар периметра' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Ову платформу смо пројектовали заједно са Claude — Opus 4.7 и Opus 4.8. Посебна захвалност Anthropic-у: њихови модели су помогли у архитектури, писању и учвршћивању кода. У продукцији, сва валидација иде на нашем self-hosted GLM-5.2 — ваш код не напушта периметар.',
  },
  pt: {
    h: 'Créditos de modelos e agradecimentos',
    lead: 'A frota da Guardian é construída sobre o trabalho de laboratórios de modelos líderes. Os nossos agradecimentos às equipas cujos modelos afinamos e alojamos nós próprios — cada um adaptado à sua especialização.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'especialistas cloud, raciocínio de auditoria, escudos de deteção, embedder e reranker da doutrina' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'o oficial ITDR e Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'cérebro principal e validador do conselho: pesos abertos de ponta sob licença MIT, autoalojados dentro do perímetro' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Esta plataforma foi concebida em conjunto com o Claude — Opus 4.7 e Opus 4.8. Um agradecimento especial à Anthropic; os seus modelos ajudaram-nos a moldar a arquitetura, escrever e reforçar o código. Em produção, toda a validação corre no nosso GLM-5.2 autoalojado — o seu código nunca sai do perímetro.',
  },
  hi: {
    h: 'मॉडल क्रेडिट और धन्यवाद',
    lead: 'Guardian का फ्लीट अग्रणी मॉडल लैब्स के काम पर आधारित है। उन टीमों का धन्यवाद जिनके मॉडल हम फाइन-ट्यून करके स्वयं होस्ट करते हैं — प्रत्येक अपनी विशेषज्ञता के अनुसार अनुकूलित।',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'क्लाउड विशेषज्ञ, ऑडिट रीजनिंग, डिटेक्शन शील्ड, doctrine embedder व reranker' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ITDR ऑफिसर और Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'काउंसिल का मुख्य मस्तिष्क और सत्यापक: MIT लाइसेंस के तहत फ्रंटियर-ग्रेड ओपन वेट्स, परिधि के भीतर सेल्फ-होस्टेड' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'यह प्लेटफ़ॉर्म Claude — Opus 4.7 और Opus 4.8 के साथ मिलकर इंजीनियर किया गया। Anthropic को विशेष धन्यवाद; उनके मॉडलों ने आर्किटेक्चर बनाने, कोड लिखने और मज़बूत करने में मदद की। प्रोडक्शन में, सारा सत्यापन हमारे सेल्फ-होस्टेड GLM-5.2 पर चलता है — आपका कोड कभी परिधि नहीं छोड़ता।',
  },
  tr: {
    h: 'Model teşekkürleri ve katkıları',
    lead: "Guardian'ın filosu önde gelen model laboratuvarlarının çalışmaları üzerine kuruludur. İnce ayar yaptığımız ve kendi sunucularımızda barındırdığımız modellerin ekiplerine teşekkür ederiz — her biri kendi uzmanlığına göre uyarlanmıştır.",
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'bulut uzmanları, denetim akıl yürütmesi, tespit kalkanları, doktrin embedder ve reranker' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ITDR görevlisi ve Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: "konseyin ana beyni ve doğrulayıcısı: MIT lisansı altında öncü açık ağırlıklar, çevre içinde self-hosted" },
    ],
    anthropicH: 'Anthropic',
    anthropic: "Bu platform Claude — Opus 4.7 ve Opus 4.8 ile birlikte tasarlandı. Anthropic'e özel teşekkürler; modelleri mimariyi şekillendirmemize, kodu yazıp güçlendirmemize yardımcı oldu. Üretimde tüm doğrulama kendi barındırdığımız GLM-5.2 üzerinde çalışır — kodunuz asla çevreyi terk etmez.",
  },
  ar: {
    h: 'شكر وتقدير للنماذج',
    lead: 'يعتمد أسطول Guardian على عمل مختبرات النماذج الرائدة. شكرًا للفرق التي نقوم بضبط نماذجها واستضافتها ذاتيًا — كل واحدة مُكيّفة لتخصصها الخاص.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'متخصصو السحابة، تفكير التدقيق، دروع الكشف، embedder وreranker العقيدة' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ضابط ITDR وCloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'العقل الرئيسي والمُحقق للمجلس: أوزان مفتوحة رائدة برخصة MIT، مستضافة ذاتيًا داخل المحيط' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'صُممت هذه المنصة مع Claude — Opus 4.7 وOpus 4.8. شكر خاص لـ Anthropic؛ ساعدتنا نماذجهم في تشكيل البنية، وكتابة الكود وتحصينه. في الإنتاج، يتم كل التحقق على GLM-5.2 المستضاف ذاتيًا لدينا — كودك لا يغادر المحيط أبدًا.',
  },
  el: {
    h: 'Ευχαριστίες και μοντέλα που χρησιμοποιήθηκαν',
    lead: 'Ο στόλος του Guardian βασίζεται στη δουλειά κορυφαίων εργαστηρίων μοντέλων. Ευχαριστούμε τις ομάδες των οποίων τα μοντέλα βελτιστοποιούμε και φιλοξενούμε οι ίδιοι — το καθένα προσαρμοσμένο στην εξειδίκευσή του.',
    makers: [
      { name: 'Qwen Team — Alibaba', models: 'Qwen3-Coder-30B-A3B-Instruct · Qwen3-30B-A3B-Thinking-2507 · Qwen3-4B-Instruct-2507 · Qwen3-VL-Embedding-8B · Qwen3-VL-Reranker-2B', note: 'ειδικοί cloud, συλλογιστική ελέγχου, ασπίδες ανίχνευσης, embedder και reranker δόγματος' },
      { name: 'Google DeepMind', models: 'Gemma-4-26B-A4B · Gemma-4-26B-A4B-it', note: 'ο αξιωματικός ITDR και το Cloud AI' },
      { name: 'Z.ai', models: 'GLM-5.2', note: 'ο κύριος εγκέφαλος και επικυρωτής του συμβουλίου: πρωτοπόρα ανοιχτά βάρη υπό άδεια MIT, self-hosted εντός της περιμέτρου' },
    ],
    anthropicH: 'Anthropic',
    anthropic: 'Αυτή η πλατφόρμα σχεδιάστηκε μαζί με το Claude — Opus 4.7 και Opus 4.8. Ιδιαίτερες ευχαριστίες στην Anthropic· τα μοντέλα τους μας βοήθησαν να διαμορφώσουμε την αρχιτεκτονική, να γράψουμε και να θωρακίσουμε τον κώδικα. Στην παραγωγή, όλη η επικύρωση εκτελείται στο δικό μας self-hosted GLM-5.2 — ο κώδικάς σας δεν εγκαταλείπει ποτέ την περίμετρο.',
  },
};

export default function ModelCredits() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl leading-relaxed text-white/70">{d.lead}</p>

        <div className="space-y-3">
          {d.makers.map((m) => (
            <div key={m.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">{m.name}</p>
              <p className="mt-1 text-sm font-medium text-cyan-200">{m.models}</p>
              <p className="mt-1 text-sm text-white/55">— {m.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-violet-500/30 bg-gradient-to-b from-violet-900/20 to-gray-900/30 p-5">
          <p className="font-semibold text-white">{d.anthropicH}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{d.anthropic}</p>
        </div>
      </div>
    </section>
  );
}
