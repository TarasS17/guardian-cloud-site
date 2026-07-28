// Professional translations for GuardianAI chatbot
// All translations maintain professional, friendly tone
// Technical terms (Guardian Cloud, GuardianOps, e-commerce, uptime, etc.) remain in English
// Names (Oksana Vlasova, Li Wong, Vlada Safonova) remain unchanged

export const professionalTranslations = {
  // ENGLISH (en)
  en: {
    postFormMessage: (name: string) => `Nice to meet you, ${name}! Thank you for providing your information. Now I'm ready to answer your questions about our products. You can ask me about Guardian Cloud, GuardianOps, or our referral program.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Chief Engineer, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Chief Engineer, Guardian Cloud",
        greeting: (name: string) => `Hi, ${name}! My name is Oksana Vlasova, Chief Engineer of Guardian Cloud. Guardian Cloud is an intelligent ecosystem that automates routine tasks (logs, patches, updates), protects against cyberattacks in real time, and guarantees 99.9% uptime. Your clients always get access to the service, while you save budget and reputation. I'm ready to answer all your questions!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "GuardianOps Specialist",
        greeting: (name: string) => `Hello, ${name}! My name is Li Wong. I'm a GuardianOps specialist — an AI assistant for e-commerce. GuardianOps automates logistics, manages warehouses, analyzes profits in real time, communicates with customers and suppliers, monitors the system, and promotes products on social media. Stop order leakage and start working more efficiently! I'm ready to answer your questions.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Partner Program Manager",
        greeting: (name: string) => `Good day, ${name}! Nice to see you. My name is Vlada Safonova, Partner Program Manager at Guardian AI. Our referral program is designed for system administrators, developers, and e-commerce specialists. We don't replace you — we enhance your capabilities! Free yourself from routine tasks, expand your client base, and earn a percentage from your clients' subscriptions. Your income grows with our success!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Switch to Specialist",
      watchVideos: "Watch Videos",
      learnTechnology: "Learn About Technology",
      startChat: "Start Chat",
      talkToSpecialist: "Talk to Specialist",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Thank you for your question! Let me help you.",
    videoOffer: "Would you like to watch videos about our products?",
    productSuggestion: (product: string) => `Great! I see you're interested in ${product}. Let me transfer you to our specialist.`,
    postVideoFollowUp: "Have you already figured out which of our products interests you?",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      country: "Country",
      city: "City",
      state: "State/Region",
      businessSphere: "Business Sphere",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finance",
        healthcare: "Healthcare",
        education: "Education",
        retail: "Retail",
        manufacturing: "Manufacturing",
        technology: "Technology",
        logistics: "Logistics",
        other: "Other"
      },
      otherSpherePlaceholder: "Specify your business sphere",
      companyName: "Company Name",
      position: "Position",
      website: "Website",
      email: "Email",
      phone: "Phone",
      consent: "I agree to the processing of personal data",
      continue: "Continue"
    },
    systemInstruction: "You are a helpful GuardianAI assistant that helps clients learn about our products: Guardian Cloud, GuardianOps, and the Referral Program.",
    placeholder: "Ask your question...",
  },

  // CHINESE (cn)
  cn: {
    postFormMessage: (name: string) => `很高兴认识您，${name}！感谢您提供的信息。现在我准备好回答您关于我们产品的问题了。您可以询问我关于 Guardian Cloud、GuardianOps 或我们的推荐计划。`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "总工程师，GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "总工程师，Guardian Cloud",
        greeting: (name: string) => `您好，${name}！我叫 Oksana Vlasova，是 Guardian Cloud 的总工程师。Guardian Cloud 是一个智能生态系统，可自动化常规任务（日志、补丁、更新），实时防御网络攻击，并保证 99.9% 的 uptime。您的客户始终可以访问服务，而您则节省预算并维护声誉。我随时准备回答您的所有问题！`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "GuardianOps 专家",
        greeting: (name: string) => `您好，${name}！我叫 Li Wong。我是 GuardianOps 专家 — 专为 e-commerce 设计的 AI 助手。GuardianOps 自动化物流、管理仓库、实时分析利润、与客户和供应商沟通、监控系统并在社交媒体上推广产品。停止订单流失，开始更高效地工作！我随时准备回答您的问题。`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "合作伙伴计划经理",
        greeting: (name: string) => `您好，${name}！很高兴见到您。我叫 Vlada Safonova，是 Guardian AI 的合作伙伴计划经理。我们的推荐计划专为系统管理员、开发人员和 e-commerce 专家设计。我们不会取代您 — 我们会增强您的能力！从日常工作中解放出来，扩大您的客户群，并从客户订阅中赚取佣金。您的收入随着我们的成功而增长！`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "切换到专家",
      watchVideos: "观看视频",
      learnTechnology: "了解技术",
      startChat: "开始聊天",
      talkToSpecialist: "与专家交谈",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "感谢您的提问！让我帮助您。",
    videoOffer: "您想观看关于我们产品的视频吗？",
    productSuggestion: (product: string) => `太好了！我看到您对 ${product} 感兴趣。让我为您转接到我们的专家。`,
    postVideoFollowUp: "您已经了解我们哪个产品让您感兴趣了吗？",
    form: {
      firstName: "名字",
      lastName: "姓氏",
      country: "国家",
      city: "城市",
      state: "州/地区",
      businessSphere: "业务领域",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "金融",
        healthcare: "医疗保健",
        education: "教育",
        retail: "零售",
        manufacturing: "制造业",
        technology: "技术",
        logistics: "物流",
        other: "其他"
      },
      otherSpherePlaceholder: "请说明您的业务领域",
      companyName: "公司名称",
      position: "职位",
      website: "网站",
      email: "邮箱",
      phone: "电话",
      consent: "我同意处理个人数据",
      continue: "继续"
    },
    systemInstruction: "您是一位有用的 GuardianAI 助手，帮助客户了解我们的产品：Guardian Cloud、GuardianOps 和推荐计划。",
    placeholder: "提出您的问题...",
  },

  // FRENCH (fr)
  fr: {
    postFormMessage: (name: string) => `Ravi de vous rencontrer, ${name} ! Merci d'avoir fourni vos informations. Je suis maintenant prêt à répondre à vos questions sur nos produits. Vous pouvez me poser des questions sur Guardian Cloud, GuardianOps ou notre programme de parrainage.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Ingénieur en chef, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Ingénieur en chef, Guardian Cloud",
        greeting: (name: string) => `Bonjour ${name} ! Je m'appelle Oksana Vlasova, ingénieur en chef de Guardian Cloud. Guardian Cloud est un écosystème intelligent qui automatise les tâches routinières (journaux, correctifs, mises à jour), protège contre les cyberattaques en temps réel et garantit un uptime de 99,9 %. Vos clients ont toujours accès au service, tandis que vous économisez budget et réputation. Je suis prête à répondre à toutes vos questions !`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Spécialiste GuardianOps",
        greeting: (name: string) => `Bonjour ${name} ! Je m'appelle Li Wong. Je suis spécialiste GuardianOps — un assistant IA pour l'e-commerce. GuardianOps automatise la logistique, gère les entrepôts, analyse les profits en temps réel, communique avec les clients et les fournisseurs, surveille le système et promeut les produits sur les réseaux sociaux. Arrêtez la fuite des commandes et commencez à travailler plus efficacement ! Je suis prête à répondre à vos questions.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Responsable du programme partenaire",
        greeting: (name: string) => `Bonjour ${name} ! Ravie de vous voir. Je m'appelle Vlada Safonova, responsable du programme partenaire chez Guardian AI. Notre programme de parrainage est conçu pour les administrateurs système, les développeurs et les spécialistes de l'e-commerce. Nous ne vous remplaçons pas — nous renforçons vos capacités ! Libérez-vous des tâches routinières, élargissez votre base de clients et gagnez un pourcentage sur les abonnements de vos clients. Vos revenus augmentent avec notre succès !`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Basculer vers un spécialiste",
      watchVideos: "Regarder les vidéos",
      learnTechnology: "En savoir plus sur la technologie",
      startChat: "Commencer la discussion",
      talkToSpecialist: "Parler à un spécialiste",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Merci pour votre question ! Laissez-moi vous aider.",
    videoOffer: "Souhaitez-vous regarder des vidéos sur nos produits ?",
    productSuggestion: (product: string) => `Excellent ! Je vois que vous êtes intéressé par ${product}. Permettez-moi de vous transférer vers notre spécialiste.`,
    postVideoFollowUp: "Avez-vous déjà compris lequel de nos produits vous intéresse ?",
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      country: "Pays",
      city: "Ville",
      state: "État/Région",
      businessSphere: "Secteur d'activité",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finance",
        healthcare: "Santé",
        education: "Éducation",
        retail: "Commerce de détail",
        manufacturing: "Fabrication",
        technology: "Technologie",
        logistics: "Logistique",
        other: "Autre"
      },
      otherSpherePlaceholder: "Précisez votre secteur d'activité",
      companyName: "Nom de l'entreprise",
      position: "Poste",
      website: "Site web",
      email: "Email",
      phone: "Téléphone",
      consent: "J'accepte le traitement des données personnelles",
      continue: "Continuer"
    },
    systemInstruction: "Vous êtes un assistant GuardianAI utile qui aide les clients à découvrir nos produits : Guardian Cloud, GuardianOps et le programme de parrainage.",
    placeholder: "Posez votre question...",
  },

  // GERMAN (de)
  de: {
    postFormMessage: (name: string) => `Freut mich, Sie kennenzulernen, ${name}! Vielen Dank für Ihre Informationen. Jetzt bin ich bereit, Ihre Fragen zu unseren Produkten zu beantworten. Sie können mich über Guardian Cloud, GuardianOps oder unser Empfehlungsprogramm befragen.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Chefingenieur, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Chefingenieur, Guardian Cloud",
        greeting: (name: string) => `Hallo ${name}! Mein Name ist Oksana Vlasova, Chefingenieur von Guardian Cloud. Guardian Cloud ist ein intelligentes Ökosystem, das Routineaufgaben (Logs, Patches, Updates) automatisiert, in Echtzeit vor Cyberangriffen schützt und 99,9 % uptime garantiert. Ihre Kunden haben immer Zugriff auf den Service, während Sie Budget und Reputation sparen. Ich bin bereit, alle Ihre Fragen zu beantworten!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "GuardianOps-Spezialist",
        greeting: (name: string) => `Hallo ${name}! Mein Name ist Li Wong. Ich bin GuardianOps-Spezialist — ein KI-Assistent für e-commerce. GuardianOps automatisiert die Logistik, verwaltet Lager, analysiert Gewinne in Echtzeit, kommuniziert mit Kunden und Lieferanten, überwacht das System und bewirbt Produkte in sozialen Medien. Stoppen Sie Auftragsverluste und arbeiten Sie effizienter! Ich bin bereit, Ihre Fragen zu beantworten.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Partnerprogramm-Manager",
        greeting: (name: string) => `Guten Tag, ${name}! Schön, Sie zu sehen. Mein Name ist Vlada Safonova, Partnerprogramm-Manager bei Guardian AI. Unser Empfehlungsprogramm richtet sich an Systemadministratoren, Entwickler und e-commerce-Spezialisten. Wir ersetzen Sie nicht — wir erweitern Ihre Möglichkeiten! Befreien Sie sich von Routineaufgaben, erweitern Sie Ihren Kundenstamm und verdienen Sie einen Prozentsatz an den Abonnements Ihrer Kunden. Ihr Einkommen wächst mit unserem Erfolg!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Zu Spezialist wechseln",
      watchVideos: "Videos ansehen",
      learnTechnology: "Über Technologie erfahren",
      startChat: "Chat starten",
      talkToSpecialist: "Mit Spezialist sprechen",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Vielen Dank für Ihre Frage! Lassen Sie mich Ihnen helfen.",
    videoOffer: "Möchten Sie Videos über unsere Produkte ansehen?",
    productSuggestion: (product: string) => `Großartig! Ich sehe, Sie interessieren sich für ${product}. Lassen Sie mich Sie zu unserem Spezialisten weiterleiten.`,
    postVideoFollowUp: "Haben Sie bereits herausgefunden, welches unserer Produkte Sie interessiert?",
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      country: "Land",
      city: "Stadt",
      state: "Bundesland/Region",
      businessSphere: "Geschäftsbereich",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finanzen",
        healthcare: "Gesundheitswesen",
        education: "Bildung",
        retail: "Einzelhandel",
        manufacturing: "Fertigung",
        technology: "Technologie",
        logistics: "Logistik",
        other: "Sonstiges"
      },
      otherSpherePlaceholder: "Geben Sie Ihren Geschäftsbereich an",
      companyName: "Firmenname",
      position: "Position",
      website: "Website",
      email: "E-Mail",
      phone: "Telefon",
      consent: "Ich stimme der Verarbeitung personenbezogener Daten zu",
      continue: "Weiter"
    },
    systemInstruction: "Sie sind ein hilfreicher GuardianAI-Assistent, der Kunden dabei hilft, mehr über unsere Produkte zu erfahren: Guardian Cloud, GuardianOps und das Empfehlungsprogramm.",
    placeholder: "Stellen Sie Ihre Frage...",
  },

  // POLISH (pl)
  pl: {
    postFormMessage: (name: string) => `Miło mi Cię poznać, ${name}! Dziękuję za podanie informacji. Teraz jestem gotowa odpowiedzieć na Twoje pytania dotyczące naszych produktów. Możesz zapytać mnie o Guardian Cloud, GuardianOps lub nasz program partnerski.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Główny inżynier, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Główny inżynier, Guardian Cloud",
        greeting: (name: string) => `Cześć ${name}! Nazywam się Oksana Vlasova, główny inżynier Guardian Cloud. Guardian Cloud to inteligentny ekosystem, który automatyzuje rutynowe zadania (logi, łatki, aktualizacje), chroni przed cyberatakami w czasie rzeczywistym i gwarantuje 99,9% uptime. Twoi klienci zawsze mają dostęp do usługi, a Ty oszczędzasz budżet i reputację. Jestem gotowa odpowiedzieć na wszystkie Twoje pytania!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Specjalista GuardianOps",
        greeting: (name: string) => `Witam, ${name}! Nazywam się Li Wong. Jestem specjalistą GuardianOps — asystentem AI dla e-commerce. GuardianOps automatyzuje logistykę, zarządza magazynem, analizuje zyski w czasie rzeczywistym, komunikuje się z klientami i dostawcami, monitoruje system i promuje produkty w mediach społecznościowych. Zatrzymaj wyciek zamówień i zacznij pracować efektywniej! Jestem gotowa odpowiedzieć na Twoje pytania.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Menedżer programu partnerskiego",
        greeting: (name: string) => `Dzień dobry, ${name}! Miło Cię widzieć. Nazywam się Vlada Safonova, menedżer programu partnerskiego w Guardian AI. Nasz program referencyjny jest przeznaczony dla administratorów systemów, programistów i specjalistów e-commerce. Nie zastępujemy Cię — wzmacniamy Twoje możliwości! Uwolnij się od rutynowych zadań, rozszerz bazę klientów i zarabiaj procent od subskrypcji swoich klientów. Twój dochód rośnie razem z naszym sukcesem!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Przełącz na specjalistę",
      watchVideos: "Obejrzyj filmy",
      learnTechnology: "Dowiedz się o technologii",
      startChat: "Rozpocznij rozmowę",
      talkToSpecialist: "Porozmawiaj ze specjalistą",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Dziękuję za pytanie! Pozwól, że Ci pomogę.",
    videoOffer: "Czy chciałbyś obejrzeć filmy o naszych produktach?",
    productSuggestion: (product: string) => `Świetnie! Widzę, że interesujesz się ${product}. Pozwól, że przeniosę Cię do naszego specjalisty.`,
    postVideoFollowUp: "Czy już wiesz, który z naszych produktów Cię interesuje?",
    form: {
      firstName: "Imię",
      lastName: "Nazwisko",
      country: "Kraj",
      city: "Miasto",
      state: "Województwo/Region",
      businessSphere: "Branża",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finanse",
        healthcare: "Ochrona zdrowia",
        education: "Edukacja",
        retail: "Handel detaliczny",
        manufacturing: "Produkcja",
        technology: "Technologia",
        logistics: "Logistyka",
        other: "Inne"
      },
      otherSpherePlaceholder: "Określ swoją branżę",
      companyName: "Nazwa firmy",
      position: "Stanowisko",
      website: "Strona internetowa",
      email: "Email",
      phone: "Telefon",
      consent: "Wyrażam zgodę na przetwarzanie danych osobowych",
      continue: "Kontynuuj"
    },
    systemInstruction: "Jesteś pomocnym asystentem GuardianAI, który pomaga klientom poznać nasze produkty: Guardian Cloud, GuardianOps i program referencyjny.",
    placeholder: "Zadaj swoje pytanie...",
  },

  // ITALIAN (it)
  it: {
    postFormMessage: (name: string) => `Piacere di conoscerti, ${name}! Grazie per aver fornito le tue informazioni. Ora sono pronto a rispondere alle tue domande sui nostri prodotti. Puoi chiedermi informazioni su Guardian Cloud, GuardianOps o il nostro programma di referral.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Ingegnere Capo, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Ingegnere Capo, Guardian Cloud",
        greeting: (name: string) => `Ciao ${name}! Mi chiamo Oksana Vlasova, Ingegnere Capo di Guardian Cloud. Guardian Cloud è un ecosistema intelligente che automatizza le attività di routine (log, patch, aggiornamenti), protegge dagli attacchi informatici in tempo reale e garantisce un uptime del 99,9%. I tuoi clienti hanno sempre accesso al servizio, mentre tu risparmi budget e reputazione. Sono pronta a rispondere a tutte le tue domande!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Specialista GuardianOps",
        greeting: (name: string) => `Salve ${name}! Mi chiamo Li Wong. Sono uno specialista GuardianOps — un assistente AI per l'e-commerce. GuardianOps automatizza la logistica, gestisce i magazzini, analizza i profitti in tempo reale, comunica con clienti e fornitori, monitora il sistema e promuove i prodotti sui social media. Ferma la perdita di ordini e inizia a lavorare in modo più efficiente! Sono pronta a rispondere alle tue domande.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Responsabile del programma partner",
        greeting: (name: string) => `Buongiorno ${name}! Piacere di vederti. Mi chiamo Vlada Safonova, Responsabile del programma partner presso Guardian AI. Il nostro programma di referral è progettato per amministratori di sistema, sviluppatori e specialisti e-commerce. Non ti sostituiamo — potenziamo le tue capacità! Liberati dalle attività di routine, espandi la tua base clienti e guadagna una percentuale dagli abbonamenti dei tuoi clienti. Il tuo reddito cresce con il nostro successo!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Passa allo specialista",
      watchVideos: "Guarda i video",
      learnTechnology: "Scopri la tecnologia",
      startChat: "Inizia la chat",
      talkToSpecialist: "Parla con lo specialista",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Grazie per la tua domanda! Lascia che ti aiuti.",
    videoOffer: "Vorresti guardare i video sui nostri prodotti?",
    productSuggestion: (product: string) => `Ottimo! Vedo che sei interessato a ${product}. Lascia che ti trasferisca al nostro specialista.`,
    postVideoFollowUp: "Hai già capito quale dei nostri prodotti ti interessa?",
    form: {
      firstName: "Nome",
      lastName: "Cognome",
      country: "Paese",
      city: "Città",
      state: "Stato/Regione",
      businessSphere: "Settore commerciale",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finanza",
        healthcare: "Sanità",
        education: "Istruzione",
        retail: "Vendita al dettaglio",
        manufacturing: "Produzione",
        technology: "Tecnologia",
        logistics: "Logistica",
        other: "Altro"
      },
      otherSpherePlaceholder: "Specifica il tuo settore commerciale",
      companyName: "Nome dell'azienda",
      position: "Posizione",
      website: "Sito web",
      email: "Email",
      phone: "Telefono",
      consent: "Acconsento al trattamento dei dati personali",
      continue: "Continua"
    },
    systemInstruction: "Sei un assistente GuardianAI utile che aiuta i clienti a conoscere i nostri prodotti: Guardian Cloud, GuardianOps e il programma di referral.",
    placeholder: "Fai la tua domanda...",
  },

  // UKRAINIAN (ua)
  ua: {
    postFormMessage: (name: string) => `Приємно познайомитися, ${name}! Дякую за надану інформацію. Тепер я готова відповісти на ваші запитання про наші продукти. Ви можете запитати мене про Guardian Cloud, GuardianOps або нашу реферальну програму.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Головний інженер, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Головний інженер, Guardian Cloud",
        greeting: (name: string) => `Привіт, ${name}! Мене звати Оксана Власова, головний інженер Guardian Cloud. Guardian Cloud — це інтелектуальна екосистема, яка автоматизує рутинні завдання (логи, патчі, оновлення), захищає від кібератак у реальному часі та гарантує 99,9% uptime. Ваші клієнти завжди отримують доступ до сервісу, а ви — збережений бюджет та репутацію. Готова відповісти на всі ваші запитання!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Спеціаліст з GuardianOps",
        greeting: (name: string) => `Вітаю, ${name}! Мене звати Лі Вонг. Я спеціаліст з GuardianOps — нейромережі-помічника для e-commerce. GuardianOps автоматизує логістику, керує складом, аналізує прибуток у реальному часі, спілкується з клієнтами та постачальниками, моніторить систему та просуває товари в соцмережах. Зупиніть витік замовлень та почніть працювати ефективніше! Готова відповісти на ваші запитання.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Менеджер партнерської програми",
        greeting: (name: string) => `Доброго дня, ${name}! Рада вас бачити. Мене звати Влада Сафонова, менеджер партнерської програми Guardian AI. Наша реферальна програма створена для системних адміністраторів, розробників та спеціалістів з e-commerce. Ми не замінюємо вас — ми посилюємо ваші можливості! Звільніться від рутини, розширте клієнтську базу та отримуйте відсоток від підписки ваших клієнтів. Ваш дохід зростає разом з нашим успіхом!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Переключити на спеціаліста",
      watchVideos: "Переглянути відео",
      learnTechnology: "Дізнатися про технологію",
      startChat: "Перейти до спілкування",
      talkToSpecialist: "Говорити зі спеціалістом",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Дякую за ваше запитання! Дозвольте мені допомогти вам.",
    videoOffer: "Чи хотіли б ви переглянути відео про наші продукти?",
    productSuggestion: (product: string) => `Чудово! Я бачу, що вас цікавить ${product}. Дозвольте передати вас нашому спеціалісту.`,
    postVideoFollowUp: "Ви вже зрозуміли, який з наших продуктів вас зацікавив?",
    form: {
      firstName: "Ім'я",
      lastName: "Прізвище",
      country: "Країна",
      city: "Місто",
      state: "Область/Регіон",
      businessSphere: "Сфера бізнесу",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Фінанси",
        healthcare: "Охорона здоров'я",
        education: "Освіта",
        retail: "Роздрібна торгівля",
        manufacturing: "Виробництво",
        technology: "Технології",
        logistics: "Логістика",
        other: "Інше"
      },
      otherSpherePlaceholder: "Вкажіть вашу сферу діяльності",
      companyName: "Назва компанії",
      position: "Посада",
      website: "Веб-сайт",
      email: "Email",
      phone: "Телефон",
      consent: "Я погоджуюся на обробку персональних даних",
      continue: "Продовжити"
    },
    systemInstruction: "Ви - корисний асистент GuardianAI, який допомагає клієнтам дізнатися про наші продукти: Guardian Cloud, GuardianOps та реферальну програму.",
    placeholder: "Поставте своє запитання...",
  },

  // TURKISH (tr)
  tr: {
    postFormMessage: (name: string) => `Tanıştığımıza memnun oldum, ${name}! Bilgilerinizi sağladığınız için teşekkür ederim. Şimdi ürünlerimiz hakkındaki sorularınızı yanıtlamaya hazırım. Bana Guardian Cloud, GuardianOps veya referans programımız hakkında sorular sorabilirsiniz.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Baş Mühendis, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Baş Mühendis, Guardian Cloud",
        greeting: (name: string) => `Merhaba ${name}! Benim adım Oksana Vlasova, Guardian Cloud Baş Mühendisiyim. Guardian Cloud, rutin görevleri (loglar, yamalar, güncellemeler) otomatikleştiren, gerçek zamanlı siber saldırılara karşı koruyan ve %99,9 uptime garanti eden akıllı bir ekosistemdir. Müşterileriniz her zaman hizmete erişim sağlar, siz ise bütçe ve itibar tasarrufu edersiniz. Tüm sorularınızı yanıtlamaya hazırım!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "GuardianOps Uzmanı",
        greeting: (name: string) => `Merhaba ${name}! Benim adım Li Wong. GuardianOps uzmanıyım — e-commerce için yapay zeka asistanı. GuardianOps lojistiği otomatikleştirir, depoyu yönetir, karı gerçek zamanlı analiz eder, müşteriler ve tedarikçilerle iletişim kurar, sistemi izler ve ürünleri sosyal medyada tanıtır. Sipariş kaçağını durdurun ve daha verimli çalışmaya başlayın! Sorularınızı yanıtlamaya hazırım.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "İş Ortağı Programı Müdürü",
        greeting: (name: string) => `İyi günler ${name}! Sizi görmekten mutluluk duyuyorum. Benim adım Vlada Safonova, Guardian AI İş Ortağı Programı Müdürüyüm. Referans programımız sistem yöneticileri, geliştiriciler ve e-commerce uzmanları için tasarlanmıştır. Sizi değiştirmiyoruz — yeteneklerinizi geliştiriyoruz! Rutin işlerden kurtulun, müşteri tabanınızı genişletin ve müşterilerinizin aboneliklerinden yüzde kazanın. Geliriniz bizim başarımızla birlikte büyür!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Uzmana geç",
      watchVideos: "Videoları izle",
      learnTechnology: "Teknoloji hakkında bilgi al",
      startChat: "Sohbete başla",
      talkToSpecialist: "Uzmanla konuş",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Sorunuz için teşekkür ederim! Size yardımcı olmama izin verin.",
    videoOffer: "Ürünlerimiz hakkında videoları izlemek ister misiniz?",
    productSuggestion: (product: string) => `Harika! ${product} ile ilgilendiğinizi görüyorum. Sizi uzmanımıza aktarmama izin verin.`,
    postVideoFollowUp: "Ürünlerimizden hangisinin ilginizi çektiğini zaten anladınız mı?",
    form: {
      firstName: "Ad",
      lastName: "Soyad",
      country: "Ülke",
      city: "Şehir",
      state: "Eyalet/Bölge",
      businessSphere: "İş alanı",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finans",
        healthcare: "Sağlık",
        education: "Eğitim",
        retail: "Perakende",
        manufacturing: "İmalat",
        technology: "Teknoloji",
        logistics: "Lojistik",
        other: "Diğer"
      },
      otherSpherePlaceholder: "İş alanınızı belirtin",
      companyName: "Şirket adı",
      position: "Pozisyon",
      website: "Web sitesi",
      email: "E-posta",
      phone: "Telefon",
      consent: "Kişisel verilerin işlenmesini kabul ediyorum",
      continue: "Devam et"
    },
    systemInstruction: "Müşterilerin ürünlerimiz hakkında bilgi edinmesine yardımcı olan faydalı bir GuardianAI asistanısınız: Guardian Cloud, GuardianOps ve Referans Programı.",
    placeholder: "Sorunuzu sorun...",
  },

  // SPANISH (es)
  es: {
    postFormMessage: (name: string) => `¡Encantado de conocerte, ${name}! Gracias por proporcionar tu información. Ahora estoy listo para responder tus preguntas sobre nuestros productos. Puedes preguntarme sobre Guardian Cloud, GuardianOps o nuestro programa de referidos.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Ingeniero Jefe, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Ingeniero Jefe, Guardian Cloud",
        greeting: (name: string) => `¡Hola ${name}! Mi nombre es Oksana Vlasova, Ingeniero Jefe de Guardian Cloud. Guardian Cloud es un ecosistema inteligente que automatiza tareas rutinarias (registros, parches, actualizaciones), protege contra ciberataques en tiempo real y garantiza un uptime del 99,9%. Tus clientes siempre tienen acceso al servicio, mientras tú ahorras presupuesto y reputación. ¡Estoy lista para responder todas tus preguntas!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Especialista en GuardianOps",
        greeting: (name: string) => `¡Hola ${name}! Mi nombre es Li Wong. Soy especialista en GuardianOps — un asistente de IA para e-commerce. GuardianOps automatiza la logística, gestiona el almacén, analiza ganancias en tiempo real, se comunica con clientes y proveedores, monitorea el sistema y promociona productos en redes sociales. ¡Detén la fuga de pedidos y comienza a trabajar de manera más eficiente! Estoy lista para responder tus preguntas.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Gerente del programa de socios",
        greeting: (name: string) => `¡Buenos días ${name}! Encantada de verte. Mi nombre es Vlada Safonova, Gerente del programa de socios en Guardian AI. Nuestro programa de referidos está diseñado para administradores de sistemas, desarrolladores y especialistas en e-commerce. No te reemplazamos — ¡potenciamos tus capacidades! Libérate de las tareas rutinarias, amplía tu base de clientes y gana un porcentaje de las suscripciones de tus clientes. ¡Tus ingresos crecen con nuestro éxito!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Cambiar a especialista",
      watchVideos: "Ver videos",
      learnTechnology: "Conocer la tecnología",
      startChat: "Iniciar chat",
      talkToSpecialist: "Hablar con especialista",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "¡Gracias por tu pregunta! Déjame ayudarte.",
    videoOffer: "¿Te gustaría ver videos sobre nuestros productos?",
    productSuggestion: (product: string) => `¡Excelente! Veo que estás interesado en ${product}. Déjame transferirte a nuestro especialista.`,
    postVideoFollowUp: "¿Ya has descubierto cuál de nuestros productos te interesa?",
    form: {
      firstName: "Nombre",
      lastName: "Apellido",
      country: "País",
      city: "Ciudad",
      state: "Estado/Región",
      businessSphere: "Sector empresarial",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finanzas",
        healthcare: "Salud",
        education: "Educación",
        retail: "Comercio minorista",
        manufacturing: "Manufactura",
        technology: "Tecnología",
        logistics: "Logística",
        other: "Otro"
      },
      otherSpherePlaceholder: "Especifica tu sector empresarial",
      companyName: "Nombre de la empresa",
      position: "Cargo",
      website: "Sitio web",
      email: "Email",
      phone: "Teléfono",
      consent: "Acepto el procesamiento de datos personales",
      continue: "Continuar"
    },
    systemInstruction: "Eres un asistente útil de GuardianAI que ayuda a los clientes a conocer nuestros productos: Guardian Cloud, GuardianOps y el programa de referidos.",
    placeholder: "Haz tu pregunta...",
  },

  // HINDI (in)
  in: {
    postFormMessage: (name: string) => `आपसे मिलकर खुशी हुई, ${name}! आपकी जानकारी प्रदान करने के लिए धन्यवाद। अब मैं हमारे उत्पादों के बारे में आपके प्रश्नों का उत्तर देने के लिए तैयार हूं। आप मुझसे Guardian Cloud, GuardianOps या हमारे रेफरल प्रोग्राम के बारे में पूछ सकते हैं।`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "मुख्य इंजीनियर, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "मुख्य इंजीनियर, Guardian Cloud",
        greeting: (name: string) => `नमस्ते ${name}! मेरा नाम Oksana Vlasova है, Guardian Cloud की मुख्य इंजीनियर। Guardian Cloud एक बुद्धिमान पारिस्थितिकी तंत्र है जो नियमित कार्यों (लॉग, पैच, अपडेट) को स्वचालित करता है, वास्तविक समय में साइबर हमलों से सुरक्षा करता है और 99.9% uptime की गारंटी देता है। आपके ग्राहकों को हमेशा सेवा तक पहुंच मिलती है, जबकि आप बजट और प्रतिष्ठा बचाते हैं। मैं आपके सभी प्रश्नों का उत्तर देने के लिए तैयार हूं!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "GuardianOps विशेषज्ञ",
        greeting: (name: string) => `नमस्कार ${name}! मेरा नाम Li Wong है। मैं GuardianOps विशेषज्ञ हूं — e-commerce के लिए AI सहायक। GuardianOps लॉजिस्टिक्स को स्वचालित करता है, गोदाम का प्रबंधन करता है, वास्तविक समय में लाभ का विश्लेषण करता है, ग्राहकों और आपूर्तिकर्ताओं के साथ संवाद करता है, सिस्टम की निगरानी करता है और सोशल मीडिया पर उत्पादों को बढ़ावा देता है। ऑर्डर लीकेज रोकें और अधिक कुशलता से काम करना शुरू करें! मैं आपके प्रश्नों का उत्तर देने के लिए तैयार हूं।`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "भागीदार कार्यक्रम प्रबंधक",
        greeting: (name: string) => `नमस्ते ${name}! आपको देखकर खुशी हुई। मेरा नाम Vlada Safonova है, Guardian AI में भागीदार कार्यक्रम प्रबंधक। हमारा रेफरल प्रोग्राम सिस्टम एडमिनिस्ट्रेटर, डेवलपर्स और e-commerce विशेषज्ञों के लिए डिज़ाइन किया गया है। हम आपको प्रतिस्थापित नहीं करते — हम आपकी क्षमताओं को बढ़ाते हैं! नियमित कार्यों से मुक्त हों, अपने क्लाइंट बेस का विस्तार करें और अपने ग्राहकों की सदस्यता से प्रतिशत कमाएं। आपकी आय हमारी सफलता के साथ बढ़ती है!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "विशेषज्ञ पर स्विच करें",
      watchVideos: "वीडियो देखें",
      learnTechnology: "तकनीक के बारे में जानें",
      startChat: "चैट शुरू करें",
      talkToSpecialist: "विशेषज्ञ से बात करें",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "आपके प्रश्न के लिए धन्यवाद! मुझे आपकी मदद करने दें।",
    videoOffer: "क्या आप हमारे उत्पादों के बारे में वीडियो देखना चाहेंगे?",
    productSuggestion: (product: string) => `बढ़िया! मैं देख रहा हूं कि आप ${product} में रुचि रखते हैं। मुझे आपको हमारे विशेषज्ञ के पास स्थानांतरित करने दें।`,
    postVideoFollowUp: "क्या आपने पहले ही समझ लिया है कि हमारे उत्पादों में से कौन सा आपको रुचि देता है?",
    form: {
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      country: "देश",
      city: "शहर",
      state: "राज्य/क्षेत्र",
      businessSphere: "व्यापार क्षेत्र",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "वित्त",
        healthcare: "स्वास्थ्य सेवा",
        education: "शिक्षा",
        retail: "खुदरा",
        manufacturing: "विनिर्माण",
        technology: "प्रौद्योगिकी",
        logistics: "लॉजिस्टिक्स",
        other: "अन्य"
      },
      otherSpherePlaceholder: "अपना व्यापार क्षेत्र निर्दिष्ट करें",
      companyName: "कंपनी का नाम",
      position: "पद",
      website: "वेबसाइट",
      email: "ईमेल",
      phone: "फोन",
      consent: "मैं व्यक्तिगत डेटा के प्रसंस्करण से सहमत हूं",
      continue: "जारी रखें"
    },
    systemInstruction: "आप एक उपयोगी GuardianAI सहायक हैं जो ग्राहकों को हमारे उत्पादों के बारे में जानने में मदद करते हैं: Guardian Cloud, GuardianOps, और रेफरल प्रोग्राम।",
    placeholder: "अपना प्रश्न पूछें...",
  },

  // GREEK (el)
  el: {
    postFormMessage: (name: string) => `Χαίρομαι που σας γνωρίζω, ${name}! Ευχαριστώ που παρείχατε τις πληροφορίες σας. Τώρα είμαι έτοιμος να απαντήσω στις ερωτήσεις σας σχετικά με τα προϊόντα μας. Μπορείτε να με ρωτήσετε για το Guardian Cloud, το GuardianOps ή το πρόγραμμα παραπομπών μας.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Αρχιμηχανικός, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Αρχιμηχανικός, Guardian Cloud",
        greeting: (name: string) => `Γεια σας ${name}! Με λένε Oksana Vlasova, Αρχιμηχανικός του Guardian Cloud. Το Guardian Cloud είναι ένα έξυπνο οικοσύστημα που αυτοματοποιεί τις συνήθεις εργασίες (αρχεία καταγραφής, ενημερώσεις, επιδιορθώσεις), προστατεύει από κυβερνοεπιθέσεις σε πραγματικό χρόνο και εγγυάται 99,9% uptime. Οι πελάτες σας έχουν πάντα πρόσβαση στην υπηρεσία, ενώ εσείς εξοικονομείτε προϋπολογισμό και φήμη. Είμαι έτοιμη να απαντήσω σε όλες τις ερωτήσεις σας!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Ειδικός GuardianOps",
        greeting: (name: string) => `Γεια σας ${name}! Με λένε Li Wong. Είμαι ειδικός GuardianOps — βοηθός AI για e-commerce. Το GuardianOps αυτοματοποιεί τη logistics, διαχειρίζεται την αποθήκη, αναλύει τα κέρδη σε πραγματικό χρόνο, επικοινωνεί με πελάτες και προμηθευτές, παρακολουθεί το σύστημα και προωθεί προϊόντα στα μέσα κοινωνικής δικτύωσης. Σταματήστε τη διαρροή παραγγελιών και αρχίστε να εργάζεστε πιο αποτελεσματικά! Είμαι έτοιμη να απαντήσω στις ερωτήσεις σας.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Διευθυντής προγράμματος συνεργατών",
        greeting: (name: string) => `Καλημέρα ${name}! Χαίρομαι που σας βλέπω. Με λένε Vlada Safonova, Διευθυντής προγράμματος συνεργατών στο Guardian AI. Το πρόγραμμα παραπομπών μας είναι σχεδιασμένο για διαχειριστές συστημάτων, προγραμματιστές και ειδικούς e-commerce. Δεν σας αντικαθιστούμε — ενισχύουμε τις δυνατότητές σας! Απελευθερωθείτε από τις συνήθεις εργασίες, επεκτείνετε τη βάση πελατών σας και κερδίστε ποσοστό από τις συνδρομές των πελατών σας. Το εισόδημά σας αυξάνεται με την επιτυχία μας!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Μετάβαση σε ειδικό",
      watchVideos: "Παρακολούθηση βίντεο",
      learnTechnology: "Μάθετε για την τεχνολογία",
      startChat: "Έναρξη συνομιλίας",
      talkToSpecialist: "Μιλήστε με ειδικό",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Ευχαριστώ για την ερώτησή σας! Επιτρέψτε μου να σας βοηθήσω.",
    videoOffer: "Θα θέλατε να παρακολουθήσετε βίντεο σχετικά με τα προϊόντα μας;",
    productSuggestion: (product: string) => `Εξαιρετικά! Βλέπω ότι ενδιαφέρεστε για ${product}. Επιτρέψτε μου να σας μεταφέρω στον ειδικό μας.`,
    postVideoFollowUp: "Έχετε ήδη καταλάβει ποιο από τα προϊόντα μας σας ενδιαφέρει;",
    form: {
      firstName: "Όνομα",
      lastName: "Επώνυμο",
      country: "Χώρα",
      city: "Πόλη",
      state: "Πολιτεία/Περιοχή",
      businessSphere: "Επιχειρηματικός τομέας",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Χρηματοοικονομικά",
        healthcare: "Υγειονομική περίθαλψη",
        education: "Εκπαίδευση",
        retail: "Λιανική πώληση",
        manufacturing: "Κατασκευή",
        technology: "Τεχνολογία",
        logistics: "Logistics",
        other: "Άλλο"
      },
      otherSpherePlaceholder: "Προσδιορίστε τον επιχειρηματικό σας τομέα",
      companyName: "Όνομα εταιρείας",
      position: "Θέση",
      website: "Ιστοσελίδα",
      email: "Email",
      phone: "Τηλέφωνο",
      consent: "Συμφωνώ με την επεξεργασία προσωπικών δεδομένων",
      continue: "Συνέχεια"
    },
    systemInstruction: "Είστε ένας χρήσιμος βοηθός GuardianAI που βοηθά τους πελάτες να μάθουν για τα προϊόντα μας: Guardian Cloud, GuardianOps και το πρόγραμμα παραπομπών.",
    placeholder: "Κάντε την ερώτησή σας...",
  },

  // CZECH (cs)
  cs: {
    postFormMessage: (name: string) => `Těší mě, že vás poznávám, ${name}! Děkuji za poskytnutí vašich informací. Nyní jsem připraven odpovědět na vaše otázky o našich produktech. Můžete se mě zeptat na Guardian Cloud, GuardianOps nebo náš doporučovací program.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Hlavní inženýr, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Hlavní inženýr, Guardian Cloud",
        greeting: (name: string) => `Ahoj ${name}! Jmenuji se Oksana Vlasova, hlavní inženýr Guardian Cloud. Guardian Cloud je inteligentní ekosystém, který automatizuje rutinní úkoly (logy, opravy, aktualizace), chrání před kybernetickými útoky v reálném čase a zaručuje 99,9% uptime. Vaši klienti mají vždy přístup ke službě, zatímco vy šetříte rozpočet a pověst. Jsem připravena odpovědět na všechny vaše otázky!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Specialista GuardianOps",
        greeting: (name: string) => `Dobrý den ${name}! Jmenuji se Li Wong. Jsem specialista GuardianOps — AI asistent pro e-commerce. GuardianOps automatizuje logistiku, spravuje sklad, analyzuje zisky v reálném čase, komunikuje se zákazníky a dodavateli, monitoruje systém a propaguje produkty na sociálních sítích. Zastavte únik objednávek a začněte pracovat efektivněji! Jsem připravena odpovědět na vaše otázky.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Manažer partnerského programu",
        greeting: (name: string) => `Dobrý den ${name}! Těší mě, že vás vidím. Jmenuji se Vlada Safonova, manažer partnerského programu v Guardian AI. Náš doporučovací program je určen pro správce systémů, vývojáře a specialisty na e-commerce. Nenahrazujeme vás — posilujeme vaše schopnosti! Osvoboďte se od rutinních úkolů, rozšiřte svou klientskou základnu a získávejte procento z předplatného vašich klientů. Váš příjem roste s naším úspěchem!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Přepnout na specialistu",
      watchVideos: "Sledovat videa",
      learnTechnology: "Zjistit o technologii",
      startChat: "Začít chat",
      talkToSpecialist: "Mluvit se specialistou",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Děkuji za vaši otázku! Dovolte mi vám pomoci.",
    videoOffer: "Chtěli byste sledovat videa o našich produktech?",
    productSuggestion: (product: string) => `Skvělé! Vidím, že vás zajímá ${product}. Dovolte mi vás převést k našemu specialistovi.`,
    postVideoFollowUp: "Už jste pochopili, který z našich produktů vás zajímá?",
    form: {
      firstName: "Jméno",
      lastName: "Příjmení",
      country: "Země",
      city: "Město",
      state: "Stát/Region",
      businessSphere: "Obchodní oblast",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Finance",
        healthcare: "Zdravotnictví",
        education: "Vzdělávání",
        retail: "Maloobchod",
        manufacturing: "Výroba",
        technology: "Technologie",
        logistics: "Logistika",
        other: "Jiné"
      },
      otherSpherePlaceholder: "Upřesněte svou obchodní oblast",
      companyName: "Název společnosti",
      position: "Pozice",
      website: "Webová stránka",
      email: "Email",
      phone: "Telefon",
      consent: "Souhlasím se zpracováním osobních údajů",
      continue: "Pokračovat"
    },
    systemInstruction: "Jste užitečný asistent GuardianAI, který pomáhá klientům dozvědět se o našich produktech: Guardian Cloud, GuardianOps a doporučovací program.",
    placeholder: "Položte svou otázku...",
  },

  // BULGARIAN (bg)
  bg: {
    postFormMessage: (name: string) => `Приятно ми е да се запознаем, ${name}! Благодаря ви, че предоставихте информацията си. Сега съм готов да отговоря на вашите въпроси относно нашите продукти. Можете да ме попитате за Guardian Cloud, GuardianOps или нашата реферална програма.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Главен инженер, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Главен инженер, Guardian Cloud",
        greeting: (name: string) => `Здравейте ${name}! Казвам се Oksana Vlasova, главен инженер на Guardian Cloud. Guardian Cloud е интелигентна екосистема, която автоматизира рутинни задачи (логове, кръпки, актуализации), защитава от кибератаки в реално време и гарантира 99,9% uptime. Вашите клиенти винаги имат достъп до услугата, докато вие спестявате бюджет и репутация. Готова съм да отговоря на всички ваши въпроси!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Специалист GuardianOps",
        greeting: (name: string) => `Здравейте ${name}! Казвам се Li Wong. Аз съм специалист GuardianOps — AI асистент за e-commerce. GuardianOps автоматизира логистиката, управлява склада, анализира печалбите в реално време, комуникира с клиенти и доставчици, наблюдава системата и промотира продукти в социалните мрежи. Спрете изтичането на поръчки и започнете да работите по-ефективно! Готова съм да отговоря на вашите въпроси.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Мениджър на партньорската програма",
        greeting: (name: string) => `Добър ден ${name}! Радвам се да ви видя. Казвам се Vlada Safonova, мениджър на партньорската програма в Guardian AI. Нашата реферална програма е предназначена за системни администратори, разработчици и специалисти по e-commerce. Ние не ви заменяме — засилваме възможностите ви! Освободете се от рутинни задачи, разширете клиентската си база и печелете процент от абонаментите на вашите клиенти. Вашият доход расте с нашия успех!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Превключи към специалист",
      watchVideos: "Гледай видеа",
      learnTechnology: "Научи за технологията",
      startChat: "Започни чат",
      talkToSpecialist: "Говори със специалист",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Благодаря ви за въпроса! Позволете ми да ви помогна.",
    videoOffer: "Бихте ли искали да гледате видеа за нашите продукти?",
    productSuggestion: (product: string) => `Страхотно! Виждам, че се интересувате от ${product}. Позволете ми да ви прехвърля към нашия специалист.`,
    postVideoFollowUp: "Вече разбрахте ли кой от нашите продукти ви интересува?",
    form: {
      firstName: "Име",
      lastName: "Фамилия",
      country: "Държава",
      city: "Град",
      state: "Щат/Регион",
      businessSphere: "Бизнес сфера",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Финанси",
        healthcare: "Здравеопазване",
        education: "Образование",
        retail: "Търговия на дребно",
        manufacturing: "Производство",
        technology: "Технологии",
        logistics: "Логистика",
        other: "Друго"
      },
      otherSpherePlaceholder: "Посочете вашата бизнес сфера",
      companyName: "Име на компанията",
      position: "Длъжност",
      website: "Уебсайт",
      email: "Имейл",
      phone: "Телефон",
      consent: "Съгласен съм с обработката на лични данни",
      continue: "Продължи"
    },
    systemInstruction: "Вие сте полезен асистент на GuardianAI, който помага на клиентите да научат за нашите продукти: Guardian Cloud, GuardianOps и реферална програма.",
    placeholder: "Задайте вашия въпрос...",
  },

  // SERBIAN (sr)
  sr: {
    postFormMessage: (name: string) => `Драго ми је што смо се упознали, ${name}! Хвала што сте доставили своје информације. Сада сам спреман да одговорим на ваша питања о нашим производима. Можете ме питати о Guardian Cloud, GuardianOps или нашем програму препоруке.`,
    specialists: {
      ceo: {
        name: "Oksana Vlasova",
        title: "Главни инжењер, GuardianAI"
      },
      cloud: {
        name: "Oksana Vlasova",
        title: "Главни инжењер, Guardian Cloud",
        greeting: (name: string) => `Здраво ${name}! Зовем се Oksana Vlasova, главни инжењер Guardian Cloud. Guardian Cloud је интелигентни екосистем који автоматизује рутинске задатке (логове, закрпе, ажурирања), штити од сајбер напада у реалном времену и гарантује 99,9% uptime. Ваши клијенти увек имају приступ услузи, док ви штедите буџет и репутацију. Спремна сам да одговорим на сва ваша питања!`,
        faq: []
      },
      ops: {
        name: "Li Wong",
        title: "Специјалиста GuardianOps",
        greeting: (name: string) => `Здраво ${name}! Зовем се Li Wong. Ја сам специјалиста GuardianOps — AI асистент за e-commerce. GuardianOps автоматизује логистику, управља складиштем, анализира профит у реалном времену, комуницира са клијентима и добављачима, надгледа систем и промовише производе на друштвеним мрежама. Зауставите цурење налога и почните да радите ефикасније! Спремна сам да одговорим на ваша питања.`,
        faq: []
      },
      referral: {
        name: "Vlada Safonova",
        title: "Менаџер партнерског програма",
        greeting: (name: string) => `Добар дан ${name}! Драго ми је да вас видим. Зовем се Vlada Safonova, менаџер партнерског програма у Guardian AI. Наш програм препоруке је дизајниран за системске администраторе, програмере и специјалисте за e-commerce. Не замењујемо вас — појачавамо ваше способности! Ослободите се рутинских задатака, проширите базу клијената и зарађујте проценат од претплата ваших клијената. Ваш приход расте са нашим успехом!`,
        faq: []
      }
    },
    buttons: {
      switchToSpecialist: "Пређи на специјалисту",
      watchVideos: "Погледај видео снимке",
      learnTechnology: "Сазнај о технологији",
      startChat: "Почни ћаскање",
      talkToSpecialist: "Разговарај са специјалистом",
      selectGuardianCloud: "Guardian Cloud",
      selectGuardianOps: "GuardianOps",
      selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Хвала на вашем питању! Дозволите ми да вам помогнем.",
    videoOffer: "Да ли бисте желели да погледате видео снимке о нашим производима?",
    productSuggestion: (product: string) => `Одлично! Видим да сте заинтересовани за ${product}. Дозволите ми да вас пребацим на нашег специјалисту.`,
    postVideoFollowUp: "Да ли сте већ схватили који од наших производа вас интересује?",
    form: {
      firstName: "Име",
      lastName: "Презиме",
      country: "Држава",
      city: "Град",
      state: "Држава/Регион",
      businessSphere: "Пословна сфера",
      businessSphereOptions: {
        ecommerce: "E-commerce",
        finance: "Финансије",
        healthcare: "Здравство",
        education: "Образовање",
        retail: "Малопродаја",
        manufacturing: "Производња",
        technology: "Технологија",
        logistics: "Логистика",
        other: "Друго"
      },
      otherSpherePlaceholder: "Наведите вашу пословну сферу",
      companyName: "Назив компаније",
      position: "Позиција",
      website: "Веб сајт",
      email: "Email",
      phone: "Телефон",
      consent: "Слажем се са обрадом личних података",
      continue: "Настави"
    },
    systemInstruction: "Ви сте корисни асистент GuardianAI који помаже клијентима да сазнају о нашим производима: Guardian Cloud, GuardianOps и програм препоруке.",
    placeholder: "Поставите своје питање...",
  },
};
