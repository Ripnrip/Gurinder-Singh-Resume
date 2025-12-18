const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const ICON_DIR = path.join(__dirname, '..', 'Resume App Icon');

const ICONS = [
  { name: 'vertex-ai', url: 'https://storage.googleapis.com/gweb-cloudblog-publish/images/Vertex_AI.max-2800x2800.png' },
  { name: 'llamaindex', url: 'https://docs.llamaindex.ai/en/stable/_static/logo.png' },
  { name: 'chromadb', url: 'https://www.trychroma.com/assets/chroma-logo.png' },
  { name: 'pinecone', url: 'https://www.pinecone.io/images/logo.svg' },
  { name: 'qdrant', url: 'https://qdrant.tech/images/logo.svg' },
  { name: 'weaviate', url: 'https://weaviate.io/assets/images/weaviate-logo.png' },
  { name: 'sonarqube', url: 'https://www.sonarqube.org/logos/index/sonarqube-logo.png' },
  { name: 'azure', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  { name: 'stable-diffusion', url: 'https://stability.ai/wp-content/uploads/2022/11/stability-logo.png' },
  { name: 'comfyui', url: 'https://github.com/comfyanonymous/ComfyUI/raw/main/assets/logo.png' },
  { name: 'cohere', url: 'https://cohere.ai/static/logo.svg' }
];

async function run() {
  for (const icon of ICONS) {
    const outputPath = path.join(ICON_DIR, `${icon.name}.svg`);
    console.log(`\n🚀 PROCESSING: ${icon.name} from ${icon.url}`);
    
    if (icon.url.endsWith('.svg')) {
      try {
        const response = await axios.get(icon.url, { responseType: 'arraybuffer' });
        fs.writeFileSync(outputPath, response.data);
        console.log(`✅ SVG SAVED: ${icon.name}.svg`);
      } catch (e) {
        console.error(`❌ FAILED TO DOWNLOAD SVG for ${icon.name}: ${e.message}`);
      }
    } else {
      try {
        execSync(`node scripts/image-to-svg.js "${icon.url}" "${outputPath}"`, { stdio: 'inherit' });
        console.log(`✅ CONVERTED TO SVG: ${icon.name}.svg`);
      } catch (e) {
        console.error(`❌ ALCHEMY FAILED for ${icon.name}: ${e.message}`);
      }
    }
  }
  
  // Also fix the config to point to these new files
  const configPath = path.join(__dirname, '..', 'icons-config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Helper to update config
  const updateConfig = (name, filename) => {
    for (const cat of Object.values(config.icons)) {
      if (cat[name]) {
        cat[name].file = filename;
        delete cat[name].url;
      }
    }
    if (config.externalIcons[name]) {
      config.externalIcons[name].file = filename;
      delete config.externalIcons[name].url;
    }
  };

  ICONS.forEach(icon => {
    // Manual mapping for names that differ from file names
    let configName = icon.name.charAt(0).toUpperCase() + icon.name.slice(1);
    if (icon.name === 'vertex-ai') configName = 'Vertex AI';
    if (icon.name === 'llamaindex') configName = 'LlamaIndex';
    if (icon.name === 'chromadb') configName = 'ChromaDB';
    if (icon.name === 'stable-diffusion') configName = 'Stable Diffusion';
    if (icon.name === 'comfyui') configName = 'ComfyUI';
    if (icon.name === 'sonarqube') configName = 'SonarQube';
    
    updateConfig(configName, `${icon.name}.svg`);
    if (icon.name === 'llamaindex') updateConfig('LlamaParse', 'llamaindex.svg');
  });

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('\n🎉 ✨ CONFIGURATION UPDATED!');
  
  execSync('npm run icons:sync', { stdio: 'inherit' });
}

run();
