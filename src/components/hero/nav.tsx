'use client';

import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";
import { useTranslation } from 'react-i18next';

export function Nav() {
  const { t, ready } = useTranslation('common');

  if (!ready) {
    return <div></div>;
  }

  const navItems = [
    {
      label: t('nav.services'),
      href: "/#features",
    },
    {
      label: t('nav.legal'),
      href: "/privacy-policy",
    },
    // {
    //   label: t('nav.faqs'),
    //   href: "/privacy-policy",
    // },
  ];

  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
