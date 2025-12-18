# 🎭 Playwright Icon Verification Tests

## Overview

Automated visual regression and icon verification tests for all resume files. These tests verify that:
- Icons load correctly (no broken images)
- Icons display properly in context
- Screenshots are captured for visual comparison
- Icon files exist in the directory

## Test Files

### `icon-verification.spec.js`
Comprehensive test suite that:
- ✅ Verifies local server is running
- ✅ Tests icon catalog page
- ✅ Tests 5 key resume files
- ✅ Verifies icons load without errors
- ✅ Takes screenshots of icon sections
- ✅ Validates icon files exist

## Tested Resumes

1. **z-ai-resume-final.html** - Main comprehensive resume
2. **index-resume-purple.html** - Purple theme variant
3. **KiloCode-Resume/skills-catalog.html** - Skills catalog
4. **Claude-Resume-11-10-25.html** - Claude-generated format
5. **icon-catalog-test.html** - Icon catalog page

## Running Tests

### Prerequisites
```bash
# Install Playwright browsers (one-time)
npx playwright install chromium

# Ensure local server is running
npm run snapshot:serve
```

### Run All Tests
```bash
npm test
```

### Run Specific Test File
```bash
npm run test:icon-verification
```

### Run in UI Mode (Interactive)
```bash
npm run test:ui
```

### Run in Headed Mode (See Browser)
```bash
npm run test:headed
```

### Debug Tests
```bash
npm run test:debug
```

## Test Output

Screenshots are saved to:
- `snapshot-tests/playwright-screenshots/` - Test screenshots
- `snapshot-tests/playwright-results/` - Test results
- `snapshot-tests/playwright-report/` - HTML test report

## What Gets Tested

### Icon Loading
- ✅ No broken images (naturalHeight > 0)
- ✅ Icons load from correct paths
- ✅ Icon count verification

### Visual Verification
- ✅ Full page screenshots
- ✅ Icon section screenshots
- ✅ Scroll-to-icon functionality

### File System
- ✅ Icon files exist in directory
- ✅ Key icons are present
- ✅ SVG format validation

## Test Structure

```javascript
test('Resume Name - Icons load correctly', async ({ page }) => {
  // 1. Navigate to resume
  // 2. Wait for page load
  // 3. Find icon elements
  // 4. Verify icons load
  // 5. Take screenshots
  // 6. Assert no broken images
});
```

## Configuration

See `playwright.config.js` for:
- Browser settings
- Screenshot configuration
- Timeout settings
- Reporter configuration

## Troubleshooting

### Server Not Running
```bash
# Start server in separate terminal
npm run snapshot:serve
```

### Tests Timeout
- Increase timeout in `playwright.config.js`
- Check server is responding
- Verify resume files exist

### Screenshots Not Saving
- Check `snapshot-tests/playwright-screenshots/` directory exists
- Verify write permissions
- Check disk space

## Adding More Tests

To add a new resume to test:

1. Add to `TEST_RESUMES` array in `icon-verification.spec.js`
2. Specify icon selectors for that resume
3. Run tests to verify

Example:
```javascript
{
  name: 'new-resume',
  file: 'new-resume.html',
  description: 'New resume format',
  iconSelectors: ['img[src*="icon"]', '.skill img']
}
```

