import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

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
      <body className={`${poppins.variable} flex min-h-screen flex-col bg-white antialiased`}>
        <Header />
        <main className="w-full py-4 mt-[clamp(20px,4vh,80px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
