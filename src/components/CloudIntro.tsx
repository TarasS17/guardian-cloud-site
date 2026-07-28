'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import RegisterCta from '@/components/RegisterCta';


type Block1 = {
  h: string;
  p1: string;
  q: string;
  p2pre: string;
  p2bold: string;
  p2post: string;
  p3: string;
};

type Block2 = {
  h: string;
  lead: string;
  segments: { label: string; text: string }[];
  closer: string;
};

type Block3 = {
  h: string;
  p1: string;
  p2: string;
  p3: string;
};

type Block4 = {
  h: string;
  paras: string[];
};

type Block6 = {
  h: string;
  paras1: string[];
  subH: string;
  paras2: string[];
  cta: string;
};

const BLOCK1: Record<string, Block1> = {
  en: {
    h: 'What is the Guardian Cloud platform?',
    p1: 'Imagine that inside your cloud service there works a team of highly qualified system-administration and cyber-defense specialists who know everything — and then some — together with hundreds of assistants who carry out all the routine work, every second, 24 hours a day, 7 days a week.',
    q: 'Pictured it?',
    p2pre: 'Now we present to you the ',
    p2bold: 'Guardian Cloud platform',
    p2post: '.',
    p3: 'Below, we will explain in detail — to you, our future clients — how the platform works and what it can do. And you will decide for yourself whether to step into a new era or stay in the environment you already know, with all of its problems. Because we built this service for exactly one reason: to pull you out of them, free you to deal with other, more important matters, and grow your business.',
  },
  ru: {
    h: 'Что такое платформа Guardian Cloud?',
    p1: 'Представьте себе, что у вас в вашем облачном сервисе/платформе работает команда из высококвалифицированных специалистов системного администрирования и кибер-защиты, которые знают всё и даже больше, и сотни их помощников, которые выполняют всю рутинную работу ежесекундно, 24 часа в сутки, 7 дней в неделю.',
    q: 'Представили?',
    p2pre: 'Теперь мы представляем вам ',
    p2bold: 'платформу Guardian Cloud',
    p2post: '.',
    p3: 'Ниже мы очень подробно расскажем вам, как нашим будущим клиентам, как работает платформа и что она может делать, а вы сами примете решение, идёте ли вы в новую эру или остаётесь в вашей привычной среде, со всеми её проблемами, потому что мы создали этот сервис именно для того, чтобы вытянуть вас из них и дать вам возможность заниматься другими, более важными вопросами и развивать ваш бизнес.',
  },
  zh: {
    h: '什麼是 Guardian Cloud 平台？',
    p1: '想像一下：在您的雲端服務/平台中，有一支由頂尖系統維運與網絡安全專家組成的團隊在高效運轉。他們精通一切甚至更多，身後的數百名助手更是每分每秒、全年無休（24/7）地處理著所有繁瑣的日常庶務。',
    q: '您能想像到這樣的場景嗎？',
    p2pre: '現在，我們向您隆重推出 ',
    p2bold: 'Guardian Cloud 平台',
    p2post: '。',
    p3: '在下方，我們將為您（我們未來的客戶）詳細拆解該模組的運作原理與強大功能。隨後，這將由您自己做出抉擇：是邁向全新的智慧時代，還是留在充滿各類棘手問題的傳統環境中？我們打造這項服務，正是為了幫您擺脫這些日常泥潭，讓您能將精力專注於更核心、更重要的事務上，全力拓展您的業務藍圖。',
  },
  fr: {
    h: 'Qu\'est-ce que la plateforme Guardian Cloud ?',
    p1: 'Imaginez qu\'au sein de votre service cloud travaille une équipe de spécialistes hautement qualifiés en administration système et en cyberdéfense qui savent tout, et même plus, épaulée par des centaines d\'assistants qui exécutent toutes les tâches routinières, chaque seconde, 24 heures sur 24, 7 jours sur 7.',
    q: 'Vous visualisez la scène ?',
    p2pre: 'Nous vous présentons maintenant la ',
    p2bold: 'plateforme Guardian Cloud',
    p2post: '.',
    p3: 'Ci-dessous, nous vous expliquerons en détail, à vous, nos futurs clients, comment fonctionne la plateforme et ce qu\'elle peut faire. Vous déciderez ensuite vous-même s\'il faut entrer dans une nouvelle ère ou rester dans l\'environnement que vous connaissez déjà, avec tous ses problèmes. Car nous avons construit ce service pour une seule raison : vous en sortir, vous libérer pour des sujets plus importants et faire croître votre entreprise.',
  },
  de: {
    h: 'Was ist die Guardian-Cloud-Plattform?',
    p1: 'Stellen Sie sich vor, in Ihrem Cloud-Dienst arbeitet ein Team hochqualifizierter Spezialisten für Systemadministration und Cyberabwehr, die alles wissen – und noch mehr –, gemeinsam mit Hunderten Assistenten, die jede Sekunde, rund um die Uhr, sieben Tage die Woche, die gesamte Routinearbeit erledigen.',
    q: 'Können Sie es sich vorstellen?',
    p2pre: 'Jetzt präsentieren wir Ihnen die ',
    p2bold: 'Guardian-Cloud-Plattform',
    p2post: '.',
    p3: 'Im Folgenden erklären wir Ihnen, unseren zukünftigen Kunden, im Detail, wie die Plattform funktioniert und was sie leisten kann. Und Sie entscheiden selbst, ob Sie in eine neue Ära eintreten oder in Ihrer gewohnten Umgebung mit all ihren Problemen bleiben. Denn genau aus diesem Grund haben wir diesen Dienst gebaut: um Sie daraus zu befreien, Ihnen Raum für wichtigere Dinge zu geben und Ihr Geschäft wachsen zu lassen.',
  },
  es: {
    h: '¿Qué es la plataforma Guardian Cloud?',
    p1: 'Imagine que dentro de su servicio en la nube trabaja un equipo de especialistas altamente cualificados en administración de sistemas y ciberdefensa que lo saben todo, y más, junto con cientos de asistentes que realizan todo el trabajo rutinario, cada segundo, las 24 horas del día, los 7 días de la semana.',
    q: '¿Se lo imagina?',
    p2pre: 'Ahora le presentamos la ',
    p2bold: 'plataforma Guardian Cloud',
    p2post: '.',
    p3: 'A continuación le explicaremos en detalle, a usted, nuestro futuro cliente, cómo funciona la plataforma y qué puede hacer. Y usted decidirá si dar el paso hacia una nueva era o permanecer en el entorno que ya conoce, con todos sus problemas. Porque construimos este servicio con un único propósito: sacarle de ellos, liberarle para asuntos más importantes y hacer crecer su negocio.',
  },
  it: {
    h: 'Cos\'è la piattaforma Guardian Cloud?',
    p1: 'Immagini che all\'interno del suo servizio cloud lavori un team di specialisti altamente qualificati in amministrazione di sistema e cyberdifesa che sanno tutto, e anche di più, insieme a centinaia di assistenti che svolgono ogni lavoro di routine, ogni secondo, 24 ore su 24, 7 giorni su 7.',
    q: 'Se lo immagina?',
    p2pre: 'Ora le presentiamo la ',
    p2bold: 'piattaforma Guardian Cloud',
    p2post: '.',
    p3: 'Di seguito vi spiegheremo in dettaglio, a voi, nostri futuri clienti, come funziona la piattaforma e cosa può fare. E deciderete voi stessi se entrare in una nuova era o restare nell\'ambiente che già conoscete, con tutti i suoi problemi. Perché abbiamo costruito questo servizio esattamente per una ragione: tirarvi fuori da essi, liberarvi per questioni più importanti e far crescere il vostro business.',
  },
  ja: {
    h: 'Guardian Cloud プラットフォームとは？',
    p1: 'あなたのクラウドサービスの中で、あらゆることを熟知した——それ以上の——高度なシステム管理・サイバー防御の専門家チームが、何百人ものアシスタントとともに、24時間365日、毎秒すべてのルーティン業務をこなしていると想像してください。',
    q: 'イメージできましたか？',
    p2pre: 'それでは ',
    p2bold: 'Guardian Cloud プラットフォーム',
    p2post: 'をご紹介します。',
    p3: '以下では、未来のお客様であるあなたに、このプラットフォームがどう機能し、何ができるのかを詳しくご説明します。そして、新しい時代へ踏み出すか、これまでのあらゆる問題を抱えた環境にとどまるかは、あなた自身が決めることです。私たちがこのサービスを作った理由はただ一つ——あなたをそこから引き上げ、もっと重要なことに集中できるようにし、ビジネスを成長させるためです。',
  },
  uk: {
    h: 'Що таке платформа Guardian Cloud?',
    p1: 'Уявіть, що у вашому хмарному сервісі працює команда висококваліфікованих фахівців із системного адміністрування та кіберзахисту, які знають усе і навіть більше, разом із сотнями помічників, які виконують усю рутинну роботу щосекунди, 24 години на добу, 7 днів на тиждень.',
    q: 'Уявили?',
    p2pre: 'Тепер представляємо вам ',
    p2bold: 'платформу Guardian Cloud',
    p2post: '.',
    p3: 'Нижче ми детально розкажемо вам, нашим майбутнім клієнтам, як працює платформа і що вона вміє, а ви самі вирішите, чи входити в нову еру, чи залишитися у звичному середовищі з усіма його проблемами. Бо ми створили цей сервіс саме для того, щоб витягнути вас із них, звільнити для важливіших справ і розвивати ваш бізнес.',
  },
  sr: {
    h: 'Šta je platforma Guardian Cloud?',
    p1: 'Zamislite da unutar vašeg cloud servisa radi tim visokokvalifikovanih stručnjaka za sistemsku administraciju i sajber odbranu koji znaju sve — i više od toga — zajedno sa stotinama asistenata koji obavljaju sve rutinske poslove, svake sekunde, 24 sata dnevno, 7 dana u nedelji.',
    q: 'Zamislili ste?',
    p2pre: 'Sada vam predstavljamo ',
    p2bold: 'platformu Guardian Cloud',
    p2post: '.',
    p3: 'U nastavku ćemo vam, kao našim budućim klijentima, detaljno objasniti kako platforma radi i šta sve može da uradi. A vi ćete sami odlučiti da li ćete zakoračiti u novu eru ili ostati u okruženju koje već poznajete, sa svim njegovim problemima. Jer ovaj servis smo napravili iz tačno jednog razloga: da vas izvučemo iz njih, oslobodimo za važnije stvari i pomognemo rastu vašeg poslovanja.',
  },
  pt: {
    h: 'O que é a plataforma Guardian Cloud?',
    p1: 'Imagine que dentro do seu serviço de nuvem trabalha uma equipe de especialistas altamente qualificados em administração de sistemas e ciberdefesa que sabem tudo — e mais um pouco —, junto com centenas de assistentes que executam todo o trabalho rotineiro, a cada segundo, 24 horas por dia, 7 dias por semana.',
    q: 'Conseguiu imaginar?',
    p2pre: 'Agora apresentamos a ',
    p2bold: 'plataforma Guardian Cloud',
    p2post: '.',
    p3: 'A seguir, explicaremos em detalhes a você, nosso futuro cliente, como a plataforma funciona e o que ela pode fazer. E você decidirá se quer entrar em uma nova era ou permanecer no ambiente que já conhece, com todos os seus problemas. Porque construímos este serviço exatamente por um motivo: tirá-lo deles, liberá-lo para assuntos mais importantes e fazer seu negócio crescer.',
  },
  hi: {
    h: 'Guardian Cloud प्लेटफ़ॉर्म क्या है?',
    p1: 'कल्पना कीजिए कि आपकी क्लाउड सेवा के भीतर उच्च योग्यता प्राप्त सिस्टम-प्रशासन और साइबर-रक्षा विशेषज्ञों की एक टीम काम करती है, जो सब कुछ जानते हैं — और उससे भी अधिक — और उनके साथ सैकड़ों सहायक हर सेकंड, दिन के 24 घंटे, सप्ताह के 7 दिन सारा नियमित काम संभालते हैं।',
    q: 'कल्पना कर ली?',
    p2pre: 'अब हम आपके सामने प्रस्तुत करते हैं ',
    p2bold: 'Guardian Cloud प्लेटफ़ॉर्म',
    p2post: '।',
    p3: 'नीचे हम आपको, अपने भावी ग्राहकों को, विस्तार से बताएंगे कि यह प्लेटफ़ॉर्म कैसे काम करता है और यह क्या कर सकता है। और आप स्वयं तय करेंगे कि नए युग में कदम रखना है या अपने जाने-पहचाने माहौल में, उसकी सभी समस्याओं के साथ, बने रहना है। क्योंकि हमने यह सेवा ठीक इसी एक कारण से बनाई है: आपको उनसे बाहर निकालने, आपको अधिक महत्वपूर्ण मामलों के लिए मुक्त करने, और आपके व्यवसाय को बढ़ाने के लिए।',
  },
  tr: {
    h: 'Guardian Cloud platformu nedir?',
    p1: 'Bulut hizmetinizin içinde, her şeyi bilen ve daha fazlasını başaran, yüksek nitelikli sistem yönetimi ve siber savunma uzmanlarından oluşan bir ekibin, her saniye, günün 24 saati, haftanın 7 günü tüm rutin işleri yürüten yüzlerce asistanla birlikte çalıştığını hayal edin.',
    q: 'Hayal ettiniz mi?',
    p2pre: 'Şimdi size ',
    p2bold: 'Guardian Cloud platformunu',
    p2post: ' tanıtıyoruz.',
    p3: "Aşağıda, gelecekteki müşterilerimiz olarak size platformun nasıl çalıştığını ve neler yapabildiğini ayrıntılı biçimde anlatacağız. Yeni bir çağa mı adım atacağınıza, yoksa tüm sorunlarıyla birlikte zaten bildiğiniz ortamda mı kalacağınıza siz karar vereceksiniz. Çünkü bu hizmeti tam olarak tek bir sebeple kurduk: sizi bu sorunlardan çıkarmak, daha önemli işlerle ilgilenmenizi sağlamak ve işinizi büyütmek.",
  },
  ar: {
    h: 'ما هي منصة Guardian Cloud؟',
    p1: 'تخيّل أن داخل خدمتك السحابية يعمل فريق من المتخصصين ذوي الكفاءة العالية في إدارة الأنظمة والدفاع السيبراني، يعرفون كل شيء بل وأكثر، إلى جانب مئات المساعدين الذين ينجزون كل الأعمال الروتينية في كل ثانية، على مدار 24 ساعة، طوال أيام الأسبوع السبعة.',
    q: 'هل تخيّلت ذلك؟',
    p2pre: 'نقدّم لكم الآن ',
    p2bold: 'منصة Guardian Cloud',
    p2post: '.',
    p3: 'سنشرح لكم أدناه بالتفصيل، بصفتكم عملاءنا المستقبليين، كيف تعمل المنصة وما الذي يمكنها فعله. وستقررون بأنفسكم إن كنتم ستخطون نحو عصر جديد أم ستبقون في البيئة المألوفة لكم بكل مشاكلها. فقد بنينا هذه الخدمة لسبب واحد بالتحديد: انتشالكم من تلك المشاكل، وتحريركم للتركيز على أمور أكثر أهمية، ونمو أعمالكم.',
  },
  el: {
    h: 'Τι είναι η πλατφόρμα Guardian Cloud;',
    p1: 'Φανταστείτε ότι μέσα στην cloud υπηρεσία σας εργάζεται μια ομάδα υψηλά εξειδικευμένων ειδικών σε διαχείριση συστημάτων και κυβερνοάμυνα που γνωρίζουν τα πάντα -και ακόμη περισσότερα- μαζί με εκατοντάδες βοηθούς που εκτελούν όλη τη ρουτίνα εργασία, κάθε δευτερόλεπτο, 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα.',
    q: 'Το φανταστήκατε;',
    p2pre: 'Τώρα σας παρουσιάζουμε την ',
    p2bold: 'πλατφόρμα Guardian Cloud',
    p2post: '.',
    p3: 'Παρακάτω θα σας εξηγήσουμε αναλυτικά, σε εσάς τους μελλοντικούς μας πελάτες, πώς λειτουργεί η πλατφόρμα και τι μπορεί να κάνει. Και εσείς θα αποφασίσετε αν θα μπείτε σε μια νέα εποχή ή θα παραμείνετε στο περιβάλλον που ήδη γνωρίζετε, με όλα του τα προβλήματα. Γιατί χτίσαμε αυτή την υπηρεσία για έναν και μόνο λόγο: να σας βγάλουμε από αυτά, να σας ελευθερώσουμε για πιο σημαντικά ζητήματα και να αναπτύξουμε την επιχείρησή σας.',
  },
};

