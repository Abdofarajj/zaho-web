'use client';

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Languages } from "lucide-react";
import i18n from "@/i18n";
import { useTranslation } from 'react-i18next';

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: Props) {
  const { t } = useTranslation('common');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={cn("relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        <Image src="/zaho-logo.png" alt="logo" width={110} height={26} />
      </Link>
      <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenuList className="gap-8">
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={toggleLanguage}>
          <Languages className="h-4 w-4" />
        </Button>
        <Button asChild>
          <Link href="/">{t('hero.getStarted')}</Link>
        </Button>
      </div>
    </nav>
  );
}
