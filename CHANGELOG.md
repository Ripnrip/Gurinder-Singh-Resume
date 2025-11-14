# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2025-11-14] - Ultimate Resume Creation & Design Refinement

### Added
- Created `z-ai-resume-final.html` - The definitive resume combining best elements from all iterations
- Comprehensive Project Mercury timeline (June 2025 → Present) with monthly progression details
- Beautiful hackathon section with gradient cards, country flags, and mentorship showcase
- Complete icon system mapping all skills to local SVG icons or Simple Icons CDN
- LinkedIn-style header with tagline: "LLM Agents · RAG Pipelines · Mobile · Automation"
- Enhanced Google Stadia section with iOS-specific details (Core Bluetooth, Instruments, Snapshot Testing)
- Timeline visualization for Project Mercury with visual indicators and dividers

### Changed
- Redesigned header layout: Avatar → Title → LinkedIn Header → Contact Links (vertical flow)
- Updated contact icons: 🌐 Portfolio, 🔗 LinkedIn, ✉️ Email (full address)
- Increased font sizes throughout for better print readability (10pt → 11pt base, section titles 13pt → 15pt)
- Replaced "server-side Swift implementation" with "architecting HLDs, LLDs (High-Level Diagrams / Low-Level Diagrams)"
- Updated "mission-critical feature" to "mission-critical feature set" for Gift Cards
- Added "App Clip Exploration/Discovery for Venmo" to Dynamic Island / Live Activities section
- Enhanced Professional Experience section with comprehensive subsections and detailed achievements
- Improved hackathon section styling with gradient cards and better visual hierarchy

### Fixed
- Morgan Stanley icon now uses local file from Resume App Icon folder
- PayPal icon stored locally for better reliability
- Company logo sizes increased (24px → 28px) for better visibility
- All font sizes optimized for print/recruiter readability

### Removed
- Removed redundant hackathon judge/mentor mentions from Leadership & Community (already in Hackathon section)
- Removed technical interview mention from Leadership & Community
- Removed Yale hackathons/high school representation mention

## [2025-11-14] - Project Organization & ARKit Icon Update

### Changed
- Created `legacy/scrapwork/` folder to organize old projects and experiments
- Updated ARKit icon to clean black rounded square with white "AR" text
- Updated Cursor-Resume README to indicate it's the active project
- Improved project structure documentation

### Added
- `legacy/README.md` documenting archived projects
- Clear separation between active project (`Cursor-Resume`) and legacy work

## [2025-11-14] - Icon Improvements & Simplification

### Changed
- Increased font size in Core ML icon: ML text from 8px to 10px for better readability
- Increased font size in MLX icon: MLX text from 6px to 8px for better readability
- Simplified package.json dev script back to basic `next dev` command (removed complex hostname configuration)

### Fixed
- Improved text visibility in Core ML and MLX hexagonal icons

## [2024-11-14] - Icon Collection Integration

### Added
- Official Core ML icon with hexagonal logo design (teal/blue gradient)
- Official MLX icon with hexagonal logo design
- SwiftData icon with light blue circle and black "S"
- Official Realm logo from Simple Icons
- Official RxSwift logo downloaded using image-to-svg.js tool
- Updated catalog page with white background theme matching Claude-Resume style
- UIKit icon with light blue circle and dark gray "U"

### Changed
- Updated Core ML and MLX icons to match official Apple branding (hexagonal shapes)
- Replaced RxSwift icon with official logo from GitHub using image-to-svg.js tool
- Improved icon contrast and visibility with darker gradients and text strokes
- Catalog page styling updated to white background for better readability

### Fixed
- Fixed duplicate keys in SVG_ICON_MAP ('Realm', 'Core ML', 'SwiftData')
- Icon display issues for Core ML, MLX, SwiftData, and Realm
- Build and runtime errors related to icon rendering

## [2024-11-14] - Initial Icon Collection

### Added
- SvgIcon component for custom icon rendering
- Skills catalog page at `/catalog` showcasing all skills
- Icons for: LangChain, LlamaIndex, LangGraph, CrewAI, LangFlow, ChromaDB, Pinecone, Qdrant, DeepLake, RxSwift, Core ML, MLX, ARKit, ActivityKit, WidgetKit, Cordova, Ionic, Kubernetes

### Changed
- Updated SkillsGrid component to use SVG icons for missing react-icons equivalents
- Improved icon fallback system with text initials

### Fixed
- Missing icon imports from react-icons/si
- Type errors in SkillsGrid component
- Build errors related to icon components

