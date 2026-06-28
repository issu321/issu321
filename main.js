/* ==========================================================================
   MAIN.JS v4 — Bulletproof Stat Counter + Education Animation
   ========================================================================== */

(function() {
  'use strict';

  const CONFIG = {
    particles: {
      count: window.innerWidth < 768 ? 50 : 90,
      connectionDistance: 160,
      mouseDistance: 200,
      speed: 0.4,
      colorLight: 'rgba(99, 102, 241, 0.6)',
      colorDark: 'rgba(129, 140, 248, 0.7)',
      lineColorLight: 'rgba(99, 102, 241, 0.25)',
      lineColorDark: 'rgba(129, 140, 248, 0.3)',
      particleSize: 3.5
    },
    typewriter: {
      phrases: [
        'AI Engineer',
        'Machine Learning Engineer',
        'Full Stack Developer',
        'Python Developer',
        'Cloud Engineer',
        'Software Architect',
        'Problem Solver',
        'Open Source Developer'
      ],
      typeSpeed: 70,
      deleteSpeed: 35,
      pauseTime: 2500
    },
    scroll: {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  };

  /* ========================================================================
     1. THEME SYSTEM
     ======================================================================== */
  const ThemeManager = {
    init() {
      this.toggle = document.getElementById('themeToggle');
      this.icon = document.querySelector('.theme-icon');
      this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      if (!this.toggle) return;

      const saved = localStorage.getItem('theme');
      const systemDark = this.prefersDark.matches;
      const initialTheme = saved || (systemDark ? 'dark' : 'light');

      this.setTheme(initialTheme, false);

      this.toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next, true);
      });

      this.prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light', true);
        }
      });
    },

    setTheme(theme, animate) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);

      if (this.icon) {
        this.icon.textContent = theme === 'dark' ? '\uD83C\uDF19' : '\u2600\uFE0F';
        if (animate) {
          this.icon.style.transform = 'rotate(360deg) scale(1.3)';
          setTimeout(() => { this.icon.style.transform = ''; }, 500);
        }
      }

      if (window.particleSystem) {
        window.particleSystem.updateColors();
      }
    }
  };

  /* ========================================================================
     2. SKELETON LOADER
     ======================================================================== */
  const Loader = {
    init() {
      this.loader = document.getElementById('skeletonLoader');
      if (!this.loader) return;

      const hide = () => {
        this.loader.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => {
          ScrollAnimator.checkVisible();
        }, 100);
      };

      if (document.readyState === 'complete') {
        setTimeout(hide, 800);
      } else {
        window.addEventListener('load', () => setTimeout(hide, 600));
      }

      document.body.style.overflow = 'hidden';
    }
  };

  /* ========================================================================
     3. PARTICLE CANVAS
     ======================================================================== */
  const ParticleSystem = {
    init() {
      this.canvas = document.getElementById('particleCanvas');
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.mouse = { x: null, y: null };
      this.animationId = null;
      this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      this.resize();
      this.createParticles();
      this.bindEvents();
      this.animate();

      window.particleSystem = this;
    },

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    createParticles() {
      this.particles = [];
      const count = CONFIG.particles.count;

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * CONFIG.particles.speed,
          vy: (Math.random() - 0.5) * CONFIG.particles.speed,
          radius: Math.random() * CONFIG.particles.particleSize + 1.5,
          opacity: Math.random() * 0.4 + 0.4,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    },

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
        this.createParticles();
      });

      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });

      window.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    },

    updateColors() {
      this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    },

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const particleColor = this.isDark ? CONFIG.particles.colorDark : CONFIG.particles.colorLight;
      const lineColor = this.isDark ? CONFIG.particles.lineColorDark : CONFIG.particles.lineColorLight;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        p.pulsePhase += 0.02;
        const pulse = Math.sin(p.pulsePhase) * 0.2 + 0.8;

        if (this.mouse.x !== null) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.particles.mouseDistance) {
            const force = (CONFIG.particles.mouseDistance - dist) / CONFIG.particles.mouseDistance;
            p.vx += (dx / dist) * force * 0.03;
            p.vy += (dy / dist) * force * 0.03;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.995;
        p.vy *= 0.995;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > this.canvas.width) { p.x = this.canvas.width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > this.canvas.height) { p.y = this.canvas.height; p.vy *= -1; }

        const glowRadius = p.radius * 3;
        const glow = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        const baseColor = particleColor.replace(/[0-9.]+\)$/, '');
        glow.addColorStop(0, baseColor + (p.opacity * pulse * 0.8) + ')');
        glow.addColorStop(0.5, baseColor + (p.opacity * pulse * 0.3) + ')');
        glow.addColorStop(1, baseColor + '0)');

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = glow;
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = particleColor.replace(/[0-9.]+\)$/, (p.opacity * pulse) + ')');
        this.ctx.fill();

        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.particles.connectionDistance) {
            const opacity = (1 - dist / CONFIG.particles.connectionDistance) * 0.5;
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = lineColor.replace(/[0-9.]+\)$/, opacity.toFixed(2) + ')');
            this.ctx.lineWidth = 0.8;
            this.ctx.stroke();
          }
        }
      }

      this.animationId = requestAnimationFrame(() => this.animate());
    }
  };

  /* ========================================================================
     4. TYPEWRITER EFFECT
     ======================================================================== */
  const Typewriter = {
    init() {
      this.element = document.querySelector('.hero-title');
      if (!this.element) return;

      this.phrases = CONFIG.typewriter.phrases;
      this.phraseIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;
      this.isPaused = false;

      this.cursor = document.createElement('span');
      this.cursor.className = 'typewriter-cursor';
      this.element.appendChild(this.cursor);

      this.element.style.minHeight = this.element.offsetHeight + 'px';

      this.type();
    },

    type() {
      const current = this.phrases[this.phraseIndex];

      if (this.isPaused) {
        setTimeout(() => {
          this.isPaused = false;
          this.isDeleting = true;
          this.type();
        }, CONFIG.typewriter.pauseTime);
        return;
      }

      let displayText = current.substring(0, this.charIndex);

      if (this.element.childNodes[0]) {
        this.element.childNodes[0].nodeValue = displayText;
      } else {
        this.element.insertBefore(document.createTextNode(displayText), this.cursor);
      }

      let speed = this.isDeleting ? CONFIG.typewriter.deleteSpeed : CONFIG.typewriter.typeSpeed;
      speed += Math.random() * 30 - 15;

      if (!this.isDeleting && this.charIndex === current.length) {
        this.isPaused = true;
        setTimeout(() => this.type(), 100);
        return;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }

      this.charIndex += this.isDeleting ? -1 : 1;

      setTimeout(() => this.type(), speed);
    }
  };

  /* ========================================================================
     5. SCROLL ANIMATIONS
     ======================================================================== */
  const ScrollAnimator = {
    init() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
              StatCounter.animate(statNumber);
            }

            this.observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: CONFIG.scroll.threshold,
        rootMargin: CONFIG.scroll.rootMargin
      });

      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => this.observer.observe(el));
    },

    checkVisible() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
          const statNumber = el.querySelector('.stat-number');
          if (statNumber) StatCounter.animate(statNumber);
        }
      });
    }
  };

  /* ========================================================================
     6. NAVBAR SCROLL
     ======================================================================== */
  const Navbar = {
    init() {
      this.navbar = document.getElementById('navbar');
      if (!this.navbar) return;

      this.lastScroll = 0;
      this.ticking = false;

      window.addEventListener('scroll', () => {
        if (!this.ticking) {
          requestAnimationFrame(() => {
            this.update();
            this.ticking = false;
          });
          this.ticking = true;
        }
      }, { passive: true });

      this.update();
    },

    update() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      this.lastScroll = currentScroll;
    }
  };

  /* ========================================================================
     7. MOBILE MENU
     ======================================================================== */
  const MobileMenu = {
    init() {
      this.btn = document.getElementById('mobileMenuBtn');
      this.nav = document.getElementById('navLinks');
      if (!this.btn || !this.nav) return;

      this.btn.addEventListener('click', () => {
        this.btn.classList.toggle('active');
        this.nav.classList.toggle('open');
        document.body.style.overflow = this.nav.classList.contains('open') ? 'hidden' : '';
      });

      this.nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          this.btn.classList.remove('active');
          this.nav.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  };

  /* ========================================================================
     8. PROJECT SEARCH
     ======================================================================== */
  const ProjectSearch = {
    init() {
      this.input = document.getElementById('projectSearch');
      this.clearBtn = document.getElementById('searchClear');
      this.resultsCount = document.getElementById('searchResultsCount');
      this.noResults = document.getElementById('noResults');

      if (!this.input) return;

      this.cards = document.querySelectorAll('.project-card');

      this.input.addEventListener('input', () => this.search());
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.clear();
      });

      if (this.clearBtn) {
        this.clearBtn.addEventListener('click', () => this.clear());
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.input.focus();
        }
      });
    },

    search() {
      const query = this.input.value.toLowerCase().trim();
      let visibleCount = 0;

      if (this.clearBtn) {
        this.clearBtn.classList.toggle('visible', query.length > 0);
      }

      this.cards.forEach((card, index) => {
        const text = card.textContent.toLowerCase();
        const isMatch = text.includes(query);

        if (isMatch || query === '') {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px) scale(0.95)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 40 * visibleCount);
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (this.resultsCount) {
        this.resultsCount.textContent = query 
          ? `${visibleCount} result${visibleCount !== 1 ? 's' : ''}` 
          : '';
      }

      if (this.noResults) {
        this.noResults.classList.toggle('visible', visibleCount === 0 && query !== '');
      }
    },

    clear() {
      this.input.value = '';
      this.input.focus();
      this.search();
    }
  };

  /* ========================================================================
     9. STAT COUNTER — BULLETPROOF VERSION
     ======================================================================== */
  const StatCounter = {
    animate(element) {
      if (element.classList.contains('counted')) return;
      element.classList.add('counted');

      const target = parseInt(element.getAttribute('data-count'));
      if (isNaN(target)) return;

      const duration = 2000;
      const start = performance.now();

      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * ease);

        element.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = target;
        }
      };

      requestAnimationFrame(update);
    }
  };

  /* ========================================================================
     10. CUSTOM CURSOR GLOW
     ======================================================================== */
  const CursorGlow = {
    init() {
      if (window.matchMedia('(hover: none)').matches) return;

      this.glow = document.createElement('div');
      this.glow.className = 'cursor-glow';
      document.body.appendChild(this.glow);

      this.mouseX = 0;
      this.mouseY = 0;
      this.glowX = 0;
      this.glowY = 0;
      this.ticking = false;

      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        if (!this.ticking) {
          requestAnimationFrame(() => this.update());
          this.ticking = true;
        }
      });

      document.addEventListener('mouseleave', () => {
        this.glow.style.opacity = '0';
      });

      document.addEventListener('mouseenter', () => {
        this.glow.style.opacity = '';
      });
    },

    update() {
      this.glowX += (this.mouseX - this.glowX) * 0.12;
      this.glowY += (this.mouseY - this.glowY) * 0.12;

      this.glow.style.left = this.glowX + 'px';
      this.glow.style.top = this.glowY + 'px';

      this.ticking = false;
    }
  };

  /* ========================================================================
     11. PARALLAX EFFECT
     ======================================================================== */
  const Parallax = {
    init() {
      this.elements = document.querySelectorAll('.hero-content, .about-image-frame');
      this.ticking = false;

      window.addEventListener('scroll', () => {
        if (!this.ticking) {
          requestAnimationFrame(() => this.update());
          this.ticking = true;
        }
      }, { passive: true });
    },

    update() {
      const scrollY = window.pageYOffset;

      this.elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = (centerY - viewportCenter) / window.innerHeight;

        if (el.classList.contains('hero-content')) {
          el.style.transform = `translateY(${distance * 25}px)`;
          el.style.opacity = Math.max(0.3, 1 - Math.abs(distance) * 0.6);
        } else if (el.classList.contains('about-image-frame')) {
          el.style.transform = `translateY(${distance * -20}px)`;
        }
      });

      this.ticking = false;
    }
  };

  /* ========================================================================
     12. CARD MOUSE GLOW
     ======================================================================== */
  const CardGlow = {
    init() {
      const cards = document.querySelectorAll('.coffee-card, .project-card');

      cards.forEach(card => {
        const glow = card.querySelector('.mouse-glow');
        if (!glow) return;

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          glow.style.left = (e.clientX - rect.left) + 'px';
          glow.style.top = (e.clientY - rect.top) + 'px';
        });
      });
    }
  };

  /* ========================================================================
     13. SMOOTH SCROLL
     ======================================================================== */
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;

          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };

  /* ========================================================================
     14. ACTIVE NAV LINK
     ======================================================================== */
  const ActiveNav = {
    init() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

      if (!sections.length || !navLinks.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              }
            });
          }
        });
      }, {
        rootMargin: '-20% 0px -70% 0px'
      });

      sections.forEach(section => observer.observe(section));
    }
  };

  /* ========================================================================
     15. COFFEE PAGE MOUSE GLOW
     ======================================================================== */
  const CoffeeGlow = {
    init() {
      const card = document.querySelector('.coffee-card');
      const glow = document.querySelector('.mouse-glow');
      if (!card || !glow) return;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        glow.style.left = (e.clientX - rect.left) + 'px';
        glow.style.top = (e.clientY - rect.top) + 'px';
      });
    }
  };

  /* ========================================================================
     INITIALIZATION
     ======================================================================== */
  function init() {
    ThemeManager.init();
    Loader.init();
    ParticleSystem.init();
    Typewriter.init();
    ScrollAnimator.init();
    Navbar.init();
    MobileMenu.init();
    ProjectSearch.init();
    CursorGlow.init();
    Parallax.init();
    CardGlow.init();
    SmoothScroll.init();
    ActiveNav.init();
    CoffeeGlow.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