const BLOCK2: Record<string, Block2> = {
  en: {
    h: 'Who did we build this for?',
    lead: 'We built Cloud for everyone who has servers — and too little time, too few hands, or too little peace of mind to keep up with them. If even one of the lines below is about you, this system was written for you.',
    segments: [
      {
        label: 'Startups and small businesses.',
        text: 'You have servers but no sysadmin team, and every outage hits you personally. Cloud takes over administration while you build your product.',
      },
      {
        label: 'DevOps and SRE teams.',
        text: 'You are drowning in routine, on-call rotations and 3 a.m. alerts. Cloud absorbs the routine and leaves you only what truly needs an engineer.',
      },
      {
        label: 'Hosting providers and MSPs.',
        text: 'You run dozens of other people’s servers and cannot hire endlessly. With Cloud, one operator handles many times more clients — under your own brand.',
      },
      {
        label: 'Security teams.',
        text: 'Attacks don’t wait for business hours, but your people go home. Cloud holds the line 24/7 and wakes a human only when it truly matters.',
      },
      {
        label: 'Financial and regulated companies.',
        text: 'You need strict standards, complete logs and audit readiness. Cloud keeps a secure history of every action and keeps you audit-ready, always.',
      },
      {
        label: 'E-commerce and SaaS.',
        text: 'Every minute of downtime is lost money and lost customers. Cloud finds and fixes problems in minutes, not hours.',
      },
      {
        label: 'Data centres and large server fleets.',
        text: 'Hundreds or thousands of machines, dozens of tenants, an impossible amount to control by hand. Cloud scales across the whole fleet, isolates tenants, and administers every machine as if it were its own.',
      },
    ],
    closer:
      'And if you are that single administrator carrying far too much on your own — Cloud becomes the team of assistants you never had.',
  },
  ru: {
    h: 'Для кого мы это сделали?',
    lead: 'Мы создали Cloud для всех, у кого есть серверы — и слишком мало времени, рук или спокойствия, чтобы за ними уследить. Если хоть один пункт ниже про вас — эту систему писали для вас.',
    segments: [
      {
        label: 'Стартапы и малый бизнес.',
        text: 'У вас есть серверы, но нет команды сисадминов, и каждый сбой бьёт по вам лично. Cloud берёт администрирование на себя, пока вы строите продукт.',
      },
      {
        label: 'DevOps- и SRE-команды.',
        text: 'Вы тонете в рутине, дежурствах и ночных алертах. Cloud снимает рутину и оставляет вам только то, что действительно требует инженера.',
      },
      {
        label: 'Хостинг-провайдеры и MSP.',
        text: 'Вы обслуживаете десятки чужих серверов и не можете бесконечно нанимать людей. Один оператор с Cloud ведёт в разы больше клиентов — и под вашим брендом.',
      },
      {
        label: 'Команды кибербезопасности.',
        text: 'Атаки не ждут рабочего дня, а ваши люди уходят домой. Cloud держит оборону 24/7 и будит человека только тогда, когда это правда нужно.',
      },
      {
        label: 'Финансовые и регулируемые компании.',
        text: 'Вам нужны строгие стандарты, полные логи и готовность к проверкам. Cloud ведёт защищённую историю каждого действия и держит вас аудит-готовыми постоянно.',
      },
      {
        label: 'E-commerce и SaaS.',
        text: 'Каждая минута простоя — это потерянные деньги и клиенты. Cloud находит и устраняет проблемы за минуты, а не за часы.',
      },
      {
        label: 'Дата-центры и крупные парки серверов.',
        text: 'Сотни и тысячи машин, десятки арендаторов, невозможный объём ручного контроля. Cloud масштабируется на весь парк, изолирует клиентов и администрирует каждую машину как свою.',
      },
    ],
    closer:
      'А если вы — тот самый единственный администратор, на котором висит слишком многое: Cloud станет той командой помощников, которой у вас никогда не было.',
  },
  zh: {
    h: '這項服務是為誰而設計？',
    lead: '我們打造 Guardian Cloud 平台，是為了所有擁有伺服器，卻面臨時間不足、人力短缺或缺乏安心感的人。如果以下任何一點切中了您的現狀，那麼這套系統就是為您量身定制的。',
    segments: [
      {
        label: '新創公司與中小企業：',
        text: '您擁有伺服器，但沒有專職的系統維運團隊，每一次當機都會直接對您造成打擊。在您全力打造產品的同時，Guardian Cloud 平台將全權接管所有的維運管理工作。',
      },
      {
        label: 'DevOps 與 SRE 團隊：',
        text: '您正深陷於繁瑣的日常庶務、輪班值日和深夜的告警轟炸中。Guardian Cloud 平台能幫您解脫出來，只將真正需要工程師介入的核心問題留給您。',
      },
      {
        label: '主機代管商與 MSP（託管服務提供商）：',
        text: '您維護著數十台客戶的伺服器，卻無法無限制地擴編人力。有了 Guardian Cloud 平台，單一操作員就能同時管理數倍的客戶，且完全支援您的自有品牌（White-label）。',
      },
      {
        label: '網絡安全團隊：',
        text: '網路攻擊可不會挑上班時間，但您的員工總要下班回家。Guardian Cloud 平台提供 24/7 全天候防禦，只有在真正需要人工干預時才會喚醒安全人員。',
      },
      {
        label: '金融與受監管企業：',
        text: '您需要嚴格的合規標準、完整的日誌記錄並隨時應對審查。Guardian Cloud 平台會安全地記錄每一次操作歷史，讓您隨時保持在「最佳審計就緒」狀態。',
      },
      {
        label: '電子商務與 SaaS 服務商：',
        text: '系統每中斷一分鐘，都意味著金錢與客戶的流失。Guardian Cloud 平台能在幾分鐘之內（而非數小時）精準定位並排除故障。',
      },
      {
        label: '資料中心與大型伺服器叢集：',
        text: '面對成百上千台機器、數十家租戶，人工監控已是不可能的任務。Guardian Cloud 平台可完美擴展至整個伺服器架構，在隔離不同客戶的同時，像對待自家設備一樣精細管理每台機器。',
      },
    ],
    closer:
      '如果您正是那位獨自扛起一切、身負重任的唯一系統管理員：Guardian Cloud 平台將成為您夢寐以求、卻從未擁有過的超強助手團隊。',
  },
  fr: {
    h: 'Pour qui avons-nous conçu ceci ?',
    lead: "Nous avons conçu Cloud pour tous ceux qui ont des serveurs — et trop peu de temps, trop peu de bras ou trop peu de tranquillité d'esprit pour les gérer. Si ne serait-ce qu'une des lignes ci-dessous vous concerne, ce système a été écrit pour vous.",
    segments: [
      { label: 'Startups et petites entreprises.', text: "Vous avez des serveurs mais pas d'équipe sysadmin, et chaque panne vous touche personnellement. Cloud prend en charge l'administration pendant que vous construisez votre produit." },
      { label: 'Équipes DevOps et SRE.', text: "Vous êtes submergés par la routine, les astreintes et les alertes à 3 h du matin. Cloud absorbe la routine et ne vous laisse que ce qui exige réellement un ingénieur." },
      { label: "Hébergeurs et prestataires MSP.", text: "Vous gérez des dizaines de serveurs de clients et ne pouvez pas recruter indéfiniment. Avec Cloud, un seul opérateur gère bien plus de clients — sous votre propre marque." },
      { label: "Équipes de sécurité.", text: "Les attaques n'attendent pas les heures de bureau, mais vos équipes rentrent chez elles. Cloud tient la ligne 24 h/24, 7 j/7 et ne réveille un humain que lorsque c'est vraiment nécessaire." },
      { label: "Entreprises financières et réglementées.", text: "Vous avez besoin de normes strictes, de journaux complets et d'une préparation aux audits. Cloud conserve un historique sécurisé de chaque action et vous garde toujours prêts pour l'audit." },
      { label: "E-commerce et SaaS.", text: "Chaque minute d'indisponibilité, c'est de l'argent et des clients perdus. Cloud trouve et corrige les problèmes en quelques minutes, pas en heures." },
      { label: "Centres de données et grands parcs de serveurs.", text: "Des centaines ou des milliers de machines, des dizaines de locataires, un volume impossible à contrôler manuellement. Cloud s'étend sur tout le parc, isole les locataires et administre chaque machine comme si c'était la sienne." },
    ],
    closer: "Et si vous êtes cet administrateur unique qui porte bien trop de choses seul, Cloud devient l'équipe d'assistants que vous n'avez jamais eue.",
  },
  de: {
    h: 'Für wen haben wir das gebaut?',
    lead: 'Wir haben Cloud für alle gebaut, die Server haben — und zu wenig Zeit, zu wenig Personal oder zu wenig Ruhe, um mit ihnen Schritt zu halten. Wenn auch nur eine der folgenden Zeilen auf Sie zutrifft, wurde dieses System für Sie geschrieben.',
    segments: [
      { label: 'Startups und kleine Unternehmen.', text: 'Sie haben Server, aber kein Sysadmin-Team, und jeder Ausfall trifft Sie persönlich. Cloud übernimmt die Administration, während Sie Ihr Produkt bauen.' },
      { label: 'DevOps- und SRE-Teams.', text: 'Sie ertrinken in Routine, Bereitschaftsdiensten und Alarmen um drei Uhr nachts. Cloud nimmt Ihnen die Routine ab und lässt Ihnen nur, was wirklich einen Ingenieur braucht.' },
      { label: 'Hosting-Anbieter und MSPs.', text: 'Sie betreiben Dutzende fremde Server und können nicht endlos einstellen. Mit Cloud betreut ein Operator ein Vielfaches an Kunden — unter Ihrer eigenen Marke.' },
      { label: 'Sicherheitsteams.', text: 'Angriffe warten nicht auf Geschäftszeiten, aber Ihre Leute gehen nach Hause. Cloud hält rund um die Uhr die Stellung und weckt einen Menschen nur, wenn es wirklich zählt.' },
      { label: 'Finanz- und regulierte Unternehmen.', text: 'Sie brauchen strenge Standards, vollständige Protokolle und Prüfungsbereitschaft. Cloud führt eine sichere Historie jeder Aktion und hält Sie jederzeit auditbereit.' },
      { label: 'E-Commerce und SaaS.', text: 'Jede Minute Ausfallzeit bedeutet verlorenes Geld und verlorene Kunden. Cloud findet und behebt Probleme in Minuten, nicht Stunden.' },
      { label: 'Rechenzentren und große Server-Flotten.', text: 'Hunderte oder Tausende Maschinen, Dutzende Mandanten, eine von Hand unmögliche Kontrollmenge. Cloud skaliert über die gesamte Flotte, isoliert Mandanten und administriert jede Maschine wie ihre eigene.' },
    ],
    closer: 'Und wenn Sie der einsame Administrator sind, der viel zu viel allein trägt — Cloud wird zu dem Team von Assistenten, das Sie nie hatten.',
  },
  es: {
    h: '¿Para quién hicimos esto?',
    lead: 'Creamos Cloud para todos los que tienen servidores — y demasiado poco tiempo, pocas manos o poca tranquilidad para mantenerse al día con ellos. Si al menos una de las líneas siguientes le describe, este sistema se escribió para usted.',
    segments: [
      { label: 'Startups y pequeñas empresas.', text: 'Tiene servidores pero no un equipo de sysadmin, y cada caída le afecta personalmente. Cloud se encarga de la administración mientras usted construye su producto.' },
      { label: 'Equipos DevOps y SRE.', text: 'Se ahoga en rutina, guardias y alertas a las 3 de la madrugada. Cloud absorbe la rutina y le deja solo lo que realmente necesita un ingeniero.' },
      { label: 'Proveedores de hosting y MSP.', text: 'Gestiona decenas de servidores ajenos y no puede contratar indefinidamente. Con Cloud, un operador atiende muchas veces más clientes, bajo su propia marca.' },
      { label: 'Equipos de seguridad.', text: 'Los ataques no esperan al horario laboral, pero su gente se va a casa. Cloud mantiene la línea las 24 horas y solo despierta a un humano cuando realmente importa.' },
      { label: 'Empresas financieras y reguladas.', text: 'Necesita estándares estrictos, registros completos y estar listo para auditorías. Cloud mantiene un historial seguro de cada acción y le mantiene siempre listo para auditoría.' },
      { label: 'E-commerce y SaaS.', text: 'Cada minuto de inactividad es dinero y clientes perdidos. Cloud encuentra y resuelve problemas en minutos, no en horas.' },
      { label: 'Centros de datos y grandes flotas de servidores.', text: 'Cientos o miles de máquinas, decenas de inquilinos, un volumen imposible de controlar a mano. Cloud escala en toda la flota, aísla inquilinos y administra cada máquina como si fuera propia.' },
    ],
    closer: 'Y si usted es ese único administrador que carga con demasiado en solitario, Cloud se convierte en el equipo de asistentes que nunca tuvo.',
  },
  it: {
    h: 'Per chi lo abbiamo costruito?',
    lead: 'Abbiamo costruito Cloud per chiunque abbia server — e troppo poco tempo, poche mani o poca tranquillità per starci dietro. Se anche solo una delle righe seguenti parla di voi, questo sistema è stato scritto per voi.',
    segments: [
      { label: 'Startup e piccole imprese.', text: 'Avete server ma nessun team sysadmin, e ogni interruzione vi colpisce personalmente. Cloud si occupa dell\'amministrazione mentre voi costruite il vostro prodotto.' },
      { label: 'Team DevOps e SRE.', text: 'Annegate nella routine, nei turni di reperibilità e negli allarmi alle 3 di notte. Cloud assorbe la routine e vi lascia solo ciò che davvero richiede un ingegnere.' },
      { label: 'Provider di hosting e MSP.', text: 'Gestite decine di server altrui e non potete assumere all\'infinito. Con Cloud, un solo operatore gestisce molti più clienti — con il vostro marchio.' },
      { label: 'Team di sicurezza.', text: 'Gli attacchi non aspettano l\'orario d\'ufficio, ma il vostro personale torna a casa. Cloud presidia 24/7 e sveglia una persona solo quando conta davvero.' },
      { label: 'Aziende finanziarie e regolamentate.', text: 'Vi servono standard rigorosi, log completi e prontezza agli audit. Cloud tiene uno storico sicuro di ogni azione e vi mantiene sempre pronti per l\'audit.' },
      { label: 'E-commerce e SaaS.', text: 'Ogni minuto di inattività è denaro e clienti persi. Cloud trova e risolve i problemi in minuti, non in ore.' },
      { label: 'Data center e grandi flotte di server.', text: 'Centinaia o migliaia di macchine, decine di tenant, un volume impossibile da controllare a mano. Cloud scala sull\'intera flotta, isola i tenant e amministra ogni macchina come fosse sua.' },
    ],
    closer: 'E se siete quell\'unico amministratore che porta troppo peso da solo, Cloud diventa il team di assistenti che non avete mai avuto.',
  },
  ja: {
    h: 'これは誰のために作られたのか？',
    lead: 'Cloud は、サーバーを持ちながらも時間や人手、あるいは安心が足りないすべての人のために作られました。以下のいずれか一つでも当てはまるなら、このシステムはあなたのために書かれたものです。',
    segments: [
      { label: 'スタートアップ・中小企業', text: 'サーバーはあるがシスアドチームがなく、障害のたびに自分自身が影響を受ける。Cloud が管理業務を引き受け、あなたは製品開発に集中できます。' },
      { label: 'DevOps・SREチーム', text: 'ルーティン業務やオンコール、深夜のアラートに追われている。Cloud がルーティンを吸収し、本当にエンジニアが必要な作業だけを残します。' },
      { label: 'ホスティング事業者・MSP', text: '他社のサーバーを何十台も運用しているが、際限なく人を増やせない。Cloud があれば、1人のオペレーターが自社ブランドのまま何倍もの顧客を担当できます。' },
      { label: 'セキュリティチーム', text: '攻撃は営業時間を待ってくれませんが、担当者は帰宅します。Cloud が24時間365日守り、本当に必要な時だけ人を起こします。' },
      { label: '金融・規制業界の企業', text: '厳格な基準、完全なログ、監査対応が必要。Cloud はすべての操作の安全な履歴を保持し、常に監査対応可能な状態を保ちます。' },
      { label: 'ECサイト・SaaS', text: 'ダウンタイムの1分は失われた売上と顧客を意味します。Cloud は問題を数時間ではなく数分で発見し修正します。' },
      { label: 'データセンター・大規模サーバー群', text: '何百台、何千台ものマシンと数十のテナントは手作業では制御不能。Cloud はフリート全体にスケールし、テナントを分離し、各マシンを自社のものとして管理します。' },
    ],
    closer: 'そして、あまりにも多くを一人で背負う唯一の管理者であるあなたにとって、Cloud はこれまで持てなかったアシスタントチームになります。',
  },
  uk: {
    h: 'Для кого ми це створили?',
    lead: 'Ми створили Cloud для всіх, у кого є сервери — і занадто мало часу, рук чи спокою, щоб за ними встигати. Якщо хоча б один пункт нижче про вас — цю систему написано саме для вас.',
    segments: [
      { label: 'Стартапи та малий бізнес.', text: 'У вас є сервери, але немає команди сисадмінів, і кожен збій б\'є по вас особисто. Cloud бере адміністрування на себе, поки ви будуєте продукт.' },
      { label: 'DevOps- та SRE-команди.', text: 'Ви тонете в рутині, чергуваннях і нічних алертах. Cloud знімає рутину і залишає вам лише те, що справді потребує інженера.' },
      { label: 'Хостинг-провайдери та MSP.', text: 'Ви обслуговуєте десятки чужих серверів і не можете безкінечно наймати людей. Один оператор із Cloud веде в рази більше клієнтів — і під вашим брендом.' },
      { label: 'Команди кібербезпеки.', text: 'Атаки не чекають робочого дня, а ваші люди йдуть додому. Cloud тримає оборону 24/7 і будить людину лише тоді, коли це справді потрібно.' },
      { label: 'Фінансові та регульовані компанії.', text: 'Вам потрібні суворі стандарти, повні логи й готовність до перевірок. Cloud веде захищену історію кожної дії й тримає вас аудит-готовими постійно.' },
      { label: 'E-commerce та SaaS.', text: 'Кожна хвилина простою — це втрачені гроші й клієнти. Cloud знаходить і усуває проблеми за хвилини, а не за години.' },
      { label: 'Дата-центри та великі парки серверів.', text: 'Сотні й тисячі машин, десятки орендарів, неможливий обсяг ручного контролю. Cloud масштабується на весь парк, ізолює клієнтів і адмініструє кожну машину як свою.' },
    ],
    closer: 'А якщо ви той самий єдиний адміністратор, на якому висить занадто багато: Cloud стане тією командою помічників, якої у вас ніколи не було.',
  },
  sr: {
    h: 'Za koga smo ovo napravili?',
    lead: 'Napravili smo Cloud za sve koji imaju servere — a premalo vremena, ruku ili mira da ih prate. Ako se bar jedna od stavki ispod odnosi na vas, ovaj sistem je napisan baš za vas.',
    segments: [
      { label: 'Startapi i mala preduzeća.', text: 'Imate servere, ali nemate sysadmin tim, i svaki prekid vas lično pogađa. Cloud preuzima administraciju dok vi gradite proizvod.' },
      { label: 'DevOps i SRE timovi.', text: 'Davite se u rutini, dežurstvima i alarmima u 3 ujutru. Cloud uklanja rutinu i ostavlja vam samo ono što zaista zahteva inženjera.' },
      { label: 'Hosting provajderi i MSP.', text: 'Vodite desetine tuđih servera i ne možete beskonačno zapošljavati. Uz Cloud, jedan operater opslužuje mnogo više klijenata — pod vašim brendom.' },
      { label: 'Bezbednosni timovi.', text: 'Napadi ne čekaju radno vreme, ali vaši ljudi idu kući. Cloud drži liniju 24/7 i budi čoveka samo kada je to zaista bitno.' },
      { label: 'Finansijske i regulisane kompanije.', text: 'Potrebni su vam strogi standardi, potpuni logovi i spremnost za reviziju. Cloud vodi bezbednu istoriju svake radnje i drži vas uvek spremnim za reviziju.' },
      { label: 'E-trgovina i SaaS.', text: 'Svaki minut zastoja je izgubljen novac i klijenti. Cloud pronalazi i rešava probleme za minute, ne za sate.' },
      { label: 'Podatkovni centri i veliki parkovi servera.', text: 'Stotine ili hiljade mašina, desetine zakupaca, nemoguć obim za ručnu kontrolu. Cloud se skalira na ceo park, izoluje zakupce i administrira svaku mašinu kao svoju.' },
    ],
    closer: 'A ako ste vi taj jedini administrator koji nosi previše na sebi — Cloud postaje tim asistenata koji nikada niste imali.',
  },
  pt: {
    h: 'Para quem construímos isto?',
    lead: 'Construímos o Cloud para todos que têm servidores — e pouco tempo, poucas mãos ou pouca tranquilidade para acompanhá-los. Se pelo menos uma das linhas abaixo descreve você, este sistema foi escrito para você.',
    segments: [
      { label: 'Startups e pequenas empresas.', text: 'Você tem servidores mas não uma equipe de sysadmin, e cada queda atinge você pessoalmente. O Cloud assume a administração enquanto você constrói seu produto.' },
      { label: 'Equipes DevOps e SRE.', text: 'Você está afogado em rotina, plantões e alertas às 3 da manhã. O Cloud absorve a rotina e deixa para você apenas o que realmente exige um engenheiro.' },
      { label: 'Provedores de hospedagem e MSPs.', text: 'Você administra dezenas de servidores de terceiros e não pode contratar infinitamente. Com o Cloud, um operador atende muito mais clientes — sob sua própria marca.' },
      { label: 'Equipes de segurança.', text: 'Os ataques não esperam o horário comercial, mas sua equipe vai para casa. O Cloud mantém a linha 24/7 e só acorda um humano quando realmente importa.' },
      { label: 'Empresas financeiras e regulamentadas.', text: 'Você precisa de padrões rígidos, logs completos e prontidão para auditoria. O Cloud mantém um histórico seguro de cada ação e mantém você sempre pronto para auditoria.' },
      { label: 'E-commerce e SaaS.', text: 'Cada minuto de inatividade é dinheiro e clientes perdidos. O Cloud encontra e corrige problemas em minutos, não horas.' },
      { label: 'Data centers e grandes frotas de servidores.', text: 'Centenas ou milhares de máquinas, dezenas de inquilinos, um volume impossível de controlar manualmente. O Cloud escala em toda a frota, isola inquilinos e administra cada máquina como se fosse sua.' },
    ],
    closer: 'E se você é aquele único administrador carregando peso demais sozinho — o Cloud se torna a equipe de assistentes que você nunca teve.',
  },
  hi: {
    h: 'हमने यह किसके लिए बनाया?',
    lead: 'हमने Cloud उन सभी के लिए बनाया है जिनके पास सर्वर हैं — और उन्हें संभालने के लिए बहुत कम समय, कम हाथ या कम मानसिक शांति है। यदि नीचे दी गई एक भी पंक्ति आप पर लागू होती है, तो यह सिस्टम आपके लिए ही बनाया गया है।',
    segments: [
      { label: 'स्टार्टअप और छोटे व्यवसाय।', text: 'आपके पास सर्वर हैं लेकिन कोई सिसएडमिन टीम नहीं है, और हर आउटेज आपको व्यक्तिगत रूप से प्रभावित करता है। जब आप अपना उत्पाद बनाते हैं, Cloud प्रशासन संभाल लेता है।' },
      { label: 'DevOps और SRE टीमें।', text: 'आप रूटीन, ऑन-कॉल रोटेशन और रात 3 बजे के अलर्ट में डूबे हुए हैं। Cloud रूटीन को अवशोषित करता है और केवल वही छोड़ता है जिसे वास्तव में इंजीनियर की आवश्यकता है।' },
      { label: 'होस्टिंग प्रदाता और MSP।', text: 'आप दूसरों के दर्जनों सर्वर चलाते हैं और अनंत काल तक भर्ती नहीं कर सकते। Cloud के साथ, एक ऑपरेटर कई गुना अधिक ग्राहक संभालता है — आपके अपने ब्रांड के तहत।' },
      { label: 'सुरक्षा टीमें।', text: 'हमले कार्यालय समय की प्रतीक्षा नहीं करते, पर आपके लोग घर चले जाते हैं। Cloud 24/7 मोर्चा संभालता है और तभी किसी इंसान को जगाता है जब वाकई जरूरी हो।' },
      { label: 'वित्तीय और विनियमित कंपनियां।', text: 'आपको सख्त मानकों, पूर्ण लॉग और ऑडिट तैयारी की आवश्यकता है। Cloud हर क्रिया का सुरक्षित इतिहास रखता है और आपको हमेशा ऑडिट के लिए तैयार रखता है।' },
      { label: 'ई-कॉमर्स और SaaS।', text: 'डाउनटाइम का हर मिनट खोया हुआ पैसा और खोए हुए ग्राहक है। Cloud घंटों में नहीं, मिनटों में समस्याएं ढूंढता और ठीक करता है।' },
      { label: 'डेटा सेंटर और बड़े सर्वर बेड़े।', text: 'सैकड़ों या हजारों मशीनें, दर्जनों टेनेंट, हाथ से नियंत्रित करना असंभव मात्रा। Cloud पूरे बेड़े में स्केल करता है, टेनेंट को अलग रखता है, और हर मशीन को अपनी तरह प्रबंधित करता है।' },
    ],
    closer: 'और यदि आप वही एकमात्र प्रशासक हैं जो अकेले बहुत अधिक बोझ उठा रहे हैं — Cloud उस सहायक टीम में बदल जाता है जो आपके पास कभी नहीं थी।',
  },
  tr: {
    h: 'Bunu kimin için oluşturduk?',
    lead: "Cloud'u; sunucusu olan ama onlarla ilgilenmek için çok az zamanı, çok az eli veya çok az huzuru olan herkes için tasarladık. Aşağıdaki satırlardan biri bile sizi anlatıyorsa, bu sistem sizin için yazıldı.",
    segments: [
      { label: 'Girişimler ve küçük işletmeler.', text: 'Sunucularınız var ama sysadmin ekibiniz yok ve her kesinti doğrudan sizi vuruyor. Siz ürününüzü geliştirirken Cloud yönetimi devralır.' },
      { label: 'DevOps ve SRE ekipleri.', text: "Rutin işler, nöbetler ve gece 3 uyarılarında boğuluyorsunuz. Cloud rutini üstlenir ve size yalnızca gerçekten bir mühendis gerektiren işleri bırakır." },
      { label: 'Barındırma sağlayıcıları ve MSP\'ler.', text: "Onlarca başkasının sunucusunu yönetiyorsunuz ve sonsuza kadar işe alım yapamazsınız. Cloud ile tek bir operatör, kendi markanız altında kat kat daha fazla müşteriye hizmet verir." },
      { label: 'Güvenlik ekipleri.', text: 'Saldırılar mesai saatlerini beklemez, ama ekibiniz eve gider. Cloud 7/24 hattı korur ve bir insanı yalnızca gerçekten gerektiğinde uyandırır.' },
      { label: 'Finans ve düzenlemeye tabi şirketler.', text: 'Sıkı standartlara, eksiksiz kayıtlara ve denetime hazır olmaya ihtiyacınız var. Cloud her eylemin güvenli bir geçmişini tutar ve sizi her zaman denetime hazır halde bulundurur.' },
      { label: 'E-ticaret ve SaaS.', text: 'Kesinti süresinin her dakikası kaybedilen para ve müşteri demektir. Cloud sorunları saatler içinde değil dakikalar içinde bulur ve çözer.' },
      { label: 'Veri merkezleri ve büyük sunucu filoları.', text: "Yüzlerce ya da binlerce makine, düzinelerce kiracı — elle kontrol edilemeyecek bir hacim. Cloud tüm filo genelinde ölçeklenir, kiracıları izole eder ve her makineyi kendi malıymış gibi yönetir." },
    ],
    closer: "Ve eğer siz tek başına çok fazla yük taşıyan o tek yönetici iseniz, Cloud hiç sahip olmadığınız asistan ekibine dönüşür.",
  },
  ar: {
    h: 'لمن بنينا هذا؟',
    lead: 'بنينا Cloud لكل من لديه خوادم — ووقت قليل جدًا، أو أيدٍ قليلة، أو راحة بال قليلة لمواكبتها. إذا انطبق عليكم ولو سطر واحد مما يلي، فهذا النظام كُتب من أجلكم.',
    segments: [
      { label: 'الشركات الناشئة والصغيرة.', text: 'لديكم خوادم لكن لا يوجد فريق إدارة أنظمة، وكل انقطاع يؤثر عليكم شخصيًا. يتولى Cloud الإدارة بينما تبنون منتجكم.' },
      { label: 'فرق DevOps وSRE.', text: 'تغرقون في الأعمال الروتينية والمناوبات وتنبيهات الساعة الثالثة صباحًا. يستوعب Cloud الروتين ويترك لكم فقط ما يتطلب مهندسًا فعليًا.' },
      { label: 'مزودو الاستضافة ومقدمو الخدمات المُدارة.', text: 'تديرون عشرات خوادم الآخرين ولا يمكنكم التوظيف إلى ما لا نهاية. مع Cloud، يتولى مشغّل واحد عددًا أكبر بكثير من العملاء — تحت علامتكم التجارية الخاصة.' },
      { label: 'فرق الأمن.', text: 'الهجمات لا تنتظر ساعات العمل، لكن فريقكم يعود إلى المنزل. يحافظ Cloud على الخط على مدار الساعة طوال أيام الأسبوع ولا يوقظ إنسانًا إلا عند الضرورة الحقيقية.' },
      { label: 'الشركات المالية والخاضعة للتنظيم.', text: 'تحتاجون إلى معايير صارمة وسجلات كاملة وجاهزية للتدقيق. يحتفظ Cloud بسجل آمن لكل إجراء ويبقيكم دائمًا جاهزين للتدقيق.' },
      { label: 'التجارة الإلكترونية وSaaS.', text: 'كل دقيقة توقف تعني أموالًا وعملاء مفقودين. يجد Cloud المشكلات ويصلحها في دقائق، لا ساعات.' },
      { label: 'مراكز البيانات وأساطيل الخوادم الكبيرة.', text: 'مئات أو آلاف الأجهزة، وعشرات المستأجرين، وحجم يستحيل التحكم به يدويًا. يتوسع Cloud عبر الأسطول بأكمله، ويعزل المستأجرين، ويدير كل جهاز وكأنه ملكه.' },
    ],
    closer: 'وإذا كنتم أنتم ذلك المسؤول الوحيد الذي يحمل الكثير جدًا بمفرده — يصبح Cloud فريق المساعدين الذي لم يكن لديكم من قبل.',
  },
  el: {
    h: 'Για ποιον το φτιάξαμε αυτό;',
    lead: 'Φτιάξαμε το Cloud για όλους όσους έχουν διακομιστές — και πολύ λίγο χρόνο, λίγα χέρια ή λίγη ηρεμία για να τους παρακολουθούν. Αν έστω μία από τις παρακάτω γραμμές σας αφορά, αυτό το σύστημα γράφτηκε για εσάς.',
    segments: [
      { label: 'Startups και μικρές επιχειρήσεις.', text: 'Έχετε διακομιστές αλλά όχι ομάδα sysadmin, και κάθε διακοπή σας επηρεάζει προσωπικά. Το Cloud αναλαμβάνει τη διαχείριση ενώ εσείς χτίζετε το προϊόν σας.' },
      { label: 'Ομάδες DevOps και SRE.', text: 'Πνίγεστε στη ρουτίνα, στις βάρδιες επιφυλακής και στις ειδοποιήσεις στις 3 τα ξημερώματα. Το Cloud απορροφά τη ρουτίνα και σας αφήνει μόνο ό,τι πραγματικά χρειάζεται μηχανικό.' },
      { label: 'Πάροχοι φιλοξενίας και MSP.', text: 'Διαχειρίζεστε δεκάδες διακομιστές πελατών και δεν μπορείτε να προσλαμβάνετε επ\' άπειρον. Με το Cloud, ένας χειριστής εξυπηρετεί πολλαπλάσιους πελάτες — με τη δική σας επωνυμία.' },
      { label: 'Ομάδες ασφαλείας.', text: 'Οι επιθέσεις δεν περιμένουν το ωράριο εργασίας, αλλά οι άνθρωποί σας πάνε σπίτι. Το Cloud κρατά τη γραμμή 24/7 και ξυπνά έναν άνθρωπο μόνο όταν πραγματικά χρειάζεται.' },
      { label: 'Χρηματοοικονομικές και εποπτευόμενες εταιρείες.', text: 'Χρειάζεστε αυστηρά πρότυπα, πλήρη αρχεία καταγραφής και ετοιμότητα για έλεγχο. Το Cloud τηρεί ασφαλές ιστορικό κάθε ενέργειας και σας κρατά πάντα έτοιμους για έλεγχο.' },
      { label: 'E-commerce και SaaS.', text: 'Κάθε λεπτό διακοπής σημαίνει χαμένα χρήματα και χαμένους πελάτες. Το Cloud εντοπίζει και διορθώνει προβλήματα σε λεπτά, όχι ώρες.' },
      { label: 'Κέντρα δεδομένων και μεγάλοι στόλοι διακομιστών.', text: 'Εκατοντάδες ή χιλιάδες μηχανές, δεκάδες ενοικιαστές, όγκος αδύνατο να ελεγχθεί χειροκίνητα. Το Cloud κλιμακώνεται σε όλο τον στόλο, απομονώνει τους ενοικιαστές και διαχειρίζεται κάθε μηχάνημα σαν να ήταν δικό του.' },
    ],
    closer: 'Κι αν είστε εκείνος ο μοναδικός διαχειριστής που κουβαλά πάρα πολλά μόνος του — το Cloud γίνεται η ομάδα βοηθών που δεν είχατε ποτέ.',
  },
};

