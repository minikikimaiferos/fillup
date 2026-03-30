'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { useLanguage } from '@/hooks/useLanguage';
import EyeTracker from '@/components/EyeTracker';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { language } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = post.content[language];

  // Convert markdown-like body to HTML
  const bodyHtml = content.body
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('## ')) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      return `<p>${block}</p>`;
    })
    .join('');

  return (
    <main>
      <article className="blog-article">
        <div className="container">
          <div className="blog-article-header">
            <Link href="/blog" className="blog-back-link">
              ← {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
            </Link>
            <div className="blog-article-meta">
              <span>{new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-BE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>{post.readTime} {language === 'fr' ? 'de lecture' : 'read'}</span>
            </div>
            <h1 className="blog-article-title">{content.title}</h1>
            <p className="blog-article-excerpt">{content.excerpt}</p>
          </div>

          <div
            className="blog-article-body"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          <div className="blog-article-footer">
            <div className="blog-article-tags">
              {content.keywords.slice(0, 4).map((kw) => (
                <span key={kw} className="blog-tag">{kw}</span>
              ))}
            </div>
            <div className="blog-article-cta">
              <p>
                {language === 'fr'
                  ? 'Besoin d\'aide pour mettre ça en place ?'
                  : 'Need help implementing this?'}
              </p>
              <Link href="https://wa.me/32489923085" target="_blank" rel="noopener" className="btn btn-primary">
                {language === 'fr' ? 'Parlons-en' : 'Let\'s Talk'}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <EyeTracker />
    </main>
  );
}
