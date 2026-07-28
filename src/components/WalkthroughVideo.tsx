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
