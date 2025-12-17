#!/usr/bin/env node

/**
 * 🎮 The Stadia Icon Update Script
 * 
 * Updates all resume files to use the new combined Stadia/Google logo
 * and increases company logo size to 40px for better visibility.
 */

const fs = require('fs');
const path = require('path');

const RESUME_DIR = path.join(__dirname, '..');

/**
 * 🎭 Find all HTML resume files
 */
function findResumeFiles() {
  const files = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (!['node_modules', '.git', 'snapshot-tests', 'legacy', 'scripts'].includes(entry.name)) {
          walkDir(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
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
 * 🔄 Update Stadia icon references
 */
function updateStadiaIcon(content, filePath) {
  let updated = false;
  let newContent = content;
  
  // Pattern 1: Replace separate Google icon + Stadia text with combined logo
  const pattern1 = /<img\s+src=["']icons\/google\.svg["'][^>]*>\s*<img\s+src=["'][^"']*stadia[^"']*["'][^>]*>/gi;
  if (pattern1.test(newContent)) {
    newContent = newContent.replace(
      /<img\s+src=["']icons\/google\.svg["'][^>]*>\s*<img\s+src=["'][^"']*stadia[^"']*["'][^>]*>/gi,
      '<img src="Resume App Icon/stadia.png" alt="Google Stadia" class="company-logo">'
    );
    updated = true;
  }
  
  // Pattern 2: Replace icons/google.svg before "iOS Developer/Consultant" or "Google Stadia"
  const pattern2 = /<img\s+src=["']icons\/google\.svg["'][^>]*>\s*(?:<img[^>]*>)?\s*(?:iOS Developer\/Consultant|Google Stadia)/gi;
  if (pattern2.test(newContent)) {
    newContent = newContent.replace(
      /<img\s+src=["']icons\/google\.svg["'][^>]*>\s*(?:<img[^>]*>)?\s*(iOS Developer\/Consultant|Google Stadia)/gi,
      '<img src="Resume App Icon/stadia.png" alt="Google Stadia" class="company-logo"> $1'
    );
    updated = true;
  }
  
  // Pattern 3: Replace any stadia.svg with stadia.png
  newContent = newContent.replace(
    /<img\s+src=["']([^"']*stadia)\.svg["']/gi,
    '<img src="$1.png"'
  );
  
  // Pattern 4: Update company logo size from 28px to 40px
  const sizePattern = /\.company-logo\s*\{[^}]*width:\s*28px[^}]*\}/gs;
  if (sizePattern.test(newContent)) {
    newContent = newContent.replace(
      /(\.company-logo\s*\{[^}]*?)width:\s*28px([^}]*?)height:\s*28px([^}]*?)min-width:\s*28px([^}]*?)min-height:\s*28px([^}]*?)max-width:\s*28px([^}]*?)max-height:\s*28px([^}]*?\})/gs,
      '$1width: 40px$2height: 40px$3min-width: 40px$4min-height: 40px$5max-width: 40px$6max-height: 40px$7'
    );
    updated = true;
  }
  
  // Pattern 5: If there's a Google Stadia section but no icon, add it
  const hasStadiaSection = /Google Stadia/i.test(newContent);
  const hasStadiaIcon = /stadia\.(png|svg)/i.test(newContent);
  
  if (hasStadiaSection && !hasStadiaIcon) {
    // Try to find the item-title or similar structure and add icon
    newContent = newContent.replace(
      /(<div[^>]*class=["'][^"']*item-title[^"']*["'][^>]*>)\s*(iOS Developer\/Consultant|Google Stadia)/gi,
      '$1<img src="Resume App Icon/stadia.png" alt="Google Stadia" class="company-logo"> $2'
    );
    if (newContent !== content) updated = true;
  }
  
  return { content: newContent, updated };
}

/**
 * 🌟 Main execution
 */
function main() {
  console.log('🎮 ✨ STADIA ICON UPDATE AWAKENS!\n');
  
  const files = findResumeFiles();
  console.log(`📁 Found ${files.length} resume files to process\n`);
  
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Only process files that mention Stadia
      if (!/Google Stadia|Stadia/i.test(content)) {
        skippedCount++;
        continue;
      }
      
      const { content: newContent, updated } = updateStadiaIcon(content, filePath);
      
      if (updated) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✅ Updated: ${path.relative(RESUME_DIR, filePath)}`);
        updatedCount++;
      } else {
        console.log(`⏭️  Skipped: ${path.relative(RESUME_DIR, filePath)} (no changes needed)`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`\n🎉 ✨ UPDATE COMPLETE!`);
  console.log(`   ✅ Updated: ${updatedCount} files`);
  console.log(`   ⏭️  Skipped: ${skippedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { updateStadiaIcon, findResumeFiles };
