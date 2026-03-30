'use client';

import type { ServiceContent as ServiceContentType } from '@/lib/services';

interface ServiceContentProps {
  content: ServiceContentType;
}

export default function ServiceContent({ content }: ServiceContentProps) {
  return (
    <>
      <section className="service-about">
        <div className="container">
          <p className="service-about-text">{content.whatIs}</p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="container">
          <h2>Ce que ça vous <span className="gradient-text">apporte</span></h2>
          <div className="benefits-grid">
            {content.benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-approach">
        <div className="container">
          <h2>Notre <span className="gradient-text">approche</span></h2>
          <div className="approach-steps">
            {content.approach.map((a, i) => (
              <div key={i} className="approach-step">
                <h3>{a.step}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
