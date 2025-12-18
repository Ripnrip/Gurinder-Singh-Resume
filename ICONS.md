# 🎭 Centralized Icon System

**Single Source of Truth** for all technology icons used across resume files.

## Overview

All icons are centrally managed through `icons-config.json`, similar to how `resume-content.md` serves as the single source of truth for resume content.

## File Structure

```
Resume App Icon/          # Local SVG/PNG icon files
icons-config.json         # Centralized icon mapping configuration
scripts/
  ├── icon-utils.js      # Utility functions for icon access
  └── sync-icons.js      # Script to sync icons across all HTML files
```

## Configuration File: `icons-config.json`

The configuration file contains:

- **`iconBasePath`**: Base directory for local icons (default: `"Resume App Icon"`)
- **`icons`**: Local icon mappings organized by category
- **`externalIcons`**: External icon URLs (Simple Icons CDN, etc.)
- **`missingIcons`**: List of technologies that need icons

### Icon Entry Structure

```json
{
  "TechName": {
    "file": "tech-name.svg",
    "alt": "Technology Name",
    "category": "Category Name"
  }
}
```

## Usage

### In Node.js Scripts

```javascript
const { getIcon, getIconHTML } = require('./scripts/icon-utils');

// Get icon info
const swiftIcon = getIcon('Swift');
// Returns: { path: 'Resume App Icon/swift.svg', alt: 'Swift', ... }

// Generate HTML
const html = getIconHTML('Swift', { className: 'skill-icon' });
// Returns: '<img src="Resume App Icon/swift.svg" alt="Swift" class="skill-icon">'
```

### In HTML Files

#### Option 1: Direct Path (Recommended)
```html
<img src="Resume App Icon/swift.svg" alt="Swift" class="skill-icon">
```

#### Option 2: JavaScript ICON_MAP
```javascript
const ICON_MAP = {
  'Swift': 'Resume App Icon/swift.svg',
  'Python': 'Resume App Icon/python.svg',
  // ... generated from icons-config.json
};
```

### Synchronizing Icons

Run the sync script to update all HTML files with consistent icon paths:

```bash
node scripts/sync-icons.js
```

This will:
- Find all HTML resume files
- Extract icon references
- Update them to use paths from `icons-config.json`
- Ensure consistency across all files

## Adding New Icons

1. **Add the icon file** to `Resume App Icon/` directory
2. **Update `icons-config.json`**:
   ```json
   "NewTech": {
     "file": "new-tech.svg",
     "alt": "New Technology",
     "category": "Category Name"
   }
   ```
3. **Run sync script** to update all HTML files:
   ```bash
   node scripts/sync-icons.js
   ```

## Icon Categories

- **iOS & Mobile Engineering**: Swift, SwiftUI, UIKit, Core ML, etc.
- **AI/ML & Agentic Systems**: Python, PyTorch, TensorFlow, LlamaIndex, etc.
- **Web & Backend**: JavaScript, TypeScript, Node.js, Next.js, GraphQL
- **Cloud, DevOps & Reliability**: AWS, Azure, GCP, Docker, etc.
- **Databases**: PostgreSQL, MongoDB, Redis, DynamoDB, etc.
- **Tools & Services**: GitHub, Figma, Vercel, Firebase, etc.
- **Companies**: Morgan Stanley, etc.

## External Icons

Some icons are served from external sources (Simple Icons CDN):

- Objective-C
- MLX
- SwiftData
- Flutter
- React
- etc.

These are defined in `icons-config.json` under `externalIcons`.

## Verification

Check icon file integrity:

```bash
node -e "const { verifyIcons } = require('./scripts/icon-utils'); const report = verifyIcons(); console.log('Found:', report.found, 'Missing:', report.missing);"
```

## Best Practices

1. ✅ **Always use `icons-config.json`** as the source of truth
2. ✅ **Run sync script** after adding new icons
3. ✅ **Use consistent naming**: kebab-case for files, Title Case for display
4. ✅ **Verify icons exist** before adding to config
5. ✅ **Document missing icons** in `missingIcons` array

## Related Files

- `resume-content.md` - Single source of truth for resume content
- `scripts/fetch-logos.js` - Script to fetch official logos from the web
- `scripts/image-to-svg.js` - Script to convert images to SVG icons

