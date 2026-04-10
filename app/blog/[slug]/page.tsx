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
  const { language, t } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Fallback to French if the requested language isn't available yet
  const content = post.content[language] ?? post.content.fr;
  const locale = t('blog.locale');

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
              {t('blog.backToBlog')}
            </Link>
            <div className="blog-article-meta">
              <span>{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>{post.readTime} {t('blog.readTime')}</span>
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
              <p>{t('blog.needHelp')}</p>
              <Link href="https://wa.me/32489923085" target="_blank" rel="noopener" className="btn btn-primary">
                {t('blog.cta')}
              </Link>
            </div>
          </div>
        </div>
      </article>

      <EyeTracker />
    </main>
  );
}
