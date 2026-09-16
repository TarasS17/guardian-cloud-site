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
    tagline: 'doesn’t just detect — it investigates and responds',
    paras: [
      'ITDR holds the line on your servers around the clock: it catches intrusions, attacks and viruses the moment they appear — and responds on its own, automatically.',
      'This is not a passive monitor that fires an alert and waits for a human. Three detection shields catch a threat in a fraction of a second, the AI officer reasons about it, checks it against doctrine and returns a verdict — then blocks and repels the attack or removes the virus while you sleep.',
      'If a threat goes beyond the standard response, the officer escalates it to a human, preserving every piece of evidence for review.',
      'Attacks don’t wait for business hours. Neither does ITDR.',
    ],
    label: 'Investigation & response',
    hl: {
      phrase: 'We don’t just defend you — we investigate the attack and respond through lawful channels.',
      body: 'The officer runs a full investigation, identifies the attacker and responds through lawful channels — traps and disinformation on your own server, listing the attacker on global blocklists, and coordinating with ISPs, CERTs and law enforcement. All strictly within the rules of engagement (ROE) and with your approval. Specific investigation and response options are configured individually and agreed directly at contract signing.',
    },
  },
  ru: {
    sub: 'ваш AI-офицер кибербезопасности',
    tagline: 'не просто детектирует — расследует и противодействует',
    paras: [
      'ITDR держит оборону ваших серверов круглосуточно: замечает вторжения, атаки и вирусы в момент их появления — и отвечает сам, в автоматическом режиме.',
      'Это не пассивный монитор, который шлёт алерт и ждёт человека. Три щита-детектора ловят угрозу за доли секунды, AI-офицер осмысливает её, сверяется с доктриной и выносит вердикт — а затем блокирует и отражает атаку или уничтожает вирус, пока вы спите.',
      'Если угроза выходит за рамки штатной реакции, офицер эскалирует её человеку, сохранив все улики для разбора.',
      'Атаки не ждут рабочего дня. ITDR — тоже.',
    ],
    label: 'Расследование и противодействие',
    hl: {
      phrase: 'Мы не просто защищаем вас — мы расследуем атаку и реагируем законными каналами.',
      body: 'Офицер проводит полное расследование, устанавливает атакующего и реагирует законными каналами — ловушки и дезинформация на вашем сервере, занесение атакующего в глобальные чёрные списки, координация с провайдерами, CERT и правоохранителями. Всё — строго по правилам применения (ROE) и с вашего одобрения. Конкретные варианты расследования и противодействия настраиваются индивидуально и оговариваются непосредственно при заключении договора.',
    },
  },
  zh: {
    sub: '您的 AI 資安官',
    tagline: '不只是偵測——更會調查與回應',
    paras: [
      'ITDR 全天候守護您的伺服器：在入侵、攻擊與病毒出現的瞬間就將其捕捉，並以全自動模式自行回應。',
      '這絕非被動發送告警、等待人工處理的監控工具。三重偵測護盾在須臾之間捕捉威脅，AI 安全官隨即推理研判、比對知識庫並做出裁決——接著在您安睡時攔截並擊退攻擊，或清除病毒。',
      '若威脅超出標準回應範圍，安全官會將其上報人工，並完整保全所有證據以供調查。',
      '攻擊不會挑上班時間，ITDR 亦然。',
    ],
    label: '調查與回應',
    hl: {
      phrase: '我們不只是防守——我們對攻擊展開調查，並透過合法管道作出回應。',
      body: '安全官展開完整調查、鎖定攻擊者，並透過合法管道作出回應——在您的伺服器上佈下誘餌與假情報，將攻擊者列入全球黑名單，並協同網路供應商、CERT 與執法機關處置。一切均嚴格遵循交戰守則（ROE），並在取得您的授權後執行。具體的調查與回應選項將個別配置，並於簽約時直接商定。',
    },
  },
  fr: {
    sub: 'votre officier de cyberdéfense IA',
    tagline: 'ne se contente pas de détecter — il enquête et répond',
    paras: [
      'ITDR tient la ligne sur vos serveurs 24h/24 : il capte intrusions, attaques et virus dès leur apparition — et réagit seul, automatiquement.',
      'Ce n’est pas un moniteur passif qui déclenche une alerte et attend un humain. Trois boucliers de détection interceptent une menace en une fraction de seconde, l’officier IA raisonne, vérifie la doctrine et rend un verdict — puis bloque et repousse l’attaque ou supprime le virus pendant que vous dormez.',
      'Si une menace dépasse la réponse standard, l’officier l’escalade vers un humain, en préservant chaque élément de preuve pour examen.',
      'Les attaques n’attendent pas les heures de bureau. ITDR non plus.',
    ],
    label: 'Enquête et réponse',
    hl: {
      phrase: 'Nous ne nous contentons pas de vous défendre — nous enquêtons sur l’attaque et répondons par des voies légales.',
      body: 'L’officier mène une enquête complète, identifie l’attaquant et répond par des voies légales — pièges et désinformation sur votre propre serveur, inscription de l’attaquant sur des listes noires mondiales, et coordination avec les FAI, les CERT et les autorités. Toujours strictement dans le cadre des règles d’engagement (ROE) et avec votre approbation. Les options précises d’enquête et de réponse sont configurées individuellement et convenues directement lors de la signature du contrat.',
    },
  },
  de: {
    sub: 'Ihr KI-Cyberabwehroffizier',
    tagline: 'erkennt nicht nur — es untersucht und reagiert',
    paras: [
      'ITDR hält rund um die Uhr die Stellung auf Ihren Servern: Es erkennt Eindringlinge, Angriffe und Viren im Moment ihres Auftretens — und reagiert selbstständig, vollautomatisch.',
      'Das ist kein passiver Monitor, der einen Alarm auslöst und auf einen Menschen wartet. Drei Erkennungsschilde fangen eine Bedrohung binnen Sekundenbruchteilen ab, der KI-Offizier bewertet sie, prüft sie gegen die Doktrin und fällt ein Urteil — und blockiert dann den Angriff oder entfernt den Virus, während Sie schlafen.',
      'Geht eine Bedrohung über die Standardreaktion hinaus, eskaliert der Offizier sie an einen Menschen und bewahrt dabei jedes Beweisstück zur Prüfung auf.',
      'Angriffe warten nicht auf Geschäftszeiten. ITDR auch nicht.',
    ],
    label: 'Untersuchung & Reaktion',
    hl: {
      phrase: 'Wir verteidigen Sie nicht nur — wir untersuchen den Angriff und reagieren auf rechtmäßigen Wegen.',
      body: 'Der Offizier führt eine vollständige Untersuchung durch, identifiziert den Angreifer und reagiert auf rechtmäßigen Wegen — Fallen und Desinformation auf Ihrem eigenen Server, Eintrag des Angreifers in globale Sperrlisten und Koordination mit ISPs, CERTs und Behörden. Stets streng innerhalb der Einsatzregeln (ROE) und mit Ihrer Zustimmung. Konkrete Untersuchungs- und Reaktionsoptionen werden individuell konfiguriert und direkt bei Vertragsabschluss vereinbart.',
    },
  },
  es: {
    sub: 'su oficial de ciberdefensa con IA',
    tagline: 'no solo detecta — investiga y responde',
    paras: [
      'ITDR mantiene la línea en sus servidores las 24 horas: detecta intrusiones, ataques y virus en el instante en que aparecen — y responde por sí solo, de forma automática.',
      'Esto no es un monitor pasivo que dispara una alerta y espera a un humano. Tres escudos de detección atrapan una amenaza en una fracción de segundo, el oficial de IA la razona, la contrasta con la doctrina y emite un veredicto — luego bloquea y repele el ataque o elimina el virus mientras usted duerme.',
      'Si una amenaza supera la respuesta estándar, el oficial la escala a un humano, preservando cada prueba para su revisión.',
      'Los ataques no esperan al horario laboral. ITDR tampoco.',
    ],
    label: 'Investigación y respuesta',
    hl: {
      phrase: 'No solo lo defendemos — investigamos el ataque y respondemos por vías legales.',
      body: 'El oficial realiza una investigación completa, identifica al atacante y responde por vías legales — trampas y desinformación en su propio servidor, inclusión del atacante en listas negras globales y coordinación con ISPs, CERTs y autoridades. Todo estrictamente dentro de las reglas de enfrentamiento (ROE) y con su aprobación. Las opciones concretas de investigación y respuesta se configuran de forma individual y se acuerdan directamente en la firma del contrato.',
    },
  },
  it: {
    sub: 'il vostro ufficiale di ciberdifesa AI',
    tagline: 'non si limita a rilevare — indaga e risponde',
    paras: [
      'ITDR presidia i vostri server 24 ore su 24: rileva intrusioni, attacchi e virus nel momento in cui compaiono — e risponde da solo, in automatico.',
      'Non è un monitor passivo che lancia un avviso e aspetta un umano. Tre scudi di rilevamento catturano una minaccia in una frazione di secondo, l’ufficiale AI la valuta, la confronta con la dottrina e formula un verdetto — poi blocca e respinge l’attacco o rimuove il virus mentre dormite.',
      'Se una minaccia supera la risposta standard, l’ufficiale la inoltra a un umano, preservando ogni prova per la revisione.',
      'Gli attacchi non aspettano l’orario di lavoro. Nemmeno ITDR.',
    ],
    label: 'Indagine e risposta',
    hl: {
      phrase: 'Non ci limitiamo a difendervi — indaghiamo sull’attacco e rispondiamo per vie legali.',
      body: 'L’ufficiale conduce un’indagine completa, identifica l’attaccante e risponde per vie legali — trappole e disinformazione sul vostro stesso server, inserimento dell’attaccante in liste nere globali e coordinamento con ISP, CERT e autorità. Tutto rigorosamente entro le regole d’ingaggio (ROE) e con la vostra approvazione. Le opzioni specifiche di indagine e risposta sono configurate individualmente e concordate direttamente alla firma del contratto.',
    },
  },
  ja: {
    sub: 'あなたのAIサイバー防衛オフィサー',
    tagline: '検知するだけでなく——調査し対応する',
    paras: [
      'ITDRはサーバーを24時間365日守り抜きます。侵入・攻撃・ウイルスが現れた瞬間に検知し、自ら自動的に対応します。',
      'これはアラートを出して人間を待つだけの受動的な監視ツールではありません。3つの検知シールドが一瞬で脅威を捉え、AIオフィサーが推論し、ドクトリンと照合して判定を下します——そしてあなたが眠っている間に攻撃を遮断・撃退し、ウイルスを除去します。',
      '脅威が標準対応を超える場合、オフィサーはすべての証拠を保全したうえで人間にエスカレーションします。',
      '攻撃は営業時間を待ちません。ITDRも同じです。',
    ],
    label: '調査と対応',
    hl: {
      phrase: '私たちは守るだけではありません——攻撃を調査し、合法的な手段で対応します。',
      body: 'オフィサーは徹底的な調査を行い、攻撃者を特定し、合法的な手段で対応します——自社サーバー上での罠と偽情報、攻撃者をグローバルなブロックリストに登録すること、そしてISP・CERT・当局と連携した対処です。すべては交戦規定（ROE）を厳格に遵守し、あなたの承認のもとでのみ行われます。具体的な調査・対応オプションは個別に設定され、契約締結時に直接合意されます。',
    },
  },
  uk: {
    sub: 'ваш AI-офіцер кібербезпеки',
    tagline: 'не просто виявляє — розслідує та протидіє',
    paras: [
      'ITDR тримає оборону ваших серверів цілодобово: помічає вторгнення, атаки та віруси в момент їх появи — і відповідає сам, в автоматичному режимі.',
      'Це не пасивний монітор, який шле алерт і чекає людину. Три щити-детектори ловлять загрозу за частки секунди, AI-офіцер осмислює її, звіряється з доктриною і виносить вердикт — а потім блокує й відбиває атаку або знищує вірус, поки ви спите.',
      'Якщо загроза виходить за межі штатної реакції, офіцер ескалує її людині, зберігши всі докази для розгляду.',
      'Атаки не чекають робочого дня. ITDR — теж.',
    ],
    label: 'Розслідування та протидія',
    hl: {
      phrase: 'Ми не просто захищаємо вас — ми розслідуємо атаку і реагуємо законними каналами.',
      body: 'Офіцер проводить повне розслідування, встановлює атакуючого і реагує законними каналами — пастки та дезінформація на вашому сервері, внесення атакуючого до глобальних чорних списків, координація з провайдерами, CERT та правоохоронцями. Все — суворо за правилами застосування (ROE) і з вашого схвалення. Конкретні варіанти розслідування та протидії налаштовуються індивідуально й узгоджуються безпосередньо під час укладення договору.',
    },
  },
  sr: {
    sub: 'vaš AI oficir za sajber odbranu',
    tagline: 'ne samo da detektuje — istražuje i odgovara',
    paras: [
      'ITDR drži liniju odbrane vaših servera 24 sata dnevno: uočava upade, napade i viruse u trenutku pojave — i reaguje sam, potpuno automatski.',
      'Ovo nije pasivni monitor koji šalje upozorenje i čeka čoveka. Tri detekciona štita hvataju pretnju za delić sekunde, AI oficir je analizira, proverava prema doktrini i donosi presudu — a zatim blokira i odbija napad ili uklanja virus dok vi spavate.',
      'Ako pretnja prevaziđe standardni odgovor, oficir je eskalira čoveku, čuvajući svaki dokaz za pregled.',
      'Napadi ne čekaju radno vreme. Ni ITDR ne čeka.',
    ],
    label: 'Istraga i odgovor',
    hl: {
      phrase: 'Ne samo da vas branimo — istražujemo napad i odgovaramo zakonitim kanalima.',
      body: 'Oficir sprovodi potpunu istragu, identifikuje napadača i odgovara zakonitim kanalima — zamke i dezinformacije na vašem sopstvenom serveru, uvrštavanje napadača na globalne crne liste i koordinaciju sa ISP-ovima, CERT-ovima i vlastima. Sve strogo u okviru pravila angažovanja (ROE) i uz vaše odobrenje. Konkretne opcije istrage i odgovora konfigurišu se pojedinačno i dogovaraju direktno pri potpisivanju ugovora.',
    },
  },
  pt: {
    sub: 'o seu oficial de ciberdefesa com IA',
    tagline: 'não se limita a detetar — investiga e responde',
    paras: [
      'O ITDR mantém a linha de defesa dos seus servidores 24 horas por dia: deteta intrusões, ataques e vírus no momento em que surgem — e responde sozinho, de forma automática.',
      'Isto não é um monitor passivo que dispara um alerta e espera por um humano. Três escudos de deteção capturam uma ameaça numa fração de segundo, o oficial de IA raciocina sobre ela, verifica-a face à doutrina e emite um veredito — depois bloqueia e repele o ataque ou remove o vírus enquanto dorme.',
      'Se uma ameaça ultrapassar a resposta padrão, o oficial escala-a para um humano, preservando todas as provas para análise.',
      'Os ataques não esperam pelo horário comercial. O ITDR também não.',
    ],
    label: 'Investigação e resposta',
    hl: {
      phrase: 'Não nos limitamos a defendê-lo — investigamos o ataque e respondemos por vias legais.',
      body: 'O oficial conduz uma investigação completa, identifica o atacante e responde por vias legais — armadilhas e desinformação no seu próprio servidor, inclusão do atacante em listas negras globais e coordenação com ISPs, CERTs e autoridades. Tudo estritamente dentro das regras de empenhamento (ROE) e com a sua aprovação. As opções específicas de investigação e resposta são configuradas individualmente e acordadas diretamente na assinatura do contrato.',
    },
  },
  hi: {
    sub: 'आपका AI साइबर-डिफेंस अधिकारी',
    tagline: 'सिर्फ पहचानता नहीं — जांच करता है और प्रतिक्रिया देता है',
    paras: [
      'ITDR आपके सर्वर की चौबीसों घंटे रक्षा करता है: घुसपैठ, हमले और वायरस को प्रकट होते ही पकड़ लेता है — और स्वतः, स्वचालित रूप से जवाब देता है।',
      'यह कोई निष्क्रिय मॉनिटर नहीं है जो अलर्ट भेजकर इंसान का इंतज़ार करे। तीन डिटेक्शन शील्ड सेकंड के एक अंश में खतरे को पकड़ लेते हैं, AI अधिकारी उस पर विचार करता है, सिद्धांत (doctrine) से मिलान करता है और निर्णय देता है — फिर आपके सोते समय हमले को रोकता और पीछे धकेलता है या वायरस को हटा देता है।',
      'यदि खतरा मानक प्रतिक्रिया की सीमा से आगे बढ़ जाए, तो अधिकारी हर सबूत को सुरक्षित रखते हुए इसे किसी इंसान तक पहुंचाता है।',
      'हमले कार्यालय समय का इंतज़ार नहीं करते। ITDR भी नहीं करता।',
    ],
    label: 'जांच और प्रतिक्रिया',
    hl: {
      phrase: 'हम सिर्फ आपकी रक्षा नहीं करते — हम हमले की जांच करते हैं और वैध माध्यमों से प्रतिक्रिया देते हैं।',
      body: 'अधिकारी पूरी जांच करता है, हमलावर की पहचान करता है और वैध माध्यमों से प्रतिक्रिया देता है — आपके अपने सर्वर पर जाल और भ्रामक सूचना, हमलावर को वैश्विक ब्लॉकलिस्ट में डालना, और ISP, CERT व अधिकारियों के साथ समन्वय। यह सब सख्ती से रूल्स ऑफ एंगेजमेंट (ROE) के दायरे में और आपकी स्वीकृति के साथ होता है। जांच और प्रतिक्रिया के विशिष्ट विकल्प व्यक्तिगत रूप से कॉन्फ़िगर किए जाते हैं और अनुबंध पर हस्ताक्षर के समय सीधे तय किए जाते हैं।',
    },
  },
  tr: {
    sub: 'yapay zeka siber savunma subayınız',
    tagline: 'yalnızca tespit etmez — soruşturur ve müdahale eder',
    paras: [
      'ITDR sunucularınızı 7/24 korur: sızmaları, saldırıları ve virüsleri ortaya çıktıkları anda yakalar — ve kendi başına, otomatik olarak yanıt verir.',
      'Bu, uyarı gönderip bir insanı bekleyen pasif bir izleme aracı değildir. Üç tespit kalkanı bir saniyenin küçük bir kesrinde tehdidi yakalar, AI subayı üzerinde muhakeme yürütür, doktrine göre kontrol eder ve karar verir — ardından siz uyurken saldırıyı engelleyip püskürtür veya virüsü kaldırır.',
      'Bir tehdit standart yanıtın ötesine geçerse, subay tüm kanıtları inceleme için koruyarak durumu bir insana yükseltir.',
      'Saldırılar mesai saatlerini beklemez. ITDR da beklemez.',
    ],
    label: 'Soruşturma ve müdahale',
    hl: {
      phrase: 'Sizi yalnızca savunmuyoruz — saldırıyı soruşturur ve yasal yollarla müdahale ederiz.',
      body: "Subay kapsamlı bir soruşturma yürütür, saldırganı tespit eder ve yasal yollarla müdahale eder — kendi sunucunuzda tuzaklar ve yanlış bilgilendirme, saldırganı küresel kara listelere kaydetme ve İSS'ler, CERT'ler ve yetkililerle koordinasyon. Tüm bunlar sıkı bir şekilde angajman kuralları (ROE) çerçevesinde ve sizin onayınızla yapılır. Belirli soruşturma ve müdahale seçenekleri bireysel olarak yapılandırılır ve doğrudan sözleşme imzalanırken kararlaştırılır.",
    },
  },
  ar: {
    sub: 'ضابط الدفاع السيبراني الذكي الخاص بك',
    tagline: 'لا يكتفي بالرصد — بل يحقق ويستجيب',
    paras: [
      'يحمي ITDR خوادمكم على مدار الساعة: يرصد الاختراقات والهجمات والفيروسات لحظة ظهورها — ويستجيب من تلقاء نفسه وبشكل آلي بالكامل.',
      'هذا ليس مراقباً سلبياً يطلق تنبيهاً وينتظر إنساناً. ثلاث دروع كشف تلتقط التهديد في جزء من الثانية، ويحلله الضابط الذكي، ويطابقه مع العقيدة الأمنية ويصدر حكماً — ثم يحجب الهجوم ويصده أو يزيل الفيروس بينما أنتم نائمون.',
      'إذا تجاوز التهديد الاستجابة القياسية، يصعّده الضابط إلى إنسان، مع الحفاظ على كل دليل للمراجعة.',
      'الهجمات لا تنتظر ساعات العمل. ولا ITDR كذلك.',
    ],
    label: 'التحقيق والاستجابة',
    hl: {
      phrase: 'نحن لا نكتفي بالدفاع عنكم — بل نحقق في الهجوم ونستجيب عبر القنوات القانونية.',
      body: 'يجري الضابط تحقيقاً كاملاً، ويحدد هوية المهاجم، ويستجيب عبر القنوات القانونية — فخاخ ومعلومات مضللة على خادمكم الخاص، وإدراج المهاجم في قوائم الحظر العالمية، والتنسيق مع مزودي الإنترنت وفرق CERT والجهات المختصة. كل ذلك ضمن قواعد الاشتباك (ROE) وبموافقتكم فقط. تُهيَّأ خيارات التحقيق والاستجابة المحددة بشكل فردي ويُتَّفق عليها مباشرةً عند توقيع العقد.',
    },
  },
  el: {
    sub: 'ο αξιωματικός κυβερνοάμυνας AI σας',
    tagline: 'δεν απλώς εντοπίζει — ερευνά και αποκρίνεται',
    paras: [
      'Το ITDR κρατά τη γραμμή άμυνας των διακομιστών σας όλο το εικοσιτετράωρο: εντοπίζει εισβολές, επιθέσεις και ιούς τη στιγμή που εμφανίζονται — και αντιδρά μόνο του, αυτόματα.',
      'Δεν πρόκειται για παθητικό σύστημα παρακολούθησης που στέλνει ειδοποίηση και περιμένει άνθρωπο. Τρεις ασπίδες ανίχνευσης πιάνουν μια απειλή σε κλάσματα δευτερολέπτου, ο αξιωματικός AI τη συλλογίζεται, τη διασταυρώνει με το δόγμα και εκδίδει απόφαση — έπειτα μπλοκάρει και απωθεί την επίθεση ή αφαιρεί τον ιό ενώ εσείς κοιμάστε.',
      'Αν μια απειλή ξεπεράσει την τυπική απόκριση, ο αξιωματικός την κλιμακώνει σε άνθρωπο, διατηρώντας κάθε αποδεικτικό στοιχείο για έλεγχο.',
      'Οι επιθέσεις δεν περιμένουν το ωράριο εργασίας. Ούτε το ITDR.',
    ],
    label: 'Έρευνα και απόκριση',
    hl: {
      phrase: 'Δεν σας υπερασπιζόμαστε απλώς — ερευνούμε την επίθεση και αποκρινόμαστε με νόμιμα μέσα.',
      body: 'Ο αξιωματικός διεξάγει πλήρη έρευνα, ταυτοποιεί τον επιτιθέμενο και αποκρίνεται με νόμιμα μέσα — παγίδες και παραπληροφόρηση στον δικό σας διακομιστή, καταχώριση του επιτιθέμενου σε παγκόσμιες μαύρες λίστες και συντονισμό με παρόχους, CERT και αρχές. Πάντα αυστηρά εντός των κανόνων εμπλοκής (ROE) και με τη δική σας έγκριση. Οι συγκεκριμένες επιλογές έρευνας και απόκρισης διαμορφώνονται εξατομικευμένα και συμφωνούνται απευθείας κατά την υπογραφή της σύμβασης.',
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
