import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import MainContent from "@/components/layout/main";

const inter = Nunito({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neofolio - Portfolio Template",
  description:
    "With Neofolio, a dashboard-style portfolio website template built with Next.js and Shadcn/ui, you can present yourself online in an ideal way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
