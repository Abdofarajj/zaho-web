'use client';

import { FooterBlur } from "@/components/footer/footer-blur";
import { LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation('common');

  const links = [
    {
      title: t('footer.hawelli'),
      links: [
        {
          label: t('footer.downloadApp'),
          href: "https://apps.apple.com/",
          title: "Download the app from the App Store",
        },
        {
          label: t('footer.features'),
          href: "/#features",
          title: "See our features",
        },
        // {
        //   label: "Pricing",
        //   href: "/pricing",
        //   title: "View pricing",
        // },
      ],
    },
    {
      title: t('footer.products'),
      links: [
        {
          label: t('footer.forAndroid'),
          href: "https://play.google.com/store",
          title: "Download on Android",
        },
        {
          label: t('footer.forIPhone'),
          href: "https://apps.apple.com/",
          title: "Download on iOS",
        },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        {
          label: t('footer.termsAndConditions'),
          href: "/terms-and-conditions",
          title: "Read our Terms & Conditions",
        },
        {
          label: t('footer.privacyPolicy'),
          href: "/privacy-policy",
          title: "Read our Privacy Policy",
        },
        // {
        //   label: t('footer.refundPolicy'),
        //   href: "/refund-policy",
        //   title: "Read our Refund Policy",
        // },
      ],
    },
    {
      title: t('footer.followUs'),
      links: [
        // {
        //   label: (
        //     <div className="flex items-center gap-2">
        //       <XIcon className="h-4 w-4" />
        //       <span>Twitter</span>
        //     </div>
        //   ),
        //   href: "https://x.com/",
        //   title: "Follow us on Twitter",
        // },
        {
          label: (
            <div className="flex items-center gap-2">
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </div>
          ),
          href: "https://www.linkedin.com/company/zaho-ly/",
          title: "Connect with us on LinkedIn",
        },
        {
          label: (
            <div className="flex items-center gap-2">
              <GithubIcon className="h-4 w-4" />
              <span>Github</span>
            </div>
          ),
          href: "https://github.com/Abdofarajj",
          title: "View our GitHub repository",
        },
      ],
    },
  ];
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto mb-8 flex justify-center">
        <Image src="/zaho-logo.png" alt="Zaho Logo" width={150} height={50} className="h-12 w-auto" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
