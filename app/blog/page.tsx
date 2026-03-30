'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { useLanguage } from '@/hooks/useLanguage';
import EyeTracker from '@/components/EyeTracker';

export default function BlogPage() {
  const { language } = useLanguage();

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <h1 className="section-title">
            {language === 'fr' ? (
              <>Blog <span className="gradient-text">Go_Opti</span></>
            ) : (
              <>Go_Opti <span className="gradient-text">Blog</span></>
            )}
          </h1>
          <p className="blog-hero-subtitle">
            {language === 'fr'
              ? 'Conseils, guides et insights sur le digital, l\'IA et la croissance business.'
              : 'Tips, guides and insights on digital, AI and business growth.'}
          </p>
        </div>
      </section>

      <section className="blog-listing">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => {
              const content = post.content[language];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-BE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="blog-card-read">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{content.title}</h2>
                  <p className="blog-card-excerpt">{content.excerpt}</p>
                  <span className="blog-card-link">
                    {language === 'fr' ? 'Lire l\'article →' : 'Read article →'}
                  </span>
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