const BLOCK3: Record<string, Block3> = {
  en: {
    h: 'Wherever you are',
    p1: 'It doesn’t matter which country you’re in. Your geography is no barrier between us — we work with clients all over the world.',
    p2: 'Yes, we are based legally in the United Kingdom and the European Union. But our servers are deployed across every major cloud platform and key region in the world — so data-transfer latency stays minimal wherever your server stands.',
    p3: 'You get local speed and global protection at once — no compromise.',
  },
  ru: {
    h: 'Где бы вы ни были',
    p1: 'Нам неважно, в какой стране вы находитесь. Ваша география нас не ограничивает — мы работаем с клиентами по всему миру.',
    p2: 'Да, юридически мы в Великобритании и Евросоюзе. Но наши серверы разворачиваются на всех крупнейших облачных платформах и во всех ключевых регионах мира — чтобы задержки передачи данных были минимальными везде, где бы ни стоял ваш сервер.',
    p3: 'Вы получаете локальную скорость и глобальную защиту одновременно — без компромиссов.',
  },
  zh: {
    h: '無論您身在何處',
    p1: '無論您位於哪個國家，地理位置絕不會成為我們之間的阻礙 —— 我們的服務範疇涵蓋全球。',
    p2: '的確，我們在法律體系上立足於英國與歐盟；但我們的伺服器已部署於全球所有主流的雲端平台及核心區域。無論您的伺服器部署在何處，我們都能確保將資料傳輸延遲降至最低。',
    p3: '您將同時享有在地化的極致速度與全球級的安全防護 —— 絕不妥協。',
  },
  fr: {
    h: 'Où que vous soyez',
    p1: "Peu importe le pays où vous vous trouvez. Votre géographie n'est pas une barrière entre nous — nous travaillons avec des clients partout dans le monde.",
    p2: "Oui, nous sommes légalement basés au Royaume-Uni et dans l'Union européenne. Mais nos serveurs sont déployés sur toutes les grandes plateformes cloud et toutes les régions clés du monde — afin que la latence de transfert de données reste minimale, où que se trouve votre serveur.",
    p3: 'Vous obtenez à la fois vitesse locale et protection mondiale — sans compromis.',
  },
  de: {
    h: 'Wo auch immer Sie sind',
    p1: 'Es spielt keine Rolle, in welchem Land Sie sich befinden. Ihre Geografie ist keine Barriere zwischen uns — wir arbeiten mit Kunden auf der ganzen Welt.',
    p2: 'Ja, wir sind rechtlich im Vereinigten Königreich und in der Europäischen Union ansässig. Aber unsere Server sind auf allen großen Cloud-Plattformen und in allen wichtigen Regionen der Welt verteilt — damit die Datenübertragungslatenz überall dort minimal bleibt, wo Ihr Server steht.',
    p3: 'Sie erhalten lokale Geschwindigkeit und globalen Schutz zugleich — ohne Kompromisse.',
  },
  es: {
    h: 'Dondequiera que esté',
    p1: 'No importa en qué país se encuentre. Su geografía no es una barrera entre nosotros: trabajamos con clientes en todo el mundo.',
    p2: 'Sí, tenemos sede legal en el Reino Unido y la Unión Europea. Pero nuestros servidores están desplegados en todas las principales plataformas en la nube y en todas las regiones clave del mundo, para que la latencia de transferencia de datos siga siendo mínima dondequiera que esté su servidor.',
    p3: 'Obtiene velocidad local y protección global a la vez, sin compromisos.',
  },
  it: {
    h: 'Ovunque voi siate',
    p1: 'Non importa in quale paese vi troviate. La vostra posizione geografica non è una barriera tra noi: lavoriamo con clienti in tutto il mondo.',
    p2: "Sì, siamo legalmente basati nel Regno Unito e nell'Unione Europea. Ma i nostri server sono distribuiti su tutte le principali piattaforme cloud e in tutte le regioni chiave del mondo, così la latenza di trasferimento dati resta minima ovunque si trovi il vostro server.",
    p3: 'Ottenete velocità locale e protezione globale allo stesso tempo, senza compromessi.',
  },
  ja: {
    h: 'どこにいても',
    p1: 'あなたがどの国にいても関係ありません。地理はあなたと私たちの間の障壁にはならず、私たちは世界中のお客様と協働しています。',
    p2: '確かに、私たちは法的には英国と欧州連合を拠点としています。しかし、私たちのサーバーは世界のあらゆる主要クラウドプラットフォームと重要リージョンに展開されており、あなたのサーバーがどこにあってもデータ転送遅延を最小限に保ちます。',
    p3: 'ローカルな速度とグローバルな保護を同時に、妥協なしで手に入れられます。',
  },
  uk: {
    h: 'Де б ви не були',
    p1: 'Нам не важливо, у якій країні ви перебуваєте. Ваша географія нас не обмежує — ми працюємо з клієнтами по всьому світу.',
    p2: 'Так, юридично ми у Великій Британії та Європейському Союзі. Але наші сервери розгортаються на всіх найбільших хмарних платформах і в усіх ключових регіонах світу — щоб затримки передачі даних були мінімальними скрізь, де б не стояв ваш сервер.',
    p3: 'Ви отримуєте локальну швидкість і глобальний захист одночасно — без компромісів.',
  },
  sr: {
    h: 'Gde god da ste',
    p1: 'Nije važno u kojoj se zemlji nalazite. Vaša geografija nije prepreka između nas — radimo sa klijentima širom sveta.',
    p2: 'Da, pravno smo registrovani u Ujedinjenom Kraljevstvu i Evropskoj uniji. Ali naši serveri su raspoređeni na svim velikim cloud platformama i ključnim regionima sveta — kako bi kašnjenje prenosa podataka ostalo minimalno gde god da se nalazi vaš server.',
    p3: 'Dobijate lokalnu brzinu i globalnu zaštitu istovremeno — bez kompromisa.',
  },
  pt: {
    h: 'Onde quer que você esteja',
    p1: 'Não importa em que país você esteja. Sua geografia não é uma barreira entre nós — trabalhamos com clientes no mundo todo.',
    p2: 'Sim, estamos legalmente sediados no Reino Unido e na União Europeia. Mas nossos servidores estão implantados em todas as principais plataformas de nuvem e regiões-chave do mundo — para que a latência de transferência de dados permaneça mínima onde quer que seu servidor esteja.',
    p3: 'Você obtém velocidade local e proteção global ao mesmo tempo — sem compromissos.',
  },
  hi: {
    h: 'आप जहां भी हों',
    p1: 'आप किस देश में हैं, इससे फर्क नहीं पड़ता। आपकी भौगोलिक स्थिति हमारे बीच कोई बाधा नहीं है — हम दुनिया भर के ग्राहकों के साथ काम करते हैं।',
    p2: 'हां, कानूनी रूप से हम यूनाइटेड किंगडम और यूरोपीय संघ में स्थित हैं। लेकिन हमारे सर्वर दुनिया के हर प्रमुख क्लाउड प्लेटफ़ॉर्म और प्रमुख क्षेत्र में तैनात हैं — ताकि आपका सर्वर जहां भी हो, डेटा-ट्रांसफर विलंब न्यूनतम रहे।',
    p3: 'आपको एक साथ स्थानीय गति और वैश्विक सुरक्षा मिलती है — बिना किसी समझौते के।',
  },
  tr: {
    h: 'Nerede olursanız olun',
    p1: 'Hangi ülkede olduğunuz önemli değil. Coğrafyanız aramızda bir engel değildir — dünyanın her yerindeki müşterilerle çalışıyoruz.',
    p2: "Evet, yasal olarak Birleşik Krallık ve Avrupa Birliği'nde konumlanıyoruz. Ancak sunucularımız dünyanın tüm önde gelen bulut platformlarına ve kilit bölgelerine yayılmış durumda — böylece sunucunuz nerede olursa olsun veri aktarım gecikmesi minimum düzeyde kalır.",
    p3: 'Yerel hızla küresel korumayı aynı anda elde edersiniz — hiçbir taviz olmadan.',
  },
  ar: {
    h: 'أينما كنتم',
    p1: 'لا يهم في أي بلد تتواجدون. موقعكم الجغرافي ليس عائقًا بيننا — نعمل مع عملاء في جميع أنحاء العالم.',
    p2: 'نعم، نحن قانونيًا مقرّنا في المملكة المتحدة والاتحاد الأوروبي. لكن خوادمنا منتشرة عبر جميع منصات السحابة الكبرى والمناطق الرئيسية في العالم — حتى يظل زمن انتقال البيانات في حده الأدنى أينما كان خادمكم.',
    p3: 'تحصلون على سرعة محلية وحماية عالمية في آن واحد — دون أي تنازل.',
  },
  el: {
    h: 'Όπου κι αν βρίσκεστε',
    p1: 'Δεν έχει σημασία σε ποια χώρα βρίσκεστε. Η γεωγραφία σας δεν είναι εμπόδιο μεταξύ μας — συνεργαζόμαστε με πελάτες σε όλο τον κόσμο.',
    p2: 'Ναι, εδρεύουμε νομικά στο Ηνωμένο Βασίλειο και στην Ευρωπαϊκή Ένωση. Όμως οι διακομιστές μας είναι αναπτυγμένοι σε όλες τις μεγάλες πλατφόρμες cloud και σε όλες τις βασικές περιοχές του κόσμου — ώστε η καθυστέρηση μεταφοράς δεδομένων να παραμένει ελάχιστη όπου κι αν βρίσκεται ο διακομιστής σας.',
    p3: 'Αποκτάτε τοπική ταχύτητα και παγκόσμια προστασία ταυτόχρονα — χωρίς κανένα συμβιβασμό.',
  },
};

