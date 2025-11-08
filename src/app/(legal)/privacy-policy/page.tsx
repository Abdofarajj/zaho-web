'use client';

import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t, i18n, ready } = useTranslation('common');
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  if (!ready) {
    return <div></div>;
  }

  return (
    <div className="mt-20 max-w-4xl mx-auto px-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl mb-8">{t('termsAndConditions.title')}</h1>
      <div className="prose prose-lg mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section1.title')}</h2>
          <p>{t('termsAndConditions.section1.intro')}</p>
          <p>{t('termsAndConditions.section1.company')}</p>
          <p>{t('termsAndConditions.section1.office')}</p>
          <p>{t('termsAndConditions.section1.tradeName')}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section2.title')}</h2>
          <p>{t('termsAndConditions.section2.intro')}</p>
          <ul className="list-disc list-inside ml-4">
            {(t('termsAndConditions.section2.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section3.title')}</h2>
          <p>{t('termsAndConditions.section3.intro')}</p>
          <ul className="list-disc list-inside ml-4">
            {(t('termsAndConditions.section3.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section4.title')}</h2>
          <p>{t('termsAndConditions.section4.intro')}</p>
          <ul className="list-disc list-inside ml-4">
            {(t('termsAndConditions.section4.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section5.title')}</h2>
          <p>{t('termsAndConditions.section5.intro')}</p>
          <ul className="list-disc list-inside ml-4">
            {(t('termsAndConditions.section5.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t('termsAndConditions.section5.note')}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section6.title')}</h2>
          <p>{t('termsAndConditions.section6.intro')}</p>
          <ul className="list-disc list-inside ml-4">
            {(t('termsAndConditions.section6.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t('termsAndConditions.section6.contact')}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section7.title')}</h2>
          <p>{t('termsAndConditions.section7.content')}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section8.title')}</h2>
          <p>{t('termsAndConditions.section8.content')}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section9.title')}</h2>
          <p>{t('termsAndConditions.section9.content')}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{t('termsAndConditions.section10.title')}</h2>
          <p>{t('termsAndConditions.section10.content')}</p>
        </section>
      </div>
    </div>
  );
}
