'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import ModelScoreChart from '@/components/ModelScoreChart';

const HEAD: Record<string, { h: string; lead: string; train: string }> = {
  en: {
    h: 'The roster & test results',
    lead: 'Every model in the fleet is exercised on real GPUs before it touches a server. These are the documented numbers for the models we run today — nothing rounded up.',
    train: 'Every model in this fleet was trained by us on tens of thousands of high-quality instructions, and tested on hundreds of real work examples and incidents — each one for its own specialization.',
  },
  ru: {
    h: 'Состав парка и результаты тестов',
    lead: 'Каждая модель парка прогоняется на реальных GPU, прежде чем коснуться сервера. Это задокументированные цифры по тем моделям, что работают у нас сегодня — ничего не приукрашено.',
    train: 'Каждую модель этого парка мы обучили на десятках тысяч высококачественных инструкций и протестировали на сотнях реальных примеров работы и инцидентов — каждую именно под свою специализацию.',
  },
  zh: {
    h: '艦隊陣容與測試結果',
    lead: '艦隊中的每一個模型在接觸伺服器之前都會在真實 GPU 上實測。以下是我們目前運行模型的有據可查數據——絕無灌水。',
    train: '本艦隊中的每一個模型，皆由我們以數萬條高品質指令訓練，並針對其專屬領域，於數百個真實工作範例與事件上完成測試。',
  },
  fr: {
    h: "L'effectif et les résultats des tests",
    lead: "Chaque modèle de la flotte est exercé sur des GPU réels avant de toucher un serveur. Voici les chiffres documentés des modèles que nous exploitons aujourd'hui — sans arrondi flatteur.",
    train: "Chaque modèle de cette flotte a été entraîné par nous sur des dizaines de milliers d'instructions de haute qualité, et testé sur des centaines d'exemples de travail réels et d'incidents — chacun pour sa propre spécialisation.",
  },
  de: {
    h: 'Die Flotte & Testergebnisse',
    lead: 'Jedes Modell der Flotte wird auf echten GPUs geprüft, bevor es einen Server berührt. Dies sind die dokumentierten Zahlen der Modelle, die wir heute betreiben — nichts beschönigt.',
    train: 'Jedes Modell dieser Flotte wurde von uns auf Zehntausenden hochwertiger Anweisungen trainiert und an Hunderten realer Arbeitsbeispiele und Vorfälle getestet — jedes für seine eigene Spezialisierung.',
  },
  es: {
    h: 'La flota y los resultados de las pruebas',
    lead: 'Cada modelo de la flota se ejercita en GPU reales antes de tocar un servidor. Estas son las cifras documentadas de los modelos que operamos hoy — sin redondeos favorables.',
    train: 'Cada modelo de esta flota fue entrenado por nosotros con decenas de miles de instrucciones de alta calidad y probado en cientos de ejemplos de trabajo reales e incidentes — cada uno para su propia especialización.',
  },
  it: {
    h: 'La flotta e i risultati dei test',
    lead: "Ogni modello della flotta viene esercitato su GPU reali prima di toccare un server. Questi sono i numeri documentati dei modelli che gestiamo oggi — senza arrotondamenti di comodo.",
    train: "Ogni modello di questa flotta è stato addestrato da noi su decine di migliaia di istruzioni di alta qualità e testato su centinaia di esempi di lavoro reali e incidenti — ciascuno per la propria specializzazione.",
  },
  ja: {
    h: '編成と試験結果',
    lead: 'フリート内のすべてのモデルは、サーバーに触れる前に実際のGPU上で検証されます。これは現在稼働しているモデルの記録済みの数値です — 水増しは一切ありません。',
    train: 'このフリートのすべてのモデルは、我々が数万件の高品質な指示データで訓練し、数百件の実際の作業例とインシデントでテストしたものです——それぞれが独自の専門分野に特化しています。',
  },
  uk: {
    h: 'Склад флоту та результати тестів',
    lead: 'Кожна модель флоту проганяється на реальних GPU, перш ніж торкнутися сервера. Це задокументовані цифри по моделях, що працюють у нас сьогодні — без прикрас.',
    train: 'Кожну модель цього флоту ми навчили на десятках тисяч високоякісних інструкцій і протестували на сотнях реальних прикладів роботи та інцидентів — кожну саме під її спеціалізацію.',
  },
  sr: {
    h: 'Флота и резултати тестова',
    lead: 'Сваки модел у флоти се тестира на стварним GPU-овима пре него што дође у додир са сервером. Ово су документовани бројеви за моделе које данас користимо — без улепшавања.',
    train: 'Сваки модел у овој флоти обучили смо на десетинама хиљада висококвалитетних инструкција и тестирали на стотинама стварних радних примера и инцидената — сваки за своју сопствену специјализацију.',
  },
  pt: {
    h: 'A frota e os resultados dos testes',
    lead: 'Cada modelo da frota é exercitado em GPUs reais antes de tocar em um servidor. Estes são os números documentados dos modelos que operamos hoje — sem arredondamentos favoráveis.',
    train: 'Cada modelo desta frota foi treinado por nós em dezenas de milhares de instruções de alta qualidade e testado em centenas de exemplos reais de trabalho e incidentes — cada um para sua própria especialização.',
  },
  hi: {
    h: 'बेड़ा और परीक्षण परिणाम',
    lead: 'बेड़े का हर मॉडल किसी सर्वर से जुड़ने से पहले वास्तविक GPU पर परखा जाता है। ये आज हम जिन मॉडलों को चला रहे हैं, उनके दस्तावेज़ीकृत आंकड़े हैं — कोई सजावट नहीं।',
    train: 'इस बेड़े के हर मॉडल को हमने हजारों उच्च-गुणवत्ता निर्देशों पर प्रशिक्षित किया और सैकड़ों वास्तविक कार्य उदाहरणों व घटनाओं पर परखा — प्रत्येक को उसकी अपनी विशेषज्ञता के लिए।',
  },
  tr: {
    h: 'Filo ve test sonuçları',
    lead: "Filodaki her model, bir sunucuya dokunmadan önce gerçek GPU'lar üzerinde test edilir. Bunlar bugün çalıştırdığımız modellere ait belgelenmiş rakamlardır — hiçbiri yuvarlanmamıştır.",
    train: 'Bu filodaki her model, tarafımızca on binlerce yüksek kaliteli talimat üzerinde eğitilmiş ve yüzlerce gerçek iş örneği ile olay üzerinde test edilmiştir — her biri kendi uzmanlık alanı için.',
  },
  ar: {
    h: 'الأسطول ونتائج الاختبارات',
    lead: 'يتم اختبار كل نموذج في الأسطول على وحدات معالجة رسومية حقيقية قبل أن يلامس خادمًا. هذه هي الأرقام الموثقة للنماذج التي نُشغّلها اليوم — دون أي تقريب مُجمّل.',
    train: 'تم تدريب كل نموذج في هذا الأسطول من قِبلنا على عشرات الآلاف من التعليمات عالية الجودة، واختباره على مئات الأمثلة العملية الحقيقية والحوادث — كل نموذج وفق تخصصه الخاص.',
  },
  el: {
    h: 'Ο στόλος και τα αποτελέσματα δοκιμών',
    lead: 'Κάθε μοντέλο στον στόλο δοκιμάζεται σε πραγματικές GPU πριν αγγίξει έναν διακομιστή. Αυτοί είναι οι τεκμηριωμένοι αριθμοί για τα μοντέλα που λειτουργούμε σήμερα — χωρίς καμία στρογγυλοποίηση προς τα πάνω.',
    train: 'Κάθε μοντέλο αυτού του στόλου εκπαιδεύτηκε από εμάς σε δεκάδες χιλιάδες οδηγίες υψηλής ποιότητας και δοκιμάστηκε σε εκατοντάδες πραγματικά παραδείγματα εργασίας και περιστατικά — το καθένα για τη δική του εξειδίκευση.',
  },
};