const BLOCK4: Record<string, Block4> = {
  en: {
    h: 'Your control center',
    paras: [
      'Cloud is so simple to run that you don’t need a dedicated person “for the buttons.” The interface is intuitive: you open it and immediately see where everything is.',
      'You build your own screen. From a set of ready-made widgets you take only the ones you actually need and arrange them into a workspace shaped around your tasks. At any moment you can add a new widget or swap any of them — the interface grows with you.',
      'The main interface belongs to the owner or the company’s manager, and only they decide who gets in. To onboard a specialist, you simply add them to your company database: the system generates their interface automatically, with the access level you consider appropriate.',
      'Your accountant sees one workspace, your system administrator another, your security lead another — each gets exactly the tools they need, and nothing more.',
      'And you see every action your specialists take. If an action threatens your system, your personal AI assistant warns you instantly and, on your command, blocks it the moment you judge it dangerous or unauthorized.',
      'Access can be protected by up to five factors: password, email, Telegram, an authenticator app, and biometrics. How many to enable is entirely up to you.',
    ],
  },
  ru: {
    h: 'Ваш центр управления',
    paras: [
      'Управлять Cloud настолько просто, что для этого не нужен отдельный специалист «для кнопок». Интерфейс интуитивный: вы открываете его и сразу понимаете, что где.',
      'Свой экран вы собираете сами. Из набора готовых виджетов вы берёте только те, что нужны именно вам, и выстраиваете из них рабочее пространство под свои задачи. В любой момент можно добавить новый виджет или заменить любой из них — интерфейс растёт вместе с вами.',
      'Главный интерфейс принадлежит владельцу или управляющему компании, и только он решает, кого пустить внутрь. Чтобы подключить специалиста, достаточно добавить его в базу данных вашей компании: система сама сгенерирует для него интерфейс, с тем уровнем доступа, который вы сочтёте нужным.',
      'Бухгалтер видит своё, системный администратор — своё, специалист по безопасности — своё. Каждый получает ровно тот инструмент, что ему нужен, и ничего лишнего.',
      'При этом вы видите все действия своих специалистов. Если действие угрожает вашей системе, персональный AI-помощник тут же вас предупредит и по вашей команде заблокирует, если вы сочтёте его опасным или несанкционированным.',
      'Вход в интерфейс можно защитить вплоть до пяти факторов: пароль, почта, Telegram, приложение-аутентификатор и биометрия. Сколько из них включить — решаете вы.',
    ],
  },
  zh: {
    h: '您的專屬控制中心',
    paras: [
      'Guardian Cloud 平台的管理極其簡單，您根本不需要專門配備一名「按鈕操作員」。其介面直觀清晰：打開它的那一刻起，所有功能配置便一目了然。',
      '打造您的自訂主頁：您可以像玩積木一樣自由組合螢幕畫面。從內建的元件庫（Widgets）中挑選您所需的模組，客製化出最符合自身業務需求的工作空間。您可以隨時新增或調整任何元件 —— 系統介面將伴隨您的業務規模一同成長。',
      '權限全權在手：主控台的最高權限歸企業主或核心管理員所有，只有您能決定誰有權進入系統。若要授予專家存取權，只需將其新增至您的企業資料庫中：系統會根據您設定的權限級別，自動為其生成專屬的作業介面。',
      '會計只能看到財務相關數據，系統管理員專注於運維指標，而安全專家則盯緊防禦動態。每位團隊成員都能精準獲取所需的工具，絕無任何冗餘干擾。',
      '全程掌控，智慧防禦：與此同時，您可以全程追蹤團隊專家的所有操作。一旦系統偵測到任何可能威脅架構安全的行為，您的專屬 AI 助理將立即發出警報。若您判定該操作具備危險性或未經授權，只需下達指令，AI 就會即刻執行攔截與封鎖。',
      '最高支援五重資安驗證：您可以為控制中心的登入流程部署高達五道防線：密碼、電子郵件、Telegram、驗證器應用程式（Authenticator App）以及生物辨識。具體啟用幾重驗證，完全由您全權決定。',
    ],
  },
  fr: {
    h: 'Votre centre de contrôle',
    paras: [
      "Cloud est si simple à utiliser que vous n'avez pas besoin d'une personne dédiée « aux boutons ». L'interface est intuitive : vous l'ouvrez et voyez immédiatement où se trouve tout.",
      "Vous construisez votre propre écran. Parmi un ensemble de widgets prêts à l'emploi, vous ne prenez que ceux dont vous avez réellement besoin et les organisez en un espace de travail adapté à vos tâches. À tout moment, vous pouvez ajouter un nouveau widget ou en remplacer un autre — l'interface évolue avec vous.",
      "L'interface principale appartient au propriétaire ou au dirigeant de l'entreprise, et lui seul décide qui peut y accéder. Pour intégrer un spécialiste, il suffit de l'ajouter à la base de données de votre entreprise : le système génère automatiquement son interface, avec le niveau d'accès que vous jugez approprié.",
      "Votre comptable voit un espace de travail, votre administrateur système un autre, votre responsable sécurité encore un autre — chacun reçoit exactement les outils dont il a besoin, et rien de plus.",
      'Et vous voyez chaque action de vos spécialistes. Si une action menace votre système, votre assistant IA personnel vous prévient instantanément et, sur votre ordre, la bloque dès que vous la jugez dangereuse ou non autorisée.',
      "L'accès peut être protégé par jusqu'à cinq facteurs : mot de passe, e-mail, Telegram, une application d'authentification et la biométrie. Le nombre à activer dépend entièrement de vous.",
    ],
  },
  de: {
    h: 'Ihre Kommandozentrale',
    paras: [
      'Cloud ist so einfach zu bedienen, dass Sie keine eigene Person „für die Knöpfe" benötigen. Die Oberfläche ist intuitiv: Sie öffnen sie und sehen sofort, wo alles ist.',
      'Sie bauen Ihren eigenen Bildschirm. Aus einer Reihe fertiger Widgets nehmen Sie nur diejenigen, die Sie wirklich brauchen, und ordnen sie zu einem Arbeitsbereich, der auf Ihre Aufgaben zugeschnitten ist. Jederzeit können Sie ein neues Widget hinzufügen oder ein bestehendes austauschen — die Oberfläche wächst mit Ihnen.',
      'Die Hauptoberfläche gehört dem Eigentümer oder dem Geschäftsführer, und nur er entscheidet, wer Zugang erhält. Um einen Spezialisten einzubinden, fügen Sie ihn einfach zur Datenbank Ihres Unternehmens hinzu: Das System generiert automatisch seine Oberfläche, mit der von Ihnen für angemessen gehaltenen Zugriffsebene.',
      'Ihr Buchhalter sieht einen Arbeitsbereich, Ihr Systemadministrator einen anderen, Ihr Sicherheitsverantwortlicher wieder einen anderen — jeder erhält genau die Werkzeuge, die er braucht, und nicht mehr.',
      'Und Sie sehen jede Handlung Ihrer Spezialisten. Wenn eine Handlung Ihr System bedroht, warnt Sie Ihr persönlicher KI-Assistent sofort und blockiert sie auf Ihren Befehl, sobald Sie sie als gefährlich oder nicht autorisiert einstufen.',
      'Der Zugang kann durch bis zu fünf Faktoren geschützt werden: Passwort, E-Mail, Telegram, eine Authenticator-App und Biometrie. Wie viele Sie aktivieren, entscheiden Sie ganz allein.',
    ],
  },
  es: {
    h: 'Su centro de control',
    paras: [
      'Cloud es tan sencillo de manejar que no necesita una persona dedicada "a los botones". La interfaz es intuitiva: la abre y ve de inmediato dónde está todo.',
      'Usted construye su propia pantalla. De un conjunto de widgets ya preparados, toma solo los que realmente necesita y los organiza en un espacio de trabajo adaptado a sus tareas. En cualquier momento puede añadir un nuevo widget o sustituir cualquiera de ellos: la interfaz crece con usted.',
      'La interfaz principal pertenece al propietario o al gerente de la empresa, y solo él decide quién entra. Para incorporar a un especialista, basta con añadirlo a la base de datos de su empresa: el sistema genera automáticamente su interfaz, con el nivel de acceso que usted considere adecuado.',
      'Su contable ve un espacio de trabajo, su administrador de sistemas otro, su responsable de seguridad otro más: cada uno recibe exactamente las herramientas que necesita, y nada más.',
      'Y usted ve cada acción de sus especialistas. Si una acción amenaza su sistema, su asistente de IA personal le avisa al instante y, por orden suya, la bloquea en el momento en que usted la considere peligrosa o no autorizada.',
      'El acceso puede protegerse con hasta cinco factores: contraseña, correo electrónico, Telegram, una aplicación autenticadora y biometría. Cuántos activar depende totalmente de usted.',
    ],
  },
  it: {
    h: 'Il vostro centro di controllo',
    paras: [
      'Cloud è così semplice da gestire che non serve una persona dedicata "ai pulsanti". L\'interfaccia è intuitiva: la aprite e vedete subito dove si trova ogni cosa.',
      'Costruite voi stessi il vostro schermo. Da un insieme di widget già pronti, prendete solo quelli di cui avete realmente bisogno e li organizzate in uno spazio di lavoro costruito sulle vostre attività. In qualsiasi momento potete aggiungere un nuovo widget o sostituirne uno: l\'interfaccia cresce con voi.',
      'L\'interfaccia principale appartiene al proprietario o al responsabile dell\'azienda, e solo lui decide chi vi accede. Per inserire uno specialista, basta aggiungerlo al database della vostra azienda: il sistema genera automaticamente la sua interfaccia, con il livello di accesso che ritenete opportuno.',
      'Il vostro commercialista vede uno spazio di lavoro, il vostro amministratore di sistema un altro, il vostro responsabile della sicurezza un altro ancora: ognuno riceve esattamente gli strumenti di cui ha bisogno, e nient\'altro.',
      'E voi vedete ogni azione dei vostri specialisti. Se un\'azione minaccia il vostro sistema, il vostro assistente IA personale vi avvisa immediatamente e, su vostro comando, la blocca nel momento in cui la ritenete pericolosa o non autorizzata.',
      'L\'accesso può essere protetto fino a cinque fattori: password, e-mail, Telegram, un\'app di autenticazione e la biometria. Quanti attivarne dipende interamente da voi.',
    ],
  },
  ja: {
    h: 'あなたの管制センター',
    paras: [
      'Cloud の操作は非常にシンプルで、「ボタン操作専任」の担当者は不要です。インターフェースは直感的で、開けばすぐにすべての所在がわかります。',
      '自分の画面は自分で組み立てます。用意されたウィジェットの中から本当に必要なものだけを選び、自分の業務に合わせたワークスペースを構成します。いつでも新しいウィジェットを追加したり入れ替えたりでき、インターフェースはあなたと共に成長します。',
      'メインインターフェースはオーナーまたは企業の管理者に属し、誰を入れるかを決めるのはその人だけです。専門家をオンボードするには、会社のデータベースに追加するだけで、システムが適切と判断されたアクセスレベルで自動的にインターフェースを生成します。',
      '経理担当者は自分の作業空間を、システム管理者は別の作業空間を、セキュリティ責任者はまた別の作業空間を見ます。それぞれが必要なツールだけを正確に手にし、それ以上は何もありません。',
      'そして、専門家のすべての操作をあなたが確認できます。行動がシステムを脅かす場合、あなた専属のAIアシスタントが即座に警告し、あなたの指示に基づき、危険または不正と判断した瞬間にブロックします。',
      'アクセスは最大5つの要素で保護できます：パスワード、メール、Telegram、認証アプリ、生体認証。いくつ有効にするかは完全にあなた次第です。',
    ],
  },
  uk: {
    h: 'Ваш центр управління',
    paras: [
      'Керувати Cloud настільки просто, що для цього не потрібен окремий фахівець «для кнопок». Інтерфейс інтуїтивний: ви відкриваєте його і одразу розумієте, що і де.',
      'Свій екран ви збираєте самі. З набору готових віджетів ви берете тільки ті, що потрібні саме вам, і вибудовуєте з них робочий простір під свої завдання. У будь-який момент можна додати новий віджет або замінити будь-який з них — інтерфейс росте разом із вами.',
      'Головний інтерфейс належить власнику або керівнику компанії, і тільки він вирішує, кого пустити всередину. Щоб підключити фахівця, достатньо додати його до бази даних вашої компанії: система сама згенерує для нього інтерфейс із тим рівнем доступу, який ви вважатимете потрібним.',
      'Бухгалтер бачить своє, системний адміністратор — своє, фахівець з безпеки — своє. Кожен отримує рівно той інструмент, що йому потрібен, і нічого зайвого.',
      'При цьому ви бачите всі дії своїх фахівців. Якщо дія загрожує вашій системі, персональний AI-помічник одразу вас попередить і за вашою командою заблокує, якщо ви вважатимете її небезпечною чи несанкціонованою.',
      'Вхід в інтерфейс можна захистити аж п\'ятьма факторами: пароль, пошта, Telegram, застосунок-автентифікатор і біометрія. Скільки з них увімкнути — вирішуєте ви.',
    ],
  },
  sr: {
    h: 'Vaš kontrolni centar',
    paras: [
      'Cloud je toliko jednostavan za korišćenje da vam nije potrebna posebna osoba "za dugmiće". Interfejs je intuitivan: otvorite ga i odmah vidite gde je šta.',
      'Svoj ekran gradite sami. Iz seta gotovih vidžeta uzimate samo one koji su vam zaista potrebni i slažete ih u radni prostor prilagođen vašim zadacima. U svakom trenutku možete dodati novi vidžet ili zameniti bilo koji — interfejs raste zajedno sa vama.',
      'Glavni interfejs pripada vlasniku ili menadžeru kompanije, i samo on odlučuje ko ima pristup. Da biste uključili stručnjaka, dovoljno je da ga dodate u bazu podataka vaše kompanije: sistem automatski generiše njegov interfejs, sa nivoom pristupa koji smatrate odgovarajućim.',
      'Vaš knjigovođa vidi svoj radni prostor, sistem administrator svoj, bezbednosni stručnjak svoj — svako dobija tačno onaj alat koji mu je potreban, i ništa više.',
      'A vi vidite svaku radnju svojih stručnjaka. Ako radnja ugrožava vaš sistem, vaš lični AI asistent vas odmah upozorava i, na vašu komandu, blokira je u trenutku kada je proceniite opasnom ili neovlašćenom.',
      'Pristup se može zaštititi sa do pet faktora: lozinka, e-pošta, Telegram, aplikacija za autentifikaciju i biometrija. Koliko ćete ih aktivirati, u potpunosti zavisi od vas.',
    ],
  },
  pt: {
    h: 'Seu centro de controle',
    paras: [
      'O Cloud é tão simples de operar que você não precisa de uma pessoa dedicada "aos botões". A interface é intuitiva: você a abre e vê imediatamente onde está tudo.',
      'Você constrói sua própria tela. De um conjunto de widgets prontos, você escolhe apenas os que realmente precisa e os organiza em um espaço de trabalho voltado para suas tarefas. A qualquer momento você pode adicionar um novo widget ou trocar qualquer um deles — a interface cresce com você.',
      'A interface principal pertence ao proprietário ou ao gestor da empresa, e só ele decide quem entra. Para integrar um especialista, basta adicioná-lo ao banco de dados da sua empresa: o sistema gera automaticamente a interface dele, com o nível de acesso que você considerar adequado.',
      'Seu contador vê um espaço de trabalho, seu administrador de sistemas outro, seu responsável de segurança outro ainda — cada um recebe exatamente as ferramentas de que precisa, e nada além disso.',
      'E você vê cada ação de seus especialistas. Se uma ação ameaçar seu sistema, seu assistente de IA pessoal o avisa instantaneamente e, a seu comando, a bloqueia no momento em que você a considerar perigosa ou não autorizada.',
      'O acesso pode ser protegido por até cinco fatores: senha, e-mail, Telegram, um aplicativo autenticador e biometria. Quantos ativar depende inteiramente de você.',
    ],
  },
  hi: {
    h: 'आपका नियंत्रण केंद्र',
    paras: [
      'Cloud चलाना इतना सरल है कि आपको "बटनों के लिए" किसी समर्पित व्यक्ति की आवश्यकता नहीं है। इंटरफ़ेस सहज है: आप इसे खोलते हैं और तुरंत देख लेते हैं कि सब कुछ कहां है।',
      'आप अपनी स्क्रीन खुद बनाते हैं। तैयार विजेट्स के सेट में से आप केवल वही लेते हैं जिनकी आपको वास्तव में आवश्यकता है और उन्हें अपने कार्यों के अनुरूप एक कार्यक्षेत्र में व्यवस्थित करते हैं। किसी भी क्षण आप एक नया विजेट जोड़ सकते हैं या किसी को बदल सकते हैं — इंटरफ़ेस आपके साथ बढ़ता है।',
      'मुख्य इंटरफ़ेस मालिक या कंपनी के प्रबंधक का होता है, और केवल वही तय करता है कि किसे प्रवेश मिले। किसी विशेषज्ञ को शामिल करने के लिए, बस उन्हें अपनी कंपनी के डेटाबेस में जोड़ें: सिस्टम स्वचालित रूप से उनका इंटरफ़ेस उस पहुंच स्तर के साथ बना देता है जिसे आप उचित समझते हैं।',
      'आपका एकाउंटेंट एक कार्यक्षेत्र देखता है, आपका सिस्टम प्रशासक दूसरा, आपका सुरक्षा प्रमुख तीसरा — हर किसी को ठीक वही उपकरण मिलते हैं जिनकी उसे आवश्यकता है, और कुछ नहीं।',
      'और आप अपने विशेषज्ञों की हर क्रिया देखते हैं। यदि कोई क्रिया आपके सिस्टम को खतरे में डालती है, तो आपका व्यक्तिगत AI सहायक तुरंत आपको चेतावनी देता है और आपके आदेश पर, जिस क्षण आप इसे खतरनाक या अनधिकृत समझें, उसे रोक देता है।',
      'पहुंच को पांच कारकों तक सुरक्षित किया जा सकता है: पासवर्ड, ईमेल, Telegram, एक ऑथेंटिकेटर ऐप और बायोमेट्रिक्स। कितने सक्षम करने हैं, यह पूरी तरह आप पर निर्भर है।',
    ],
  },
  tr: {
    h: 'Sizin kontrol merkeziniz',
    paras: [
      "Cloud'un çalıştırılması o kadar basittir ki, \"düğmeler için\" ayrı bir kişiye ihtiyacınız yoktur. Arayüz sezgiseldir: açtığınız anda her şeyin nerede olduğunu hemen görürsünüz.",
      'Kendi ekranınızı siz oluşturursunuz. Hazır widget setinden yalnızca gerçekten ihtiyacınız olanları alır ve görevlerinize göre şekillenen bir çalışma alanına yerleştirirsiniz. İstediğiniz an yeni bir widget ekleyebilir veya herhangi birini değiştirebilirsiniz — arayüz sizinle birlikte büyür.',
      'Ana arayüz şirket sahibine veya yöneticisine aittir ve kime erişim verileceğine yalnızca o karar verir. Bir uzmanı dahil etmek için onu şirket veritabanınıza eklemeniz yeterlidir: sistem, uygun gördüğünüz erişim düzeyiyle onun arayüzünü otomatik olarak oluşturur.',
      'Muhasebeciniz bir çalışma alanı görür, sistem yöneticiniz başka birini, güvenlik sorumlunuz bir başkasını — herkes tam olarak ihtiyacı olan araçları alır, fazlasını değil.',
      "Ve siz uzmanlarınızın her eylemini görürsünüz. Bir eylem sisteminizi tehdit ediyorsa, kişisel AI asistanınız sizi anında uyarır ve komutunuz üzerine, bunu tehlikeli veya yetkisiz bulduğunuz anda işlemi engeller.",
      'Erişim beş faktöre kadar korunabilir: parola, e-posta, Telegram, bir kimlik doğrulama uygulaması ve biyometri. Kaçını etkinleştireceğiniz tamamen size bağlıdır.',
    ],
  },
  ar: {
    h: 'مركز التحكم الخاص بكم',
    paras: [
      'إدارة Cloud بسيطة للغاية لدرجة أنكم لا تحتاجون إلى شخص مخصص "للأزرار". الواجهة بديهية: تفتحونها وترون على الفور مكان كل شيء.',
      'أنتم من يبني شاشتكم الخاصة. من مجموعة من الأدوات الجاهزة، تختارون فقط ما تحتاجونه فعلاً وترتبونها في مساحة عمل مصممة حسب مهامكم. يمكنكم في أي لحظة إضافة أداة جديدة أو استبدال أي منها — تنمو الواجهة معكم.',
      'تخص الواجهة الرئيسية المالك أو مدير الشركة، وهو وحده من يقرر من يُسمح له بالدخول. لإضافة أخصائي، يكفي إضافته إلى قاعدة بيانات شركتكم: يقوم النظام تلقائيًا بإنشاء واجهته، بمستوى الوصول الذي ترونه مناسبًا.',
      'محاسبكم يرى مساحة عمل، مسؤول أنظمتكم يرى أخرى، مسؤول الأمن لديكم يرى ثالثة — كل شخص يحصل بالضبط على الأدوات التي يحتاجها، ولا شيء أكثر.',
      'وترون كل إجراء يقوم به أخصائيوكم. إذا كان إجراء ما يهدد نظامكم، يحذركم مساعد الذكاء الاصطناعي الشخصي فورًا، وبناءً على أمركم، يحظره في اللحظة التي تعتبرونه فيها خطيرًا أو غير مصرح به.',
      'يمكن حماية الوصول بما يصل إلى خمسة عوامل: كلمة المرور، البريد الإلكتروني، Telegram، تطبيق مصادقة، والقياسات الحيوية. عدد ما تفعّلونه منها يعود بالكامل إليكم.',
    ],
  },
  el: {
    h: 'Το κέντρο ελέγχου σας',
    paras: [
      'Η διαχείριση του Cloud είναι τόσο απλή που δεν χρειάζεστε ειδικό άτομο "για τα κουμπιά". Η διεπαφή είναι διαισθητική: την ανοίγετε και βλέπετε αμέσως πού βρίσκεται το καθετί.',
      'Χτίζετε τη δική σας οθόνη. Από ένα σύνολο έτοιμων widgets, παίρνετε μόνο όσα πραγματικά χρειάζεστε και τα οργανώνετε σε έναν χώρο εργασίας προσαρμοσμένο στις εργασίες σας. Ανά πάσα στιγμή μπορείτε να προσθέσετε νέο widget ή να αντικαταστήσετε κάποιο — η διεπαφή μεγαλώνει μαζί σας.',
      'Η κύρια διεπαφή ανήκει στον ιδιοκτήτη ή στον διευθυντή της εταιρείας, και μόνο αυτός αποφασίζει ποιος έχει πρόσβαση. Για να εντάξετε έναν ειδικό, απλώς τον προσθέτετε στη βάση δεδομένων της εταιρείας σας: το σύστημα δημιουργεί αυτόματα τη διεπαφή του, με το επίπεδο πρόσβασης που εσείς κρίνετε κατάλληλο.',
      'Ο λογιστής σας βλέπει έναν χώρο εργασίας, ο διαχειριστής συστημάτων σας άλλον, ο υπεύθυνος ασφαλείας σας έναν τρίτο — ο καθένας λαμβάνει ακριβώς τα εργαλεία που χρειάζεται, τίποτα παραπάνω.',
      'Και εσείς βλέπετε κάθε ενέργεια των ειδικών σας. Αν μια ενέργεια απειλεί το σύστημά σας, ο προσωπικός σας βοηθός AI σάς προειδοποιεί αμέσως και, με εντολή σας, την μπλοκάρει τη στιγμή που την κρίνετε επικίνδυνη ή μη εξουσιοδοτημένη.',
      'Η πρόσβαση μπορεί να προστατευτεί με έως πέντε παράγοντες: κωδικό πρόσβασης, email, Telegram, εφαρμογή ελέγχου ταυτότητας και βιομετρικά στοιχεία. Πόσους θα ενεργοποιήσετε εξαρτάται αποκλειστικά από εσάς.',
    ],
  },
};

