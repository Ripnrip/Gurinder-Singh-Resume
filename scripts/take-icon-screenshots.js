#!/usr/bin/env node
/**
 * 🎭 The Screenshot Capture Alchemist - Takes Visual Snapshots of Icons
 *
 * "With browser magic, pixels we capture,
 * Every icon verified, visual rapture.
 * From catalog to resumes, screenshots true,
 * Visual proof of logos, old and new."
 *
 * - The Digital Metaphor Maestro
 */

const fs = require('fs').promises;
const path = require('path');

// 🌟 Configuration
const CATALOG_HTML = path.join(__dirname, '..', 'icon-catalog-test.html');
const OUTPUT_DIR = path.join(__dirname, '..', 'snapshot-tests');
const RESUME_DIR = path.join(__dirname, '..');

/**
 * 📋 Get HTML Resume Files
 */
async function getResumeFiles() {
  const files = await fs.readdir(RESUME_DIR);
  return files
    .filter(f => f.endsWith('.html') && !f.includes('catalog') && !f.includes('test'))
    .sort();
}

/**
 * 🎬 Generate Screenshot Instructions for Browser MCP
 */
async function generateScreenshotInstructions() {
  console.log('🎬 ✨ GENERATING SCREENSHOT INSTRUCTIONS...\n');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const catalogPath = `file://${CATALOG_HTML}`;
  const resumeFiles = await getResumeFiles();
  
  const instructions = {
    timestamp,
    catalog: {
      url: catalogPath,
      screenshotPath: path.join(OUTPUT_DIR, `icon-catalog-${timestamp}.png`),
      description: 'Full icon catalog showing all 58 technology logos'
    },
    resumes: resumeFiles.map(file => ({
      name: file,
      url: `file://${path.join(RESUME_DIR, file)}`,
      screenshotPath: path.join(OUTPUT_DIR, `resume-${file.replace('.html', '')}-${timestamp}.png`),
      iconSections: [
        'Skills section',
        'Technology icons',
        'Cloud/DevOps icons',
        'AI/ML icons'
      ]
    })),
    steps: [
      {
        step: 1,
        action: 'Navigate to catalog',
        url: catalogPath,
        screenshot: `icon-catalog-${timestamp}.png`,
        notes: 'Scroll through entire page to capture all icons'
      },
      ...resumeFiles.map((file, idx) => ({
        step: idx + 2,
        action: `Test resume: ${file}`,
        url: `file://${path.join(RESUME_DIR, file)}`,
        screenshot: `resume-${file.replace('.html', '')}-${timestamp}.png`,
        notes: 'Scroll to skills/technology sections and capture icon displays'
      }))
    ]
  };
  
  // Save instructions
  const instructionsPath = path.join(OUTPUT_DIR, `screenshot-instructions-${timestamp}.json`);
  await fs.writeFile(instructionsPath, JSON.stringify(instructions, null, 2));
  
  console.log('✅ Screenshot instructions generated!\n');
  console.log('📋 MANUAL SCREENSHOT STEPS:\n');
  console.log(`1. Catalog Screenshot:`);
  console.log(`   URL: ${catalogPath}`);
  console.log(`   Save as: ${instructions.catalog.screenshotPath}\n`);
  
  console.log(`2. Resume Screenshots (${resumeFiles.length} files):`);
  resumeFiles.slice(0, 5).forEach(file => {
    console.log(`   - ${file}`);
  });
  if (resumeFiles.length > 5) {
    console.log(`   ... and ${resumeFiles.length - 5} more`);
  }
  
  console.log(`\n📄 Full instructions saved to: ${instructionsPath}`);
  console.log(`\n💡 Use browser MCP tools to:`);
  console.log(`   1. Navigate to each URL`);
  console.log(`   2. Scroll to icon sections`);
  console.log(`   3. Take screenshots`);
  console.log(`   4. Save with specified filenames`);
  
  return instructions;
}

// 🌟 The Grand Orchestration
(async () => {
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await generateScreenshotInstructions();
    console.log('\n🎉 ✨ INSTRUCTIONS GENERATED!');
  } catch (error) {
    console.error('💥 😭 FAILED TO GENERATE INSTRUCTIONS!');
    console.error(`🌩️ Error: ${error.message}`);
    process.exit(1);
  }
})();

