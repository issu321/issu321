/* ============================================
   PRISM GLASS - ENHANCED INTERACTIONS
   Theme | Search | Glass Effects | Animations
   ============================================ */

(function() {
    'use strict';

    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    // ============================================
    // THEME SYSTEM - Prism Toggle
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    const html = document.documentElement;

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

            themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 400);
        });
    }

    // ============================================
    // PROJECT SEARCH SYSTEM
    // ============================================
    const searchInput = document.getElementById('projectSearch');
    const searchClear = document.getElementById('searchClear');
    const searchResultsCount = document.getElementById('searchResultsCount');
    const noResults = document.getElementById('noResults');
    const projectsGrid = document.querySelector('.projects-grid');

    if (searchInput && projectsGrid) {
        function getProjectCards() {
            return Array.from(projectsGrid.querySelectorAll('.project-card'));
        }

        function performSearch(query) {
            const cards = getProjectCards();
            const lowerQuery = query.toLowerCase().trim();
            let visibleCount = 0;

            cards.forEach((card, index) => {
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
                    card.style.transform = 'translateY(30px) scale(0.95)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, visibleCount * 80);
                    visibleCount++;
                } else {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9) rotateX(10deg)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });

            if (searchClear) {
                searchClear.classList.toggle('visible', lowerQuery !== '');
            }

            if (searchResultsCount) {
                if (lowerQuery !== '') {
                    searchResultsCount.textContent = `Found ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
                    searchResultsCount.classList.add('visible');
                } else {
                    searchResultsCount.classList.remove('visible');
                }
            }

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

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                searchInput.value = '';
                performSearch('');
                searchInput.blur();
            }
        });
    }

    // ============================================
    // ENHANCED PARTICLE SYSTEM - Prism Nebula
    // ============================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let mouseX = -1000, mouseY = -1000;
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
                this.size = Math.random() * 3 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.3 + 0.1;
                this.hue = Math.random() > 0.5 ? 
                    245 + Math.random() * 30 : // Indigo-Violet
                    180 + Math.random() * 40;  // Cyan
                this.originalX = this.x;
                this.originalY = this.y;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update() {
                if (!isTouch && frameCount % 2 === 0) {
                    const dx = this.x - mouseX;
                    const dy = this.y - mouseY;
                    const distanceSq = dx * dx + dy * dy;
                    if (distanceSq < 50000) {
                        const distance = Math.sqrt(distanceSq);
                        const force = (220 - distance) / 220;
                        this.x += dx * force * 0.02;
                        this.y += dy * force * 0.02;
                    }
                }

                this.x += (this.originalX - this.x) * 0.008;
                this.y += (this.originalY - this.y) * 0.008;
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulsePhase += 0.02;

                if (this.x < 0) { this.x = canvas.width; this.originalX = this.x; }
                if (this.x > canvas.width) { this.x = 0; this.originalX = this.x; }
                if (this.y < 0) { this.y = canvas.height; this.originalY = this.y; }
                if (this.y > canvas.height) { this.y = 0; this.originalY = this.y; }
            }

            draw() {
                const pulse = Math.sin(this.pulsePhase) * 0.15 + 0.85;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 90%, 65%, ${this.opacity * pulse})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(Math.floor(window.innerWidth / 10), 80);
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

            // Draw connections every 2nd frame
            if (frameCount % 2 === 0) {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distanceSq = dx * dx + dy * dy;
                        if (distanceSq < 20000) {
                            const distance = Math.sqrt(distanceSq);
                            const opacity = 0.08 * (1 - distance / 140);
                            ctx.beginPath();
                            ctx.strokeStyle = `hsla(220, 80%, 60%, ${opacity})`;
                            ctx.lineWidth = 0.8;
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
    // CSS AURORA PARTICLES (Supplement)
    // ============================================
    function createAuroraParticles() {
        const count = window.innerWidth > 768 ? 12 : 6;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'aurora-particle';
            const size = Math.random() * 4 + 2;
            const hue = Math.random() > 0.5 ? 245 : 180;
            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                background: hsla(${hue}, 90%, 70%, ${Math.random() * 0.4 + 0.2});
                animation-duration: ${Math.random() * 20 + 15}s;
                animation-delay: ${Math.random() * 15}s;
            `;
            document.body.appendChild(p);
        }
    }
    createAuroraParticles();

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
    // INTERSECTION OBSERVER - Prism Reveal
    // ============================================
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
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
                        const increment = target / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                counter.textContent = target + (target === 100 ? '%' : '+');
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
                            }
                        }, 25);
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
    // TYPEWRITER EFFECT
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
                setTimeout(typeWriter, 45 + Math.random() * 25);
            }
        }
        setTimeout(typeWriter, 500);
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
                        heroContent.style.transform = 'translateY(' + (scrolled * 0.2) + 'px)';
                        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7));
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // 3D TILT + MOUSE GLOW + GLARE
    // ============================================
    const tiltCards = document.querySelectorAll('.skill-category, .project-card, .focus-item, .stat-card, .glass-card, .contact-card');

    if (!isTouch) {
        tiltCards.forEach(card => {
            // Add mouse-glow element if not present
            if (!card.querySelector('.mouse-glow')) {
                const glow = document.createElement('div');
                glow.className = 'mouse-glow';
                card.insertBefore(glow, card.firstChild);
            }

            let rafId = null;

            card.addEventListener('mousemove', (e) => {
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;

                    card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-12px) scale(1.02)';
                    card.style.transition = 'transform 0.15s ease-out';
                    card.style.zIndex = '10';

                    // Update CSS variables for inner glow
                    card.style.setProperty('--mouse-x', x + 'px');
                    card.style.setProperty('--mouse-y', y + 'px');
                });
            });

            card.addEventListener('mouseleave', () => {
                if (rafId) cancelAnimationFrame(rafId);
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
                card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
                card.style.zIndex = '';
            });
        });
    }

    // ============================================
    // CUSTOM CURSOR SYSTEM
    // ============================================
    if (window.innerWidth > 768 && !isTouch) {
        // Glow
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        // Dot
        const cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursorDot);

        let glowX = 0, glowY = 0;
        let currentX = 0, currentY = 0;
        let dotX = 0, dotY = 0;
        let isMoving = false;
        let moveTimeout;
        let glowRaf, dotRaf;

        document.addEventListener('mousemove', (e) => {
            glowX = e.clientX;
            glowY = e.clientY;
            dotX = e.clientX;
            dotY = e.clientY;
            isMoving = true;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => { isMoving = false; }, 100);
        }, { passive: true });

        // Detect hover on interactive elements
        const interactiveSelectors = 'a, button, .btn, .project-links a, .contact-link, .skill-tag, .project-tech span';
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(interactiveSelectors)) {
                cursorDot.classList.add('hovering');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(interactiveSelectors)) {
                cursorDot.classList.remove('hovering');
            }
        });

        function animateGlow() {
            const ease = isMoving ? 0.1 : 0.04;
            currentX += (glowX - currentX) * ease;
            currentY += (glowY - currentY) * ease;
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            glowRaf = requestAnimationFrame(animateGlow);
        }

        function animateDot() {
            const rect = cursorDot.getBoundingClientRect();
            const currentDotX = rect.left + rect.width / 2;
            const currentDotY = rect.top + rect.height / 2;
            const newX = currentDotX + (dotX - currentDotX) * 0.2;
            const newY = currentDotY + (dotY - currentDotY) * 0.2;
            cursorDot.style.left = newX + 'px';
            cursorDot.style.top = newY + 'px';
            dotRaf = requestAnimationFrame(animateDot);
        }

        animateGlow();
        animateDot();
    }

    // ============================================
    // LIQUID RIPPLE EFFECT - Prism Burst
    // ============================================
    document.querySelectorAll('.btn, .project-links a, .contact-link').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(236,72,153,0.2) 40%, transparent 70%);
                border-radius: 50%;
                left: ${x - 10}px;
                top: ${y - 10}px;
                pointer-events: none;
                animation: rippleExpand 0.9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                z-index: 10;
            `;

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 900);
        });
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleExpand {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(30); opacity: 0; }
        }
        .type-cursor {
            background: var(--gradient-text);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 300;
            margin-left: 2px;
            filter: drop-shadow(0 0 8px rgba(99,102,241,0.4));
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
            }, 400);
        });
    });

    // ============================================
    // MAGNETIC BUTTON EFFECT - Stronger
    // ============================================
    if (!isTouch) {
        const magneticElements = document.querySelectorAll('.btn, .project-links a, .contact-link, .theme-toggle, .nav-logo');

        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
                el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
                setTimeout(() => {
                    el.style.transition = '';
                }, 500);
            });
        });
    }

    // ============================================
    // FLOATING ELEMENTS ANIMATION
    // ============================================
    const floatingElements = document.querySelectorAll('.hero-badge, .scroll-indicator');
    floatingElements.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.5}s`;
    });

    // ============================================
    // TEXT SCRAMBLE EFFECT
    // ============================================
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\/[]{}—=+*^?#________';
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
                    output += `<span style="background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 6px rgba(99,102,241,0.3));">${char}</span>`;
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
    // CARD FLOATING BREATHING - Organic
    // ============================================
    const floatCards = document.querySelectorAll('.skill-category, .focus-item, .stat-card');
    floatCards.forEach((card, index) => {
        card.style.animation = `prismFloat ${6 + index * 0.5}s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.4}s`;
    });

    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes prismFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .skill-category:hover, .focus-item:hover, .stat-card:hover {
            animation-play-state: paused;
        }
    `;
    document.head.appendChild(floatStyle);

    // ============================================
    // NAVBAR FLOATING EFFECT
    // ============================================
    let navbarFloat = 0;
    let navEl = document.getElementById('navbar');
    function animateNavbar() {
        navbarFloat += 0.012;
        if (navEl && !navEl.classList.contains('scrolled')) {
            const floatY = Math.sin(navbarFloat) * 2;
            navEl.style.transform = `translateX(-50%) translateY(${floatY}px)`;
        } else if (navEl) {
            navEl.style.transform = `translateX(-50%) translateY(0px)`;
        }
        requestAnimationFrame(animateNavbar);
    }
    animateNavbar();

    // ============================================
    // PROJECT CARD IMAGE SVG HOLOGRAPHIC STROKE
    // ============================================
    const svgGradient = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgGradient.setAttribute('width', '0');
    svgGradient.setAttribute('height', '0');
    svgGradient.innerHTML = `
        <defs>
            <linearGradient id="holographic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
            </linearGradient>
        </defs>
    `;
    document.body.appendChild(svgGradient);

})();
