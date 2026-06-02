/* ============================================
   DARK CLAYMORPHISM + GLASSMORPHISM + LIQUID UI
   GitHub Dark Theme - Enhanced Animations v5
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // PARTICLE SYSTEM - DARK ICE CRYSTALS
    // ============================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let mouseX = -1000, mouseY = -1000;
        let isTouch = window.matchMedia('(pointer: coarse)').matches;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

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
                this.opacity = Math.random() * 0.35 + 0.1;
                this.hue = Math.random() > 0.5 ? 210 + Math.random() * 30 : 200 + Math.random() * 25;
                this.originalX = this.x;
                this.originalY = this.y;
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.015 + Math.random() * 0.025;
            }

            update() {
                this.pulsePhase += this.pulseSpeed;
                const pulse = Math.sin(this.pulsePhase) * 0.4;

                if (!isTouch) {
                    const dx = this.x - mouseX;
                    const dy = this.y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 200;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        this.x += dx * force * 0.02;
                        this.y += dy * force * 0.02;
                    }
                }

                this.x += (this.originalX - this.x) * 0.012;
                this.y += (this.originalY - this.y) * 0.012;
                this.x += this.speedX + pulse * 0.08;
                this.y += this.speedY + pulse * 0.08;

                if (this.x < 0) { this.x = canvas.width; this.originalX = this.x; }
                if (this.x > canvas.width) { this.x = 0; this.originalX = this.x; }
                if (this.y < 0) { this.y = canvas.height; this.originalY = this.y; }
                if (this.y > canvas.height) { this.y = 0; this.originalY = this.y; }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${this.opacity})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 95%, 85%, ${this.opacity * 0.9})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity * 0.1})`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(Math.floor(window.innerWidth / 10), 90);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 200) {
                        const opacity = 0.08 * (1 - distance / 200);
                        const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
                        gradient.addColorStop(0, `hsla(${a.hue}, 85%, 65%, ${opacity})`);
                        gradient.addColorStop(1, `hsla(${b.hue}, 85%, 65%, ${opacity})`);

                        ctx.beginPath();
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.7;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animateParticles);
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        initParticles();
        animateParticles();
    }

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });
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
        threshold: 0.06,
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
                setTimeout(typeWriter, 55 + Math.random() * 35);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // ============================================
    // HERO PARALLAX
    // ============================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroContent.style.transform = 'translateY(' + (scrolled * 0.2) + 'px)';
                heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.75));
            }
        });
    }

    // ============================================
    // 3D TILT EFFECT ON CARDS - Enhanced
    // ============================================
    const tiltCards = document.querySelectorAll('.skill-category, .project-card, .focus-item, .stat-card, .glass-card, .contact-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-14px) scale(1.03)';
            card.style.transition = 'transform 0.15s ease-out';
            card.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.zIndex = '';
        });
    });

    // ============================================
    // CURSOR GLOW EFFECT (Desktop only)
    // ============================================
    if (window.innerWidth > 768 && !window.matchMedia('(pointer: coarse)').matches) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);

        let glowX = 0, glowY = 0;
        let currentX = 0, currentY = 0;
        let isMoving = false;
        let moveTimeout;

        document.addEventListener('mousemove', (e) => {
            glowX = e.clientX;
            glowY = e.clientY;
            isMoving = true;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => { isMoving = false; }, 100);
        });

        function animateGlow() {
            const ease = isMoving ? 0.1 : 0.04;
            currentX += (glowX - currentX) * ease;
            currentY += (glowY - currentY) * ease;
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            requestAnimationFrame(animateGlow);
        }
        animateGlow();
    }

    // ============================================
    // LIQUID BUTTON RIPPLE EFFECT - Enhanced
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
                background: radial-gradient(circle, rgba(88, 166, 255, 0.5) 0%, rgba(31, 111, 235, 0.2) 40%, transparent 70%);
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
            color: var(--accent-blue);
            font-weight: 300;
            margin-left: 2px;
            text-shadow: 0 0 15px rgba(88, 166, 255, 0.6);
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
    // MAGNETIC BUTTON EFFECT - Enhanced
    // ============================================
    const magneticElements = document.querySelectorAll('.btn, .project-links a, .contact-link');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

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
                const start = Math.floor(Math.random() * 20);
                const end = start + Math.floor(Math.random() * 20);
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
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span style="color: var(--accent-cyan); text-shadow: 0 0 10px rgba(88,166,255,0.5);">${char}</span>`;
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
    // CLAY BREATHING EFFECT
    // ============================================
    const clayCards = document.querySelectorAll('.skill-category, .focus-item, .stat-card');
    clayCards.forEach((card, index) => {
        card.style.animation = `clayBreathe ${4 + index * 0.3}s ease-in-out infinite`;
        card.style.animationDelay = `${index * 0.2}s`;
    });

    const clayStyle = document.createElement('style');
    clayStyle.textContent = `
        @keyframes clayBreathe {
            0%, 100% { box-shadow: 25px 25px 70px rgba(0, 0, 0, 0.4), -25px -25px 70px rgba(48, 55, 65, 0.2), inset 5px 5px 15px rgba(88, 166, 255, 0.08), inset -5px -5px 15px rgba(0, 0, 0, 0.3); }
            50% { box-shadow: 28px 28px 80px rgba(0, 0, 0, 0.5), -28px -28px 80px rgba(48, 55, 65, 0.3), inset 6px 6px 18px rgba(88, 166, 255, 0.12), inset -6px -6px 18px rgba(0, 0, 0, 0.4); }
        }
    `;
    document.head.appendChild(clayStyle);

    // ============================================
    // NAVBAR FLOATING EFFECT
    // ============================================
    let navbarFloat = 0;
    function animateNavbar() {
        navbarFloat += 0.02;
        if (navbar) {
            const floatY = Math.sin(navbarFloat) * 2;
            if (!navbar.classList.contains('scrolled')) {
                navbar.style.transform = `translateX(-50%) translateY(${floatY}px)`;
            } else {
                navbar.style.transform = `translateX(-50%) translateY(0px)`;
            }
        }
        requestAnimationFrame(animateNavbar);
    }
    animateNavbar();

})();