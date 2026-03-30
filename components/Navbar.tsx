'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link href="/" className="logo">
          G<span className="eye">o</span>_<span><span className="eye eye-big">O</span>pti</span>
        </Link>

        <div className="nav-right">
          <div className="lang-toggle">
            <button
              className={`lang-btn${language === 'fr' ? ' active' : ''}`}
              onClick={() => setLanguage('fr')}
            >FR</button>
            <button
              className={`lang-btn${language === 'en' ? ' active' : ''}`}
              onClick={() => setLanguage('en')}
            >EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
