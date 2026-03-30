'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const [popupOpen, setPopupOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setPopupOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="container">
        <div className="hero-content">
          <h1 dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-buttons">
            <div className="hero-cta-wrapper" ref={wrapperRef}>
              <button
                className="btn btn-primary"
                onClick={() => setPopupOpen(!popupOpen)}
              >
                {t('hero.cta1')}
              </button>
              <div className={`hero-contact-popup${popupOpen ? ' open' : ''}`}>
                <a
                  href="https://wa.me/32489923085"
                  target="_blank"
                  rel="noopener"
                  className="hero-contact-option"
                  onClick={() => setPopupOpen(false)}
                >
                  <div className="hero-contact-option-icon whatsapp">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <span className="hero-contact-option-label">WhatsApp</span>
                    <span className="hero-contact-option-value">+32 489 92 30 85</span>
                  </div>
                </a>
                <a
                  href="tel:+32489923085"
                  className="hero-contact-option"
                  onClick={() => setPopupOpen(false)}
                >
                  <div className="hero-contact-option-icon phone">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="hero-contact-option-label">Téléphone</span>
                    <span className="hero-contact-option-value">+32 489 92 30 85</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
