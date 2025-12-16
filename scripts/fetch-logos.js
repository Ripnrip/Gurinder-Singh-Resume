#!/usr/bin/env node
/**
 * 🎭 The Logo Fetching Alchemist - A Tool for Gathering Official Brand Assets
 *
 * "From the web's vast digital sea,
 * Official logos we shall retrieve.
 * With URLs mapped and sources true,
 * Brand assets fresh and accurate too."
 *
 * - The Digital Metaphor Maestro
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios');

// 🌟 The Grand Mapping - Technology names to their official logo URLs
// Using Simple Icons CDN and GitHub raw URLs for reliable sources
const SIMPLE_ICONS_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/';
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com';

const LOGO_URLS = {
  'widgetkit': [
    'https://developer.apple.com/design/resources/',
    `${SIMPLE_ICONS_BASE}apple.svg`,
  ],
  'weaviate': [
    'https://raw.githubusercontent.com/weaviate/weaviate/main/docs/assets/weaviate-logo.png',
    'https://raw.githubusercontent.com/semi-technologies/weaviate/main/docs/assets/weaviate-logo.png',
    'https://weaviate.io/assets/images/weaviate-logo.png',
  ],
  'vector-databases': [
    'https://raw.githubusercontent.com/milvus-io/milvus/master/docs/site/static/img/logo.svg',
    'https://raw.githubusercontent.com/facebookresearch/faiss/main/docs/logo.png',
  ],
  'vapor': [
    'https://design.vapor.codes/icons/6497f52acac284311874.svg',
    'https://raw.githubusercontent.com/vapor/vapor/main/docs/4.0/images/logo.png',
    'https://vapor.codes/images/logo.png',
  ],
  'uikit': [
    `${SIMPLE_ICONS_BASE}apple.svg`,
    'https://developer.apple.com/design/resources/',
  ],
  'stable-diffusion': [
    `${SIMPLE_ICONS_BASE}stabilityai.svg`,
    'https://raw.githubusercontent.com/Stability-AI/stablediffusion/main/assets/stable-diffusion-logo.png',
  ],
  'sql': [
    `${SIMPLE_ICONS_BASE}postgresql.svg`,
    `${SIMPLE_ICONS_BASE}mysql.svg`,
  ],
  'sonarcube': [
    `${SIMPLE_ICONS_BASE}sonarqube.svg`,
    'https://raw.githubusercontent.com/SonarSource/sonarqube/master/sonar-web/src/main/js/apps/account/components/logo.svg',
  ],
  'snapshot-testing': [
    'https://raw.githubusercontent.com/pointfreeco/swift-snapshot-testing/main/logo.png',
  ],
  'runpod': [
    'https://raw.githubusercontent.com/runpod/runpod/main/docs/assets/logo.png',
    'https://www.runpod.io/images/logo.png',
  ],
  'replicate': [
    'https://raw.githubusercontent.com/replicate/replicate/main/docs/static/img/logo.png',
    'https://replicate.com/images/logo.png',
  ],
  'realm': [
    `${SIMPLE_ICONS_BASE}realm.svg`,
    'https://raw.githubusercontent.com/realm/realm-js/main/docs/logo.png',
  ],
  'pydantic': [
    `${SIMPLE_ICONS_BASE}pydantic.svg`,
    'https://raw.githubusercontent.com/pydantic/pydantic/main/docs/static/img/logo.png',
  ],
  'optimizely': [
    `${SIMPLE_ICONS_BASE}optimizely.svg`,
    'https://www.optimizely.com/images/logo.svg',
  ],
  'openrouter': [
    'https://raw.githubusercontent.com/openrouter/openrouter/main/docs/logo.png',
    'https://openrouter.ai/images/logo.png',
  ],
  'observability': [
    `${SIMPLE_ICONS_BASE}grafana.svg`,
    `${SIMPLE_ICONS_BASE}datadog.svg`,
  ],
  'nosql': [
    `${SIMPLE_ICONS_BASE}mongodb.svg`,
    'https://raw.githubusercontent.com/mongodb/mongo/master/docs/logo.png',
  ],
  'n8n': [
    `${SIMPLE_ICONS_BASE}n8n.svg`,
    'https://raw.githubusercontent.com/n8n-io/n8n/master/packages/design-system/src/assets/images/n8n-logo.svg',
  ],
  'neo4j': [
    `${SIMPLE_ICONS_BASE}neo4j.svg`,
    'https://raw.githubusercontent.com/neo4j/neo4j/master/docs/images/neo4j-logo.svg',
  ],
  'mcp': [
    'https://raw.githubusercontent.com/modelcontextprotocol/servers/main/docs/logo.png',
  ],
  'milvus': [
    'https://raw.githubusercontent.com/milvus-io/milvus/master/docs/site/static/img/logo.svg',
  ],
  'miro': [
    `${SIMPLE_ICONS_BASE}miro.svg`,
    'https://raw.githubusercontent.com/miroapp/api-examples/main/docs/logo.svg',
  ],
  'manus': [
    'https://www.manus-meta.com/images/logo.png',
  ],
  'lora': [
    'https://raw.githubusercontent.com/microsoft/LoRA/main/docs/logo.png',
  ],
  'lmstudio': [
    'https://raw.githubusercontent.com/lmstudio-ai/lmstudio/main/docs/logo.png',
    'https://lmstudio.ai/images/logo.png',
  ],
  'llamaindex': [
    'https://cdn.sanity.io/images/7m9jw85w/production/d7edf2dbff84b42eb79e123142ee53a5502dd9b9-74x24.svg',
    'https://raw.githubusercontent.com/run-llama/llama_index/main/docs/_static/logo.png',
    'https://www.llamaindex.ai/_static/logo.png',
  ],
  'langchain': [
    'https://raw.githubusercontent.com/langchain-ai/langchain/master/.github/langchain-logo.png',
    'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/assets/img/langchain-logo.png',
    `${SIMPLE_ICONS_BASE}langchain.svg`,
  ],
  'kilocode': [
    'https://kilocode.com/images/logo.png',
  ],
  'iam': [
    `${SIMPLE_ICONS_BASE}amazonaws.svg`,
  ],
  'graphql': [
    `${SIMPLE_ICONS_BASE}graphql.svg`,
    'https://raw.githubusercontent.com/graphql/graphql-spec/main/resources/GraphQL%20Logo.svg',
  ],
  'gguf': [
    'https://raw.githubusercontent.com/ggerganov/ggml/main/docs/logo.png',
  ],
  'gemini-cli': [
    `${SIMPLE_ICONS_BASE}google.svg`,
    'https://raw.githubusercontent.com/google/generative-ai-docs/main/docs/images/gemini-logo.png',
  ],
  'firestore': [
    `${SIMPLE_ICONS_BASE}firebase.svg`,
    'https://raw.githubusercontent.com/firebase/firebase-js-sdk/main/packages/firestore/docs/logo.png',
  ],
  'ec2': [
    `${SIMPLE_ICONS_BASE}amazonaws.svg`,
  ],
  'faiss': [
    `${SIMPLE_ICONS_BASE}meta.svg`,
    'https://raw.githubusercontent.com/facebookresearch/faiss/main/docs/logo.png',
  ],
  'dynamodb': [
    `${SIMPLE_ICONS_BASE}amazonaws.svg`,
  ],
  'cursor': [
    'https://raw.githubusercontent.com/getcursor/cursor/main/docs/logo.png',
    'https://cursor.sh/images/logo.png',
  ],
  'coreml': [
    'https://developer.apple.com/design/resources/',
    `${SIMPLE_ICONS_BASE}apple.svg`,
  ],
  'containerization': [
    `${SIMPLE_ICONS_BASE}docker.svg`,
    'https://raw.githubusercontent.com/docker/docker-ce/main/docs/logo.png',
  ],
  'cohere': [
    'https://raw.githubusercontent.com/cohere-ai/cohere-python/main/docs/logo.png',
    'https://cohere.com/images/logo.png',
  ],
  'claude-cli': [
    'https://raw.githubusercontent.com/anthropics/anthropic-sdk-typescript/main/docs/logo.png',
  ],
  'chromadb': [
    'https://raw.githubusercontent.com/chroma-core/chroma/main/docs/assets/chroma-logo.png',
    'https://raw.githubusercontent.com/chroma-core/chroma/main/docs/logo.png',
    'https://www.trychroma.com/images/logo.png',
  ],
  'azure': [
    `${SIMPLE_ICONS_BASE}microsoftazure.svg`,
    'https://raw.githubusercontent.com/Azure/azure-sdk-for-js/main/docs/azure-logo.svg',
  ],
  'aws-lambda': [
    `${SIMPLE_ICONS_BASE}amazonaws.svg`,
  ],
  'aws': [
    `${SIMPLE_ICONS_BASE}amazonaws.svg`,
    'https://raw.githubusercontent.com/aws/aws-sdk-js/main/docs/aws-logo.svg',
  ],
  'arkit': [
    'https://developer.apple.com/design/resources/',
    `${SIMPLE_ICONS_BASE}apple.svg`,
  ],
  'ai-cloud-foundry': [
    `${SIMPLE_ICONS_BASE}cloudfoundry.svg`,
    'https://raw.githubusercontent.com/cloudfoundry/cf-deployment/main/docs/logo.png',
  ],
  'activitykit': [
    'https://developer.apple.com/design/resources/',
    `${SIMPLE_ICONS_BASE}apple.svg`,
  ],
};

// 🌐 The Logo Fetcher - Attempts to fetch from multiple sources
async function fetchLogo(techName, urls, outputPath) {
  const scriptPath = path.join(__dirname, 'image-to-svg.js');
  
  for (const url of urls) {
    try {
      // Skip invalid URLs (like design resource pages)
      if (!url || url.endsWith('/') || !url.includes('.')) {
        continue;
      }
      
      console.log(`\n🎪 📦 Attempting to fetch ${techName} from: ${url}`);
      
      // Check if URL is already an SVG
      const isSvg = url.toLowerCase().endsWith('.svg');
      
      if (isSvg) {
        // Direct download for SVG files
        try {
          const response = await axios.get(url, { responseType: 'text', validateStatus: (status) => status === 200 });
          if (response.data && response.data.length > 100) { // Basic validation - SVG should have content
            await fs.writeFile(outputPath, response.data);
            const stats = await fs.stat(outputPath);
            if (stats.size > 100) { // Ensure file has meaningful content
              console.log(`🎉 ✨ SUCCESS! ${techName} SVG logo saved to ${outputPath}`);
              return true;
            }
          }
        } catch (err) {
          console.log(`🌙 ⚠️ Failed to download SVG from ${url} (${err.message}), trying next source...`);
          continue;
        }
      } else {
        // Use image-to-svg script for raster images
        try {
          // First verify the URL exists
          const headResponse = await axios.head(url, { validateStatus: (status) => status < 400 });
          if (headResponse.status !== 200) {
            throw new Error(`URL returned status ${headResponse.status}`);
          }
          
          execSync(`node "${scriptPath}" "${url}" "${outputPath}"`, { stdio: 'pipe' });
          
          // Check if file was created successfully with meaningful content
          const stats = await fs.stat(outputPath);
          if (stats.size > 100) { // Ensure file has meaningful content
            console.log(`🎉 ✨ SUCCESS! ${techName} logo converted and saved to ${outputPath}`);
            return true;
          } else {
            // Remove empty/broken file
            await fs.unlink(outputPath).catch(() => {});
            throw new Error('Generated file is too small or empty');
          }
        } catch (err) {
          // Remove any broken files
          try {
            await fs.unlink(outputPath);
          } catch {}
          console.log(`🌙 ⚠️ Failed to convert image from ${url} (${err.message}), trying next source...`);
          continue;
        }
      }
    } catch (error) {
      console.log(`🌙 ⚠️ Failed to fetch from ${url}, trying next source...`);
      continue;
    }
  }
  
  return false;
}

// 🌟 The Grand Orchestration
async function main() {
  const outputDir = path.join(__dirname, '..', 'Resume App Icon');
  const techList = process.argv.slice(2);
  
  // If no specific techs provided, process all
  const techsToProcess = techList.length > 0 
    ? techList.map(t => t.toLowerCase().replace('.svg', ''))
    : Object.keys(LOGO_URLS);
  
  console.log(`🌐 ✨ LOGO FETCHING QUEST AWAKENS! Processing ${techsToProcess.length} technologies...`);
  
  for (const techName of techsToProcess) {
    if (!LOGO_URLS[techName]) {
      console.log(`🌙 ⚠️ No URL mapping found for ${techName}, skipping...`);
      continue;
    }
    
    const outputPath = path.join(outputDir, `${techName}.svg`);
    const success = await fetchLogo(techName, LOGO_URLS[techName], outputPath);
    
    if (!success) {
      console.log(`💥 😭 Failed to fetch ${techName} from all sources. Manual intervention may be needed.`);
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n🎉 ✨ LOGO FETCHING QUEST COMPLETE!`);
}

main().catch(console.error);

