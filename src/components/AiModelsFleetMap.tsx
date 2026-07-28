'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { DefsSheen, SvgNode, SvgLink } from '@/components/diagramParts';

const HEAD: Record<string, { h: string; lead: string }> = {
  en: {
    h: 'The fleet',
    lead: 'A model gateway routes each task to the model built for it — officers reason, shields detect, specialists generate commands, coders write code, the embedder retrieves doctrine. A frontier cloud model is consulted only on the highest-risk changes.',
  },
  ru: {
    h: 'Парк моделей',
    lead: 'Шлюз моделей направляет каждую задачу той модели, что создана под неё — офицеры рассуждают, щиты детектят, специалисты генерируют команды, кодеры пишут код, embedder достаёт доктрину. Флагманская облачная модель подключается только на изменениях наивысшего риска.',
  },
  zh: {
    h: '模型艦隊',
    lead: '模型閘道將每一項任務導向為其打造的模型——安全官負責推理、護盾負責偵測、專家生成指令、編碼模型撰寫程式碼、嵌入模型檢索知識庫。僅在風險最高的變更上，才會引入頂尖雲端模型。',
  },
  fr: {
    h: 'La flotte',
    lead: "Une passerelle de modèles route chaque tâche vers le modèle conçu pour elle — les officiers raisonnent, les boucliers détectent, les spécialistes génèrent des commandes, les modèles de code écrivent du code, l'embedder récupère la doctrine. Un modèle cloud de pointe n'est consulté que pour les changements à plus haut risque.",
  },
  de: {
    h: 'Die Flotte',
    lead: 'Ein Modell-Gateway leitet jede Aufgabe an das dafür gebaute Modell weiter — Officers schließen, Shields erkennen, Spezialisten generieren Befehle, Coder schreiben Code, der Embedder ruft Doktrin ab. Ein führendes Cloud-Modell wird nur bei den risikoreichsten Änderungen hinzugezogen.',
  },
  es: {
    h: 'La flota',
    lead: 'Una puerta de enlace de modelos dirige cada tarea al modelo creado para ella — los officers razonan, los shields detectan, los especialistas generan comandos, los modelos de código escriben código, el embedder recupera la doctrina. Un modelo cloud de vanguardia solo se consulta en los cambios de mayor riesgo.',
  },
  it: {
    h: 'La flotta',
    lead: "Un gateway di modelli instrada ogni compito al modello costruito per esso — gli officer ragionano, gli shield rilevano, gli specialisti generano comandi, i modelli di codice scrivono codice, l'embedder recupera la dottrina. Un modello cloud di punta viene consultato solo per le modifiche a rischio più alto.",
  },
  ja: {
    h: 'モデルの艦隊',
    lead: 'モデルゲートウェイが各タスクをそのために構築されたモデルへ振り分けます——オフィサーは推論し、シールドは検知し、スペシャリストはコマンドを生成し、コーダーはコードを書き、埋め込みモデルはドクトリンを検索します。最上位のクラウドモデルはリスクが最も高い変更の場合にのみ参照されます。',
  },
  uk: {
    h: 'Флот моделей',
    lead: 'Шлюз моделей спрямовує кожне завдання до моделі, створеної саме для нього — офіцери міркують, щити виявляють, спеціалісти генерують команди, кодери пишуть код, embedder дістає доктрину. Флагманська хмарна модель підключається лише для змін найвищого ризику.',
  },
  sr: {
    h: 'Флота модела',
    lead: 'Гејтвеј модела усмерава сваки задатак ка моделу направљеном за њега — официри закључују, штитови детектују, специјалисти генеришу команде, кодери пишу код, embedder преузима доктрину. Водећи cloud модел се консултује само код промена највишег ризика.',
  },
  pt: {
    h: 'A frota',
    lead: 'Um gateway de modelos direciona cada tarefa ao modelo criado para ela — os officers raciocinam, os shields detectam, os especialistas geram comandos, os coders escrevem código, o embedder recupera a doutrina. Um modelo de nuvem de ponta só é consultado nas mudanças de maior risco.',
  },
  hi: {
    h: 'मॉडलों का बेड़ा',
    lead: 'एक मॉडल गेटवे हर कार्य को उसके लिए बने मॉडल तक भेजता है — ऑफ़िसर तर्क करते हैं, शील्ड डिटेक्ट करती हैं, विशेषज्ञ कमांड जनरेट करते हैं, कोडर कोड लिखते हैं, एम्बेडर सिद्धांत (doctrine) को खोजता है। एक अग्रणी क्लाउड मॉडल केवल सबसे अधिक जोखिम वाले बदलावों पर परामर्श किया जाता है।',
  },
  tr: {
    h: 'Filo',
    lead: 'Bir model ağ geçidi her görevi onun için tasarlanmış modele yönlendirir — subaylar akıl yürütür, kalkanlar tespit eder, uzmanlar komut üretir, kodlayıcılar kod yazar, gömme (embedding) modeli doktrini getirir. Öncü bir bulut modeline yalnızca en yüksek riskli değişikliklerde danışılır.',
  },
  ar: {
    h: 'الأسطول',
    lead: 'توجّه بوابة النماذج كل مهمة إلى النموذج المُصمَّم لها — الضباط يستدلّون، والدروع تكتشف، والمتخصصون يولّدون الأوامر، ونماذج البرمجة تكتب الشيفرة، ونموذج التضمين يسترجع العقيدة. لا يُستشار نموذج سحابي متقدّم إلا في التغييرات الأعلى خطورة.',
  },
  el: {
    h: 'Ο στόλος',
    lead: 'Μια πύλη μοντέλων δρομολογεί κάθε εργασία στο μοντέλο που έχει φτιαχτεί για αυτήν — οι αξιωματικοί συλλογίζονται, οι ασπίδες εντοπίζουν, οι ειδικοί δημιουργούν εντολές, οι κωδικοποιητές γράφουν κώδικα, το μοντέλο ενσωμάτωσης ανακτά το δόγμα. Ένα κορυφαίο cloud μοντέλο συμβουλεύεται μόνο στις αλλαγές υψηλότερου κινδύνου.',
  },
};

