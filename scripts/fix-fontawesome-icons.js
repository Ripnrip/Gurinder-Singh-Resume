#!/usr/bin/env node

/**
 * 🔧 The Font Awesome Icon Replacement Script
 *
 * Automatically replaces Font Awesome icons with actual technology logos
 * from the centralized icon system.
 */

const fs = require('fs');
const path = require('path');
const { getIcon } = require('./icon-utils');

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
 * 🔧 Replace Font Awesome icons with actual logos
 */
function replaceFontAwesomeIcons(htmlContent, filePath) {
  let updated = htmlContent;
  const relativePath = path.relative(RESUME_DIR, path.dirname(filePath));
  const basePath = relativePath ? path.join(relativePath, 'Resume App Icon').replace(/\\/g, '/') : 'Resume App Icon';
  
  // Technology name mappings (common variations)
  const techMappings = {
    'pytorch': 'PyTorch',
    'tensorflow': 'TensorFlow',
    'tensor flow': 'TensorFlow',
    'python': 'Python',
    'javascript': 'JavaScript',
    'typescript': 'TypeScript',
    'react': 'React',
    'node.js': 'Node.js',
    'nodejs': 'Node.js',
    'next.js': 'Next.js',
    'nextjs': 'Next.js',
    'swift': 'Swift',
    'swiftui': 'SwiftUI',
    'uikit': 'UIKit',
    'core ml': 'Core ML',
    'coreml': 'Core ML',
    'arkit': 'ARKit',
    'activitykit': 'ActivityKit',
    'widgetkit': 'WidgetKit',
    'mapkit': 'MapKit',
    'aws': 'AWS',
    'docker': 'Docker',
    'mongodb': 'MongoDB',
    'postgresql': 'PostgreSQL',
    'postgres': 'PostgreSQL',
    'graphql': 'GraphQL',
    'vapor': 'Vapor',
    'realm': 'Realm',
    'numpy': 'NumPy',
    'pandas': 'Pandas',
    'llamaindex': 'LlamaIndex',
    'langchain': 'LangChain',
    'azure': 'Azure',
    'gcp': 'GCP',
    'redis': 'Redis',
    'neo4j': 'Neo4j',
    'pinecone': 'Pinecone',
    'chromadb': 'ChromaDB',
    'weaviate': 'Weaviate',
    'milvus': 'Milvus',
    'qdrant': 'Qdrant',
    'faiss': 'FAISS',
    'firestore': 'Firestore',
    'dynamodb': 'DynamoDB',
    'ble': 'BLE',
    'bluetooth': 'BLE',
    'bluetooth le': 'BLE'
  };
  
  // Pattern: <span class="skill-tag"><i class="fas fa-...">TechName</span>
  // Replace with: <span class="skill-tag"><img src="Resume App Icon/tech.svg" class="skill-icon">TechName</span>
  updated = updated.replace(
    /<span([^>]*class=["'][^"']*skill-tag[^"']*["'][^>]*)><i[^>]*class=["'][^"']*(?:fas|fab)[^"']*["'][^>]*>([^<]*)<\/i>([^<]+)<\/span>/gi,
    (match, spanAttrs, iconText, techText) => {
      const fullText = (iconText + techText).trim();
      const normalizedText = fullText.toLowerCase();
      
      // Find matching tech name
      let techName = null;
      for (const [key, value] of Object.entries(techMappings)) {
        if (normalizedText.includes(key) || normalizedText === key) {
          techName = value;
          break;
        }
      }
      
      // Also try direct match
      if (!techName) {
        techName = Object.values(techMappings).find(tech => 
          tech.toLowerCase() === normalizedText ||
          normalizedText.includes(tech.toLowerCase())
        );
      }
      
      if (techName) {
        const icon = getIcon(techName, basePath);
        if (icon && icon.source === 'local') {
          return `<span${spanAttrs}><img src="${icon.path}" alt="${techName}" class="skill-icon">${techText}</span>`;
        }
      }
      
      // Keep original if no match found
      return match;
    }
  );
  
  // Add CSS for .skill-icon if it doesn't exist
  if (!updated.includes('.skill-icon') && updated.includes('.skill-tag')) {
    // Find the .skill-tag i style and add .skill-icon after it
    updated = updated.replace(
      /(\.skill-tag\s+i\s*\{[^}]*\})/gi,
      (match) => {
        return match + '\n        \n        .skill-tag .skill-icon {\n            width: 16px;\n            height: 16px;\n            object-fit: contain;\n            vertical-align: middle;\n            margin-right: 4px;\n        }';
      }
    );
  }
  
  return updated;
}

/**
 * 🎯 Main fix function
 */
function fixFontAwesomeIcons() {
  console.log('🔧 ✨ FONT AWESOME ICON REPLACEMENT AWAKENS!');
  console.log('');
  
  const resumeFiles = findResumeFiles();
  console.log(`📁 Processing ${resumeFiles.length} resume files...`);
  console.log('');
  
  let fixedCount = 0;
  let totalReplacements = 0;
  
  resumeFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const updated = replaceFontAwesomeIcons(content, filePath);
      
      if (updated !== content) {
        fs.writeFileSync(filePath, updated, 'utf8');
        const replacements = (content.match(/<i[^>]*class=["'][^"']*(?:fas|fab)[^"']*["'][^>]*>/gi) || []).length - 
                             (updated.match(/<i[^>]*class=["'][^"']*(?:fas|fab)[^"']*["'][^>]*>/gi) || []).length;
        console.log(`✅ Fixed: ${path.relative(RESUME_DIR, filePath)} (${replacements} replacements)`);
        fixedCount++;
        totalReplacements += replacements;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('');
  console.log('🎉 ✨ REPLACEMENT COMPLETE!');
  console.log(`   ✅ Files fixed: ${fixedCount}`);
  console.log(`   📊 Total replacements: ${totalReplacements}`);
  console.log('');
}

// Run if executed directly
if (require.main === module) {
  fixFontAwesomeIcons();
}

module.exports = { fixFontAwesomeIcons, replaceFontAwesomeIcons };

