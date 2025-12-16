#!/usr/bin/env node
/**
 * 🎭 The Icon Snapshot Testing Alchemist - Visual Regression Testing for Logos
 *
 * "From icons scattered, a catalog true,
 * Screenshots captured, visual proof in view.
 * With browser magic and pixels bright,
 * Every logo verified, day and night."
 *
 * - The Digital Metaphor Maestro
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// 🌟 Configuration
const ICON_DIR = path.join(__dirname, '..', 'Resume App Icon');
const OUTPUT_DIR = path.join(__dirname, '..', 'snapshot-tests');
const CATALOG_HTML = path.join(__dirname, '..', 'icon-catalog-test.html');

/**
 * 🎨 Generate Icon Catalog HTML - Creates a visual catalog of all icons
 */
async function generateIconCatalog() {
  console.log('🎨 ✨ GENERATING ICON CATALOG...');
  
  const icons = await fs.readdir(ICON_DIR);
  const svgIcons = icons.filter(f => f.endsWith('.svg')).sort();
  
  const iconList = svgIcons.map(icon => {
    const name = icon.replace('.svg', '').replace(/-/g, ' ');
    return { file: icon, name };
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Icon Catalog - Snapshot Test</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0a;
      color: #e5e7eb;
      padding: 40px 20px;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #22c55e, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle {
      color: #9ca3af;
      margin-bottom: 40px;
      font-size: 1.1rem;
    }
    .stats {
      display: flex;
      gap: 20px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    .stat-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 20px;
      min-width: 150px;
    }
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #22c55e;
    }
    .stat-label {
      font-size: 0.9rem;
      color: #9ca3af;
      margin-top: 5px;
    }
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .icon-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      transition: all 0.3s ease;
    }
    .icon-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: #22c55e;
      transform: translateY(-2px);
    }
    .icon-card img {
      width: 64px;
      height: 64px;
      margin-bottom: 12px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    }
    .icon-name {
      font-size: 0.9rem;
      color: #e5e7eb;
      font-weight: 500;
      text-transform: capitalize;
      word-break: break-word;
    }
    .icon-file {
      font-size: 0.75rem;
      color: #6b7280;
      margin-top: 5px;
      font-family: 'Monaco', 'Courier New', monospace;
    }
    .section-header {
      margin-top: 50px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid rgba(34, 197, 94, 0.3);
      font-size: 1.5rem;
      color: #22c55e;
    }
    .test-info {
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.3);
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 30px;
      font-size: 0.9rem;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎭 Icon Catalog - Snapshot Test</h1>
    <p class="subtitle">Complete visual catalog of all ${iconList.length} technology icons</p>
    
    <div class="test-info">
      <strong>📸 Snapshot Test:</strong> This page is used for visual regression testing.
      Generated: ${new Date().toISOString()}
    </div>
    
    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">${iconList.length}</div>
        <div class="stat-label">Total Icons</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${svgIcons.length}</div>
        <div class="stat-label">SVG Files</div>
      </div>
    </div>
    
    <div class="section-header">All Icons</div>
    <div class="icon-grid">
      ${iconList.map(icon => `
        <div class="icon-card">
          <img src="Resume App Icon/${icon.file}" alt="${icon.name}" 
               onerror="this.style.border='2px solid red'; this.alt='MISSING: ${icon.file}'">
          <div class="icon-name">${icon.name}</div>
          <div class="icon-file">${icon.file}</div>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;

  await fs.writeFile(CATALOG_HTML, html);
  console.log(`✅ Icon catalog generated: ${CATALOG_HTML}`);
  console.log(`   📊 Total icons: ${iconList.length}`);
  
  return CATALOG_HTML;
}

/**
 * 📋 Get All HTML Resume Files
 */
async function getResumeFiles() {
  const resumeDir = path.join(__dirname, '..');
  const files = await fs.readdir(resumeDir);
  
  return files
    .filter(f => f.endsWith('.html') && !f.includes('catalog') && !f.includes('test'))
    .map(f => path.join(resumeDir, f))
    .sort();
}

/**
 * 🎬 Run Snapshot Tests Using Browser Automation
 */
async function runSnapshotTests() {
  console.log('\n🎬 ✨ SNAPSHOT TESTING AWAKENS!');
  
  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const catalogPath = await generateIconCatalog();
  
  console.log('\n📸 Taking screenshots...');
  console.log('   (Note: This requires browser MCP tools to be available)');
  
  // Create test results summary
  const results = {
    timestamp,
    catalog: {
      path: catalogPath,
      screenshot: path.join(OUTPUT_DIR, `icon-catalog-${timestamp}.png`)
    },
    resumes: []
  };
  
  const resumeFiles = await getResumeFiles();
  console.log(`\n📄 Found ${resumeFiles.length} resume files to test`);
  
  // Save test manifest
  const manifest = {
    timestamp,
    totalIcons: (await fs.readdir(ICON_DIR)).filter(f => f.endsWith('.svg')).length,
    catalogPath,
    resumeFiles: resumeFiles.map(f => path.basename(f)),
    instructions: `
To complete snapshot testing:
1. Use browser MCP tools to navigate to: file://${catalogPath}
2. Take screenshot and save to: ${results.catalog.screenshot}
3. For each resume file, navigate and screenshot icon sections
4. Compare screenshots visually or use image diff tools
    `
  };
  
  await fs.writeFile(
    path.join(OUTPUT_DIR, `test-manifest-${timestamp}.json`),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`\n✅ Test manifest saved: ${path.join(OUTPUT_DIR, `test-manifest-${timestamp}.json`)}`);
  console.log(`\n📋 Next steps:`);
  console.log(`   1. Open catalog: file://${catalogPath}`);
  console.log(`   2. Use browser MCP to take screenshots`);
  console.log(`   3. Test each resume file's icon sections`);
  
  return results;
}

// 🌟 The Grand Orchestration
(async () => {
  try {
    await runSnapshotTests();
    console.log('\n🎉 ✨ SNAPSHOT TEST SETUP COMPLETE!');
  } catch (error) {
    console.error('💥 😭 SNAPSHOT TEST SETUP FAILED!');
    console.error(`🌩️ Error: ${error.message}`);
    process.exit(1);
  }
})();

