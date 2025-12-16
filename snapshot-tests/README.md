# 🎭 Icon Snapshot Testing - Visual Regression Tests

## Overview

This directory contains snapshot tests for verifying all technology icons/logos are correctly displayed in:
1. **Icon Catalog** - Complete visual catalog of all 58+ icons
2. **HTML Resumes** - Icon displays in all resume files

## Quick Start

### Option 1: Automated Testing (Requires Playwright)

```bash
# Install Playwright (one-time setup)
npm install playwright
npx playwright install chromium

# Run automated screenshot tests
npm run snapshot:test
```

### Option 2: Manual Testing with Browser MCP

```bash
# Start local server
npm run snapshot:serve

# In another terminal, use browser MCP tools to:
# 1. Navigate to http://localhost:8080/icon-catalog-test.html
# 2. Take screenshots of icon sections
# 3. Save screenshots to snapshot-tests/ directory
```

### Option 3: Complete Test Suite

```bash
# Run complete test setup
./scripts/run-snapshot-tests.sh
```

## Test Structure

```
snapshot-tests/
├── icon-catalog-<timestamp>.png      # Full icon catalog screenshot
├── resume-<name>-<timestamp>.png      # Individual resume screenshots
├── test-manifest-<timestamp>.json     # Test metadata
└── screenshot-instructions-<timestamp>.json  # Detailed instructions
```

## What Gets Tested

### 1. Icon Catalog (`icon-catalog-test.html`)
- ✅ All 58+ SVG icons load correctly
- ✅ Icons display at proper size (64x64px)
- ✅ Icon names are readable
- ✅ No broken/missing icons
- ✅ Grid layout is responsive

### 2. Resume Files (26+ HTML files)
- ✅ Icons appear in skills sections
- ✅ Icons are properly sized
- ✅ Icons match technology names
- ✅ No broken image references
- ✅ Icons render correctly in context

## Key Resume Files to Test

Priority resume files for icon verification:

1. **z-ai-resume-final.html** - Main resume with comprehensive skills
2. **index-resume-purple.html** - Alternative resume format
3. **KiloCode-Resume/skills-catalog.html** - Skills catalog reference
4. **Claude-Resume-11-10-25.html** - Claude-generated resume
5. **index.html** - Main index page

## Verification Checklist

For each screenshot, verify:

- [ ] All icons load (no broken images)
- [ ] Icons are crisp and clear (not pixelated)
- [ ] Icons match their technology names
- [ ] Icon sizes are consistent
- [ ] Icons have proper spacing
- [ ] Dark/light theme compatibility
- [ ] Responsive layout works

## Icon Locations in Resumes

Icons typically appear in:

- **Skills Sections** - Technology tags with icons
- **Cloud/DevOps Sections** - AWS, Azure, GCP icons
- **AI/ML Sections** - LangChain, LlamaIndex, etc.
- **Database Sections** - PostgreSQL, MongoDB, etc.
- **Framework Sections** - React, Next.js, SwiftUI, etc.

## Troubleshooting

### Icons Not Loading
1. Check file paths in HTML files
2. Verify icons exist in `Resume App Icon/` directory
3. Check server is serving files correctly
4. Verify SVG files are valid

### Screenshots Not Capturing Icons
1. Scroll to icon sections before screenshot
2. Wait for images to load (use `waitForTimeout`)
3. Use `fullPage: true` for complete page capture
4. Check viewport size is sufficient

### Server Not Starting
```bash
# Check if port 8080 is in use
lsof -i :8080

# Use different port (edit serve-and-screenshot.js)
PORT=8081 node scripts/serve-and-screenshot.js
```

## Updating Tests

When adding new icons:

1. Add icon to `Resume App Icon/` directory
2. Regenerate catalog: `npm run snapshot:setup`
3. Update resume HTML files to use new icons
4. Run snapshot tests: `npm run snapshot:test`
5. Review screenshots for correctness

## Reference Images

Reference images showing correct icon usage:
- `Reference_Material/Skills-Catalog-Valid-Icons.png`
- `Reference_Material/Z-AI-Resume-Missing-Actual-Icons.png`

Compare new screenshots against these references.

## Scripts Reference

- `scripts/snapshot-test-icons.js` - Generate icon catalog HTML
- `scripts/take-icon-screenshots.js` - Generate screenshot instructions
- `scripts/serve-and-screenshot.js` - Local HTTP server
- `scripts/screenshot-with-playwright.js` - Automated screenshot capture
- `scripts/run-snapshot-tests.sh` - Complete test runner

## Best Practices

1. **Always test catalog first** - Ensures all icons are available
2. **Test key resumes** - Focus on most-used resume formats
3. **Compare against references** - Use existing reference images
4. **Document failures** - Note which icons/resumes have issues
5. **Update regularly** - Run tests when adding new icons

## Next Steps

After running tests:

1. Review all screenshots
2. Identify any broken/missing icons
3. Fix icon paths or regenerate missing icons
4. Re-run tests to verify fixes
5. Commit screenshots as visual regression baselines

