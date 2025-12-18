const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const ICON_DIR = path.join(__dirname, '..', 'Resume App Icon');

const ICONS = [
  { name: 'pinecone', url: 'https://logo.svgcdn.com/logos/pinecone.png' },
  { name: 'qdrant', url: 'https://logo.svgcdn.com/l/qdrant-icon.png' },
  { name: 'azure', url: 'https://www.microsoft.com/en-us/legal/intellectualproperty/Trademarks/PublishingImages/MicrosoftAzureTM.png' },
  { name: 'cohere', url: 'https://seeklogo.com/images/C/cohere-icon-logo-611584.png' }
];

async function run() {
  for (const icon of ICONS) {
    const outputPath = path.join(ICON_DIR, `${icon.name}.svg`);
    console.log(`\n🚀 PROCESSING: ${icon.name} from ${icon.url}`);
    
    try {
      execSync(`node scripts/image-to-svg.js "${icon.url}" "${outputPath}"`, { stdio: 'inherit' });
      console.log(`✅ CONVERTED TO SVG: ${icon.name}.svg`);
    } catch (e) {
      console.error(`❌ ALCHEMY FAILED for ${icon.name}: ${e.message}`);
    }
  }
  
  // Update config
  const configPath = path.join(__dirname, '..', 'icons-config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
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
    let configName = icon.name.charAt(0).toUpperCase() + icon.name.slice(1);
    if (icon.name === 'qdrant') configName = 'Qdrant';
    updateConfig(configName, `${icon.name}.svg`);
  });

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('\n🎉 ✨ CONFIGURATION UPDATED!');
  
  execSync('npm run icons:sync', { stdio: 'inherit' });
}

run();
