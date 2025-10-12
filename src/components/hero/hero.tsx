"use client";
import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { t } = useTranslation('common');
  const [isRTL, setIsRTL] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (imageRef.current && heroRef.current) {
      gsap.to(imageRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className={`mt-16 flex flex-col items-center gap-6 ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Pill>
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="/avatars/1.jpg" />
            <PillAvatar src="/avatars/2.jpg" />
            <PillAvatar src="/avatars/3.jpg" />
            <PillAvatar src="/avatars/4.jpg" />
          </PillAvatarGroup>
          <p className={`text-muted-foreground px-2 text-xs font-medium sm:text-sm ${isRTL ? 'sm:border-r-1' : 'sm:border-l-1'}`}>
            {t('hero.joinUsers')}
          </p>
        </Pill>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          {t('hero.title')}<span className="text-muted-foreground block">{t('hero.subtitle')}</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          {t('hero.description')}
        </p>
        <Button className="mb-10 w-fit" size="lg" asChild>
          <Link href="#">{t('hero.getStarted')}</Link>
        </Button>
        <Image ref={imageRef} src="/app-image-2.png" alt="Hero" width={304} height={445} />
      </div>
    </div>
  );
}
