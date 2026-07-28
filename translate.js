const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = 'AIzaSyA0izMUFsblU0-iUEKiyP4v3GmVbl91R3o';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Russian source texts
const russianTexts = {
  postFormMessage: (name) => `Приятно познакомиться, ${name}! Спасибо за предоставленную информацию. Теперь я готова ответить на ваши вопросы о наших продуктах. Вы можете спросить меня о Guardian Cloud, GuardianOps или нашей реферальной программе.`,
  specialists: {
    ceo: {
      name: "Оксана Власова",
      title: "Главный инженер, GuardianAI",
    },
    cloud: {
      name: "Оксана Власова",
      title: "Главный инженер, Guardian Cloud",
      greeting: (name) => `Привет, ${name}! Меня зовут Оксана Власова, главный инженер Guardian Cloud. Guardian Cloud — это интеллектуальная экосистема, которая автоматизирует рутинные задачи (логи, патчи, обновления), защищает от кибератак в реальном времени и гарантирует 99.9% uptime. Ваши клиенты всегда получают доступ к сервису, а вы — сохранённый бюджет и репутацию. Готова ответить на все ваши вопросы!`,
    },
    ops: {
      name: "Ли Вонг",
      title: "Специалист по GuardianOps",
      greeting: (name) => `Здравствуйте, ${name}! Меня зовут Ли Вонг. Я специалист по GuardianOps — нейросети-помощнику для e-commerce. GuardianOps автоматизирует логистику, управляет складом, анализирует прибыль в реальном времени, общается с клиентами и поставщиками, мониторит систему и продвигает товары в соцсетях. Остановите утечку заказов и начните работать эффективнее! Готова ответить на ваши вопросы.`,
    },
    referral: {
      name: "Влада Сафонова",
      title: "Менеджер партнерской программы",
      greeting: (name) => `Добрый день, ${name}! Рада вас видеть. Меня зовут Влада Сафонова, менеджер партнерской программы Guardian AI. Наша реферальная программа создана для системных администраторов, разработчиков и специалистов по e-commerce. Мы не заменяем вас — мы усиливаем ваши возможности! Освободитесь от рутины, расширьте клиентскую базу и получайте процент от подписки ваших клиентов. Ваш доход растёт вместе с нашим успехом!`,
    }
  },
  buttons: {
    switchToSpecialist: "Переключить на специалиста",
    watchVideos: "Посмотреть видео",
    learnTechnology: "Узнать о технологии",
    startChat: "Перейти к общению",
    talkToSpecialist: "Говорить со специалистом",
    selectGuardianCloud: "Guardian Cloud",
    selectGuardianOps: "GuardianOps",
    selectReferralProgram: "Referral Program",
  },
  generalQueryResponse: "Спасибо за ваш вопрос! Позвольте мне помочь вам.",
  videoOffer: "Хотите ли вы посмотреть видео о наших продуктах?",
  productSuggestion: (product) => `Отлично! Я вижу, что вас интересует ${product}. Позвольте передать вас нашему специалисту.`,
  postVideoFollowUp: "Вы уже поняли, какой из наших продуктов вас заинтересовал?",
  form: {
    firstName: "Имя",
    lastName: "Фамилия",
    country: "Страна",
    city: "Город",
    state: "Штат/Область",
    businessSphere: "Сфера бизнеса",
    businessSphereOptions: {
      ecommerce: "E-commerce",
      finance: "Финансы",
      healthcare: "Здравоохранение",
      education: "Образование",
      retail: "Розничная торговля",
      manufacturing: "Производство",
      technology: "Технологии",
      logistics: "Логистика",
      other: "Другое"
    },
    otherSpherePlaceholder: "Укажите вашу сферу деятельности",
    companyName: "Название компании",
    position: "Должность",
    website: "Веб-сайт",
    email: "Email",
    phone: "Телефон",
    consent: "Я согласен на обработку персональных данных",
    continue: "Продолжить"
  },
  systemInstruction: "Вы - полезный ассистент GuardianAI, который помогает клиентам узнать о наших продуктах: Guardian Cloud, GuardianOps и Реферальной программе.",
  placeholder: "Задайте свой вопрос...",
};

