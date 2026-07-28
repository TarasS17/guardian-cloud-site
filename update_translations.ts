// Script to generate full translation blocks for remaining languages
// This will be manually copied to i18n.ts

const polishTranslation = `// Polish translations
const getPlTranslations = (): TranslationRecord => ({
    ceoWelcome: "Pozdrowienia! Jestem główną inżynierką projektu GuardianAI, Oksana Vlasova. Miło widzieć Cię na naszej platformie! Guardian AI to inteligentny ekosystem nowej generacji dla biznesu. Sieć neuronowa do administrowania systemami platform chmurowych i ich cyberbezpieczeństwa, a także kompleksowej obsługi e-commerce. Guardian AI pomaga i obsługuje Cię 24/7. Najpierw się poznajmy. Proszę wypełnić formularz.",
    postFormMessage: (name: string) => \`Miło mi Cię poznać, \${name}! Dziękuję za podanie informacji. Teraz jestem gotowa odpowiedzieć na Twoje pytania dotyczące naszych produktów. Możesz zapytać mnie o Guardian Cloud, GuardianOps lub nasz program partnerski.\`,
    specialists: {
        ceo: {
            name: "Oksana Vlasova",
            title: "Główny inżynier, GuardianAI"
        },
        cloud: {
            name: "Oksana Vlasova",
            title: "Główny inżynier, Guardian Cloud",
            greeting: (name: string) => \`Cześć \${name}! Nazywam się Oksana Vlasova, główny inżynier Guardian Cloud. Guardian Cloud to inteligentny ekosystem, który automatyzuje rutynowe zadania (logi, łatki, aktualizacje), chroni przed cyberatakami w czasie rzeczywistym i gwarantuje 99,9% uptime. Twoi klienci zawsze mają dostęp do usługi, a Ty oszczędzasz budżet i reputację. Jestem gotowa odpowiedzieć na wszystkie Twoje pytania!\`,
            faq: []
        },
        ops: {
            name: "Li Wong",
            title: "Specjalista GuardianOps",
            greeting: (name: string) => \`Witam, \${name}! Nazywam się Li Wong. Jestem specjalistą GuardianOps — asystentem AI dla e-commerce. GuardianOps automatyzuje logistykę, zarządza magazynem, analizuje zyski w czasie rzeczywistym, komunikuje się z klientami i dostawcami, monitoruje system i promuje produkty w mediach społecznościowych. Zatrzymaj wyciek zamówień i zacznij pracować efektywniej! Jestem gotowa odpowiedzieć na Twoje pytania.\`,
            faq: []
        },
        referral: {
            name: "Vlada Safonova",
            title: "Menedżer programu partnerskiego",
            greeting: (name: string) => \`Dzień dobry, \${name}! Miło Cię widzieć. Nazywam się Vlada Safonova, menedżer programu partnerskiego w Guardian AI. Nasz program referencyjny jest przeznaczony dla administratorów systemów, programistów i specjalistów e-commerce. Nie zastępujemy Cię — wzmacniamy Twoje możliwości! Uwolnij się od rutynowych zadań, rozszerz bazę klientów i zarabiaj procent od subskrypcji swoich klientów. Twój dochód rośnie razem z naszym sukcesem!\`,
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
    productSuggestion: (product: string) => \`Świetnie! Widzę, że interesujesz się \${product}. Pozwól, że przeniosę Cię do naszego specjalisty.\`,
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
    videoPlayer: {
        close: "Zamknij",
        selectVideo: "Wybierz wideo do obejrzenia"
    },
    systemInstruction: "Jesteś pomocnym asystentem GuardianAI, który pomaga klientom poznać nasze produkty: Guardian Cloud, GuardianOps i program referencyjny.",
    placeholder: "Zadaj swoje pytanie...",
});`;

console.log('Polish translation ready for copy-paste');
console.log('Now update each language function in i18n.ts by replacing ...getEnTranslations() with full translations');
