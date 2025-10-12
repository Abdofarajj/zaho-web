'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initI18n, Language } from '@/i18n';
import i18n from '@/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await initI18n(Language.EN); // or detect language
      setIsInitialized(true);
    };
    initialize();
  }, []);

  if (!isInitialized) {
    return <div></div>; // or null
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}