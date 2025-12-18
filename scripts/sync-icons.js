#!/usr/bin/env node

/**
 * 🔄 The Icon Synchronization Script
 * 
 * Syncs icon references across all HTML resume files using the centralized icons-config.json
 * Ensures all resumes use consistent icon paths and naming.
 */

const fs = require('fs');
const path = require('path');
const { getIcon, generateIconMapJS } = require('./icon-utils');

// 🌟 Configuration
const RESUME_DIR = path.join(__dirname, '..');
const ICON_BASE_PATH = 'Resume App Icon';

/**
 * 🎭 Find all HTML resume files
 */
function findResumeFiles() {
  const files = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip node_modules, .git, and other non-resume directories
      if (entry.isDirectory()) {
        if (!['node_modules', '.git', 'snapshot-tests', 'legacy'].includes(entry.name)) {
          walkDir(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        // Skip test files and catalog files
        if (!entry.name.includes('test') && !entry.name.includes('catalog')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(RESUME_DIR);
  return files;
}

/**
 * 🔍 Extract icon references from HTML
 */
function extractIconReferences(htmlContent) {
  const references = [];
  
  // Match various patterns:
  // - <img src="Resume App Icon/icon.svg">
  // - <img src="icons/icon.svg">
  // - src="Resume App Icon/icon.svg"
  // - ICON_MAP['Tech'] = 'path/to/icon.svg'
  
  const patterns = [
    /src=["']([^"']*Resume App Icon[^"']*\.(svg|png|jpg))["']/gi,
    /src=["']([^"']*icons[^"']*\.(svg|png|jpg))["']/gi,
    /['"]([^'"]*\.(svg|png|jpg))['"]/g
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(htmlContent)) !== null) {
      references.push(match[1]);
    }
  });
  
  return [...new Set(references)]; // Remove duplicates
}

/**
 * 📝 Update icon references in HTML content
 */
function updateIconReferences(htmlContent, filePath) {
  let updated = htmlContent;
  const relativePath = path.relative(RESUME_DIR, path.dirname(filePath));
  const basePath = relativePath ? path.join(relativePath, ICON_BASE_PATH).replace(/\\/g, '/') : ICON_BASE_PATH;
  
  // Replace direct icon paths
  // Pattern: Resume App Icon/icon-name.svg or icons/icon-name.svg
  updated = updated.replace(
    /src=["']([^"']*)(?:Resume App Icon|icons)\/([^"']+\.(svg|png|jpg))["']/gi,
    (match, prefix, iconFile) => {
      // Try to find the tech name from the icon file
      const techName = iconFile.replace(/\.(svg|png|jpg)$/i, '').replace(/-/g, ' ');
      const icon = getIcon(techName, basePath, true);
      
      if (icon) {
        return `src="${icon.path}"`;
      }
      // Keep original if not found
      return match;
    }
  );
  
  // Update ICON_MAP JavaScript objects
  const iconMapPattern = /const\s+ICON_MAP\s*=\s*\{[\s\S]*?\};/g;
  updated = updated.replace(iconMapPattern, () => {
    return generateIconMapJS(basePath);
  });
  
  return updated;
}

/**
 * 🎯 Main synchronization function
 */
function syncIcons() {
  console.log('🔄 ✨ ICON SYNCHRONIZATION AWAKENS!');
  console.log('');
  
  const resumeFiles = findResumeFiles();
  console.log(`📁 Found ${resumeFiles.length} resume files to process`);
  console.log('');
  
  let updatedCount = 0;
  let skippedCount = 0;
  
  resumeFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const references = extractIconReferences(content);
      
      if (references.length > 0) {
        const updated = updateIconReferences(content, filePath);
        
        if (updated !== content) {
          fs.writeFileSync(filePath, updated, 'utf8');
          console.log(`✅ Updated: ${path.relative(RESUME_DIR, filePath)}`);
          console.log(`   Found ${references.length} icon references`);
          updatedCount++;
        } else {
          console.log(`⏭️  Skipped: ${path.relative(RESUME_DIR, filePath)} (already up to date)`);
          skippedCount++;
        }
      } else {
        console.log(`⏭️  Skipped: ${path.relative(RESUME_DIR, filePath)} (no icon references)`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('');
  console.log('🎉 ✨ SYNCHRONIZATION COMPLETE!');
  console.log(`   ✅ Updated: ${updatedCount} files`);
  console.log(`   ⏭️  Skipped: ${skippedCount} files`);
}

// Run if executed directly
if (require.main === module) {
  syncIcons();
}

module.exports = { syncIcons, findResumeFiles, updateIconReferences };

