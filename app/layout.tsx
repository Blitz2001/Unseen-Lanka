import type { Metadata } from 'next';
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/lib/metadata';
import OrganizationSchema from '@/components/schema-org';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased text-editorial-text bg-editorial-cream min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow scroll-smooth">
          {children}
        </main>
        {/* Footer will be the last snap section usually, or handled differently in full snap layouts */}
        {/* For now, we keep it outside the snap container or make it the last snap item */}
      </body>
    </html>
  );
}
