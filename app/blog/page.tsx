'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { useLanguage } from '@/hooks/useLanguage';
import EyeTracker from '@/components/EyeTracker';

export default function BlogPage() {
  const { language, t } = useLanguage();
  const locale = t('blog.locale');

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <h1 className="section-title">
            {language === 'en' ? (
              <>Go_Opti <span className="gradient-text">Blog</span></>
            ) : (
              <><span className="gradient-text">Blog</span> Go_Opti</>
            )}
          </h1>
          <p className="blog-hero-subtitle">{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="blog-listing">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => {
              // Fallback to French if the requested language isn't available
              const content = post.content[language] ?? post.content.fr;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="blog-card-read">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{content.title}</h2>
                  <p className="blog-card-excerpt">{content.excerpt}</p>
                  <span className="blog-card-link">{t('blog.readArticle')}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <EyeTracker />
    </main>
  );
}
