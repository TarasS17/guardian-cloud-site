'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = {
  sub: string;
  tagline: string;
  paras: string[];
  label: string;
  hl: { phrase: string; body: string };
};

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'your AI cyber-defense officer',
    tagline: 'doesn’t just detect — it strikes back',
    paras: [
      'ITDR holds the line on your servers around the clock: it catches intrusions, attacks and viruses the moment they appear — and responds on its own, automatically.',
      'This is not a passive monitor that fires an alert and waits for a human. Three detection shields catch a threat in a fraction of a second, the AI officer reasons about it, checks it against doctrine and returns a verdict — then blocks and repels the attack or removes the virus while you sleep.',
      'If a threat goes beyond the standard response, the officer escalates it to a human, preserving every piece of evidence for review.',
      'Attacks don’t wait for business hours. Neither does ITDR.',
    ],
    label: 'Retaliation strike',
    hl: {
      phrase: 'We don’t just defend you — we hit back hard at the aggressor who attacked you.',
      body: 'The officer runs a full investigation, identifies the attacker and delivers a retaliation strike — traps and disinformation on your own server, listing the attacker on global blocklists, and coordinating takedown of their infrastructure with ISPs and authorities. All strictly within the rules of engagement (ROE) and with your approval.',
    },
  },
  ru: {
    sub: 'ваш AI-офицер кибербезопасности',
    tagline: 'не просто детектирует — отвечает ударом',
    paras: [
      'ITDR держит оборону ваших серверов круглосуточно: замечает вторжения, атаки и вирусы в момент их появления — и отвечает сам, в автоматическом режиме.',
      'Это не пассивный монитор, который шлёт алерт и ждёт человека. Три щита-детектора ловят угрозу за доли секунды, AI-офицер осмысливает её, сверяется с доктриной и выносит вердикт — а затем блокирует и отражает атаку или уничтожает вирус, пока вы спите.',
      'Если угроза выходит за рамки штатной реакции, офицер эскалирует её человеку, сохранив все улики для разбора.',
      'Атаки не ждут рабочего дня. ITDR — тоже.',
    ],
    label: 'Удар возмездия',
    hl: {
      phrase: 'Мы не просто защищаем вас — мы максимально жёстко наказываем агрессора, напавшего на вас.',
      body: 'Офицер проводит полное расследование, устанавливает атакующего и наносит удар возмездия — ловушки и дезинформация на вашем сервере, занесение атакующего в глобальные чёрные списки, координация takedown его инфраструктуры с провайдерами и правоохранителями. Всё — строго по правилам применения (ROE) и с вашего одобрения.',
    },
  },
  zh: {
    sub: '您的 AI 資安官',
    tagline: '不只是偵測——更會反擊',
    paras: [
      'ITDR 全天候守護您的伺服器：在入侵、攻擊與病毒出現的瞬間就將其捕捉，並以全自動模式自行回應。',
      '這絕非被動發送告警、等待人工處理的監控工具。三重偵測護盾在須臾之間捕捉威脅，AI 安全官隨即推理研判、比對知識庫並做出裁決——接著在您安睡時攔截並擊退攻擊，或清除病毒。',
      '若威脅超出標準回應範圍，安全官會將其上報人工，並完整保全所有證據以供調查。',
      '攻擊不會挑上班時間，ITDR 亦然。',
    ],
    label: '反制打擊',
    hl: {
      phrase: '我們不只是防守——對於膽敢攻擊您的侵略者，我們予以最嚴厲的反擊。',
      body: '安全官展開完整調查、鎖定攻擊者，並發動「反制打擊」——在您的伺服器上佈下誘餌與假情報，將攻擊者列入全球黑名單，並協同網路供應商與執法機關對其基礎設施進行下架（takedown）。一切均嚴格遵循交戰守則（ROE），並在取得您的授權後執行。',
    },
  },
  fr: {
    sub: 'votre officier de cyberdéfense IA',
    tagline: 'ne se contente pas de détecter — il riposte',
    paras: [
      'ITDR tient la ligne sur vos serveurs 24h/24 : il capte intrusions, attaques et virus dès leur apparition — et réagit seul, automatiquement.',
      'Ce n’est pas un moniteur passif qui déclenche une alerte et attend un humain. Trois boucliers de détection interceptent une menace en une fraction de seconde, l’officier IA raisonne, vérifie la doctrine et rend un verdict — puis bloque et repousse l’attaque ou supprime le virus pendant que vous dormez.',
      'Si une menace dépasse la réponse standard, l’officier l’escalade vers un humain, en préservant chaque élément de preuve pour examen.',
      'Les attaques n’attendent pas les heures de bureau. ITDR non plus.',
    ],
    label: 'Frappe de représailles',
    hl: {
      phrase: 'Nous ne nous contentons pas de vous défendre — nous ripostons durement contre l’agresseur qui vous a attaqué.',
      body: 'L’officier mène une enquête complète, identifie l’attaquant et délivre une frappe de représailles — pièges et désinformation sur votre propre serveur, inscription de l’attaquant sur des listes noires mondiales, et coordination du démantèlement de son infrastructure avec les FAI et les autorités. Toujours strictement dans le cadre des règles d’engagement (ROE) et avec votre approbation.',
    },
  },
  de: {
    sub: 'Ihr KI-Cyberabwehroffizier',
    tagline: 'erkennt nicht nur — er schlägt zurück',
    paras: [
      'ITDR hält rund um die Uhr die Stellung auf Ihren Servern: Es erkennt Eindringlinge, Angriffe und Viren im Moment ihres Auftretens — und reagiert selbstständig, vollautomatisch.',
      'Das ist kein passiver Monitor, der einen Alarm auslöst und auf einen Menschen wartet. Drei Erkennungsschilde fangen eine Bedrohung binnen Sekundenbruchteilen ab, der KI-Offizier bewertet sie, prüft sie gegen die Doktrin und fällt ein Urteil — und blockiert dann den Angriff oder entfernt den Virus, während Sie schlafen.',
      'Geht eine Bedrohung über die Standardreaktion hinaus, eskaliert der Offizier sie an einen Menschen und bewahrt dabei jedes Beweisstück zur Prüfung auf.',
      'Angriffe warten nicht auf Geschäftszeiten. ITDR auch nicht.',
    ],
    label: 'Vergeltungsschlag',
    hl: {
      phrase: 'Wir verteidigen Sie nicht nur — wir schlagen hart gegen den Angreifer zurück, der Sie attackiert hat.',
      body: 'Der Offizier führt eine vollständige Untersuchung durch, identifiziert den Angreifer und führt einen Vergeltungsschlag aus — Fallen und Desinformation auf Ihrem eigenen Server, Eintrag des Angreifers in globale Sperrlisten und Koordination der Abschaltung seiner Infrastruktur mit ISPs und Behörden. Stets streng innerhalb der Einsatzregeln (ROE) und mit Ihrer Zustimmung.',
    },
  },
  es: {
    sub: 'su oficial de ciberdefensa con IA',
    tagline: 'no solo detecta — contraataca',
    paras: [
      'ITDR mantiene la línea en sus servidores las 24 horas: detecta intrusiones, ataques y virus en el instante en que aparecen — y responde por sí solo, de forma automática.',
      'Esto no es un monitor pasivo que dispara una alerta y espera a un humano. Tres escudos de detección atrapan una amenaza en una fracción de segundo, el oficial de IA la razona, la contrasta con la doctrina y emite un veredicto — luego bloquea y repele el ataque o elimina el virus mientras usted duerme.',
      'Si una amenaza supera la respuesta estándar, el oficial la escala a un humano, preservando cada prueba para su revisión.',
      'Los ataques no esperan al horario laboral. ITDR tampoco.',
    ],
    label: 'Golpe de represalia',
    hl: {
      phrase: 'No solo lo defendemos — devolvemos el golpe con dureza al agresor que lo atacó.',
      body: 'El oficial realiza una investigación completa, identifica al atacante y ejecuta un golpe de represalia — trampas y desinformación en su propio servidor, inclusión del atacante en listas negras globales y coordinación del derribo de su infraestructura con ISPs y autoridades. Todo estrictamente dentro de las reglas de enfrentamiento (ROE) y con su aprobación.',
    },
  },
  it: {
    sub: 'il vostro ufficiale di ciberdifesa AI',
    tagline: 'non si limita a rilevare — reagisce',
    paras: [
      'ITDR presidia i vostri server 24 ore su 24: rileva intrusioni, attacchi e virus nel momento in cui compaiono — e risponde da solo, in automatico.',
      'Non è un monitor passivo che lancia un avviso e aspetta un umano. Tre scudi di rilevamento catturano una minaccia in una frazione di secondo, l’ufficiale AI la valuta, la confronta con la dottrina e formula un verdetto — poi blocca e respinge l’attacco o rimuove il virus mentre dormite.',
      'Se una minaccia supera la risposta standard, l’ufficiale la inoltra a un umano, preservando ogni prova per la revisione.',
      'Gli attacchi non aspettano l’orario di lavoro. Nemmeno ITDR.',
    ],
    label: 'Colpo di rappresaglia',
    hl: {
      phrase: 'Non ci limitiamo a difendervi — colpiamo duramente l’aggressore che vi ha attaccato.',
      body: 'L’ufficiale conduce un’indagine completa, identifica l’attaccante ed esegue un colpo di rappresaglia — trappole e disinformazione sul vostro stesso server, inserimento dell’attaccante in liste nere globali e coordinamento della disattivazione della sua infrastruttura con ISP e autorità. Tutto rigorosamente entro le regole d’ingaggio (ROE) e con la vostra approvazione.',
    },
  },
  ja: {
    sub: 'あなたのAIサイバー防衛オフィサー',
    tagline: '検知するだけでなく——反撃する',
    paras: [
      'ITDRはサーバーを24時間365日守り抜きます。侵入・攻撃・ウイルスが現れた瞬間に検知し、自ら自動的に対応します。',
      'これはアラートを出して人間を待つだけの受動的な監視ツールではありません。3つの検知シールドが一瞬で脅威を捉え、AIオフィサーが推論し、ドクトリンと照合して判定を下します——そしてあなたが眠っている間に攻撃を遮断・撃退し、ウイルスを除去します。',
      '脅威が標準対応を超える場合、オフィサーはすべての証拠を保全したうえで人間にエスカレーションします。',
      '攻撃は営業時間を待ちません。ITDRも同じです。',
    ],
    label: '報復攻撃',
    hl: {
      phrase: '私たちは守るだけではありません——あなたを攻撃した敵に対して徹底的に反撃します。',
      body: 'オフィサーは徹底的な調査を行い、攻撃者を特定し、報復攻撃を実行します——自社サーバー上での罠と偽情報、攻撃者をグローバルなブロックリストに登録すること、そしてISPや当局と連携した攻撃者インフラの停止調整です。すべては交戦規定（ROE）を厳格に遵守し、あなたの承認のもとでのみ行われます。',
    },
  },
  uk: {
    sub: 'ваш AI-офіцер кібербезпеки',
    tagline: 'не просто виявляє — відповідає ударом',
    paras: [
      'ITDR тримає оборону ваших серверів цілодобово: помічає вторгнення, атаки та віруси в момент їх появи — і відповідає сам, в автоматичному режимі.',
      'Це не пасивний монітор, який шле алерт і чекає людину. Три щити-детектори ловлять загрозу за частки секунди, AI-офіцер осмислює її, звіряється з доктриною і виносить вердикт — а потім блокує й відбиває атаку або знищує вірус, поки ви спите.',
      'Якщо загроза виходить за межі штатної реакції, офіцер ескалує її людині, зберігши всі докази для розгляду.',
      'Атаки не чекають робочого дня. ITDR — теж.',
    ],
    label: 'Удар відплати',
    hl: {
      phrase: 'Ми не просто захищаємо вас — ми максимально жорстко караємо агресора, який на вас напав.',
      body: 'Офіцер проводить повне розслідування, встановлює атакуючого і завдає удару відплати — пастки та дезінформація на вашому сервері, внесення атакуючого до глобальних чорних списків, координація takedown його інфраструктури з провайдерами та правоохоронцями. Все — суворо за правилами застосування (ROE) і з вашого схвалення.',
    },
  },
  sr: {
    sub: 'vaš AI oficir za sajber odbranu',
    tagline: 'ne samo da detektuje — već uzvraća udarac',
    paras: [
      'ITDR drži liniju odbrane vaših servera 24 sata dnevno: uočava upade, napade i viruse u trenutku pojave — i reaguje sam, potpuno automatski.',
      'Ovo nije pasivni monitor koji šalje upozorenje i čeka čoveka. Tri detekciona štita hvataju pretnju za delić sekunde, AI oficir je analizira, proverava prema doktrini i donosi presudu — a zatim blokira i odbija napad ili uklanja virus dok vi spavate.',
      'Ako pretnja prevaziđe standardni odgovor, oficir je eskalira čoveku, čuvajući svaki dokaz za pregled.',
      'Napadi ne čekaju radno vreme. Ni ITDR ne čeka.',
    ],
    label: 'Odmazdujući udar',
    hl: {
      phrase: 'Mi vas ne samo branimo — mi žestoko uzvraćamo agresoru koji vas je napao.',
      body: 'Oficir sprovodi potpunu istragu, identifikuje napadača i izvodi odmazdujući udar — zamke i dezinformacije na vašem sopstvenom serveru, uvrštavanje napadača na globalne crne liste i koordinaciju gašenja njegove infrastrukture sa ISP-ovima i vlastima. Sve strogo u okviru pravila angažovanja (ROE) i uz vaše odobrenje.',
    },
  },
  pt: {
    sub: 'o seu oficial de ciberdefesa com IA',
    tagline: 'não se limita a detetar — contra-ataca',
    paras: [
      'O ITDR mantém a linha de defesa dos seus servidores 24 horas por dia: deteta intrusões, ataques e vírus no momento em que surgem — e responde sozinho, de forma automática.',
      'Isto não é um monitor passivo que dispara um alerta e espera por um humano. Três escudos de deteção capturam uma ameaça numa fração de segundo, o oficial de IA raciocina sobre ela, verifica-a face à doutrina e emite um veredito — depois bloqueia e repele o ataque ou remove o vírus enquanto dorme.',
      'Se uma ameaça ultrapassar a resposta padrão, o oficial escala-a para um humano, preservando todas as provas para análise.',
      'Os ataques não esperam pelo horário comercial. O ITDR também não.',
    ],
    label: 'Ataque de retaliação',
    hl: {
      phrase: 'Não nos limitamos a defendê-lo — contra-atacamos com força o agressor que o atacou.',
      body: 'O oficial conduz uma investigação completa, identifica o atacante e executa um ataque de retaliação — armadilhas e desinformação no seu próprio servidor, inclusão do atacante em listas negras globais e coordenação do desmantelamento da sua infraestrutura com ISPs e autoridades. Tudo estritamente dentro das regras de empenhamento (ROE) e com a sua aprovação.',
    },
  },
  hi: {
    sub: 'आपका AI साइबर-डिफेंस अधिकारी',
    tagline: 'सिर्फ पहचानता नहीं — पलटवार करता है',
    paras: [
      'ITDR आपके सर्वर की चौबीसों घंटे रक्षा करता है: घुसपैठ, हमले और वायरस को प्रकट होते ही पकड़ लेता है — और स्वतः, स्वचालित रूप से जवाब देता है।',
      'यह कोई निष्क्रिय मॉनिटर नहीं है जो अलर्ट भेजकर इंसान का इंतज़ार करे। तीन डिटेक्शन शील्ड सेकंड के एक अंश में खतरे को पकड़ लेते हैं, AI अधिकारी उस पर विचार करता है, सिद्धांत (doctrine) से मिलान करता है और निर्णय देता है — फिर आपके सोते समय हमले को रोकता और पीछे धकेलता है या वायरस को हटा देता है।',
      'यदि खतरा मानक प्रतिक्रिया की सीमा से आगे बढ़ जाए, तो अधिकारी हर सबूत को सुरक्षित रखते हुए इसे किसी इंसान तक पहुंचाता है।',
      'हमले कार्यालय समय का इंतज़ार नहीं करते। ITDR भी नहीं करता।',
    ],
    label: 'प्रतिशोधात्मक प्रहार',
    hl: {
      phrase: 'हम सिर्फ आपकी रक्षा नहीं करते — हम आप पर हमला करने वाले आक्रमणकारी पर कड़ा पलटवार करते हैं।',
      body: 'अधिकारी पूरी जांच करता है, हमलावर की पहचान करता है और एक प्रतिशोधात्मक प्रहार करता है — आपके अपने सर्वर पर जाल और भ्रामक सूचना, हमलावर को वैश्विक ब्लॉकलिस्ट में डालना, और ISP व अधिकारियों के साथ मिलकर उसके इन्फ्रास्ट्रक्चर को बंद करवाना। यह सब सख्ती से रूल्स ऑफ एंगेजमेंट (ROE) के दायरे में और आपकी स्वीकृति के साथ होता है।',
    },
  },
  tr: {
    sub: 'yapay zeka siber savunma subayınız',
    tagline: 'yalnızca tespit etmez — misilleme yapar',
    paras: [
      'ITDR sunucularınızı 7/24 korur: sızmaları, saldırıları ve virüsleri ortaya çıktıkları anda yakalar — ve kendi başına, otomatik olarak yanıt verir.',
      'Bu, uyarı gönderip bir insanı bekleyen pasif bir izleme aracı değildir. Üç tespit kalkanı bir saniyenin küçük bir kesrinde tehdidi yakalar, AI subayı üzerinde muhakeme yürütür, doktrine göre kontrol eder ve karar verir — ardından siz uyurken saldırıyı engelleyip püskürtür veya virüsü kaldırır.',
      'Bir tehdit standart yanıtın ötesine geçerse, subay tüm kanıtları inceleme için koruyarak durumu bir insana yükseltir.',
      'Saldırılar mesai saatlerini beklemez. ITDR da beklemez.',
    ],
    label: 'Misilleme saldırısı',
    hl: {
      phrase: 'Sizi yalnızca savunmuyoruz — size saldıran tarafa sertçe karşılık veriyoruz.',
      body: "Subay kapsamlı bir soruşturma yürütür, saldırganı tespit eder ve bir misilleme saldırısı gerçekleştirir — kendi sunucunuzda tuzaklar ve yanlış bilgilendirme, saldırganı küresel kara listelere kaydetme ve altyapısının kapatılmasını ISS'ler ve yetkililerle koordine etme. Tüm bunlar sıkı bir şekilde angajman kuralları (ROE) çerçevesinde ve sizin onayınızla yapılır.",
    },
  },
  ar: {
    sub: 'ضابط الدفاع السيبراني الذكي الخاص بك',
    tagline: 'لا يكتفي بالرصد — بل يرد بالضربة',
    paras: [
      'يحمي ITDR خوادمكم على مدار الساعة: يرصد الاختراقات والهجمات والفيروسات لحظة ظهورها — ويستجيب من تلقاء نفسه وبشكل آلي بالكامل.',
      'هذا ليس مراقباً سلبياً يطلق تنبيهاً وينتظر إنساناً. ثلاث دروع كشف تلتقط التهديد في جزء من الثانية، ويحلله الضابط الذكي، ويطابقه مع العقيدة الأمنية ويصدر حكماً — ثم يحجب الهجوم ويصده أو يزيل الفيروس بينما أنتم نائمون.',
      'إذا تجاوز التهديد الاستجابة القياسية، يصعّده الضابط إلى إنسان، مع الحفاظ على كل دليل للمراجعة.',
      'الهجمات لا تنتظر ساعات العمل. ولا ITDR كذلك.',
    ],
    label: 'ضربة انتقامية',
    hl: {
      phrase: 'نحن لا نكتفي بالدفاع عنكم — بل نرد بقوة على المعتدي الذي هاجمكم.',
      body: 'يجري الضابط تحقيقاً كاملاً، ويحدد هوية المهاجم، وينفذ ضربة انتقامية — فخاخ ومعلومات مضللة على خادمكم الخاص، وإدراج المهاجم في قوائم الحظر العالمية، وتنسيق إسقاط بنيته التحتية مع مزودي الإنترنت والجهات المختصة. كل ذلك ضمن قواعد الاشتباك (ROE) وبموافقتكم فقط.',
    },
  },
  el: {
    sub: 'ο αξιωματικός κυβερνοάμυνας AI σας',
    tagline: 'δεν απλώς εντοπίζει — αντεπιτίθεται',
    paras: [
      'Το ITDR κρατά τη γραμμή άμυνας των διακομιστών σας όλο το εικοσιτετράωρο: εντοπίζει εισβολές, επιθέσεις και ιούς τη στιγμή που εμφανίζονται — και αντιδρά μόνο του, αυτόματα.',
      'Δεν πρόκειται για παθητικό σύστημα παρακολούθησης που στέλνει ειδοποίηση και περιμένει άνθρωπο. Τρεις ασπίδες ανίχνευσης πιάνουν μια απειλή σε κλάσματα δευτερολέπτου, ο αξιωματικός AI τη συλλογίζεται, τη διασταυρώνει με το δόγμα και εκδίδει απόφαση — έπειτα μπλοκάρει και απωθεί την επίθεση ή αφαιρεί τον ιό ενώ εσείς κοιμάστε.',
      'Αν μια απειλή ξεπεράσει την τυπική απόκριση, ο αξιωματικός την κλιμακώνει σε άνθρωπο, διατηρώντας κάθε αποδεικτικό στοιχείο για έλεγχο.',
      'Οι επιθέσεις δεν περιμένουν το ωράριο εργασίας. Ούτε το ITDR.',
    ],
    label: 'Χτύπημα αντεκδίκησης',
    hl: {
      phrase: 'Δεν σας υπερασπιζόμαστε απλώς — αντεπιτιθέμεθα σκληρά στον επιτιθέμενο που σας επιτέθηκε.',
      body: 'Ο αξιωματικός διεξάγει πλήρη έρευνα, ταυτοποιεί τον επιτιθέμενο και εκτελεί χτύπημα αντεκδίκησης — παγίδες και παραπληροφόρηση στον δικό σας διακομιστή, καταχώριση του επιτιθέμενου σε παγκόσμιες μαύρες λίστες και συντονισμό κατάργησης της υποδομής του με παρόχους και αρχές. Πάντα αυστηρά εντός των κανόνων εμπλοκής (ROE) και με τη δική σας έγκριση.',
    },
  },
};

/** Localized hero + intro for the ITDR module page (en / ru / zh). */
export default function ItdrIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/itdr_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">ITDR</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
          <p className="mt-2 text-base font-medium text-white/65 md:text-lg">{t.tagline}</p>
        </div>
      </VideoBackground>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          <p>{t.paras[0]}</p>
          <p>{t.paras[1]}</p>

          <div className="relative my-2 overflow-hidden rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-950/50 via-gray-900/50 to-orange-900/30 p-6 shadow-[0_8px_30px_rgba(244,63,94,0.18)] md:p-8">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-rose-500 to-orange-500" />
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
                {t.label}
              </span>
            </div>
            <p className="text-xl font-bold leading-snug text-white md:text-2xl">{t.hl.phrase}</p>
            <p className="mt-3 text-base leading-relaxed text-white/75">{t.hl.body}</p>
          </div>

          <p>{t.paras[2]}</p>
          <p>{t.paras[3]}</p>
        </div>
      </section>
    </>
  );
}
