'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

/*
 * Блок «Полный разбор платформы»: встроенный YouTube-плеер по языку сайта
 * плюс ссылка на техническое описание.
 *
 * Один компонент на все продуктовые страницы (Cloud, Sysadmin, ITDR, тарифы):
 * страница передаёт только идентификаторы видео и путь к документу.
 *
 * Язык: ru → русское видео, остальные → английское (китайского пока нет).
 * Плеер грузится через youtube-nocookie, поэтому куки не ставятся до нажатия.
 */

type Copy = { h: string; text: string; articleText: string; articleLabel: string };
type Variant = 'platform' | 'partner';

const COPY: Record<string, Copy> = {
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
    text: "Si vous voulez comprendre plus en détail comment tout cela fonctionne, nous avons préparé une visite complète de la plateforme. Découvrez comment elle fonctionne de l'intérieur.",
    articleText: "Et si vous voulez approfondir l'architecture, lisez la description technique de la plateforme.",
    articleLabel: 'Lire la description',
  },
  de: {
    h: 'Die vollständige Plattform-Tour',
    text: 'Wenn Sie im Detail verstehen möchten, wie das alles funktioniert, haben wir eine vollständige Tour durch die Plattform vorbereitet. Sehen Sie, wie sie von innen funktioniert.',
    articleText: 'Und wenn Sie tiefer in die Architektur eintauchen möchten, lesen Sie die technische Beschreibung der Plattform.',
    articleLabel: 'Beschreibung lesen',
  },
  es: {
    h: 'El recorrido completo de la plataforma',
    text: 'Si quiere entender con más detalle cómo funciona todo esto, hemos preparado un recorrido completo de la plataforma. Vea cómo funciona por dentro.',
    articleText: 'Y si quiere profundizar en la arquitectura, lea la descripción técnica de la plataforma.',
    articleLabel: 'Leer la descripción',
  },
  it: {
    h: 'La panoramica completa della piattaforma',
    text: "Se vuoi capire più in dettaglio come funziona tutto questo, abbiamo preparato una panoramica completa della piattaforma. Scopri come funziona dall'interno.",
    articleText: "E se vuoi approfondire l'architettura, leggi la descrizione tecnica della piattaforma.",
    articleLabel: 'Leggi la descrizione',
  },
  ja: {
    h: 'プラットフォーム完全解説',
    text: 'これがどのように機能するかをより詳しく理解したい場合のために、プラットフォームの完全な解説をご用意しました。内部からどのように動作するかをご覧ください。',
    articleText: 'アーキテクチャをさらに深く理解したい方は、プラットフォームの技術説明書をお読みください。',
    articleLabel: '説明を読む',
  },
  uk: {
    h: 'Повний розбір платформи',
    text: 'Якщо ви хочете детальніше дізнатися, як все це працює, ми підготували повний розбір платформи. Подивіться, як вона працює зсередини.',
    articleText: 'А якщо хочете глибше розібратися в архітектурі, прочитайте технічний опис платформи.',
    articleLabel: 'Читати опис',
  },
  sr: {
    h: 'Kompletan pregled platforme',
    text: 'Ako želite detaljnije da razumete kako sve ovo funkcioniše, pripremili smo kompletan pregled platforme. Pogledajte kako funkcioniše iznutra.',
    articleText: 'A ako želite dublje da se upoznate sa arhitekturom, pročitajte tehnički opis platforme.',
    articleLabel: 'Pročitajte opis',
  },
  pt: {
    h: 'A visão completa da plataforma',
    text: 'Se você quiser entender com mais detalhes como tudo isso funciona, preparamos uma visão completa da plataforma. Veja como ela funciona por dentro.',
    articleText: 'E se você quiser se aprofundar na arquitetura, leia a descrição técnica da plataforma.',
    articleLabel: 'Ler a descrição',
  },
  hi: {
    h: 'पूरे प्लेटफ़ॉर्म का विस्तृत विवरण',
    text: 'यदि आप विस्तार से समझना चाहते हैं कि यह सब कैसे काम करता है, तो हमने प्लेटफ़ॉर्म का एक पूरा वॉकथ्रू तैयार किया है। देखें कि यह अंदर से कैसे काम करता है।',
    articleText: 'और यदि आप आर्किटेक्चर को और गहराई से समझना चाहते हैं, तो प्लेटफ़ॉर्म का तकनीकी विवरण पढ़ें।',
    articleLabel: 'विवरण पढ़ें',
  },
  tr: {
    h: 'Platformun tam turu',
    text: 'Tüm bunların nasıl çalıştığını daha ayrıntılı olarak anlamak isterseniz, platformun tam bir turunu hazırladık. İçeriden nasıl çalıştığını görün.',
    articleText: 'Ve mimariye daha derinlemesine dalmak isterseniz, platformun teknik açıklamasını okuyun.',
    articleLabel: 'Açıklamayı okuyun',
  },
  ar: {
    h: 'الجولة الكاملة في المنصة',
    text: 'إذا كنت تريد فهم كيفية عمل كل هذا بمزيد من التفصيل، فقد أعددنا جولة كاملة في المنصة. شاهد كيف تعمل من الداخل.',
    articleText: 'وإذا أردت التعمق أكثر في البنية التقنية، فاقرأ الوصف التقني للمنصة.',
    articleLabel: 'اقرأ الوصف',
  },
  el: {
    h: 'Η πλήρης παρουσίαση της πλατφόρμας',
    text: 'Αν θέλετε να κατανοήσετε πιο αναλυτικά πώς λειτουργούν όλα αυτά, έχουμε ετοιμάσει μια πλήρη παρουσίαση της πλατφόρμας. Δείτε πώς λειτουργεί από μέσα.',
    articleText: 'Και αν θέλετε να εμβαθύνετε στην αρχιτεκτονική, διαβάστε την τεχνική περιγραφή της πλατφόρμας.',
    articleLabel: 'Διαβάστε την περιγραφή',
  },
};

