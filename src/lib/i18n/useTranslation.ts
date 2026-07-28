'use client';

import { useState, useEffect } from 'react';
import { useLocale } from './LocaleContext';
import { defaultLocale } from './config';

type TranslationKey = string;

export function useTranslation() {
  const { locale } = useLocale(); // Берем locale из контекста
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`./locales/${locale}.json`);
        setTranslations(translations.default);
        setLoading(false);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        setLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: TranslationKey): any => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    // ИСПРАВЛЕНО: Возвращаем значение как есть (строку, массив, объект)
    return value !== undefined ? value : key;
  };

  return { t, loading, locale };
}