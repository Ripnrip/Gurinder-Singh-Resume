const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ICON_DIR = path.join(__dirname, '..', 'Resume App Icon');

const ICONS = [
  { name: 'azure', domain: 'azure.microsoft.com' },
  { name: 'qdrant', domain: 'qdrant.tech' },
  { name: 'llamaindex', domain: 'llamaindex.ai' },
  { name: 'chromadb', domain: 'trychroma.com' },
  { name: 'pinecone', domain: 'pinecone.io' },
  { name: 'weaviate', domain: 'weaviate.io' },
  { name: 'cohere', domain: 'cohere.com' },
  { name: 'optimizely', domain: 'optimizely.com' },
  { name: 'cursor', domain: 'cursor.com' }
];

async function run() {
  for (const icon of ICONS) {
    const outputPath = path.join(ICON_DIR, `${icon.name}.svg`);
    const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${icon.domain}&sz=128`;
    
    console.log(`\n🚀 PROCESSING GOOGLE FAVICON: ${icon.name} for ${icon.domain}`);
    
    try {
      execSync(`node scripts/image-to-svg.js "${googleFaviconUrl}" "${outputPath}"`, { stdio: 'inherit' });
      console.log(`✅ CONVERTED GOOGLE FAVICON TO SVG: ${icon.name}.svg`);
    } catch (e) {
      console.error(`❌ FAILED for ${icon.name}: ${e.message}`);
    }
  }
  
  // Update LlamaParse to use LlamaIndex logo too
  fs.copyFileSync(path.join(ICON_DIR, 'llamaindex.svg'), path.join(ICON_DIR, 'llamaparse.svg'));

  // Final sync
  execSync('npm run icons:sync', { stdio: 'inherit' });
}

run();
