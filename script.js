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
        'page-title': 'cmelnulabs - Proyectos Educativos y Código Abierto',
        'nav-about': 'Sobre mí',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contacto',
        'nav-github': 'GitHub',
        'hero-badge': 'Desarrollador Open Source',
        'hero-title-1': 'Construyendo',
        'hero-title-2': 'Proyectos',
        'hero-title-3': 'Educativos Que',
        'hero-subtitle-1': 'Creando emuladores, compiladores, sistemas operativos, y todo lo que suene divertido.',
        'hero-subtitle-2': 'Impulsado por café y vibe coding',
        'hero-cta-projects': 'Explorar Proyectos',
        'hero-cta-github': 'Ver GitHub',
        'stat-repos': 'Repos Públicos',
        'stat-followers': 'Seguidores',
        'about-tag': 'Sobre Mí',
        'about-title': 'El Desarrollador Detrás del Código',
        'about-intro': "Soy <strong>Christian</strong>, un desarrollador en <span class=\"highlight\">Barcelona</span> al que le encanta profundizar en cómo funcionan realmente los ordenadores.",
        'about-p1': 'Mis proyectos exploran los fundamentos de la informática — desde construir sistemas operativos desde cero hasta crear compiladores y emuladores. Creo que la mejor manera de entender la tecnología es construirla tú mismo.',
        'about-p2': 'A través de estos repositorios, pretendo proporcionar a desarrolladores en formación y mentes curiosas el tipo de ejemplos de proyectos que me hubiera gustado tener cuando estudiaba. Muchos de estos son proyectos ambiciosos que típicamente abarcan varios años y requieren equipos de desarrolladores. Con herramientas modernas de IA, puedo abordarlos con una velocidad y flexibilidad sin precedentes, haciendo sistemas complejos más accesibles para aprender y construir sobre ellos.',
        'about-p3': 'Todos los proyectos están documentados a fondo, y reviso y refino continuamente esta documentación mientras se genera. Este proceso asegura que entiendo completamente el funcionamiento interno de cada proyecto que creo, garantizando que los manuales proporcionen la información más detallada y clara posible. La documentación clara no es solo para otros — es una parte esencial de mi propio viaje de aprendizaje.',
        'highlight-1-title': 'Enfoque Educativo',
        'highlight-1-desc': 'Proyectos diseñados para enseñar e inspirar',
        'highlight-2-title': 'Experiencia Low-Level',
        'highlight-2-desc': 'Desde ensamblador hasta sistemas operativos',
        'highlight-3-title': 'Código Abierto',
        'highlight-3-desc': 'Todos los proyectos disponibles gratuitamente',
        'projects-tag': 'Trabajo Destacado',
        'projects-title': 'Proyectos',
        'projects-subtitle': 'Proyectos educativos que satisfacen mi propia curiosidad',
        'status-active': 'En Desarrollo',
        'status-completed': 'Completado',
        'status-fork': 'Fork',
        'project-thunderos-title': 'ThunderOS',
        'project-thunderos-desc': 'Un sistema operativo RISC-V ligero para uso educativo, proporcionando una base limpia para el desarrollo de SO y la experimentación con sistemas embebidos.',
        'project-compi-title': 'Compi',
        'project-compi-desc': 'Un compilador de C a VHDL que conecta el diseño de software y hardware, permitiendo la creación rápida de prototipos de hardware desde código C de alto nivel.',
        'project-brain-title': 'Clasificador de Tumores Cerebrales',
        'project-brain-desc': 'Un modelo de machine learning que clasifica imágenes de resonancia magnética de tumores cerebrales por tipo, demostrando aplicaciones prácticas del deep learning en salud.',
        'project-libmigdb-title': 'libmigdb',
        'project-libmigdb-desc': 'Fork de biblioteca GDB/Machine Interface - Una biblioteca para interactuar con la interfaz de máquina de GDB para construir frontends de depurador.',
        'skills-tag': 'Experiencia',
        'skills-title': 'Habilidades Técnicas',
        'skills-languages': 'Lenguajes',
        'skills-systems': 'Sistemas',
        'skills-tools': 'Herramientas y Plataformas',
        'skill-os': 'Sistemas Operativos',
        'skill-embedded': 'Sistemas Embebidos',
        'skill-memory': 'Gestión de Memoria',
        'skill-drivers': 'Controladores de Dispositivos',
        'contact-tag': 'Contacto',
        'contact-title': 'Construyamos Algo',
        'contact-desc': '¿Interesado en colaborar en un proyecto de código abierto o simplemente quieres charlar sobre sistemas operativos, compiladores o emuladores? ¡No dudes en escribirme!',
        'coffee-text': 'Impulsado por café<br>y curiosidad',
        'footer-text': 'Construyendo proyectos educativos que satisfacen mi propia curiosidad.',
        'copyright': '© 2025 cmelnulabs. Todos los derechos reservados.'
    },
    ca: {
        'page-title': 'cmelnulabs - Projectes Educatius i Codi Obert',
        'nav-about': 'Sobre mi',
        'nav-projects': 'Projectes',
        'nav-skills': 'Habilitats',
        'nav-contact': 'Contacte',
        'nav-github': 'GitHub',
        'hero-badge': 'Desenvolupador Open Source',
        'hero-title-1': 'Construint',
        'hero-title-2': 'Projectes',
        'hero-title-3': 'Educatius Que',
        'hero-subtitle-1': "Creant emuladors, compiladors, sistemes operatius, i tot el que soni divertit.",
        'hero-subtitle-2': 'Impulsat per cafè i vibe coding',
        'hero-cta-projects': 'Explorar Projectes',
        'hero-cta-github': 'Veure GitHub',
        'stat-repos': 'Repos Públics',
        'stat-followers': 'Seguidors',
        'about-tag': 'Sobre Mi',
        'about-title': 'El Desenvolupador Darrere del Codi',
        'about-intro': "Soc <strong>Christian</strong>, un desenvolupador a <span class=\"highlight\">Barcelona</span> a qui li encanta aprofundir en com funcionen realment els ordinadors.",
        'about-p1': "Els meus projectes exploren els fonaments de la informàtica — des de construir sistemes operatius des de zero fins a crear compiladors i emuladors. Crec que la millor manera d'entendre la tecnologia és construir-la tu mateix.",
        'about-p2': "A través d'aquests repositoris, pretenc proporcionar a desenvolupadors en formació i ments curioses el tipus d'exemples de projectes que m'hauria agradat tenir quan estudiava. Molts d'aquests són projectes ambiciosos que típicament abasten diversos anys i requereixen equips de desenvolupadors. Amb eines modernes d'IA, puc abordar-los amb una velocitat i flexibilitat sense precedents, fent sistemes complexos més accessibles per aprendre i construir sobre ells.",
        'about-p3': "Tots els projectes estan documentats a fons, i reviso i refino contínuament aquesta documentació mentre es genera. Aquest procés assegura que entenc completament el funcionament intern de cada projecte que creo, garantint que els manuals proporcionin la informació més detallada i clara possible. La documentació clara no és només per als altres — és una part essencial del meu propi viatge d'aprenentatge.",
        'highlight-1-title': 'Enfocament Educatiu',
        'highlight-1-desc': 'Projectes dissenyats per ensenyar i inspirar',
        'highlight-2-title': 'Experiència Low-Level',
        'highlight-2-desc': 'Des de assemblador fins a sistemes operatius',
        'highlight-3-title': 'Codi Obert',
        'highlight-3-desc': 'Tots els projectes disponibles gratuïtament',
        'projects-tag': 'Treball Destacat',
        'projects-title': 'Projectes',
        'projects-subtitle': 'Projectes educatius que satisfan la meva pròpia curiositat',
        'status-active': 'En Desenvolupament',
        'status-completed': 'Completat',
        'status-fork': 'Fork',
        'project-thunderos-title': 'ThunderOS',
        'project-thunderos-desc': "Un sistema operatiu RISC-V lleuger per a ús educatiu, proporcionant una base neta per al desenvolupament de SO i l'experimentació amb sistemes encastats.",
        'project-compi-title': 'Compi',
        'project-compi-desc': "Un compilador de C a VHDL que connecta el disseny de software i hardware, permetent la creació ràpida de prototips de hardware des de codi C d'alt nivell.",
        'project-brain-title': 'Classificador de Tumors Cerebrals',
        'project-brain-desc': "Un model de machine learning que classifica imatges de ressonància magnètica de tumors cerebrals per tipus, demostrant aplicacions pràctiques del deep learning en salut.",
        'project-libmigdb-title': 'libmigdb',
        'project-libmigdb-desc': "Fork de biblioteca GDB/Machine Interface - Una biblioteca per interactuar amb la interfície de màquina de GDB per construir frontends de depurador.",
        'skills-tag': 'Experiència',
        'skills-title': 'Habilitats Tècniques',
        'skills-languages': 'Llenguatges',
        'skills-systems': 'Sistemes',
        'skills-tools': 'Eines i Plataformes',
        'skill-os': 'Sistemes Operatius',
        'skill-embedded': 'Sistemes Encastats',
        'skill-memory': 'Gestió de Memòria',
        'skill-drivers': 'Controladors de Dispositius',
        'contact-tag': 'Contacte',
        'contact-title': 'Construïm Alguna Cosa',
        'contact-desc': "Interessat en col·laborar en un projecte de codi obert o simplement vols xerrar sobre sistemes operatius, compiladors o emuladors? No dubtis a escriure'm!",
        'coffee-text': 'Impulsat per cafè<br>i curiositat',
        'footer-text': 'Construint projectes educatius que satisfan la meva pròpia curiositat.',
        'copyright': '© 2025 cmelnulabs. Tots els drets reservats.'
    }
};

// Typewriter phrases per language
const typewriterPhrases = {
    en: ['Scratch My Itch', 'Teach & Inspire', 'Push Boundaries', 'Explore Systems', 'Build From Scratch'],
    es: ['Satisfacen Mi Curiosidad', 'Enseñan e Inspiran', 'Rompen Límites', 'Exploran Sistemas', 'Se Construyen Desde Cero'],
    ca: ['Satisfan La Meva Curiositat', 'Ensenyen i Inspiren', 'Trenquen Límits', 'Exploren Sistemes', 'Es Construeixen Des de Zero']
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
