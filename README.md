<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--              ULTIMATE AI TECH HEADER BANNER                     -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="100%" height="280" viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1">
        <animate attributeName="stop-color" values="#00d4ff;#7c3aed;#00ff88;#ff006e;#00d4ff" dur="6s" repeatCount="indefinite" />
      </stop>
      <stop offset="25%" style="stop-color:#7c3aed;stop-opacity:1">
        <animate attributeName="stop-color" values="#7c3aed;#00ff88;#ff006e;#00d4ff;#7c3aed" dur="6s" repeatCount="indefinite" />
      </stop>
      <stop offset="50%" style="stop-color:#00ff88;stop-opacity:1">
        <animate attributeName="stop-color" values="#00ff88;#ff006e;#00d4ff;#7c3aed;#00ff88" dur="6s" repeatCount="indefinite" />
      </stop>
      <stop offset="75%" style="stop-color:#ff006e;stop-opacity:1">
        <animate attributeName="stop-color" values="#ff006e;#00d4ff;#7c3aed;#00ff88;#ff006e" dur="6s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1">
        <animate attributeName="stop-color" values="#00d4ff;#7c3aed;#00ff88;#ff006e;#00d4ff" dur="6s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
    <filter id="aiGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="blur1"/>
      <feGaussianBlur stdDeviation="4" result="blur2"/>
      <feMerge>
        <feMergeNode in="blur1"/>
        <feMergeNode in="blur2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="900" height="280" fill="#0a0e17" rx="20" stroke="url(#aiGrad)" stroke-width="3"/>

  <!-- Animated circuit grid background -->
  <g opacity="0.15">
    <path d="M0,50 L900,50" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M0,100 L900,100" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M0,150 L900,150" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M0,200 L900,200" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M0,250 L900,250" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M150,0 L150,280" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M300,0 L300,280" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M450,0 L450,280" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M600,0 L600,280" stroke="#00d4ff" stroke-width="0.5"/>
    <path d="M750,0 L750,280" stroke="#00d4ff" stroke-width="0.5"/>
  </g>

  <!-- Animated circuit lines -->
  <path d="M50,220 L120,220 L120,180 L180,180" fill="none" stroke="#00d4ff" stroke-width="2" opacity="0.6">
    <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2.5s" repeatCount="indefinite"/>
  </path>
  <path d="M850,220 L780,220 L780,180 L720,180" fill="none" stroke="#ff006e" stroke-width="2" opacity="0.6">
    <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2.5s" begin="1.25s" repeatCount="indefinite"/>
  </path>
  <path d="M50,60 L120,60 L120,100 L180,100" fill="none" stroke="#00ff88" stroke-width="2" opacity="0.6">
    <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
  </path>
  <path d="M850,60 L780,60 L780,100 L720,100" fill="none" stroke="#7c3aed" stroke-width="2" opacity="0.6">
    <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
  </path>

  <!-- Pulsing nodes -->
  <circle cx="180" cy="180" r="4" fill="#00d4ff">
    <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="720" cy="180" r="4" fill="#ff006e">
    <animate attributeName="r" values="4;8;4" dur="2s" begin="1s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="1s" repeatCount="indefinite"/>
  </circle>
  <circle cx="180" cy="100" r="4" fill="#00ff88">
    <animate attributeName="r" values="4;8;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="720" cy="100" r="4" fill="#7c3aed">
    <animate attributeName="r" values="4;8;4" dur="2s" begin="1.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="1.5s" repeatCount="indefinite"/>
  </circle>

  <!-- Floating particles -->
  <circle cx="80" cy="40" r="3" fill="#00d4ff" opacity="0.7">
    <animate attributeName="cy" values="40;240;40" dur="8s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="80;120;80" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0;0.7" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="820" cy="240" r="3" fill="#ff006e" opacity="0.7">
    <animate attributeName="cy" values="240;40;240" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="820;780;820" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0;0.7" dur="9s" repeatCount="indefinite"/>
  </circle>
  <circle cx="250" cy="30" r="2" fill="#00ff88" opacity="0.5">
    <animate attributeName="cy" values="30;250;30" dur="10s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="250;500;250" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="250" r="2" fill="#7c3aed" opacity="0.5">
    <animate attributeName="cy" values="250;30;250" dur="11s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="650;400;650" dur="7s" repeatCount="indefinite"/>
  </circle>

  <!-- Neural network visualization -->
  <g filter="url(#softGlow)">
    <circle cx="200" cy="110" r="5" fill="#00d4ff" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="140" r="5" fill="#00d4ff" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="170" r="5" fill="#00d4ff" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="0.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="125" r="5" fill="#7c3aed" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="155" r="5" fill="#7c3aed" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="1.6s" repeatCount="indefinite"/>
    </circle>
    <line x1="200" y1="110" x2="250" y2="125" stroke="#00d4ff" stroke-width="1.5" opacity="0.6"/>
    <line x1="200" y1="140" x2="250" y2="125" stroke="#00d4ff" stroke-width="1.5" opacity="0.6"/>
    <line x1="200" y1="140" x2="250" y2="155" stroke="#00d4ff" stroke-width="1.5" opacity="0.6"/>
    <line x1="200" y1="170" x2="250" y2="155" stroke="#00d4ff" stroke-width="1.5" opacity="0.6"/>
  </g>

  <g filter="url(#softGlow)">
    <circle cx="700" cy="110" r="5" fill="#ff006e" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="0.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="140" r="5" fill="#ff006e" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="170" r="5" fill="#ff006e" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="1.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="650" cy="125" r="5" fill="#00ff88" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="650" cy="155" r="5" fill="#00ff88" opacity="0.9">
      <animate attributeName="r" values="5;7;5" dur="2s" begin="2.2s" repeatCount="indefinite"/>
    </circle>
    <line x1="700" y1="110" x2="650" y2="125" stroke="#ff006e" stroke-width="1.5" opacity="0.6"/>
    <line x1="700" y1="140" x2="650" y2="125" stroke="#ff006e" stroke-width="1.5" opacity="0.6"/>
    <line x1="700" y1="140" x2="650" y2="155" stroke="#ff006e" stroke-width="1.5" opacity="0.6"/>
    <line x1="700" y1="170" x2="650" y2="155" stroke="#ff006e" stroke-width="1.5" opacity="0.6"/>
  </g>

  <!-- Main Title with gradient -->
  <text x="450" y="105" font-family="monospace" font-size="52" font-weight="bold" fill="url(#textGrad)" text-anchor="middle" filter="url(#neonGlow)">
    i s s u 3 2 1
  </text>

  <!-- Professional Subtitle -->
  <text x="450" y="150" font-family="monospace" font-size="18" fill="#8b949e" text-anchor="middle">
    <tspan>🤖 AI/ML Engineer | 🔐 Cybersecurity Researcher | ⚡ Automation Architect | 🚀 Open Source Contributor</tspan>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
  </text>

  <!-- Animated status line -->
  <line x1="200" y1="180" x2="700" y2="180" stroke="url(#aiGrad)" stroke-width="3" stroke-linecap="round">
    <animate attributeName="x1" values="200;280;200" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="x2" values="700;620;700" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite"/>
  </line>

  <!-- Professional tagline -->
  <text x="450" y="210" font-family="monospace" font-size="15" fill="#00d4ff" text-anchor="middle">
    Engineering Intelligence. Automating Complexity. Securing the Future.
  </text>

  <!-- Animated binary rain effect at bottom -->
  <text x="450" y="245" font-family="monospace" font-size="12" fill="#00ff88" text-anchor="middle" opacity="0.4">
    <tspan>01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100</tspan>
    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
  </text>
