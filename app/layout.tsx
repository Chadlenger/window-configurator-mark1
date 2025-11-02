import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Thomas Concept - Window Configurator",
  description: "Obtineti devisul pentru ferestrele tale",
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
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8 mt-[clamp(65px,8vh,175px)] max-w-screen-xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
