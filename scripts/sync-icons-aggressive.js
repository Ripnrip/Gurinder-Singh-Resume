#!/usr/bin/env node

/**
 * 🔄 The Aggressive Icon Synchronization Script
 * 
 * Aggressively syncs ALL icon references across all HTML resume files using the centralized icons-config.json
 * Handles multiple patterns: direct paths, ICON_MAP objects, inline references
 */

const fs = require('fs');
const path = require('path');
const { getIcon, generateIconMapJS, loadIconConfig } = require('./icon-utils');

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
 * 🔍 Build reverse lookup: filename -> tech name
 */
function buildIconReverseLookup() {
  const config = loadIconConfig();
  const lookup = {};
  
  // Local icons
  Object.values(config.icons).forEach(category => {
    Object.entries(category).forEach(([techName, icon]) => {
      const fileName = icon.file.toLowerCase().replace(/\.(svg|png|jpg)$/i, '');
      lookup[fileName] = techName;
      // Also map with extension
      lookup[icon.file.toLowerCase()] = techName;
    });
  });
  
  return lookup;
}

/**
 * 🎯 Extract tech name from icon filename
 */
function getTechNameFromFile(iconFile) {
  const reverseLookup = buildIconReverseLookup();
  const baseName = path.basename(iconFile, path.extname(iconFile)).toLowerCase();
  return reverseLookup[baseName] || reverseLookup[iconFile.toLowerCase()] || null;
}

/**
 * 📝 Aggressively update icon references in HTML content
 */
function updateIconReferencesAggressive(htmlContent, filePath) {
  let updated = htmlContent;
  const relativePath = path.relative(RESUME_DIR, path.dirname(filePath));
  const basePath = relativePath ? path.join(relativePath, ICON_BASE_PATH).replace(/\\/g, '/') : ICON_BASE_PATH;
  
  // Pattern 1: Replace direct icon paths (icons/icon-name.svg or Resume App Icon/icon-name.svg)
  updated = updated.replace(
    /src=["']([^"']*)(?:icons\/|Resume App Icon\/)([^"']+\.(svg|png|jpg))["']/gi,
    (match, prefix, iconFile, ext) => {
      const techName = getTechNameFromFile(iconFile);
      if (techName) {
        const icon = getIcon(techName, basePath);
        if (icon) {
          return `src="${icon.path}"`;
        }
      }
      // Fallback: use Resume App Icon path
      return `src="${basePath}/${iconFile}"`;
    }
  );
  
  // Pattern 2: Replace ICON_MAP JavaScript objects
  const iconMapPattern = /const\s+ICON_MAP\s*=\s*\{[\s\S]*?\};/g;
  updated = updated.replace(iconMapPattern, () => {
    return generateIconMapJS(basePath);
  });
  
  // Pattern 3: Replace inline icon references in skill pills/tags
  // Look for patterns like: <img src="icons/swift.svg" or <img src="Resume App Icon/swift.svg"
  updated = updated.replace(
    /<img\s+([^>]*?)src=["']([^"']*)(?:icons\/|Resume App Icon\/)([^"']+\.(svg|png|jpg))["']([^>]*?)>/gi,
    (match, before, prefix, iconFile, ext, after) => {
      const techName = getTechNameFromFile(iconFile);
      if (techName) {
        const icon = getIcon(techName, basePath);
        if (icon) {
          return `<img ${before}src="${icon.path}"${after}>`;
        }
      }
      // Fallback
      return `<img ${before}src="${basePath}/${iconFile}"${after}>`;
    }
  );
  
  // Pattern 4: Replace background-image URLs with icon paths
  updated = updated.replace(
    /background-image:\s*url\(["']?([^"')]*)(?:icons\/|Resume App Icon\/)([^"')]+\.(svg|png|jpg))["']?\)/gi,
    (match, prefix, iconFile, ext) => {
      const techName = getTechNameFromFile(iconFile);
      if (techName) {
        const icon = getIcon(techName, basePath);
        if (icon) {
          return `background-image: url('${icon.path}')`;
        }
      }
      return match;
    }
  );
  
  return updated;
}

/**
 * 🎯 Main aggressive synchronization function
 */
function syncIconsAggressive() {
  console.log('🔄 ✨ AGGRESSIVE ICON SYNCHRONIZATION AWAKENS!');
  console.log('');
  
  const resumeFiles = findResumeFiles();
  console.log(`📁 Found ${resumeFiles.length} resume files to process`);
  console.log('');
  
  let updatedCount = 0;
  let skippedCount = 0;
  const updatedFiles = [];
  
  resumeFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has any icon references
      const hasIcons = /(?:icons\/|Resume App Icon\/|ICON_MAP|\.svg|\.png)/i.test(content);
      
      if (hasIcons) {
        const updated = updateIconReferencesAggressive(content, filePath);
        
        if (updated !== content) {
          fs.writeFileSync(filePath, updated, 'utf8');
          const relativePath = path.relative(RESUME_DIR, filePath);
          console.log(`✅ Updated: ${relativePath}`);
          updatedFiles.push(relativePath);
          updatedCount++;
        } else {
          console.log(`⏭️  Skipped: ${path.relative(RESUME_DIR, filePath)} (no changes needed)`);
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
  console.log('🎉 ✨ AGGRESSIVE SYNCHRONIZATION COMPLETE!');
  console.log(`   ✅ Updated: ${updatedCount} files`);
  console.log(`   ⏭️  Skipped: ${skippedCount} files`);
  
  if (updatedFiles.length > 0) {
    console.log('');
    console.log('📋 Updated Files:');
    updatedFiles.forEach(file => console.log(`   - ${file}`));
  }
}

// Run if executed directly
if (require.main === module) {
  syncIconsAggressive();
}

module.exports = { syncIconsAggressive, updateIconReferencesAggressive };

