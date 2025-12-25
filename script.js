// ============================================
// CMELNULABS - Interactive Website Scripts
// ============================================

// Translations
const translations = {
    en: {
        'page-title': 'cmelnulabs - Educational Projects & Open Source',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'nav-github': 'GitHub',
        'hero-badge': 'Open Source Developer',
        'hero-title-1': 'Building',
        'hero-title-2': 'Educational',
        'hero-title-3': 'Projects That',
        'hero-subtitle-1': 'Creating emulators, compilers, operating systems, and whatever sounds fun.',
        'hero-subtitle-2': 'Powered by coffee and vibe coding',
        'hero-cta-projects': 'Explore Projects',
        'hero-cta-github': 'View GitHub',
        'stat-repos': 'Public Repos',
        'stat-followers': 'Followers',
        'about-tag': 'About Me',
        'about-title': 'The Developer Behind the Code',
        'about-intro': "I'm <strong>Christian</strong>, a developer based in <span class=\"highlight\">Barcelona</span> who loves diving deep into how computers actually work.",
        'about-p1': 'My projects explore the foundations of computing — from building operating systems from scratch to creating compilers and emulators. I believe the best way to understand technology is to build it yourself.',
        'about-p2': 'Through these repositories, I aim to provide developers in training and curious minds with the kind of project examples I wish I had access to when I was studying. Many of these are ambitious undertakings that typically span several years and require teams of developers. With modern AI tools, I can tackle them with unprecedented speed and flexibility, making complex systems more accessible to learn from and build upon.',
        'about-p3': "All projects are thoroughly documented, and I continuously review and refine this documentation as it's being generated. This process ensures that I fully understand the inner workings of each project I create, while guaranteeing that the manuals provide the most detailed and unambiguous information possible. Clear documentation is not just for others — it's an essential part of my own learning journey.",
        'highlight-1-title': 'Educational Focus',
        'highlight-1-desc': 'Projects designed to teach and inspire',
        'highlight-2-title': 'Low-Level Expertise',
        'highlight-2-desc': 'From assembly to operating systems',
        'highlight-3-title': 'Open Source',
        'highlight-3-desc': 'All projects freely available',
        'projects-tag': 'Featured Work',
        'projects-title': 'Projects',
        'projects-subtitle': 'Educational projects that scratch my own itch',
        'status-active': 'Active Development',
        'status-completed': 'Completed',
        'status-fork': 'Fork',
        'project-thunderos-title': 'ThunderOS',
        'project-thunderos-desc': 'A lightweight RISC-V operating system for educational use, providing a clean foundation for OS development and embedded systems experimentation.',
        'project-compi-title': 'Compi',
        'project-compi-desc': 'A C-to-VHDL compiler that bridges software and hardware design, enabling rapid prototyping of hardware from high-level C code.',
        'project-brain-title': 'Brain Tumor Classifier',
        'project-brain-desc': 'A machine learning model that classifies MRI images of brain tumors by type, demonstrating practical applications of deep learning in healthcare.',
        'project-libmigdb-title': 'libmigdb',
        'project-libmigdb-desc': "GDB/Machine Interface library fork - A library for interfacing with GDB's machine interface for building debugger frontends.",
        'skills-tag': 'Expertise',
        'skills-title': 'Technical Skills',
        'skills-languages': 'Languages',
        'skills-systems': 'Systems',
        'skills-tools': 'Tools & Platforms',
        'skill-os': 'Operating Systems',
        'skill-embedded': 'Embedded Systems',
        'skill-memory': 'Memory Management',
        'skill-drivers': 'Device Drivers',
        'contact-tag': 'Get In Touch',
        'contact-title': "Let's Build Something",
        'contact-desc': 'Interested in collaborating on an open-source project or just want to chat about operating systems, compilers, or emulators? Feel free to reach out!',
        'coffee-text': 'Fueled by coffee<br>& curiosity',
        'footer-text': 'Building educational projects that scratch my own itch.',
        'copyright': '© 2025 cmelnulabs. All rights reserved.'
    },
    es: {
        'page-title': 'cmelnulabs - Proyectos para Curiosos',
        'nav-about': 'Sobre mí',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contacto',
        'nav-github': 'GitHub',
        'hero-badge': 'Desarrollador & Curioso',
        'hero-title-1': 'Creando',
        'hero-title-2': 'Proyectos',
        'hero-title-3': 'Que',
        'hero-subtitle-1': 'Emuladores, compiladores, sistemas operativos... y lo que me apetezca.',
        'hero-subtitle-2': 'A base de café y ganas de cacharrear',
        'hero-cta-projects': 'Ver proyectos',
        'hero-cta-github': 'Ir a GitHub',
        'stat-repos': 'Repositorios',
        'stat-followers': 'Seguidores',
        'about-tag': 'Quién soy',
        'about-title': 'La persona detrás del código',
        'about-intro': "Me llamo <strong>Christian</strong>, vivo en <span class=\"highlight\">Barcelona</span> y me apasiona entender cómo funcionan las cosas por dentro.",
        'about-p1': 'Mis proyectos van de lo más bajo: sistemas operativos desde cero, compiladores, emuladores... Creo firmemente que la mejor forma de entender algo es construirlo con tus propias manos.',
        'about-p2': 'Con estos repositorios quiero ofrecer a estudiantes y curiosos el tipo de ejemplos que a mí me habría encantado tener cuando estaba en la carrera. Son proyectos ambiciosos que normalmente llevarían años y equipos enteros. Gracias a las herramientas de IA actuales, puedo abordarlos con una agilidad impensable hace poco, haciendo que sistemas complejos estén al alcance de cualquiera que quiera aprender.',
        'about-p3': 'Documento todo a conciencia, revisando y puliendo la documentación mientras la genero. Así me aseguro de entender cada rincón de lo que creo, y de que los manuales sean lo más claros y útiles posible. Documentar bien no es solo para los demás: es parte fundamental de mi propio aprendizaje.',
        'highlight-1-title': 'Para aprender',
        'highlight-1-desc': 'Proyectos pensados para enseñar',
        'highlight-2-title': 'A bajo nivel',
        'highlight-2-desc': 'Desde ensamblador hasta el kernel',
        'highlight-3-title': 'Código abierto',
        'highlight-3-desc': 'Todo disponible libremente',
        'projects-tag': 'Lo que hago',
        'projects-title': 'Proyectos',
        'projects-subtitle': 'Cacharros que me divierten y de los que aprendo',
        'status-active': 'En desarrollo',
        'status-completed': 'Terminado',
        'status-fork': 'Fork',
        'project-thunderos-title': 'ThunderOS',
        'project-thunderos-desc': 'Un sistema operativo ligero para RISC-V con fines educativos. Una base limpia para quien quiera meterse en desarrollo de SO y sistemas embebidos.',
        'project-compi-title': 'Compi',
        'project-compi-desc': 'Un compilador de C a VHDL que une el mundo del software con el del hardware. Ideal para prototipar circuitos a partir de código de alto nivel.',
        'project-brain-title': 'Clasificador de tumores cerebrales',
        'project-brain-desc': 'Modelo de deep learning que clasifica resonancias magnéticas de tumores cerebrales. Un ejemplo práctico de IA aplicada a la medicina.',
        'project-libmigdb-title': 'libmigdb',
        'project-libmigdb-desc': 'Fork de una biblioteca para comunicarse con GDB a través de su interfaz máquina. Útil para construir herramientas de depuración.',
        'skills-tag': 'Experiencia',
        'skills-title': 'Habilidades técnicas',
        'skills-languages': 'Lenguajes',
        'skills-systems': 'Sistemas',
        'skills-tools': 'Herramientas',
        'skill-os': 'Sistemas operativos',
        'skill-embedded': 'Sistemas embebidos',
        'skill-memory': 'Gestión de memoria',
        'skill-drivers': 'Drivers',
        'contact-tag': 'Hablemos',
        'contact-title': '¿Charlamos?',
        'contact-desc': '¿Te interesa colaborar en algún proyecto o simplemente quieres hablar de sistemas operativos, compiladores o emuladores? ¡Escríbeme sin compromiso!',
        'coffee-text': 'Funciono a base<br>de café y curiosidad',
        'footer-text': 'Creando proyectos que me divierten y me hacen aprender.',
        'copyright': '© 2025 cmelnulabs. Todos los derechos reservados.'
    },
    ca: {
        'page-title': 'cmelnulabs - Projectes per a Curiosos',
        'nav-about': 'Qui soc',
        'nav-projects': 'Projectes',
        'nav-skills': 'Habilitats',
        'nav-contact': 'Contacte',
        'nav-github': 'GitHub',
        'hero-badge': 'Desenvolupador & Curiós',
        'hero-title-1': 'Creant',
        'hero-title-2': 'Projectes',
        'hero-title-3': 'Que',
        'hero-subtitle-1': "Emuladors, compiladors, sistemes operatius... i el que em vingui de gust.",
        'hero-subtitle-2': 'A cop de cafè i ganes de trastegar',
        'hero-cta-projects': 'Veure projectes',
        'hero-cta-github': 'Anar a GitHub',
        'stat-repos': 'Repositoris',
        'stat-followers': 'Seguidors',
        'about-tag': 'Qui soc',
        'about-title': 'La persona darrere del codi',
        'about-intro': "Em dic <strong>Christian</strong>, visc a <span class=\"highlight\">Barcelona</span> i m'apassiona entendre com funcionen les coses per dins.",
        'about-p1': "Els meus projectes van del més baix: sistemes operatius des de zero, compiladors, emuladors... Crec fermament que la millor manera d'entendre alguna cosa és construir-la amb les teves pròpies mans.",
        'about-p2': "Amb aquests repositoris vull oferir a estudiants i curiosos el tipus d'exemples que a mi m'hauria encantat tenir quan feia la carrera. Són projectes ambiciosos que normalment portarien anys i equips sencers. Gràcies a les eines d'IA actuals, puc abordar-los amb una agilitat impensable fa poc, fent que sistemes complexos estiguin a l'abast de qualsevol que vulgui aprendre.",
        'about-p3': "Ho documento tot a consciència, revisant i polint la documentació mentre la genero. Així m'asseguro d'entendre cada racó del que creo, i que els manuals siguin el més clars i útils possible. Documentar bé no és només per als altres: és part fonamental del meu propi aprenentatge.",
        'highlight-1-title': 'Per aprendre',
        'highlight-1-desc': 'Projectes pensats per ensenyar',
        'highlight-2-title': 'A baix nivell',
        'highlight-2-desc': "Des d'assemblador fins al kernel",
        'highlight-3-title': 'Codi obert',
        'highlight-3-desc': 'Tot disponible lliurement',
        'projects-tag': 'El que faig',
        'projects-title': 'Projectes',
        'projects-subtitle': "Invents que em diverteixen i dels quals aprenc",
        'status-active': 'En desenvolupament',
        'status-completed': 'Acabat',
        'status-fork': 'Fork',
        'project-thunderos-title': 'ThunderOS',
        'project-thunderos-desc': "Un sistema operatiu lleuger per a RISC-V amb finalitats educatives. Una base neta per a qui vulgui ficar-se en desenvolupament de SO i sistemes encastats.",
        'project-compi-title': 'Compi',
        'project-compi-desc': "Un compilador de C a VHDL que uneix el món del software amb el del hardware. Ideal per prototipar circuits a partir de codi d'alt nivell.",
        'project-brain-title': 'Classificador de tumors cerebrals',
        'project-brain-desc': "Model de deep learning que classifica ressonàncies magnètiques de tumors cerebrals. Un exemple pràctic d'IA aplicada a la medicina.",
        'project-libmigdb-title': 'libmigdb',
        'project-libmigdb-desc': "Fork d'una biblioteca per comunicar-se amb GDB a través de la seva interfície màquina. Útil per construir eines de depuració.",
        'skills-tag': 'Experiència',
        'skills-title': 'Habilitats tècniques',
        'skills-languages': 'Llenguatges',
        'skills-systems': 'Sistemes',
        'skills-tools': 'Eines',
        'skill-os': 'Sistemes operatius',
        'skill-embedded': 'Sistemes encastats',
        'skill-memory': 'Gestió de memòria',
        'skill-drivers': 'Drivers',
        'contact-tag': 'Parlem',
        'contact-title': 'Xerrem?',
        'contact-desc': "T'interessa col·laborar en algun projecte o simplement vols parlar de sistemes operatius, compiladors o emuladors? Escriu-me sense compromís!",
        'coffee-text': 'Funciono a cop<br>de cafè i curiositat',
        'footer-text': 'Creant projectes que em diverteixen i em fan aprendre.',
        'copyright': '© 2025 cmelnulabs. Tots els drets reservats.'
    }
};

