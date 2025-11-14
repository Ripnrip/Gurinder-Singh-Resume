'use client'

import { SkillsGrid } from '@/components/SkillsGrid'
import { FaApple, FaBrain, FaCloud, FaDatabase, FaTools } from 'react-icons/fa'

/**
 * 🎭 The Skills Catalog Page - The Grand Showcase of Digital Mastery
 * 
 * "A comprehensive visual catalog of all skills, technologies, and tools,
 * beautifully organized for easy reference and discovery."
 * 
 * - The Spellbinding Catalog Curator
 */

export default function SkillsCatalogPage() {
  return (
    <div className="catalog-container">
      <div className="catalog-page">
        {/* Header */}
        <header className="catalog-header">
          <div className="catalog-badge">
            <span className="badge-dot"></span>
            Skills & Icons Catalog
          </div>
          <h1 className="catalog-title">Gurinder Singh</h1>
          <p className="catalog-subtitle">
            Complete catalog of technologies, tools & platforms — iOS · AI/ML · Cloud · Data · Product
          </p>
          <p className="catalog-description">
            Staff iOS & AI/ML Engineer • Building legendary apps at global scale
          </p>
        </header>

        {/* Skills Grid - Detailed View */}
        <main className="catalog-content">
          <SkillsGrid variant="detailed" size={24} />
        </main>

        {/* Footer */}
        <footer className="catalog-footer">
          <p className="footer-note">
            💡 This catalog showcases all skills represented in the resume. 
            Icons are sourced from react-icons and custom SVG collections.
          </p>
          <p className="footer-location">
            San Jose, CA • Open to remote/hybrid
          </p>
        </footer>
      </div>

      <style jsx>{`
        .catalog-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #a7f3d0 0%, #14b8a6 100%);
          padding: 2rem;
          color: #1e293b;
        }

        .catalog-page {
          max-width: 1200px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .catalog-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 2rem 2rem;
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .catalog-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .catalog-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          display: block;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .catalog-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 2;
        }

        .catalog-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1rem 0;
          font-weight: 500;
          position: relative;
          z-index: 2;
        }

        .catalog-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .catalog-content {
          background: #f8fafc;
          padding: 2.5rem;
          margin: 0;
        }

        .catalog-footer {
          text-align: center;
          padding: 2rem;
          background: #e0f2fe;
          border-top: 1px solid #e2e8f0;
        }

        .footer-note {
          font-size: 0.85rem;
          color: #4b5563;
          margin: 0 0 0.5rem 0;
          line-height: 1.6;
        }

        .footer-location {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
        }

        @media (max-width: 768px) {
          .catalog-container {
            padding: 1rem;
          }

          .catalog-title {
            font-size: 2rem;
          }

          .catalog-content {
            padding: 1.5rem;
          }

          .catalog-header {
            padding: 2rem 1.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

