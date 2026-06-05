import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Noto_Sans } from "next/font/google";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Navbar from "@/components/layout/Navbar";
import AntdProvider from "@/components/providers/AntdProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import "antd/dist/reset.css";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Монкар — Монголын автомашины marketplace",
  description: "Moncar автомашины marketplace, үйлчилгээ, зээлийн хүсэлт, хадгалсан зарын хэрэглэгчийн урсгал.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={`${notoSans.className} ${notoSans.variable} bg-[var(--gray-50)] text-[var(--gray-900)] antialiased`}>
        <AntdRegistry>
          <AntdProvider>
            <AuthProvider>
              <Navbar />
              <main>{children}</main>
              <MobileBottomNav />
            </AuthProvider>
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