type Row = { model: string; role: string; result: string };

const ROWS: Row[] = [
  { model: 'Audit Officer · Qwen3-30B-A3B-Thinking-2507', role: 'Initial server audit', result: 'LOW / CRITICAL — correct' },
  { model: 'ITDR Officer · Gemma-4-26B-A4B', role: 'Intrusion verdict (ROE)', result: '100 / 100 · safety gate 100%' },
  { model: 'Cloud AI · Gemma-4-26B-A4B-it', role: 'Conversational interface', result: 'live' },
  { model: 'Detection shields · 3× Qwen3-4B-Instruct-2507', role: 'First-line detection', result: '3 / 3 in 726–952 ms' },
  { model: 'All-Platform specialist · Qwen3-Coder-30B-A3B-Instruct', role: 'Command generation', result: '97.0%' },
  { model: 'Azure specialist', role: 'Command generation', result: '94.0%' },
  { model: 'GCP specialist', role: 'Command generation', result: '91.0%' },
  { model: 'AWS specialist', role: 'Command generation', result: 'in retraining' },
  { model: 'Coding · Qwen3-Coder gen + Qwen3-Thinking review', role: 'Source-code changes', result: 'generate → security review' },
  { model: 'Doctrine embedder · Qwen3-VL-Embedding-8B', role: 'Knowledge retrieval', result: 'semantic read — PASS' },
  { model: 'GLM-5.2 · self-hosted', role: 'Main brain · validator · initial testing', result: 'in-contour · high-risk review' },
];

