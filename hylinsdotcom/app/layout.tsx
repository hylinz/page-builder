import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import { headers } from 'next/headers';
import Footer from "./ui/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the headers from the middleware
  const headersList = headers();
  const url = headersList.get('x-url') || "";

  return (
    <html lang="en">
      <body className={inter.className}>
        {url && url.includes('/hcms') ? null : <Header />}
        <main className="flex min-h-screen flex-col relative">
        {children}
        </main>
        {url && url.includes('/hcms') ? null : <Footer />}
      </body>
    </html>
  );
}
