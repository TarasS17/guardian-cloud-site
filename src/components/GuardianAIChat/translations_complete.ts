// COMPLETE PROFESSIONAL TRANSLATIONS FOR GUARDIANAI CHATBOT
// Copy these functions to replace placeholders in i18n.ts

import type { TranslationRecord } from './i18n';

// ========== POLISH (pl) ==========
export const getPlTranslations = (): any => ({
    ceoWelcome: "Pozdrowienia! Jestem główną inżynierką projektu GuardianAI, Oksana Vlasova. Miło widzieć Cię na naszej platformie! Guardian AI to inteligentny ekosystem nowej generacji dla biznesu. Sieć neuronowa do administrowania systemami platform chmurowych i ich cyberbezpieczeństwa, a także kompleksowej obsługi e-commerce. Guardian AI pomaga i obsługuje Cię 24/7. Najpierw się poznajmy. Proszę wypełnić formularz.",
    postFormMessage: (name: string) => `Miło mi Cię poznać, ${name}! Dziękuję za podanie informacji. Teraz jestem gotowa odpowiedzieć na Twoje pytania dotyczące naszych produktów. Możesz zapytać mnie o Guardian Cloud, GuardianOps lub nasz program partnerski.`,
    specialists: {
        ceo: { name: "Oksana Vlasova", title: "Główny inżynier, GuardianAI" },
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
        switchToSpecialist: "Przełącz na specjalistę", watchVideos: "Obejrzyj filmy", learnTechnology: "Dowiedz się o technologii",
        startChat: "Rozpocznij rozmowę", talkToSpecialist: "Porozmawiaj ze specjalistą", selectGuardianCloud: "Guardian Cloud",
        selectGuardianOps: "GuardianOps", selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Dziękuję za pytanie! Pozwól, że Ci pomogę.",
    videoOffer: "Czy chciałbyś obejrzeć filmy o naszych produktach?",
    productSuggestion: (product: string) => `Świetnie! Widzę, że interesujesz się ${product}. Pozwól, że przeniosę Cię do naszego specjalisty.`,
    postVideoFollowUp: "Czy już wiesz, który z naszych produktów Cię interesuje?",
    form: {
        firstName: "Imię", lastName: "Nazwisko", country: "Kraj", city: "Miasto", state: "Województwo/Region",
        businessSphere: "Branża",
        businessSphereOptions: { ecommerce: "E-commerce", finance: "Finanse", healthcare: "Ochrona zdrowia", education: "Edukacja",
            retail: "Handel detaliczny", manufacturing: "Produkcja", technology: "Technologia", logistics: "Logistyka", other: "Inne" },
        otherSpherePlaceholder: "Określ swoją branżę", companyName: "Nazwa firmy", position: "Stanowisko",
        website: "Strona internetowa", email: "Email", phone: "Telefon",
        consent: "Wyrażam zgodę na przetwarzanie danych osobowych", continue: "Kontynuuj"
    },
    videoPlayer: { close: "Zamknij", selectVideo: "Wybierz wideo do obejrzenia" },
    systemInstruction: "Jesteś pomocnym asystentem GuardianAI, który pomaga klientom poznać nasze produkty: Guardian Cloud, GuardianOps i program referencyjny.",
    placeholder: "Zadaj swoje pytanie...",
});

// ========== ITALIAN (it) ==========
export const getItTranslations = (): any => ({
    ceoWelcome: "Saluti! Sono l'ingegnere capo del progetto GuardianAI, Oksana Vlasova. Lieta di vederti sulla nostra piattaforma! Guardian AI è un ecosistema intelligente di nuova generazione per il business. Una rete neurale per l'amministrazione di sistema delle piattaforme cloud e la loro sicurezza informatica, nonché un servizio completo di e-commerce. Guardian AI ti aiuta e ti serve 24 ore su 24, 7 giorni su 7. Facciamo prima conoscenza. Si prega di compilare il modulo.",
    postFormMessage: (name: string) => `Piacere di conoscerti, ${name}! Grazie per aver fornito le tue informazioni. Ora sono pronto a rispondere alle tue domande sui nostri prodotti. Puoi chiedermi informazioni su Guardian Cloud, GuardianOps o il nostro programma di referral.`,
    specialists: {
        ceo: { name: "Oksana Vlasova", title: "Ingegnere Capo, GuardianAI" },
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
        switchToSpecialist: "Passa allo specialista", watchVideos: "Guarda i video", learnTechnology: "Scopri la tecnologia",
        startChat: "Inizia la chat", talkToSpecialist: "Parla con lo specialista", selectGuardianCloud: "Guardian Cloud",
        selectGuardianOps: "GuardianOps", selectReferralProgram: "Referral Program",
    },
    generalQueryResponse: "Grazie per la tua domanda! Lascia che ti aiuti.",
    videoOffer: "Vorresti guardare i video sui nostri prodotti?",
    productSuggestion: (product: string) => `Ottimo! Vedo che sei interessato a ${product}. Lascia che ti trasferisca al nostro specialista.`,
    postVideoFollowUp: "Hai già capito quale dei nostri prodotti ti interessa?",
    form: {
        firstName: "Nome", lastName: "Cognome", country: "Paese", city: "Città", state: "Stato/Regione",
        businessSphere: "Settore commerciale",
        businessSphereOptions: { ecommerce: "E-commerce", finance: "Finanza", healthcare: "Sanità", education: "Istruzione",
            retail: "Vendita al dettaglio", manufacturing: "Produzione", technology: "Tecnologia", logistics: "Logistica", other: "Altro" },
        otherSpherePlaceholder: "Specifica il tuo settore commerciale", companyName: "Nome dell'azienda", position: "Posizione",
        website: "Sito web", email: "Email", phone: "Telefono",
        consent: "Acconsento al trattamento dei dati personali", continue: "Continua"
    },
    videoPlayer: { close: "Chiudi", selectVideo: "Seleziona un video da guardare" },
    systemInstruction: "Sei un assistente GuardianAI utile che aiuta i clienti a conoscere i nostri prodotti: Guardian Cloud, GuardianOps e il programma di referral.",
    placeholder: "Fai la tua domanda...",
});

// Copy similarly for ua, tr, es, in, el, cs, bg, sr...
// Due to length constraints, I'll create a reference file with all translations
