<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                    AI TECH HEADER BANNER                        -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="100%" height="220" viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1">
        <animate attributeName="stop-color" values="#00d4ff;#7c3aed;#00ff88;#00d4ff" dur="5s" repeatCount="indefinite" />
      </stop>
      <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:1">
        <animate attributeName="stop-color" values="#7c3aed;#00ff88;#00d4ff;#7c3aed" dur="5s" repeatCount="indefinite" />
      </stop>
      <stop offset="100%" style="stop-color:#00ff88;stop-opacity:1">
        <animate attributeName="stop-color" values="#00ff88;#00d4ff;#7c3aed;#00ff88" dur="5s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
    <filter id="aiGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="220" fill="#0d1117" rx="20" stroke="#00d4ff" stroke-width="2"/>

  <!-- Animated circuit lines -->
  <path d="M50,180 L100,180 L100,140 L150,140" fill="none" stroke="#00d4ff" stroke-width="1.5" opacity="0.4">
    <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M750,180 L700,180 L700,140 L650,140" fill="none" stroke="#7c3aed" stroke-width="1.5" opacity="0.4">
    <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
  </path>
  <circle cx="150" cy="140" r="3" fill="#00d4ff" opacity="0.6">
    <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="140" r="3" fill="#7c3aed" opacity="0.6">
    <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" begin="1s" repeatCount="indefinite"/>
  </circle>

  <!-- Floating particles -->
  <circle cx="80" cy="50" r="2" fill="#00d4ff" opacity="0.5">
    <animate attributeName="cy" values="50;170;50" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="720" cy="170" r="2" fill="#7c3aed" opacity="0.5">
    <animate attributeName="cy" values="170;40;170" dur="7s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="7s" repeatCount="indefinite"/>
  </circle>
  <circle cx="250" cy="35" r="1.5" fill="#00ff88" opacity="0.4">
    <animate attributeName="cy" values="35;180;35" dur="8s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="250;450;250" dur="8s" repeatCount="indefinite"/>
  </circle>

  <!-- Neural network nodes -->
  <g filter="url(#softGlow)">
    <circle cx="180" cy="90" r="4" fill="#00d4ff" opacity="0.8">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="180" cy="120" r="4" fill="#00d4ff" opacity="0.8">
      <animate attributeName="r" values="4;6;4" dur="2s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="220" cy="105" r="4" fill="#7c3aed" opacity="0.8">
      <animate attributeName="r" values="4;6;4" dur="2s" begin="0.6s" repeatCount="indefinite"/>
    </circle>
    <line x1="180" y1="90" x2="220" y2="105" stroke="#00d4ff" stroke-width="1" opacity="0.5"/>
    <line x1="180" y1="120" x2="220" y2="105" stroke="#00d4ff" stroke-width="1" opacity="0.5"/>
  </g>

  <g filter="url(#softGlow)">
    <circle cx="620" cy="90" r="4" fill="#7c3aed" opacity="0.8">
      <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="620" cy="120" r="4" fill="#7c3aed" opacity="0.8">
      <animate attributeName="r" values="4;6;4" dur="2s" begin="0.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="580" cy="105" r="4" fill="#00ff88" opacity="0.8">
      <animate attributeName="r" values="4;6;4" dur="2s" begin="1.1s" repeatCount="indefinite"/>
    </circle>
    <line x1="620" y1="90" x2="580" y2="105" stroke="#7c3aed" stroke-width="1" opacity="0.5"/>
    <line x1="620" y1="120" x2="580" y2="105" stroke="#7c3aed" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- Main Title -->
  <text x="400" y="95" font-family="monospace" font-size="46" font-weight="bold" fill="#e6edf3" text-anchor="middle" filter="url(#aiGlow)">
    U S S U  3 2 1
  </text>

  <!-- Professional Subtitle -->
  <text x="400" y="140" font-family="monospace" font-size="16" fill="#8b949e" text-anchor="middle">
    <tspan>🤖 AI/ML Engineer | 🔐 Cybersecurity Researcher | ⚡ Automation Architect | 🚀 Open Source Contributor</tspan>
    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
  </text>

  <!-- Animated status line -->
  <line x1="180" y1="170" x2="620" y2="170" stroke="url(#aiGrad)" stroke-width="2.5" stroke-linecap="round">
    <animate attributeName="x1" values="180;220;180" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="x2" values="620;580;620" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="stroke-width" values="2.5;4;2.5" dur="2s" repeatCount="indefinite"/>
  </line>

  <!-- Professional tagline -->
  <text x="400" y="195" font-family="monospace" font-size="13" fill="#00d4ff" text-anchor="middle">
    Engineering Intelligence. Automating Complexity. Securing the Future.
  </text>
