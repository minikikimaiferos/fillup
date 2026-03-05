/**
 * Fill Up — Navbar behavior
 * Scroll effect + mobile menu
 */

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');

    // Scroll effect — add backdrop blur
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu open/close
    menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));

    // Close mobile nav when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
}
