import type { Metadata } from 'next';
import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Go_Opti — Agence Digitale à Bruxelles | Optimisation, IA & Développement Web',
    template: '%s | Go_Opti',
  },
  description:
    'Go_Opti est une agence digitale basée à Bruxelles spécialisée en optimisation digitale, développement web & apps, IA & automatisation, publicité en ligne, production créative et gestion B2B. On remplace vos tâches chronophages par des outils d\'IA et des méthodologies éprouvées.',
  keywords: [
    'agence digitale Bruxelles',
    'optimisation digitale',
    'développement web Bruxelles',
    'automatisation IA',
    'intelligence artificielle entreprise',
    'création site web Belgique',
    'publicité en ligne',
    'Google Ads Bruxelles',
    'Meta Ads Belgique',
    'TikTok Ads',
    'social media management',
    'production créative IA',
    'web app sur mesure',
    'bot automatisation',
    'scraping données',
    'SEO Bruxelles',
    'référencement naturel Belgique',
    'agence web Belgique',
    'marketing digital Bruxelles',
    'prospection B2B',
    'cold emailing',
    'CRM automatisé',
    'plugins IA',
    'Go_Opti',
    'GoOpti',
  ],
  authors: [{ name: 'Go_Opti', url: 'https://goopti.be' }],
  creator: 'Go_Opti',
  publisher: 'Go_Opti',
  metadataBase: new URL('https://goopti.be'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-BE': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    alternateLocale: 'en_US',
    url: 'https://goopti.be',
    siteName: 'Go_Opti',
    title: 'Go_Opti — Agence Digitale à Bruxelles',
    description:
      'Optimisation digitale, développement web, IA & automatisation, publicité en ligne et production créative. On remplace vos tâches chronophages par des outils intelligents.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Go_Opti — Agence Digitale à Bruxelles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go_Opti — Agence Digitale à Bruxelles',
    description:
      'Optimisation digitale, développement web, IA & automatisation, publicité en ligne et production créative.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd />
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
