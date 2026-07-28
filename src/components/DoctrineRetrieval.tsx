'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';

type Card = { h: string; body: string };
type Data = { h: string; lead: string; recall: Card; rerank: Card };

const DATA: Record<string, Data> = {
  en: {
    h: 'Two-stage semantic retrieval',
    lead: 'Recall broadly, then rerank precisely — so the model sees the few most relevant pieces, not a keyword dump.',
    recall: { h: 'Recall', body: 'The instruction-aware 8B embedder finds candidates by meaning, not exact words — so the officer’s intent (“how do I report and contain this attacker”) surfaces the right doctrine.' },
    rerank: { h: 'Rerank', body: 'A cross-encoder reranker scores each candidate against the query and keeps only the strongest — precision over volume.' },
  },
  ru: {
    h: 'Двухэтапный семантический поиск',
    lead: 'Сначала широкий recall, затем точный rerank — модель видит несколько самых релевантных фрагментов, а не свалку по ключевым словам.',
    recall: { h: 'Recall', body: 'Instruction-aware 8B-эмбеддер находит кандидатов по смыслу, а не по точным словам — намерение офицера («как зарепортить и сдержать этого атакующего») поднимает нужную доктрину.' },
    rerank: { h: 'Rerank', body: 'Кросс-энкодер-реранкер оценивает каждого кандидата против запроса и оставляет только сильнейших — точность важнее объёма.' },
  },
  fr: {
    h: 'Recherche sémantique en deux étapes',
    lead: 'Un recall large, puis un rerank précis — le modèle ne voit que les quelques éléments les plus pertinents, pas un amas de mots-clés.',
    recall: { h: 'Recall', body: "L'embedder 8B, sensible aux instructions, trouve les candidats par le sens et non par les mots exacts — l'intention de l'officier (\"comment signaler et contenir cet attaquant\") fait remonter la bonne doctrine." },
    rerank: { h: 'Rerank', body: 'Un reranker cross-encoder note chaque candidat par rapport à la requête et ne garde que les plus solides — la précision prime sur le volume.' },
  },
  de: {
    h: 'Zweistufige semantische Suche',
    lead: 'Erst breiter Recall, dann präzises Reranking — das Modell sieht nur die wenigen relevantesten Ausschnitte, keine Stichwort-Sammlung.',
    recall: { h: 'Recall', body: 'Der instruktionsbewusste 8B-Embedder findet Kandidaten nach Bedeutung, nicht nach exakten Wörtern — die Absicht des Officers ("wie melde und eindämme ich diesen Angreifer") bringt die richtige Doktrin nach oben.' },
    rerank: { h: 'Rerank', body: 'Ein Cross-Encoder-Reranker bewertet jeden Kandidaten gegen die Anfrage und behält nur die stärksten — Präzision vor Menge.' },
  },
  es: {
    h: 'Recuperación semántica en dos etapas',
    lead: 'Primero un recall amplio, luego un rerank preciso — el modelo ve solo los fragmentos más relevantes, no un volcado de palabras clave.',
    recall: { h: 'Recall', body: 'El embedder de 8B, consciente de instrucciones, encuentra candidatos por significado, no por palabras exactas — la intención del oficial ("cómo reportar y contener a este atacante") saca a la luz la doctrina correcta.' },
    rerank: { h: 'Rerank', body: 'Un reranker cross-encoder puntúa cada candidato frente a la consulta y conserva solo los más sólidos — precisión antes que volumen.' },
  },
  it: {
    h: 'Recupero semantico in due fasi',
    lead: 'Prima un recall ampio, poi un rerank preciso — il modello vede solo i pochi frammenti più rilevanti, non un ammasso di parole chiave.',
    recall: { h: 'Recall', body: "L'embedder da 8B, consapevole delle istruzioni, trova i candidati in base al significato, non alle parole esatte — l'intento dell'ufficiale (\"come segnalare e contenere questo attaccante\") fa emergere la dottrina giusta." },
    rerank: { h: 'Rerank', body: 'Un reranker cross-encoder valuta ogni candidato rispetto alla query e conserva solo i più forti — precisione prima del volume.' },
  },
  ja: {
    h: '2段階セマンティック検索',
    lead: 'まず広くリコールし、次に精密にリランク——モデルはキーワードの寄せ集めではなく、最も関連性の高い数件のみを見る。',
    recall: { h: 'リコール', body: '命令意図を理解する8Bエンベッダーが、正確な単語ではなく意味で候補を見つける——「この攻撃者をどう報告し封じ込めるか」という担当官の意図が、正しいドクトリンを引き出す。' },
    rerank: { h: 'リランク', body: 'クロスエンコーダー型リランカーがクエリに対して各候補を採点し、最も強いものだけを残す——量より精度。' },
  },
  uk: {
    h: 'Двоетапний семантичний пошук',
    lead: 'Спершу широкий recall, потім точний rerank — модель бачить лише кілька найрелевантніших фрагментів, а не звалище за ключовими словами.',
    recall: { h: 'Recall', body: 'Instruction-aware 8B-ембедер знаходить кандидатів за змістом, а не за точними словами — намір офіцера («як зарепортити та стримати цього атакувальника») піднімає потрібну доктрину.' },
    rerank: { h: 'Rerank', body: 'Крос-енкодер-реранкер оцінює кожного кандидата відносно запиту й залишає лише найсильніших — точність важливіша за обсяг.' },
  },
  sr: {
    h: 'Dvostepeno semantičko pretraživanje',
    lead: 'Prvo širok recall, zatim precizan rerank — model vidi samo nekoliko najrelevantnijih delova, a ne gomilu po ključnim rečima.',
    recall: { h: 'Recall', body: 'Embeder od 8B, svestan instrukcija, pronalazi kandidate po značenju, a ne po tačnim rečima — namera oficira ("kako da prijavim i obuzdam ovog napadača") izvlači pravu doktrinu.' },
    rerank: { h: 'Rerank', body: 'Cross-encoder reranker ocenjuje svakog kandidata u odnosu na upit i zadržava samo najjače — preciznost pre obima.' },
  },
  pt: {
    h: 'Recuperação semântica em duas etapas',
    lead: 'Primeiro um recall amplo, depois um rerank preciso — o modelo vê apenas os poucos trechos mais relevantes, não um amontoado de palavras-chave.',
    recall: { h: 'Recall', body: 'O embedder de 8B, sensível a instruções, encontra candidatos por significado, não por palavras exatas — a intenção do oficial ("como reportar e conter este atacante") traz à tona a doutrina certa.' },
    rerank: { h: 'Rerank', body: 'Um reranker cross-encoder pontua cada candidato em relação à consulta e mantém apenas os mais fortes — precisão acima de volume.' },
  },
  hi: {
    h: 'दो-चरणीय सिमैंटिक रिट्रीवल',
    lead: 'पहले व्यापक रिकॉल, फिर सटीक रीरैंक — ताकि मॉडल कीवर्ड के ढेर की बजाय केवल कुछ सबसे प्रासंगिक अंश देखे।',
    recall: { h: 'रिकॉल', body: 'इंस्ट्रक्शन-अवेयर 8B एम्बेडर सटीक शब्दों की बजाय अर्थ के आधार पर उम्मीदवार खोजता है — अधिकारी की मंशा ("इस हमलावर की रिपोर्ट और रोकथाम कैसे करें") सही डॉक्ट्रिन को सामने लाती है।' },
    rerank: { h: 'रीरैंक', body: 'एक क्रॉस-एनकोडर रीरैंकर हर उम्मीदवार को क्वेरी के मुकाबले स्कोर करता है और केवल सबसे मजबूत को रखता है — मात्रा से ज़्यादा सटीकता मायने रखती है।' },
  },
  tr: {
    h: 'İki aşamalı anlamsal erişim',
    lead: 'Önce geniş recall, sonra hassas rerank — model, anahtar kelime yığını yerine yalnızca en alakalı birkaç parçayı görür.',
    recall: { h: 'Recall', body: 'Talimat-farkında 8B embedder, tam kelimeler yerine anlama göre adayları bulur — subayın niyeti ("bu saldırganı nasıl bildirir ve durdururum") doğru doktrini öne çıkarır.' },
    rerank: { h: 'Rerank', body: 'Bir cross-encoder rerankçı her adayı sorguya karşı puanlar ve yalnızca en güçlülerini tutar — hacimden önce hassasiyet.' },
  },
  ar: {
    h: 'استرجاع دلالي على مرحلتين',
    lead: 'استدعاء واسع أولاً ثم إعادة ترتيب دقيقة — بحيث يرى النموذج أكثر القطع صلة فقط، لا ركام كلمات مفتاحية.',
    recall: { h: 'الاستدعاء', body: 'يجد المُضمِّن ذو 8 مليارات معلمة، المدرك للتعليمات، المرشحين بالمعنى لا بالكلمات الحرفية — فنية الضابط ("كيف أبلّغ عن هذا المهاجم وأحتويه") تُظهر العقيدة الصحيحة.' },
    rerank: { h: 'إعادة الترتيب', body: 'يقيّم مُعيد ترتيب من نوع cross-encoder كل مرشح مقابل الاستعلام ويُبقي فقط الأقوى — الدقة أهم من الكمّ.' },
  },
  el: {
    h: 'Σημασιολογική ανάκτηση δύο σταδίων',
    lead: 'Πρώτα ευρεία ανάκληση, μετά ακριβής επαναταξινόμηση — το μοντέλο βλέπει μόνο τα λίγα πιο σχετικά αποσπάσματα, όχι έναν σωρό λέξεων-κλειδιών.',
    recall: { h: 'Ανάκληση', body: 'Ο embedder 8B, ευαίσθητος σε οδηγίες, βρίσκει υποψηφίους βάσει νοήματος και όχι ακριβών λέξεων — η πρόθεση του αξιωματικού («πώς να αναφέρω και να περιορίσω αυτόν τον επιτιθέμενο») αναδεικνύει τη σωστή δόγμα.' },
    rerank: { h: 'Επαναταξινόμηση', body: 'Ένας cross-encoder επαναταξινομητής βαθμολογεί κάθε υποψήφιο σε σχέση με το ερώτημα και κρατά μόνο τους ισχυρότερους — ακρίβεια πάνω από όγκο.' },
  },
  zh: {
    h: '兩階段語義檢索',
    lead: '先廣泛召回，再精準重排——讓模型只看見最相關的少數片段，而非關鍵字堆砌。',
    recall: { h: '召回（Recall）', body: '具指令感知的 8B 嵌入模型按語義（而非字面）尋找候選——安全官的意圖（「如何呈報並圍堵此攻擊者」）即可帶出正確的知識。' },
    rerank: { h: '重排（Rerank）', body: '交叉編碼重排器針對查詢為每個候選評分，僅保留最強者——精準優於數量。' },
  },
};

const FLOW = ['Query · intent', 'Embed · Qwen3-VL-Embedding-8B · 1024-dim', 'Rerank · Qwen3-VL-Reranker-2B', 'Top-K → prompt'];

export default function DoctrineRetrieval() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <FlowMap caption="Retrieval pipeline" items={FLOW} colors={['#22d3ee', '#a855f7', '#fb7185', '#34d399']} />

        <div className="grid gap-4 md:grid-cols-2">
          {[d.recall, d.rerank].map((c) => (
            <div key={c.h} className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-900/15 to-gray-900/30 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">{c.h}</h3>
              <p className="text-sm leading-relaxed text-white/75">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
