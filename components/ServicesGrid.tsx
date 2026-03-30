'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { services } from '@/lib/services';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  const { t, language } = useLanguage();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('services.title') }} />
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              icon={service.icon}
              title={service.content[language].title}
              externalLink={service.externalLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
