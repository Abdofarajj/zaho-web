'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from '@/i18n';

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  const { t, ready } = useTranslation('common');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, []);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setIsRTL(lng === 'ar');
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!ready) {
    return <div></div>;
  }

  return (
    <div className={`mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25 ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          {t('termsAndConditions.faqs.title')}
          <br />
          <span className="text-muted-foreground">{t('termsAndConditions.faqs.subtitle')}</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          {t('termsAndConditions.faqs.description')}
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="#">{t('termsAndConditions.faqs.getStarted')}</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="what-is-hawelli" className="grid w-full gap-4">
        <AccordionItemFAQs value="what-is-hawelli">
          <AccordionTriggerFAQs>{t('termsAndConditions.faqs.whatIsHawelli.question')}</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              {t('termsAndConditions.faqs.whatIsHawelli.answer')}
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="services">
          <AccordionTriggerFAQs>{t('termsAndConditions.faqs.services.question')}</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              {t('termsAndConditions.faqs.services.answer')}
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="who-can-use">
          <AccordionTriggerFAQs>{t('termsAndConditions.faqs.whoCanUse.question')}</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>{t('termsAndConditions.faqs.whoCanUse.answer')}</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="security">
          <AccordionTriggerFAQs>{t('termsAndConditions.faqs.security.question')}</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>{t('termsAndConditions.faqs.security.answer')}</p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
