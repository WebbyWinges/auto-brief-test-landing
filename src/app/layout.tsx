import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { YandexMetrikaNextJs } from "./lib/scripts/yandexMetrikaNextJs";
import { Suspense } from "react";

const ralewaySans = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "32x32",
    },
  },
  title: "AutoBrief",
  description:
    "AutoBrief – Наш продукт автоматически записывает и анализирует разговоры, генерирует краткие итоги, задачи и ключевые инсайты с помощью ИИ.",
  keywords:
    "записывает, ИИ анализ, ии сотрудник, искусственный интеллект для бизнеса",
  openGraph: {
    title: "AutoBrief - нейросеть для анализа встреч",
    description: "Нейросеть, которая дает нужную тебе информацию в тексте",
    emails: ["autobrief@yandex.com"],
    phoneNumbers: ["7-995-655-45-69"],
    images: [{ url: "/OG.png" }],
    // url: "https:",
    type: "website",
  },
  metadataBase: new URL("http://localhost:3000/"),
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewaySans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <YandexMetrikaNextJs />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
