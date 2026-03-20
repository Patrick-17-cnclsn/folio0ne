import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContent from "@/components/layout/main";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `${CONFIG.name} - Portfolio`,
  description: CONFIG.bioShort,
  openGraph: {
    images: ["/seo.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
