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
