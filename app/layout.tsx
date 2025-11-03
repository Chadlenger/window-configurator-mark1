import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Thomas Concept - Window Configurator",
  description: "Obtineti devisul pentru ferestrele tale",
  icons: {icon: "/images/logo_onglet.svg",}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-white antialiased`}>
        <Header />
        <main className="w-full py-4 mt-[clamp(20px,4vh,80px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
