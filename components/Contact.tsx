'use client';

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('cta.title') }} />
          <p className="section-subtitle">{t('cta.subtitle')}</p>

          <div className="contact-grid">
            <div className="contact-info">
              <a href="mailto:contact@goopti.be" className="contact-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">contact@goopti.be</span>
                </div>
              </a>
              <a href="https://wa.me/32489923085" target="_blank" rel="noopener" className="contact-item">
                <div className="contact-icon"><MessageCircle size={18} /></div>
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+32 489 92 30 85</span>
                </div>
              </a>
              <a href="tel:+32489923085" className="contact-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <div>
                  <span className="contact-label">{t('cta.phone') || 'Téléphone'}</span>
                  <span className="contact-value">+32 489 92 30 85</span>
                </div>
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" className="form-input" placeholder={t('cta.form.name')} value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" className="form-input" placeholder={t('cta.form.email')} value={formData.email} onChange={handleChange} required />
              <textarea name="message" className="form-input" placeholder={t('cta.form.message')} value={formData.message} onChange={handleChange} required />
              <button type="submit" className="btn btn-primary form-submit">{t('cta.form.send')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
