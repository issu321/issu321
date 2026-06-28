/* ============================================================
   MAIN.JS - Premium Portfolio Engine
   Dense Neural Network Background + Particle System + Theme Engine
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // CONFIGURATION
  // ============================================================

  const CONFIG = {
    themes: [
      { id: 'arctic-glass', name: 'Arctic Glass', mode: 'Light', colors: ['#f8f9fb', '#0ea5e9', '#6366f1'] },
      { id: 'ivory-titanium', name: 'Ivory Titanium', mode: 'Light', colors: ['#faf9f7', '#b45309', '#78716c'] },
      { id: 'ocean-breeze', name: 'Ocean Breeze', mode: 'Light', colors: ['#f0f9ff', '#0284c7', '#0ea5e9'] },
      { id: 'aurora-silk', name: 'Aurora Silk', mode: 'Light', colors: ['#faf5ff', '#9333ea', '#6366f1'] },
      { id: 'emerald-premium', name: 'Emerald Premium', mode: 'Light', colors: ['#f0fdf4', '#059669', '#10b981'] },
      { id: 'rose-gold', name: 'Rose Gold', mode: 'Light', colors: ['#fdf2f4', '#e11d48', '#f59e0b'] },
      { id: 'lavender-dream', name: 'Lavender Dream', mode: 'Light', colors: ['#f5f3ff', '#8b5cf6', '#a78bfa'] },
      { id: 'coral-sunset', name: 'Coral Sunset', mode: 'Light', colors: ['#fff7ed', '#f97316', '#fb923c'] },
      { id: 'mint-fresh', name: 'Mint Fresh', mode: 'Light', colors: ['#f0fdf4', '#14b8a6', '#2dd4bf'] },
      { id: 'pearl-white', name: 'Pearl White', mode: 'Light', colors: ['#fafafa', '#737373', '#a3a3a3'] },
      { id: 'obsidian-glass', name: 'Obsidian Glass', mode: 'Dark', colors: ['#0a0a0f', '#60a5fa', '#a78bfa'] },
      { id: 'midnight-ai', name: 'Midnight AI', mode: 'Dark', colors: ['#020617', '#3b82f6', '#06b6d4'] },
      { id: 'carbon-fiber', name: 'Carbon Fiber', mode: 'Dark', colors: ['#111113', '#d4d4d8', '#a1a1aa'] },
      { id: 'galaxy-night', name: 'Galaxy Night', mode: 'Dark', colors: ['#0f0518', '#c084fc', '#e879f9'] },
      { id: 'neural-matrix', name: 'Neural Matrix', mode: 'Dark', colors: ['#050a0f', '#00d4ff', '#0099cc'] },
      { id: 'volcanic-inferno', name: 'Volcanic Inferno', mode: 'Dark', colors: ['#0a0505', '#ef4444', '#f97316'] },
      { id: 'cyber-punk', name: 'Cyber Punk', mode: 'Dark', colors: ['#0a0a0a', '#ec4899', '#06b6d4'] },
      { id: 'forest-deep', name: 'Forest Deep', mode: 'Dark', colors: ['#052e16', '#22c55e', '#4ade80'] },
      { id: 'solar-flare', name: 'Solar Flare', mode: 'Dark', colors: ['#0c0a09', '#eab308', '#facc15'] },
      { id: 'arctic-night', name: 'Arctic Night', mode: 'Dark', colors: ['#020617', '#22d3ee', '#67e8f9'] }
    ],
    neural: {
      nodeCount: 0,      // calculated based on screen size
      connectionDistance: 220,
      maxConnections: 4,
      pulseSpeed: 0.015
    },
    particles: {
      count: 0,          // calculated based on screen size
      minSpeed: 0.1,
      maxSpeed: 0.6
    }
  };

  // ============================================================
  // STATE
  // ============================================================

  let currentTheme = localStorage.getItem('portfolio-theme') || 'arctic-glass';
  let mouseX = 0, mouseY = 0;
  let animationId = null;
  let canvas, ctx;
  let neuralNodes = [];
  let particles = [];
  let time = 0;

  // ============================================================
  // THEME ENGINE
  // ============================================================

  function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
  }

  function setTheme(themeId) {
    currentTheme = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
    updateThemeIcon();
    updateThemeStudioSelection();
  }

  function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (!themeIcon) return;
    themeIcon.textContent = '\u{1F3A8}';
  }

  // ============================================================
  // THEME STUDIO
  // ============================================================

  function createThemeStudio() {
    if (document.querySelector('.theme-studio-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'theme-studio-overlay';
    overlay.id = 'themeStudioOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Theme Studio');
    overlay.setAttribute('aria-modal', 'true');

    const lightThemes = CONFIG.themes.filter(t => t.mode === 'Light');
    const darkThemes = CONFIG.themes.filter(t => t.mode === 'Dark');

    overlay.innerHTML = `
      <div class="theme-studio" role="document">
        <div class="theme-studio-header">
          <h2 class="theme-studio-title">Theme Studio</h2>
          <button class="theme-studio-close" aria-label="Close theme studio">&times;</button>
        </div>
        <div class="theme-studio-section">
          <div class="theme-studio-section-title">Light Themes</div>
          <div class="theme-grid" id="lightThemesGrid">
            ${lightThemes.map(t => createThemePreviewCard(t)).join('')}
          </div>
        </div>
        <div class="theme-studio-section">
          <div class="theme-studio-section-title">Dark Themes</div>
          <div class="theme-grid" id="darkThemesGrid">
            ${darkThemes.map(t => createThemePreviewCard(t)).join('')}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('.theme-studio-close').addEventListener('click', closeThemeStudio);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeThemeStudio();
    });

    overlay.querySelectorAll('.theme-preview-card').forEach(card => {
      card.addEventListener('click', () => {
        const themeId = card.dataset.theme;
        setTheme(themeId);
      });
    });

    updateThemeStudioSelection();
  }

  function createThemePreviewCard(theme) {
    const isActive = theme.id === currentTheme;
    return `
      <div class="theme-preview-card ${isActive ? 'active' : ''}" data-theme="${theme.id}" tabindex="0" role="button" aria-pressed="${isActive}">
        <div class="theme-preview-colors">
          ${theme.colors.map(c => `<div class="theme-preview-color" style="background:${c}"></div>`).join('')}
        </div>
        <div class="theme-preview-name">${theme.name}</div>
        <div class="theme-preview-mode">${theme.mode}</div>
      </div>
    `;
  }

  function openThemeStudio() {
    createThemeStudio();
    const overlay = document.getElementById('themeStudioOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const firstCard = overlay.querySelector('.theme-preview-card');
        if (firstCard) firstCard.focus();
      }, 300);
    }
  }

  function closeThemeStudio() {
    const overlay = document.getElementById('themeStudioOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function updateThemeStudioSelection() {
    document.querySelectorAll('.theme-preview-card').forEach(card => {
      const isActive = card.dataset.theme === currentTheme;
      card.classList.toggle('active', isActive);
      card.setAttribute('aria-pressed', isActive);
    });
  }

  // ============================================================
  // SKELETON LOADER
  // ============================================================

  function hideSkeletonLoader() {
    const loader = document.getElementById('skeletonLoader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 800);
    }
  }

  // ============================================================
  // NAVBAR
  // ============================================================

  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;
    let ticking = false;

    function updateNavbar() {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileBtn.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', openThemeStudio);
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ============================================================
  // MOUSE TRACKING
  // ============================================================

  function initMouseTracking() {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const cards = document.querySelectorAll('.project-card, .skill-category, .contact-card, .coffee-card, .stat-card, .focus-item, .education-card, .trust-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    }, { passive: true });
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================

  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // ============================================================
  // DENSE NEURAL NETWORK BACKGROUND (NO GRID BOXES)
  // ============================================================

  function initCanvas() {
    canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    resizeCanvas();

    initNeuralNetwork();
    initParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initNeuralNetwork();
      initParticles();
    });

    animateCanvas();
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    if (ctx) ctx.scale(dpr, dpr);
  }

  function getThemeColors() {
    const style = getComputedStyle(document.documentElement);
    return {
      neuralNode: style.getPropertyValue('--neural-node').trim() || 'rgba(59, 130, 246, 0.6)',
      neuralLine: style.getPropertyValue('--neural-line').trim() || 'rgba(59, 130, 246, 0.15)',
      particle: style.getPropertyValue('--particle-color').trim() || 'rgba(59, 130, 246, 0.3)',
      accent: style.getPropertyValue('--accent-primary').trim() || '#3b82f6'
    };
  }

  function parseColor(colorStr, fallbackAlpha) {
    if (!colorStr) return `rgba(59, 130, 246, ${fallbackAlpha})`;
    if (colorStr.startsWith('rgba')) {
      return colorStr.replace(/[\d.]+\)$/, `${fallbackAlpha})`);
    }
    if (colorStr.startsWith('rgb(')) {
      return colorStr.replace('rgb(', 'rgba(').replace(')', `, ${fallbackAlpha})`);
    }
    // hex to rgba
    let r = 59, g = 130, b = 246;
    if (colorStr.length === 4) {
      r = parseInt(colorStr[1] + colorStr[1], 16);
      g = parseInt(colorStr[2] + colorStr[2], 16);
      b = parseInt(colorStr[3] + colorStr[3], 16);
    } else if (colorStr.length === 7) {
      r = parseInt(colorStr.substring(1, 3), 16);
      g = parseInt(colorStr.substring(3, 5), 16);
      b = parseInt(colorStr.substring(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${fallbackAlpha})`;
  }

  function initNeuralNetwork() {
    neuralNodes = [];
    const area = window.innerWidth * window.innerHeight;
    // Dense network: one node per ~15000 pixels
    const count = Math.max(30, Math.min(80, Math.floor(area / 15000)));

    for (let i = 0; i < count; i++) {
      neuralNodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        brightness: 0.4 + Math.random() * 0.6,
        layer: Math.random() // depth layer 0-1
      });
    }
  }

  function initParticles() {
    particles = [];
    const area = window.innerWidth * window.innerHeight;
    const count = Math.max(20, Math.min(50, Math.floor(area / 25000)));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        depth: Math.random()
      });
    }
  }

  function animateCanvas() {
    if (!ctx || !canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    time += 0.016;

    ctx.clearRect(0, 0, width, height);

    const colors = getThemeColors();

    // Draw neural network (dense, no grid)
    drawDenseNeuralNetwork(width, height, colors);

    // Draw ambient particles
    drawAmbientParticles(width, height, colors);

    // Draw subtle ambient glow blobs
    drawAmbientGlow(width, height, colors);

    animationId = requestAnimationFrame(animateCanvas);
  }

  function drawDenseNeuralNetwork(width, height, colors) {
    const nodeColor = colors.neuralNode;
    const lineColor = colors.neuralLine;

    // Update nodes
    neuralNodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      node.pulse += node.pulseSpeed;

      // Soft bounce
      if (node.x < -50) node.x = width + 50;
      if (node.x > width + 50) node.x = -50;
      if (node.y < -50) node.y = height + 50;
      if (node.y > height + 50) node.y = -50;
    });

    // Build connections - each node connects to nearest neighbors
    const connections = [];
    for (let i = 0; i < neuralNodes.length; i++) {
      const nodeA = neuralNodes[i];
      const distances = [];

      for (let j = 0; j < neuralNodes.length; j++) {
        if (i === j) continue;
        const nodeB = neuralNodes[j];
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.neural.connectionDistance) {
          distances.push({ index: j, dist: dist, dx: dx, dy: dy });
        }
      }

      // Sort by distance and take closest
      distances.sort((a, b) => a.dist - b.dist);
      const maxConn = Math.min(CONFIG.neural.maxConnections, distances.length);

      for (let k = 0; k < maxConn; k++) {
        const conn = distances[k];
        // Avoid duplicate connections
        const exists = connections.some(c => 
          (c.a === i && c.b === conn.index) || (c.a === conn.index && c.b === i)
        );
        if (!exists) {
          connections.push({
            a: i,
            b: conn.index,
            dist: conn.dist,
            dx: conn.dx,
            dy: conn.dy
          });
        }
      }
    }

    // Draw connections first (behind nodes)
    connections.forEach(conn => {
      const nodeA = neuralNodes[conn.a];
      const nodeB = neuralNodes[conn.b];
      const alpha = (1 - conn.dist / CONFIG.neural.connectionDistance) * 0.35 * nodeA.brightness;

      const parsedLine = parseColor(lineColor, alpha);

      ctx.beginPath();
      ctx.moveTo(nodeA.x, nodeA.y);
      ctx.lineTo(nodeB.x, nodeB.y);
      ctx.strokeStyle = parsedLine;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Animated data pulse traveling along connection
      const pulseSpeed = 0.5;
      const pulsePos = (time * pulseSpeed + conn.a * 0.3) % 1;
      const px = nodeA.x + (nodeB.x - nodeA.x) * pulsePos;
      const py = nodeA.y + (nodeB.y - nodeA.y) * pulsePos;

      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      const pulseAlpha = alpha * 2.5;
      ctx.fillStyle = parseColor(nodeColor, pulseAlpha);
      ctx.fill();
    });

    // Draw nodes with glow
    neuralNodes.forEach(node => {
      const pulseSize = node.size + Math.sin(node.pulse) * 1;
      const baseAlpha = node.brightness * (0.5 + Math.sin(node.pulse) * 0.3);

      // Outer soft glow
      const glowRadius = pulseSize * 6;
      const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
      glowGradient.addColorStop(0, parseColor(nodeColor, baseAlpha * 0.15));
      glowGradient.addColorStop(1, parseColor(nodeColor, 0));

      ctx.beginPath();
      ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Medium glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
      ctx.fillStyle = parseColor(nodeColor, baseAlpha * 0.2);
      ctx.fill();

      // Core node
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = parseColor(nodeColor, baseAlpha);
      ctx.fill();

      // Bright center
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = parseColor(nodeColor, Math.min(1, baseAlpha * 1.5));
      ctx.fill();
    });

    // Mouse interaction - nodes near cursor glow brighter
    neuralNodes.forEach(node => {
      const dx = mouseX - node.x;
      const dy = mouseY - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 200) {
        const intensity = (1 - dist / 200) * 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = parseColor(nodeColor, intensity * 0.3);
        ctx.fill();
      }
    });
  }

  function drawAmbientParticles(width, height, colors) {
    const particleColor = colors.particle;

    particles.forEach(p => {
      p.x += p.vx * (0.5 + p.depth * 0.5);
      p.y += p.vy * (0.5 + p.depth * 0.5);

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const alpha = p.opacity * (0.3 + p.depth * 0.7);
      const size = p.size * (0.5 + p.depth * 0.5);

      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fillStyle = parseColor(particleColor, alpha);
      ctx.fill();

      // Tiny glow for larger particles
      if (p.size > 1) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = parseColor(particleColor, alpha * 0.1);
        ctx.fill();
      }
    });
  }

  function drawAmbientGlow(width, height, colors) {
    // Large, slow-moving ambient light blobs
    const blob1x = width * 0.3 + Math.sin(time * 0.2) * width * 0.15;
    const blob1y = height * 0.4 + Math.cos(time * 0.15) * height * 0.1;

    const blob2x = width * 0.7 + Math.cos(time * 0.18) * width * 0.12;
    const blob2y = height * 0.6 + Math.sin(time * 0.22) * height * 0.08;

    const blob3x = width * 0.5 + Math.sin(time * 0.1) * width * 0.08;
    const blob3y = height * 0.3 + Math.cos(time * 0.12) * height * 0.06;

    const accent = colors.accent;

    // Blob 1
    const grad1 = ctx.createRadialGradient(blob1x, blob1y, 0, blob1x, blob1y, 300);
    grad1.addColorStop(0, parseColor(accent, 0.04));
    grad1.addColorStop(1, parseColor(accent, 0));
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    // Blob 2
    const grad2 = ctx.createRadialGradient(blob2x, blob2y, 0, blob2x, blob2y, 250);
    grad2.addColorStop(0, parseColor(accent, 0.03));
    grad2.addColorStop(1, parseColor(accent, 0));
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    // Blob 3
    const grad3 = ctx.createRadialGradient(blob3x, blob3y, 0, blob3x, blob3y, 200);
    grad3.addColorStop(0, parseColor(accent, 0.025));
    grad3.addColorStop(1, parseColor(accent, 0));
    ctx.fillStyle = grad3;
    ctx.fillRect(0, 0, width, height);
  }

  // ============================================================
  // SEARCH
  // ============================================================

  function initSearch() {
    const searchInput = document.getElementById('projectSearch');
    const searchClear = document.getElementById('searchClear');
    const resultsCount = document.getElementById('searchResultsCount');
    const noResults = document.getElementById('noResults');
    const projectCards = document.querySelectorAll('.project-card');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      if (searchClear) {
        searchClear.classList.toggle('visible', query.length > 0);
      }

      let visibleCount = 0;

      projectCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const isMatch = text.includes(query);

        if (isMatch) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (resultsCount) {
        resultsCount.textContent = query ? `${visibleCount} project${visibleCount !== 1 ? 's' : ''} found` : '';
      }

      if (noResults) {
        noResults.classList.toggle('visible', visibleCount === 0 && query.length > 0);
      }
    });

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // ============================================================
  // SMOOTH SCROLL
  // ============================================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ============================================================
  // STAT COUNTERS
  // ============================================================

  function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
  }

  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================================
  // BUTTON WAVE
  // ============================================================

  function initButtonWave() {
    document.querySelectorAll('.btn, .btn-view, .btn-code').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.setProperty('--mouse-x', x + '%');
        btn.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  // ============================================================
  // KEYBOARD ACCESSIBILITY
  // ============================================================

  function initKeyboardAccessibility() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeThemeStudio();
      }

      const overlay = document.getElementById('themeStudioOverlay');
      if (overlay && overlay.classList.contains('active')) {
        const cards = Array.from(overlay.querySelectorAll('.theme-preview-card'));
        const activeIndex = cards.findIndex(c => c === document.activeElement);

        if (e.key === 'ArrowRight' && activeIndex >= 0) {
          e.preventDefault();
          const next = cards[activeIndex + 1] || cards[0];
          next.focus();
        }
        if (e.key === 'ArrowLeft' && activeIndex >= 0) {
          e.preventDefault();
          const prev = cards[activeIndex - 1] || cards[cards.length - 1];
          prev.focus();
        }
        if (e.key === 'Enter' && activeIndex >= 0) {
          e.preventDefault();
          cards[activeIndex].click();
        }
      }
    });
  }

  // ============================================================
  // PARALLAX
  // ============================================================

  function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroContent = hero.querySelector('.hero-content');
          if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroContent.style.opacity = Math.max(0, 1 - scrollY / 600);
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    initTheme();
    initNavbar();
    initMouseTracking();
    initScrollReveal();
    initCanvas();
    initSearch();
    initSmoothScroll();
    initStatCounters();
    initButtonWave();
    initKeyboardAccessibility();
    initParallax();

    if (document.readyState === 'complete') {
      hideSkeletonLoader();
    } else {
      window.addEventListener('load', hideSkeletonLoader);
    }

    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
