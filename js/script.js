// JavaScript for Monisha A's Interactive Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger animation if needed
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close mobile menu on clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Typing Effect (Hero Section Tagline)
    const typingElement = document.getElementById('typing-text');
    const roles = [
        "Software Engineer",
        "Full-Stack Developer",
        "Performance Engineer",
        "GenAI Developer",
        "JVM Tuning Specialist"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster deleting
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Natural typing speed
        }

        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at the end of typing
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    type();

    // 3. JVM Performance & AI Inference Dashboard Simulator
    const cpuValue = document.getElementById('cpu-value');
    const cpuBar = document.getElementById('cpu-bar');
    const heapValue = document.getElementById('heap-value');
    const heapBar = document.getElementById('heap-bar');
    const latencyValue = document.getElementById('latency-value');
    const latencyBar = document.getElementById('latency-bar');
    const qpsValue = document.getElementById('qps-value');
    const logConsole = document.getElementById('log-console');

    // Stats variables
    let currentHeap = 42; // Start percentage
    let totalRequests = 10420;

    const logsPool = [
        "JVM [INFO] Garbage Collection triggered (G1 Evacuation Pause)",
        "JVM [SUCCESS] GC completed in 8.4ms. Reclaimed 1420MB",
        "GENAI [INFO] Querying fine-tuned LLM model for inference",
        "GENAI [SUCCESS] Inference succeeded. Tokens generated: 124",
        "JVM [DEBUG] Thread pool size: 32 active, 128 total",
        "OBSERVABILITY [INFO] Metrics pushed to Prometheus gateway",
        "JVM [INFO] Heap memory footprint stable at 2.4GB / 6.0GB",
        "NETCONF [INFO] Connection established. Processing payload",
        "KAFKA [INFO] Consumed 42 events from topic 'model-telemetry'"
    ];

    function appendLog(text) {
        if (!logConsole) return;
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
        const logLine = document.createElement('div');
        logLine.className = 'log-line';
        logLine.textContent = `[${timeStr}] ${text}`;
        logConsole.appendChild(logLine);

        // Auto scroll to bottom
        logConsole.scrollTop = logConsole.scrollHeight;

        // Maintain log cap to avoid browser bloat
        if (logConsole.childElementCount > 10) {
            logConsole.removeChild(logConsole.firstChild);
        }
    }

    function updateMetrics() {
        if (!cpuValue) return;

        // 1. CPU fluctuations (12% - 78%)
        const cpu = Math.floor(Math.random() * 45) + 15;
        cpuValue.textContent = `${cpu}%`;
        cpuBar.style.width = `${cpu}%`;

        // 2. Heap memory simulator (rises slowly, triggers GC at 82%)
        currentHeap += Math.random() * 4 - 1.2;
        if (currentHeap >= 82) {
            currentHeap = 30; // GC clears memory
            appendLog("JVM [WARNING] Heap usage threshold exceeded 80%!");
            appendLog("JVM [INFO] Garbage Collection triggered (G1 Old Generation Collection)");
            setTimeout(() => {
                appendLog("JVM [SUCCESS] GC completed. Heap size reduced to 1.8GB");
            }, 300);
        }
        const heap = Math.max(25, Math.min(85, Math.floor(currentHeap)));
        heapValue.textContent = `${heap}%`;
        heapBar.style.width = `${heap}%`;

        // 3. AI Inference Latency fluctuations (8ms - 32ms)
        const latency = (Math.random() * 12 + 8).toFixed(1);
        latencyValue.textContent = `${latency}ms`;
        // Normalize 8-32ms onto 0-100% bar scale
        const latencyPct = Math.floor(((latency - 8) / 24) * 100);
        latencyBar.style.width = `${latencyPct}%`;

        // 4. Request Count increments
        const qpsIncrement = Math.floor(Math.random() * 5) + 1;
        totalRequests += qpsIncrement;
        qpsValue.textContent = totalRequests.toLocaleString();

        // 5. Randomly append telemetry logs
        if (Math.random() > 0.4) {
            const randomLog = logsPool[Math.floor(Math.random() * logsPool.length)];
            appendLog(randomLog);
        }
    }

    // Initialize Dashboard Loop
    if (cpuValue) {
        // Initial setup
        appendLog("SYSTEM [INFO] Observability dashboard initialized.");
        appendLog("JVM [INFO] Java HotSpot(TM) 64-Bit Server VM running on Linux kernel.");
        appendLog("GENAI [INFO] TensorFlow/PyTorch model loaded in memory context.");
        setInterval(updateMetrics, 2000);
    }

    // 4. Project Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const parent = card.closest('[data-category]');
                if (!parent) return;

                const cardCategory = parent.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    parent.style.display = 'block';
                    // Trigger fade-in animation
                    parent.style.animation = 'fade-in 0.4s ease forwards';
                } else {
                    parent.style.display = 'none';
                }
            });
        });
    });

    // 5. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksList = document.querySelectorAll('.nav-links a:not(.nav-resume-btn)');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Offset for navbar
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksList.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // 6. Interactive Bash Terminal Simulator
    const terminalInput = document.getElementById('terminal-input');
    const terminalHistory = document.getElementById('terminal-history');
    const terminalBody = document.getElementById('terminal-body');

    // Terminal Commands Dictionary
    const commands = {
        help: () => `
Available commands:
  <span class="highlight-ai">about</span>        - Get to know Monisha
  <span class="highlight-perf">skills</span>       - List technical skill categories
  <span class="highlight-cloud">experience</span>   - View professional experience history
  <span class="highlight-ai">projects</span>     - List featured software projects
  <span class="highlight-cloud">contact</span>      - Show email and contact info
  <span class="highlight-perf">gc</span>           - Manually trigger Garbage Collection
  <span class="highlight-ai">clear</span>        - Clear terminal history
        `,
        about: () => `
Monisha A is an M.Tech Graduate from VIT Vellore (2021-2026).
Three pillars of expertise:
  * Full-stack development: React/Angular/Vue frontends on Java Spring Boot backends.
  * JVM Internals, monitoring, & performance engineering.
  * Deep Learning models (CNNs), Generative AI automation & AWS cloud infrastructure.
Hobbies: Community outreach (Red Cross Club member).
        `,
        skills: () => `
<b>[Programming]</b>: Python, Java, C, SQL, HTML, CSS, JavaScript, Bash
<b>[Full Stack]</b> : React, Angular, Vue.js, Node.js, Spring Boot, Django, Flask, REST APIs
<b>[Performance]</b>: JVM performance tuning, JStat, JFR, Observability, Grafana, Prometheus
<b>[ML / GenAI]</b> : TensorFlow, PyTorch, LLMs, NLP, Prompt Engineering, Vertex AI
<b>[Cloud/DevOps]</b>: AWS (EC2, S3, IAM, VPC, Lambda), Docker, Kubernetes, Helm, Kafka, Linux, Jenkins, NETCONF
        `,
        experience: () => `
<b>1. Performance Development Intern @ NOKIA (Aug 2025 - May 2026)</b>
   - JVM tuning, thread analysis, heap dumps, Prometheus monitoring.
<b>2. GenAI Intern @ Smart Bridge (May 2024 - Jul 2024)</b>
   - Fine-tuned GenAI LLMs, prompt engineering, AI pipeline automation.
<b>3. AWS Cloud Intern @ BrightGeeks (Jan 2024 - Mar 2024)</b>
   - AWS Cloud Practitioner training: EC2, S3, RDS, IAM, VPC, Lambda.
        `,
        projects: () => `
* <b>Autonomous Car Driving (CNN)</b> - Python, Deep Learning, Object Detection
* <b>AI Pest Control Sprayer</b>       - ML system reducing chemical waste by 30%
* <b>Spring Boot Real-Time Chat</b>   - WebSockets, REST APIs instant message server
        `,
        contact: () => `
Email   : <a href="mailto:monishaanand553@gmail.com" class="highlight-cloud">monishaanand553@gmail.com</a>
Phone   : +91 9344515479
LinkedIn: <a href="https://linkedin.com/in/monishaanand175" target="_blank" class="highlight-ai">linkedin.com/in/monishaanand175</a>
GitHub  : <a href="https://github.com/Monisha175/" target="_blank" class="highlight-perf">github.com/Monisha175/</a>
        `,
        gc: () => {
            currentHeap = 30; // Clear memory in widget
            appendLog("JVM [INFO] Manual GC trigger from user terminal context");
            return `<span class="highlight-perf">System: Manual Garbage Collection triggered. G1 reclaimed 2450MB Heap space. Memory reduced.</span>`;
        },
        clear: () => {
            if (terminalHistory) terminalHistory.innerHTML = '';
            return '';
        }
    };

    function executeCommand(cmdText) {
        const cmdClean = cmdText.trim().toLowerCase();

        // Create user input command echo line
        const echoLine = document.createElement('div');
        echoLine.innerHTML = `<span style="color: #A78BFA">visitor@monisha-dev:~$</span> ${cmdText}`;
        terminalHistory.appendChild(echoLine);

        if (cmdClean === '') {
            // empty command, do nothing
        } else if (commands[cmdClean]) {
            const output = commands[cmdClean]();
            if (output !== '') {
                const outputLine = document.createElement('div');
                outputLine.style.marginTop = '6px';
                outputLine.style.marginBottom = '12px';
                outputLine.innerHTML = output;
                terminalHistory.appendChild(outputLine);
            }
        } else {
            const errorLine = document.createElement('div');
            errorLine.style.color = '#F87171';
            errorLine.style.margin = '4px 0 10px 0';
            errorLine.innerHTML = `bash: command not found: ${cmdText}. Type <span class="highlight-perf">help</span> to view available commands.`;
            terminalHistory.appendChild(errorLine);
        }

        // Scroll terminal to input
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value;
                executeCommand(command);
                terminalInput.value = ''; // clear input
            }
        });

        // Set click handlers for terminal shortcut tags
        document.querySelectorAll('.term-shortcut').forEach(btn => {
            btn.addEventListener('click', () => {
                const cmd = btn.getAttribute('data-cmd');
                executeCommand(cmd);
            });
        });
    }

    // 7. Contact Form Handler (Web3Forms API with Gmail fallback)
    const contactForm = document.getElementById('portfolio-contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const message = document.getElementById('form-message').value.trim();

            if (!name || !email || !message) {
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
                formStatus.textContent = 'Please fill out all required fields.';
                return;
            }

            formStatus.className = 'form-status info';
            formStatus.style.display = 'block';
            formStatus.textContent = 'Sending message payload...';

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                // Attempt dispatch via Web3Forms API
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();

                if (data.success) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = 'Message sent successfully! Monisha will get back to you shortly.';
                    appendLog(`OBSERVABILITY [SUCCESS] Message sent by ${name} (${email})`);
                    contactForm.reset();
                } else {
                    // Fallback to opening web Gmail directly with prefilled details
                    const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=monishaanand553@gmail.com&su=${mailSubject}&body=${mailBody}`;

                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = `Opening Gmail composer... If browser blocked popup, <a href="${gmailUrl}" target="_blank" style="color: var(--accent-ai); underline: true;">click here to send via Gmail</a>.`;
                    appendLog(`OBSERVABILITY [INFO] Web3Forms response processed, forwarding to Gmail dispatch.`);
                    window.open(gmailUrl, '_blank');
                    contactForm.reset();
                }
            } catch (err) {
                const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=monishaanand553@gmail.com&su=${mailSubject}&body=${mailBody}`;

                formStatus.className = 'form-status success';
                formStatus.innerHTML = `Message prepared! <a href="${gmailUrl}" target="_blank" style="color: var(--accent-ai); text-decoration: underline;">Click here to send directly via Gmail</a>.`;
                appendLog(`OBSERVABILITY [INFO] Direct Web Gmail dispatch triggered for ${name}`);
                window.open(gmailUrl, '_blank');
                contactForm.reset();
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }
});