const BLOCK5: Record<string, Block4> = {
  en: {
    h: 'Your AI assistant',
    paras: [
      'In your UI there is always an assistant who can answer any of your questions and help you make sense of anything you don’t understand — but most importantly, this assistant is the bridge between you and any officer or specialist in your system.',
      'You ask it any question about the state of your servers, and it answers only after first consulting the AI specialists that look after your servers and analysing the current operational logs — and only then does it tell you, as fully and truthfully as possible, what is going on.',
      'It needs no prompts and no skills downloaded from the web to work the way you need — we have already done that. And by watching how you work and what decisions you make, it adapts to you in a short time and becomes your deputy, making the kind of decisions you would have made yourself.',
      'But that is not all it can do.',
      'Need to upgrade or fix the software on your servers, add new features, and so on? You simply tell it — and after fully questioning you on how you see it, it prepares a technical specification, agrees it with you and hands it to AI Studio, where the most powerful models write the complete code and, once agreed with you, integrate it into your system, run all the tests and, with your approval, put it into production.',
      'All that is left for you is to watch your system scale in the shortest possible time.',
    ],
  },
  ru: {
    h: 'Ваш AI-помощник',
    paras: [
      'В вашем UI всегда есть помощник, который сможет ответить вам на любой вопрос и помочь разобраться с тем, что вы не понимаете, но главное — этот помощник мост между вами и любым офицером или специалистом в вашей системе.',
      'Вы задаёте ему любой вопрос о состоянии ваших серверов, и он отвечает вам, предварительно опросив это у тех AI-специалистов, которые занимаются вашими серверами, и проанализировав текущие логи работы, а только потом отвечает вам максимально полно и правдиво, что происходит.',
      'Ему не нужно писать промпты, искать в сети скилы, чтобы он работал так, как вам нужно, — мы это уже сделали, а он, смотря, как вы работаете и какие решения принимаете, подстроится под вас за короткое время и станет вашим замом, который будет принимать такие решения, которые приняли бы вы.',
      'Но это ещё не всё, что он может.',
      'Вам нужно модернизировать или исправить программное обеспечение ваших серверов, добавить новые функции и т.д. — вы просто говорите ему, а он, полностью опросив вас, как вы это видите, готовит техническое задание, согласовывает с вами и отдаёт в AI Studio, где мощнейшие модели пишут полный код и, после согласования с вами, интегрируют его в вашу систему, проводят все тесты и, после вашего одобрения, запускают в эксплуатацию.',
      'Вам нужно будет просто смотреть, как ваша система масштабируется в кратчайшие сроки.',
    ],
  },
  zh: {
    h: '您的專屬 AI 智慧助理',
    paras: [
      '在您的使用者介面（UI）中，始終有一位 AI 助理隨時候命。他不僅能解答您的任何疑問、幫您理清所有不解之處，更重要的是 —— 他是連接您與系統中任何高階安全官或技術專家的「核心橋樑」。',
      '當您詢問任何關於伺服器狀態的問題時，他不會盲目作答，而是會先向負責您伺服器運作的其他專職 AI 核心進行全面諮詢，並深度分析當前的系統運行日誌（Logs）。在彙整所有資訊後，他才會為您提供一份最完整、最真實的現狀報告。',
      '您完全不需要學習如何撰寫複雜的提示詞（Prompts），也無需在網路上搜尋任何擴充技能包。這一切底層優化我們早已為您完成。更強大的是，他會透過觀察您的工作習慣與決策風格，在極短時間內完成自我調適，成為您的「AI 數位副手」，能夠精準做出完全符合您心意的決策。',
      '但這還遠非他的能力極限。',
      '當您需要升級或修復伺服器的軟體架構、新增功能時，只需直接告訴他。在全面了解您的願景與構想後，他會自動為您撰寫一份標準的技術規格書（Technical Specification / 需求規格書），並在與您確認無誤後，將其提交至 AI Studio。在那裡，最頂尖的 AI 模型將編寫出完整的程式碼。隨後，在經過您的二度確認後，系統會將程式碼整合至您的架構中，執行全方位的自動化測試，並在獲得您的最終授權後正式上線投入運行。',
      '您只需要輕鬆見證您的系統在極短時間內完成顛覆性的高效擴展。',
    ],
  },
  fr: {
    h: 'Votre assistant IA',
    paras: [
      "Dans votre interface, il y a toujours un assistant capable de répondre à toutes vos questions et de vous aider à comprendre ce que vous ne saisissez pas — mais surtout, cet assistant est le pont entre vous et tout officier ou spécialiste de votre système.",
      "Vous lui posez n'importe quelle question sur l'état de vos serveurs, et il ne répond qu'après avoir d'abord consulté les spécialistes IA qui s'occupent de vos serveurs et analysé les journaux opérationnels actuels — et c'est seulement ensuite qu'il vous dit, aussi complètement et sincèrement que possible, ce qui se passe.",
      "Il n'a besoin ni de prompts ni de compétences téléchargées sur le web pour fonctionner comme vous le souhaitez — nous avons déjà fait ce travail. Et en observant comment vous travaillez et quelles décisions vous prenez, il s'adapte à vous en peu de temps et devient votre adjoint, prenant le genre de décisions que vous auriez prises vous-même.",
      "Mais ce n'est pas tout ce qu'il peut faire.",
      "Besoin de mettre à niveau ou de corriger le logiciel de vos serveurs, d'ajouter de nouvelles fonctionnalités, etc. ? Vous le lui dites simplement — et après vous avoir entièrement interrogé sur votre vision, il prépare un cahier des charges, le fait valider par vous et le transmet à AI Studio, où les modèles les plus puissants écrivent le code complet et, une fois validé avec vous, l'intègrent dans votre système, exécutent tous les tests et, avec votre approbation, le mettent en production.",
      "Il ne vous reste plus qu'à regarder votre système évoluer dans les plus brefs délais.",
    ],
  },
  de: {
    h: 'Ihr KI-Assistent',
    paras: [
      'In Ihrer Oberfläche gibt es immer einen Assistenten, der jede Ihrer Fragen beantworten und Ihnen helfen kann, alles zu verstehen, was Ihnen unklar ist — aber vor allem ist dieser Assistent die Brücke zwischen Ihnen und jedem Officer oder Spezialisten in Ihrem System.',
      'Sie stellen ihm jede Frage zum Zustand Ihrer Server, und er antwortet erst, nachdem er zunächst die KI-Spezialisten konsultiert hat, die sich um Ihre Server kümmern, und die aktuellen Betriebsprotokolle analysiert hat — und erst dann sagt er Ihnen so vollständig und wahrheitsgemäß wie möglich, was los ist.',
      'Er braucht weder Prompts noch aus dem Web heruntergeladene Fähigkeiten, um so zu arbeiten, wie Sie es brauchen — das haben wir bereits erledigt. Und indem er beobachtet, wie Sie arbeiten und welche Entscheidungen Sie treffen, passt er sich in kurzer Zeit an Sie an und wird zu Ihrem Stellvertreter, der die Art von Entscheidungen trifft, die Sie selbst getroffen hätten.',
      'Aber das ist noch nicht alles, was er kann.',
      'Müssen Sie die Software auf Ihren Servern aktualisieren oder reparieren, neue Funktionen hinzufügen und so weiter? Sie sagen es ihm einfach — und nachdem er Sie vollständig dazu befragt hat, wie Sie sich das vorstellen, erstellt er ein technisches Lastenheft, stimmt es mit Ihnen ab und übergibt es an AI Studio, wo die leistungsfähigsten Modelle den vollständigen Code schreiben und ihn nach Abstimmung mit Ihnen in Ihr System integrieren, alle Tests durchführen und ihn mit Ihrer Zustimmung in Produktion bringen.',
      'Ihnen bleibt nur noch, zuzusehen, wie Ihr System in kürzester Zeit skaliert.',
    ],
  },
  es: {
    h: 'Su asistente de IA',
    paras: [
      'En su interfaz siempre hay un asistente que puede responder cualquiera de sus preguntas y ayudarle a entender lo que no comprende, pero lo más importante: este asistente es el puente entre usted y cualquier oficial o especialista de su sistema.',
      'Le hace cualquier pregunta sobre el estado de sus servidores, y él responde solo después de consultar primero a los especialistas de IA que cuidan de sus servidores y analizar los registros operativos actuales, y solo entonces le dice, de la forma más completa y veraz posible, qué está ocurriendo.',
      'No necesita prompts ni habilidades descargadas de internet para funcionar como usted necesita: ya lo hemos hecho nosotros. Y al observar cómo trabaja y qué decisiones toma, se adapta a usted en poco tiempo y se convierte en su suplente, tomando el tipo de decisiones que usted mismo habría tomado.',
      'Pero eso no es todo lo que puede hacer.',
      '¿Necesita actualizar o corregir el software de sus servidores, añadir nuevas funciones, etc.? Simplemente se lo dice, y tras preguntarle a fondo cómo lo ve, prepara una especificación técnica, la acuerda con usted y la entrega a AI Studio, donde los modelos más potentes escriben el código completo y, una vez acordado con usted, lo integran en su sistema, ejecutan todas las pruebas y, con su aprobación, lo ponen en producción.',
      'Solo le queda ver cómo su sistema escala en el menor tiempo posible.',
    ],
  },
  it: {
    h: 'Il vostro assistente IA',
    paras: [
      "Nella vostra interfaccia c'è sempre un assistente in grado di rispondere a qualsiasi domanda e di aiutarvi a capire ciò che non comprendete — ma soprattutto, questo assistente è il ponte tra voi e qualsiasi officer o specialista del vostro sistema.",
      "Gli ponete qualsiasi domanda sullo stato dei vostri server, e risponde solo dopo aver prima consultato gli specialisti IA che si occupano dei vostri server e analizzato i log operativi correnti — e solo allora vi dice, nel modo più completo e veritiero possibile, cosa sta succedendo.",
      "Non ha bisogno di prompt né di competenze scaricate dal web per funzionare come volete voi: lo abbiamo già fatto noi. E osservando come lavorate e quali decisioni prendete, si adatta a voi in breve tempo e diventa il vostro vice, prendendo il tipo di decisioni che avreste preso voi stessi.",
      "Ma non è tutto ciò che sa fare.",
      "Dovete aggiornare o correggere il software dei vostri server, aggiungere nuove funzionalità e così via? Basta dirglielo — e dopo avervi interrogato a fondo su come lo vedete, prepara una specifica tecnica, la concorda con voi e la consegna ad AI Studio, dove i modelli più potenti scrivono il codice completo e, una volta concordato con voi, lo integrano nel vostro sistema, eseguono tutti i test e, con la vostra approvazione, lo mettono in produzione.",
      "Non vi resta che guardare il vostro sistema scalare nel minor tempo possibile.",
    ],
  },
  ja: {
    h: 'あなたのAIアシスタント',
    paras: [
      'あなたのUIには常に、あらゆる質問に答え、理解できないことを整理する手助けをするアシスタントがいます——しかし何より重要なのは、このアシスタントがあなたとシステム内のあらゆるオフィサーや専門家をつなぐ橋渡し役だということです。',
      'サーバーの状態についてどんな質問をしても、彼はまずサーバーを担当するAI専門家に確認し、現在の運用ログを分析した上で初めて回答します——そうして初めて、何が起きているのかをできる限り完全かつ正直に伝えます。',
      'プロンプトもウェブからダウンロードしたスキルも不要で、あなたが望む形で機能します——それはすでに私たちが済ませてあります。そして、あなたの働き方や下す判断を観察することで、短期間であなたに適応し、あなた自身が下すであろう判断を行う代理となります。',
      'しかし、それだけではありません。',
      'サーバーのソフトウェアをアップグレードまたは修正したい、新機能を追加したいなど？ ただ伝えるだけで構いません——あなたの考えを完全にヒアリングした上で技術仕様書を作成し、あなたと合意した上でAI Studioに引き渡します。そこでは最も強力なモデルが完全なコードを記述し、あなたの合意の上でシステムに統合し、すべてのテストを実行し、あなたの承認を得て本番環境に投入します。',
      'あなたはただ、システムが最短時間でスケールしていく様子を見守るだけです。',
    ],
  },
  uk: {
    h: 'Ваш AI-помічник',
    paras: [
      'У вашому UI завжди є помічник, який зможе відповісти на будь-яке ваше питання і допомогти розібратися з тим, що ви не розумієте, але головне — цей помічник є мостом між вами і будь-яким офіцером чи фахівцем у вашій системі.',
      'Ви ставите йому будь-яке питання про стан ваших серверів, і він відповідає, попередньо опитавши AI-фахівців, які займаються вашими серверами, та проаналізувавши поточні логи роботи, і лише потім відповідає вам максимально повно і правдиво, що відбувається.',
      'Йому не потрібно писати промпти чи шукати в мережі скіли, щоб він працював так, як вам потрібно, — ми це вже зробили, а він, спостерігаючи, як ви працюєте і які рішення приймаєте, підлаштується під вас за короткий час і стане вашим замом, який прийматиме такі рішення, які прийняли б ви.',
      'Але це ще не все, що він вміє.',
      'Вам потрібно модернізувати чи виправити програмне забезпечення ваших серверів, додати нові функції тощо — ви просто говорите йому, а він, повністю опитавши вас, як ви це бачите, готує технічне завдання, узгоджує з вами і передає в AI Studio, де найпотужніші моделі пишуть повний код і, після узгодження з вами, інтегрують його у вашу систему, проводять усі тести і, після вашого схвалення, запускають в експлуатацію.',
      'Вам потрібно буде просто дивитись, як ваша система масштабується у найкоротші терміни.',
    ],
  },
  sr: {
    h: 'Vaš AI asistent',
    paras: [
      'U vašem UI-ju uvek postoji asistent koji može da odgovori na bilo koje vaše pitanje i pomogne vam da razumete ono što vam nije jasno — ali najvažnije, ovaj asistent je most između vas i bilo kog oficira ili stručnjaka u vašem sistemu.',
      'Postavljate mu bilo koje pitanje o stanju vaših servera, a on odgovara tek nakon što se prvo konsultuje sa AI stručnjacima koji se brinu o vašim serverima i analizira trenutne operativne logove — i tek tada vam govori, što potpunije i istinitije, šta se dešava.',
      'Ne treba mu ni prompt ni veštine preuzete sa interneta da bi radio onako kako vam je potrebno — to smo već uradili mi. A posmatrajući kako radite i koje odluke donosite, prilagođava se vama za kratko vreme i postaje vaš zamenik, donoseći onakve odluke kakve biste doneli i vi sami.',
      'Ali to nije sve što ume.',
      'Treba li vam nadogradnja ili popravka softvera na vašim serverima, dodavanje novih funkcija i tako dalje? Jednostavno mu kažete — a on, nakon što vas detaljno ispita kako to zamišljate, priprema tehničku specifikaciju, usaglašava je sa vama i predaje AI Studiju, gde najmoćniji modeli pišu kompletan kod i, nakon usaglašavanja sa vama, integrišu ga u vaš sistem, sprovode sve testove i, uz vaše odobrenje, puštaju ga u produkciju.',
      'Ostaje vam samo da posmatrate kako se vaš sistem skalira u najkraćem mogućem roku.',
    ],
  },
  pt: {
    h: 'Seu assistente de IA',
    paras: [
      'Em sua interface há sempre um assistente que pode responder a qualquer pergunta e ajudá-lo a entender qualquer coisa que você não compreenda — mas o mais importante, esse assistente é a ponte entre você e qualquer oficial ou especialista do seu sistema.',
      'Você faz qualquer pergunta sobre o estado de seus servidores, e ele responde somente depois de consultar primeiro os especialistas de IA que cuidam de seus servidores e analisar os registros operacionais atuais — e só então lhe diz, da forma mais completa e verdadeira possível, o que está acontecendo.',
      'Ele não precisa de prompts nem de habilidades baixadas da web para funcionar como você precisa — já fizemos isso. E observando como você trabalha e quais decisões toma, ele se adapta a você em pouco tempo e se torna seu adjunto, tomando o tipo de decisão que você mesmo teria tomado.',
      'Mas isso não é tudo o que ele pode fazer.',
      'Precisa atualizar ou corrigir o software de seus servidores, adicionar novos recursos etc.? Basta dizer a ele — e depois de questioná-lo totalmente sobre como você vê isso, ele prepara uma especificação técnica, a acorda com você e a entrega ao AI Studio, onde os modelos mais poderosos escrevem o código completo e, uma vez acordado com você, o integram ao seu sistema, executam todos os testes e, com sua aprovação, colocam-no em produção.',
      'Tudo o que resta é você observar seu sistema escalar no menor tempo possível.',
    ],
  },
  hi: {
    h: 'आपका AI सहायक',
    paras: [
      'आपके UI में हमेशा एक सहायक मौजूद रहता है जो आपके किसी भी प्रश्न का उत्तर दे सकता है और जो कुछ आप नहीं समझते उसे समझने में मदद कर सकता है — लेकिन सबसे महत्वपूर्ण बात यह है कि यह सहायक आपके और आपके सिस्टम में किसी भी अधिकारी या विशेषज्ञ के बीच पुल है।',
      'आप उससे अपने सर्वरों की स्थिति के बारे में कोई भी प्रश्न पूछते हैं, और वह पहले आपके सर्वरों की देखभाल करने वाले AI विशेषज्ञों से परामर्श करने और वर्तमान परिचालन लॉग का विश्लेषण करने के बाद ही उत्तर देता है — और तभी वह आपको यथासंभव पूर्ण और सत्य रूप से बताता है कि क्या हो रहा है।',
      'उसे आपकी आवश्यकतानुसार काम करने के लिए न किसी प्रॉम्प्ट की जरूरत है, न वेब से डाउनलोड की गई किसी स्किल की — यह हम पहले ही कर चुके हैं। और आप कैसे काम करते हैं और क्या निर्णय लेते हैं, यह देखकर वह थोड़े समय में आपके अनुरूप ढल जाता है और आपका डिप्टी बन जाता है, जो वैसे ही निर्णय लेता है जैसे आप स्वयं लेते।',
      'लेकिन यह सब कुछ नहीं जो वह कर सकता है।',
      'क्या आपको अपने सर्वरों के सॉफ़्टवेयर को अपग्रेड या ठीक करना है, नई सुविधाएं जोड़नी हैं, इत्यादि? आप बस उसे बताते हैं — और आप इसे कैसे देखते हैं इस पर पूरी तरह पूछताछ करने के बाद, वह एक तकनीकी विनिर्देश तैयार करता है, आपसे इस पर सहमति लेता है और इसे AI Studio को सौंप देता है, जहां सबसे शक्तिशाली मॉडल पूरा कोड लिखते हैं और, आपसे सहमति के बाद, इसे आपके सिस्टम में एकीकृत करते हैं, सभी परीक्षण चलाते हैं, और आपकी स्वीकृति के साथ इसे उत्पादन में डालते हैं।',
      'आपको बस यह देखना है कि आपका सिस्टम कम से कम समय में कैसे स्केल होता है।',
    ],
  },
  tr: {
    h: 'Sizin AI asistanınız',
    paras: [
      "Arayüzünüzde her zaman, herhangi bir sorunuzu yanıtlayabilen ve anlamadığınız her şeyi çözmenize yardımcı olabilen bir asistan bulunur — ama en önemlisi, bu asistan sizinle sisteminizdeki herhangi bir görevli veya uzman arasındaki köprüdür.",
      "Sunucularınızın durumu hakkında ona herhangi bir soru sorarsınız ve o, önce sunucularınızla ilgilenen AI uzmanlarına danışıp güncel operasyonel kayıtları analiz ettikten sonra yanıt verir — ancak o zaman size neler olduğunu mümkün olduğunca eksiksiz ve doğru şekilde anlatır.",
      "İhtiyacınız olan şekilde çalışması için ne prompta ne de internetten indirilmiş becerilere ihtiyacı vardır — bunu zaten biz halletik. Nasıl çalıştığınızı ve hangi kararları aldığınızı gözlemleyerek kısa sürede size uyum sağlar ve sizin verebileceğiniz türden kararları veren yardımcınız haline gelir.",
      "Ama yapabildiği tek şey bu değil.",
      "Sunucularınızdaki yazılımı yükseltmeniz veya düzeltmeniz, yeni özellikler eklemeniz mi gerekiyor? Sadece ona söylersiniz — bunu nasıl gördüğünüzü tam olarak sorguladıktan sonra bir teknik şartname hazırlar, sizinle üzerinde anlaşır ve en güçlü modellerin tam kodu yazdığı AI Studio'ya teslim eder; sizinle anlaşıldıktan sonra bunu sisteminize entegre eder, tüm testleri çalıştırır ve onayınızla üretime alır.",
      "Size sadece sisteminizin mümkün olan en kısa sürede nasıl ölçeklendiğini izlemek kalır.",
    ],
  },
  ar: {
    h: 'مساعدك بالذكاء الاصطناعي',
    paras: [
      'في واجهتكم، يوجد دائمًا مساعد يمكنه الإجابة عن أي سؤال ومساعدتكم على فهم أي شيء لا تفهمونه — لكن الأهم من ذلك، أن هذا المساعد هو الجسر بينكم وبين أي ضابط أو أخصائي في نظامكم.',
      'تطرحون عليه أي سؤال حول حالة خوادمكم، فيجيب فقط بعد استشارة أخصائيي الذكاء الاصطناعي المسؤولين عن خوادمكم أولاً وتحليل سجلات التشغيل الحالية — وعندها فقط يخبركم، بأقصى قدر ممكن من الاكتمال والصدق، بما يحدث.',
      'لا يحتاج إلى مطالبات ولا إلى مهارات محمّلة من الويب ليعمل بالطريقة التي تحتاجونها — لقد قمنا بذلك بالفعل. ومن خلال مراقبة كيفية عملكم والقرارات التي تتخذونها، يتكيّف معكم في وقت قصير ويصبح نائبكم، متخذًا نوع القرارات التي كنتم لتتخذوها بأنفسكم.',
      'لكن هذا ليس كل ما يمكنه فعله.',
      'هل تحتاجون إلى ترقية أو إصلاح البرمجيات على خوادمكم، إضافة ميزات جديدة، وما إلى ذلك؟ ببساطة تخبرونه — وبعد استجوابكم بالكامل عن رؤيتكم، يُعدّ مواصفات تقنية، يتفق عليها معكم، ويسلّمها إلى AI Studio، حيث تكتب أقوى النماذج الكود الكامل، وبعد الاتفاق معكم، تدمجه في نظامكم، وتُجري جميع الاختبارات، وبموافقتكم، تضعه في الإنتاج.',
      'كل ما عليكم فعله هو مشاهدة نظامكم يتوسع في أقصر وقت ممكن.',
    ],
  },
  el: {
    h: 'Ο βοηθός AI σας',
    paras: [
      'Στο περιβάλλον εργασίας σας υπάρχει πάντα ένας βοηθός που μπορεί να απαντήσει σε οποιαδήποτε ερώτησή σας και να σας βοηθήσει να κατανοήσετε οτιδήποτε δεν καταλαβαίνετε — αλλά το πιο σημαντικό, αυτός ο βοηθός είναι η γέφυρα ανάμεσα σε εσάς και οποιονδήποτε αξιωματικό ή ειδικό στο σύστημά σας.',
      'Του κάνετε οποιαδήποτε ερώτηση σχετικά με την κατάσταση των διακομιστών σας, και απαντά μόνο αφού συμβουλευτεί πρώτα τους ειδικούς AI που φροντίζουν τους διακομιστές σας και αναλύσει τα τρέχοντα αρχεία καταγραφής λειτουργίας — και μόνο τότε σας λέει, όσο πιο πλήρως και ειλικρινά γίνεται, τι συμβαίνει.',
      'Δεν χρειάζεται prompts ούτε δεξιότητες που κατεβάζονται από το διαδίκτυο για να λειτουργεί όπως χρειάζεστε — το έχουμε ήδη κάνει εμείς. Και παρατηρώντας πώς εργάζεστε και ποιες αποφάσεις παίρνετε, προσαρμόζεται σε εσάς σε σύντομο χρονικό διάστημα και γίνεται ο αναπληρωτής σας, λαμβάνοντας τις αποφάσεις που θα παίρνατε εσείς οι ίδιοι.',
      'Αλλά αυτό δεν είναι το μόνο που μπορεί να κάνει.',
      'Χρειάζεστε να αναβαθμίσετε ή να διορθώσετε το λογισμικό στους διακομιστές σας, να προσθέσετε νέες λειτουργίες κ.λπ.; Απλώς του το λέτε — και αφού σας ρωτήσει πλήρως πώς το βλέπετε, ετοιμάζει τεχνικές προδιαγραφές, τις συμφωνεί μαζί σας και τις παραδίδει στο AI Studio, όπου τα πιο ισχυρά μοντέλα γράφουν τον πλήρη κώδικα και, αφού συμφωνηθεί μαζί σας, τον ενσωματώνουν στο σύστημά σας, εκτελούν όλες τις δοκιμές και, με την έγκρισή σας, τον θέτουν σε παραγωγή.',
      'Το μόνο που σας μένει είναι να παρακολουθείτε το σύστημά σας να κλιμακώνεται στον συντομότερο δυνατό χρόνο.',
    ],
  },
};

