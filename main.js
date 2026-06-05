/* ============================================
   ENHANCED JS v8
   Theme Toggle | Search | Clay/Glass Effects
   Performance Optimized | Mobile First
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // THEME SYSTEM - Light/Dark Toggle
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            if (themeIcon) {
                themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
            }

            // Animate theme change
            themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 400);
        });
    }

    // ============================================
    // PROJECT SEARCH SYSTEM
    // Auto-detects new projects added to the grid
    // ============================================
    const searchInput = document.getElementById('projectSearch');
    const searchClear = document.getElementById('searchClear');
    const searchResultsCount = document.getElementById('searchResultsCount');
    const noResults = document.getElementById('noResults');
    const projectsGrid = document.querySelector('.projects-grid');

    if (searchInput && projectsGrid) {
        // Get all project cards dynamically (auto-detects new additions)
        function getProjectCards() {
            return Array.from(projectsGrid.querySelectorAll('.project-card'));
        }

        function performSearch(query) {
            const cards = getProjectCards();
            const lowerQuery = query.toLowerCase().trim();
            let visibleCount = 0;

            cards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
                const techTags = Array.from(card.querySelectorAll('.project-tech span'))
                    .map(s => s.textContent.toLowerCase()).join(' ');

                const match = title.includes(lowerQuery) ||
                             desc.includes(lowerQuery) ||
                             techTags.includes(lowerQuery);

                if (match || lowerQuery === '') {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px) scale(0.97)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, visibleCount * 60);
                    visibleCount++;
                } else {
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });

            // Show/hide clear button
            if (searchClear) {
                searchClear.classList.toggle('visible', lowerQuery !== '');
            }

            // Show results count
            if (searchResultsCount) {
                if (lowerQuery !== '') {
                    searchResultsCount.textContent = `Found ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
                    searchResultsCount.classList.add('visible');
                } else {
                    searchResultsCount.classList.remove('visible');
                }
            }

            // Show/hide no results
            if (noResults) {
                if (visibleCount === 0 && lowerQuery !== '') {
                    noResults.classList.add('visible');
                } else {
                    noResults.classList.remove('visible');
                }
            }
        }

        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                searchInput.value = '';
                performSearch('');
                searchInput.focus();
            });
        }

        // Keyboard shortcut: Ctrl/Cmd + K to focus search
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
            // Escape to clear search
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                searchInput.value = '';
                performSearch('');
                searchInput.blur();
            }
        });
    }

    // ============================================
    // LIGHTWEIGHT PARTICLE SYSTEM
    // ============================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let mouseX = -1000, mouseY = -1000;
        let isTouch = window.matchMedia('(pointer: coarse)').matches;
        let frameCount = 0;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas, { passive: true });

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.25;
                this.speedY = (Math.random() - 0.5) * 0.25;
                this.opacity = Math.random() * 0.25 + 0.08;
                this.hue = 195 + Math.random() * 30; // Sky blue range
                this.originalX = this.x;
                this.originalY = this.y;
            }

            update() {
                if (!isTouch && frameCount % 2 === 0) {
                    const dx = this.x - mouseX;
                    const dy = this.y - mouseY;
                    const distanceSq = dx * dx + dy * dy;
                    if (distanceSq < 40000) {
                        const distance = Math.sqrt(distanceSq);
                        const force = (200 - distance) / 200;
                        this.x += dx * force * 0.015;
                        this.y += dy * force * 0.015;
                    }
                }

                this.x += (this.originalX - this.x) * 0.01;
                this.y += (this.originalY - this.y) * 0.01;
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) { this.x = canvas.width; this.originalX = this.x; }
                if (this.x > canvas.width) { this.x = 0; this.originalX = this.x; }
                if (this.y < 0) { this.y = canvas.height; this.originalY = this.y; }
                if (this.y > canvas.height) { this.y = 0; this.originalY = this.y; }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 55%, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(Math.floor(window.innerWidth / 12), 60);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            frameCount++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            // Draw connections every 3rd frame for performance
            if (frameCount % 3 === 0) {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distanceSq = dx * dx + dy * dy;
                        if (distanceSq < 25000) {
                            const distance = Math.sqrt(distanceSq);
                            const opacity = 0.06 * (1 - distance / 150);
                            ctx.beginPath();
                            ctx.strokeStyle = `hsla(200, 70%, 50%, ${opacity})`;
                            ctx.lineWidth = 0.6;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            animationId = requestAnimationFrame(animateParticles);
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        initParticles();
        animateParticles();
    }

    // ============================================
    // WATER BUBBLES BACKGROUND
    // ============================================
    function createWaterBubbles() {
        const bubbleCount = window.innerWidth > 768 ? 8 : 4;
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'water-bubble';
            const size = Math.random() * 60 + 20;
            bubble.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                animation-duration: ${Math.random() * 15 + 10}s;
                animation-delay: ${Math.random() * 10}s;
                opacity: ${Math.random() * 0.3 + 0.1};
            `;
            document.body.appendChild(bubble);
        }
    }
    createWaterBubbles();

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    navbar.classList.toggle('scrolled', window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // MOBILE MENU
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ============================================
    // INTERSECTION OBSERVER - FADE IN
    // ============================================
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    if (target && !counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        let current = 0;
                        const increment = target / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                counter.textContent = target + (target === 100 ? '%' : '+');
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
                            }
                        }, 30);
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============================================
    // TYPEWRITER EFFECT WITH CURSOR
    // ============================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleText = heroTitle.textContent.trim();
        heroTitle.innerHTML = '<span class="type-text"></span><span class="type-cursor">|</span>';
        const typeText = heroTitle.querySelector('.type-text');
        const typeCursor = heroTitle.querySelector('.type-cursor');

        let charIndex = 0;
        let cursorVisible = true;

        setInterval(() => {
            cursorVisible = !cursorVisible;
            typeCursor.style.opacity = cursorVisible ? '1' : '0';
        }, 530);

        function typeWriter() {
            if (charIndex < titleText.length) {
                typeText.textContent += titleText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50 + Math.random() * 30);
            }
        }
        setTimeout(typeWriter, 400);
    }

    // ============================================
    // HERO PARALLAX
    // ============================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    if (scrolled < window.innerHeight) {
                        heroContent.style.transform = 'translateY(' + (scrolled * 0.15) + 'px)';
                        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // 3D TILT EFFECT ON CARDS - Optimized
    // ============================================
    const tiltCards = document.querySelectorAll('.skill-category, .project-card, .focus-item, .stat-card, .glass-card, .contact-card');

    if (!isTouch) {
        tiltCards.forEach(card => {
            let rafId = null;

            card.addEventListener('mousemove', (e) => {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 25;
                    const rotateY = (centerX - x) / 25;

                    card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-10px) scale(1.02)';
                    card.style.transition = 'transform 0.1s ease-out';
                    card.style.zIndex = '10';
                });
            });

            card.addEventListener('mouseleave', () => {
                if (rafId) cancelAnimationFrame(rafId);
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
                card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
                card.style.zIndex = '';
            });
        });
    }

    // ============================================
    // CURSOR GLOW EFFECT (Desktop only)
    // ============================================
    if (window.innerWidth > 768 && !isTouch) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        let glowX = 0, glowY = 0;
        let currentX = 0, currentY = 0;
        let isMoving = false;
        let moveTimeout;
        let glowRaf;

        document.addEventListener('mousemove', (e) => {
            glowX = e.clientX;
            glowY = e.clientY;
            isMoving = true;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => { isMoving = false; }, 100);
        }, { passive: true });

        function animateGlow() {
            const ease = isMoving ? 0.12 : 0.05;
            currentX += (glowX - currentX) * ease;
            currentY += (glowY - currentY) * ease;
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            glowRaf = requestAnimationFrame(animateGlow);
        }
        animateGlow();
    }

    // ============================================
    // LIQUID BUTTON RIPPLE EFFECT
    // ============================================
    document.querySelectorAll('.btn, .project-links a, .contact-link').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 18px;
                height: 18px;
                background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.15) 40%, transparent 70%);
                border-radius: 50%;
                left: ${x - 9}px;
                top: ${y - 9}px;
                pointer-events: none;
                animation: rippleExpand 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                z-index: 10;
            `;

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 800);
        });
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleExpand {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(25); opacity: 0; }
        }
        .type-cursor {
            color: var(--accent-main);
            font-weight: 300;
            margin-left: 2px;
            text-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
        }
    `;
    document.head.appendChild(rippleStyle);

    // ============================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ============================================
    // PAGE TRANSITION
    // ============================================
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname && this.hostname !== window.location.hostname) return;
            if (this.target === '_blank') return;

            e.preventDefault();
            const href = this.getAttribute('href');

            const transition = document.querySelector('.page-transition') || document.createElement('div');
            transition.className = 'page-transition';
            if (!document.querySelector('.page-transition')) {
                document.body.appendChild(transition);
            }

            transition.classList.add('active');

            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    });

    // ============================================
    // MAGNETIC BUTTON EFFECT
    // ============================================
    if (!isTouch) {
        const magneticElements = document.querySelectorAll('.btn, .project-links a, .contact-link');

        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    }

    // ============================================
    // FLOATING ELEMENTS ANIMATION
    // ============================================
    const floatingElements = document.querySelectorAll('.hero-badge, .scroll-indicator');
    floatingElements.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.4}s`;
    });

    // ============================================
    // TEXT SCRAMBLE EFFECT
    // ============================================
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }

        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 15);
                const end = start + Math.floor(Math.random() * 15);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }

        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.25) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span style="color: var(--accent-deep); text-shadow: 0 0 8px rgba(14,165,233,0.3);">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }

        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    document.querySelectorAll('.section-label').forEach(el => {
        const fx = new TextScramble(el);
        const originalText = el.innerText;
        let isHovering = false;

        el.addEventListener('mouseenter', () => {
            if (!isHovering) {
                isHovering = true;
                fx.setText(originalText).then(() => {
                    isHovering = false;
                });
            }
        });
    });

    // ============================================
    // CLAY BREATHING EFFECT - Optimized
    // ============================================
    const clayCards = document.querySelectorAll('.skill-category, .focus-item, .stat-card');
    clayCards.forEach((card, index) => {
        card.style.animation = `clayBreathe ${5 + index * 0.4}s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.3}s`;
    });

    const clayStyle = document.createElement('style');
    clayStyle.textContent = `
        @keyframes clayBreathe {
            0%, 100% { box-shadow: 20px 20px 60px var(--clay-shadow), -12px -12px 60px var(--clay-highlight), inset 2px 2px 6px rgba(255,255,255,0.5), inset -3px -3px 10px rgba(14, 165, 233, 0.03); }
            50% { box-shadow: 24px 24px 70px rgba(14, 165, 233, 0.18), -14px -14px 70px var(--clay-highlight), inset 3px 3px 8px rgba(255,255,255,0.6), inset -4px -4px 12px rgba(14, 165, 233, 0.05); }
        }
    `;
    document.head.appendChild(clayStyle);

    // ============================================
    // NAVBAR FLOATING EFFECT - Optimized
    // ============================================
    let navbarFloat = 0;
    let navEl = document.getElementById('navbar');
    function animateNavbar() {
        navbarFloat += 0.015;
        if (navEl && !navEl.classList.contains('scrolled')) {
            const floatY = Math.sin(navbarFloat) * 1.5;
            navEl.style.transform = `translateX(-50%) translateY(${floatY}px)`;
        } else if (navEl) {
            navEl.style.transform = `translateX(-50%) translateY(0px)`;
        }
        requestAnimationFrame(animateNavbar);
    }
    animateNavbar();

})();