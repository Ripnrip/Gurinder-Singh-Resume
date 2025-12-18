# ✨ Features - What This Project Can Do

## 🎭 Icon Management System

### Centralized Icon Configuration
- **Single Source of Truth**: `icons-config.json` - centralized mapping for all technology icons
  - 61 local icons configured
  - 14 external icons mapped (Simple Icons CDN)
  - Organized by category (iOS, AI/ML, Web, Cloud, Databases, Tools, Companies)
- **Icon Utilities**: `scripts/icon-utils.js` - utility functions for icon access
  - `getIcon(techName)` - Get icon path and metadata
  - `getIconHTML(techName)` - Generate HTML img tags
  - `getIconsByCategory()` - Category-based retrieval
  - `verifyIcons()` - File integrity checks
- **Icon Synchronization**: `scripts/sync-icons.js` - syncs icon references across all HTML files
- **NPM Scripts**: `icons:sync`, `icons:verify`, `icons:list` for easy management

### Logo Fetching & Conversion
- **Automated Logo Fetching**: `fetch-logos.js` script fetches official logos from multiple sources
  - Simple Icons CDN (primary source)
  - GitHub raw URLs (for open-source projects)
  - Official brand asset pages
  - Intelligent fallback system
- **Image-to-SVG Conversion**: `image-to-svg.js` converts raster images to optimized SVG vectors
  - Uses Potrace for vectorization
  - SVGO optimization for file size
  - Handles PNG, JPG, and other raster formats

### Icon Collection
- **58 Official Technology Logos**: Curated collection of authentic brand assets
- **Organized Storage**: All icons in `Resume App Icon/` directory
- **Format Consistency**: All icons in SVG format for scalability
- **Brand Accuracy**: Official logos from verified sources

## 📸 Snapshot Testing Infrastructure

### Visual Regression Testing
- **Icon Catalog Page**: `icon-catalog-test.html` - Complete visual catalog of all icons
- **Automated Screenshot Capture**: Playwright-based screenshot automation
- **Local Testing Server**: HTTP server for local file testing
- **Test Documentation**: Comprehensive guides and instructions

### Testing Capabilities
- Catalog screenshot generation
- Resume file icon verification
- Visual comparison tools
- Automated test runners

## 📊 Table-Based Skills Portfolio

### Technical Skills Table Layout
- **4-Column Table Format**: Category | Specialized Domains | Tools & Technologies | Key Tech Icons
- **Light Theme**: Matches resume's teal-on-white aesthetic
- **Section Header**: Uses standard `section-title` styling
- **Compact Design**: Table layout is more scannable than card grid

### Skills Icon Gallery
- **27 Curated Icons**: Hand-selected from `Resume App Icon/` catalog
- **Category Distribution**:
  - Mobile: Swift, Realm, Vapor, Flutter, RxSwift, BLE
  - AI/ML: Python, PyTorch, TensorFlow, LangChain, LlamaIndex, n8n, OpenCV, Hugging Face
  - Cloud & DevOps: AWS, GCP, Azure, Docker, Supabase, Firebase, Jenkins
  - Data & Tools: PostgreSQL, MongoDB, ChromaDB, Redis, GraphQL, Figma

### Icon Visibility System
- **`.dark-icon` class**: Light gray background (#f1f5f9) for dark/black icons
  - AWS (no fill = defaults to black)
  - Firebase (amber blends on white)
  - Hugging Face (yellow emoji)
- **Fill Color Additions**:
  - `realm.svg` → Coral fill (#F46A52)
  - `chromadb.svg` → Amber fill (#FFB347)

## 🎨 Resume Collection

### Multiple Resume Formats
- **26+ HTML Resume Files**: Various formats and styles
- **Icon Integration**: Technology icons displayed throughout
- **Local Asset Management**: Company logos stored locally for reliability (PayPal, Morgan Stanley)
- **Chronological Organization**: Achievements sorted by year (newest first) for clear progression narrative
- **Curated Skills Presentation**: Skills consolidated into meaningful clusters (57 tags → 24 curated groups)
  - Semantic grouping with `skill-group` class for category headers
  - Related technologies grouped logically (Swift & Objective-C, LangChain | LlamaIndex)
  - Tells a story of interconnected expertise rather than just listing technologies
- **Responsive Design**: Works across devices and print
- **Modern Styling**: Dark themes, gradients, and professional layouts

### Key Resume Files
- `z-ai-resume-final.html` - Main comprehensive resume
- `index-resume-purple.html` - Alternative purple theme
- `KiloCode-Resume/skills-catalog.html` - Skills showcase
- `Claude-Resume-11-10-25.html` - Claude-generated format
- And 22+ more variations

## 🔧 Development Tools

### Scripts & Automation
- `fetch-logos.js` - Logo fetching automation
- `image-to-svg.js` - Image conversion tool
- `snapshot-test-icons.js` - Catalog generator
- `serve-and-screenshot.js` - Local testing server
- `screenshot-with-playwright.js` - Automated screenshots
- `run-snapshot-tests.sh` - Complete test suite

### NPM Scripts
- `npm run snapshot:setup` - Generate catalog and instructions
- `npm run snapshot:serve` - Start local server
- `npm run snapshot:test` - Run automated tests
- `npm run snapshot:all` - Complete test suite

## 📚 Documentation

### Guides & References
- `CHANGELOG.md` - Project history and changes
- `ROADMAP.md` - Future plans and priorities
- `FEATURES.md` - This file - feature documentation
- `snapshot-tests/README.md` - Testing documentation
- `scripts/MISSING_LOGOS.md` - Logo discovery guide

## 🌐 Browser Integration

### MCP Browser Tools
- Website navigation and inspection
- Logo URL extraction
- Network request monitoring
- Page snapshot capture
- Screenshot capabilities

## 🎯 Quality Assurance

### Icon Verification
- File existence checks
- Format validation (SVG)
- Display testing
- Visual regression testing
- Brand accuracy verification

### Testing Coverage
- All 58 icons cataloged
- 26 resume files identified
- Visual regression infrastructure
- Automated test capabilities