const BLOCK6: Record<string, Block6> = {
  en: {
    h: 'How to connect — and your first steps',
    paras1: [
      'We could keep telling you more and more about the platform — but you probably already have one question: how do you connect Guardian Cloud, and what will it do from the very first steps?',
      'Connecting is very easy. Go to the platform using the “Connect Cloud” button below and sign up. You can also connect through a referral link — you can get one from an authorized partner of ours; the list of partners is on the Referral page.',
      'Because the platform works on a B2B model, only a company officially registered in its country can do this.',
      'After signing up, you fill in a form about your company and go through verification; once you pass it, you get full access to your interface.',
      'So you can explore the platform at ease, we give you a 10-day free trial. In it you’ll try both kinds of system administration: one server with full AI automation, and another with AI monitoring. After the trial you choose the plan that suits you and continue as a full client.',
      'And of course you want to know exactly how your servers connect and what data we receive from them.',
    ],
    subH: 'How your servers connect — and what we see',
    paras2: [
      'A single lightweight agent is installed on each server. It registers with its own personal token, talks to the platform only over encrypted channels, and runs in dry-run mode by default: it reads and proposes, but changes nothing without your decision.',
      'To administer and protect the server, the agent collects operational telemetry: the state and version of the OS, running services, disk, memory and network load, installed packages, key configurations, log metadata and security signals. For the initial audit this is a set of 18 checks — the AI officer builds its report from them.',
      'We receive exactly what is needed to maintain and protect — and nothing beyond that. All of the platform’s AI models run on our GPUs in your region, so your telemetry stays inside the contour and is not passed to third parties. Every action the agent takes is visible to you in the service history, and the final decision always stays with a human.',
      'If you wish, the agent can run a full audit of your code for bugs and vulnerabilities and give you the results. Once you have reviewed them, you can tell the agent to fix them. This protects you from all sorts of trouble down the line as you run your servers.',
    ],
    cta: 'Connect Cloud',
  },
  ru: {
    h: 'Как подключить и первые шаги',
    paras1: [
      'Мы могли бы ещё долго рассказывать о платформе, но у вас наверняка уже возник вопрос: как подключить Guardian Cloud — и что она будет делать с первых шагов.',
      'Подключиться очень легко. Перейдите на платформу по кнопке «Подключить Cloud» внизу этого блока и пройдите регистрацию. Подключиться можно и по реферальной ссылке — её можно получить у нашего авторизованного партнёра; список партнёров есть на странице Referral.',
      'В связи с тем, что платформа работает по модели B2B, это может сделать только официально зарегистрированная в своей стране компания.',
      'После регистрации вы заполняете форму о компании и проходите проверку, а после прохождения её вы получите полный доступ к своему интерфейсу.',
      'Чтобы вы спокойно познакомились с возможностями платформы, мы даём 10-дневный бесплатный период. В нём вы попробуете оба типа системного администрирования: один сервер — с полной AI-автоматизацией, второй — с AI-мониторингом. После пробного периода вы выбираете подходящий тариф и продолжаете работу как полноправный клиент.',
      'И, конечно, вас интересует, как именно подключаются ваши серверы и какие данные мы от них получаем.',
    ],
    subH: 'Как подключаются ваши серверы — и что мы видим',
    paras2: [
      'На каждый сервер устанавливается один лёгкий агент. Он регистрируется по персональному токену, общается с платформой только по зашифрованным каналам и по умолчанию работает в режиме «сухого прогона»: читает и предлагает, но ничего не меняет без вашего решения.',
      'Чтобы администрировать и защищать сервер, агент собирает рабочую телеметрию: состояние и версию ОС, запущенные службы, загрузку диска, памяти и сети, установленные пакеты, ключевые конфигурации, метаданные логов и сигналы безопасности. Для первичного аудита это набор из 18 проверок — на их основе AI-офицер строит отчёт.',
      'Мы получаем ровно то, что нужно для обслуживания и защиты, — и ничего сверх этого. Все AI-модели платформы работают на наших GPU в вашем регионе, поэтому ваша телеметрия остаётся внутри контура и не передаётся третьим сторонам. Каждое действие агента видно вам в Истории обслуживания, а финальное решение всегда остаётся за человеком.',
      'По вашему желанию агент может провести полный аудит кода на ошибки и уязвимости и дать вам его результаты. Ознакомившись с ними, вы можете дать агенту команду исправить их. Это обезопасит вас от различных неприятностей в дальнейшей эксплуатации ваших серверов.',
    ],
    cta: 'Подключить Cloud',
  },
  zh: {
    h: '如何部署與引導步驟',
    paras1: [
      '關於平台的強大功能，我們還可以為您介紹更多，但此時您心中一定伴隨着一個核心疑問：如何接軌 Guardian Cloud？在部署初期它又將如何運作？',
      '輕鬆快速接軌：只需點擊本區塊下方的「連接 Cloud」按鈕進入平台並完成註冊即可。您也可以透過推薦連結（Referral Link）進行註冊 —— 該連結可向我們的授權合作夥伴索取，完整夥伴名單請參閱「Referral」專頁。',
      '企業專屬（B2B 模式）：鑑於本平台完全採用 B2B 商務模式運作，僅限在其所在國家／地區正式註冊登記的合法企業申請加入。',
      '審核與開通：完成初步註冊後，您需要填寫一份企業資料表並通過基本資格審查。審查通過後，您將立即獲得控制中心介面的完整操作權限。',
      '10 天免費體驗：為了讓您毫無顧慮地熟悉平台功能，我們提供 10 天的免費試用期。在此期間，您可以同時體驗兩種維運模式：一台伺服器啟用「全自動 AI 維運」，另一台伺服器啟用「AI 智慧監控」。試用期結束後，您只需選擇最適合的方案，即可無縫延續正式客戶的完整服務。',
      '當然，您一定也非常關心：您的伺服器究竟是如何與平台串聯？我們又會從中獲取哪些數據？',
    ],
    subH: '伺服器如何串聯與資料可視化',
    paras2: [
      '輕量化代理程式（Agent）：每台伺服器僅需安裝一個輕量化 Agent。它透過專屬憑證（Token）進行註冊，完全經由加密通道與平台通訊。預設情況下，Agent 將以「模擬運行」（Dry-run）模式運作：僅進行讀取並提供優化建議，未經您的授權，絕不擅自更改任何系統設定。',
      '安全收集運作遙測資料（Telemetry）：為了提供維運與安全防護，Agent 僅會收集必要的運作遙測數據，包括：作業系統狀態與版本、執行中的服務（Services）、磁碟／記憶體／網路負載、已安裝的套件、關鍵組態設定、日誌中繼資料（Log Metadata）以及資安風險訊號。針對首次稽核，系統會執行 18 項核心指標檢查，並由 AI 安全官據此生成完整的分析報告。',
      '資料不落地，隱私絕不妥協：我們僅獲取維護與防護所需的必要數據，絕不越界。本平台的所有 AI 模型均在您所在區域的專屬 GPU 基礎設施上運行，確保您的遙測資料完全鎖定在本地安全邊界之內，絕不外流給任何第三方。Agent 的每一步操作都將透明地記錄在「維運歷史」中，最終決定權始終掌握在您手中。',
      '原始碼安全稽核：依據您的需求，Agent 還能對您的程式碼進行全方位的自動化漏洞與錯誤掃描。在您查閱稽核報告後，可直接向 Agent 下達修復指令。這將從根本上杜絕伺服器在後續運行中可能遭遇的各類潛在隱患。',
    ],
    cta: '連接 Cloud',
  },
  fr: {
    h: 'Comment se connecter — et vos premiers pas',
    paras1: [
      "Nous pourrions continuer à vous parler encore longtemps de la plateforme — mais vous vous posez sans doute déjà une question : comment connecter Guardian Cloud, et que fera-t-il dès les premiers pas ?",
      "Se connecter est très simple. Rendez-vous sur la plateforme via le bouton « Connecter Cloud » ci-dessous et inscrivez-vous. Vous pouvez aussi vous connecter via un lien de parrainage — vous pouvez en obtenir un auprès d'un de nos partenaires agréés ; la liste des partenaires figure sur la page Referral.",
      "La plateforme fonctionnant selon un modèle B2B, seule une entreprise officiellement enregistrée dans son pays peut le faire.",
      "Après l'inscription, vous remplissez un formulaire sur votre entreprise et passez une vérification ; une fois validée, vous obtenez un accès complet à votre interface.",
      "Pour que vous puissiez explorer la plateforme en toute tranquillité, nous vous offrons un essai gratuit de 10 jours. Vous y testerez les deux types d'administration système : un serveur avec automatisation IA complète, et un autre avec surveillance IA. Après l'essai, vous choisissez le plan qui vous convient et continuez en tant que client à part entière.",
      "Et bien sûr, vous voulez savoir exactement comment vos serveurs se connectent et quelles données nous en recevons.",
    ],
    subH: 'Comment vos serveurs se connectent — et ce que nous voyons',
    paras2: [
      "Un agent léger unique est installé sur chaque serveur. Il s'enregistre avec son propre jeton personnel, ne communique avec la plateforme que via des canaux chiffrés, et fonctionne par défaut en mode simulation : il lit et propose, mais ne change rien sans votre décision.",
      "Pour administrer et protéger le serveur, l'agent collecte des télémétries opérationnelles : l'état et la version du système d'exploitation, les services en cours, la charge disque, mémoire et réseau, les paquets installés, les configurations clés, les métadonnées de journaux et les signaux de sécurité. Pour l'audit initial, il s'agit d'un ensemble de 18 vérifications — l'officier IA construit son rapport à partir de celles-ci.",
      "Nous recevons exactement ce qui est nécessaire pour maintenir et protéger — et rien de plus. Tous les modèles IA de la plateforme tournent sur nos GPU dans votre région, de sorte que votre télémétrie reste dans le périmètre et n'est transmise à aucun tiers. Chaque action de l'agent est visible dans l'historique de service, et la décision finale reste toujours entre les mains d'un humain.",
      "Si vous le souhaitez, l'agent peut effectuer un audit complet de votre code à la recherche de bugs et de vulnérabilités et vous fournir les résultats. Une fois que vous les aurez examinés, vous pourrez demander à l'agent de les corriger. Cela vous protège de toutes sortes de problèmes ultérieurs dans l'exploitation de vos serveurs.",
    ],
    cta: 'Connecter Cloud',
  },
  de: {
    h: 'Wie Sie sich verbinden — und Ihre ersten Schritte',
    paras1: [
      'Wir könnten Ihnen noch viel mehr über die Plattform erzählen — aber wahrscheinlich haben Sie bereits eine Frage: Wie verbinden Sie Guardian Cloud, und was macht es von den ersten Schritten an?',
      'Die Verbindung ist sehr einfach. Gehen Sie über den Button „Cloud verbinden" unten zur Plattform und registrieren Sie sich. Sie können sich auch über einen Empfehlungslink verbinden — diesen erhalten Sie von einem unserer autorisierten Partner; die Partnerliste finden Sie auf der Referral-Seite.',
      'Da die Plattform nach einem B2B-Modell arbeitet, kann dies nur ein Unternehmen tun, das offiziell in seinem Land registriert ist.',
      'Nach der Registrierung füllen Sie ein Formular zu Ihrem Unternehmen aus und durchlaufen eine Verifizierung; nach deren Bestehen erhalten Sie vollen Zugriff auf Ihre Oberfläche.',
      'Damit Sie die Plattform in Ruhe erkunden können, geben wir Ihnen eine 10-tägige kostenlose Testphase. In dieser probieren Sie beide Arten der Systemadministration aus: einen Server mit vollständiger KI-Automatisierung und einen weiteren mit KI-Überwachung. Nach der Testphase wählen Sie den passenden Tarif und arbeiten als vollwertiger Kunde weiter.',
      'Und natürlich wollen Sie genau wissen, wie sich Ihre Server verbinden und welche Daten wir von ihnen erhalten.',
    ],
    subH: 'Wie sich Ihre Server verbinden — und was wir sehen',
    paras2: [
      'Auf jedem Server wird ein einziger leichtgewichtiger Agent installiert. Er registriert sich mit einem eigenen persönlichen Token, kommuniziert mit der Plattform nur über verschlüsselte Kanäle und läuft standardmäßig im Dry-Run-Modus: Er liest und schlägt vor, ändert aber nichts ohne Ihre Entscheidung.',
      'Um den Server zu administrieren und zu schützen, sammelt der Agent operative Telemetrie: Status und Version des Betriebssystems, laufende Dienste, Festplatten-, Speicher- und Netzwerklast, installierte Pakete, Schlüsselkonfigurationen, Log-Metadaten und Sicherheitssignale. Für das erste Audit ist dies ein Satz von 18 Prüfungen — der KI-Officer erstellt daraus seinen Bericht.',
      'Wir erhalten genau das, was zur Wartung und zum Schutz nötig ist — und nichts darüber hinaus. Alle KI-Modelle der Plattform laufen auf unseren GPUs in Ihrer Region, sodass Ihre Telemetrie innerhalb des Perimeters bleibt und nicht an Dritte weitergegeben wird. Jede Aktion des Agenten ist für Sie in der Service-Historie sichtbar, und die endgültige Entscheidung liegt immer beim Menschen.',
      'Auf Wunsch kann der Agent ein vollständiges Audit Ihres Codes auf Fehler und Schwachstellen durchführen und Ihnen die Ergebnisse liefern. Nachdem Sie diese geprüft haben, können Sie dem Agenten die Behebung auftragen. Das schützt Sie vor allerlei Ärger beim weiteren Betrieb Ihrer Server.',
    ],
    cta: 'Cloud verbinden',
  },
  es: {
    h: 'Cómo conectarse — y sus primeros pasos',
    paras1: [
      'Podríamos seguir contándole más y más sobre la plataforma, pero probablemente ya tenga una pregunta: ¿cómo conectar Guardian Cloud y qué hará desde los primeros pasos?',
      'Conectarse es muy fácil. Vaya a la plataforma usando el botón "Conectar Cloud" de abajo y regístrese. También puede conectarse mediante un enlace de referido, que puede obtener de un socio autorizado nuestro; la lista de socios está en la página Referral.',
      'Dado que la plataforma funciona con un modelo B2B, solo puede hacerlo una empresa oficialmente registrada en su país.',
      'Tras registrarse, completa un formulario sobre su empresa y pasa una verificación; una vez aprobada, obtiene acceso completo a su interfaz.',
      'Para que explore la plataforma con calma, le damos una prueba gratuita de 10 días. En ella probará ambos tipos de administración de sistemas: un servidor con automatización de IA completa y otro con monitorización de IA. Tras la prueba, elige el plan que le convenga y continúa como cliente de pleno derecho.',
      'Y, por supuesto, quiere saber exactamente cómo se conectan sus servidores y qué datos recibimos de ellos.',
    ],
    subH: 'Cómo se conectan sus servidores — y qué vemos',
    paras2: [
      'En cada servidor se instala un único agente ligero. Se registra con su propio token personal, habla con la plataforma solo por canales cifrados y funciona por defecto en modo de simulación: lee y propone, pero no cambia nada sin su decisión.',
      'Para administrar y proteger el servidor, el agente recopila telemetría operativa: el estado y la versión del SO, los servicios en ejecución, la carga de disco, memoria y red, los paquetes instalados, las configuraciones clave, los metadatos de registros y las señales de seguridad. Para la auditoría inicial esto es un conjunto de 18 comprobaciones, a partir de las cuales el oficial de IA elabora su informe.',
      'Recibimos exactamente lo necesario para mantener y proteger, y nada más. Todos los modelos de IA de la plataforma funcionan en nuestras GPU en su región, por lo que su telemetría permanece dentro del contorno y no se pasa a terceros. Cada acción del agente es visible para usted en el historial de servicio, y la decisión final siempre recae en una persona.',
      'Si lo desea, el agente puede realizar una auditoría completa de su código en busca de errores y vulnerabilidades y darle los resultados. Una vez revisados, puede indicarle al agente que los corrija. Esto le protege de todo tipo de problemas más adelante en la operación de sus servidores.',
    ],
    cta: 'Conectar Cloud',
  },
  it: {
    h: 'Come connettersi — e i vostri primi passi',
    paras1: [
      "Potremmo continuare a raccontarvi ancora molto sulla piattaforma, ma probabilmente vi state già chiedendo: come si connette Guardian Cloud e cosa farà fin dai primi passi?",
      "Connettersi è molto facile. Andate sulla piattaforma tramite il pulsante «Connetti Cloud» qui sotto e registratevi. Potete anche connettervi tramite un link di referral, ottenibile da un nostro partner autorizzato; l'elenco dei partner è nella pagina Referral.",
      "Poiché la piattaforma funziona secondo un modello B2B, può farlo solo un'azienda ufficialmente registrata nel proprio paese.",
      "Dopo la registrazione, compilate un modulo sulla vostra azienda e superate una verifica; una volta superata, otterrete l'accesso completo alla vostra interfaccia.",
      "Affinché possiate esplorare la piattaforma con calma, vi offriamo una prova gratuita di 10 giorni. In essa proverete entrambi i tipi di amministrazione di sistema: un server con automazione IA completa e un altro con monitoraggio IA. Dopo la prova, scegliete il piano più adatto e continuate come cliente a tutti gli effetti.",
      "E ovviamente volete sapere esattamente come si connettono i vostri server e quali dati riceviamo da essi.",
    ],
    subH: 'Come si connettono i vostri server — e cosa vediamo',
    paras2: [
      "Su ogni server viene installato un unico agente leggero. Si registra con un proprio token personale, comunica con la piattaforma solo tramite canali crittografati e funziona di default in modalità dry-run: legge e propone, ma non modifica nulla senza la vostra decisione.",
      "Per amministrare e proteggere il server, l'agente raccoglie telemetria operativa: stato e versione del sistema operativo, servizi in esecuzione, carico di disco, memoria e rete, pacchetti installati, configurazioni chiave, metadati dei log e segnali di sicurezza. Per l'audit iniziale si tratta di un set di 18 controlli, da cui l'officer IA costruisce il proprio report.",
      "Riceviamo esattamente ciò che serve per mantenere e proteggere — e nulla di più. Tutti i modelli IA della piattaforma girano sulle nostre GPU nella vostra regione, quindi la vostra telemetria resta all'interno del perimetro e non viene trasmessa a terzi. Ogni azione dell'agente è visibile a voi nella cronologia dei servizi, e la decisione finale rimane sempre a un essere umano.",
      "Se lo desiderate, l'agente può eseguire un audit completo del vostro codice alla ricerca di bug e vulnerabilità e fornirvi i risultati. Dopo averli esaminati, potete chiedere all'agente di correggerli. Questo vi protegge da ogni sorta di problema futuro nella gestione dei vostri server.",
    ],
    cta: 'Connetti Cloud',
  },
  ja: {
    h: '接続方法 — そして最初のステップ',
    paras1: [
      'プラットフォームについてはまだまだお話しできますが、おそらくすでに一つの疑問をお持ちでしょう。Guardian Cloud をどう接続するのか、そして最初のステップから何をしてくれるのか、ということです。',
      '接続はとても簡単です。下の「Cloud に接続」ボタンからプラットフォームにアクセスし、登録してください。紹介リンク経由でも接続できます——認定パートナーから入手可能で、パートナー一覧は Referral ページにあります。',
      'プラットフォームは B2B モデルで運営されているため、自国で正式に登録された企業のみが利用できます。',
      '登録後、会社に関するフォームに記入し、検証を通過します。通過後、インターフェースへの完全アクセスが得られます。',
      '安心してプラットフォームを試していただけるよう、10日間の無料トライアルをご用意しています。この間に2種類のシステム管理を体験できます。1台は完全AI自動化、もう1台はAI監視です。トライアル終了後、ご自身に合ったプランを選び、正式な顧客として継続できます。',
      'そしてもちろん、サーバーがどのように接続され、私たちがどのようなデータを受け取るのか、正確に知りたいことでしょう。',
    ],
    subH: 'サーバーの接続方法 — そして私たちが見るもの',
    paras2: [
      '各サーバーには軽量エージェントが1つインストールされます。専用の個人トークンで登録し、暗号化されたチャネルのみでプラットフォームと通信し、デフォルトではドライラン・モードで動作します。読み取りと提案のみを行い、あなたの判断なしには何も変更しません。',
      'サーバーを管理・保護するため、エージェントは運用テレメトリを収集します。OSの状態とバージョン、稼働中のサービス、ディスク・メモリ・ネットワークの負荷、インストール済みパッケージ、主要な設定、ログのメタデータ、セキュリティシグナルです。初回監査では18項目のチェックからなり、AIオフィサーがこれをもとにレポートを作成します。',
      '私たちが受け取るのは、維持と保護に必要なものだけで、それ以上ではありません。プラットフォームのすべてのAIモデルはあなたのリージョン内の自社GPU上で稼働するため、テレメトリはコンター内にとどまり、第三者には渡されません。エージェントのすべての行動はサービス履歴で確認でき、最終決定は常に人間の手にあります。',
      'ご希望があれば、エージェントはコードの完全な監査を実施してバグや脆弱性を検出し、結果をお渡しします。確認後、修正をエージェントに指示できます。これにより、サーバー運用における今後のあらゆるトラブルからあなたを守ります。',
    ],
    cta: 'Cloud に接続',
  },
  uk: {
    h: 'Як підключити — і перші кроки',
    paras1: [
      'Ми могли б ще довго розповідати про платформу, але у вас, напевно, вже виникло питання: як підключити Guardian Cloud — і що вона робитиме з перших кроків.',
      'Підключитися дуже легко. Перейдіть на платформу за кнопкою «Підключити Cloud» внизу цього блоку і пройдіть реєстрацію. Підключитися можна й за реферальним посиланням — його можна отримати у нашого авторизованого партнера; список партнерів є на сторінці Referral.',
      'Оскільки платформа працює за моделлю B2B, це може зробити лише офіційно зареєстрована у своїй країні компанія.',
      'Після реєстрації ви заповнюєте форму про компанію і проходите перевірку, а після проходження ви отримаєте повний доступ до свого інтерфейсу.',
      'Щоб ви спокійно ознайомилися з можливостями платформи, ми даємо 10-денний безкоштовний період. У ньому ви спробуєте обидва типи системного адміністрування: один сервер — з повною AI-автоматизацією, другий — з AI-моніторингом. Після пробного періоду ви обираєте відповідний тариф і продовжуєте роботу як повноправний клієнт.',
      'І, звичайно, вас цікавить, як саме підключаються ваші сервери і які дані ми від них отримуємо.',
    ],
    subH: 'Як підключаються ваші сервери — і що ми бачимо',
    paras2: [
      'На кожен сервер встановлюється один легкий агент. Він реєструється за персональним токеном, спілкується з платформою лише зашифрованими каналами і за замовчуванням працює в режимі «сухого прогону»: читає і пропонує, але нічого не змінює без вашого рішення.',
      'Щоб адмініструвати й захищати сервер, агент збирає робочу телеметрію: стан і версію ОС, запущені служби, завантаження диска, пам\'яті та мережі, встановлені пакети, ключові конфігурації, метадані логів і сигнали безпеки. Для первинного аудиту це набір із 18 перевірок — на їх основі AI-офіцер будує звіт.',
      'Ми отримуємо рівно те, що потрібно для обслуговування й захисту, — і нічого понад це. Усі AI-моделі платформи працюють на наших GPU у вашому регіоні, тому ваша телеметрія залишається всередині контуру і не передається третім сторонам. Кожна дія агента видна вам в Історії обслуговування, а фінальне рішення завжди залишається за людиною.',
      'За вашим бажанням агент може провести повний аудит коду на помилки й вразливості та надати вам його результати. Ознайомившись із ними, ви можете дати агенту команду виправити їх. Це вбереже вас від різних неприємностей у подальшій експлуатації ваших серверів.',
    ],
    cta: 'Підключити Cloud',
  },
  sr: {
    h: 'Kako se povezati — i vaši prvi koraci',
    paras1: [
      'Mogli bismo vam još dugo pričati o platformi, ali verovatno vas već zanima: kako povezati Guardian Cloud i šta će raditi od prvih koraka?',
      'Povezivanje je vrlo lako. Idite na platformu preko dugmeta „Poveži Cloud" ispod i registrujte se. Možete se povezati i putem referalnog linka — možete ga dobiti od našeg ovlašćenog partnera; lista partnera je na stranici Referral.',
      'Pošto platforma radi po B2B modelu, ovo može da uradi samo kompanija zvanično registrovana u svojoj zemlji.',
      'Nakon registracije popunjavate obrazac o kompaniji i prolazite verifikaciju; nakon uspešne verifikacije dobijate pun pristup svom interfejsu.',
      'Da biste se u miru upoznali sa mogućnostima platforme, dajemo vam 10-dnevni besplatni period. U njemu ćete isprobati oba tipa sistemske administracije: jedan server sa punom AI automatizacijom, i drugi sa AI monitoringom. Nakon probnog perioda birate odgovarajući plan i nastavljate kao punopravan klijent.',
      'I naravno, zanima vas kako se tačno povezuju vaši serveri i koje podatke dobijamo od njih.',
    ],
    subH: 'Kako se povezuju vaši serveri — i šta mi vidimo',
    paras2: [
      'Na svaki server se instalira jedan lagani agent. Registruje se putem ličnog tokena, komunicira sa platformom samo preko šifrovanih kanala i podrazumevano radi u režimu „suvog pogona": čita i predlaže, ali ništa ne menja bez vaše odluke.',
      'Da bi administrirao i štitio server, agent prikuplja operativnu telemetriju: stanje i verziju OS-a, pokrenute servise, opterećenje diska, memorije i mreže, instalirane pakete, ključne konfiguracije, metapodatke logova i bezbednosne signale. Za početnu reviziju ovo je skup od 18 provera — na osnovu njih AI oficir gradi svoj izveštaj.',
      'Dobijamo tačno ono što je potrebno za održavanje i zaštitu — i ništa više od toga. Svi AI modeli platforme rade na našim GPU-ovima u vašem regionu, tako da vaša telemetrija ostaje unutar konture i ne prenosi se trećim stranama. Svaka radnja agenta vam je vidljiva u Istoriji servisiranja, a konačna odluka uvek ostaje na čoveku.',
      'Ako želite, agent može sprovesti potpunu reviziju vašeg koda na greške i ranjivosti i dati vam rezultate. Nakon što ih pregledate, možete narediti agentu da ih ispravi. Ovo vas štiti od svakojakih problema u daljem radu vaših servera.',
    ],
    cta: 'Poveži Cloud',
  },
  pt: {
    h: 'Como conectar — e seus primeiros passos',
    paras1: [
      'Poderíamos continuar contando cada vez mais sobre a plataforma — mas você provavelmente já tem uma pergunta: como conectar o Guardian Cloud e o que ele fará desde os primeiros passos?',
      'Conectar-se é muito fácil. Acesse a plataforma pelo botão "Conectar Cloud" abaixo e cadastre-se. Você também pode se conectar por meio de um link de indicação — pode obtê-lo com um parceiro autorizado nosso; a lista de parceiros está na página Referral.',
      'Como a plataforma funciona em um modelo B2B, apenas uma empresa oficialmente registrada em seu país pode fazer isso.',
      'Após o cadastro, você preenche um formulário sobre sua empresa e passa por uma verificação; depois de aprovado, você obtém acesso total à sua interface.',
      'Para que você explore a plataforma com tranquilidade, oferecemos um teste gratuito de 10 dias. Nele você experimentará ambos os tipos de administração de sistemas: um servidor com automação total de IA e outro com monitoramento de IA. Após o teste, você escolhe o plano que lhe convém e continua como cliente pleno.',
      'E, claro, você quer saber exatamente como seus servidores se conectam e quais dados recebemos deles.',
    ],
    subH: 'Como seus servidores se conectam — e o que vemos',
    paras2: [
      'Um único agente leve é instalado em cada servidor. Ele se registra com seu próprio token pessoal, conversa com a plataforma apenas por canais criptografados e roda por padrão em modo dry-run: lê e propõe, mas nada altera sem sua decisão.',
      'Para administrar e proteger o servidor, o agente coleta telemetria operacional: estado e versão do SO, serviços em execução, carga de disco, memória e rede, pacotes instalados, configurações-chave, metadados de logs e sinais de segurança. Para a auditoria inicial, isso é um conjunto de 18 verificações — o oficial de IA constrói seu relatório a partir delas.',
      'Recebemos exatamente o necessário para manter e proteger — e nada além disso. Todos os modelos de IA da plataforma rodam em nossas GPUs em sua região, então sua telemetria permanece dentro do contorno e não é passada a terceiros. Cada ação do agente é visível para você no histórico de serviço, e a decisão final sempre permanece com um humano.',
      'Se desejar, o agente pode realizar uma auditoria completa do seu código em busca de bugs e vulnerabilidades e fornecer os resultados. Depois de revisá-los, você pode instruir o agente a corrigi-los. Isso o protege de todo tipo de problema no futuro na operação de seus servidores.',
    ],
    cta: 'Conectar Cloud',
  },
  hi: {
    h: 'कैसे जुड़ें — और आपके पहले कदम',
    paras1: [
      'हम प्लेटफ़ॉर्म के बारे में और भी बहुत कुछ बताते रह सकते हैं — लेकिन शायद आपके मन में पहले से ही एक सवाल है: Guardian Cloud को कैसे जोड़ें, और यह पहले कदम से क्या करेगा?',
      'जुड़ना बहुत आसान है। नीचे दिए "Cloud से जुड़ें" बटन का उपयोग करके प्लेटफ़ॉर्म पर जाएं और साइन अप करें। आप रेफरल लिंक के माध्यम से भी जुड़ सकते हैं — यह आप हमारे किसी अधिकृत साझेदार से प्राप्त कर सकते हैं; साझेदारों की सूची Referral पृष्ठ पर है।',
      'चूंकि यह प्लेटफ़ॉर्म B2B मॉडल पर काम करता है, केवल अपने देश में आधिकारिक रूप से पंजीकृत कंपनी ही यह कर सकती है।',
      'साइन अप के बाद, आप अपनी कंपनी के बारे में एक फॉर्म भरते हैं और सत्यापन से गुजरते हैं; इसे पास करने के बाद आपको अपने इंटरफ़ेस तक पूर्ण पहुंच मिल जाती है।',
      'ताकि आप आराम से प्लेटफ़ॉर्म का अन्वेषण कर सकें, हम आपको 10-दिन का निःशुल्क परीक्षण देते हैं। इसमें आप दोनों प्रकार के सिस्टम प्रशासन आज़माएंगे: पूर्ण AI स्वचालन वाला एक सर्वर, और AI निगरानी वाला दूसरा। परीक्षण के बाद आप अपने अनुकूल योजना चुनते हैं और पूर्ण ग्राहक के रूप में जारी रखते हैं।',
      'और निश्चित रूप से, आप ठीक-ठीक जानना चाहते हैं कि आपके सर्वर कैसे जुड़ते हैं और हमें उनसे कौन-सा डेटा मिलता है।',
    ],
    subH: 'आपके सर्वर कैसे जुड़ते हैं — और हम क्या देखते हैं',
    paras2: [
      'प्रत्येक सर्वर पर एक हल्का एजेंट स्थापित किया जाता है। यह अपने स्वयं के व्यक्तिगत टोकन से पंजीकृत होता है, प्लेटफ़ॉर्म से केवल एन्क्रिप्टेड चैनलों पर बात करता है, और डिफ़ॉल्ट रूप से ड्राई-रन मोड में चलता है: यह पढ़ता और प्रस्तावित करता है, लेकिन आपके निर्णय के बिना कुछ भी नहीं बदलता।',
      'सर्वर को प्रशासित और सुरक्षित करने के लिए, एजेंट परिचालन टेलीमेट्री एकत्र करता है: OS की स्थिति और संस्करण, चल रही सेवाएं, डिस्क, मेमोरी और नेटवर्क लोड, स्थापित पैकेज, प्रमुख कॉन्फ़िगरेशन, लॉग मेटाडेटा और सुरक्षा संकेत। प्रारंभिक ऑडिट के लिए यह 18 जांचों का एक सेट है — AI अधिकारी इसी से अपनी रिपोर्ट बनाता है।',
      'हमें ठीक वही मिलता है जो रखरखाव और सुरक्षा के लिए आवश्यक है — और उससे अधिक कुछ नहीं। प्लेटफ़ॉर्म के सभी AI मॉडल आपके क्षेत्र में हमारे GPU पर चलते हैं, इसलिए आपकी टेलीमेट्री कॉन्टूर के भीतर रहती है और तीसरे पक्षों को नहीं दी जाती। एजेंट की हर क्रिया आपको सेवा इतिहास में दिखाई देती है, और अंतिम निर्णय हमेशा मनुष्य के पास रहता है।',
      'यदि आप चाहें, तो एजेंट बग और कमजोरियों के लिए आपके कोड का पूर्ण ऑडिट चला सकता है और आपको परिणाम दे सकता है। उन्हें देखने के बाद, आप एजेंट को उन्हें ठीक करने के लिए कह सकते हैं। यह आपके सर्वरों के आगे संचालन में हर प्रकार की परेशानी से आपकी रक्षा करता है।',
    ],
    cta: 'Cloud से जुड़ें',
  },
  tr: {
    h: 'Nasıl bağlanılır — ve ilk adımlarınız',
    paras1: [
      "Platform hakkında size daha çok şey anlatmaya devam edebiliriz — ama muhtemelen aklınızda zaten bir soru var: Guardian Cloud'a nasıl bağlanılır ve ilk adımlardan itibaren ne yapar?",
      "Bağlanmak çok kolaydır. Aşağıdaki \"Cloud'a Bağlan\" düğmesini kullanarak platforma gidin ve kaydolun. Ayrıca bir referans bağlantısı üzerinden de bağlanabilirsiniz — bunu yetkili ortaklarımızdan birinden alabilirsiniz; ortak listesi Referral sayfasında yer alır.",
      "Platform B2B modeliyle çalıştığından, bunu yalnızca kendi ülkesinde resmi olarak kayıtlı bir şirket yapabilir.",
      "Kaydolduktan sonra şirketinizle ilgili bir form doldurur ve doğrulamadan geçersiniz; bunu geçtikten sonra arayüzünüze tam erişim kazanırsınız.",
      "Platformu rahatça keşfedebilmeniz için size 10 günlük ücretsiz deneme sunuyoruz. Bu süre içinde iki tür sistem yönetimini de deneyeceksiniz: tam AI otomasyonlu bir sunucu ve AI izlemeli başka bir sunucu. Deneme süresinin ardından size uygun planı seçer ve tam müşteri olarak devam edersiniz.",
      "Ve elbette, sunucularınızın tam olarak nasıl bağlandığını ve onlardan hangi verileri aldığımızı bilmek istersiniz.",
    ],
    subH: 'Sunucularınız nasıl bağlanır — ve neler görüyoruz',
    paras2: [
      "Her sunucuya tek bir hafif ajan kurulur. Kendi kişisel token'ıyla kayıt olur, platformla yalnızca şifreli kanallar üzerinden konuşur ve varsayılan olarak deneme modunda (dry-run) çalışır: okur ve önerir, ancak sizin kararınız olmadan hiçbir şeyi değiştirmez.",
      "Sunucuyu yönetmek ve korumak için ajan operasyonel telemetri toplar: işletim sisteminin durumu ve sürümü, çalışan hizmetler, disk, bellek ve ağ yükü, kurulu paketler, kilit yapılandırmalar, log meta verileri ve güvenlik sinyalleri. İlk denetim için bu, 18 kontrolden oluşan bir settir — AI görevlisi raporunu bunlardan oluşturur.",
      "Bakım ve koruma için gerekli olan tam olarak neyse onu alırız — bunun ötesinde hiçbir şey değil. Platformun tüm AI modelleri bölgenizdeki GPU'larımızda çalışır, bu yüzden telemetriniz kontur içinde kalır ve üçüncü taraflara aktarılmaz. Ajanın her eylemi hizmet geçmişinde size görünür ve nihai karar her zaman bir insanda kalır.",
      "İsterseniz, ajan kodunuzun hata ve güvenlik açıkları için tam bir denetimini yapabilir ve sonuçları size verebilir. Bunları inceledikten sonra, ajana düzeltmesini söyleyebilirsiniz. Bu, sunucularınızı işletirken karşılaşabileceğiniz her türlü sorundan sizi korur.",
    ],
    cta: "Cloud'a Bağlan",
  },
  ar: {
    h: 'كيفية الاتصال — وخطواتكم الأولى',
    paras1: [
      'يمكننا الاستمرار في إخباركم بالمزيد عن المنصة — لكن على الأرجح لديكم سؤال بالفعل: كيف تتصلون بـ Guardian Cloud، وماذا سيفعل منذ الخطوات الأولى؟',
      'الاتصال سهل جدًا. انتقلوا إلى المنصة عبر زر "الاتصال بـ Cloud" أدناه وسجّلوا. يمكنكم أيضًا الاتصال عبر رابط إحالة — يمكنكم الحصول عليه من أحد شركائنا المعتمدين؛ قائمة الشركاء موجودة في صفحة Referral.',
      'نظرًا لأن المنصة تعمل وفق نموذج B2B، لا يمكن القيام بذلك إلا لشركة مسجلة رسميًا في بلدها.',
      'بعد التسجيل، تملؤون نموذجًا عن شركتكم وتمرّون بعملية تحقق؛ وبمجرد اجتيازها، تحصلون على وصول كامل إلى واجهتكم.',
      'حتى تتمكنوا من استكشاف المنصة براحة، نمنحكم فترة تجريبية مجانية مدتها 10 أيام. خلالها ستجربون نوعي إدارة الأنظمة: خادم واحد بأتمتة ذكاء اصطناعي كاملة، وآخر بمراقبة ذكاء اصطناعي. بعد الفترة التجريبية، تختارون الخطة المناسبة لكم وتستمرون كعميل كامل.',
      'وبالطبع، تريدون معرفة كيف تتصل خوادمكم بالضبط وما البيانات التي نتلقاها منها.',
    ],
    subH: 'كيف تتصل خوادمكم — وما الذي نراه',
    paras2: [
      'يُثبَّت عميل واحد خفيف على كل خادم. يُسجَّل برمز مميز خاص به، ويتواصل مع المنصة فقط عبر قنوات مشفرة، ويعمل افتراضيًا في وضع المحاكاة (dry-run): يقرأ ويقترح، لكنه لا يغيّر شيئًا دون قراركم.',
      'لإدارة الخادم وحمايته، يجمع العميل بيانات تشغيلية: حالة نظام التشغيل وإصداره، الخدمات قيد التشغيل، حمل القرص والذاكرة والشبكة، الحزم المثبتة، الإعدادات الرئيسية، بيانات وصفية للسجلات، وإشارات أمنية. بالنسبة للتدقيق الأولي، هذه مجموعة من 18 فحصًا — يبني الضابط الذكي تقريره منها.',
      'نتلقى بالضبط ما هو ضروري للصيانة والحماية — ولا شيء أكثر من ذلك. تعمل جميع نماذج الذكاء الاصطناعي في المنصة على وحدات معالجة الرسومات الخاصة بنا في منطقتكم، لذا تبقى بياناتكم داخل المحيط ولا تُنقل إلى أطراف ثالثة. تظهر لكم كل إجراء يقوم به العميل في سجل الخدمة، ويبقى القرار النهائي دائمًا بيد إنسان.',
      'إذا رغبتم، يمكن للعميل إجراء تدقيق كامل لشيفرتكم بحثًا عن الأخطاء والثغرات وتزويدكم بالنتائج. وبعد مراجعتها، يمكنكم أن تطلبوا من العميل إصلاحها. هذا يحميكم من جميع أنواع المشاكل لاحقًا أثناء تشغيل خوادمكم.',
    ],
    cta: 'الاتصال بـ Cloud',
  },
  el: {
    h: 'Πώς να συνδεθείτε — και τα πρώτα σας βήματα',
    paras1: [
      'Θα μπορούσαμε να συνεχίσουμε να σας λέμε όλο και περισσότερα για την πλατφόρμα — αλλά μάλλον ήδη έχετε μια ερώτηση: πώς συνδέετε το Guardian Cloud και τι θα κάνει από τα πρώτα βήματα;',
      'Η σύνδεση είναι πολύ εύκολη. Πηγαίνετε στην πλατφόρμα μέσω του κουμπιού «Σύνδεση Cloud» παρακάτω και εγγραφείτε. Μπορείτε επίσης να συνδεθείτε μέσω συνδέσμου παραπομπής — μπορείτε να τον αποκτήσετε από έναν εξουσιοδοτημένο συνεργάτη μας· η λίστα συνεργατών βρίσκεται στη σελίδα Referral.',
      'Επειδή η πλατφόρμα λειτουργεί με μοντέλο B2B, μόνο μια εταιρεία επίσημα εγγεγραμμένη στη χώρα της μπορεί να το κάνει αυτό.',
      'Μετά την εγγραφή, συμπληρώνετε μια φόρμα σχετικά με την εταιρεία σας και περνάτε από επαλήθευση· μόλις την περάσετε, αποκτάτε πλήρη πρόσβαση στη διεπαφή σας.',
      'Για να εξερευνήσετε την πλατφόρμα με άνεση, σας δίνουμε 10 ημέρες δωρεάν δοκιμής. Σε αυτήν θα δοκιμάσετε και τους δύο τύπους διαχείρισης συστήματος: έναν διακομιστή με πλήρη αυτοματισμό AI και έναν άλλον με παρακολούθηση AI. Μετά τη δοκιμή επιλέγετε το πλάνο που σας ταιριάζει και συνεχίζετε ως πλήρης πελάτης.',
      'Και φυσικά θέλετε να ξέρετε ακριβώς πώς συνδέονται οι διακομιστές σας και ποια δεδομένα λαμβάνουμε από αυτούς.',
    ],
    subH: 'Πώς συνδέονται οι διακομιστές σας — και τι βλέπουμε',
    paras2: [
      'Σε κάθε διακομιστή εγκαθίσταται ένας ενιαίος ελαφρύς agent. Καταχωρείται με το δικό του προσωπικό token, επικοινωνεί με την πλατφόρμα μόνο μέσω κρυπτογραφημένων καναλιών και λειτουργεί από προεπιλογή σε λειτουργία δοκιμαστικής εκτέλεσης (dry-run): διαβάζει και προτείνει, αλλά δεν αλλάζει τίποτα χωρίς την απόφασή σας.',
      'Για τη διαχείριση και προστασία του διακομιστή, ο agent συλλέγει επιχειρησιακή τηλεμετρία: την κατάσταση και έκδοση του λειτουργικού συστήματος, τις υπηρεσίες που εκτελούνται, το φόρτο δίσκου, μνήμης και δικτύου, τα εγκατεστημένα πακέτα, τις βασικές διαμορφώσεις, τα μεταδεδομένα αρχείων καταγραφής και τα σήματα ασφαλείας. Για τον αρχικό έλεγχο πρόκειται για ένα σύνολο 18 ελέγχων — ο αξιωματικός AI χτίζει την αναφορά του από αυτούς.',
      'Λαμβάνουμε ακριβώς ό,τι χρειάζεται για τη συντήρηση και την προστασία — και τίποτα πέρα από αυτό. Όλα τα μοντέλα AI της πλατφόρμας λειτουργούν στις GPU μας στην περιοχή σας, οπότε η τηλεμετρία σας παραμένει εντός του περιγράμματος και δεν διαβιβάζεται σε τρίτους. Κάθε ενέργεια του agent είναι ορατή σε εσάς στο ιστορικό υπηρεσιών, και η τελική απόφαση παραμένει πάντα στον άνθρωπο.',
      'Εάν το επιθυμείτε, ο agent μπορεί να πραγματοποιήσει πλήρη έλεγχο του κώδικά σας για σφάλματα και ευπάθειες και να σας δώσει τα αποτελέσματα. Αφού τα εξετάσετε, μπορείτε να ζητήσετε από τον agent να τα διορθώσει. Αυτό σας προστατεύει από κάθε είδους μπελά στη μελλοντική λειτουργία των διακομιστών σας.',
    ],
    cta: 'Σύνδεση Cloud',
  },
};

