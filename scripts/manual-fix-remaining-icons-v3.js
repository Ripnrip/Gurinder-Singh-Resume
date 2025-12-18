const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ICON_DIR = path.join(__dirname, '..', 'Resume App Icon');

const ICONS = [
  { name: 'azure', url: 'https://azure.microsoft.com/favicon.ico' },
  { name: 'sonarqube', url: 'https://www.sonarqube.org/favicon.ico' },
  { name: 'qdrant', url: 'https://qdrant.tech/favicon.ico' },
  { name: 'llamaindex', url: 'https://llamaindex.ai/favicon.ico' },
  { name: 'chromadb', url: 'https://www.trychroma.com/favicon.ico' },
  { name: 'pinecone', url: 'https://www.pinecone.io/favicon.ico' },
  { name: 'weaviate', url: 'https://weaviate.io/favicon.ico' },
  { name: 'stabilityai', url: 'https://stability.ai/favicon.ico' },
  { name: 'cohere', url: 'https://cohere.com/favicon.ico' },
  { name: 'optimizely', url: 'https://www.optimizely.com/favicon.ico' },
  { name: 'cursor', url: 'https://cursor.com/favicon.ico' }
];

async function run() {
  for (const icon of ICONS) {
    const outputPath = path.join(ICON_DIR, `${icon.name}.svg`);
    console.log(`\n🚀 PROCESSING FAVICON: ${icon.name} from ${icon.url}`);
    
    try {
      // Use image-to-svg.js which handles favicon.ico
      execSync(`node scripts/image-to-svg.js "${icon.url}" "${outputPath}"`, { stdio: 'inherit' });
      console.log(`✅ CONVERTED FAVICON TO SVG: ${icon.name}.svg`);
    } catch (e) {
      console.error(`❌ FAILED for ${icon.name}: ${e.message}`);
    }
  }
  
  // Final sync
  execSync('npm run icons:sync', { stdio: 'inherit' });
}

run();
