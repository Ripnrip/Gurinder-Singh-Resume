"use client"

import Image from "next/image"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page 1 - Main Resume */}
      <div className="page">
        {/* Header with Profile Image and QR Code */}
        <div className="header">
          <div className="profile-section">
            <div className="profile-image">
              <Image
                src="/profile-gurinder.jpg"
                alt="Gurinder Singh"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <div className="header-content">
              <h1>Gurinder Singh</h1>
              <div className="title">Staff Software iOS & AI/ML Engineer</div>
              <div className="tagline">Building legendary apps at the edge of iOS & AI</div>
              <div className="contact-bar">
                <a href="https://guriboy-6fupko.manus.space">🌐 Portfolio</a>
                <a href="https://www.linkedin.com/in/gurinder-singh-gs/">💼 LinkedIn</a>
                <a href="mailto:gsingh622@yahoo.com">📧 gsingh622@yahoo.com</a>
              </div>
            </div>
          </div>
          <div className="qr-section">
            <div className="qr-code">
              <Image src="/qr-code.png" alt="Scan for Portfolio" width={100} height={100} />
            </div>
            <div className="qr-label">SCAN FOR PORTFOLIO</div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">90M+</div>
            <div className="stat-label">Users Impacted</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">28+</div>
            <div className="stat-label">Hackathons</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2x</div>
            <div className="stat-label">1st Place Wins</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">🏆</div>
            <div className="stat-label">Patent Holder</div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          {/* Career Summary */}
          <div className="section">
            <h2 className="section-title">Career Summary</h2>
            <div className="summary">
              Staff iOS & AI/ML Engineer with over a decade of experience scaling applications for millions of users.
              Patent-holder and technical leader specializing in bridging cutting-edge AI/ML with practical mobile
              solutions. Proven track record of building legendary apps at global scale, from startup innovation to
              enterprise solutions serving 90M+ users worldwide. Passionate about mentoring engineers, conducting
              technical interviews, and fostering inclusive tech communities while driving innovation at the
              intersection of iOS and artificial intelligence.
            </div>
          </div>

          {/* Core Skills - Focused and Clean */}
          <div className="section">
            <h2 className="section-title">Core Skills</h2>
            <div className="core-skills-grid">
              <div className="core-skill-card">
                <div className="skill-icon">💻</div>
                <div className="skill-name">Languages & Frameworks</div>
                <div className="skill-list">
                  Swift • SwiftUI • Python • TypeScript • Next.js • FastAPI • Vapor • Objective-C • Flutter/Dart
                </div>
              </div>
              <div className="core-skill-card">
                <div className="skill-icon">🤖</div>
                <div className="skill-name">AI/ML Stack</div>
                <div className="skill-list">
                  LLM Agents • RAG Pipelines • LlamaIndex • Supabase • ChromaDB • Pinecone • Core ML • MLX • LoRA •
                  Stable Diffusion
                </div>
              </div>
              <div className="core-skill-card">
                <div className="skill-icon">📱</div>
                <div className="skill-name">Mobile Systems</div>
                <div className="skill-list">
                  ActivityKit • WidgetKit • Dynamic Island • SwiftData • Realm • Combine • UIKit • Async/Await
                </div>
              </div>
              <div className="core-skill-card">
                <div className="skill-icon">☁️</div>
                <div className="skill-name">Cloud & Infrastructure</div>
                <div className="skill-list">
                  Supabase Edge Functions • Docker • RunPod • DataDog • AWS Serverless • Lambda • DynamoDB
                </div>
              </div>
              <div className="core-skill-card">
                <div className="skill-icon">⚙️</div>
                <div className="skill-name">Dev Practices</div>
                <div className="skill-list">
                  CI/CD Automation • Observability • Snapshot Testing • State Machines • Accessibility
                </div>
              </div>
              <div className="core-skill-card">
                <div className="skill-icon">🎨</div>
                <div className="skill-name">Creative Tooling</div>
                <div className="skill-list">
                  FFmpeg • ComfyUI • ElevenLabs • Whisper-MLX • MCP • Bluetooth Low Energy (BLE)
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="section">
            <h2 className="section-title">Experience</h2>

            {/* PayPal/Venmo */}
            <div className="experience-item">
              <div className="experience-header">
                <div className="company-info">
                  <div className="company-logo">
                    <Image src="/paypal-logo.png" alt="PayPal" width={40} height={40} />
                  </div>
                  <div>
                    <div className="experience-title">Staff iOS Engineer → Applied AI/ML Engineer</div>
                    <div className="experience-company">PayPal / Venmo</div>
                  </div>
                </div>
                <div className="experience-period">2020 – Present</div>
              </div>

              <div className="experience-subsection">
                <div className="subsection-title">🤖 AI/ML Evolution & Technical Innovation (2023–Present)</div>
                <div className="subsection-highlight">Team Mercury – AI-Powered Agentic E-Commerce Platform</div>
                <ul>
                  <li>
                    Built PayPal/Venmo&apos;s first applied agentic AI platform for autonomous merchant onboarding
                  </li>
                  <li>
                    Pioneered AI image generation with custom SDXL LoRA models producing professional imagery in ~30
                    seconds, saving merchants $100–$500 per product
                  </li>
                  <li>Delivered first org-wide MCP integration for seamless AI agent orchestration</li>
                  <li>Achieved 58.5 GPU hours training, 23% loss reduction, 109MB production-ready model</li>
                  <li>
                    Implemented multi-platform automation managing Venmo, Honey, Facebook/Meta, Google Ads, and TikTok
                  </li>
                </ul>
              </div>

              <div className="experience-subsection">
                <div className="subsection-title">📱 iOS Engineering Excellence & Business Impact</div>
                <ul>
                  <li>Amex Partnership (2020): Built payment-splitting for $400M partnership deal</li>
                  <li>Pay With Venmo Checkout (2024–Present): Key stakeholder with server-side Swift implementation</li>
                  <li>QRC Touch-Free Payments: Led initiative winning $60M CVS contract</li>
                  <li>
                    QRC Widget Patent (2022): Filed &quot;Interface Widget Tool for Automatic QR Code Generation&quot; –
                    Reduced user friction by 66%
                  </li>
                  <li>Dynamic Island / Live Activities: Built end-to-end infrastructure with server-side Swift</li>
                </ul>
              </div>

              <div className="experience-subsection">
                <div className="subsection-title">👥 Technical Leadership</div>
                <ul>
                  <li>
                    Mentored cross-functional engineers on concurrency, accessibility, and feature-flag development
                  </li>
                  <li>
                    Partnered with Design Systems to create SwiftUI component library that cut development time by 30%
                  </li>
                  <li>Built internal AI observability tooling using DataDog</li>
                </ul>
              </div>
            </div>

            {/* Google Stadia */}
            <div className="experience-item">
              <div className="experience-header">
                <div className="company-info">
                  <div className="company-logo">
                    <Image src="/google-logo.png" alt="Google" width={40} height={40} />
                  </div>
                  <div>
                    <div className="experience-title">iOS Developer/Consultant</div>
                    <div className="experience-company">Google Stadia</div>
                  </div>
                </div>
                <div className="experience-period">July 2019 – 2020</div>
              </div>
              <ul>
                <li>Worked on Google Stadia for mobile platforms in Flutter/Dart</li>
                <li>Leveraged iOS expertise for native plugins and crash debugging</li>
              </ul>
            </div>

            {/* Morgan Stanley */}
            <div className="experience-item">
              <div className="experience-header">
                <div className="company-info">
                  <div className="company-logo">
                    <Image src="/morgan-stanley-logo.png" alt="Morgan Stanley" width={40} height={40} />
                  </div>
                  <div>
                    <div className="experience-title">iOS Developer/Consultant</div>
                    <div className="experience-company">Morgan Stanley</div>
                  </div>
                </div>
                <div className="experience-period">April 2018 – July 2019</div>
              </div>
              <ul>
                <li>Hybrid Banking and Wealth Management apps for iOS</li>
                <li>Key features: check-deposit, biometric authentication, certificate-pinning, jailbreak detection</li>
                <li>Migrated codebase from 98% Objective-C to 80% Objective-C / 20% Swift</li>
              </ul>
            </div>
          </div>

          {/* Technical Leadership */}
          <div className="section">
            <h2 className="section-title">Technical Leadership & Team Building</h2>
            <div className="leadership-grid">
              <div className="leadership-item">
                <div className="leadership-title">Advisory Board & Strategic Leadership</div>
                <ul>
                  <li>Advisory Board Member for multiple tech startups on iOS architecture and AI/ML implementation</li>
                  <li>Conducted technical interviews for senior iOS and AI/ML positions</li>
                  <li>Strategic advisor on product roadmap decisions and technology stack selections</li>
                </ul>
              </div>
              <div className="leadership-item">
                <div className="leadership-title">Mentorship & Knowledge Sharing</div>
                <ul>
                  <li>
                    Hosted technical workshops: SwiftUI, State Machines, AI/ML image generation, DataDog automation
                  </li>
                  <li>Created comprehensive documentation for ML architects and non-technical stakeholders</li>
                  <li>Onboarded and mentored multiple senior engineers with growth plans and advancement advocacy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hackathons */}
          <div className="section">
            <h2 className="section-title">Hackathon Achievements & Innovation</h2>
            <p className="hackathon-intro">
              28+ hackathons attended across 6+ countries as participant, mentor, and judge. Earned 2 first-place wins
              and served as judge at Yale (2x).
            </p>
            <div className="hackathon-grid">
              <div className="hackathon-card">
                <div className="hackathon-badge">🏆 1st Place</div>
                <div className="hackathon-title">MLH @ Bloomberg London (2017)</div>
                <div className="hackathon-desc">
                  Automated Search & Rescue System – Won among 500+ participants. Featured in BBC documentary.
                </div>
              </div>
              <div className="hackathon-card">
                <div className="hackathon-badge">🏆 1st Place</div>
                <div className="hackathon-title">Devcamp NYC (2016)</div>
                <div className="hackathon-desc">Talent Management App – Won among 300+ participants at Google NYC.</div>
              </div>
              <div className="hackathon-card">
                <div className="hackathon-badge">🎯 Finalist</div>
                <div className="hackathon-title">HackZurich (2018)</div>
                <div className="hackathon-desc">AR Car Buying Tool – Finalist among 400+. Attended HackZurich 4x</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <div className="education-school">New York City College of Technology, Brooklyn</div>
              <div className="education-degree">BS in Computer Systems (Deferred)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 2 - Comprehensive Technical Skills for ATS */}
      <div className="page page-break">
        <div className="content">
          <div className="section">
            <h2 className="section-title">Comprehensive Technical Skills (ATS / Recruiter Reference)</h2>
            <p className="ats-intro">
              This page provides an exhaustive list of technologies and tools for ATS optimization and detailed
              recruiter reference. For high-level overview, please refer to Core Skills on page 1.
            </p>

            <div className="tech-categories">
              {/* Languages & Frameworks */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">💻</div>
                  <h3>Languages & Frameworks</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Swift</span>
                  <span className="tech-tag">SwiftUI</span>
                  <span className="tech-tag">Objective-C</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Flutter/Dart</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Vapor</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">GraphQL</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                </div>
              </div>

              {/* AI/ML & Intelligent Systems */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">🤖</div>
                  <h3>AI/ML & Intelligent Systems</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">LlamaIndex</span>
                  <span className="tech-tag">RAG Pipelines</span>
                  <span className="tech-tag">MCP Servers</span>
                  <span className="tech-tag">Manus Platform</span>
                  <span className="tech-tag">CrewAI</span>
                  <span className="tech-tag">LangFlow</span>
                  <span className="tech-tag">Prompt Engineering</span>
                  <span className="tech-tag">Function/Tool Calling</span>
                  <span className="tech-tag">Custom GPT Actions</span>
                  <span className="tech-tag">Multi-Agent Orchestration</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">Core ML</span>
                  <span className="tech-tag">MLX</span>
                  <span className="tech-tag">scikit-learn</span>
                  <span className="tech-tag">Stable Diffusion</span>
                  <span className="tech-tag">LoRA Fine-Tuning</span>
                  <span className="tech-tag">Whisper-MLX</span>
                  <span className="tech-tag">Hugging Face</span>
                  <span className="tech-tag">Cohere</span>
                  <span className="tech-tag">OpenAI APIs</span>
                  <span className="tech-tag">Claude API</span>
                  <span className="tech-tag">OpenRouter</span>
                  <span className="tech-tag">Ollama</span>
                  <span className="tech-tag">LM Studio</span>
                  <span className="tech-tag">ChromaDB</span>
                  <span className="tech-tag">Pinecone</span>
                  <span className="tech-tag">Qdrant</span>
                  <span className="tech-tag">DeepLake</span>
                  <span className="tech-tag">Dense + Sparse Retrieval</span>
                  <span className="tech-tag">Semantic Search</span>
                  <span className="tech-tag">Hybrid Indexing</span>
                  <span className="tech-tag">Reranking</span>
                  <span className="tech-tag">Computer Vision</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Speech Processing</span>
                  <span className="tech-tag">ComfyUI</span>
                  <span className="tech-tag">ElevenLabs</span>
                </div>
              </div>

              {/* Mobile Development */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">📱</div>
                  <h3>Mobile Development (iOS + Cross-Platform)</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">iOS SDK</span>
                  <span className="tech-tag">UIKit</span>
                  <span className="tech-tag">ActivityKit</span>
                  <span className="tech-tag">WidgetKit</span>
                  <span className="tech-tag">Dynamic Island</span>
                  <span className="tech-tag">ARKit</span>
                  <span className="tech-tag">Core Data</span>
                  <span className="tech-tag">Core Location</span>
                  <span className="tech-tag">Core ML Integration</span>
                  <span className="tech-tag">On-Device Inference</span>
                  <span className="tech-tag">SwiftData</span>
                  <span className="tech-tag">Realm</span>
                  <span className="tech-tag">Combine</span>
                  <span className="tech-tag">RxSwift</span>
                  <span className="tech-tag">Async/Await</span>
                  <span className="tech-tag">BLE</span>
                  <span className="tech-tag">XCTest</span>
                  <span className="tech-tag">Snapshot Testing</span>
                  <span className="tech-tag">Swift Package Manager</span>
                  <span className="tech-tag">Cordova</span>
                  <span className="tech-tag">Accessibility (A11Y)</span>
                </div>
              </div>

              {/* Web & Application Development */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">🌐</div>
                  <h3>Web & Application Development</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Serverless APIs</span>
                  <span className="tech-tag">Edge Functions</span>
                  <span className="tech-tag">PWAs</span>
                  <span className="tech-tag">SSR / SSG / ISR</span>
                  <span className="tech-tag">Authentication (OAuth, JWT)</span>
                  <span className="tech-tag">RLS (Row Level Security)</span>
                  <span className="tech-tag">WebSockets</span>
                  <span className="tech-tag">Realtime Communication</span>
                  <span className="tech-tag">SEO Optimization</span>
                  <span className="tech-tag">Performance Profiling</span>
                </div>
              </div>

              {/* Cloud Platforms & Infrastructure */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">☁️</div>
                  <h3>Cloud Platforms & Infrastructure</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">AWS Lambda</span>
                  <span className="tech-tag">DynamoDB</span>
                  <span className="tech-tag">EC2</span>
                  <span className="tech-tag">S3</span>
                  <span className="tech-tag">CloudFront</span>
                  <span className="tech-tag">API Gateway</span>
                  <span className="tech-tag">SageMaker</span>
                  <span className="tech-tag">Amplify</span>
                  <span className="tech-tag">CloudWatch</span>
                  <span className="tech-tag">IAM</span>
                  <span className="tech-tag">Cognito</span>
                  <span className="tech-tag">GCP Vertex AI</span>
                  <span className="tech-tag">Cloud Functions</span>
                  <span className="tech-tag">Cloud Run</span>
                  <span className="tech-tag">BigQuery</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Firestore</span>
                  <span className="tech-tag">Cloud Storage</span>
                  <span className="tech-tag">Vision AI</span>
                  <span className="tech-tag">Speech-to-Text</span>
                  <span className="tech-tag">Cloud SQL</span>
                  <span className="tech-tag">Azure AI Services</span>
                  <span className="tech-tag">Cognitive Search</span>
                  <span className="tech-tag">Azure Functions</span>
                  <span className="tech-tag">Azure OpenAI</span>
                  <span className="tech-tag">Cosmos DB</span>
                  <span className="tech-tag">Azure DevOps</span>
                  <span className="tech-tag">DigitalOcean</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">Vercel</span>
                  <span className="tech-tag">Netlify</span>
                  <span className="tech-tag">RunPod</span>
                  <span className="tech-tag">Replicate</span>
                  <span className="tech-tag">Multi-Cloud Architecture</span>
                  <span className="tech-tag">Microservices</span>
                  <span className="tech-tag">NGINX</span>
                </div>
              </div>

              {/* Data Science & Analytics */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">📊</div>
                  <h3>Data Science & Analytics</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NumPy</span>
                  <span className="tech-tag">Feature Engineering</span>
                  <span className="tech-tag">Data Architecture</span>
                  <span className="tech-tag">Model Evaluation</span>
                  <span className="tech-tag">A/B Testing</span>
                  <span className="tech-tag">Experimentation</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">SQLite</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">Vector Databases</span>
                </div>
              </div>

              {/* DevOps & Observability */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">⚙️</div>
                  <h3>DevOps & Observability</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Docker Compose</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">GitHub Actions</span>
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">Fastlane</span>
                  <span className="tech-tag">CI/CD Pipelines</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Pulumi</span>
                  <span className="tech-tag">CloudFormation</span>
                  <span className="tech-tag">DataDog RUM</span>
                  <span className="tech-tag">DataDog APM</span>
                  <span className="tech-tag">DataDog Logs</span>
                  <span className="tech-tag">Amplitude</span>
                  <span className="tech-tag">Sentry</span>
                  <span className="tech-tag">New Relic</span>
                  <span className="tech-tag">Grafana</span>
                  <span className="tech-tag">Prometheus</span>
                  <span className="tech-tag">Optimizely</span>
                  <span className="tech-tag">Crashlytics</span>
                  <span className="tech-tag">SonarQube</span>
                  <span className="tech-tag">BrowserStack</span>
                  <span className="tech-tag">ESLint</span>
                  <span className="tech-tag">SwiftLint</span>
                  <span className="tech-tag">Prettier</span>
                  <span className="tech-tag">TDD</span>
                  <span className="tech-tag">UI Testing</span>
                  <span className="tech-tag">Metrics Instrumentation</span>
                  <span className="tech-tag">Event Tracking</span>
                  <span className="tech-tag">Feature Flagging</span>
                </div>
              </div>

              {/* Automation & Integration */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">🔄</div>
                  <h3>Automation & Integration</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">MCP Server Development</span>
                  <span className="tech-tag">AI Workflow Automation</span>
                  <span className="tech-tag">n8n</span>
                  <span className="tech-tag">Playwright</span>
                  <span className="tech-tag">Puppeteer</span>
                  <span className="tech-tag">Selenium</span>
                  <span className="tech-tag">BeautifulSoup</span>
                  <span className="tech-tag">FireCrawl</span>
                  <span className="tech-tag">Webhooks</span>
                  <span className="tech-tag">API Integration</span>
                  <span className="tech-tag">Business Process Automation</span>
                </div>
              </div>

              {/* Design & Generative Tools */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">🎨</div>
                  <h3>Design & Generative Tools</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Figma</span>
                  <span className="tech-tag">Sketch</span>
                  <span className="tech-tag">Adobe XD</span>
                  <span className="tech-tag">Photoshop</span>
                  <span className="tech-tag">Automatic1111</span>
                  <span className="tech-tag">OpenWebUI</span>
                  <span className="tech-tag">FFmpeg</span>
                  <span className="tech-tag">Lottie</span>
                  <span className="tech-tag">Audio/Visual Generation</span>
                </div>
              </div>

              {/* Collaboration & Project Management */}
              <div className="tech-category">
                <div className="tech-category-header">
                  <div className="tech-icon">👥</div>
                  <h3>Collaboration & Project Management</h3>
                </div>
                <div className="tech-tags">
                  <span className="tech-tag">Agile</span>
                  <span className="tech-tag">Scrum</span>
                  <span className="tech-tag">Kanban</span>
                  <span className="tech-tag">Jira</span>
                  <span className="tech-tag">Linear</span>
                  <span className="tech-tag">Confluence</span>
                  <span className="tech-tag">Notion</span>
                  <span className="tech-tag">Slack</span>
                  <span className="tech-tag">Microsoft Teams</span>
                  <span className="tech-tag">Technical Documentation</span>
                  <span className="tech-tag">Architecture Decision Records</span>
                  <span className="tech-tag">Runbooks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recognition & Awards */}
          <div className="section">
            <h2 className="section-title">Recognition & Awards</h2>
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-icon">🏅</div>
                <div className="award-content">
                  <div className="award-title">PayPal Props Awards</div>
                  <div className="award-desc">Paragon (5000 pts), Phenom (1500 pts), Powerhouse (750 pts)</div>
                </div>
              </div>
              <div className="award-item">
                <div className="award-icon">⭐</div>
                <div className="award-content">
                  <div className="award-title">Performance Excellence</div>
                  <div className="award-desc">
                    Consistent &quot;Successful&quot; ratings with leadership principle exemplification
                  </div>
                </div>
              </div>
              <div className="award-item">
                <div className="award-icon">🌟</div>
                <div className="award-content">
                  <div className="award-title">Cultural Leadership</div>
                  <div className="award-desc">
                    Interfaith ERG Chapter Lead (Sikh community), Yale hackathon judge, tech education advocate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          max-width: 8.5in;
          margin: 0 auto;
          background-color: #ffffff;
          min-height: 11in;
        }

        .page-break {
          page-break-before: always;
        }

        .header {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 3px solid #0d9488;
        }

        .profile-section {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex: 1;
        }

        .profile-image {
          flex-shrink: 0;
        }

        .profile-image img {
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          flex: 1;
        }

        .header h1 {
          font-size: 28pt;
          font-weight: 800;
          color: white;
          margin-bottom: 0.25rem;
          letter-spacing: -0.5px;
        }

        .title {
          font-size: 12pt;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 0.25rem;
        }

        .tagline {
          font-size: 9pt;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          font-style: italic;
          margin-bottom: 1rem;
        }

        .contact-bar {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .contact-bar a {
          color: white;
          text-decoration: none;
          font-size: 8.5pt;
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .contact-bar a:hover {
          opacity: 0.8;
        }

        .qr-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .qr-code {
          background: white;
          padding: 0.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .qr-label {
          font-size: 7pt;
          font-weight: 700;
          color: white;
          text-align: center;
          letter-spacing: 0.5px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
          border-bottom: 2px solid #99f6e4;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 20pt;
          font-weight: 800;
          color: #0d9488;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 8pt;
          color: #0f766e;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .content {
          padding: 1.5rem 2rem;
        }

        .section {
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 13pt;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #14b8a6;
        }

        .summary {
          background-color: #f0fdfa;
          padding: 1.25rem;
          border-radius: 8px;
          border-left: 4px solid #14b8a6;
          font-size: 10pt;
          line-height: 1.7;
          color: #1f2937;
        }

        .core-skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .core-skill-card {
          background: white;
          border: 2px solid #ccfbf1;
          border-radius: 8px;
          padding: 1rem;
          transition: all 0.2s ease;
        }

        .core-skill-card:hover {
          border-color: #14b8a6;
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.15);
        }

        .skill-icon {
          font-size: 20pt;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-size: 10pt;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 0.5rem;
        }

        .skill-list {
          font-size: 8.5pt;
          color: #374151;
          line-height: 1.6;
        }

        .experience-item {
          margin-bottom: 1.5rem;
          padding: 1.25rem;
          background-color: #f9fafb;
          border-radius: 8px;
          border-left: 4px solid #14b8a6;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .company-logo {
          flex-shrink: 0;
        }

        .experience-title {
          font-size: 10.5pt;
          font-weight: 700;
          color: #111827;
        }

        .experience-company {
          font-size: 9.5pt;
          font-weight: 600;
          color: #0d9488;
        }

        .experience-period {
          font-size: 9pt;
          font-weight: 600;
          color: #6b7280;
        }

        .experience-subsection {
          margin-bottom: 1rem;
        }

        .subsection-title {
          font-size: 9.5pt;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 0.5rem;
        }

        .subsection-highlight {
          font-size: 9pt;
          font-weight: 600;
          color: #14b8a6;
          margin-bottom: 0.5rem;
        }

        .experience-item ul {
          list-style-type: none;
          padding-left: 0;
        }

        .experience-item li {
          margin-bottom: 0.4rem;
          position: relative;
          padding-left: 1.2rem;
          font-size: 9pt;
          line-height: 1.6;
          color: #374151;
        }

        .experience-item li::before {
          content: "▸";
          position: absolute;
          left: 0;
          top: 0;
          color: #14b8a6;
          font-size: 10pt;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .leadership-item {
          background: white;
          border: 2px solid #ccfbf1;
          border-radius: 8px;
          padding: 1rem;
        }

        .leadership-title {
          font-size: 10pt;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 0.5rem;
        }

        .leadership-item ul {
          list-style-type: none;
          padding-left: 0;
        }

        .leadership-item li {
          margin-bottom: 0.4rem;
          position: relative;
          padding-left: 1.2rem;
          font-size: 9pt;
          color: #374151;
        }

        .leadership-item li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #14b8a6;
        }

        .hackathon-intro {
          margin-bottom: 1rem;
          color: #6b7280;
          font-size: 9pt;
          line-height: 1.6;
        }

        .hackathon-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .hackathon-card {
          background: white;
          border: 2px solid #ccfbf1;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }

        .hackathon-badge {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 8pt;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .hackathon-title {
          font-size: 9.5pt;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .hackathon-desc {
          font-size: 8.5pt;
          color: #6b7280;
          line-height: 1.5;
        }

        .education-item {
          background: white;
          border: 2px solid #ccfbf1;
          border-radius: 8px;
          padding: 1rem;
        }

        .education-school {
          font-size: 10.5pt;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .education-degree {
          font-size: 9pt;
          color: #6b7280;
        }

        .ats-intro {
          background-color: #fff7ed;
          border-left: 4px solid #f59e0b;
          padding: 1rem;
          border-radius: 8px;
          font-size: 9pt;
          color: #78350f;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tech-categories {
          display: grid;
          gap: 1.5rem;
        }

        .tech-category {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.25rem;
        }

        .tech-category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .tech-icon {
          font-size: 18pt;
        }

        .tech-category-header h3 {
          font-size: 11pt;
          font-weight: 700;
          color: #0d9488;
          margin: 0;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background-color: #f0fdfa;
          color: #0f766e;
          border: 1px solid #99f6e4;
          padding: 0.4rem 0.8rem;
          border-radius: 16px;
          font-size: 8pt;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background-color: #ccfbf1;
          border-color: #5eead4;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .award-item {
          background: white;
          border: 2px solid #ccfbf1;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .award-icon {
          font-size: 24pt;
          flex-shrink: 0;
        }

        .award-content {
          flex: 1;
        }

        .award-title {
          font-size: 10pt;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 0.25rem;
        }

        .award-desc {
          font-size: 8.5pt;
          color: #6b7280;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .core-skills-grid {
            grid-template-columns: 1fr;
          }

          .hackathon-grid,
          .leadership-grid,
          .awards-grid {
            grid-template-columns: 1fr;
          }

          .header {
            flex-direction: column;
            gap: 1rem;
          }

          .profile-section {
            flex-direction: column;
            text-align: center;
          }
        }

        @media print {
          body {
            background: white;
          }

          .page-break {
            page-break-before: always;
          }

          .section {
            page-break-inside: avoid;
          }

          .experience-item,
          .hackathon-card,
          .leadership-item {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  )
}
