import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/lib/metadata';
import OrganizationSchema from '@/components/schema-org';

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

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
