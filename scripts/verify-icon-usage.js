#!/usr/bin/env node

/**
 * 🔍 The Icon Usage Verification Script
 *
 * Scans all HTML files to find Font Awesome icons that should be replaced
 * with actual technology logos from the centralized icon system.
 */

const fs = require('fs');
const path = require('path');
const { getIcon } = require('./icon-utils');

const RESUME_DIR = path.join(__dirname, '..');

// 🎯 Technology names that should have actual logos (not Font Awesome icons)
const TECH_NAMES = [
  'Swift', 'SwiftUI', 'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'PyTorch', 'TensorFlow', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL',
  'Next.js', 'Vapor', 'Core ML', 'UIKit', 'ARKit', 'ActivityKit', 'WidgetKit',
  'MapKit', 'BLE', 'Realm', 'NumPy', 'Pandas', 'LlamaIndex', 'LangChain',
  'Azure', 'GCP', 'Redis', 'Neo4j', 'Pinecone', 'ChromaDB', 'Weaviate',
  'Milvus', 'Qdrant', 'FAISS', 'Firestore', 'DynamoDB'
];

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
        if (!['node_modules', '.git', 'snapshot-tests', 'legacy'].includes(entry.name)) {
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
 * 🔍 Find Font Awesome icons that should be replaced with actual logos
 */
function findFontAwesomeIcons(htmlContent, filePath) {
  const issues = [];
  
  // Pattern: <span class="skill-tag"><i class="fas fa-...">TechName</span>
  // or <span class="skill-tag"><i class="fab fa-...">TechName</span>
  const faPattern = /<span[^>]*class=["'][^"']*skill-tag[^"']*["'][^>]*><i[^>]*class=["'][^"']*(?:fas|fab)[^"']*["'][^>]*>([^<]*)<\/i>([^<]+)<\/span>/gi;
  
  let match;
  while ((match = faPattern.exec(htmlContent)) !== null) {
    const techName = (match[1] + match[2]).trim();
    
    // Check if this tech should have an actual logo
    const normalizedTechName = TECH_NAMES.find(tech => 
      tech.toLowerCase() === techName.toLowerCase() ||
      techName.toLowerCase().includes(tech.toLowerCase()) ||
      tech.toLowerCase().includes(techName.toLowerCase())
    );
    
    if (normalizedTechName) {
      const icon = getIcon(normalizedTechName);
      if (icon && icon.source === 'local') {
        issues.push({
          file: path.relative(RESUME_DIR, filePath),
          techName: normalizedTechName,
          foundText: techName,
          line: htmlContent.substring(0, match.index).split('\n').length,
          match: match[0],
          iconPath: icon.path
        });
      }
    }
  }
  
  return issues;
}

/**
 * 🎯 Main verification function
 */
function verifyIconUsage() {
  console.log('🔍 ✨ ICON USAGE VERIFICATION AWAKENS!');
  console.log('');
  
  const resumeFiles = findResumeFiles();
  console.log(`📁 Scanning ${resumeFiles.length} resume files...`);
  console.log('');
  
  const allIssues = [];
  
  resumeFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = findFontAwesomeIcons(content, filePath);
      
      if (issues.length > 0) {
        allIssues.push(...issues);
        console.log(`⚠️  ${path.relative(RESUME_DIR, filePath)}:`);
        issues.forEach(issue => {
          console.log(`   ❌ ${issue.techName} using Font Awesome icon instead of ${issue.iconPath}`);
        });
        console.log('');
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('📊 SUMMARY:');
  console.log(`   Total files scanned: ${resumeFiles.length}`);
  console.log(`   Files with issues: ${new Set(allIssues.map(i => i.file)).size}`);
  console.log(`   Total issues found: ${allIssues.length}`);
  console.log('');
  
  if (allIssues.length > 0) {
    console.log('💡 These files are using Font Awesome icons instead of actual technology logos.');
    console.log('   Run: node scripts/fix-fontawesome-icons.js to auto-fix them.');
    console.log('');
  } else {
    console.log('✅ All files are using centralized icons correctly!');
    console.log('');
  }
  
  return allIssues;
}

// Run if executed directly
if (require.main === module) {
  const issues = verifyIconUsage();
  process.exit(issues.length > 0 ? 1 : 0);
}

module.exports = { verifyIconUsage, findFontAwesomeIcons };