function resultClass(r: string) {
  return r === 'in retraining' ? 'text-amber-300' : 'text-emerald-300';
}

const DETAIL_H: Record<string, string> = {
  en: 'Cloud specialists — detailed',
  ru: 'Облачные специалисты — подробно',
  zh: '雲端專家模型 — 詳細數據',
  fr: 'Spécialistes cloud — détaillé',
  de: 'Cloud-Spezialisten — im Detail',
  es: 'Especialistas de nube — detallado',
  it: 'Specialisti cloud — nel dettaglio',
  ja: 'クラウド専門モデル — 詳細',
  uk: 'Хмарні спеціалісти — детально',
  sr: 'Cloud специјалисти — детаљно',
  pt: 'Especialistas de nuvem — detalhado',
  hi: 'क्लाउड विशेषज्ञ — विस्तृत',
  tr: 'Bulut uzmanları — ayrıntılı',
  ar: 'متخصصو السحابة — بالتفصيل',
  el: 'Ειδικοί cloud — αναλυτικά',
};

type Detail = { model: string; overall: string; inDist: string; ood: string; json: string };

const SPEC_DETAIL: Detail[] = [
  { model: 'All-Platform specialist', overall: '97.0%', inDist: '49 / 50', ood: '48 / 50', json: '97.0%' },
  { model: 'Azure specialist', overall: '94.0%', inDist: '47 / 50', ood: '47 / 50', json: '94.0%' },
  { model: 'GCP specialist', overall: '91.0%', inDist: '45 / 50', ood: '46 / 50', json: '95.0%' },
  { model: 'AWS specialist', overall: 'in retraining', inDist: '—', ood: '—', json: '—' },
];

const VIEW_H: Record<string, string> = {
  en: 'Open the raw test files for review',
  ru: 'Открыть сырые файлы тестов для просмотра',
  zh: '開啟原始測試檔案以供檢視',
  fr: 'Ouvrir les fichiers de test bruts pour examen',
  de: 'Rohe Testdateien zur Überprüfung öffnen',
  es: 'Abrir los archivos de prueba en bruto para revisión',
  it: 'Apri i file di test grezzi per la revisione',
  ja: '確認用に生のテストファイルを開く',
  uk: 'Відкрити необроблені файли тестів для перегляду',
  sr: 'Отвори сирове тест фајлове за преглед',
  pt: 'Abrir os arquivos de teste brutos para revisão',
  hi: 'समीक्षा के लिए कच्ची परीक्षण फ़ाइलें खोलें',
  tr: 'İncelemek için ham test dosyalarını aç',
  ar: 'افتح ملفات الاختبار الخام للمراجعة',
  el: 'Άνοιγμα των ακατέργαστων αρχείων δοκιμών για έλεγχο',
};

