"use client"

export default function ResumePage() {
  return (
    <>
      <style jsx>{`
        :root {
          --primary-color: #14b8a6;
          --primary-dark: #0d9488;
          --primary-light: #5eead4;
          --secondary-color: #f0fdfa;
          --text-color: #334155;
          --text-light: #64748b;
          --white: #ffffff;
          --border-color: #e2e8f0;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--text-color);
          line-height: 1.6;
          background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
          min-height: 100vh;
          padding: 20px;
        }
        
        .resume {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          color: white;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .header-content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 30px;
          flex: 1;
        }
        
        .profile-photo {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }
        
        .header-info h1 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .header-info .title {
          font-size: 1.4rem;
          opacity: 0.95;
          margin-bottom: 20px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          font-size: 0.95rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.9;
        }
        
        .contact-item i {
          width: 18px;
          text-align: center;
        }
        
        .header-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        
        .qr-code {
          width: 110px;
          height: 110px;
          background: white;
          border-radius: 12px;
          padding: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .qr-code img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
        
        .qr-label {
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          opacity: 0.9;
        }
        
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 30px 40px;
          background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
          border-bottom: 1px solid var(--border-color);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-dark);
          display: block;
        }
        
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }
        
        .summary {
          background: linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%);
          padding: 30px 40px;
          border-left: 5px solid var(--primary-color);
          margin: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(20, 184, 166, 0.1);
        }
        
        .summary p {
          color: var(--text-color);
          font-size: 1.05rem;
          line-height: 1.7;
        }
        
        .main-content {
          padding: 0 40px 40px;
        }
        
        .section {
          margin-bottom: 45px;
        }
        
        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--primary-light);
        }
        
        .section-title i {
          color: var(--primary-color);
        }
        
        .experience-item {
          margin-bottom: 35px;
          padding: 28px;
          background: linear-gradient(135deg, #fefefe 0%, #f8fafc 100%);
          border-radius: 15px;
          border: 1px solid var(--border-color);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .experience-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(20, 184, 166, 0.15);
        }
        
        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .item-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-color);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .company-logo {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        
        .item-date {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          color: white;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
        }
        
        .item-subtitle {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        
        .item-details ul {
          list-style: none;
          padding: 0;
        }
        
        .item-details li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: var(--text-color);
          line-height: 1.6;
        }
        
        .item-details li::before {
          content: '→';
          color: var(--primary-color);
          position: absolute;
          left: 0;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .skill-category {
          background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
          border-radius: 15px;
          padding: 25px;
          border: 2px solid var(--primary-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .skill-category:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20, 184, 166, 0.15);
        }
        
        .skill-category h3 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.15rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .skill-category h3 i {
          color: var(--primary-color);
          font-size: 1.3rem;
        }
        
        .skill-list {
          color: var(--text-color);
          line-height: 1.8;
          font-size: 0.95rem;
        }
        
        .page-break {
          page-break-before: always;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 3px dashed var(--primary-light);
        }
        
        .ats-section {
          margin-top: 40px;
        }
        
        .ats-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%);
          border-radius: 12px;
        }
        
        .ats-header h2 {
          color: var(--primary-dark);
          font-size: 2rem;
          margin-bottom: 10px;
        }
        
        .ats-header p {
          color: var(--text-light);
          font-size: 1rem;
        }
        
        .tech-category {
          margin-bottom: 30px;
        }
        
        .tech-category h3 {
          color: var(--primary-dark);
          font-size: 1.3rem;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--primary-light);
        }
        
        .tech-category h3 i {
          color: var(--primary-color);
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .tech-tag {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          color: white;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 3px 10px rgba(20, 184, 166, 0.3);
          transition: transform 0.2s ease;
        }
        
        .tech-tag:hover {
          transform: translateY(-2px);
        }
        
        .tech-tag i {
          font-size: 0.85rem;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }
        
        .project-card {
          background: linear-gradient(135deg, #fefefe 0%, #f8fafc 100%);
          border-radius: 15px;
          padding: 25px;
          border: 2px solid var(--primary-light);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(20, 184, 166, 0.15);
        }
        
        .project-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .project-tech {
          color: var(--primary-color);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 12px;
        }
        
        .project-description {
          color: var(--text-color);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }
          
          .header-left {
            flex-direction: column;
            text-align: center;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .skills-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .header-info h1 {
            font-size: 2.2rem;
          }
        }
        
        @media print {
          body {
            background: white;
            padding: 0;
          }
          
          .resume {
            box-shadow: none;
            border-radius: 0;
          }
          
          .header::before {
            display: none;
          }
          
          .experience-item:hover,
          .skill-category:hover,
          .project-card:hover,
          .tech-tag:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="resume">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <img
                src="https://guriboy-6fupko.manus.space/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.56a6f274.jpg&w=640&q=75"
                alt="Gurinder Singh"
                className="profile-photo"
              />
              <div className="header-info">
                <h1>Gurinder Singh</h1>
                <div className="title">Staff iOS & AI/ML Engineer</div>
                <div className="contact-grid">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>gsingh622@yahoo.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <span>linkedin.com/in/gurindersingh</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-globe"></i>
                    <span>Portfolio</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="qr-code">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://guriboy-6fupko.manus.space/"
                  alt="Portfolio QR Code"
                />
              </div>
              <div className="qr-label">SCAN FOR PORTFOLIO</div>
            </div>
          </div>
        </header>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-value">90M+</span>
            <span className="stat-label">Users Impacted</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">28+</span>
            <span className="stat-label">Hackathons</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2×</span>
            <span className="stat-label">1st Place Wins</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Patent</span>
            <span className="stat-label">Holder</span>
          </div>
        </div>

        {/* Career Summary */}
        <div className="summary">
          <p>
            Staff iOS & AI/ML Engineer with over a decade of experience scaling applications for millions of users.
            Patent holder and technical leader specializing in bridging cutting-edge AI/ML with practical mobile
            solutions. Proven track record of building legendary apps at global scale, from startup innovation to
            enterprise solutions serving 90M+ users, recently at my current role at PayPal/Venmo. Passionate about
            mentoring engineers, conducting technical interviews, and fostering inclusive tech communities while driving
            innovation at the intersection of iOS/Mobile and artificial intelligence.
          </p>
        </div>

        <div className="main-content">
          {/* Core Skills */}
          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-code"></i>
              Core Technical Skills
            </h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>
                  <i className="fab fa-apple"></i>
                  Languages & Frameworks
                </h3>
                <div className="skill-list">
                  Swift • SwiftUI • Objective-C • Python • JavaScript • TypeScript • Node.js • React • Next.js • React
                  Native • Flutter/Dart • FastAPI • Vapor • Express.js • GraphQL • REST APIs
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-brain"></i>
                  AI/ML & Intelligent Systems
                </h3>
                <div className="skill-list">
                  LangChain • LlamaIndex • RAG Pipelines • MCP Servers • Multi-Agent Orchestration • PyTorch • Core ML •
                  MLX • Stable Diffusion • LoRA • OpenAI APIs • Claude API • ChromaDB • Pinecone • Qdrant • Semantic
                  Search • Computer Vision • NLP • Speech Processing
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-mobile-alt"></i>
                  Mobile Development
                </h3>
                <div className="skill-list">
                  iOS SDK • UIKit • ActivityKit • WidgetKit • Dynamic Island • ARKit • Core Data • Core Location •
                  On-Device ML • SwiftData • Realm • Combine • RxSwift • XCTest • Swift Package Manager
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-cloud"></i>
                  Cloud & Infrastructure
                </h3>
                <div className="skill-list">
                  AWS (Lambda, S3, SageMaker, DynamoDB) • GCP (Vertex AI, Cloud Functions, BigQuery, Firebase) • Azure
                  (AI Services, Functions) • Supabase • Docker • Kubernetes • Serverless
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-database"></i>
                  Data & Analytics
                </h3>
                <div className="skill-list">
                  PostgreSQL • MongoDB • Redis • Vector Databases • Pandas • NumPy • Feature Engineering • A/B Testing •
                  Data Architecture • Real User Monitoring
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-tools"></i>
                  DevOps & Automation
                </h3>
                <div className="skill-list">
                  CI/CD (GitHub Actions, Jenkins, Fastlane) • Docker • Git • DataDog • Playwright • Puppeteer • n8n •
                  Webhooks • Business Process Automation
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-palette"></i>
                  Design & Creative Tools
                </h3>
                <div className="skill-list">
                  Figma • ComfyUI • Stable Diffusion • FFmpeg • ElevenLabs • Whisper-MLX • Audio/Visual Generation
                  Pipelines
                </div>
              </div>

              <div className="skill-category">
                <h3>
                  <i className="fas fa-check-circle"></i>
                  Development Practices
                </h3>
                <div className="skill-list">
                  TDD • Snapshot Testing • UI Testing • SonarQube • Accessibility • Performance Profiling • Feature
                  Flagging • Agile/Scrum • Technical Documentation
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-briefcase"></i>
              Professional Experience
            </h2>

            <div className="experience-item">
              <div className="item-header">
                <div className="item-title">
                  <i className="fab fa-paypal"></i>
                  Staff iOS Engineer → Applied AI/ML Engineer
                </div>
                <div className="item-date">2020 – Present</div>
              </div>
              <div className="item-subtitle">PayPal / Venmo</div>
              <div className="item-details">
                <ul>
                  <li>Built PayPal/Venmo's first applied agentic AI platform for autonomous merchant onboarding</li>
                  <li>
                    Pioneered AI image generation with custom SDXL LoRA models producing professional imagery in ~30
                    seconds, saving merchants $100–$500 per product
                  </li>
                  <li>Delivered first org-wide MCP integration for seamless AI agent orchestration</li>
                  <li>Achieved 58.5 GPU hours training, 23% loss reduction, 109MB production-ready model</li>
                  <li>
                    Implemented multi-platform automation managing Venmo, Honey, Facebook/Meta, Google Ads, and TikTok
                  </li>
                  <li>Developed AI-powered crash detection system using LangChain + DeepLake – now adopted org-wide</li>
                  <li>Created 10%+ productivity improvements via AI-powered automation tools</li>
                  <li>Built payment-splitting for $400M Amex partnership deal (2020)</li>
                  <li>Led initiative winning $60M CVS contract with QRC Touch-Free Payments</li>
                  <li>Built sandbox/integration app for Venmo × Amazon Partnership (2023) in two days</li>
                  <li>
                    Filed "Interface Widget Tool for Automatic QR Code Generation" patent (2022) – Reduced user friction
                    by 66%
                  </li>
                  <li>Built end-to-end infrastructure with server-side Swift for Dynamic Island / Live Activities</li>
                  <li>
                    Mentored cross-functional engineers on concurrency, accessibility, and feature-flag development
                  </li>
                  <li>
                    Partnered with Design Systems to create SwiftUI component library that cut development time by 30%
                  </li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div className="item-title">
                  <i className="fab fa-google"></i>
                  iOS Developer/Consultant
                </div>
                <div className="item-date">July 2019 – 2020</div>
              </div>
              <div className="item-subtitle">Google Stadia</div>
              <div className="item-details">
                <ul>
                  <li>Worked on Google Stadia for mobile platforms in Flutter/Dart</li>
                  <li>Leveraged iOS expertise for native plugins and crash debugging</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="item-header">
                <div className="item-title">
                  <i className="fas fa-building"></i>
                  iOS Developer/Consultant
                </div>
                <div className="item-date">April 2018 – July 2019</div>
              </div>
              <div className="item-subtitle">Morgan Stanley</div>
              <div className="item-details">
                <ul>
                  <li>Hybrid Banking and Wealth Management apps for iOS</li>
                  <li>
                    Key features: check-deposit, biometric authentication, certificate-pinning, jailbreak detection
                  </li>
                  <li>Migrated codebase from 98% Objective-C to 80% Objective-C / 20% Swift</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Personal Projects */}
          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-laptop-code"></i>
              Personal Projects
            </h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-title">
                  <i className="fas fa-cube"></i>
                  VectorVerse Evolve
                </div>
                <div className="project-tech">Swift • SwiftUI • MLX • Core ML</div>
                <div className="project-description">
                  Advanced iOS application leveraging on-device ML models for real-time image generation and processing.
                  Built custom Swift wrappers around MLX framework for optimized inference on Apple Silicon, achieving
                  sub-second generation times for 512×512 images.
                </div>
              </div>

              <div className="project-card">
                <div className="project-title">
                  <i className="fas fa-search"></i>
                  Smart Search Assistant
                </div>
                <div className="project-tech">Python • LangChain • RAG • Supabase</div>
                <div className="project-description">
                  Intelligent search system using RAG architecture for context-aware document retrieval. Integrated
                  ChromaDB for vector storage and implemented semantic chunking strategies, improving search relevance
                  by 40% over traditional keyword matching.
                </div>
              </div>
            </div>
          </section>

          {/* Hackathons */}
          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-trophy"></i>
              Hackathon Achievements
            </h2>
            <div className="experience-item">
              <div className="item-details">
                <ul>
                  <li>
                    <strong>MLH @ Bloomberg London (2017) – 1st Place:</strong> Automated Search & Rescue System – Won
                    among 500+ participants. Featured in BBC documentary.
                  </li>
                  <li>
                    <strong>Devcamp NYC (2016) – 1st Place:</strong> Talent Management App – Won among 300+ participants
                    at Google NYC.
                  </li>
                  <li>
                    <strong>HackZurich (2018) – Finalist:</strong> AR Car Buying Tool – Finalist among 400+. Featured in
                    Credit Suisse interview. Attended HackZurich 4×
                  </li>
                  <li>
                    <strong>Mentorship & Judging:</strong> Hack Yale Judge (×2), PenApps Mentor (University of
                    Pennsylvania)
                  </li>
                  <li>28+ hackathons attended across 6+ countries as participant, mentor, and judge</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-users"></i>
              Leadership & Community
            </h2>
            <div className="experience-item">
              <div className="item-details">
                <ul>
                  <li>Advisory Board Member for multiple tech startups on iOS architecture and AI/ML implementation</li>
                  <li>Conducted technical interviews for senior iOS and AI/ML positions</li>
                  <li>
                    Hosted technical workshops: SwiftUI, State Machines, AI/ML image generation, DataDog automation
                  </li>
                  <li>
                    Interfaith ERG Chapter Lead (Sikh community): Organized events, secured speakers, created
                    educational content
                  </li>
                  <li>Represented Venmo at Yale hackathons and high school tech education initiatives</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-graduation-cap"></i>
              Education
            </h2>
            <div className="experience-item">
              <div className="item-header">
                <div className="item-title">BS in Computer Systems</div>
                <div className="item-date">2012 – 2016</div>
              </div>
              <div className="item-subtitle">New York City College of Technology, Brooklyn</div>
            </div>
          </section>
        </div>

        {/* Page 2: Comprehensive Technical Skills for ATS */}
        <div className="page-break">
          <div className="ats-section">
            <div className="ats-header">
              <h2>
                <i className="fas fa-cogs"></i> Comprehensive Technical Skills Reference
              </h2>
              <p>Detailed technology stack for ATS optimization and recruiter reference</p>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fab fa-apple"></i> Apple Ecosystem & Mobile Frameworks
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fab fa-swift"></i> Swift
                </span>
                <span className="tech-tag">
                  <i className="fab fa-swift"></i> SwiftUI
                </span>
                <span className="tech-tag">
                  <i className="fab fa-apple"></i> Objective-C
                </span>
                <span className="tech-tag">
                  <i className="fas fa-mobile-alt"></i> iOS SDK
                </span>
                <span className="tech-tag">
                  <i className="fas fa-mobile-alt"></i> UIKit
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> ActivityKit
                </span>
                <span className="tech-tag">
                  <i className="fas fa-th"></i> WidgetKit
                </span>
                <span className="tech-tag">
                  <i className="fas fa-circle"></i> Dynamic Island
                </span>
                <span className="tech-tag">
                  <i className="fas fa-vr-cardboard"></i> ARKit
                </span>
                <span className="tech-tag">
                  <i className="fas fa-map"></i> MapKit
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> Core Data
                </span>
                <span className="tech-tag">
                  <i className="fas fa-location-arrow"></i> Core Location
                </span>
                <span className="tech-tag">
                  <i className="fab fa-apple"></i> Core ML
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> CreateML
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> SwiftData
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> Realm
                </span>
                <span className="tech-tag">
                  <i className="fas fa-link"></i> Combine
                </span>
                <span className="tech-tag">
                  <i className="fas fa-link"></i> RxSwift
                </span>
                <span className="tech-tag">
                  <i className="fas fa-vial"></i> XCTest
                </span>
                <span className="tech-tag">
                  <i className="fas fa-box"></i> Swift Package Manager
                </span>
                <span className="tech-tag">
                  <i className="fas fa-box"></i> CocoaPods
                </span>
                <span className="tech-tag">
                  <i className="fas fa-box"></i> Carthage
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bluetooth"></i> BLE
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> RoomPlan SDK
                </span>
                <span className="tech-tag">
                  <i className="fab fa-flutter"></i> Flutter
                </span>
                <span className="tech-tag">
                  <i className="fab fa-flutter"></i> Dart
                </span>
                <span className="tech-tag">
                  <i className="fab fa-react"></i> React Native
                </span>
                <span className="tech-tag">
                  <i className="fas fa-mobile-alt"></i> Cordova
                </span>
                <span className="tech-tag">
                  <i className="fas fa-mobile-alt"></i> Ionic
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-brain"></i> AI/ML & LLM Systems
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> LLM Agents
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> Multi-Agent Orchestration
                </span>
                <span className="tech-tag">
                  <i className="fas fa-link"></i> LangChain
                </span>
                <span className="tech-tag">
                  <i className="fas fa-code-branch"></i> Langgraph
                </span>
                <span className="tech-tag">
                  <i className="fas fa-code-branch"></i> Langflow
                </span>
                <span className="tech-tag">
                  <i className="fas fa-book"></i> LlamaIndex
                </span>
                <span className="tech-tag">
                  <i className="fas fa-file-alt"></i> LlamaParse
                </span>
                <span className="tech-tag">
                  <i className="fas fa-filter"></i> RAG Pipelines
                </span>
                <span className="tech-tag">
                  <i className="fas fa-server"></i> MCP Servers
                </span>
                <span className="tech-tag">
                  <i className="fas fa-server"></i> MCP Clients
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> OpenAI APIs
                </span>
                <span className="tech-tag">
                  <i className="fas fa-terminal"></i> Codex CLI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> Custom GPTs
                </span>
                <span className="tech-tag">
                  <i className="fas fa-plug"></i> GPT Actions
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> Claude CLI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> Claude API
                </span>
                <span className="tech-tag">
                  <i className="fas fa-desktop"></i> Claude Desktop Extensions
                </span>
                <span className="tech-tag">
                  <i className="fas fa-users"></i> CrewAI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> N8N Agents
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> OpenAI Agents SDK
                </span>
                <span className="tech-tag">
                  <i className="fas fa-code"></i> Pydantic AI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-fire"></i> PyTorch
                </span>
                <span className="tech-tag">
                  <i className="fas fa-brain"></i> TensorFlow
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-line"></i> scikit-learn
                </span>
                <span className="tech-tag">
                  <i className="fab fa-apple"></i> MLX
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cog"></i> LoRA Fine-Tuning
                </span>
                <span className="tech-tag">
                  <i className="fas fa-image"></i> Stable Diffusion
                </span>
                <span className="tech-tag">
                  <i className="fas fa-palette"></i> ComfyUI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-microphone"></i> Whisper-MLX
                </span>
                <span className="tech-tag">
                  <i className="fas fa-volume-up"></i> ElevenLabs
                </span>
                <span className="tech-tag">
                  <i className="fas fa-microphone"></i> TTS/STT
                </span>
                <span className="tech-tag">
                  <i className="fas fa-eye"></i> Computer Vision
                </span>
                <span className="tech-tag">
                  <i className="fas fa-search-plus"></i> YOLO
                </span>
                <span className="tech-tag">
                  <i className="fas fa-camera"></i> OpenCV
                </span>
                <span className="tech-tag">
                  <i className="fas fa-running"></i> Action Classification
                </span>
                <span className="tech-tag">
                  <i className="fas fa-user"></i> Pose Estimation
                </span>
                <span className="tech-tag">
                  <i className="fas fa-comments"></i> NLP
                </span>
                <span className="tech-tag">
                  <i className="fas fa-graduation-cap"></i> RLHF
                </span>
                <span className="tech-tag">
                  <i className="fas fa-desktop"></i> Ollama
                </span>
                <span className="tech-tag">
                  <i className="fas fa-desktop"></i> LMStudio
                </span>
                <span className="tech-tag">
                  <i className="fas fa-desktop"></i> Automatic1111
                </span>
                <span className="tech-tag">
                  <i className="fas fa-globe"></i> OpenWebUI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> GGUF Models
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-database"></i> Vector Databases & Embeddings
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fas fa-palette"></i> ChromaDB
                </span>
                <span className="tech-tag">
                  <i className="fas fa-tree"></i> Pinecone
                </span>
                <span className="tech-tag">
                  <i className="fas fa-search"></i> Qdrant
                </span>
                <span className="tech-tag">
                  <i className="fas fa-water"></i> DeepLake
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> Weaviate
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> Milvus
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> FAISS
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> NEO4J
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> Cohere
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> HuggingFace Embeddings
                </span>
                <span className="tech-tag">
                  <i className="fas fa-search"></i> Semantic Search
                </span>
                <span className="tech-tag">
                  <i className="fas fa-filter"></i> Hybrid Search
                </span>
                <span className="tech-tag">
                  <i className="fas fa-layer-group"></i> Multi-Vector Search
                </span>
                <span className="tech-tag">
                  <i className="fas fa-sort-amount-up"></i> Re-ranking
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cut"></i> Chunking Strategies
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> Knowledge-Graph RAG
                </span>
                <span className="tech-tag">
                  <i className="fas fa-images"></i> Multimodal RAG
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-code"></i> Programming Languages & Web Frameworks
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fab fa-python"></i> Python
                </span>
                <span className="tech-tag">
                  <i className="fab fa-js"></i> JavaScript
                </span>
                <span className="tech-tag">
                  <i className="fab fa-js"></i> TypeScript
                </span>
                <span className="tech-tag">
                  <i className="fab fa-node"></i> Node.js
                </span>
                <span className="tech-tag">
                  <i className="fab fa-react"></i> React
                </span>
                <span className="tech-tag">
                  <i className="fas fa-arrow-right"></i> Next.js
                </span>
                <span className="tech-tag">
                  <i className="fab fa-angular"></i> AngularJS
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> FastAPI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-wind"></i> Flask
                </span>
                <span className="tech-tag">
                  <i className="fas fa-zap"></i> UV
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cloud"></i> Vapor
                </span>
                <span className="tech-tag">
                  <i className="fas fa-server"></i> Serverless Swift
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> Express.js
                </span>
                <span className="tech-tag">
                  <i className="fas fa-network-wired"></i> GraphQL
                </span>
                <span className="tech-tag">
                  <i className="fas fa-exchange-alt"></i> REST APIs
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-cloud"></i> Cloud Platforms & Infrastructure
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fab fa-aws"></i> AWS Lambda
                </span>
                <span className="tech-tag">
                  <i className="fab fa-aws"></i> AWS EC2
                </span>
                <span className="tech-tag">
                  <i className="fab fa-aws"></i> AWS S3
                </span>
                <span className="tech-tag">
                  <i className="fab fa-aws"></i> AWS SageMaker
                </span>
                <span className="tech-tag">
                  <i className="fab fa-aws"></i> AWS DynamoDB
                </span>
                <span className="tech-tag">
                  <i className="fab fa-aws"></i> AWS IAM
                </span>
                <span className="tech-tag">
                  <i className="fab fa-google"></i> GCP
                </span>
                <span className="tech-tag">
                  <i className="fab fa-google"></i> Vertex AI
                </span>
                <span className="tech-tag">
                  <i className="fab fa-google"></i> Cloud Functions
                </span>
                <span className="tech-tag">
                  <i className="fab fa-google"></i> BigQuery
                </span>
                <span className="tech-tag">
                  <i className="fas fa-fire"></i> Firebase
                </span>
                <span className="tech-tag">
                  <i className="fab fa-microsoft"></i> Azure
                </span>
                <span className="tech-tag">
                  <i className="fab fa-microsoft"></i> Azure AI Services
                </span>
                <span className="tech-tag">
                  <i className="fab fa-microsoft"></i> Azure Functions
                </span>
                <span className="tech-tag">
                  <i className="fab fa-microsoft"></i> AI Cloud Foundry
                </span>
                <span className="tech-tag">
                  <i className="fab fa-digital-ocean"></i> Digital Ocean
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> Supabase
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> Supabase Edge Functions
                </span>
                <span className="tech-tag">
                  <i className="fas fa-rocket"></i> Vercel
                </span>
                <span className="tech-tag">
                  <i className="fab fa-docker"></i> Docker
                </span>
                <span className="tech-tag">
                  <i className="fas fa-dharmachakra"></i> Kubernetes
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> Containerization
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> Serverless Compute
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-line"></i> Observability
                </span>
                <span className="tech-tag">
                  <i className="fas fa-server"></i> RunPod
                </span>
                <span className="tech-tag">
                  <i className="fas fa-copy"></i> Replicate
                </span>
                <span className="tech-tag">
                  <i className="fas fa-robot"></i> HuggingFace
                </span>
                <span className="tech-tag">
                  <i className="fas fa-layer-group"></i> Multi-cloud Architecture
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-database"></i> Databases & Data Systems
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fas fa-database"></i> SQL
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> PostgreSQL
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> NoSQL
                </span>
                <span className="tech-tag">
                  <i className="fas fa-fire"></i> Firestore
                </span>
                <span className="tech-tag">
                  <i className="fas fa-leaf"></i> MongoDB
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> DynamoDB
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> Redis
                </span>
                <span className="tech-tag">
                  <i className="fas fa-table"></i> Pandas
                </span>
                <span className="tech-tag">
                  <i className="fas fa-calculator"></i> NumPy
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-bar"></i> Feature Engineering
                </span>
                <span className="tech-tag">
                  <i className="fas fa-flask"></i> A/B Testing
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-line"></i> Data Architecture
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-area"></i> Real User Monitoring
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-tools"></i> DevOps, CI/CD & Automation
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fab fa-git-alt"></i> Git
                </span>
                <span className="tech-tag">
                  <i className="fab fa-github"></i> GitHub
                </span>
                <span className="tech-tag">
                  <i className="fab fa-github"></i> GitHub Actions
                </span>
                <span className="tech-tag">
                  <i className="fab fa-microsoft"></i> Azure DevOps
                </span>
                <span className="tech-tag">
                  <i className="fas fa-infinity"></i> CI/CD
                </span>
                <span className="tech-tag">
                  <i className="fab fa-jenkins"></i> Jenkins
                </span>
                <span className="tech-tag">
                  <i className="fas fa-rocket"></i> Fastlane
                </span>
                <span className="tech-tag">
                  <i className="fab fa-jira"></i> Jira
                </span>
                <span className="tech-tag">
                  <i className="fas fa-sync"></i> Agile/Scrum
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cube"></i> SonarCube
                </span>
                <span className="tech-tag">
                  <i className="fas fa-browser"></i> BrowserStack
                </span>
                <span className="tech-tag">
                  <i className="fas fa-vial"></i> TDD
                </span>
                <span className="tech-tag">
                  <i className="fas fa-camera"></i> Snapshot Testing
                </span>
                <span className="tech-tag">
                  <i className="fas fa-desktop"></i> UI Testing
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-line"></i> Optimizely
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-bar"></i> Amplitude
                </span>
                <span className="tech-tag">
                  <i className="fas fa-dog"></i> DataDog
                </span>
                <span className="tech-tag">
                  <i className="fas fa-play"></i> Playwright
                </span>
                <span className="tech-tag">
                  <i className="fas fa-hand-pointer"></i> Puppeteer
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bug"></i> Selenium
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> N8N
                </span>
                <span className="tech-tag">
                  <i className="fas fa-plug"></i> Webhooks
                </span>
                <span className="tech-tag">
                  <i className="fas fa-cogs"></i> Business Process Automation
                </span>
                <span className="tech-tag">
                  <i className="fas fa-spider"></i> Web Scraping
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-paint-brush"></i> Design & Creative Tools
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fab fa-figma"></i> Figma
                </span>
                <span className="tech-tag">
                  <i className="fab fa-sketch"></i> Sketch
                </span>
                <span className="tech-tag">
                  <i className="fas fa-project-diagram"></i> Miro
                </span>
                <span className="tech-tag">
                  <i className="fas fa-film"></i> FFmpeg
                </span>
                <span className="tech-tag">
                  <i className="fas fa-palette"></i> ComfyUI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-keyboard"></i> Prompt Engineering
                </span>
                <span className="tech-tag">
                  <i className="fas fa-music"></i> Audio Generation
                </span>
                <span className="tech-tag">
                  <i className="fas fa-video"></i> Visual Generation
                </span>
                <span className="tech-tag">
                  <i className="fas fa-globe"></i> Manus Platform
                </span>
                <span className="tech-tag">
                  <i className="fas fa-terminal"></i> Cursor
                </span>
                <span className="tech-tag">
                  <i className="fas fa-terminal"></i> Kilo Code
                </span>
                <span className="tech-tag">
                  <i className="fas fa-terminal"></i> Gemini CLI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-route"></i> OpenRouter
                </span>
              </div>
            </div>

            <div className="tech-category">
              <h3>
                <i className="fas fa-flag"></i> Additional Technologies & Concepts
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">
                  <i className="fas fa-universal-access"></i> Accessibility
                </span>
                <span className="tech-tag">
                  <i className="fas fa-tachometer-alt"></i> Performance Profiling
                </span>
                <span className="tech-tag">
                  <i className="fas fa-flag"></i> Feature Flagging
                </span>
                <span className="tech-tag">
                  <i className="fas fa-lock"></i> Certificate Pinning
                </span>
                <span className="tech-tag">
                  <i className="fas fa-shield-alt"></i> Jailbreak Detection
                </span>
                <span className="tech-tag">
                  <i className="fas fa-fingerprint"></i> Biometric Authentication
                </span>
                <span className="tech-tag">
                  <i className="fas fa-file-alt"></i> Technical Documentation
                </span>
                <span className="tech-tag">
                  <i className="fas fa-signal"></i> Bluetooth Low Energy
                </span>
                <span className="tech-tag">
                  <i className="fas fa-broadcast-tower"></i> Beacons
                </span>
                <span className="tech-tag">
                  <i className="fas fa-map-pin"></i> Estimote
                </span>
                <span className="tech-tag">
                  <i className="fas fa-bolt"></i> Async/Await
                </span>
                <span className="tech-tag">
                  <i className="fas fa-chart-network"></i> State Machines
                </span>
                <span className="tech-tag">
                  <i className="fas fa-sitemap"></i> Concurrency
                </span>
                <span className="tech-tag">
                  <i className="fas fa-file"></i> OCR
                </span>
                <span className="tech-tag">
                  <i className="fas fa-vector-square"></i> Embedding Generation
                </span>
                <span className="tech-tag">
                  <i className="fas fa-database"></i> Metadata Enrichment
                </span>
                <span className="tech-tag">
                  <i className="fas fa-layer-group"></i> Multimodal AI
                </span>
                <span className="tech-tag">
                  <i className="fas fa-tv"></i> CMS (Strapi)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
