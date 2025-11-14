# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Official Core ML icon with hexagonal logo design (teal/blue gradient)
- Official MLX icon with hexagonal logo design
- SwiftData icon with light blue circle and black "S"
- Official Realm logo from Simple Icons
- Official RxSwift logo downloaded using image-to-svg.js tool
- Updated catalog page with white background theme matching Claude-Resume style
- Dev server configuration to bind to all interfaces (0.0.0.0) for better accessibility

### Changed
- Updated Core ML and MLX icons to match official Apple branding (hexagonal shapes)
- Replaced RxSwift icon with official logo from GitHub using image-to-svg.js tool
- Improved icon contrast and visibility
- Catalog page styling updated to white background for better readability
- Dev server now accessible from both IPv4 and IPv6 addresses

### Fixed
- Resolved "Access is only allowed at [::1]:3001" error by binding dev server to 0.0.0.0
- Fixed duplicate keys in SVG_ICON_MAP ('Realm', 'Core ML', 'SwiftData')
- Icon display issues for Core ML, MLX, SwiftData, and Realm
- Build and runtime errors related to icon rendering

## [2024-11-14] - Icon Collection Integration

### Added
- Comprehensive icon collection with 18+ new custom SVG icons
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

