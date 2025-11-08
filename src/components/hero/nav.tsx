'use client';

import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export function Nav() {
  const { t, ready } = useTranslation('common');
  const router = useRouter();

  if (!ready) {
    return <div></div>;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    if (window.location.pathname === '/') {
      scrollToSection('features');
    } else {
      router.push('/');
      setTimeout(() => scrollToSection('features'), 100);
    }
  };

  const navItems = [
    {
      label: t('nav.services'),
      onClick: handleServicesClick,
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