/** Owner narrative intro for the Guardian Cloud hub — localized (en / ru / zh). */
type VideoBlock = { h: string; text: string; articleText: string; articleLabel: string };

const VIDEO: Record<string, VideoBlock> = {
  en: {
    h: 'The full platform walkthrough',
    text: 'If you want to understand in more detail how all of this works, we have prepared a full walkthrough of the platform. See how it works from the inside.',
    articleText: 'And if you want to dig deeper into the architecture, read the platform’s technical description.',
    articleLabel: 'Read the description',
  },
  ru: {
    h: 'Полный разбор платформы',
    text: 'Если хотите подробнее узнать, как всё это работает, мы подготовили полный разбор платформы. Посмотрите, как она работает изнутри.',
    articleText: 'А кто хочет глубже разобраться в архитектуре, прочитайте техническое описание платформы.',
    articleLabel: 'Читать описание',
  },
  zh: {
    h: '平台完整解析',
    text: '如果您想更詳細地了解這一切是如何運作的，我們為您準備了平台的完整解析。看看它從內部是如何運作的。',
    articleText: '如果您想更深入地了解架構，請閱讀平台的技術說明。',
    articleLabel: '閱讀說明',
  },
  fr: {
    h: 'La visite complète de la plateforme',
    text: "Si vous voulez comprendre plus en détail comment tout cela fonctionne, nous avons préparé une visite complète de la plateforme. Découvrez son fonctionnement de l'intérieur.",
    articleText: 'Et si vous voulez approfondir l\'architecture, lisez la description technique de la plateforme.',
    articleLabel: 'Lire la description',
  },
  de: {
    h: 'Die vollständige Plattform-Tour',
    text: 'Wenn Sie im Detail verstehen möchten, wie alles funktioniert, haben wir eine vollständige Tour durch die Plattform vorbereitet. Sehen Sie, wie sie von innen funktioniert.',
    articleText: 'Und wenn Sie tiefer in die Architektur eintauchen möchten, lesen Sie die technische Beschreibung der Plattform.',
    articleLabel: 'Beschreibung lesen',
  },
  es: {
    h: 'El recorrido completo por la plataforma',
    text: 'Si quiere entender con más detalle cómo funciona todo esto, hemos preparado un recorrido completo por la plataforma. Vea cómo funciona por dentro.',
    articleText: 'Y si quiere profundizar en la arquitectura, lea la descripción técnica de la plataforma.',
    articleLabel: 'Leer la descripción',
  },
  it: {
    h: 'Il tour completo della piattaforma',
    text: 'Se volete capire più in dettaglio come funziona tutto questo, abbiamo preparato un tour completo della piattaforma. Guardate come funziona dall\'interno.',
    articleText: 'E se volete approfondire l\'architettura, leggete la descrizione tecnica della piattaforma.',
    articleLabel: 'Leggi la descrizione',
  },
  ja: {
    h: 'プラットフォーム完全解説',
    text: 'これらすべてがどのように機能するかをより詳しく理解したい方のために、プラットフォームの完全な解説動画をご用意しました。内部からどう動いているかをご覧ください。',
    articleText: 'アーキテクチャをさらに深く知りたい方は、プラットフォームの技術説明をお読みください。',
    articleLabel: '説明を読む',
  },
  uk: {
    h: 'Повний розбір платформи',
    text: 'Якщо хочете детальніше дізнатися, як усе це працює, ми підготували повний розбір платформи. Подивіться, як вона працює зсередини.',
    articleText: 'А хто хоче глибше розібратися в архітектурі, прочитайте технічний опис платформи.',
    articleLabel: 'Читати опис',
  },
  sr: {
    h: 'Potpuni pregled platforme',
    text: 'Ako želite detaljnije da saznate kako sve ovo funkcioniše, pripremili smo potpuni pregled platforme. Pogledajte kako funkcioniše iznutra.',
    articleText: 'A ko želi dublje da se upozna sa arhitekturom, neka pročita tehnički opis platforme.',
    articleLabel: 'Pročitaj opis',
  },
  pt: {
    h: 'O tour completo pela plataforma',
    text: 'Se você quiser entender em mais detalhes como tudo isso funciona, preparamos um tour completo pela plataforma. Veja como ela funciona por dentro.',
    articleText: 'E se quiser se aprofundar na arquitetura, leia a descrição técnica da plataforma.',
    articleLabel: 'Ler a descrição',
  },
  hi: {
    h: 'प्लेटफ़ॉर्म का संपूर्ण वॉकथ्रू',
    text: 'यदि आप विस्तार से समझना चाहते हैं कि यह सब कैसे काम करता है, तो हमने प्लेटफ़ॉर्म का पूरा वॉकथ्रू तैयार किया है। देखें कि यह अंदर से कैसे काम करता है।',
    articleText: 'और यदि आप आर्किटेक्चर में गहराई से जानना चाहते हैं, तो प्लेटफ़ॉर्म का तकनीकी विवरण पढ़ें।',
    articleLabel: 'विवरण पढ़ें',
  },
  tr: {
    h: 'Platformun tam turu',
    text: 'Tüm bunların nasıl çalıştığını daha ayrıntılı anlamak isterseniz, platformun tam bir turunu hazırladık. İçeriden nasıl çalıştığını görün.',
    articleText: 'Ve mimariyi daha derinlemesine incelemek isterseniz, platformun teknik açıklamasını okuyun.',
    articleLabel: 'Açıklamayı oku',
  },
  ar: {
    h: 'الجولة الكاملة في المنصة',
    text: 'إذا أردتم فهم كيفية عمل كل هذا بمزيد من التفصيل، فقد أعددنا جولة كاملة في المنصة. شاهدوا كيف تعمل من الداخل.',
    articleText: 'وإذا أردتم التعمق أكثر في البنية، اقرأوا الوصف التقني للمنصة.',
    articleLabel: 'قراءة الوصف',
  },
  el: {
    h: 'Η πλήρης παρουσίαση της πλατφόρμας',
    text: 'Αν θέλετε να κατανοήσετε με περισσότερη λεπτομέρεια πώς λειτουργούν όλα αυτά, έχουμε ετοιμάσει μια πλήρη παρουσίαση της πλατφόρμας. Δείτε πώς λειτουργεί εσωτερικά.',
    articleText: 'Και αν θέλετε να εμβαθύνετε στην αρχιτεκτονική, διαβάστε την τεχνική περιγραφή της πλατφόρμας.',
    articleLabel: 'Διαβάστε την περιγραφή',
  },
};

