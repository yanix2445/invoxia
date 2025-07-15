import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header2 from '../components/mvpblocks/header-2';
import Footer4Col from '../components/mvpblocks/footer-4col';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Invoxia',
  description: "Invoxia - Le hub universel pour explorer, tester et connecter toutes les APIs du monde. Centralisez, innovez, accélérez vos projets avec une bibliothèque d’APIs gratuites et premium, une documentation claire et un playground interactif. L’API, enfin accessible à tous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header2 />
        <main className="min-h-screen ">
          {children}
        </main>
        <Footer4Col />
        <Analytics />
      </body>
    </html>
  );
}
