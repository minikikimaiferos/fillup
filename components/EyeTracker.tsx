'use client';

import { useEffect } from 'react';

export default function EyeTracker() {
  useEffect(() => {
    const updateEyes = (clientX: number, clientY: number) => {
      document.querySelectorAll('.eye').forEach((eye) => {
        const el = eye as HTMLElement;
        const rect = el.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = clientX - eyeCenterX;
        const dy = clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const maxDist = el.classList.contains('eye-big') ? 4 : 3;

        const dist = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.02, maxDist);
        const moveX = Math.cos(angle) * dist;
        const moveY = Math.sin(angle) * dist;

        el.style.setProperty('--pupil-x', `calc(-50% + ${moveX}px)`);
        el.style.setProperty('--pupil-y', `calc(-50% + ${moveY}px)`);
      });
    };

    // Desktop : les yeux suivent le curseur
    const handleMouseMove = (e: MouseEvent) => {
      updateEyes(e.clientX, e.clientY);
    };

    // Mobile : les yeux suivent le doigt (tap + scroll + drag)
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0] ?? e.changedTouches[0];
      if (!touch) return;
      updateEyes(touch.clientX, touch.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleTouch, { passive: true });
    document.addEventListener('touchmove', handleTouch, { passive: true });
    document.addEventListener('touchend', handleTouch, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('touchmove', handleTouch);
      document.removeEventListener('touchend', handleTouch);
    };
  }, []);

  return null;
}
