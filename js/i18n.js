/**
 * Go_Opti — Internationalization (FR / EN)
 */

export const translations = {
    fr: {
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "nav.cta": "Contactez-nous",
        "hero.title": 'Propulsez votre business dans <span class="gradient-text">l\'ere digitale</span>',
        "hero.subtitle": "Developpement digital sur mesure pour accelerer votre croissance. Vous avez un besoin digital ? On s'en occupe.",
        "hero.cta1": "Parlons-en",
        "services.title": 'Ce qu\'on <span class="gradient-text">fait</span>',
        "services.card1.title": "Optimisation Digitale",
        "services.card2.title": "Developpement Web & Apps",
        "services.card3.title": "Audiovisuel",
        "services.card4.title": "IA & Automatisation",
        "services.card5.title": "Ads & Social Media",
        "services.card6.title": "Secretariat & Gestion B2B",
        "trust.title": 'Ils nous font <span class="gradient-text">confiance</span>',
        "cta.title": 'Discutons de <span class="gradient-text">votre projet</span>',
        "cta.form.name": "Votre nom",
        "cta.form.email": "Votre email",
        "cta.form.message": "Decrivez votre besoin...",
        "cta.form.send": "Envoyer",
        "footer.rights": "Tous droits reserves."
    },
    en: {
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "nav.cta": "Contact us",
        "hero.title": 'Propel your business into the <span class="gradient-text">digital era</span>',
        "hero.subtitle": "Custom digital development to accelerate your growth. Got a digital need? We handle it.",
        "hero.cta1": "Let's talk",
        "services.title": 'What we <span class="gradient-text">do</span>',
        "services.card1.title": "Digital Optimization",
        "services.card2.title": "Web & App Development",
        "services.card3.title": "Audiovisual",
        "services.card4.title": "AI & Automation",
        "services.card5.title": "Ads & Social Media",
        "services.card6.title": "Secretariat & B2B Management",
        "trust.title": 'They <span class="gradient-text">trust</span> us',
        "cta.title": 'Let\'s discuss <span class="gradient-text">your project</span>',
        "cta.form.name": "Your name",
        "cta.form.email": "Your email",
        "cta.form.message": "Describe your needs...",
        "cta.form.send": "Send",
        "footer.rights": "All rights reserved."
    }
};

let currentLang = 'fr';

export function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

export function getCurrentLang() {
    return currentLang;
}

export function initI18n() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}
