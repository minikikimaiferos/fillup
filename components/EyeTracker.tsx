'use client';

import { useEffect } from 'react';

export default function EyeTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.eye').forEach((eye) => {
        const el = eye as HTMLElement;
        const rect = el.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const maxDist = el.classList.contains('eye-big') ? 4 : 3;

        const dist = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.02, maxDist);
        const moveX = Math.cos(angle) * dist;
        const moveY = Math.sin(angle) * dist;

        el.style.setProperty('--pupil-x', `calc(-50% + ${moveX}px)`);
        el.style.setProperty('--pupil-y', `calc(-50% + ${moveY}px)`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
