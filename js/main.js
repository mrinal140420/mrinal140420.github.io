document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle debug
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            console.log('Theme toggle clicked');
            toggleTheme();
        });
    } else {
        console.warn('Theme toggle button not found');
    }

    // Razorpay for "Support Me" button
    const supportBtn = document.getElementById('support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openRazorpay();
        });
    }

    // Typed.js for hero section
    const typedElement = document.getElementById('typed');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed', {
            strings: ['Cybersecurity & Forensics', 'CTF Solver', 'Web Developer','Python Passionate'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    } else if (typedElement) {
        console.warn('Typed.js not loaded; using static text.');
        typedElement.textContent = 'Cybersecurity & Forensics';
    }

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#007bff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                move: { enable: true, speed: 2 }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                }
            }
        });
    }

    // Debug hero background image
    const hero = document.querySelector('.hero');
    if (hero) {
        const bgImage = getComputedStyle(hero).backgroundImage;
        if (!bgImage.includes('bg.jpg')) {
            console.warn('Hero background image not loaded; check assets/images/bg.jpg');
        } else {
            console.log('Hero background image loaded successfully.');
        }
    }

    // Scroll animations
    const elements = document.querySelectorAll('.portfolio, .hero, .contact-form, .portfolio-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});