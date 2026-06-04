import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "МОНКАР — Монголын хамгийн том машины зах зээл",
  description: "MonCar UI-г Next.js App Router болон Tailwind дээр component систем болгон шилжүүлсэн хувилбар.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={`${notoSans.className} ${notoSans.variable} bg-[var(--gray-50)] text-[var(--gray-900)] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <MobileBottomNav />
      </body>
    </html>
  );
}
