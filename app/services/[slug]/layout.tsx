import type { Metadata } from 'next';
import { services } from '@/lib/services';

const serviceKeywords: Record<string, string[]> = {
  'optimisation-digitale': [
    'optimisation digitale Bruxelles',
    'outils IA entreprise',
    'automatisation tâches',
    'plugins IA',
    'méthodologies digitales',
    'gain de temps IA',
    'workflow automation Belgique',
    'productivité digitale',
  ],
  'developpement-web': [
    'développement web Bruxelles',
    'création site web Belgique',
    'web app sur mesure',
    'bot automatisation',
    'scraping données',
    'carte digitale interactive',
    'application métier',
    'landing page optimisée',
    'développeur web Belgique',
  ],
  'audiovisuel': [
    'production créative IA',
    'créatives publicitaires',
    'vidéo TikTok entreprise',
    'Reels Instagram business',
    'visuels publicitaires IA',
    'contenu social media',
    'production vidéo Bruxelles',
    'bannières publicitaires',
  ],
  'ia-automatisation': [
    'intelligence artificielle entreprise',
    'automatisation processus',
    'prospection automatisée',
    'cold emailing automation',
    'CRM intelligent',
    'extraction données',
    'enrichissement contacts',
    'workflow automatisé Belgique',
    'bot IA entreprise',
  ],
  'ads-social-media': [
    'Google Ads Bruxelles',
    'Meta Ads Belgique',
    'Facebook Ads agence',
    'Instagram Ads',
    'TikTok Ads Belgique',
    'publicité en ligne Bruxelles',
    'campagne publicitaire digitale',
    'social media marketing Belgique',
    'retargeting',
  ],
  'secretariat-b2b': [
    'prospection B2B Belgique',
    'secrétariat externalisé',
    'cold emailing B2B',
    'gestion CRM',
    'prise de rendez-vous',
    'relance téléphonique',
    'gestion commerciale externalisée',
    'assistant virtuel B2B',
  ],
  'marketing-consultation': [
    'consultation marketing Bruxelles',
    'stratégie digitale PME',
    'conseil commercial Belgique',
    'audit marketing digital',
    'accompagnement stratégique',
    'plan marketing entreprise',
    'consultant digital Bruxelles',
    'positionnement marché',
    'stratégie acquisition clients',
  ],
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service introuvable' };
  }

  const fr = service.content.fr;
  const keywords = serviceKeywords[slug] || [];

  return {
    title: `${fr.title} — Go_Opti | Agence Digitale Bruxelles`,
    description: fr.whatIs.slice(0, 160),
    keywords: [...keywords, 'Go_Opti', 'agence digitale Bruxelles'],
    openGraph: {
      title: `${fr.title} — Go_Opti`,
      description: fr.tagline,
      url: `https://goopti.be/services/${slug}`,
      siteName: 'Go_Opti',
      type: 'website',
      locale: 'fr_BE',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${fr.title} — Go_Opti`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fr.title} — Go_Opti`,
      description: fr.tagline,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default function ServiceLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
