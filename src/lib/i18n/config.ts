export const locales = ['ru', 'en', 'zh', 'fr', 'de', 'es', 'it', 'ja', 'uk', 'sr', 'pt', 'hi', 'tr', 'ar', 'el'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  ru: 'Русский',
  en: 'English',
  zh: '中文',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  ja: '日本語',
  uk: 'Українська',
  sr: 'Српски',
  pt: 'Português',
  hi: 'हिन्दी',
  tr: 'Türkçe',
  ar: 'العربية',
  el: 'Ελληνικά',
};

export const rtlLocales: readonly Locale[] = ['ar'];
