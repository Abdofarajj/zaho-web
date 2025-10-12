"use client";

import { FAQs } from "@/components/faqs/faqs";
import { Features } from "@/components/features/features";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { useRedirectWarning } from "@/lib/redirect";

export default function Home() {
  useRedirectWarning();

  return (
    <>
      <Hero />
      {/* <Showcase /> */}
      {/* <Quote /> */}
      <Features />
      {/* <Testimonials /> */}
      <FAQs />
      <Footer />
    </>
  );
}
