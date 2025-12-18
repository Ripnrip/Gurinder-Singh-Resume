#!/usr/bin/env node
/**
 * 🎭 The Logo Fetching Alchemist - V2 (Colored Edition)
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios');

const OUTPUT_DIR = path.join(__dirname, '..', 'Resume App Icon');

const COLORED_LOGOS = {
  'datadog': 'https://cdn.simpleicons.org/datadog/632CA6.svg',
  'sql': 'https://cdn.simpleicons.org/mysql/4479A1.svg',
  'nosql': 'https://cdn.simpleicons.org/mongodb/47A248.svg',
  'firestore': 'https://cdn.simpleicons.org/firebase/FFCA28.svg',
  'faiss': 'https://cdn.simpleicons.org/meta/0467DF.svg',
  'observability': 'https://cdn.simpleicons.org/datadog/632CA6.svg',
  'miro': 'https://cdn.simpleicons.org/miro/050038.svg',
  'claude-cli': 'https://cdn.simpleicons.org/anthropic/191919.svg',
  'graphql': 'https://cdn.simpleicons.org/graphql/E10098.svg',
  'azure': 'https://cdn.simpleicons.org/microsoftazure/0089D6.svg',
  'gcp': 'https://cdn.simpleicons.org/googlecloud/4285F4.svg',
  'ai-cloud-foundry': 'https://cdn.simpleicons.org/cloudfoundry/00AEEF.svg',
  'sonarqube': 'https://cdn.simpleicons.org/sonarqube/4E9BCD.svg',
  'qdrant': 'https://cdn.simpleicons.org/qdrant/FF4136.svg',
  'llamaindex': 'https://cdn.simpleicons.org/llamaindex/FF6F61.svg',
  'chromadb': 'https://cdn.simpleicons.org/chromadb/000000.svg',
  'pinecone': 'https://cdn.simpleicons.org/pinecone/000000.svg',
  'weaviate': 'https://cdn.simpleicons.org/weaviate/00D9AA.svg',
  'stable-diffusion': 'https://cdn.simpleicons.org/stabilityai/000000.svg',
  'comfyui': 'https://cdn.simpleicons.org/comfyui/000000.svg',
  'cohere': 'https://cdn.simpleicons.org/cohere/000000.svg',
  'sketch': 'https://cdn.simpleicons.org/sketch/F7B500.svg',
  'jira': 'https://cdn.simpleicons.org/jira/0052CC.svg',
  'xcode': 'https://cdn.simpleicons.org/xcode/1575F9.svg',
  'git': 'https://cdn.simpleicons.org/git/F05032.svg',
  'github-actions': 'https://cdn.simpleicons.org/githubactions/2088FF.svg',
  'fastlane': 'https://cdn.simpleicons.org/fastlane/00BFFF.svg',
  'optimizely': 'https://cdn.simpleicons.org/optimizely/0055D9.svg',
  'cursor': 'https://logo.clearbit.com/cursor.com',
  'vector-databases': 'https://www.svgrepo.com/show/331714/database-generic.svg'
};

async function main() {
  console.log('🚀 ✨ COLORED LOGO FETCHING QUEST AWAKENS!\n');
  
  for (const [name, url] of Object.entries(COLORED_LOGOS)) {
    const outputPath = path.join(OUTPUT_DIR, `${name}.svg`);
    console.log(`\n🎭 PROCESSING: ${name} from ${url}`);
    
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
      const contentType = response.headers['content-type'] || '';
      
      if (contentType.includes('svg')) {
        await fs.writeFile(outputPath, response.data);
        console.log(`✅ COLORED SVG SAVED: ${name}.svg`);
      } else {
        // Use alchemist for images
        const tempPath = path.join(OUTPUT_DIR, `temp-${name}.png`);
        await fs.writeFile(tempPath, response.data);
        console.log(`🎨 CONVERTING IMAGE TO SVG: ${name}...`);
        execSync(`node scripts/image-to-svg.js "${tempPath}" "${outputPath}"`, { stdio: 'inherit' });
        await fs.unlink(tempPath).catch(() => {});
      }
    } catch (e) {
      console.error(`❌ FAILED for ${name}: ${e.message}`);
    }
  }
  
  console.log('\n🔄 ✨ RUNNING SYNCHRONIZATION...');
  execSync('npm run icons:sync', { stdio: 'inherit' });
  console.log('\n🎉 ✨ QUEST COMPLETE!');
}

main().catch(console.error);