const PARTNER_COPY: Record<string, Pick<Copy, 'h' | 'text'>> = {
  en: {
    h: 'A smooth transition',
    text: 'See what the transition looks like in practice: what changes for you, what changes for your client, and why it does not break the way you work today.',
  },
  ru: {
    h: 'Плавный переход',
    text: 'Посмотрите, как переход выглядит на практике: что меняется у вас, что у вашего клиента и почему это не ломает то, как вы работаете сегодня.',
  },
  zh: {
    h: '平穩過渡',
    text: '看看這個過渡在實務上是什麼樣子：您這邊有什麼變化、客戶那邊有什麼變化，以及為什麼它不會打亂您目前的工作方式。',
  },
  fr: {
    h: 'Une transition en douceur',
    text: 'Découvrez à quoi ressemble la transition dans la pratique : ce qui change pour vous, ce qui change pour votre client, et pourquoi cela ne perturbe pas votre façon de travailler actuelle.',
  },
  de: {
    h: 'Ein reibungsloser Übergang',
    text: 'Sehen Sie, wie der Übergang in der Praxis aussieht: was sich für Sie ändert, was sich für Ihren Kunden ändert, und warum er Ihre heutige Arbeitsweise nicht stört.',
  },
  es: {
    h: 'Una transición fluida',
    text: 'Vea cómo es la transición en la práctica: qué cambia para usted, qué cambia para su cliente, y por qué no interrumpe la forma en que trabaja hoy.',
  },
  it: {
    h: 'Una transizione senza intoppi',
    text: 'Scopri come si presenta la transizione nella pratica: cosa cambia per te, cosa cambia per il tuo cliente e perché non interrompe il modo in cui lavori oggi.',
  },
  ja: {
    h: 'スムーズな移行',
    text: '実際の移行がどのようなものかご覧ください：あなたにとって何が変わるか、クライアントにとって何が変わるか、そしてなぜそれが現在の働き方を壊さないのか。',
  },
  uk: {
    h: 'Плавний перехід',
    text: 'Подивіться, як перехід виглядає на практиці: що змінюється у вас, що у вашого клієнта, і чому це не ламає те, як ви працюєте сьогодні.',
  },
  sr: {
    h: 'Nesmetan prelazak',
    text: 'Pogledajte kako prelazak izgleda u praksi: šta se menja kod vas, šta se menja kod vašeg klijenta, i zašto to ne remeti način na koji danas radite.',
  },
  pt: {
    h: 'Uma transição tranquila',
    text: 'Veja como é a transição na prática: o que muda para você, o que muda para o seu cliente, e por que ela não atrapalha a forma como você trabalha hoje.',
  },
  hi: {
    h: 'एक सहज परिवर्तन',
    text: 'देखें कि व्यवहार में यह परिवर्तन कैसा दिखता है: आपके लिए क्या बदलता है, आपके क्लाइंट के लिए क्या बदलता है, और यह आपके आज के काम करने के तरीके को क्यों नहीं बिगाड़ता।',
  },
  tr: {
    h: 'Sorunsuz bir geçiş',
    text: 'Geçişin pratikte nasıl göründüğünü görün: sizin için ne değişiyor, müşteriniz için ne değişiyor ve bu neden bugün çalışma şeklinizi bozmuyor.',
  },
  ar: {
    h: 'انتقال سلس',
    text: 'شاهد كيف يبدو الانتقال في الواقع العملي: ماذا يتغير بالنسبة لك، وماذا يتغير بالنسبة لعميلك، ولماذا لا يُخلّ ذلك بطريقة عملك اليوم.',
  },
  el: {
    h: 'Μια ομαλή μετάβαση',
    text: 'Δείτε πώς μοιάζει η μετάβαση στην πράξη: τι αλλάζει για εσάς, τι αλλάζει για τον πελάτη σας, και γιατί δεν διαταράσσει τον τρόπο που δουλεύετε σήμερα.',
  },
};

export default function WalkthroughVideo({

  videoRu,
  videoEn,
  docHref,
  variant = 'platform',
}: {
  videoRu: string;
  videoEn: string;
  /** Путь к техническому описанию; если не передан, ссылка не рисуется. */
  docHref?: string;
  /** Набор текстов: разбор платформы или разбор партнёрской программы. */
  variant?: Variant;
}) {
  const { locale } = useLocale();
  const base = COPY[locale] ?? COPY.en;
  const c = variant === 'partner' ? { ...base, ...(PARTNER_COPY[locale] ?? PARTNER_COPY.en) } : base;
  const videoId = locale === 'ru' ? videoRu : videoEn;
  if (!videoId) return null;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/5 p-6 md:p-8">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">{c.h}</h2>
          <p className="mb-6 text-lg leading-relaxed text-white/85">{c.text}</p>

          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={c.h}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {docHref && (
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              {c.articleText}{' '}
              <a
                href={docHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
              >
                {c.articleLabel} →
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
