'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import { services } from '@/lib/services';
import { useLanguage } from '@/hooks/useLanguage';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceContent from '@/components/service/ServiceContent';
import ServiceCTA from '@/components/service/ServiceCTA';
import EyeTracker from '@/components/EyeTracker';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const { language } = useLanguage();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const content = service.content[language];

  return (
    <main>
      <ServiceHero title={content.title} tagline={content.tagline} icon={service.icon} />
      <ServiceContent content={content} />
      <ServiceCTA />
      <EyeTracker />
    </main>
  );
}