</svg>

<br>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                    ANIMATED WAVE DIVIDER                        -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,30 Q150,5 300,30 T600,30 T900,30 T1200,30" fill="none" stroke="#00d4ff" stroke-width="2.5" opacity="0.8">
    <animate attributeName="d" 
      values="M0,30 Q150,5 300,30 T600,30 T900,30 T1200,30;
              M0,30 Q150,55 300,30 T600,30 T900,30 T1200,30;
              M0,30 Q150,5 300,30 T600,30 T900,30 T1200,30" 
      dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M0,30 Q150,55 300,30 T600,30 T900,30 T1200,30" fill="none" stroke="#7c3aed" stroke-width="2" opacity="0.5">
    <animate attributeName="d" 
      values="M0,30 Q150,55 300,30 T600,30 T900,30 T1200,30;
              M0,30 Q150,5 300,30 T600,30 T900,30 T1200,30;
              M0,30 Q150,55 300,30 T600,30 T900,30 T1200,30" 
      dur="3s" repeatCount="indefinite"/>
  </path>
  <path d="M0,30 Q150,20 300,30 T600,30 T900,30 T1200,30" fill="none" stroke="#00ff88" stroke-width="1.5" opacity="0.3">
    <animate attributeName="d" 
      values="M0,30 Q150,20 300,30 T600,30 T900,30 T1200,30;
              M0,30 Q150,40 300,30 T600,30 T900,30 T1200,30;
              M0,30 Q150,20 300,30 T600,30 T900,30 T1200,30" 
      dur="2.5s" repeatCount="indefinite"/>
  </path>
</svg>

</div>

---

