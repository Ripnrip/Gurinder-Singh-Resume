#!/usr/bin/env node
/**
 * 🎭 The Comprehensive Screenshot Generator
 *
 * Takes full page and skills section screenshots for all HTML pages
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
const OUTPUT_DIR = path.join(__dirname, '..', 'snapshot-tests', 'all-pages');

// Files to exclude
const EXCLUDE_PATTERNS = [
  '**/node_modules/**',
  '**/playwright-report/**',
  '**/playwright-results/**',
  '**/snapshot-tests/**',
  '**/icon-catalog-test.html',
  '**/portfolio.html',
  '**/resume-skills-summary.html'
];

/**
 * 📋 Get All HTML Files
 */
async function getAllHtmlFiles(dir = null, baseDir = null, results = []) {
  if (!dir) {
    dir = path.join(__dirname, '..');
    baseDir = dir;
  }
  
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
    
    // Check if should be excluded
    const shouldExclude = EXCLUDE_PATTERNS.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
      return regex.test(relativePath) || regex.test(entry.name);
    });
    
    if (shouldExclude) {
      continue;
    }
    
    if (entry.isDirectory()) {
      await getAllHtmlFiles(fullPath, baseDir, results);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(relativePath);
    }
  }
  
  return results.sort();
}

/**
 * 🔍 Find Skills Section Selector
 */
async function findSkillsSection(page) {
  // Common selectors for skills sections
  const selectors = [
    '[class*="skill"]',
    '[class*="tech"]',
    '[class*="technology"]',
    '[id*="skill"]',
    '[id*="tech"]',
    'section[class*="skill"]',
    'section[class*="tech"]',
    '.skills',
    '.technologies',
    '#skills',
    '#technologies',
    '[data-section="skills"]',
    '[data-section="technologies"]'
  ];

  for (const selector of selectors) {
    try {
      const element = await page.$(selector);
      if (element) {
        const boundingBox = await element.boundingBox();
        if (boundingBox && boundingBox.height > 100) { // Ensure it's substantial
          return selector;
        }
      }
    } catch (e) {
      // Continue to next selector
    }
  }

  // Try to find by text content
  try {
    const skillsText = await page.evaluate(() => {
      const texts = ['Skills', 'Technologies', 'Technical Skills', 'Core Competencies'];
      for (const text of texts) {
        const element = document.evaluate(
          `//*[contains(text(), "${text}")]`,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
        if (element) {
          // Find parent section or container
          let parent = element;
          for (let i = 0; i < 5; i++) {
            parent = parent.parentElement;
            if (parent && (parent.tagName === 'SECTION' || parent.classList.contains('section') || parent.id)) {
              return parent;
            }
          }
          return element;
        }
      }
      return null;
    });

    if (skillsText) {
      // Get a selector for this element
      const selector = await page.evaluate((el) => {
        if (el.id) return `#${el.id}`;
        if (el.className) {
          const classes = el.className.split(' ').filter(c => c).join('.');
          if (classes) return `.${classes}`;
        }
        return el.tagName.toLowerCase();
      }, skillsText);
      return selector;
    }
  } catch (e) {
    // Continue
  }

  return null;
}

/**
 * 📸 Take Screenshots for a Page
 */
async function screenshotPage(page, htmlFile, index, total) {
  const fileName = path.basename(htmlFile, '.html');
  const relativePath = htmlFile.replace(/^\.\//, '');
  const url = `${BASE_URL}/${relativePath}`;
  
  console.log(`\n[${index + 1}/${total}] 📄 Processing: ${relativePath}`);
  
  try {
    // Navigate to page
    console.log(`   🌐 Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000); // Wait for any animations/loading
    
    // 1. Full page screenshot
    const fullPagePath = path.join(OUTPUT_DIR, `${fileName}-fullpage.png`);
    console.log(`   📸 Taking full page screenshot...`);
    await page.screenshot({
      path: fullPagePath,
      fullPage: true,
      type: 'png'
    });
    console.log(`   ✅ Saved: ${fullPagePath}`);
    
    // 2. Skills section screenshot
    console.log(`   🔍 Finding skills section...`);
    const skillsSelector = await findSkillsSection(page);
    
    if (skillsSelector) {
      try {
        const element = await page.$(skillsSelector);
        if (element) {
          const skillsPath = path.join(OUTPUT_DIR, `${fileName}-skills.png`);
          console.log(`   📸 Taking skills section screenshot (selector: ${skillsSelector})...`);
          await element.screenshot({
            path: skillsPath,
            type: 'png'
          });
          console.log(`   ✅ Saved: ${skillsPath}`);
        } else {
          console.log(`   ⚠️  Skills selector found but element not visible`);
        }
      } catch (e) {
        console.log(`   ⚠️  Could not screenshot skills section: ${e.message}`);
      }
    } else {
      console.log(`   ⚠️  No skills section found - skipping skills screenshot`);
      // Try to take a screenshot of any section with icons
      try {
        const iconSection = await page.evaluate(() => {
          // Look for sections with SVG or img elements
          const sections = document.querySelectorAll('section, div[class*="section"], div[id*="section"]');
          for (const section of sections) {
            const icons = section.querySelectorAll('svg, img[src*="icon"], [class*="icon"]');
            if (icons.length > 3) {
              return section;
            }
          }
          return null;
        });
        
        if (iconSection) {
          const iconSelector = await page.evaluate((el) => {
            if (el.id) return `#${el.id}`;
            if (el.className) {
              const classes = el.className.split(' ').filter(c => c).join('.');
              if (classes) return `.${classes}`;
            }
            return null;
          }, iconSection);
          
          if (iconSelector) {
            const element = await page.$(iconSelector);
            if (element) {
              const skillsPath = path.join(OUTPUT_DIR, `${fileName}-skills.png`);
              await element.screenshot({
                path: skillsPath,
                type: 'png'
              });
              console.log(`   ✅ Saved skills section (found by icons): ${skillsPath}`);
            }
          }
        }
      } catch (e) {
        console.log(`   ⚠️  Could not find alternative skills section`);
      }
    }
    
  } catch (error) {
    console.error(`   💥 Error processing ${relativePath}: ${error.message}`);
  }
}

/**
 * 🎬 Main Execution
 */
async function main() {
  console.log('🎬 ✨ COMPREHENSIVE SCREENSHOT GENERATION AWAKENS!\n');
  
  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Get all HTML files
  console.log('📋 Finding all HTML files...');
  const htmlFiles = await getAllHtmlFiles();
  console.log(`   Found ${htmlFiles.length} HTML files\n`);
  
  if (htmlFiles.length === 0) {
    console.log('⚠️  No HTML files found!');
    process.exit(1);
  }
  
  // Launch browser
  console.log('🌐 Launching browser...');
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  try {
    // Process each file
    for (let i = 0; i < htmlFiles.length; i++) {
      await screenshotPage(page, htmlFiles[i], i, htmlFiles.length);
    }
    
    console.log('\n🎉 ✨ SCREENSHOT GENERATION COMPLETE!');
    console.log(`📁 Screenshots saved to: ${OUTPUT_DIR}`);
    console.log(`📊 Total files processed: ${htmlFiles.length}`);
    
  } catch (error) {
    console.error('\n💥 😭 SCREENSHOT GENERATION FAILED!');
    console.error(`🌩️ Error: ${error.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error('💥 😭 FATAL ERROR!');
  console.error(`🌩️ Error: ${error.message}`);
  process.exit(1);
});

