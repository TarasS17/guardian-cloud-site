// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/lib/i18n/LocaleContext';
import Script from 'next/script';
import { Suspense } from 'react';
import SchemaOrg from '@/components/SchemaOrg';
// Temporarily disabled — chat widget will be reworked before re-enabling.
// import GuardianAIChatWidget from '@/components/GuardianAIChat';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guardian Cloud — Autonomous AI for Systems Where Error is Unacceptable',
  description: 'Guardian Cloud: complete automation of system administration and cybersecurity for any cloud service or closed data centre, by ALFACAN DEFENCE GROUP. Zero human factor, 24/7 protection.',
  keywords: 'AI, cybersecurity, cloud monitoring, ALFACAN Defence Group, DevOps, system administration, ITDR',
  metadataBase: new URL('https://guardian.alfa-can.com'),
  openGraph: {
    title: 'Guardian Cloud — Autonomous AI for Systems Where Error is Unacceptable',
    description: 'Complete automation of system administration and cybersecurity for any cloud service or closed data centre. Zero human factor, 24/7 protection.',
    url: 'https://guardian.alfa-can.com',
    siteName: 'Guardian Cloud',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ALFACAN Defence Group - Intelligent Business Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guardian Cloud — Autonomous AI for Systems Where Error is Unacceptable',
    description: 'Complete automation of system administration and cybersecurity for any cloud service or closed data centre.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://guardian.alfa-can.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // lang=en — язык разметки по умолчанию; LocaleContext переписывает его при смене языка.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaOrg
          type="Organization"
          data={{
            name: 'Guardian Cloud',
            description: 'Complete automation of system administration and cybersecurity for any cloud service or closed data centre',
            url: 'https://guardian.alfa-can.com',
            logo: 'https://guardian.alfa-can.com/logo.png',
            sameAs: ['https://www.linkedin.com/showcase/110323953/'],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              email: 'info@alfa-can.com',
            },
          }}
        />

        <Script
          id="umami-script"
          strategy="lazyOnload"
          src="https://cloud.umami.is/script.js"
          data-website-id="c4268d28-e516-4a0d-8450-97ea0a31d9e1"
        />
      </head>
      <body className={`${inter.variable} antialiased`} style={{ backgroundColor: 'var(--primary-dark)' }}>
        <LocaleProvider>
          <Header />
          <main className="pt-20">
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </LocaleProvider>
        {/* Temporarily hidden — chat widget will be reworked before re-enabling. */}
        {/* <GuardianAIChatWidget /> */}
      </body>
    </html>
  );
}