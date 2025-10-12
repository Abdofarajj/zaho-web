'use client';

import { Toaster } from "sonner";
import LoaderOverlay from "@/components/LoaderOverlay";
import I18nProvider from "@/components/I18nProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider>
      <LoaderOverlay />
      {children}
      <Toaster />
    </I18nProvider>
  );
}