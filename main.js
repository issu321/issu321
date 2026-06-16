/* ============================================
   NEON COSMOS - INTENSE NEURAL CONSTELLATION v5.2
   More Nodes | Brighter Lightning | Theme Adaptive
   ============================================ */

(function() {
    'use strict';

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const html = document.documentElement;

    // ============================================
    // LOADING SKELETON
    // ============================================
    const skeletonLoader = document.getElementById('skeletonLoader');
    function hideSkeleton() {
        if (skeletonLoader) {
            skeletonLoader.classList.add('hidden');
            setTimeout(() => {
                if (skeletonLoader.parentNode) skeletonLoader.style.display = 'none';
            }, 800);
        }
    }
    if (document.readyState === 'complete') {
        setTimeout(hideSkeleton, 700);
    } else {
        window.addEventListener('load', () => setTimeout(hideSkeleton, 700));
    }

    // ============================================
    // THEME SYSTEM
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            if (themeIcon) themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
            themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => { themeToggle.style.transform = ''; }, 400);
        });
    }

    function isDark() {
        return html.getAttribute('data-theme') === 'dark';
    }

    // ============================================
    // PROJECT SEARCH
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
                const match = title.includes(lowerQuery) || desc.includes(lowerQuery) || techTags.includes(lowerQuery);
                if (match || lowerQuery === '') {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px) scale(0.95)';
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, visibleCount * 80);
                    });
                    visibleCount++;
                } else {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => { card.style.display = 'none'; }, 400);
                }
            });
            if (searchClear) searchClear.classList.toggle('visible', lowerQuery !== '');
            if (searchResultsCount) {
                if (lowerQuery !== '') {
                    searchResultsCount.textContent = `Found ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
                    searchResultsCount.classList.add('visible');
                } else {
                    searchResultsCount.classList.remove('visible');
                }
            }
            if (noResults) noResults.classList.toggle('visible', visibleCount === 0 && lowerQuery !== '');
        }
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => performSearch(e.target.value), 150);
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
    // INTENSE NEURAL CONSTELLATION WEB
    // More nodes | Brighter lines | More lightning
    // ============================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d', { alpha: true });
        let nodes = [];
        let energyPulses = [];
        let lightningBolts = [];
        let animationId;
        let mouseX = -1000, mouseY = -1000;
        let frameCount = 0;
        let isVisible = true;

        function resizeCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = window.innerWidth;
            const h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas, { passive: true });

        const canvasObserver = new IntersectionObserver((entries) => {
            isVisible = entries[0].isIntersecting;
        }, { threshold: 0 });
        canvasObserver.observe(canvas);

        // Color palettes for light/dark - MORE INTENSE
        const palettes = {
            light: [
                { h: 340, s: 85, l: 50 },  // magenta
                { h: 260, s: 80, l: 48 },  // violet
                { h: 190, s: 85, l: 48 },  // cyan
                { h: 35,  s: 90, l: 52 },  // gold
                { h: 320, s: 75, l: 52 },  // rose
            ],
            dark: [
                { h: 340, s: 95, l: 70 },  // bright magenta
                { h: 260, s: 90, l: 70 },  // bright violet
                { h: 190, s: 95, l: 70 },  // bright cyan
                { h: 35,  s: 95, l: 70 },  // bright gold
                { h: 320, s: 90, l: 70 },  // bright rose
            ]
        };

        class Node {
            constructor() {
                this.reset();
            }
            reset() {
                const w = window.innerWidth;
                const h = window.innerHeight;
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 3 + 1.2;
                this.baseRadius = this.radius;
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.04 + 0.015;
                this.colorIdx = Math.floor(Math.random() * 5);
                this.glowRadius = this.radius * 10; // BIGGER GLOW
                this.energy = Math.random();
                this.blinkPhase = Math.random() * Math.PI * 2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.pulsePhase += this.pulseSpeed;
                this.blinkPhase += 0.05;
                this.energy += 0.008;
                if (this.energy > 1) this.energy = 0;

                const w = window.innerWidth;
                const h = window.innerHeight;
                if (this.x < -80) { this.x = w + 80; this.baseX = this.x; }
                if (this.x > w + 80) { this.x = -80; this.baseX = this.x; }
                if (this.y < -80) { this.y = h + 80; this.baseY = this.y; }
                if (this.y > h + 80) { this.y = -80; this.baseY = this.y; }

                // Mouse attraction
                if (!isTouch) {
                    const dx = mouseX - this.x;
                    const dy = mouseY - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 250) {
                        const force = (250 - dist) / 250;
                        this.x += dx * force * 0.012;
                        this.y += dy * force * 0.012;
                    }
                }
            }
            draw() {
                const dark = isDark();
                const palette = dark ? palettes.dark : palettes.light;
                const color = palette[this.colorIdx];
                const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
                const blink = Math.sin(this.blinkPhase) * 0.3 + 0.7;
                const r = this.baseRadius * (0.6 + pulse * 0.4);
                // MUCH MORE VISIBLE IN LIGHT MODE
                const alpha = dark ? (0.7 + pulse * 0.3) : (0.5 + pulse * 0.3);
                const glowAlpha = dark ? (0.25 + pulse * 0.15) : (0.18 + pulse * 0.12);

                // Glow halo - BIGGER
                const glowGrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowRadius * pulse);
                glowGrad.addColorStop(0, `hsla(${color.h}, ${color.s}%, ${color.l}%, ${glowAlpha})`);
                glowGrad.addColorStop(0.5, `hsla(${color.h}, ${color.s}%, ${color.l}%, ${glowAlpha * 0.5})`);
                glowGrad.addColorStop(1, `hsla(${color.h}, ${color.s}%, ${color.l}%, 0)`);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.glowRadius * pulse, 0, Math.PI * 2);
                ctx.fillStyle = glowGrad;
                ctx.fill();

                // Core with blink
                const coreGrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r);
                coreGrad.addColorStop(0, `hsla(${color.h}, ${color.s}%, ${color.l + 25}%, ${alpha * blink})`);
                coreGrad.addColorStop(0.4, `hsla(${color.h}, ${color.s}%, ${color.l}%, ${alpha * blink})`);
                coreGrad.addColorStop(1, `hsla(${color.h}, ${color.s}%, ${color.l - 10}%, ${alpha * 0.4})`);
                ctx.beginPath();
                ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
                ctx.fillStyle = coreGrad;
                ctx.fill();
            }
        }

        class EnergyPulse {
            constructor(x1, y1, x2, y2, hue) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
                this.hue = hue;
                this.progress = 0;
                this.speed = Math.random() * 0.02 + 0.01;
                this.life = 1;
                this.size = Math.random() * 3 + 1.5;
            }
            update() {
                this.progress += this.speed;
                this.life -= 0.006;
                if (this.progress >= 1 || this.life <= 0) return false;
                return true;
            }
            draw() {
                const dark = isDark();
                const x = this.x1 + (this.x2 - this.x1) * this.progress;
                const y = this.y1 + (this.y2 - this.y1) * this.progress;
                const alpha = this.life * (dark ? 1.0 : 0.7);

                // Glow
                const glow = ctx.createRadialGradient(x, y, 0, x, y, this.size * 5);
                glow.addColorStop(0, `hsla(${this.hue}, 95%, 75%, ${alpha * 0.4})`);
                glow.addColorStop(1, `hsla(${this.hue}, 95%, 75%, 0)`);
                ctx.beginPath();
                ctx.arc(x, y, this.size * 5, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Core spark
                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 100%, 85%, ${alpha})`;
                ctx.fill();
            }
        }

        class LightningBolt {
            constructor(x1, y1, x2, y2, hue) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
                this.hue = hue;
                this.life = 1;
                this.decay = 0.04;
                this.segments = [];
                this.generateSegments();
            }
            generateSegments() {
                const dx = this.x2 - this.x1;
                const dy = this.y2 - this.y1;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const segments = Math.floor(dist / 15);
                this.segments = [{ x: this.x1, y: this.y1 }];
                for (let i = 1; i < segments; i++) {
                    const t = i / segments;
                    const jitter = (Math.random() - 0.5) * 20 * (1 - Math.abs(t - 0.5) * 2);
                    this.segments.push({
                        x: this.x1 + dx * t + (dy / dist) * jitter,
                        y: this.y1 + dy * t - (dx / dist) * jitter
                    });
                }
                this.segments.push({ x: this.x2, y: this.y2 });
            }
            update() {
                this.life -= this.decay;
                return this.life > 0;
            }
            draw() {
                const dark = isDark();
                const alpha = this.life * (dark ? 0.8 : 0.5);
                const width = this.life * (dark ? 2.5 : 1.8);

                // Glow line
                ctx.beginPath();
                ctx.moveTo(this.segments[0].x, this.segments[0].y);
                for (let i = 1; i < this.segments.length; i++) {
                    ctx.lineTo(this.segments[i].x, this.segments[i].y);
                }
                ctx.strokeStyle = `hsla(${this.hue}, 90%, 70%, ${alpha * 0.3})`;
                ctx.lineWidth = width * 4;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.stroke();

                // Core line
                ctx.beginPath();
                ctx.moveTo(this.segments[0].x, this.segments[0].y);
                for (let i = 1; i < this.segments.length; i++) {
                    ctx.lineTo(this.segments[i].x, this.segments[i].y);
                }
                ctx.strokeStyle = `hsla(${this.hue}, 95%, 85%, ${alpha})`;
                ctx.lineWidth = width;
                ctx.stroke();
            }
        }

        function initNodes() {
            nodes = [];
            // MORE NODES - 150 desktop, 100 mobile
            const baseCount = isTouch ? 100 : 150;
            const count = Math.min(Math.floor(window.innerWidth * window.innerHeight / 8000), baseCount);
            for (let i = 0; i < count; i++) {
                nodes.push(new Node());
            }
        }

        let lastTime = 0;
        const targetFPS = isTouch ? 30 : 60;
        const frameInterval = 1000 / targetFPS;

        function animateNeuralWeb(timestamp) {
            if (!isVisible) {
                animationId = requestAnimationFrame(animateNeuralWeb);
                return;
            }
            const elapsed = timestamp - lastTime;
            if (elapsed < frameInterval) {
                animationId = requestAnimationFrame(animateNeuralWeb);
                return;
            }
            lastTime = timestamp - (elapsed % frameInterval);
            frameCount++;
            const dark = isDark();
            const w = window.innerWidth;
            const h = window.innerHeight;

            ctx.clearRect(0, 0, w, h);

            // Draw connections - MORE VISIBLE
            const connectionDist = dark ? 220 : 180;
            const maxConnections = 4;
            for (let i = 0; i < nodes.length; i++) {
                let connections = 0;
                for (let j = i + 1; j < nodes.length && connections < maxConnections; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDist) {
                        connections++;
                        const ratio = 1 - dist / connectionDist;
                        // HIGHER OPACITY for light mode
                        const opacity = ratio * (dark ? 0.30 : 0.20);
                        const midHue = (palettes.dark[nodes[i].colorIdx].h + palettes.dark[nodes[j].colorIdx].h) / 2;

                        // Main line - THICKER
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `hsla(${midHue}, 80%, 60%, ${opacity})`;
                        ctx.lineWidth = 1.0;
                        ctx.stroke();

                        // Cracking energy line - MORE VISIBLE
                        const crackOffset = (frameCount * 3) % 25;
                        ctx.beginPath();
                        ctx.setLineDash([5, 20]);
                        ctx.lineDashOffset = -crackOffset;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `hsla(${midHue}, 95%, 80%, ${opacity * 2.0})`;
                        ctx.lineWidth = 2.0;
                        ctx.stroke();
                        ctx.setLineDash([]);

                        // Spawn energy pulse more frequently
                        if (Math.random() < 0.006 && energyPulses.length < 60) {
                            energyPulses.push(new EnergyPulse(
                                nodes[i].x, nodes[i].y,
                                nodes[j].x, nodes[j].y,
                                midHue
                            ));
                        }

                        // Spawn lightning bolts occasionally
                        if (Math.random() < 0.002 && lightningBolts.length < 15) {
                            lightningBolts.push(new LightningBolt(
                                nodes[i].x, nodes[i].y,
                                nodes[j].x, nodes[j].y,
                                midHue
                            ));
                        }
                    }
                }
            }

            // Update and draw energy pulses
            energyPulses = energyPulses.filter(pulse => {
                const alive = pulse.update();
                if (alive) pulse.draw();
                return alive;
            });

            // Update and draw lightning bolts
            lightningBolts = lightningBolts.filter(bolt => {
                const alive = bolt.update();
                if (alive) bolt.draw();
                return alive;
            });

            // Draw nodes
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].update();
                nodes[i].draw();
            }

            // Frequent burst sparks
            if (frameCount % 45 === 0 && Math.random() < 0.4) {
                const idx = Math.floor(Math.random() * nodes.length);
                const node = nodes[idx];
                const palette = dark ? palettes.dark : palettes.light;
                for (let k = 0; k < 5; k++) {
                    const targetIdx = Math.floor(Math.random() * nodes.length);
                    if (targetIdx !== idx) {
                        energyPulses.push(new EnergyPulse(
                            node.x, node.y,
                            nodes[targetIdx].x, nodes[targetIdx].y,
                            palette[node.colorIdx].h
                        ));
                    }
                }
            }

            // Random lightning strikes
            if (frameCount % 90 === 0 && Math.random() < 0.3) {
                const idx1 = Math.floor(Math.random() * nodes.length);
                const idx2 = Math.floor(Math.random() * nodes.length);
                if (idx1 !== idx2) {
                    const palette = dark ? palettes.dark : palettes.light;
                    lightningBolts.push(new LightningBolt(
                        nodes[idx1].x, nodes[idx1].y,
                        nodes[idx2].x, nodes[idx2].y,
                        palette[nodes[idx1].colorIdx].h
                    ));
                }
            }

            animationId = requestAnimationFrame(animateNeuralWeb);
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        initNodes();
        animationId = requestAnimationFrame(animateNeuralWeb);
    }

    // ============================================
    // NAVBAR SCROLL
    // ============================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let ticking = false;
        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(() => {
                    navbar.classList.toggle('scrolled', lastScrollY > 50);
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
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // ============================================
    // INTERSECTION OBSERVER
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
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        setTimeout(typeWriter, 800);
    }

    // ============================================
    // HERO PARALLAX
    // ============================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && !prefersReducedMotion) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    if (scrolled < window.innerHeight) {
                        heroContent.style.transform = 'translateY(' + (scrolled * 0.12) + 'px)';
                        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // PROFESSIONAL MOUSE GLOW - NO TILT
    // ============================================
    const glowCards = document.querySelectorAll('.skill-category, .project-card, .focus-item, .stat-card, .glass-card, .contact-card');
    if (!isTouch && !prefersReducedMotion) {
        glowCards.forEach(card => {
            if (!card.querySelector('.mouse-glow')) {
                const glow = document.createElement('div');
                glow.className = 'mouse-glow';
                card.insertBefore(glow, card.firstChild);
            }
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });
    }

    // ============================================
    // CUSTOM CURSOR - Desktop Only
    // ============================================
    if (window.innerWidth > 768 && !isTouch && !prefersReducedMotion) {
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);
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

        const interactiveSelectors = 'a, button, .btn, .project-links a, .contact-link, .skill-tag, .project-tech span';
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(interactiveSelectors)) cursorDot.classList.add('hovering');
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(interactiveSelectors)) cursorDot.classList.remove('hovering');
        });

        function animateGlow() {
            const ease = isMoving ? 0.12 : 0.05;
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
            const newX = currentDotX + (dotX - currentDotX) * 0.25;
            const newY = currentDotY + (dotY - currentDotY) * 0.25;
            cursorDot.style.left = newX + 'px';
            cursorDot.style.top = newY + 'px';
            dotRaf = requestAnimationFrame(animateDot);
        }
        animateGlow();
        animateDot();
    }

    // ============================================
    // LIQUID RIPPLE EFFECT
    // ============================================
    document.querySelectorAll('.btn, .project-links a, .contact-link').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.style.cssText = `position:absolute;width:20px;height:20px;background:radial-gradient(circle,rgba(225,29,72,0.6)0%,rgba(124,58,237,0.3)40%,transparent70%);border-radius:50%;left:${x-10}px;top:${y-10}px;pointer-events:none;animation:rippleExpand 1s cubic-bezier(0.23,1,0.32,1) forwards;z-index:10;`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
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
            filter: drop-shadow(0 0 12px rgba(225,29,72,0.6));
        }
    `;
    document.head.appendChild(rippleStyle);

    // ============================================
    // ACTIVE NAV LINK
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
            setTimeout(() => { window.location.href = href; }, 400);
        });
    });

    // ============================================
    // MAGNETIC BUTTON EFFECT
    // ============================================
    if (!isTouch && !prefersReducedMotion) {
        const magneticElements = document.querySelectorAll('.btn, .project-links a, .contact-link, .theme-toggle, .nav-logo');
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
                el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
                setTimeout(() => { el.style.transition = ''; }, 500);
            });
        });
    }

    // ============================================
    // FLOATING ELEMENTS
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
                    output += `<span style="background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 10px rgba(225,29,72,0.5));">${char}</span>`;
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

    if (!prefersReducedMotion) {
        document.querySelectorAll('.section-label').forEach(el => {
            const fx = new TextScramble(el);
            const originalText = el.innerText;
            let isHovering = false;
            el.addEventListener('mouseenter', () => {
                if (!isHovering) {
                    isHovering = true;
                    fx.setText(originalText).then(() => { isHovering = false; });
                }
            });
        });
    }

    // ============================================
    // CARD FLOATING BREATHING
    // ============================================
    if (!prefersReducedMotion) {
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
    }

    // ============================================
    // NAVBAR FLOATING
    // ============================================
    if (!prefersReducedMotion) {
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
    }

    // ============================================
    // SVG HOLOGRAPHIC STROKE
    // ============================================
    const svgGradient = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgGradient.setAttribute('width', '0');
    svgGradient.setAttribute('height', '0');
    svgGradient.innerHTML = `
        <defs>
            <linearGradient id="holographic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#e11d48;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
            </linearGradient>
        </defs>
    `;
    document.body.appendChild(svgGradient);


    // ============================================
    // BUY ME A COFFEE MODAL
    // ============================================
    const coffeeBtn = document.getElementById('coffeeBtn');
    const coffeeModal = document.getElementById('coffeeModal');
    const coffeeModalOverlay = document.getElementById('coffeeModalOverlay');
    const coffeeModalClose = document.getElementById('coffeeModalClose');

    if (coffeeBtn && coffeeModal) {
        coffeeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            coffeeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        function closeCoffeeModal() {
            coffeeModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (coffeeModalClose) {
            coffeeModalClose.addEventListener('click', closeCoffeeModal);
        }

        if (coffeeModalOverlay) {
            coffeeModalOverlay.addEventListener('click', closeCoffeeModal);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && coffeeModal.classList.contains('active')) {
                closeCoffeeModal();
            }
        });
    }

})();
