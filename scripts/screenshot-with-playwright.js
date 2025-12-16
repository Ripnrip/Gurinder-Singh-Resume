#!/usr/bin/env node
/**
 * 🎭 The Playwright Screenshot Alchemist - Visual Snapshot Testing
 *
 * "With Playwright magic, pixels we capture,
 * Every icon verified, visual rapture.
 * From catalog to resumes, screenshots true,
 * Visual proof of logos, old and new."
 *
 * - The Digital Metaphor Maestro
 */

const fs = require('fs').promises;
const path = require('path');

// Check if playwright is available
let playwright;
try {
  playwright = require('playwright');
} catch (e) {
  console.error('💥 😭 Playwright not found!');
  console.error('   Install with: npm install playwright');
  console.error('   Then run: npx playwright install chromium');
  process.exit(1);
}

const PORT = 8080;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = path.join(__dirname, '..', 'snapshot-tests');

/**
 * 📋 Get HTML Resume Files
 */
async function getResumeFiles() {
  const resumeDir = path.join(__dirname, '..');
  const files = await fs.readdir(resumeDir);
  return files
    .filter(f => f.endsWith('.html') && !f.includes('catalog') && !f.includes('test'))
    .sort();
}

/**
 * 📸 Take Screenshot
 */
async function takeScreenshot(page, url, outputPath, options = {}) {
  console.log(`📸 Capturing: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(options.waitTime || 1000);
  
  if (options.scrollTo) {
    await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, options.scrollTo);
    await page.waitForTimeout(500);
  }
  
  await page.screenshot({
    path: outputPath,
    fullPage: options.fullPage !== false,
    type: 'png'
  });
  
  console.log(`   ✅ Saved: ${outputPath}`);
}

/**
 * 🎬 Run All Screenshot Tests
 */
async function runScreenshotTests() {
  console.log('🎬 ✨ SCREENSHOT TESTING AWAKENS!\n');
  
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  try {
    // 1. Catalog Screenshot
    console.log('📋 Step 1: Icon Catalog');
    const catalogPath = path.join(OUTPUT_DIR, `icon-catalog-${timestamp}.png`);
    await takeScreenshot(
      page,
      `${BASE_URL}/icon-catalog-test.html`,
      catalogPath,
      { fullPage: true }
    );
    
    // 2. Key Resume Files
    console.log('\n📋 Step 2: Key Resume Files');
    const keyResumes = [
      'z-ai-resume-final.html',
      'index-resume-purple.html',
      'KiloCode-Resume/skills-catalog.html',
      'Claude-Resume-11-10-25.html',
      'index.html'
    ];
    
    for (const resume of keyResumes) {
      const resumePath = path.join(__dirname, '..', resume);
      try {
        await fs.access(resumePath);
        const outputPath = path.join(
          OUTPUT_DIR,
          `resume-${resume.replace(/\//g, '-').replace('.html', '')}-${timestamp}.png`
        );
        await takeScreenshot(
          page,
          `${BASE_URL}/${resume}`,
          outputPath,
          { fullPage: true, scrollTo: '.skill, .tech, [class*="icon"], [class*="logo"]' }
        );
      } catch (e) {
        console.log(`   ⚠️  Skipping ${resume} (not found)`);
      }
    }
    
    // 3. All Resume Files (optional, can be enabled)
    const allResumes = await getResumeFiles();
    console.log(`\n📋 Step 3: All Resume Files (${allResumes.length} total)`);
    console.log('   (Skipping full run - uncomment in script to enable)');
    
    // Uncomment to test all resumes:
    /*
    for (const resume of allResumes.slice(0, 10)) { // Limit to first 10
      const resumeName = path.basename(resume);
      const outputPath = path.join(
        OUTPUT_DIR,
        `resume-${resumeName.replace('.html', '')}-${timestamp}.png`
      );
      await takeScreenshot(
        page,
        `file://${resume}`,
        outputPath,
        { fullPage: false, scrollTo: '.skill, .tech' }
      );
    }
    */
    
    console.log('\n🎉 ✨ SCREENSHOT TESTING COMPLETE!');
    console.log(`📁 Screenshots saved to: ${OUTPUT_DIR}`);
    
  } finally {
    await browser.close();
  }
}

// Check if server is running
const http = require('http');
const checkServer = () => {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}`, (res) => {
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
};

// Main execution
(async () => {
  const serverRunning = await checkServer();
  if (!serverRunning) {
    console.error('💥 😭 Local server not running!');
    console.error(`   Start server with: node scripts/serve-and-screenshot.js`);
    console.error('   Or run: ./scripts/run-snapshot-tests.sh');
    process.exit(1);
  }
  
  await runScreenshotTests();
})().catch(error => {
  console.error('💥 😭 SCREENSHOT TESTING FAILED!');
  console.error(`🌩️ Error: ${error.message}`);
  process.exit(1);
});

