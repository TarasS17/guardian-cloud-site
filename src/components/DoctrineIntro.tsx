'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[] };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'the knowledge the AI reasons with',
    paras: [
      'Doctrine is a living knowledge base the AI reasons with — not a static rule file. Rules of engagement, playbooks, verified intelligence and the lessons of past incidents, retrieved by meaning and fed into every decision the officers make.',
      'Retrieval is two-stage: an instruction-aware embedder (Qwen3-VL-Embedding-8B, 1024-dim) recalls candidates by intent, and a cross-encoder reranker (Qwen3-VL-Reranker-2B) keeps only the most precise — the model sees the few most relevant pieces, not a keyword dump.',
      'The knowledge is layered and governed: rules of engagement always sit on top, unreviewed entries stay out of live reasoning, and after every incident the outcome is distilled back into doctrine — so each next decision is sharper than the last.',
    ],
  },
  ru: {
    sub: 'знание, которым думает ИИ',
    paras: [
      'Доктрина — это живая база знаний, которой думает ИИ, а не статичный файл правил. Правила применения (ROE), плейбуки, проверенная разведка и уроки прошлых инцидентов — извлекаются по смыслу и подаются в каждое решение офицеров.',
      'Поиск двухэтапный: instruction-aware эмбеддер (Qwen3-VL-Embedding-8B, 1024-dim) находит кандидатов по смыслу, а кросс-энкодер-реранкер (Qwen3-VL-Reranker-2B) оставляет только самые точные — модель видит несколько самых релевантных фрагментов, а не свалку по ключевым словам.',
      'Знание расслоено и управляемо: правила применения всегда наверху, непроверенные записи исключены из живого reasoning, а после каждого инцидента вывод дистиллируется обратно в доктрину — каждое следующее решение острее предыдущего.',
    ],
  },
  zh: {
    sub: 'AI 賴以思考的知識',
    paras: [
      '「Doctrine」是一套 AI 賴以推理的活知識庫——而非靜態的規則檔案。交戰守則（ROE）、行動手冊、經查證的情報與過往事件的經驗，皆按語義檢索，並注入安全官的每一項決策。',
      '檢索分為兩階段：具指令感知的嵌入模型（Qwen3-VL-Embedding-8B，1024 維）依意圖召回候選，交叉編碼重排器（Qwen3-VL-Reranker-2B）僅保留最精準者——模型只看見最相關的少數片段，而非關鍵字堆砌。',
      '知識分層且受治理：交戰守則永遠位居頂層，未經審閱的條目不進入即時推理；每起事件之後，其結果都被提煉回知識庫——讓每一次決策都比上一次更銳利。',
    ],
  },
  fr: {
    sub: "le savoir sur lequel l'IA raisonne",
    paras: [
      "Doctrine est une base de connaissances vivante sur laquelle l'IA raisonne — pas un fichier de règles statique. Règles d'engagement, playbooks, renseignements vérifiés et leçons des incidents passés, récupérés par le sens et injectés dans chaque décision des officiers.",
      "La récupération se fait en deux étapes : un embedder sensible aux instructions (Qwen3-VL-Embedding-8B, 1024-dim) rappelle les candidats par intention, et un reranker cross-encoder (Qwen3-VL-Reranker-2B) ne conserve que les plus précis — le modèle ne voit que les quelques éléments les plus pertinents, pas un déversement de mots-clés.",
      "La connaissance est stratifiée et gouvernée : les règles d'engagement priment toujours, les entrées non révisées restent hors du raisonnement en direct, et après chaque incident le résultat est distillé dans la doctrine — pour que chaque décision suivante soit plus affûtée que la précédente.",
    ],
  },
  de: {
    sub: 'das Wissen, mit dem die KI denkt',
    paras: [
      'Doctrine ist eine lebendige Wissensbasis, mit der die KI denkt — keine statische Regeldatei. Einsatzregeln, Playbooks, verifizierte Erkenntnisse und die Lehren vergangener Vorfälle werden nach Bedeutung abgerufen und in jede Entscheidung der Officer eingespeist.',
      'Der Abruf erfolgt zweistufig: ein instruktionsbewusster Embedder (Qwen3-VL-Embedding-8B, 1024-dim) ruft Kandidaten nach Absicht ab, und ein Cross-Encoder-Reranker (Qwen3-VL-Reranker-2B) behält nur die präzisesten — das Modell sieht die wenigen relevantesten Ausschnitte, keine Stichwort-Deponie.',
      'Das Wissen ist geschichtet und geregelt: Einsatzregeln stehen immer an oberster Stelle, ungeprüfte Einträge bleiben aus dem Live-Reasoning ausgeschlossen, und nach jedem Vorfall wird das Ergebnis zurück in die Doctrine destilliert — sodass jede nächste Entscheidung schärfer ist als die letzte.',
    ],
  },
  es: {
    sub: 'el conocimiento con el que razona la IA',
    paras: [
      'Doctrine es una base de conocimiento viva con la que razona la IA, no un archivo de reglas estático. Reglas de enfrentamiento, playbooks, inteligencia verificada y las lecciones de incidentes pasados, recuperados por significado y alimentados a cada decisión de los oficiales.',
      'La recuperación es en dos etapas: un embedder consciente de instrucciones (Qwen3-VL-Embedding-8B, 1024-dim) recupera candidatos por intención, y un reranker cross-encoder (Qwen3-VL-Reranker-2B) conserva solo los más precisos — el modelo ve las pocas piezas más relevantes, no un volcado de palabras clave.',
      'El conocimiento está estratificado y gobernado: las reglas de enfrentamiento siempre están en la cima, las entradas no revisadas quedan fuera del razonamiento en vivo, y tras cada incidente el resultado se destila de vuelta en la doctrina — así cada siguiente decisión es más afilada que la anterior.',
    ],
  },
  it: {
    sub: "la conoscenza con cui l'IA ragiona",
    paras: [
      "Doctrine è una base di conoscenza viva con cui l'IA ragiona — non un file di regole statico. Regole d'ingaggio, playbook, intelligence verificata e le lezioni degli incidenti passati, recuperate per significato e immesse in ogni decisione degli officer.",
      "Il recupero avviene in due fasi: un embedder sensibile alle istruzioni (Qwen3-VL-Embedding-8B, 1024-dim) richiama i candidati per intento, e un reranker cross-encoder (Qwen3-VL-Reranker-2B) mantiene solo i più precisi — il modello vede i pochi elementi più rilevanti, non un ammasso di parole chiave.",
      "La conoscenza è stratificata e governata: le regole d'ingaggio sono sempre al vertice, le voci non revisionate restano fuori dal ragionamento live, e dopo ogni incidente l'esito viene distillato di nuovo nella doctrine — così ogni decisione successiva è più affilata della precedente.",
    ],
  },
  ja: {
    sub: 'AIが推論の拠り所とする知識',
    paras: [
      'Doctrineは、AIが推論の拠り所とする生きた知識ベースであり、静的なルールファイルではありません。交戦規定、プレイブック、検証済みインテリジェンス、過去のインシデントの教訓が、意味によって検索され、officerのあらゆる判断に投入されます。',
      '検索は2段階です。指示認識型エンベッダー（Qwen3-VL-Embedding-8B、1024次元）が意図に基づき候補を想起し、クロスエンコーダー・リランカー（Qwen3-VL-Reranker-2B）が最も精度の高いものだけを残します——モデルはキーワードの寄せ集めではなく、最も関連性の高い少数の断片だけを目にします。',
      '知識は階層化され統治されています。交戦規定は常に最上位にあり、未レビューの項目はライブ推論から除外され、あらゆるインシデントの後、その結果はdoctrineへと蒸留されます——次の決断は常に前回よりも鋭くなります。',
    ],
  },
  uk: {
    sub: 'знання, яким мислить ШІ',
    paras: [
      'Doctrine — це жива база знань, якою мислить ШІ, а не статичний файл правил. Правила застосування (ROE), плейбуки, перевірена розвідка та уроки минулих інцидентів — здобуваються за змістом і подаються в кожне рішення офіцерів.',
      'Пошук двоетапний: instruction-aware ембедер (Qwen3-VL-Embedding-8B, 1024-dim) знаходить кандидатів за наміром, а крос-енкодер-реранкер (Qwen3-VL-Reranker-2B) залишає лише найточніші — модель бачить кілька найрелевантніших фрагментів, а не звалище за ключовими словами.',
      'Знання розшароване й кероване: правила застосування завжди зверху, неперевірені записи виключені з живого reasoning, а після кожного інциденту результат дистилюється назад у доктрину — кожне наступне рішення гостріше за попереднє.',
    ],
  },
  sr: {
    sub: 'znanje kojim AI rezonuje',
    paras: [
      'Doctrine je živa baza znanja kojom AI rezonuje — ne statička datoteka pravila. Pravila angažovanja (ROE), priručnici (playbooks), proverene obaveštajne informacije i pouke iz prethodnih incidenata preuzimaju se po značenju i ugrađuju u svaku odluku oficira.',
      'Pretraga je dvostepena: embedder svestan instrukcija (Qwen3-VL-Embedding-8B, 1024-dim) priziva kandidate po nameri, a cross-encoder reranker (Qwen3-VL-Reranker-2B) zadržava samo najpreciznije — model vidi svega nekoliko najrelevantnijih delova, a ne gomilu ključnih reči.',
      'Znanje je slojevito i upravljano: pravila angažovanja uvek su na vrhu, nepregledani unosi ostaju van živog rezonovanja, a nakon svakog incidenta ishod se destiluje nazad u doctrine — tako da je svaka sledeća odluka oštrija od prethodne.',
    ],
  },
  pt: {
    sub: 'o conhecimento com que a IA raciocina',
    paras: [
      'Doctrine é uma base de conhecimento viva com a qual a IA raciocina — não um arquivo de regras estático. Regras de engajamento, playbooks, inteligência verificada e as lições de incidentes passados são recuperadas por significado e alimentadas em cada decisão dos officers.',
      'A recuperação é em duas etapas: um embedder sensível a instruções (Qwen3-VL-Embedding-8B, 1024-dim) recupera candidatos por intenção, e um reranker cross-encoder (Qwen3-VL-Reranker-2B) mantém apenas os mais precisos — o modelo vê os poucos trechos mais relevantes, não um despejo de palavras-chave.',
      'O conhecimento é estratificado e governado: as regras de engajamento estão sempre no topo, entradas não revisadas ficam fora do raciocínio ao vivo, e após cada incidente o resultado é destilado de volta na doctrine — assim, cada próxima decisão é mais afiada que a anterior.',
    ],
  },
  hi: {
    sub: 'वह ज्ञान जिससे AI तर्क करता है',
    paras: [
      'Doctrine एक जीवंत ज्ञान-आधार है जिससे AI तर्क करता है — कोई स्थिर नियम फ़ाइल नहीं। सगाई के नियम (ROE), प्लेबुक, सत्यापित इंटेलिजेंस और पिछली घटनाओं से सीखे गए सबक — अर्थ के आधार पर खोजे जाते हैं और अधिकारियों के हर निर्णय में शामिल किए जाते हैं।',
      'पुनर्प्राप्ति दो-चरणीय है: एक निर्देश-जागरूक एम्बेडर (Qwen3-VL-Embedding-8B, 1024-dim) इरादे के अनुसार उम्मीदवारों को याद करता है, और एक क्रॉस-एनकोडर रीरैंकर (Qwen3-VL-Reranker-2B) केवल सबसे सटीक को बनाए रखता है — मॉडल कीवर्ड के ढेर की बजाय कुछ सबसे प्रासंगिक अंश देखता है।',
      'ज्ञान स्तरीकृत और शासित है: सगाई के नियम हमेशा शीर्ष पर रहते हैं, असमीक्षित प्रविष्टियाँ लाइव रीज़निंग से बाहर रहती हैं, और हर घटना के बाद परिणाम को वापस doctrine में आसुत किया जाता है — ताकि हर अगला निर्णय पिछले से अधिक तीक्ष्ण हो।',
    ],
  },
  tr: {
    sub: 'yapay zekânın akıl yürüttüğü bilgi',
    paras: [
      "Doctrine, yapay zekânın akıl yürüttüğü yaşayan bir bilgi tabanıdır — statik bir kural dosyası değil. Angajman kuralları (ROE), playbook'lar, doğrulanmış istihbarat ve geçmiş olaylardan çıkarılan dersler, anlama göre alınır ve officer'ların verdiği her karara beslenir.",
      "Erişim iki aşamalıdır: talimat farkındalıklı bir embedder (Qwen3-VL-Embedding-8B, 1024-dim) niyete göre adayları hatırlar, ve bir cross-encoder reranker (Qwen3-VL-Reranker-2B) yalnızca en kesin olanları tutar — model, anahtar kelime yığını değil, en ilgili birkaç parçayı görür.",
      "Bilgi katmanlı ve yönetimlidir: angajman kuralları her zaman en üstte yer alır, incelenmemiş girdiler canlı akıl yürütmenin dışında kalır ve her olaydan sonra sonuç doctrine'e geri damıtılır — böylece her sonraki karar bir öncekinden daha keskin olur.",
    ],
  },
  ar: {
    sub: 'المعرفة التي يستدل بها الذكاء الاصطناعي',
    paras: [
      'Doctrine قاعدة معرفة حية يستدل بها الذكاء الاصطناعي — وليست ملف قواعد ثابتًا. قواعد الاشتباك، وأدلة التشغيل (playbooks)، والاستخبارات الموثقة، ودروس الحوادث السابقة، تُسترجع حسب المعنى وتُغذّى في كل قرار يتخذه الضباط.',
      'الاسترجاع يتم على مرحلتين: يقوم مضمّن مدرك للتعليمات (Qwen3-VL-Embedding-8B، 1024 بُعدًا) باستدعاء المرشحين حسب النية، ويحتفظ معيد ترتيب من نوع cross-encoder (Qwen3-VL-Reranker-2B) بالأدق فقط — فيرى النموذج القطع القليلة الأكثر صلة، لا كومة من الكلمات المفتاحية.',
      'المعرفة مُصنّفة طبقيًا وخاضعة للحوكمة: قواعد الاشتباك تعلو دائمًا، والإدخالات غير المراجعة تبقى خارج الاستدلال الحي، وبعد كل حادثة تُقطّر النتيجة مجددًا إلى doctrine — بحيث يكون كل قرار تالٍ أكثر دقة من سابقه.',
    ],
  },
  el: {
    sub: 'η γνώση με την οποία συλλογίζεται η AI',
    paras: [
      'Το Doctrine είναι μια ζωντανή βάση γνώσης με την οποία συλλογίζεται η AI — όχι ένα στατικό αρχείο κανόνων. Κανόνες εμπλοκής, playbooks, επαληθευμένες πληροφορίες και τα διδάγματα προηγούμενων περιστατικών ανακτώνται με βάση το νόημα και τροφοδοτούν κάθε απόφαση των officers.',
      'Η ανάκτηση γίνεται σε δύο στάδια: ένας embedder με επίγνωση οδηγιών (Qwen3-VL-Embedding-8B, 1024-dim) ανακαλεί υποψηφίους βάσει πρόθεσης, και ένας cross-encoder reranker (Qwen3-VL-Reranker-2B) κρατά μόνο τους πιο ακριβείς — το μοντέλο βλέπει τα λίγα πιο σχετικά αποσπάσματα, όχι έναν σωρό λέξεων-κλειδιών.',
      'Η γνώση είναι διαστρωματωμένη και διακυβερνώμενη: οι κανόνες εμπλοκής βρίσκονται πάντα στην κορυφή, οι μη ελεγμένες καταχωρίσεις παραμένουν εκτός του ζωντανού συλλογισμού, και μετά από κάθε περιστατικό το αποτέλεσμα αποστάζεται πίσω στο doctrine — έτσι κάθε επόμενη απόφαση είναι πιο ακριβής από την προηγούμενη.',
    ],
  },
};

/** Localized hero + intro for the Doctrine module page (en / ru / zh). */
export default function DoctrineIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/doctrine_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">Doctrine</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
        </div>
      </VideoBackground>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          {t.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
