document.addEventListener('DOMContentLoaded', function() {

    // --- 1. ANIMASI KETIKAN --- //
    const typingElement = document.getElementById('typing-animation');
    if (typingElement) {
        // Hapus AOS init dari sini jika sudah ada di HTML
        AOS.init({
            duration: 1000,
            once: true
        });

        const textToType = "Muhammad Fikri Haykal";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typingElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    // --- 2. LOGIKA LANYARD FLIP --- //
    const lanyardCard = document.getElementById('lanyardCard');
    if (lanyardCard) {
        lanyardCard.addEventListener('click', function() {
            this.classList.toggle('is-flipped');
        });
    }

    // --- 3. LOGIKA HAMBURGER MENU --- //
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('is-active');
        });

        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    hamburger.classList.remove('is-active');
                }
            });
        });
    }

    // Pindahkan inisialisasi AOS ke sini jika belum ada di HTML
    if (typeof AOS !== 'undefined' && !document.querySelector('script[src*="aos.js"]').hasAttribute('data-aos-init')) {
        AOS.init({
            duration: 1000,
            once: true
        });
    }


    // --- 5. CUSTOM CURSOR SCRIPT ---
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {
                duration: 500,
                fill: "forwards"
            });
        });

        const interactiveElements = document.querySelectorAll('a, button, .project-card, .lanyard-card, .social-card');

        interactiveElements.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(247, 191, 79, 0.2)';
            });
            item.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });

        document.body.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = 1;
            cursorOutline.style.opacity = 1;
        });
    
        document.body.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = 0;
            cursorOutline.style.opacity = 0;
        });
    }
});