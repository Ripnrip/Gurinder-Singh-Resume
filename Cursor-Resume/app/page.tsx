'use client'

import { SkillsGrid } from '@/components/SkillsGrid'
import { FaBriefcase, FaGraduationCap, FaTrophy, FaUsers, FaLaptopCode } from 'react-icons/fa'

export default function ResumePage() {
  return (
    <div className="resume-container">
      <div className="resume-page">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="badge">Staff iOS & AI/ML Engineer</div>
            <h1 className="name">Gurinder Singh</h1>
            <p className="tagline">Legendary apps at global scale</p>
          </div>

          <div className="sidebar-contact">
            <p>📧 gsingh622@yahoo.com</p>
            <p>💼 <a href="https://guriboy.codes" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>Portfolio</a></p>
            <p>🔗 <a href="https://linkedin.com/in/gurinder" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>LinkedIn</a></p>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>San Jose, CA • Open to remote/hybrid</p>
          </div>

          <div className="sidebar-divider"></div>

          <SkillsGrid variant="sidebar" size={18} />
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Summary - Full, Not Split */}
          <section className="summary-section">
            <h2 className="section-title">Summary</h2>
            <p className="summary-text">
              Staff iOS & AI/ML Engineer with over a decade of experience scaling applications for millions of users. 
              Patent holder and technical leader specializing in bridging cutting-edge AI/ML with practical mobile solutions. 
              Proven track record of building legendary apps at global scale, from startup innovation to enterprise solutions 
              serving 90M+ users, recently at my current role at PayPal/Venmo. Passionate about mentoring engineers, 
              conducting technical interviews, and fostering inclusive tech communities while driving innovation at the 
              intersection of iOS/Mobile and artificial intelligence.
            </p>
          </section>

          {/* Professional Experience */}
          <section className="section">
            <h2 className="section-title">
              <FaBriefcase className="section-icon" />
              Professional Experience
            </h2>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Staff iOS Engineer → Applied AI/ML Engineer</h3>
                  <p className="experience-company">PayPal / Venmo</p>
                </div>
                <span className="experience-date">2020 – Present</span>
              </div>
              <ul className="experience-list">
                <li><strong>✅ Team Mercury — AI-Powered Agentic E-Commerce Platform (June 2025 → Present)</strong>: Lead engineer managing 2 new hires (&lt;1 year tenure) with cross-org Applied AI collaboration. Built PayPal/Venmo's first applied agentic AI platform for autonomous merchant onboarding, achieving 58.5 GPU hours training, 23% loss reduction, 109MB production models.</li>
                <li>Developed AI-powered crash detection system using LangChain + DeepLake – now adopted org-wide</li>
                <li>Created 10%+ productivity improvements via AI-powered automation tools</li>
                <li>Built payment-splitting for $400M Amex partnership deal (2020)</li>
                <li>Led initiative winning $60M CVS contract with QRC Touch-Free Payments</li>
                <li>Built sandbox/integration app for Venmo × Amazon Partnership (2023) in two days</li>
                <li>Filed "Interface Widget Tool for Automatic QR Code Generation" patent (2022) – Reduced user friction by 66%</li>
                <li>Built end-to-end infrastructure with server-side Swift for Dynamic Island / Live Activities</li>
                <li>Led App Clip Exploration/Discovery initiative for Venmo - researched implementation strategies, user experience flows, and technical feasibility for instant app access without full installation</li>
                <li>Mentored cross-functional engineers on concurrency, accessibility, and feature-flag development</li>
                <li>Partnered with Design Systems to create SwiftUI component library that cut development time by 30%</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">iOS Developer/Consultant</h3>
                  <p className="experience-company">Google Stadia</p>
                </div>
                <span className="experience-date">July 2019 – 2020</span>
              </div>
              <ul className="experience-list">
                <li>Worked on Google Stadia for mobile platforms in Flutter/Dart</li>
                <li>Leveraged iOS expertise for native plugins and crash debugging</li>
              </ul>
            </div>

            {/* Mercury Project Section */}
            <div className="experience-item" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(15, 23, 42, 0.02))', border: '2px solid rgba(56, 189, 248, 0.2)' }}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">✅ Team Mercury — AI-Powered Agentic E-Commerce Platform</h3>
                  <p className="experience-company">PayPal / Venmo • Lead Engineer</p>
                </div>
                <span className="experience-date">June 2025 → Present</span>
              </div>

              <p style={{ color: '#64748b', fontStyle: 'italic', marginBottom: '1rem' }}>
                Leadership: Lead engineer managing 2 new hires (&lt;1 year tenure), cross-org collaboration with Applied AI team
              </p>

              <div className="mercury-timeline">
                <div className="timeline-item">
                  <strong>🟩 June 2025 — Project Conception:</strong> Concept originated during exploration of agentic AI for merchant automation; formed initial skunkworks team as 20% project
                </div>

                <div className="timeline-item">
                  <strong>🟩 July 2025 — Hackathon Prototype ("Rock-Star Hit"):</strong> Built fully functional prototype in 72 hours; became standout hit at hackathon; presented to SVP of AI earning immediate backing; began leading team including two newly hired engineers
                </div>

                <div className="timeline-item">
                  <strong>🟩 August 2025 — 56K Dataset + Safe Data Pipeline:</strong> Designed safe, compliant scraping pipeline; ingested and normalized 56,000 products across marketplaces; established 5 training categories; weekly collaboration with Applied AI team
                </div>

                <div className="timeline-item">
                  <strong>🟩 September 2025 — LoRA Training + Model Leadership:</strong> Curated datasets and trained five SDXL LoRA models; achieved 58.5 GPU hours, 23% loss reduction, 109MB optimized models; guided new engineers through ML pipeline development; project expanded from 20% to 120% cross-org initiative
                </div>

                <div className="timeline-item">
                  <strong>🟩 October 15, 2025 — SVP Demo + Productionization:</strong> Demoed integrated system to SVP and leadership; delivered multiphase agent flows (Meta/Google/TikTok); drove containerization with MLOps for GCS + H200 cluster; implemented MCP multi-agent orchestration
                </div>

                <div className="timeline-item">
                  <strong>🟩 November 2025 — GraphRAG + Ads Intelligence:</strong> Built merchant knowledge graph using GraphRAG; defined schema for marketplace history, asset scoring, embeddings; synced weekly with Ads Intelligence team
                </div>

                <div className="timeline-item">
                  <strong>🟩 December 2025 — 56K Dataset Batch Validation:</strong> Designed validation system for drift detection, category alignment, image quality scoring; preparing full dataset validation on H200s; working with MLOps on GPU deployment pipeline
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">iOS Developer/Consultant</h3>
                  <p className="experience-company">Morgan Stanley</p>
                </div>
                <span className="experience-date">April 2018 – July 2019</span>
              </div>
              <ul className="experience-list">
                <li>Hybrid Banking and Wealth Management apps for iOS</li>
                <li>Key features: check-deposit, biometric authentication, certificate-pinning, jailbreak detection</li>
                <li>Migrated codebase from 98% Objective-C to 80% Objective-C / 20% Swift</li>
              </ul>
            </div>
          </section>

          {/* Personal Projects */}
          <section className="section">
            <h2 className="section-title">
              <FaLaptopCode className="section-icon" />
              Personal Projects
            </h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3 className="project-title">VectorVerse Evolve</h3>
                <p className="project-tech">Swift • SwiftUI • MLX • Core ML</p>
                <p className="project-description">
                  Advanced iOS application leveraging on-device ML models for real-time image generation and processing. 
                  Built custom Swift wrappers around MLX framework for optimized inference on Apple Silicon, achieving 
                  sub-second generation times for 512×512 images.
                </p>
              </div>
              <div className="project-card">
                <h3 className="project-title">Smart Search Assistant</h3>
                <p className="project-tech">Python • LangChain • RAG • Supabase</p>
                <p className="project-description">
                  Intelligent search system using RAG architecture for context-aware document retrieval. Integrated 
                  ChromaDB for vector storage and implemented semantic chunking strategies, improving search relevance 
                  by 40% over traditional keyword matching.
                </p>
              </div>
            </div>
          </section>

          {/* Hackathon Achievements */}
          <section className="section">
            <h2 className="section-title">
              <FaTrophy className="section-icon" />
              Hackathon Achievements & Innovation
            </h2>
            <p style={{ marginBottom: '1rem', color: '#64748b' }}>
              <strong>28+ hackathons</strong> attended across <strong>6+ countries</strong> as participant, mentor, and judge. Earned <strong>2 first-place wins</strong> and served as judge at Yale (2×). Recognized globally for innovation and technical excellence.
            </p>

            <div className="hackathon-list">
              <div className="hackathon-item">
                <div className="hackathon-icon">🏆</div>
                <div className="hackathon-content">
                  <div className="hackathon-header">
                    <span className="hackathon-achievement">1ST PLACE</span>
                    <span className="hackathon-event">MLH @ Bloomberg London</span>
                  </div>
                  <div className="hackathon-details">
                    <p>Automated Search & Rescue System</p>
                    <p>Won among 500+ participants</p>
                    <p>Featured in BBC documentary</p>
                  </div>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-icon">🏆</div>
                <div className="hackathon-content">
                  <div className="hackathon-header">
                    <span className="hackathon-achievement">1ST PLACE</span>
                    <span className="hackathon-event">Devcamp NYC</span>
                  </div>
                  <div className="hackathon-details">
                    <p>Talent Management App</p>
                    <p>Won among 300+ participants</p>
                    <p>at Google NYC</p>
                  </div>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-icon">🎯</div>
                <div className="hackathon-content">
                  <div className="hackathon-header">
                    <span className="hackathon-achievement">FINALIST</span>
                    <span className="hackathon-event">HackZurich</span>
                  </div>
                  <div className="hackathon-details">
                    <p>AR Car Buying Tool</p>
                    <p>Finalist among 400+</p>
                    <p>Attended 4× | Credit Suisse feature</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '0.5rem' }}>Mentorship & Judging</strong>
              <div className="award-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="award-item">
                  <span className="award-icon" style={{ fontSize: '1.2rem' }}>🎓</span>
                  <div className="award-content">
                    <div className="award-title" style={{ fontWeight: '600', color: '#020817' }}>Hack Yale – Judge (2×)</div>
                    <div className="award-description" style={{ fontSize: '0.85rem', color: '#64748b' }}>Yale University</div>
                  </div>
                </div>
                <div className="award-item">
                  <span className="award-icon" style={{ fontSize: '1.2rem' }}>🎓</span>
                  <div className="award-content">
                    <div className="award-title" style={{ fontWeight: '600', color: '#020817' }}>PenApps – Mentor</div>
                    <div className="award-description" style={{ fontSize: '0.85rem', color: '#64748b' }}>University of Pennsylvania</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leadership & Community */}
          <section className="section">
            <h2 className="section-title">
              <FaUsers className="section-icon" />
              Leadership & Community
            </h2>
            <ul className="experience-list">
              <li>Advisory Board Member for multiple tech startups on iOS architecture and AI/ML implementation</li>
              <li>Conducted technical interviews for senior iOS and AI/ML positions</li>
              <li>Hosted technical workshops: SwiftUI, State Machines, AI/ML image generation, DataDog automation</li>
              <li>Interfaith ERG Chapter Lead (Sikh community): Organized events, secured speakers, created educational content</li>
              <li>Represented Venmo at Yale hackathons and high school tech education initiatives</li>
            </ul>
          </section>

          {/* Education */}
          <section className="section">
            <h2 className="section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h2>
            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">BS in Computer Systems</h3>
                  <p className="experience-company">New York City College of Technology, Brooklyn</p>
                </div>
                <span className="experience-date">2012 – 2016</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Page 2: Detailed Skills */}
      <div className="resume-page page-2">
        <div className="page-2-content">
          <h2 className="page-2-title">Comprehensive Technical Skills Reference</h2>
          <p className="page-2-subtitle">Detailed technology stack for ATS optimization and recruiter reference</p>
          <SkillsGrid variant="detailed" size={22} />
        </div>
      </div>

      <style jsx>{`
        .resume-container {
          min-height: 100vh;
          background: #f8fafc;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .resume-page {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
        }

        .page-2 {
          margin-top: 2rem;
        }

        .page-2-content {
          grid-column: 1 / -1;
        }

        .page-2-title {
          font-size: 2rem;
          font-weight: 700;
          color: #020817;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .page-2-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        /* Sidebar */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.05),
            rgba(15, 23, 42, 0.02)
          );
          border: 1px solid rgba(148, 163, 184, 0.3);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .sidebar-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #0c4a6e;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          width: fit-content;
        }

        .name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #020817;
          margin: 0;
        }

        .tagline {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        .sidebar-contact {
          font-size: 0.7rem;
          color: #64748b;
          line-height: 1.6;
        }

        .sidebar-contact p {
          margin: 0.25rem 0;
        }

        .sidebar-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            rgba(148, 163, 184, 0.3),
            transparent
          );
          margin: 0.5rem 0;
        }

        /* Main Content */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .summary-section {
          padding: 1.5rem;
          background: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.05),
            rgba(15, 23, 42, 0.02)
          );
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #020817;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .section-icon {
          color: #38bdf8;
        }

        .summary-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #334155;
          margin: 0;
        }

        .section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .experience-item {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .experience-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #020817;
          margin: 0 0 0.25rem 0;
        }

        .experience-company {
          font-size: 0.95rem;
          color: #38bdf8;
          font-weight: 600;
          margin: 0;
        }

        .experience-date {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
          white-space: nowrap;
        }

        .experience-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .experience-list li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #334155;
        }

        .experience-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #38bdf8;
          font-weight: bold;
        }

        .experience-list li strong {
          color: #020817;
          font-weight: 600;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .project-card {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .project-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #020817;
          margin: 0 0 0.5rem 0;
        }

        .project-tech {
          font-size: 0.85rem;
          color: #38bdf8;
          font-weight: 500;
          margin: 0 0 0.75rem 0;
        }

        .project-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #334155;
          margin: 0;
        }

        /* Hackathon Layout */
        .hackathon-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .hackathon-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 10px;
          border-left: 4px solid #38bdf8;
        }

        .hackathon-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          width: 2rem;
          text-align: center;
        }

        .hackathon-content {
          flex: 1;
        }

        .hackathon-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .hackathon-achievement {
          background: #38bdf8;
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hackathon-event {
          font-size: 0.9rem;
          font-weight: 700;
          color: #020817;
        }

        .hackathon-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .hackathon-details p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
        }

        .award-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .award-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        /* Mercury Timeline Styles */
        .mercury-details {
          margin: 1rem 0;
          padding: 0;
        }

        .mercury-details p {
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .mercury-timeline {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mercury-timeline .timeline-item {
          padding: 0.75rem;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #38bdf8;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #334155;
        }

        .mercury-timeline .timeline-item strong {
          color: #020817;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .resume-page {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: relative;
            top: 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .resume-container {
            padding: 0;
            background: white;
          }

          .resume-page {
            box-shadow: none;
            page-break-after: always;
          }

          .page-2 {
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  )
}

