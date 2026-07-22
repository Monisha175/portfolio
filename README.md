# Monisha's Software & Performance Engineering Portfolio

🚀 **Live Portfolio Website:** [https://monishaanand-portfolio.netlify.app/](https://monishaanand-portfolio.netlify.app/)

Welcome to the source code repository for my interactive portfolio. Designed with a sleek, dark-themed command-center aesthetic, this portfolio highlights my academic achievements, technical capabilities, professional experience, and featured projects.

---

## 💡 About Me
I am an **Integrated M.Tech in Computer Science and Engineering** graduate from **Vellore Institute of Technology (VIT), Vellore** (run in collaboration with **Virtusa**). My expertise is built around three core pillars:
1. **Performance Engineering & Observability:** JVM tuning, heap-dump analysis, garbage collection diagnostics, and real-time telemetry tracing.
2. **Applied Artificial Intelligence:** Generative AI workflows, LLM fine-tuning, natural language processing, and deep learning architectures (CNNs).
3. **Full-Stack & Cloud Systems:** Building high-throughput Java Spring Boot backends, scalable REST APIs, and microservices integrated with AWS cloud infrastructure.

---

## 🛠️ Technical Stack & Expertise

*   **Programming Languages:** Java, Python, C, SQL, JavaScript, HTML5, CSS3, Bash scripting
*   **Backend & Web Development:** Spring Boot, React, Angular, Vue.js, Node.js, WebSockets, RESTful APIs, Django, Flask
*   **Systems Observability & Performance:** JVM Tuning, Garbage Collection (G1, ZGC), Java Flight Recorder (JFR), JStat, Prometheus, Grafana, OpenTSDB
*   **Machine Learning & Generative AI:** TensorFlow, PyTorch, CNNs, Deep Learning, NLP, Prompt Engineering, Vertex AI, Streamlit
*   **Cloud, DevOps & Middleware:** AWS (EC2, S3, RDS, IAM, VPC, Lambda), Docker, Kubernetes, Helm, Apache Kafka, Git, Jenkins, NETCONF

---

## 📁 Highlighted Projects

### 🚗 Autonomous Car Driving (CNN)
*   **Stack:** Python, TensorFlow, Keras, Deep Learning, CNN, Computer Vision
*   **Description:** Designed and trained Convolutional Neural Network (CNN) architectures for real-time image classification and object detection in autonomous vehicles.
*   **Impact:** Enhanced object detection accuracy to support faster, safer, and more reliable autonomous driving decisions.

### 🍃 AI-Powered Optimized Spraying for Pest Control
*   **Stack:** Machine Learning, Computer Vision, Data Analysis, Python
*   **Description:** Developed an intelligent agricultural crop disease detection and smart spraying recommendation system applying feature engineering and data preprocessing.
*   **Impact:** Reduced pesticide consumption by **30%** while preserving crop health and minimizing chemical run-off.

### 💬 Real-Time Chat Application
*   **Stack:** Java, Spring Boot, WebSockets, REST APIs, Maven
*   **Description:** Built an event-driven full-stack instant messaging application utilizing a Spring Boot backend and bidirectional WebSocket channels for instantaneous delivery.
*   **Impact:** Maintained low-latency concurrent user connections with message delivery guarantees.

---

## 💼 Internship Experience

1.  **Performance Development Intern @ NOKIA** *(Aug 2025 - May 2026)*
    *   Conducted JVM performance engineering, heap dump analysis, and thread diagnostics.
    *   Configured performance monitoring pipelines using Prometheus and Grafana.
2.  **GenAI Intern @ Smart Bridge** *(May 2024 - Jul 2024)*
    *   Built GenAI applications using Google Vertex AI and fine-tuned LLM parameters.
3.  **AWS Cloud Intern @ BrightGeeks** *(Jan 2024 - Mar 2024)*
    *   Designed scalable, fault-tolerant infrastructure utilizing core AWS cloud services.

---

## 🎮 Interactive Features of the Website

This portfolio is not just static HTML; it features interactive widgets designed to demonstrate engineering concepts in real time:

*   **Live Telemetry Simulator:** Shows a mock dashboard tracking CPU load, JVM heap memory, Generative AI inference latency, and telemetry QPS. It updates dynamically and features an active console logging mock Kafka, JVM, and LLM events.
*   **Interactive Bash Terminal:** A custom-built terminal console that allows visitors to query the portfolio using text-based commands.
    *   *Try typing:* `help`, `about`, `skills`, `experience`, `projects`, or `contact`.
    *   *Special Interactive command:* Type `gc` to trigger a simulated garbage collection, which instantly resets the Heap Memory usage in the Telemetry Simulator!

---

## 🛠️ Local Development & Setup

Since this is a lightweight, high-performance static website, you do not need heavy node build chains or runtime compilers to run it locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Monisha175/portfolio.git
    cd portfolio
    ```
2.  **Run a local server:**
    *   Using Python:
        ```bash
        python -m http.server 8000
        ```
    *   Using Node (`http-server`):
        ```bash
        npx http-server -p 8000
        ```
3.  **View the page:** Open your web browser and navigate to `http://localhost:8000`.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details. Designed & Built with 💜 by Monisha A.