</svg>

<br>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--              ULTIMATE ANIMATED WAVE DIVIDER                   -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
  </defs>
  <path d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40" fill="none" stroke="url(#waveGrad)" stroke-width="3" opacity="0.9">
    <animate attributeName="d" 
      values="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40;
              M0,40 Q150,70 300,40 T600,40 T900,40 T1200,40;
              M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40" 
      dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M0,40 Q150,70 300,40 T600,40 T900,40 T1200,40" fill="none" stroke="#ff006e" stroke-width="2" opacity="0.6">
    <animate attributeName="d" 
      values="M0,40 Q150,70 300,40 T600,40 T900,40 T1200,40;
              M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40;
              M0,40 Q150,70 300,40 T600,40 T900,40 T1200,40" 
      dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M0,40 Q150,25 300,40 T600,40 T900,40 T1200,40" fill="none" stroke="#00ff88" stroke-width="2" opacity="0.4">
    <animate attributeName="d" 
      values="M0,40 Q150,25 300,40 T600,40 T900,40 T1200,40;
              M0,40 Q150,55 300,40 T600,40 T900,40 T1200,40;
              M0,40 Q150,25 300,40 T600,40 T900,40 T1200,40" 
      dur="2.5s" repeatCount="indefinite"/>
  </path>
</svg>

</div>

---

<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--              TYPING ANIMATION BANNER v2.0                     -->
<!-- ═══════════════════════════════════════════════════════════════ -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&duration=3000&pause=1000&color=00D4FF&center=true&vCenter=true&width=800&lines=Welcome+to+my+AI+Lab!;I+am+Ussu+%F0%9F%A4%96;ML+%26+AI+Developer+%F0%9F%A7%AC;Ethical+Hacking+%26+Security+%F0%9F%94%90;Automation+%26+Bot+Development+%E2%9A%A1;Building+the+Future+with+Code+%F0%9F%9A%80)](https://git.io/typing-svg)

<br>

<!-- Animated developer badges -->
<img src="https://img.shields.io/badge/🔥-Full%20Stack%20Developer-ff006e?style=for-the-badge&logoColor=white&labelColor=0d1117" />
<img src="https://img.shields.io/badge/🤖-AI%20%2F%20ML%20Engineer-00d4ff?style=for-the-badge&logoColor=white&labelColor=0d1117" />
<img src="https://img.shields.io/badge/🔐-Security%20Researcher-00ff88?style=for-the-badge&logoColor=white&labelColor=0d1117" />
<img src="https://img.shields.io/badge/⚡-Automation%20Architect-7c3aed?style=for-the-badge&logoColor=white&labelColor=0d1117" />

</div>

---

## 🤖 About Me

> *"Engineering AI-driven solutions, automating mission-critical workflows, and securing digital infrastructure at scale."* 🤖⚡🔐

Hello! I'm **Ussu** ( **`issu321`** ), an AI-driven developer operating at the intersection of **Machine Learning**, **Cyber Security**, and **Full Stack Engineering**. I build intelligent systems that learn, adapt, and protect.

<div align="center">

<!-- Advanced Terminal-style info box -->
<svg width="90%" height="320" viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="termGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="termBorder" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
    <filter id="termGlow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="750" height="320" fill="url(#termGrad)" rx="15" stroke="url(#termBorder)" stroke-width="2.5" filter="url(#termGlow)"/>

  <!-- Window controls -->
  <circle cx="30" cy="25" r="7" fill="#ff5f56"/>
  <circle cx="55" cy="25" r="7" fill="#ffbd2e"/>
  <circle cx="80" cy="25" r="7" fill="#27c93f"/>

  <text x="375" y="30" font-family="monospace" font-size="13" fill="#8b949e" text-anchor="middle">issu321@ai-workstation: ~/ml-security-ops</text>

  <!-- Terminal content with typing effect simulation -->
  <text x="25" y="65" font-family="monospace" font-size="14" fill="#00d4ff">
    <tspan x="25" dy="0">$ neofetch --ai-mode --enhanced</tspan>
  </text>

  <text x="25" y="95" font-family="monospace" font-size="14" fill="#e6edf3">
    <tspan x="25" dy="0">🤖 Name:        Ussu (issu321)</tspan>
    <tspan x="25" dy="24">🧠 Role:        AI/ML Engineer & Security Researcher</tspan>
    <tspan x="25" dy="24">🐧 OS:          Kali Linux / Ubuntu / Windows 11 WSL2</tspan>
    <tspan x="25" dy="24">🐍 Stack:       Python, TensorFlow, PyTorch, Scikit-Learn</tspan>
    <tspan x="25" dy="24">🔐 Security:    Metasploit, Burp Suite, Nmap, Wireshark</tspan>
    <tspan x="25" dy="24">🌐 Web:         React, Node.js, FastAPI, Docker, K8s</tspan>
    <tspan x="25" dy="24">⚡ Focus:       AI Automation, Ethical Hacking, Open Source</tspan>
    <tspan x="25" dy="24">📊 Stats:       50+ Repositories | 1000+ Commits | 24/7 Uptime</tspan>
  </text>

  <!-- Animated cursor -->
  <text x="25" y="285" font-family="monospace" font-size="14" fill="#00ff88">
    <tspan x="25" dy="0">$ <tspan font-weight="bold">_</tspan></tspan>
    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
  </text>

  <!-- Corner decorations -->
  <text x="720" y="300" font-family="monospace" font-size="10" fill="#00d4ff" opacity="0.5">● ONLINE</text>
</svg>

</div>

<br>

🌙 **Current Operations:**
- 🔭 Building **AI-powered Code Reviewers** with LLMs & NLP
- 🌱 Training **custom ML models** for anomaly detection in network traffic
- 👯 Collaborating on **automated penetration testing frameworks**
- 🤔 Researching **adversarial AI** — attacking & defending ML systems
- 💬 Ask me about **Python, TensorFlow, Ethical Hacking, or Linux**
- ⚡ Fun fact: *My bots work while I sleep — 24/7 automation is the goal* 🤖

<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--              ANIMATED TECH DIVIDER v2.0                       -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="500" height="60" viewBox="0 0 500 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
  </defs>

  <text x="30" y="40" font-size="30" fill="#00d4ff">🤖
    <animate attributeName="y" values="40;20;40" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
  </text>
  <text x="90" y="40" font-size="26" fill="#7c3aed">⚡
    <animate attributeName="y" values="40;25;40" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
  </text>
  <text x="150" y="40" font-size="30" fill="#00d4ff">🧠
    <animate attributeName="y" values="40;20;40" dur="2.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
  </text>
  <text x="210" y="40" font-size="26" fill="#7c3aed">🔐
    <animate attributeName="y" values="40;25;40" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
  </text>
  <text x="270" y="40" font-size="30" fill="#00d4ff">💻
    <animate attributeName="y" values="40;20;40" dur="1.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
  </text>
  <text x="330" y="40" font-size="26" fill="#7c3aed">🚀
    <animate attributeName="y" values="40;25;40" dur="2.3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite"/>
  </text>
  <text x="390" y="40" font-size="30" fill="#00d4ff">🔥
    <animate attributeName="y" values="40;20;40" dur="2.1s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite"/>
  </text>
  <text x="450" y="40" font-size="26" fill="#7c3aed">⚙️
    <animate attributeName="y" values="40;25;40" dur="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite"/>
  </text>
</svg>

</div>

---

## 🏆 GitHub Achievements & Trophies

<div align="center">

<!-- GitHub Trophies -->
[![trophy](https://github-profile-trophy.vercel.app/?username=issu321&theme=radical&no-frame=true&no-bg=true&margin-w=15&margin-h=15&column=7)](https://github.com/issu321)

<br>

<!-- Animated stats cards -->
<img src="https://github-readme-stats.vercel.app/api?username=issu321&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=00d4ff&icon_color=00ff88&text_color=e6edf3&ring_color=ff006e" height="180" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=issu321&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=00d4ff&text_color=e6edf3" height="180" />

<br><br>

<!-- Streak stats -->
<img src="https://github-readme-streak-stats.herokuapp.com/?user=issu321&theme=radical&hide_border=true&background=0d1117&stroke=00d4ff&ring=ff006e&fire=00ff88&currStreakLabel=00d4ff" />

<br><br>

<!-- Contribution graph -->
<img src="https://github-readme-activity-graph.vercel.app/graph?username=issu321&theme=react-dark&hide_border=true&area=true&color=00d4ff&line=ff006e&point=00ff88" width="95%" />

</div>

---

## 🧬 Tech Stack & AI Arsenal

<div align="center">

### 🤖 AI / Machine Learning 🤖

<p>
  <img src="https://skillicons.dev/icons?i=python,tensorflow,pytorch,opencv&theme=dark&perline=8" />
</p>
<p>
  <code><img height="35" src="https://raw.githubusercontent.com/github/explore/main/topics/scikit-learn/scikit-learn.png" alt="scikit-learn"></code>
  <code><img height="35" src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="pandas"></code>
  <code><img height="35" src="https://raw.githubusercontent.com/github/explore/main/topics/numpy/numpy.png" alt="numpy"></code>
  <code><img height="35" src="https://raw.githubusercontent.com/github/explore/main/topics/jupyter-notebook/jupyter-notebook.png" alt="jupyter"></code>
  <code><img height="35" src="https://raw.githubusercontent.com/github/explore/main/topics/keras/keras.png" alt="keras"></code>
  <code><img height="35" src="https://img.shields.io/badge/AI-%23FF6F00.svg?style=for-the-badge&logo=openai&logoColor=white" alt="ai"></code>
  <code><img height="35" src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="langchain"></code>
  <code><img height="35" src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="huggingface"></code>
</p>

### 🔐 Cyber Security & Hacking 🔐

<p>
  <img src="https://skillicons.dev/icons?i=linux,kali,bash,python&theme=dark&perline=8" />
</p>
<p>
  <code><img height="35" src="https://img.shields.io/badge/Metasploit-2596CD?style=for-the-badge&logo=metasploit&logoColor=white" alt="Metasploit"></code>
  <code><img height="35" src="https://img.shields.io/badge/Burp_Suite-FF6633?style=for-the-badge&logo=burpsuite&logoColor=white" alt="Burp Suite"></code>
  <code><img height="35" src="https://img.shields.io/badge/Nmap-4682B4?style=for-the-badge&logo=nmap&logoColor=white" alt="Nmap"></code>
  <code><img height="35" src="https://img.shields.io/badge/Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white" alt="Wireshark"></code>
  <code><img height="35" src="https://img.shields.io/badge/OWASP-000000?style=for-the-badge&logo=owasp&logoColor=white" alt="OWASP"></code>
  <code><img height="35" src="https://img.shields.io/badge/Splunk-000000?style=for-the-badge&logo=splunk&logoColor=white" alt="Splunk"></code>
</p>

### 💻 Full Stack & DevOps 💻

<p>
  <img src="https://skillicons.dev/icons?i=javascript,typescript,react,nextjs,nodejs,express,fastapi,django,html,css,tailwind,docker,kubernetes,nginx,aws,gcp,git,github,vscode,vim,neovim,mongodb,postgresql,redis&theme=dark&perline=12" />
</p>

### 🛠️ Tools & Platforms 🛠️

<p>
  <img src="https://skillicons.dev/icons?i=githubactions,gitlab,figma,postman,vercel,netlify,heroku,cloudflare&theme=dark&perline=8" />
</p>

</div>

---

## 🧠 AI & ML Projects Showcase

<div align="center">

<!-- Advanced AI Projects Grid -->
<svg width="95%" height="450" viewBox="0 0 900 450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cardBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="cardBg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#1e1b4b"/>
    </linearGradient>
    <linearGradient id="cardBg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#064e3b"/>
    </linearGradient>
    <linearGradient id="cardBg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#451a03"/>
    </linearGradient>
    <filter id="cardGlow1">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Card 1: AI Code Reviewer -->
  <rect x="20" y="20" width="420" height="190" fill="url(#cardBg1)" rx="15" stroke="#00d4ff" stroke-width="2" filter="url(#cardGlow1)"/>
  <text x="45" y="55" font-family="monospace" font-size="18" fill="#00d4ff" font-weight="bold">🤖 AI Code Reviewer</text>
  <text x="45" y="82" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="45" dy="0">▸ LLM-powered code analysis & review</tspan>
    <tspan x="45" dy="20">▸ Automated bug detection & fixes</tspan>
    <tspan x="45" dy="20">▸ Security vulnerability scanning</tspan>
    <tspan x="45" dy="20">▸ Performance optimization suggestions</tspan>
    <tspan x="45" dy="20">▸ Python • OpenAI API • Streamlit</tspan>
  </text>
  <circle cx="45" cy="175" r="5" fill="#00ff88">
    <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <text x="60" y="180" font-family="monospace" font-size="12" fill="#00ff88">● Active Development</text>

  <!-- Card 2: Jarvis AI Assistant -->
  <rect x="460" y="20" width="420" height="190" fill="url(#cardBg2)" rx="15" stroke="#7c3aed" stroke-width="2" filter="url(#cardGlow1)"/>
  <text x="485" y="55" font-family="monospace" font-size="18" fill="#7c3aed" font-weight="bold">🗣️ Jarvis AI Assistant</text>
  <text x="485" y="82" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="485" dy="0">▸ Voice & text natural interaction</tspan>
    <tspan x="485" dy="20">▸ System automation & smart control</tspan>
    <tspan x="485" dy="20">▸ Web search & API integration</tspan>
    <tspan x="485" dy="20">▸ Context-aware conversation memory</tspan>
    <tspan x="485" dy="20">▸ Python • SpeechRecognition • NLP</tspan>
  </text>
  <circle cx="485" cy="175" r="5" fill="#00ff88">
    <animate attributeName="r" values="5;7;5" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <text x="500" y="180" font-family="monospace" font-size="12" fill="#00ff88">● Active Development</text>

  <!-- Card 3: Network Anomaly Detection -->
  <rect x="20" y="230" width="420" height="190" fill="url(#cardBg3)" rx="15" stroke="#00ff88" stroke-width="2" filter="url(#cardGlow1)"/>
  <text x="45" y="265" font-family="monospace" font-size="18" fill="#00ff88" font-weight="bold">🔐 NetSec ML Detector</text>
  <text x="45" y="292" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="45" dy="0">▸ ML-based intrusion detection system</tspan>
    <tspan x="45" dy="20">▸ Real-time network traffic analysis</tspan>
    <tspan x="45" dy="20">▸ Anomaly classification with deep learning</tspan>
    <tspan x="45" dy="20">▸ Threat intelligence integration</tspan>
    <tspan x="45" dy="20">▸ Python • Scikit-Learn • Wireshark</tspan>
  </text>
  <circle cx="45" cy="385" r="5" fill="#ffbd2e">
    <animate attributeName="r" values="5;7;5" dur="1.5s" begin="1s" repeatCount="indefinite"/>
  </circle>
  <text x="60" y="390" font-family="monospace" font-size="12" fill="#ffbd2e">● Research Phase</text>

  <!-- Card 4: Auto Pentest Framework -->
  <rect x="460" y="230" width="420" height="190" fill="url(#cardBg4)" rx="15" stroke="#f59e0b" stroke-width="2" filter="url(#cardGlow1)"/>
  <text x="485" y="265" font-family="monospace" font-size="18" fill="#f59e0b" font-weight="bold">⚔️ Auto-Pentest AI</text>
  <text x="485" y="292" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="485" dy="0">▸ Automated vulnerability scanning</tspan>
    <tspan x="485" dy="20">▸ AI-driven exploit suggestion engine</tspan>
    <tspan x="485" dy="20">▸ Intelligent report generation with NLP</tspan>
    <tspan x="485" dy="20">▸ Continuous security monitoring</tspan>
    <tspan x="485" dy="20">▸ Python • Metasploit • Nmap API</tspan>
  </text>
  <circle cx="485" cy="385" r="5" fill="#ffbd2e">
    <animate attributeName="r" values="5;7;5" dur="1.5s" begin="1.5s" repeatCount="indefinite"/>
  </circle>
  <text x="500" y="390" font-family="monospace" font-size="12" fill="#ffbd2e">● Research Phase</text>
</svg>

</div>

---

## 🔬 AI & Security Research Lab

<div align="center">

<!-- Advanced Research Areas -->
<svg width="95%" height="380" viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="labBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="labBorder" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
    <filter id="labGlow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="900" height="380" fill="url(#labBg)" rx="18" stroke="url(#labBorder)" stroke-width="3" filter="url(#labGlow)"/>

  <!-- Animated corner accents -->
  <path d="M20,20 L60,20 L60,25 L25,25 L25,60 L20,60 Z" fill="#00d4ff" opacity="0.8">
    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M880,20 L840,20 L840,25 L875,25 L875,60 L880,60 Z" fill="#ff006e" opacity="0.8">
    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" begin="1s" repeatCount="indefinite"/>
  </path>
  <path d="M20,360 L60,360 L60,355 L25,355 L25,320 L20,320 Z" fill="#00ff88" opacity="0.8">
    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" begin="2s" repeatCount="indefinite"/>
  </path>
  <path d="M880,360 L840,360 L840,355 L875,355 L875,320 L880,320 Z" fill="#7c3aed" opacity="0.8">
    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" begin="1.5s" repeatCount="indefinite"/>
  </path>

  <text x="450" y="40" font-family="monospace" font-size="22" fill="url(#labBorder)" text-anchor="middle" font-weight="bold">🔬 RESEARCH & DEVELOPMENT LAB 🔬</text>

  <!-- Section 1: ML Pipelines -->
  <text x="45" y="80" font-family="monospace" font-size="15" fill="#7c3aed" font-weight="bold">🧬 MACHINE LEARNING PIPELINES</text>
  <text x="45" y="108" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="45" dy="0">▸ Data preprocessing & feature engineering with Pandas/NumPy</tspan>
    <tspan x="45" dy="20">▸ Model training: CNN, RNN, Transformers, XGBoost, Random Forest</tspan>
    <tspan x="45" dy="20">▸ Hyperparameter tuning with Optuna & Ray Tune</tspan>
    <tspan x="45" dy="20">▸ MLOps: MLflow tracking, model versioning, deployment pipelines</tspan>
  </text>

  <!-- Section 2: NLP & LLMs -->
  <text x="45" y="200" font-family="monospace" font-size="15" fill="#00ff88" font-weight="bold">🗨️ NLP & LARGE LANGUAGE MODELS</text>
  <text x="45" y="228" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="45" dy="0">▸ Fine-tuning LLMs (Llama, GPT, Mistral) for domain-specific tasks</tspan>
    <tspan x="45" dy="20">▸ RAG systems with vector databases (Pinecone, Chroma, FAISS)</tspan>
    <tspan x="45" dy="20">▸ Prompt engineering & chain-of-thought reasoning frameworks</tspan>
    <tspan x="45" dy="20">▸ LangChain & LlamaIndex for intelligent agent orchestration</tspan>
  </text>

  <!-- Section 3: Adversarial AI -->
  <text x="45" y="320" font-family="monospace" font-size="15" fill="#f59e0b" font-weight="bold">⚔️ ADVERSARIAL AI & SECURITY</text>
  <text x="45" y="348" font-family="monospace" font-size="13" fill="#8b949e">
    <tspan x="45" dy="0">▸ Adversarial attacks: FGSM, PGD, DeepFool on neural networks</tspan>
    <tspan x="45" dy="20">▸ Model robustness testing & defensive distillation techniques</tspan>
    <tspan x="45" dy="20">▸ AI-powered penetration testing & automated exploit generation</tspan>
  </text>
</svg>

</div>

---

## 📊 Contribution Analytics

<div align="center">

<!-- Snake animation -->
<img src="https://raw.githubusercontent.com/issu321/issu321/output/github-contribution-grid-snake.svg" alt="Snake animation" />

<br><br>

<!-- Metrics -->
<img src="https://metrics.lecoq.io/issu321?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&isocalendar=1&isocalendar.duration=half-year&languages=1&languages.limit=8&languages.colors=github&languages.threshold=0%&lines=1&achievements=1&achievements.threshold=C&achievements.secrets=true&achievements.display=compact&achievements.limit=0&config.timezone=Asia%2FKolkata" alt="Metrics" width="90%" />

</div>

---

## 🌐 Connect & Collaborate

<div align="center">

<!-- GitHub -->
<a href="https://github.com/issu321" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-issu321-00d4ff?style=for-the-badge&logo=github&logoColor=white&labelColor=0d1117" />
</a>

<!-- Portfolio -->
<a href="https://issu321.github.io/issu321" target="_blank">
  <img src="https://img.shields.io/badge/Mohammed%20Usman-Portfolio-7c3aed?style=for-the-badge&logo=firefox-browser&logoColor=white&labelColor=0d1117" />
</a>

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/mohammed-usman-28584a283/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-Connect-00d4ff?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0d1117" />
</a>

<br><br>

<!-- Profile Views Counter -->
<img src="https://komarev.com/ghpvc/?username=issu321&color=00d4ff&style=for-the-badge&label=SYSTEM+VISITORS" />

<br><br>

<!-- Animated contact badges -->
<img src="https://img.shields.io/badge/📧-Open%20for%20Collaboration-00ff88?style=for-the-badge&logoColor=white&labelColor=0d1117" />
<img src="https://img.shields.io/badge/💼-Hire%20Me-ff006e?style=for-the-badge&logoColor=white&labelColor=0d1117" />
<img src="https://img.shields.io/badge/🤝-Open%20Source%20Contributor-7c3aed?style=for-the-badge&logoColor=white&labelColor=0d1117" />

</div>

---

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--              ULTIMATE ANIMATED FOOTER v2.0                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<div align="center">

<svg width="100%" height="220" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
    <linearGradient id="footerBorder" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#ff006e"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
    <filter id="footerGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="900" height="220" fill="#0a0e17" rx="20" stroke="url(#footerBorder)" stroke-width="3"/>

  <!-- Circuit lines -->
  <path d="M120,170 L180,170 L180,140 L240,140" fill="none" stroke="#00d4ff" stroke-width="1.5" opacity="0.4">
    <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M780,170 L720,170 L720,140 L660,140" fill="none" stroke="#ff006e" stroke-width="1.5" opacity="0.4">
    <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
  </path>

  <!-- Floating tech emojis -->
  <text x="180" y="90" font-size="45" fill="#00d4ff" filter="url(#footerGlow)">🤖
    <animate attributeName="y" values="90;70;90" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="x" values="180;200;180" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
  </text>

  <text x="720" y="100" font-size="40" fill="#ff006e" filter="url(#footerGlow)">🧠
    <animate attributeName="y" values="100;80;100" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="x" values="720;700;720" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
  </text>

  <text x="280" y="70" font-size="35" fill="#00ff88" filter="url(#footerGlow)">⚡
    <animate attributeName="y" values="70;50;70" dur="1.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>
  </text>

  <text x="620" y="70" font-size="35" fill="#7c3aed" filter="url(#footerGlow)">🔐
    <animate attributeName="y" values="70;50;70" dur="2.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
  </text>

  <!-- Footer Text -->
  <text x="450" y="100" font-family="monospace" font-size="26" fill="url(#footerGrad)" text-anchor="middle" font-weight="bold" filter="url(#footerGlow)">
    Thanks for visiting my AI Lab!
  </text>

  <text x="450" y="130" font-family="monospace" font-size="15" fill="#8b949e" text-anchor="middle">
    May your models converge and your exploits always ethical 🛡️
  </text>

  <text x="450" y="155" font-family="monospace" font-size="14" fill="#00d4ff" text-anchor="middle">
    ⭐ Star my repos if they powered your next build! ⭐
  </text>

  <!-- Animated dots -->
  <circle cx="400" cy="180" r="4" fill="#00d4ff">
    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="450" cy="180" r="4" fill="#7c3aed">
    <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="500" cy="180" r="4" fill="#00ff88">
    <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="1s" repeatCount="indefinite"/>
  </circle>
</svg>

<br>

<!-- Waving goodbye -->
<svg width="250" height="70" viewBox="0 0 250 70" xmlns="http://www.w3.org/2000/svg">
  <text x="50" y="45" font-size="40">👋
    <animate attributeName="y" values="45;35;45" dur="1s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="-10 50 45; 10 50 45; -10 50 45" dur="1s" repeatCount="indefinite"/>
  </text>
  <text x="110" y="45" font-size="40">🤖
    <animate attributeName="y" values="45;30;45" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
  </text>
  <text x="170" y="45" font-size="40">👋
    <animate attributeName="y" values="45;35;45" dur="1s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="10 170 45; -10 170 45; 10 170 45" dur="1s" repeatCount="indefinite"/>
  </text>
  <text x="210" y="45" font-size="35">💻
    <animate attributeName="y" values="45;25;45" dur="1.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
  </text>
</svg>

<br>

**Built with 🤖, 🧠, and endless training epochs by [issu321](https://github.com/issu321)**

<br>

<!-- Final animated signature -->
<svg width="600" height="40" viewBox="0 0 600 40" xmlns="http://www.w3.org/2000/svg">
  <text x="300" y="25" font-family="monospace" font-size="12" fill="#00d4ff" text-anchor="middle" opacity="0.6">
    <tspan>// while(alive) { code(); learn(); hack(); automate(); }</tspan>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
  </text>
</svg>

</div>
