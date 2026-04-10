'use client';

import { Mail, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href="https://wa.me/32489923085"
        target="_blank"
        rel="noopener"
        className="floating-contact-btn floating-whatsapp"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="mailto:goopti.bxl@gmail.com"
        className="floating-contact-btn floating-email"
        aria-label="Email"
        title="Email"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
