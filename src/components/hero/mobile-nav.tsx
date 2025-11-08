'use client';

import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import i18n from "@/i18n";

type Props = {
  items: {
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
  className?: string;
};

export function MobileNav({ items, className }: Props) {

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={cn("flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        <Image src="/zaho-logo.png" alt="logo" width={86} height={26} />
      </Link>
      <Drawer direction="top">
        <DrawerTrigger className="relative -m-2 cursor-pointer p-2">
          <span className="sr-only">Open menu</span>
          <Menu className="h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-4 p-8">
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          {items.map((item) => (
            item.onClick ? (
              <button key={item.label} onClick={item.onClick} className="text-left">
                {item.label}
              </button>
            ) : (
              <Link key={item.label} href={item.href!}>
                {item.label}
              </Link>
            )
          ))}
          <Button variant="outline" onClick={toggleLanguage} className="flex items-center gap-2">
            <Languages className="h-4 w-4" />
            {/* {t('nav.language')} */}
          </Button>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
