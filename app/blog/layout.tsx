import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Go_Opti | Conseils Digital, IA & Business',
  description:
    'Découvrez nos articles sur l\'optimisation digitale, l\'IA pour les entreprises, la publicité en ligne, le développement web et la prospection B2B. Conseils pratiques pour PME.',
  keywords: [
    'blog digital Bruxelles',
    'conseils IA entreprise',
    'articles marketing digital',
    'blog agence web Belgique',
    'astuces automatisation',
    'guide publicité en ligne',
  ],
  openGraph: {
    title: 'Blog — Go_Opti',
    description: 'Conseils, guides et insights sur le digital, l\'IA et la croissance business.',
    url: 'https://goopti.be/blog',
    siteName: 'Go_Opti',
    type: 'website',
    locale: 'fr_BE',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
