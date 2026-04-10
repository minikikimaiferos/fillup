import { services } from '@/lib/services';

function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Go_Opti',
    alternateName: 'GoOpti',
    url: 'https://goopti.be',
    logo: 'https://goopti.be/favicon.svg',
    description:
      'Agence digitale à Bruxelles spécialisée en optimisation digitale, développement web, IA & automatisation, publicité en ligne et production créative.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bruxelles',
      addressCountry: 'BE',
    },
    email: 'goopti.bxl@gmail.com',
    telephone: '+32484737038',
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'Belgium',
    },
    knowsLanguage: ['fr', 'en', 'nl'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function ServicesJsonLd() {
  const serviceItems = services.map((service) => ({
    '@type': 'Service',
    name: service.content.fr.title,
    description: service.content.fr.tagline,
    url: `https://goopti.be/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Go_Opti',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Belgium',
    },
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services Go_Opti',
    itemListElement: serviceItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Go_Opti',
    url: 'https://goopti.be',
    description:
      'Agence digitale à Bruxelles — optimisation digitale, développement web & apps, IA, publicité en ligne et production créative.',
    inLanguage: ['fr-BE', 'en', 'nl-BE'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function JsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <ServicesJsonLd />
      <WebSiteJsonLd />
    </>
  );
}
