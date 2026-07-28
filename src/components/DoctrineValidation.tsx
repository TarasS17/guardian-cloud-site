'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Row = { check: string; detail: string };
type Data = { h: string; lead: string; rows: Row[]; note: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Validation & test results',
    lead: 'The doctrine pipeline was exercised end-to-end against a live embedder on GPU — write, retrieve, learn, govern.',
    rows: [
      { check: 'Write', detail: 'New entries indexed and made retrievable' },
      { check: 'Semantic read', detail: 'A query by intent returned exactly the relevant intel at the top' },
      { check: 'Debrief → doctrine', detail: 'Incident outcome written back as a reviewable lesson' },
      { check: 'Governance', detail: 'Pending lessons excluded from live reasoning until approved' },
    ],
    note: 'End-to-end on the live srag-l4 embedder (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) over Qdrant — 2026-06-13.',
  },
  ru: {
    h: 'Валидация и результаты тестов',
    lead: 'Пайплайн доктрины прогнан end-to-end против живого эмбеддера на GPU — запись, поиск, обучение, управление.',
    rows: [
      { check: 'Запись', detail: 'Новые записи проиндексированы и доступны для поиска' },
      { check: 'Семантическое чтение', detail: 'Запрос по смыслу вернул именно релевантную разведку наверху' },
      { check: 'Дебриф → доктрина', detail: 'Итог инцидента записан обратно как проверяемый урок' },
      { check: 'Управление', detail: 'Pending-уроки исключены из живого reasoning до одобрения' },
    ],
    note: 'End-to-end на живом эмбеддере srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) поверх Qdrant — 2026-06-13.',
  },
  fr: {
    h: 'Résultats de validation et de tests',
    lead: "Le pipeline de doctrine a été testé de bout en bout contre un embedder en production sur GPU — écriture, récupération, apprentissage, gouvernance.",
    rows: [
      { check: 'Écriture', detail: 'Nouvelles entrées indexées et rendues récupérables' },
      { check: 'Lecture sémantique', detail: "Une requête par intention a fait remonter exactement l'intel pertinent en tête" },
      { check: 'Débriefing → doctrine', detail: "Résultat de l'incident réécrit comme une leçon révisable" },
      { check: 'Gouvernance', detail: "Leçons en attente exclues du raisonnement en direct jusqu'à approbation" },
    ],
    note: "De bout en bout sur l'embedder srag-l4 en production (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) au-dessus de Qdrant — 2026-06-13.",
  },
  de: {
    h: 'Validierung & Testergebnisse',
    lead: 'Die Doktrin-Pipeline wurde End-to-End gegen einen Live-Embedder auf GPU getestet — Schreiben, Abrufen, Lernen, Steuerung.',
    rows: [
      { check: 'Schreiben', detail: 'Neue Einträge indexiert und abrufbar gemacht' },
      { check: 'Semantisches Lesen', detail: 'Eine Abfrage nach Absicht lieferte genau die relevante Intel ganz oben' },
      { check: 'Debriefing → Doktrin', detail: 'Vorfallergebnis als überprüfbare Lektion zurückgeschrieben' },
      { check: 'Governance', detail: 'Ausstehende Lektionen bis zur Genehmigung vom Live-Reasoning ausgeschlossen' },
    ],
    note: 'End-to-End auf dem Live-Embedder srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) über Qdrant — 2026-06-13.',
  },
  es: {
    h: 'Resultados de validación y pruebas',
    lead: 'El pipeline de doctrina se probó de extremo a extremo contra un embedder en vivo en GPU — escritura, recuperación, aprendizaje, gobernanza.',
    rows: [
      { check: 'Escritura', detail: 'Nuevas entradas indexadas y recuperables' },
      { check: 'Lectura semántica', detail: 'Una consulta por intención devolvió exactamente la inteligencia relevante en primer lugar' },
      { check: 'Debriefing → doctrina', detail: 'El resultado del incidente se reescribió como una lección revisable' },
      { check: 'Gobernanza', detail: 'Lecciones pendientes excluidas del razonamiento en vivo hasta su aprobación' },
    ],
    note: 'De extremo a extremo en el embedder en vivo srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) sobre Qdrant — 2026-06-13.',
  },
  it: {
    h: 'Risultati di validazione e test',
    lead: 'La pipeline della dottrina è stata testata end-to-end contro un embedder live su GPU — scrittura, recupero, apprendimento, governance.',
    rows: [
      { check: 'Scrittura', detail: 'Nuove voci indicizzate e rese recuperabili' },
      { check: 'Lettura semantica', detail: 'Una query per intento ha restituito esattamente le informazioni rilevanti in cima' },
      { check: 'Debriefing → dottrina', detail: "Esito dell'incidente riscritto come lezione riesaminabile" },
      { check: 'Governance', detail: 'Lezioni in sospeso escluse dal ragionamento live fino ad approvazione' },
    ],
    note: "End-to-end sull'embedder live srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) sopra Qdrant — 2026-06-13.",
  },
  ja: {
    h: '検証とテスト結果',
    lead: 'ドクトリンパイプラインは、GPU上のライブエンベッダーに対してエンドツーエンドで検証された——書き込み、検索、学習、統制。',
    rows: [
      { check: '書き込み', detail: '新規エントリーがインデックス化され検索可能に' },
      { check: 'セマンティック読み取り', detail: '意図によるクエリが関連情報を正確に最上位に返した' },
      { check: 'デブリーフ → ドクトリン', detail: 'インシデントの結果がレビュー可能な教訓として書き戻された' },
      { check: '統制', detail: '承認されるまで保留中の教訓はライブ推論から除外' },
    ],
    note: 'ライブのsrag-l4エンベッダー（Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B）にQdrantを組み合わせたエンドツーエンド検証 — 2026-06-13。',
  },
  uk: {
    h: 'Валідація та результати тестів',
    lead: 'Конвеєр доктрини прогнано end-to-end проти живого ембедера на GPU — запис, пошук, навчання, керування.',
    rows: [
      { check: 'Запис', detail: 'Нові записи проіндексовано та доступні для пошуку' },
      { check: 'Семантичне читання', detail: 'Запит за змістом повернув саме релевантну розвідку зверху' },
      { check: 'Дебрифінг → доктрина', detail: 'Підсумок інциденту записано назад як урок для перевірки' },
      { check: 'Керування', detail: 'Уроки на розгляді виключені з живого reasoning до затвердження' },
    ],
    note: 'End-to-end на живому ембедері srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) поверх Qdrant — 2026-06-13.',
  },
  sr: {
    h: 'Validacija i rezultati testova',
    lead: 'Doktrinski pipeline je testiran end-to-end u odnosu na uživo embeder na GPU-u — pisanje, pretraga, učenje, upravljanje.',
    rows: [
      { check: 'Pisanje', detail: 'Novi unosi indeksirani i dostupni za pretragu' },
      { check: 'Semantičko čitanje', detail: 'Upit po nameri je vratio tačno relevantnu obaveštajnu informaciju na vrhu' },
      { check: 'Debrifing → doktrina', detail: 'Ishod incidenta zapisan nazad kao lekcija za pregled' },
      { check: 'Upravljanje', detail: 'Lekcije na čekanju isključene iz uživo rezonovanja do odobrenja' },
    ],
    note: 'End-to-end na uživo embederu srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) preko Qdrant-a — 2026-06-13.',
  },
  pt: {
    h: 'Resultados de validação e testes',
    lead: 'O pipeline de doutrina foi testado ponta a ponta contra um embedder ao vivo em GPU — escrita, recuperação, aprendizado, governança.',
    rows: [
      { check: 'Escrita', detail: 'Novas entradas indexadas e disponíveis para recuperação' },
      { check: 'Leitura semântica', detail: 'Uma consulta por intenção retornou exatamente a informação relevante no topo' },
      { check: 'Debriefing → doutrina', detail: 'Resultado do incidente reescrito como uma lição revisável' },
      { check: 'Governança', detail: 'Lições pendentes excluídas do raciocínio ao vivo até aprovação' },
    ],
    note: 'Ponta a ponta no embedder ao vivo srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) sobre Qdrant — 2026-06-13.',
  },
  hi: {
    h: 'सत्यापन और परीक्षण परिणाम',
    lead: 'डॉक्ट्रिन पाइपलाइन को GPU पर एक लाइव एम्बेडर के विरुद्ध एंड-टू-एंड परखा गया — लेखन, पुनर्प्राप्ति, अधिगम, गवर्नेंस।',
    rows: [
      { check: 'लेखन', detail: 'नई प्रविष्टियाँ इंडेक्स की गईं और पुनर्प्राप्ति योग्य बनाई गईं' },
      { check: 'सिमैंटिक रीड', detail: 'मंशा के आधार पर क्वेरी ने शीर्ष पर बिल्कुल प्रासंगिक जानकारी लौटाई' },
      { check: 'डीब्रीफ → डॉक्ट्रिन', detail: 'घटना का परिणाम समीक्षा योग्य सबक के रूप में वापस लिखा गया' },
      { check: 'गवर्नेंस', detail: 'स्वीकृति तक लंबित सबक लाइव रीज़निंग से बाहर रखे गए' },
    ],
    note: 'लाइव srag-l4 एम्बेडर (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) पर Qdrant के साथ एंड-टू-एंड — 2026-06-13।',
  },
  tr: {
    h: 'Doğrulama ve test sonuçları',
    lead: 'Doktrin hattı, GPU üzerinde canlı bir embedder\'a karşı uçtan uca test edildi — yazma, erişim, öğrenme, yönetişim.',
    rows: [
      { check: 'Yazma', detail: 'Yeni kayıtlar indekslendi ve erişilebilir hale getirildi' },
      { check: 'Anlamsal okuma', detail: 'Niyete göre bir sorgu, en ilgili bilgiyi tam olarak üste getirdi' },
      { check: 'Bilgilendirme → doktrin', detail: 'Olay sonucu incelenebilir bir ders olarak geri yazıldı' },
      { check: 'Yönetişim', detail: 'Onaylanana kadar bekleyen dersler canlı akıl yürütmeden hariç tutuldu' },
    ],
    note: "Qdrant üzerinde canlı srag-l4 embedder'ında (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) uçtan uca — 2026-06-13.",
  },
  ar: {
    h: 'نتائج التحقق والاختبار',
    lead: 'تم اختبار خط أنابيب العقيدة من طرف إلى طرف مقابل مُضمِّن حي على GPU — الكتابة، الاسترجاع، التعلّم، الحوكمة.',
    rows: [
      { check: 'الكتابة', detail: 'تمت فهرسة الإدخالات الجديدة وجعلها قابلة للاسترجاع' },
      { check: 'القراءة الدلالية', detail: 'أعاد استعلام حسب النية المعلومات الاستخباراتية ذات الصلة بالضبط في الأعلى' },
      { check: 'الاستخلاص ← العقيدة', detail: 'أُعيدت كتابة نتيجة الحادثة كدرس قابل للمراجعة' },
      { check: 'الحوكمة', detail: 'الدروس المعلّقة مستبعدة من الاستدلال الحي حتى الموافقة عليها' },
    ],
    note: 'من طرف إلى طرف على مُضمِّن srag-l4 الحي (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) فوق Qdrant — 2026-06-13.',
  },
  el: {
    h: 'Αποτελέσματα επικύρωσης και δοκιμών',
    lead: 'Η ροή της δόγμα δοκιμάστηκε από άκρη σε άκρη έναντι ενός ζωντανού embedder σε GPU — εγγραφή, ανάκτηση, μάθηση, διακυβέρνηση.',
    rows: [
      { check: 'Εγγραφή', detail: 'Νέες καταχωρίσεις ευρετηριάστηκαν και έγιναν ανακτήσιμες' },
      { check: 'Σημασιολογική ανάγνωση', detail: 'Ένα ερώτημα βάσει πρόθεσης επέστρεψε ακριβώς τη σχετική πληροφορία στην κορυφή' },
      { check: 'Απολογισμός → δόγμα', detail: 'Το αποτέλεσμα του περιστατικού καταγράφηκε ως επανεξετάσιμο μάθημα' },
      { check: 'Διακυβέρνηση', detail: 'Τα εκκρεμή μαθήματα εξαιρούνται από τη ζωντανή συλλογιστική μέχρι την έγκριση' },
    ],
    note: 'Από άκρη σε άκρη στον ζωντανό embedder srag-l4 (Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B) πάνω από το Qdrant — 2026-06-13.',
  },
  zh: {
    h: '驗證與測試結果',
    lead: '知識庫流程已針對 GPU 上的即時嵌入模型完成端到端驗證——寫入、檢索、學習、治理。',
    rows: [
      { check: '寫入', detail: '新條目已建立索引並可供檢索' },
      { check: '語義讀取', detail: '依意圖查詢，將最相關的情報精準置頂' },
      { check: '復盤 → 知識庫', detail: '事件結果回寫為可審閱的經驗' },
      { check: '治理', detail: '待審經驗在核准前不進入即時推理' },
    ],
    note: '於即時 srag-l4 嵌入模型（Qwen3-VL-Embedding-8B + Qwen3-VL-Reranker-2B）搭配 Qdrant 完成端到端驗證——2026-06-13。',
  },
};

export default function DoctrineValidation() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="overflow-x-auto rounded-xl border border-emerald-500/20">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white/70">
                <th className="px-4 py-3 font-semibold">Check</th>
                <th className="px-4 py-3 font-semibold">Detail</th>
                <th className="px-4 py-3 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {d.rows.map((r) => (
                <tr key={r.check} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 font-medium text-white/90">{r.check}</td>
                  <td className="px-4 py-3 text-white/60">{r.detail}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-300">✅ PASS</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-white/45">{d.note}</p>
      </div>
    </section>
  );
}
