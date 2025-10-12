'use client';

import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { DollarSignIcon, ShieldIcon, BarChartIcon, CodeIcon } from "lucide-react";
import { useTranslation } from 'react-i18next';

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

export function Features() {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: <DollarSignIcon size={20} />,
      title: t('features.customFinancialSolutions.title'),
      description: t('features.customFinancialSolutions.description'),
      image: "/app-image-1.png",
    },
    {
      icon: <ShieldIcon size={20} />,
      title: t('features.paymentGatewayBankIntegration.title'),
      description: t('features.paymentGatewayBankIntegration.description'),
      image: "/app-image-1.png",
    },
    {
      icon: <BarChartIcon size={20} />,
      title: t('features.financialManagementTools.title'),
      description: t('features.financialManagementTools.description'),
      image: "/app-image-1.png",
    },
    {
      icon: <CodeIcon size={20} />,
      title: t('features.paymentOperationsApis.title'),
      description: t('features.paymentOperationsApis.description'),
      image: "/app-image-1.png",
    },
  ] satisfies Feature[];
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 pb-20 md:px-10 md:py-25 md:pb-32">
      <Badge variant="secondary" className="uppercase">
        {t('features.badge')}
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        {t('features.title')}<div className="text-muted-foreground">{t('features.titleHighlight')}</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        {t('features.description')}
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
