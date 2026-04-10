'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="logo">G<span className="eye">o</span>_<span><span className="eye eye-big">O</span>pti</span></div>
          <div className="footer-links">
            <a href="/blog" className="footer-blog-link">Blog</a>
            <span className="footer-separator">·</span>
            <a href="tel:+32489923085" className="footer-blog-link">+32 489 92 30 85</a>
            <span className="footer-separator">·</span>
            <a href="mailto:goopti.bxl@gmail.com" className="footer-blog-link">goopti.bxl@gmail.com</a>
          </div>
          <p>&copy; 2026 Go_Opti. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