<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                    TYPING ANIMATION BANNER                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&duration=3000&pause=1000&color=00D4FF&center=true&vCenter=true&width=800&lines=Welcome+to+my+AI+Lab!;I+am+Ussu321+%F0%9F%A4%96;ML+%26+AI+Developer+%F0%9F%A7%AC;Ethical+Hacking+%26+Security+%F0%9F%94%90;Automation+%26+Bot+Development+%E2%9A%A1;Building+the+Future+with+Code+%F0%9F%9A%80)](https://git.io/typing-svg)

</div>

---

## 🤖 About Me

> *"Engineering AI-driven solutions, automating mission-critical workflows, and securing digital infrastructure at scale."* 🤖⚡🔐

Hello! I'm **Ussu** ( **`issu321`** ), an AI-driven developer operating at the intersection of **Machine Learning**, **Cyber Security**, and **Full Stack Engineering**. I build intelligent systems that learn, adapt, and protect.

<div align="center">

<!-- Terminal-style info box -->
<svg width="90%" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="termGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="700" height="300" fill="url(#termGrad)" rx="12" stroke="#00d4ff" stroke-width="2"/>

  <!-- Window controls -->
  <circle cx="25" cy="20" r="6" fill="#ff5f56"/>
  <circle cx="45" cy="20" r="6" fill="#ffbd2e"/>
  <circle cx="65" cy="20" r="6" fill="#27c93f"/>

  <text x="350" y="24" font-family="monospace" font-size="12" fill="#8b949e" text-anchor="middle">issu321@ai-workstation: ~/ml-security-ops</text>

  <text x="20" y="55" font-family="monospace" font-size="13" fill="#00d4ff">
    <tspan x="20" dy="0">$ neofetch --ai-mode</tspan>
  </text>

  <text x="20" y="80" font-family="monospace" font-size="13" fill="#e6edf3">
    <tspan x="20" dy="0">🤖 Name:        Ussu (issu321)</tspan>
    <tspan x="20" dy="22">🧠 Role:        AI/ML Engineer & Security Researcher</tspan>
    <tspan x="20" dy="22">🐧 OS:          Kali Linux / Ubuntu / Windows 11 WSL2</tspan>
    <tspan x="20" dy="22">🐍 Stack:       Python, TensorFlow, PyTorch, Scikit-Learn</tspan>
    <tspan x="20" dy="22">🔐 Security:    Metasploit, Burp Suite, Nmap, Wireshark</tspan>
    <tspan x="20" dy="22">🌐 Web:         React, Node.js, FastAPI, Docker, K8s</tspan>
    <tspan x="20" dy="22">⚡ Focus:       AI Automation, Ethical Hacking, Open Source</tspan>
  </text>

  <text x="20" y="265" font-family="monospace" font-size="13" fill="#00d4ff">
    <tspan x="20" dy="0">$ <tspan fill="#00ff88" font-weight="bold">_</tspan></tspan>
    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
  </text>
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
<!--                    TECH DIVIDER                                 -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="400" height="50" viewBox="0 0 400 50" xmlns="http://www.w3.org/2000/svg">
  <text x="50" y="35" font-size="28" fill="#00d4ff">🤖
    <animate attributeName="y" values="35;20;35" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
  </text>
  <text x="110" y="35" font-size="24" fill="#7c3aed">⚡
    <animate attributeName="y" values="35;25;35" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
  </text>
  <text x="170" y="35" font-size="28" fill="#00d4ff">🧠
    <animate attributeName="y" values="35;20;35" dur="2.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
  </text>
  <text x="230" y="35" font-size="24" fill="#7c3aed">🔐
    <animate attributeName="y" values="35;25;35" dur="2.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
  </text>
  <text x="290" y="35" font-size="28" fill="#00d4ff">💻
    <animate attributeName="y" values="35;20;35" dur="1.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
  </text>
</svg>

</div>

---

## 🧬 Tech Stack & AI Arsenal

<div align="center">

### 🤖 AI / Machine Learning 🤖

<p>
  <img src="https://skillicons.dev/icons?i=python,tensorflow,pytorch,opencv&theme=dark&perline=8" />
</p>
<p>
  <code><img height="30" src="https://raw.githubusercontent.com/github/explore/main/topics/scikit-learn/scikit-learn.png" alt="scikit-learn"></code>
  <code><img height="30" src="https://img.shields.io/badge/pandas-%23150458.svg?style=flat-square&logo=pandas&logoColor=white" alt="pandas"></code>
  <code><img height="30" src="https://raw.githubusercontent.com/github/explore/main/topics/numpy/numpy.png" alt="numpy"></code>
  <code><img height="30" src="https://raw.githubusercontent.com/github/explore/main/topics/jupyter-notebook/jupyter-notebook.png" alt="jupyter"></code>
  <code><img height="30" src="https://raw.githubusercontent.com/github/explore/main/topics/keras/keras.png" alt="keras"></code>
  <code><img height="30" src="https://img.shields.io/badge/AI-%23FF6F00.svg?style=flat-square&logo=openai&logoColor=white" alt="ai"></code>
</p>

### 🔐 Cyber Security & Hacking 🔐

<p>
  <img src="https://skillicons.dev/icons?i=linux,kali,bash,python&theme=dark&perline=8" />
</p>
<p>
  <code><img height="30" src="https://img.shields.io/badge/Metasploit-2596CD?style=flat-square&logo=metasploit&logoColor=white" alt="Metasploit"></code>
  <code><img height="30" src="https://img.shields.io/badge/Burp_Suite-FF6633?style=flat-square&logo=burpsuite&logoColor=white" alt="Burp Suite"></code>
  <code><img height="30" src="https://img.shields.io/badge/Nmap-4682B4?style=flat-square&logo=nmap&logoColor=white" alt="Nmap"></code>
  <code><img height="30" src="https://img.shields.io/badge/Wireshark-1679A7?style=flat-square&logo=wireshark&logoColor=white" alt="Wireshark"></code>
</p>

### 💻 Full Stack & DevOps 💻

<p>
  <img src="https://skillicons.dev/icons?i=javascript,typescript,react,nextjs,nodejs,express,fastapi,django,html,css,tailwind,docker,kubernetes,nginx,aws,gcp,git,github,vscode,vim,neovim,mongodb,postgresql,redis&theme=dark&perline=12" />
</p>

</div>

---

## 📊 GitHub Contribution Streak

<div align="center">

<!-- Streak Stats -->
<img src="https://github-readme-streak-stats.herokuapp.com/?user=issu321&theme=radical&hide_border=true&background=0d1117&stroke=00d4ff&ring=7c3aed&fire=00ff88&currStreakNum=e6edf3&sideNums=e6edf3&currStreakLabel=00d4ff&sideLabels=00d4ff&dates=8b949e" width="80%" />

</div>

---

## 🧠 AI & ML Projects Showcase

<div align="center">

<!-- AI Projects Grid -->
<svg width="90%" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <filter id="cardGlow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Card 1: AI Code Reviewer -->
  <rect x="20" y="20" width="370" height="170" fill="url(#cardBg)" rx="12" stroke="#00d4ff" stroke-width="1.5" filter="url(#cardGlow)"/>
  <text x="40" y="55" font-family="monospace" font-size="16" fill="#00d4ff" font-weight="bold">🤖 AI Code Reviewer</text>
  <text x="40" y="80" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="40" dy="0">LLM-powered code analysis</tspan>
    <tspan x="40" dy="18">Automated bug detection</tspan>
    <tspan x="40" dy="18">Security vulnerability scanning</tspan>
    <tspan x="40" dy="18">Python • OpenAI API • Streamlit</tspan>
  </text>
  <text x="40" y="165" font-family="monospace" font-size="11" fill="#00ff88">● Active Development</text>

  <!-- Card 2: Jarvis AI Assistant -->
  <rect x="410" y="20" width="370" height="170" fill="url(#cardBg)" rx="12" stroke="#7c3aed" stroke-width="1.5" filter="url(#cardGlow)"/>
  <text x="430" y="55" font-family="monospace" font-size="16" fill="#7c3aed" font-weight="bold">🗣️ Jarvis AI Assistant</text>
  <text x="430" y="80" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="430" dy="0">Voice & text interaction</tspan>
    <tspan x="430" dy="18">System automation & control</tspan>
    <tspan x="430" dy="18">Web search & API integration</tspan>
    <tspan x="430" dy="18">Python • SpeechRecognition • NLP</tspan>
  </text>
  <text x="430" y="165" font-family="monospace" font-size="11" fill="#00ff88">● Active Development</text>

  <!-- Card 3: Network Anomaly Detection -->
  <rect x="20" y="210" width="370" height="170" fill="url(#cardBg)" rx="12" stroke="#00ff88" stroke-width="1.5" filter="url(#cardGlow)"/>
  <text x="40" y="245" font-family="monospace" font-size="16" fill="#00ff88" font-weight="bold">🔐 NetSec ML Detector</text>
  <text x="40" y="270" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="40" dy="0">ML-based intrusion detection</tspan>
    <tspan x="40" dy="18">Real-time traffic analysis</tspan>
    <tspan x="40" dy="18">Anomaly classification with AI</tspan>
    <tspan x="40" dy="18">Python • Scikit-Learn • Wireshark</tspan>
  </text>
  <text x="40" y="355" font-family="monospace" font-size="11" fill="#ffbd2e">● Research Phase</text>

  <!-- Card 4: Auto Pentest Framework -->
  <rect x="410" y="210" width="370" height="170" fill="url(#cardBg)" rx="12" stroke="#f59e0b" stroke-width="1.5" filter="url(#cardGlow)"/>
  <text x="430" y="245" font-family="monospace" font-size="16" fill="#f59e0b" font-weight="bold">⚔️ Auto-Pentest AI</text>
  <text x="430" y="270" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="430" dy="0">Automated vulnerability scanning</tspan>
    <tspan x="430" dy="18">AI-driven exploit suggestion</tspan>
    <tspan x="430" dy="18">Report generation with NLP</tspan>
    <tspan x="430" dy="18">Python • Metasploit • Nmap API</tspan>
  </text>
  <text x="430" y="355" font-family="monospace" font-size="11" fill="#ffbd2e">● Research Phase</text>
</svg>

</div>

---

## 🔬 AI & Security Research Lab

<div align="center">

<!-- Research Areas -->
<svg width="90%" height="320" viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="labBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="320" fill="url(#labBg)" rx="15" stroke="#00d4ff" stroke-width="2"/>

  <text x="400" y="35" font-family="monospace" font-size="20" fill="#00d4ff" text-anchor="middle" font-weight="bold">🔬 RESEARCH & DEVELOPMENT LAB</text>

  <!-- Section 1: ML Pipelines -->
  <text x="40" y="70" font-family="monospace" font-size="14" fill="#7c3aed" font-weight="bold">🧬 MACHINE LEARNING PIPELINES</text>
  <text x="40" y="95" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="40" dy="0">• Data preprocessing & feature engineering with Pandas/NumPy</tspan>
    <tspan x="40" dy="18">• Model training: CNN, RNN, Transformers, XGBoost, Random Forest</tspan>
    <tspan x="40" dy="18">• Hyperparameter tuning with Optuna & Ray Tune</tspan>
    <tspan x="40" dy="18">• MLOps: MLflow tracking, model versioning, deployment</tspan>
  </text>

  <!-- Section 2: NLP & LLMs -->
  <text x="40" y="175" font-family="monospace" font-size="14" fill="#00ff88" font-weight="bold">🗨️ NLP & LARGE LANGUAGE MODELS</text>
  <text x="40" y="200" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="40" dy="0">• Fine-tuning LLMs (Llama, GPT, Mistral) for domain tasks</tspan>
    <tspan x="40" dy="18">• RAG systems with vector databases (Pinecone, Chroma, FAISS)</tspan>
    <tspan x="40" dy="18">• Prompt engineering & chain-of-thought reasoning</tspan>
    <tspan x="40" dy="18">• LangChain & LlamaIndex for agent orchestration</tspan>
  </text>

  <!-- Section 3: Adversarial AI -->
  <text x="40" y="275" font-family="monospace" font-size="14" fill="#f59e0b" font-weight="bold">⚔️ ADVERSARIAL AI & SECURITY</text>
  <text x="40" y="300" font-family="monospace" font-size="12" fill="#8b949e">
    <tspan x="40" dy="0">• Adversarial attacks: FGSM, PGD, DeepFool on neural networks</tspan>
    <tspan x="40" dy="18">• Model robustness testing & defensive distillation</tspan>
    <tspan x="40" dy="18">• AI-powered penetration testing & automated exploit generation</tspan>
  </text>
</svg>

</div>

---

## 🌐 Connect & Collaborate

<div align="center">

<!-- Social Links -->
<a href="https://github.com/issu321" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-issu321-00d4ff?style=for-the-badge&logo=github&logoColor=white&labelColor=0d1117" />
</a>
<a href="https://github.com/issu321" target="_blank">
  <img src="https://img.shields.io/badge/Portfolio-Coming%20Soon-7c3aed?style=for-the-badge&logo=firefox&logoColor=white&labelColor=0d1117" />
</a>
<a href="https://github.com/issu321" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-Connect-00d4ff?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0d1117" />
</a>
<a href="https://github.com/issu321" target="_blank">
  <img src="https://img.shields.io/badge/Twitter-Follow-7c3aed?style=for-the-badge&logo=twitter&logoColor=white&labelColor=0d1117" />
</a>
<a href="https://github.com/issu321" target="_blank">
  <img src="https://img.shields.io/badge/Discord-Join%20Server-00ff88?style=for-the-badge&logo=discord&logoColor=white&labelColor=0d1117" />
</a>

<br><br>

<!-- Profile Views Counter -->
<img src="https://komarev.com/ghpvc/?username=issu321&color=00d4ff&style=for-the-badge&label=SYSTEM+VISITORS" />

</div>

---

<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                    ANIMATED FOOTER                             -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<svg width="100%" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff"/>
      <stop offset="50%" style="stop-color:#7c3aed"/>
      <stop offset="100%" style="stop-color:#00ff88"/>
    </linearGradient>
    <filter id="footerGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="200" fill="#0d1117" rx="20" stroke="#00d4ff" stroke-width="2"/>

  <!-- Circuit lines -->
  <path d="M100,160 L150,160 L150,130 L200,130" fill="none" stroke="#00d4ff" stroke-width="1" opacity="0.3"/>
  <path d="M700,160 L650,160 L650,130 L600,130" fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.3"/>

  <!-- Floating tech emojis -->
  <text x="150" y="90" font-size="40" fill="#00d4ff" filter="url(#footerGlow)">🤖
    <animate attributeName="y" values="90;70;90" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="x" values="150;170;150" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
  </text>

  <text x="620" y="100" font-size="35" fill="#7c3aed" filter="url(#footerGlow)">🧠
    <animate attributeName="y" values="100;80;100" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="x" values="620;600;620" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
  </text>

  <!-- Footer Text -->
  <text x="400" y="90" font-family="monospace" font-size="24" fill="url(#footerGrad)" text-anchor="middle" font-weight="bold" filter="url(#footerGlow)">
    Thanks for visiting my AI Lab!
  </text>

  <text x="400" y="120" font-family="monospace" font-size="14" fill="#8b949e" text-anchor="middle">
    May your models converge and your exploits always ethical 🛡️
  </text>

  <text x="400" y="145" font-family="monospace" font-size="13" fill="#00d4ff" text-anchor="middle">
    ⭐ Star my repos if they powered your next build! ⭐
  </text>

  <!-- Animated dots -->
  <circle cx="350" cy="165" r="3" fill="#00d4ff">
    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="400" cy="165" r="3" fill="#7c3aed">
    <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="450" cy="165" r="3" fill="#00ff88">
    <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="1s" repeatCount="indefinite"/>
  </circle>
</svg>

<br>

<!-- Waving goodbye -->
<svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
  <text x="50" y="40" font-size="35">👋
    <animate attributeName="y" values="40;30;40" dur="1s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="-10 50 40; 10 50 40; -10 50 40" dur="1s" repeatCount="indefinite"/>
  </text>
  <text x="100" y="40" font-size="35">🤖
    <animate attributeName="y" values="40;25;40" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
  </text>
  <text x="160" y="40" font-size="35">👋
    <animate attributeName="y" values="40;30;40" dur="1s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" values="10 160 40; -10 160 40; 10 160 40" dur="1s" repeatCount="indefinite"/>
  </text>
</svg>

<br>

**Built with 🤖, 🧠, and endless training epochs by [Ussu321](https://github.com/issu321)**

</div>
