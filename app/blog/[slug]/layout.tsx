import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article introuvable' };
  }

  const fr = post.content.fr;

  return {
    title: fr.title,
    description: fr.excerpt,
    keywords: [...fr.keywords, 'Go_Opti', 'agence digitale Bruxelles'],
    openGraph: {
      title: fr.title,
      description: fr.excerpt,
      url: `https://goopti.be/blog/${slug}`,
      siteName: 'Go_Opti',
      type: 'article',
      locale: 'fr_BE',
      publishedTime: post.date,
      authors: ['Go_Opti'],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: fr.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fr.title,
      description: fr.excerpt,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
