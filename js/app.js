/**
 * Go_Opti — Main Application Entry Point
 * Initializes all modules on DOM ready
 */

import { initI18n } from './i18n.js';
import { initNavbar } from './navbar.js';
import { initReveal, initCounters } from './animations.js';
import { initPortfolioFilter } from './portfolio.js';

function initEyes() {
    const eyes = document.querySelectorAll('.eye');
    if (!eyes.length) return;

    document.addEventListener('mousemove', (e) => {
        eyes.forEach(eye => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const dx = e.clientX - eyeCenterX;
            const dy = e.clientY - eyeCenterY;
            const angle = Math.atan2(dy, dx);
            const maxDist = eye.classList.contains('eye-big') ? 4 : 3;

            const dist = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.02, maxDist);
            const moveX = Math.cos(angle) * dist;
            const moveY = Math.sin(angle) * dist;

            eye.style.setProperty('--pupil-x', `calc(-50% + ${moveX}px)`);
            eye.style.setProperty('--pupil-y', `calc(-50% + ${moveY}px)`);
        });
    });
}

function init() {
    // Initialize all modules
    initI18n();
    initNavbar();
    initReveal();
    initCounters();
    initPortfolioFilter();
    initEyes();

    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    console.log('Go_Opti — Site initialized');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
