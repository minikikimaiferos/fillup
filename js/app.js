/**
 * Fill Up — Main Application Entry Point
 * Initializes all modules on DOM ready
 */

import { initI18n } from './i18n.js';
import { initNavbar } from './navbar.js';
import { initReveal, initCounters } from './animations.js';
import { initPortfolioFilter } from './portfolio.js';

function init() {
    // Initialize all modules
    initI18n();
    initNavbar();
    initReveal();
    initCounters();
    initPortfolioFilter();

    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    console.log('Fill Up — Site initialized');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