export default function AiModelsFleetMap() {
  const { locale } = useLocale();
  const t = HEAD[locale] ?? HEAD.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{t.lead}</p>

        <div className="overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
          <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">
            Model fleet — gateway routes each task to its specialist
          </p>
          <svg viewBox="0 0 1000 600" className="h-auto w-full min-w-[780px]" role="img" aria-label="AI model fleet">
            <DefsSheen />
            <defs>
              <radialGradient id="fm-hub-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="1000" height="600" rx="18" fill="#070a12" />

            {/* gateway halo */}
            <ellipse cx="500" cy="300" rx="150" ry="92" fill="url(#fm-hub-halo)" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
            </ellipse>

            {/* links gateway <-> groups */}
            <SvgLink d="M380 270 C330 200, 320 150, 300 130" color="#8b5cf6" />
            <SvgLink d="M620 270 C670 200, 680 150, 700 130" color="#fb7185" />
            <SvgLink d="M372 300 L246 300" color="#f59e0b" />
            <SvgLink d="M628 300 L754 300" color="#4285F4" />
            <SvgLink d="M380 330 C330 400, 320 450, 300 472" color="#34d399" />
            <SvgLink d="M620 330 C670 400, 680 450, 700 472" color="#38bdf8" />
            {/* gateway -> validators (dashed, high-risk only) */}
            <SvgLink d="M500 348 L500 540" color="#f59e0b" dashed />
            <text x="512" y="450" fill="rgba(245,158,11,0.8)" fontSize="11">high-risk only</text>

            {/* gateway */}
            <SvgNode cx={500} cy={300} w={252} h={92} color="#22d3ee" title="Model Gateway" sub="routes each task to its model" big />

            {/* officers */}
            <SvgNode cx={300} cy={100} w={216} h={64} color="#8b5cf6" title="Audit Officer" sub="Qwen3-30B-A3B-Thinking" />
            <SvgNode cx={700} cy={100} w={216} h={64} color="#fb7185" title="ITDR Officer" sub="Gemma-4-26B-A4B" />

            {/* shields & specialists */}
            <SvgNode cx={130} cy={300} w={212} h={64} color="#f59e0b" title="Detection shields" sub="3× Qwen3-4B-Instruct-2507" />
            <SvgNode cx={870} cy={300} w={216} h={64} color="#4285F4" title="Cloud specialists" sub="Qwen3-Coder-30B-A3B-Instruct" />

            {/* coders & embedder */}
            <SvgNode cx={300} cy={500} w={216} h={64} color="#34d399" title="Coding models" sub="Coder gen + Thinking review" />
            <SvgNode cx={700} cy={500} w={216} h={64} color="#38bdf8" title="Doctrine embedder" sub="Qwen3-VL-Embedding-8B + Reranker-2B" />

            {/* cloud validators */}
            <SvgNode cx={500} cy={566} w={360} h={48} color="#f59e0b" title="GLM-5.2 — main brain & validator (self-hosted)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
