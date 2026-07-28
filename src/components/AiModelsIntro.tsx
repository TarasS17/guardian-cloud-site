'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[] };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'specialised models, self-hosted on GPU',
    paras: [
      'Guardian doesn’t call one general model for everything. It runs a fleet of specialised models — each trained or tuned for a single job — self-hosted on GPU in your region, so your data never leaves the contour.',
      'Detection is fast, reasoning is deep, command generation is platform-aware, and source-code work is kept apart from system administration. The right model answers each question — and a frontier cloud model is consulted only on the highest-risk changes.',
      'Every model is validated on real GPUs before it touches a server — and keeps learning through our daily briefings.',
    ],
  },
  ru: {
    sub: 'специализированные модели на собственных GPU',
    paras: [
      'Guardian не зовёт одну универсальную модель на всё. Он держит парк специализированных моделей — каждая обучена или дотюнена под одну задачу — на собственных GPU в вашем регионе, поэтому ваши данные не покидают контур.',
      'Детекция быстрая, reasoning глубокий, генерация команд знает вашу платформу, а работа с исходным кодом отделена от системного администрирования. На каждый вопрос отвечает своя модель — а флагманская облачная модель подключается только на изменениях наивысшего риска.',
      'Каждая модель проверена на реальных GPU, прежде чем коснуться сервера — и постоянно учится на наших ежедневных брифингах.',
    ],
  },
  zh: {
    sub: '自託管於 GPU 的專業化模型',
    paras: [
      'Guardian 不會用單一通用模型處理一切。它運行一支專業化模型艦隊——每一個模型都針對單一任務訓練或微調——自託管於您所在區域的 GPU 上，您的資料絕不離開防禦邊界。',
      '偵測求快、推理求深、指令生成貼合您的平台，而原始碼工作則與系統管理分離。每個問題都由專屬模型作答——僅在風險最高的變更上，才會引入頂尖雲端模型把關。',
      '每一個模型在接觸伺服器之前都會在真實 GPU 上完成驗證——並透過我們的每日簡報持續學習。',
    ],
  },
  fr: {
    sub: 'des modèles spécialisés, auto-hébergés sur GPU',
    paras: [
      "Guardian ne fait pas appel à un modèle généraliste unique pour tout. Il exploite une flotte de modèles spécialisés — chacun entraîné ou ajusté pour une tâche précise — auto-hébergés sur GPU dans votre région, afin que vos données ne quittent jamais le périmètre.",
      "La détection est rapide, le raisonnement est approfondi, la génération de commandes s'adapte à la plateforme, et le travail sur le code source reste séparé de l'administration système. Le bon modèle répond à chaque question — et un modèle cloud de pointe n'est consulté que pour les changements à plus haut risque.",
      "Chaque modèle est validé sur de vrais GPU avant de toucher un serveur — et continue d'apprendre grâce à nos briefings quotidiens.",
    ],
  },
  de: {
    sub: 'spezialisierte Modelle, selbst gehostet auf GPU',
    paras: [
      'Guardian setzt nicht ein einziges Universalmodell für alles ein. Es betreibt eine Flotte spezialisierter Modelle — jedes für eine einzige Aufgabe trainiert oder feinabgestimmt — selbst gehostet auf GPU in Ihrer Region, sodass Ihre Daten die Umgebung nie verlassen.',
      'Erkennung ist schnell, Reasoning ist tiefgehend, die Befehlsgenerierung ist plattformbewusst, und die Arbeit am Quellcode bleibt von der Systemadministration getrennt. Das richtige Modell beantwortet jede Frage — und ein führendes Cloud-Modell wird nur bei den risikoreichsten Änderungen hinzugezogen.',
      'Jedes Modell wird auf echten GPUs validiert, bevor es einen Server berührt — und lernt kontinuierlich durch unsere täglichen Briefings.',
    ],
  },
  es: {
    sub: 'modelos especializados, autoalojados en GPU',
    paras: [
      'Guardian no recurre a un único modelo generalista para todo. Opera una flota de modelos especializados — cada uno entrenado o ajustado para una única tarea — autoalojados en GPU en su región, de modo que sus datos nunca salen del perímetro.',
      'La detección es rápida, el razonamiento es profundo, la generación de comandos conoce la plataforma, y el trabajo con código fuente se mantiene separado de la administración de sistemas. El modelo adecuado responde a cada pregunta — y un modelo cloud de vanguardia solo se consulta en los cambios de mayor riesgo.',
      'Cada modelo se valida en GPU reales antes de tocar un servidor — y sigue aprendiendo gracias a nuestros briefings diarios.',
    ],
  },
  it: {
    sub: 'modelli specializzati, self-hosted su GPU',
    paras: [
      "Guardian non affida tutto a un unico modello generalista. Gestisce una flotta di modelli specializzati — ciascuno addestrato o ottimizzato per un solo compito — self-hosted su GPU nella vostra regione, così i vostri dati non lasciano mai il perimetro.",
      "Il rilevamento è rapido, il ragionamento è approfondito, la generazione dei comandi conosce la piattaforma, e il lavoro sul codice sorgente resta separato dall'amministrazione di sistema. Il modello giusto risponde a ogni domanda — e un modello cloud di punta viene consultato solo per le modifiche a rischio più alto.",
      'Ogni modello viene validato su GPU reali prima di toccare un server — e continua ad apprendere grazie ai nostri briefing quotidiani.',
    ],
  },
  ja: {
    sub: '専用モデル群、GPU上で自社ホスト',
    paras: [
      'Guardianはすべてを一つの汎用モデルに任せません。単一の任務のために訓練・調整された専門モデル群を、お客様のリージョン内のGPU上で自社ホストし、データが境界の外に出ることはありません。',
      '検知は高速、推論は深く、コマンド生成はプラットフォームを理解し、ソースコード作業はシステム管理とは分離されています。それぞれの問いに最適なモデルが答え、最上位のクラウドモデルはリスクが最も高い変更の場合にのみ参照されます。',
      'すべてのモデルはサーバーに触れる前に実機GPUで検証され、日々のブリーフィングを通じて学習を続けます。',
    ],
  },
  uk: {
    sub: 'спеціалізовані моделі, розміщені на власних GPU',
    paras: [
      'Guardian не використовує одну універсальну модель для всього. Він працює з флотом спеціалізованих моделей — кожна навчена або донавчена під одне завдання — розміщених на власних GPU у вашому регіоні, тож ваші дані ніколи не залишають контур.',
      'Виявлення швидке, міркування глибоке, генерація команд враховує платформу, а робота з вихідним кодом відокремлена від системного адміністрування. На кожне питання відповідає своя модель — а флагманська хмарна модель підключається лише для змін найвищого ризику.',
      'Кожна модель перевіряється на реальних GPU, перш ніж торкнутися сервера — і продовжує навчатися завдяки нашим щоденним брифінгам.',
    ],
  },
  sr: {
    sub: 'специјализовани модели, самостално хостовани на GPU',
    paras: [
      'Guardian не позива један универзални модел за све. Он покреће флоту специјализованих модела — сваки обучен или прилагођен за један задатак — самостално хостованих на GPU у вашем региону, тако да ваши подаци никада не напуштају периметар.',
      'Детекција је брза, закључивање дубоко, генерисање команди познаје платформу, а рад на изворном коду одвојен је од системске администрације. Прави модел одговара на свако питање — а водећи cloud модел се консултује само код промена највишег ризика.',
      'Сваки модел се верификује на стварним GPU-овима пре него што дотакне сервер — и наставља да учи кроз наше дневне брифинге.',
    ],
  },
  pt: {
    sub: 'modelos especializados, auto-hospedados em GPU',
    paras: [
      'O Guardian não recorre a um único modelo generalista para tudo. Ele opera uma frota de modelos especializados — cada um treinado ou ajustado para uma única tarefa — auto-hospedados em GPU na sua região, para que seus dados nunca saiam do perímetro.',
      'A detecção é rápida, o raciocínio é profundo, a geração de comandos é ciente da plataforma, e o trabalho com código-fonte é mantido separado da administração de sistemas. O modelo certo responde a cada pergunta — e um modelo de nuvem de ponta só é consultado nas mudanças de maior risco.',
      'Cada modelo é validado em GPUs reais antes de tocar um servidor — e continua aprendendo por meio dos nossos briefings diários.',
    ],
  },
  hi: {
    sub: 'विशेषीकृत मॉडल, GPU पर सेल्फ़-होस्टेड',
    paras: [
      'Guardian हर काम के लिए एक ही सामान्य मॉडल का इस्तेमाल नहीं करता। यह विशेषीकृत मॉडलों का एक बेड़ा चलाता है — हर एक को एक विशिष्ट काम के लिए प्रशिक्षित या ट्यून किया गया है — जो आपके क्षेत्र में GPU पर सेल्फ़-होस्टेड है, ताकि आपका डेटा कभी परिधि से बाहर न जाए।',
      'डिटेक्शन तेज़ है, रीज़निंग गहरी है, कमांड जनरेशन प्लेटफ़ॉर्म को समझता है, और सोर्स-कोड का काम सिस्टम एडमिनिस्ट्रेशन से अलग रखा जाता है। हर सवाल का जवाब सही मॉडल देता है — और एक अग्रणी क्लाउड मॉडल केवल सबसे अधिक जोखिम वाले बदलावों पर परामर्श किया जाता है।',
      'हर मॉडल सर्वर को छूने से पहले असली GPU पर सत्यापित किया जाता है — और हमारी दैनिक ब्रीफिंग के ज़रिए सीखता रहता है।',
    ],
  },
  tr: {
    sub: "GPU üzerinde barındırılan, uzmanlaşmış modeller",
    paras: [
      "Guardian her şey için tek bir genel model kullanmaz. Her biri tek bir görev için eğitilmiş veya ince ayarlanmış, bölgenizdeki GPU'larda self-hosted çalışan uzmanlaşmış bir model filosu işletir — böylece verileriniz çevrenin dışına asla çıkmaz.",
      "Tespit hızlıdır, akıl yürütme derindir, komut üretimi platformu tanır ve kaynak kodu çalışması sistem yönetiminden ayrı tutulur. Her soruyu doğru model yanıtlar — en yüksek riskli değişikliklerde ise yalnızca öncü bir bulut modeline danışılır.",
      "Her model bir sunucuya dokunmadan önce gerçek GPU'larda doğrulanır — ve günlük brifinglerimiz sayesinde öğrenmeye devam eder.",
    ],
  },
  ar: {
    sub: 'نماذج متخصصة، مستضافة ذاتيًا على وحدات GPU',
    paras: [
      'لا يعتمد Guardian على نموذج عام واحد لكل شيء. بل يشغّل أسطولًا من النماذج المتخصصة — كل واحد مدرَّب أو مضبوط لمهمة واحدة — مستضافة ذاتيًا على وحدات GPU داخل منطقتكم، بحيث لا تغادر بياناتكم المحيط الآمن أبدًا.',
      'الكشف سريع، والاستدلال عميق، وتوليد الأوامر يراعي المنصة، ويبقى العمل على الشيفرة المصدرية منفصلاً عن إدارة النظام. يجيب على كل سؤال النموذج المناسب — ولا يُستشار نموذج سحابي متقدّم إلا في التغييرات الأعلى خطورة.',
      'يُتحقّق من كل نموذج على وحدات GPU حقيقية قبل أن يلمس أي خادم — ويستمر في التعلّم من خلال إحاطاتنا اليومية.',
    ],
  },
  el: {
    sub: 'εξειδικευμένα μοντέλα, αυτοφιλοξενούμενα σε GPU',
    paras: [
      'Το Guardian δεν καλεί ένα ενιαίο γενικό μοντέλο για όλα. Λειτουργεί έναν στόλο εξειδικευμένων μοντέλων — το καθένα εκπαιδευμένο ή συντονισμένο για μία μόνο εργασία — αυτοφιλοξενούμενα σε GPU στην περιοχή σας, ώστε τα δεδομένα σας να μην εγκαταλείπουν ποτέ την περίμετρο.',
      'Ο εντοπισμός είναι γρήγορος, η συλλογιστική βαθιά, η δημιουργία εντολών γνωρίζει την πλατφόρμα, και η εργασία στον πηγαίο κώδικα παραμένει ξεχωριστή από τη διαχείριση συστήματος. Το κατάλληλο μοντέλο απαντά σε κάθε ερώτημα — και ένα κορυφαίο cloud μοντέλο συμβουλεύεται μόνο στις αλλαγές υψηλότερου κινδύνου.',
      'Κάθε μοντέλο επικυρώνεται σε πραγματικές GPU πριν αγγίξει έναν διακομιστή — και συνεχίζει να μαθαίνει μέσα από τις καθημερινές μας ενημερώσεις.',
    ],
  },
};

/** Localized hero + intro for the AI Models module page (en / ru / zh). */
export default function AiModelsIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/fm_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">AI Models</h1>
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