// Typewriter phrases per language
const typewriterPhrases = {
    en: ['Scratch My Itch', 'Teach & Inspire', 'Push Boundaries', 'Explore Systems', 'Build From Scratch'],
    es: ['Me Divierten', 'Me Hacen Aprender', 'Rompen Esquemas', 'Van a lo Profundo', 'Parten de Cero'],
    ca: ['Em Diverteixen', 'Em Fan Aprendre', 'Trenquen Esquemes', 'Van al Fons', 'Parteixen de Zero']
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initTheme();
    initLanguage();
    initTypewriter();
    fetchGitHubStats();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
    initScrollAnimations();
});

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Language Management
function initLanguage() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangSpan = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-option');

    // Load saved language or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });

    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });
}

function setLanguage(lang) {
    const currentLangSpan = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-option');

    // Update global language
    currentLang = lang;

    // Update current language display
    currentLangSpan.textContent = lang.toUpperCase();

    // Update active state
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Save to localStorage
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Translate page
    translatePage(lang);
}

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    const translation = translations[lang];

    if (!translation) return;

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            // Handle HTML content (for elements with inline formatting)
            if (translation[key].includes('<')) {
                element.innerHTML = translation[key];
            } else {
                element.textContent = translation[key];
            }
        }
    });

    // Handle elements with data-i18n-title for tooltips/titles
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translation[key]) {
            element.setAttribute('title', translation[key]);
        }
    });
}

// Typewriter Effect
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const phrases = typewriterPhrases[currentLang] || typewriterPhrases['en'];
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typingSpeed);
    }

    if (typewriter) {
        setTimeout(type, 1000);
    }
}

// Fetch GitHub Stats in Real-Time
async function fetchGitHubStats() {
    const username = 'cmelnulabs';
    const reposElement = document.getElementById('repos-count');
    const followersElement = document.getElementById('followers-count');

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Failed to fetch GitHub data');

        const data = await response.json();

        // Animate the numbers
        animateCount(reposElement, data.public_repos);
        animateCount(followersElement, data.followers);
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        reposElement.textContent = '-';
        followersElement.textContent = '-';
    }
}

function animateCount(element, target) {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;

    function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(startValue + (target - startValue) * easeOut);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCount);
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-links');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .highlight-item, .about-image, .contact-visual'
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Skill progress bars animation on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.getPropertyValue('--progress');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        bar.style.width = '0';
        observer.observe(bar);
    });
}

// Initialize skill bars animation
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Add some interactivity to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('%c⚡ cmelnulabs', 'font-size: 24px; font-weight: bold; color: #0ea5e9;');
console.log('%cBuilding educational projects that scratch my own itch', 'font-size: 14px; color: #94a3b8;');
