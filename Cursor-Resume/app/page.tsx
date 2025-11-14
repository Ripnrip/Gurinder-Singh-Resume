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
            <p>San Jose, CA • Open to remote/hybrid</p>
            <p>Portfolio / GitHub / LinkedIn available on request</p>
            <p>Specialties: iOS, AI/ML, Agentic Systems, Experiments</p>
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
                <li>Built PayPal/Venmo's first applied agentic AI platform for autonomous merchant onboarding</li>
                <li>Pioneered AI image generation with custom SDXL LoRA models producing professional imagery in ~30 seconds, saving merchants $100–$500 per product</li>
                <li>Delivered first org-wide MCP integration for seamless AI agent orchestration</li>
                <li>Achieved 58.5 GPU hours training, 23% loss reduction, 109MB production-ready model</li>
                <li>Implemented multi-platform automation managing Venmo, Honey, Facebook/Meta, Google Ads, and TikTok</li>
                <li>Developed AI-powered crash detection system using LangChain + DeepLake – now adopted org-wide</li>
                <li>Created 10%+ productivity improvements via AI-powered automation tools</li>
                <li>Built payment-splitting for $400M Amex partnership deal (2020)</li>
                <li>Led initiative winning $60M CVS contract with QRC Touch-Free Payments</li>
                <li>Built sandbox/integration app for Venmo × Amazon Partnership (2023) in two days</li>
                <li>Filed "Interface Widget Tool for Automatic QR Code Generation" patent (2022) – Reduced user friction by 66%</li>
                <li>Built end-to-end infrastructure with server-side Swift for Dynamic Island / Live Activities</li>
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
              Hackathon Achievements
            </h2>
            <ul className="experience-list">
              <li><strong>MLH @ Bloomberg London (2017) – 1st Place:</strong> Automated Search & Rescue System – Won among 500+ participants. Featured in BBC documentary.</li>
              <li><strong>Devcamp NYC (2016) – 1st Place:</strong> Talent Management App – Won among 300+ participants at Google NYC.</li>
              <li><strong>HackZurich (2018) – Finalist:</strong> AR Car Buying Tool – Finalist among 400+. Featured in Credit Suisse interview. Attended HackZurich 4×</li>
              <li><strong>Mentorship & Judging:</strong> Hack Yale Judge (×2), PenApps Mentor (University of Pennsylvania)</li>
              <li>28+ hackathons attended across 6+ countries as participant, mentor, and judge</li>
            </ul>
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

