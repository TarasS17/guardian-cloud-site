'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';

type Layer = { name: string; note: string };
type Data = { h: string; lead: string; layersH: string; layers: Layer[]; layerNote: string; evolveH: string; evolveLead: string };

const DATA: Record<string, Data> = {
  en: {
    h: 'Layered and governed',
    lead: 'Not all knowledge is equal. Doctrine is ranked by authority and gated by review.',
    layersH: 'The authority cascade',
    layers: [
      { name: 'Rules of engagement', note: 'always injected · top authority' },
      { name: 'Playbooks', note: 'operational procedures' },
      { name: 'Verified references', note: 'trusted intel & vendor guidance' },
      { name: 'Community knowledge', note: 'lowest authority' },
    ],
    layerNote: 'Higher-authority layers win when guidance conflicts. Unreviewed entries are excluded from live reasoning.',
    evolveH: 'The evolve loop',
    evolveLead: 'After an incident, the outcome is distilled into a lesson — held pending until a human approves it, then it becomes active doctrine. Superseded guidance is retired, never silently overwritten.',
  },
  ru: {
    h: 'Расслоено и управляемо',
    lead: 'Не всякое знание равноценно. Доктрина ранжирована по авторитету и закрыта ревью.',
    layersH: 'Каскад авторитета',
    layers: [
      { name: 'Правила применения (ROE)', note: 'всегда инжектятся · высший авторитет' },
      { name: 'Плейбуки', note: 'операционные процедуры' },
      { name: 'Проверенные источники', note: 'доверенная разведка и вендорские гайды' },
      { name: 'Community-знание', note: 'низший авторитет' },
    ],
    layerNote: 'При конфликте побеждает слой с более высоким авторитетом. Непроверенные записи исключены из живого reasoning.',
    evolveH: 'Evolve-петля',
    evolveLead: 'После инцидента вывод дистиллируется в урок — держится в pending до одобрения человеком, затем становится активной доктриной. Устаревшее руководство выводится из оборота, а не молча перезаписывается.',
  },
  zh: {
    h: '分層且受治理',
    lead: '並非所有知識都等價。知識庫依權威分級，並以審閱把關。',
    layersH: '權威階層',
    layers: [
      { name: '交戰守則（ROE）', note: '永遠注入 · 最高權威' },
      { name: '行動手冊', note: '操作程序' },
      { name: '經查證的參考', note: '可信情報與廠商指引' },
      { name: '社群知識', note: '最低權威' },
    ],
    layerNote: '指引衝突時，權威較高的層級勝出。未經審閱的條目不進入即時推理。',
    evolveH: '演進迴路',
    evolveLead: '事件之後，其結果被提煉為一則經驗——在人工核准前維持 pending 狀態，核准後即成為生效知識。被取代的指引會退役，而非被悄悄覆寫。',
  },
  fr: {
    h: 'Stratifié et gouverné',
    lead: 'Toutes les connaissances ne se valent pas. La doctrine est classée par autorité et filtrée par révision.',
    layersH: "La cascade d'autorité",
    layers: [
      { name: "Règles d'engagement", note: 'toujours injectées · autorité maximale' },
      { name: 'Playbooks', note: 'procédures opérationnelles' },
      { name: 'Références vérifiées', note: 'renseignements fiables & consignes des fournisseurs' },
      { name: 'Connaissance communautaire', note: 'autorité la plus faible' },
    ],
    layerNote: "La couche de plus haute autorité l'emporte en cas de conflit. Les entrées non révisées sont exclues du raisonnement en direct.",
    evolveH: 'La boucle evolve',
    evolveLead: "Après un incident, le résultat est distillé en une leçon — maintenue en attente jusqu'à approbation humaine, puis elle devient doctrine active. Les consignes remplacées sont retirées, jamais silencieusement écrasées.",
  },
  de: {
    h: 'Geschichtet und geregelt',
    lead: 'Nicht alles Wissen ist gleichwertig. Doctrine wird nach Autorität eingestuft und durch Review kontrolliert.',
    layersH: 'Die Autoritätskaskade',
    layers: [
      { name: 'Einsatzregeln', note: 'immer injiziert · höchste Autorität' },
      { name: 'Playbooks', note: 'operative Verfahren' },
      { name: 'Verifizierte Referenzen', note: 'vertrauenswürdige Erkenntnisse & Herstellerangaben' },
      { name: 'Community-Wissen', note: 'niedrigste Autorität' },
    ],
    layerNote: 'Bei widersprüchlichen Angaben gewinnt die Schicht mit höherer Autorität. Ungeprüfte Einträge sind vom Live-Reasoning ausgeschlossen.',
    evolveH: 'Die Evolve-Schleife',
    evolveLead: 'Nach einem Vorfall wird das Ergebnis zu einer Lektion destilliert — sie bleibt ausstehend, bis ein Mensch sie freigibt, dann wird sie aktive Doctrine. Überholte Vorgaben werden ausgemustert, nie stillschweigend überschrieben.',
  },
  es: {
    h: 'Estratificado y gobernado',
    lead: 'No todo el conocimiento es igual. Doctrine se clasifica por autoridad y se filtra mediante revisión.',
    layersH: 'La cascada de autoridad',
    layers: [
      { name: 'Reglas de enfrentamiento', note: 'siempre inyectadas · máxima autoridad' },
      { name: 'Playbooks', note: 'procedimientos operativos' },
      { name: 'Referencias verificadas', note: 'inteligencia confiable y guías de proveedores' },
      { name: 'Conocimiento comunitario', note: 'menor autoridad' },
    ],
    layerNote: 'La capa de mayor autoridad prevalece cuando hay conflicto. Las entradas no revisadas quedan excluidas del razonamiento en vivo.',
    evolveH: 'El bucle evolve',
    evolveLead: 'Tras un incidente, el resultado se destila en una lección — se mantiene pendiente hasta que un humano la aprueba, luego se convierte en doctrina activa. Las directrices reemplazadas se retiran, nunca se sobrescriben silenciosamente.',
  },
  it: {
    h: 'Stratificato e governato',
    lead: 'Non tutta la conoscenza ha lo stesso valore. Doctrine è classificata per autorità e filtrata dalla revisione.',
    layersH: 'La cascata di autorità',
    layers: [
      { name: "Regole d'ingaggio", note: 'sempre iniettate · massima autorità' },
      { name: 'Playbook', note: 'procedure operative' },
      { name: 'Riferimenti verificati', note: 'intelligence affidabile e linee guida dei fornitori' },
      { name: 'Conoscenza della community', note: 'autorità più bassa' },
    ],
    layerNote: 'Lo strato con autorità maggiore prevale in caso di conflitto. Le voci non revisionate sono escluse dal ragionamento live.',
    evolveH: 'Il ciclo evolve',
    evolveLead: "Dopo un incidente, l'esito viene distillato in una lezione — resta in sospeso finché un umano non la approva, poi diventa doctrine attiva. Le linee guida superate vengono ritirate, mai sovrascritte silenziosamente.",
  },
  ja: {
    h: '階層化され統治される',
    lead: 'すべての知識が等価ではありません。Doctrineは権威によってランク付けされ、レビューによって関門が設けられます。',
    layersH: '権威のカスケード',
    layers: [
      { name: '交戦規定', note: '常に注入 · 最上位の権威' },
      { name: 'プレイブック', note: '運用手順' },
      { name: '検証済み参照資料', note: '信頼できるインテリジェンスとベンダーガイダンス' },
      { name: 'コミュニティ知識', note: '最下位の権威' },
    ],
    layerNote: '指針が矛盾する場合は、より権威の高い層が優先されます。未レビューの項目はライブ推論から除外されます。',
    evolveH: 'evolveループ',
    evolveLead: 'インシデントの後、その結果は教訓として蒸留されます——人間が承認するまで保留され、承認されると有効なdoctrineになります。置き換えられた指針は退役し、静かに上書きされることはありません。',
  },
  uk: {
    h: 'Розшароване й кероване',
    lead: 'Не всі знання рівноцінні. Doctrine ранжується за авторитетом і фільтрується ревʼю.',
    layersH: 'Каскад авторитету',
    layers: [
      { name: 'Правила застосування', note: 'завжди інжектуються · найвищий авторитет' },
      { name: 'Плейбуки', note: 'операційні процедури' },
      { name: 'Перевірені джерела', note: 'довірена розвідка та настанови вендорів' },
      { name: 'Знання спільноти', note: 'найнижчий авторитет' },
    ],
    layerNote: 'При конфлікті перемагає шар із вищим авторитетом. Неперевірені записи виключені з живого reasoning.',
    evolveH: 'Evolve-цикл',
    evolveLead: 'Після інциденту результат дистилюється в урок — тримається в очікуванні, доки людина не схвалить, потім стає активною доктриною. Застаріле керівництво виводиться з обігу, а не мовчки перезаписується.',
  },
  sr: {
    h: 'Slojevito i upravljano',
    lead: 'Nije sve znanje jednako. Doctrine se rangira po autoritetu i filtrira revizijom.',
    layersH: 'Kaskada autoriteta',
    layers: [
      { name: 'Pravila angažovanja', note: 'uvek ubačena · najviši autoritet' },
      { name: 'Priručnici (playbooks)', note: 'operativne procedure' },
      { name: 'Proverene reference', note: 'pouzdane obaveštajne informacije i uputstva dobavljača' },
      { name: 'Znanje zajednice', note: 'najniži autoritet' },
    ],
    layerNote: 'Kada se uputstva sukobe, pobeđuje sloj sa višim autoritetom. Nepregledani unosi su isključeni iz živog rezonovanja.',
    evolveH: 'Evolve petlja',
    evolveLead: 'Nakon incidenta, ishod se destiluje u lekciju — ostaje na čekanju dok je čovek ne odobri, a zatim postaje aktivna doctrine. Zastarela uputstva se povlače, nikada tiho ne prepisuju.',
  },
  pt: {
    h: 'Estratificado e governado',
    lead: 'Nem todo conhecimento é igual. Doctrine é classificada por autoridade e filtrada por revisão.',
    layersH: 'A cascata de autoridade',
    layers: [
      { name: 'Regras de engajamento', note: 'sempre injetadas · autoridade máxima' },
      { name: 'Playbooks', note: 'procedimentos operacionais' },
      { name: 'Referências verificadas', note: 'inteligência confiável e diretrizes de fornecedores' },
      { name: 'Conhecimento da comunidade', note: 'menor autoridade' },
    ],
    layerNote: 'A camada de maior autoridade prevalece quando as orientações entram em conflito. Entradas não revisadas são excluídas do raciocínio ao vivo.',
    evolveH: 'O ciclo evolve',
    evolveLead: 'Após um incidente, o resultado é destilado em uma lição — fica pendente até um humano aprová-la, depois se torna doctrine ativa. Orientações substituídas são aposentadas, nunca sobrescritas silenciosamente.',
  },
  hi: {
    h: 'स्तरीकृत और शासित',
    lead: 'सारा ज्ञान समान नहीं है। Doctrine को अधिकार के अनुसार क्रमबद्ध किया जाता है और समीक्षा द्वारा नियंत्रित किया जाता है।',
    layersH: 'अधिकार का क्रम (cascade)',
    layers: [
      { name: 'सगाई के नियम', note: 'हमेशा शामिल · सर्वोच्च अधिकार' },
      { name: 'प्लेबुक', note: 'परिचालन प्रक्रियाएँ' },
      { name: 'सत्यापित संदर्भ', note: 'विश्वसनीय इंटेलिजेंस और विक्रेता मार्गदर्शन' },
      { name: 'सामुदायिक ज्ञान', note: 'सबसे कम अधिकार' },
    ],
    layerNote: 'जब मार्गदर्शन टकराता है, तो उच्च-अधिकार वाली परत जीतती है। असमीक्षित प्रविष्टियाँ लाइव रीज़निंग से बाहर रहती हैं।',
    evolveH: 'evolve लूप',
    evolveLead: 'किसी घटना के बाद, परिणाम को एक सबक में आसुत किया जाता है — मानव द्वारा अनुमोदित होने तक लंबित रखा जाता है, फिर यह सक्रिय doctrine बन जाता है। प्रतिस्थापित मार्गदर्शन सेवानिवृत्त किया जाता है, कभी चुपचाप अधिलेखित नहीं किया जाता।',
  },
  tr: {
    h: 'Katmanlı ve yönetimli',
    lead: 'Tüm bilgi eşit değildir. Doctrine yetkiye göre sıralanır ve incelemeyle kapı denetimine tabi tutulur.',
    layersH: 'Yetki basamağı',
    layers: [
      { name: 'Angajman kuralları', note: 'her zaman enjekte edilir · en üst yetki' },
      { name: "Playbook'lar", note: 'operasyonel prosedürler' },
      { name: 'Doğrulanmış referanslar', note: 'güvenilir istihbarat ve tedarikçi rehberliği' },
      { name: 'Topluluk bilgisi', note: 'en düşük yetki' },
    ],
    layerNote: 'Rehberlik çeliştiğinde daha yüksek yetkiye sahip katman kazanır. İncelenmemiş girdiler canlı akıl yürütmenin dışında tutulur.',
    evolveH: 'Evolve döngüsü',
    evolveLead: "Bir olaydan sonra sonuç bir derse damıtılır — bir insan onaylayana kadar beklemede tutulur, ardından etkin doctrine haline gelir. Yerini alan rehberlik emekliye ayrılır, asla sessizce üzerine yazılmaz.",
  },
  ar: {
    h: 'مُصنّفة طبقيًا وخاضعة للحوكمة',
    lead: 'ليست كل المعرفة متساوية. تُصنَّف Doctrine حسب السلطة وتُراجع قبل الاعتماد.',
    layersH: 'تسلسل السلطة',
    layers: [
      { name: 'قواعد الاشتباك', note: 'تُحقن دائمًا · أعلى سلطة' },
      { name: 'أدلة التشغيل (Playbooks)', note: 'إجراءات تشغيلية' },
      { name: 'مراجع موثقة', note: 'استخبارات موثوقة وإرشادات الموردين' },
      { name: 'معرفة المجتمع', note: 'أدنى سلطة' },
    ],
    layerNote: 'عند تعارض الإرشادات، تفوز الطبقة الأعلى سلطة. الإدخالات غير المراجعة تُستثنى من الاستدلال الحي.',
    evolveH: 'حلقة evolve',
    evolveLead: 'بعد الحادثة، تُقطَّر النتيجة إلى درس — يبقى معلقًا حتى يوافق عليه إنسان، ثم يصبح doctrine فعّالة. الإرشادات المستبدلة تُسحب من الخدمة، ولا تُستبدل أبدًا بصمت.',
  },
  el: {
    h: 'Διαστρωματωμένο και διακυβερνώμενο',
    lead: 'Δεν είναι όλη η γνώση ισότιμη. Το Doctrine κατατάσσεται κατά εξουσία και ελέγχεται μέσω αναθεώρησης.',
    layersH: 'Ο καταρράκτης εξουσίας',
    layers: [
      { name: 'Κανόνες εμπλοκής', note: 'πάντα ενσωματωμένοι · ανώτατη εξουσία' },
      { name: 'Playbooks', note: 'επιχειρησιακές διαδικασίες' },
      { name: 'Επαληθευμένες αναφορές', note: 'αξιόπιστες πληροφορίες & οδηγίες προμηθευτών' },
      { name: 'Γνώση κοινότητας', note: 'χαμηλότερη εξουσία' },
    ],
    layerNote: 'Το επίπεδο υψηλότερης εξουσίας υπερισχύει όταν οι οδηγίες συγκρούονται. Οι μη ελεγμένες καταχωρίσεις εξαιρούνται από τον ζωντανό συλλογισμό.',
    evolveH: 'Ο βρόχος evolve',
    evolveLead: 'Μετά από ένα περιστατικό, το αποτέλεσμα αποστάζεται σε ένα μάθημα — παραμένει σε αναμονή έως ότου το εγκρίνει άνθρωπος, και τότε γίνεται ενεργό doctrine. Οι οδηγίες που αντικαταστάθηκαν αποσύρονται, ποτέ δεν αντικαθίστανται σιωπηλά.',
  },
};

const EVOLVE = ['Incident outcome', 'Distill lesson', 'Pending review', 'Approved → active', 'Sharper decision'];
const LAYER_COLORS = ['#fb7185', '#f59e0b', '#38bdf8', '#8b5cf6'];

export default function DoctrineGoverned() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* authority cascade */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">{d.layersH}</h3>
            <div className="space-y-2">
              {d.layers.map((l, i) => (
                <div
                  key={l.name}
                  className="rounded-xl border p-4"
                  style={{
                    borderColor: `${LAYER_COLORS[i]}66`,
                    background: `linear-gradient(90deg, ${LAYER_COLORS[i]}1f, transparent)`,
                    marginLeft: `${i * 18}px`,
                  }}
                >
                  <p className="font-semibold text-white">{l.name}</p>
                  <p className="text-xs text-white/55">{l.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{d.layerNote}</p>
          </div>

          {/* evolve loop */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">{d.evolveH}</h3>
            <p className="mb-5 text-sm leading-relaxed text-white/75">{d.evolveLead}</p>
            <FlowMap caption="Debrief → doctrine learns" items={EVOLVE} />
          </div>
        </div>
      </div>
    </section>
  );
}