const languages = {
  en: 'English',
  cn: 'Chinese (Simplified)',
  fr: 'French',
  de: 'German',
  pl: 'Polish',
  it: 'Italian',
  ua: 'Ukrainian',
  tr: 'Turkish',
  es: 'Spanish',
  in: 'Hindi',
  el: 'Greek',
  cs: 'Czech',
  bg: 'Bulgarian',
  sr: 'Serbian'
};

async function translateText(text, targetLanguage, context = '') {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `You are a professional translator. Translate the following Russian text to ${targetLanguage}.

IMPORTANT RULES:
- Maintain a professional, friendly tone
- Keep technical terms in English: Guardian Cloud, GuardianOps, e-commerce, uptime, API, SDK, etc.
- Keep proper names as is: Oksana Vlasova, Li Wong, Vlada Safonova
- Preserve any template variables like \${name} or \${product} exactly as they are
- If text contains function syntax like (name: string) =>, preserve it exactly
- Only translate the actual text content, not the code structure

${context ? `Context: ${context}\n` : ''}
Russian text to translate:
${text}

Provide ONLY the translated text, no explanations.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text().trim();
}

async function translateLanguage(langCode, langName) {
  console.log(`\n=== Translating to ${langName} (${langCode}) ===\n`);

  const translations = {};

  // 1. postFormMessage template
  console.log('Translating postFormMessage...');
  const postFormTemplate = await translateText(
    'Приятно познакомиться, {name}! Спасибо за предоставленную информацию. Теперь я готова ответить на ваши вопросы о наших продуктах. Вы можете спросить меня о Guardian Cloud, GuardianOps или нашей реферальной программе.',
    langName,
    'Greeting message after user fills the form. {name} will be replaced with user name.'
  );

  // 2. Specialists - CEO title
  console.log('Translating CEO title...');
  const ceoTitle = await translateText('Главный инженер, GuardianAI', langName, 'Job title for CEO');

  // 3. Specialists - Cloud title and greeting
  console.log('Translating Cloud specialist...');
  const cloudTitle = await translateText('Главный инженер, Guardian Cloud', langName, 'Job title');
  const cloudGreeting = await translateText(
    'Привет, {name}! Меня зовут Оксана Власова, главный инженер Guardian Cloud. Guardian Cloud — это интеллектуальная экосистема, которая автоматизирует рутинные задачи (логи, патчи, обновления), защищает от кибератак в реальном времени и гарантирует 99.9% uptime. Ваши клиенты всегда получают доступ к сервису, а вы — сохранённый бюджет и репутацию. Готова ответить на все ваши вопросы!',
    langName,
    'Greeting from Cloud specialist. {name} will be replaced with user name. Keep technical terms like "uptime" in English.'
  );

  // 4. Specialists - Ops title and greeting
  console.log('Translating Ops specialist...');
  const opsTitle = await translateText('Специалист по GuardianOps', langName, 'Job title');
  const opsGreeting = await translateText(
    'Здравствуйте, {name}! Меня зовут Ли Вонг. Я специалист по GuardianOps — нейросети-помощнику для e-commerce. GuardianOps автоматизирует логистику, управляет складом, анализирует прибыль в реальном времени, общается с клиентами и поставщиками, мониторит систему и продвигает товары в соцсетях. Остановите утечку заказов и начните работать эффективнее! Готова ответить на ваши вопросы.',
    langName,
    'Greeting from Ops specialist. {name} will be replaced with user name.'
  );

  // 5. Specialists - Referral title and greeting
  console.log('Translating Referral specialist...');
  const referralTitle = await translateText('Менеджер партнерской программы', langName, 'Job title');
  const referralGreeting = await translateText(
    'Добрый день, {name}! Рада вас видеть. Меня зовут Влада Сафонова, менеджер партнерской программы Guardian AI. Наша реферальная программа создана для системных администраторов, разработчиков и специалистов по e-commerce. Мы не заменяем вас — мы усиливаем ваши возможности! Освободитесь от рутины, расширьте клиентскую базу и получайте процент от подписки ваших клиентов. Ваш доход растёт вместе с нашим успехом!',
    langName,
    'Greeting from Referral program manager. {name} will be replaced with user name.'
  );

  // 6. Buttons
  console.log('Translating buttons...');
  const switchToSpecialist = await translateText('Переключить на специалиста', langName, 'Button text');
  const watchVideos = await translateText('Посмотреть видео', langName, 'Button text');
  const learnTechnology = await translateText('Узнать о технологии', langName, 'Button text');
  const startChat = await translateText('Перейти к общению', langName, 'Button text');
  const talkToSpecialist = await translateText('Говорить со специалистом', langName, 'Button text');

  // 7. General responses
  console.log('Translating general responses...');
  const generalQueryResponse = await translateText('Спасибо за ваш вопрос! Позвольте мне помочь вам.', langName);
  const videoOffer = await translateText('Хотите ли вы посмотреть видео о наших продуктах?', langName);
  const productSuggestionTemplate = await translateText(
    'Отлично! Я вижу, что вас интересует {product}. Позвольте передать вас нашему специалисту.',
    langName,
    '{product} will be replaced with product name'
  );
  const postVideoFollowUp = await translateText('Вы уже поняли, какой из наших продуктов вас заинтересовал?', langName);

  // 8. Form fields
  console.log('Translating form fields...');
  const firstName = await translateText('Имя', langName, 'Form field label');
  const lastName = await translateText('Фамилия', langName, 'Form field label');
  const country = await translateText('Страна', langName, 'Form field label');
  const city = await translateText('Город', langName, 'Form field label');
  const state = await translateText('Штат/Область', langName, 'Form field label');
  const businessSphere = await translateText('Сфера бизнеса', langName, 'Form field label');

  // Business sphere options
  const finance = await translateText('Финансы', langName);
  const healthcare = await translateText('Здравоохранение', langName);
  const education = await translateText('Образование', langName);
  const retail = await translateText('Розничная торговля', langName);
  const manufacturing = await translateText('Производство', langName);
  const technology = await translateText('Технологии', langName);
  const logistics = await translateText('Логистика', langName);
  const other = await translateText('Другое', langName);

  const otherSpherePlaceholder = await translateText('Укажите вашу сферу деятельности', langName, 'Placeholder text');
  const companyName = await translateText('Название компании', langName, 'Form field label');
  const position = await translateText('Должность', langName, 'Form field label');
  const website = await translateText('Веб-сайт', langName, 'Form field label');
  const consent = await translateText('Я согласен на обработку персональных данных', langName, 'Checkbox label');
  const continueBtn = await translateText('Продолжить', langName, 'Button text');

  // 9. System instruction and placeholder
  console.log('Translating system texts...');
  const systemInstruction = await translateText(
    'Вы - полезный ассистент GuardianAI, который помогает клиентам узнать о наших продуктах: Guardian Cloud, GuardianOps и Реферальной программе.',
    langName,
    'System instruction for the chatbot AI'
  );
  const placeholder = await translateText('Задайте свой вопрос...', langName, 'Input placeholder text');

  // Compile result
  return {
    langCode,
    langName,
    postFormMessage: postFormTemplate.replace('{name}', '${name}'),
    specialists: {
      ceo: {
        title: ceoTitle
      },
      cloud: {
        title: cloudTitle,
        greeting: cloudGreeting.replace('{name}', '${name}')
      },
      ops: {
        title: opsTitle,
        greeting: opsGreeting.replace('{name}', '${name}')
      },
      referral: {
        title: referralTitle,
        greeting: referralGreeting.replace('{name}', '${name}')
      }
    },
    buttons: {
      switchToSpecialist,
      watchVideos,
      learnTechnology,
      startChat,
      talkToSpecialist
    },
    generalQueryResponse,
    videoOffer,
    productSuggestion: productSuggestionTemplate.replace('{product}', '${product}'),
    postVideoFollowUp,
    form: {
      firstName,
      lastName,
      country,
      city,
      state,
      businessSphere,
      businessSphereOptions: {
        finance,
        healthcare,
        education,
        retail,
        manufacturing,
        technology,
        logistics,
        other
      },
      otherSpherePlaceholder,
      companyName,
      position,
      website,
      consent,
      continue: continueBtn
    },
    systemInstruction,
    placeholder
  };
}

async function main() {
  const targetLang = process.argv[2];

  if (!targetLang || !languages[targetLang]) {
    console.log('Usage: node translate.js <lang_code>');
    console.log('Available language codes:', Object.keys(languages).join(', '));
    process.exit(1);
  }

  const result = await translateLanguage(targetLang, languages[targetLang]);

  // Output as JSON
  console.log('\n\n=== TRANSLATION RESULT ===\n');
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