export default function CloudIntro() {

  const { locale } = useLocale();
  const b1 = BLOCK1[locale] ?? BLOCK1.en;
  const b2 = BLOCK2[locale] ?? BLOCK2.en;
  const b3 = BLOCK3[locale] ?? BLOCK3.en;
  const b4 = BLOCK4[locale] ?? BLOCK4.en;
  const b5 = BLOCK5[locale] ?? BLOCK5.en;
  const b6 = BLOCK6[locale] ?? BLOCK6.en;
  const vid = VIDEO[locale] ?? VIDEO.en;

  return (
    <>
      {/* Block 1 — what the platform is */}
      <section className="border-b border-white/5 bg-gray-900/40 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{b1.h}</h2>
          <p>{b1.p1}</p>
          <p className="font-semibold text-cyan-300">{b1.q}</p>
          <p>
            {b1.p2pre}
            <span className="font-semibold text-white">{b1.p2bold}</span>
            {b1.p2post}
          </p>
          <p>{b1.p3}</p>
        </div>
      </section>

      {/* Разбор платформы: встроенное видео по языку + ссылка на техническое описание */}
      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/5 p-6 md:p-8">
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">{vid.h}</h2>
            <p className="mb-6 text-lg leading-relaxed text-white/85">{vid.text}</p>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${locale === 'ru' ? 'Rx3-T0WzcN8' : 'F2ZPhKGMWpM'}`}
                title={vid.h}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              {vid.articleText}{' '}
              <a
                href="/papers/guardian-cloud-paper-en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
              >
                {vid.articleLabel} →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Block 2 — who it is for */}
      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl">{b2.h}</h2>
          <p className="mb-8 text-lg leading-relaxed text-white/80">{b2.lead}</p>
          <ul className="space-y-5">
            {b2.segments.map((s, i) => (
              <li key={i} className="border-l-2 border-cyan-500/40 pl-4">
                <span className="font-semibold text-white">{s.label}</span>{' '}
                <span className="text-white/75">{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg leading-relaxed text-white/80">{b2.closer}</p>
        </div>
      </section>

      {/* Block 3 — geography, over a play-once video */}
      <VideoBackground videoSrc="/videos/virus2.mp4" loop={false} objectFit="contain" className="border-b border-white/5 py-24">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/90">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{b3.h}</h2>
          <p>{b3.p1}</p>
          <p>{b3.p2}</p>
          <p className="font-semibold text-cyan-300">{b3.p3}</p>
        </div>
      </VideoBackground>

      {/* Block 4 — control center */}
      <section className="border-b border-white/5 bg-gray-900/40 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{b4.h}</h2>
          {b4.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Block 5 — your AI assistant (видеофон убран по решению владельца) */}
      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{b5.h}</h2>
          {b5.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Block 6 — how to connect & first steps */}
      <section className="border-b border-white/5 bg-gray-900/40 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{b6.h}</h2>
          {b6.paras1.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h3 className="pt-4 text-xl font-bold text-cyan-300">{b6.subH}</h3>
          {b6.paras2.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="pt-6 text-center">
            <RegisterCta className="inline-block rounded-lg bg-cyan-500 px-10 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-cyan-400">
              {b6.cta}
            </RegisterCta>
          </div>
        </div>
      </section>
    </>
  );
}