const FILES = [
  { label: 'All-Platform results', href: '/validation/spec-onprem.json' },
  { label: 'Azure results', href: '/validation/spec-azure.json' },
  { label: 'GCP results', href: '/validation/spec-gcp.json' },
  { label: 'AWS results', href: '/validation/spec-aws.json' },
  { label: 'ITDR Officer results', href: '/validation/itdr-officer-results.json' },
  { label: 'Sysadmin Officer results', href: '/validation/sysadmin-officer-results.json' },
  { label: 'Summary', href: '/validation/specs-summary.md' },
];

/** Block — AI Models fleet roster & validation. Prose localized; table + chart. */
export default function AiModelsValidation() {
  const { locale } = useLocale();
  const t = HEAD[locale] ?? HEAD.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75">{t.lead}</p>

        <div className="grid items-start gap-6 lg:grid-cols-2">
          {/* roster */}
          <div className="overflow-x-auto rounded-xl border border-emerald-500/20">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-white/70">
                  <th className="px-3 py-3 font-semibold">Model</th>
                  <th className="px-3 py-3 font-semibold">Role</th>
                  <th className="px-3 py-3 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.model} className="border-b border-white/5 last:border-0">
                    <td className="px-3 py-3 font-medium text-white/90">{r.model}</td>
                    <td className="px-3 py-3 text-white/55">{r.role}</td>
                    <td className={`px-3 py-3 font-semibold ${resultClass(r.result)}`}>{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* chart */}
          <ModelScoreChart />
        </div>

        {/* training statement */}
        <p className="mt-8 max-w-3xl border-l-2 border-cyan-500/40 pl-4 text-lg leading-relaxed text-white/80">
          {t.train}
        </p>

        {/* detailed per-spec */}
        <h3 className="mb-4 mt-12 text-2xl font-bold text-white">{DETAIL_H[locale] ?? DETAIL_H.en}</h3>
        <div className="overflow-x-auto rounded-xl border border-emerald-500/20">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white/70">
                <th className="px-3 py-3 font-semibold">Model</th>
                <th className="px-3 py-3 font-semibold">Overall</th>
                <th className="px-3 py-3 font-semibold">In-distribution</th>
                <th className="px-3 py-3 font-semibold">Out-of-distribution</th>
                <th className="px-3 py-3 font-semibold">JSON-valid</th>
              </tr>
            </thead>
            <tbody>
              {SPEC_DETAIL.map((r) => (
                <tr key={r.model} className="border-b border-white/5 last:border-0">
                  <td className="px-3 py-3 font-medium text-white/90">{r.model}</td>
                  <td className={`px-3 py-3 font-semibold ${resultClass(r.overall)}`}>{r.overall}</td>
                  <td className="px-3 py-3 text-white/70">{r.inDist}</td>
                  <td className="px-3 py-3 text-white/70">{r.ood}</td>
                  <td className="px-3 py-3 text-white/70">{r.json}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-white/45">100 tests per spec — 50 in-distribution + 50 out-of-distribution, AWQ on A100.</p>

        {/* view raw files */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold text-white/70">{VIEW_H[locale] ?? VIEW_H.en}</p>
          <div className="flex flex-wrap gap-2">
            {FILES.map((f) => (
              <a
                key={f.href}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-cyan-500/40 bg-cyan-500/5 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-500/15"
              >
                {f.label} ↗
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-white/45">
          The AWS specialist is being retrained on a corrected dataset; its number lands here once
          measured. For closed, on-prem data centers, the{' '}
          <Link href="/billing" className="text-cyan-300 underline-offset-2 hover:underline">
            Enterprise tier
          </Link>{' '}
          runs a lightweight fleet entirely on local hardware — validated at 100% across 400 scenarios.
        </p>
      </div>
    </section>
  );
}
