#!/usr/bin/env node
/**
 * 📥 The PNG Logo Fetcher (Google Favicon Edition)
 */

const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

const ICON_DIR = path.join(__dirname, '..', 'Resume-App-Icon');

async function downloadPng(techName, domain) {
  const safeName = techName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const outputPath = path.join(ICON_DIR, `${safeName}.png`);
  const url = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  console.log(`🌐 Fetching PNG for ${techName} (${domain})...`);
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
    await fs.writeFile(outputPath, response.data);
    console.log(`✅ Saved to ${outputPath}`);
    return `${safeName}.png`;
  } catch (e) {
    console.error(`❌ Failed to download ${techName}: ${e.message}`);
    return null;
  }
}

async function main() {
  const techs = [
    { name: 'Swift', domain: 'swift.org' },
    { name: 'SwiftUI', domain: 'apple.com' },
    { name: 'Realm', domain: 'realm.io' },
    { name: 'ARKit', domain: 'apple.com' },
    { name: 'Python', domain: 'python.org' },
    { name: 'PyTorch', domain: 'pytorch.org' },
    { name: 'TensorFlow', domain: 'tensorflow.org' },
    { name: 'Hugging Face', domain: 'huggingface.co' },
    { name: 'OpenAI', domain: 'openai.com' },
    { name: 'Claude', domain: 'anthropic.com' },
    { name: 'AWS', domain: 'aws.amazon.com' },
    { name: 'GCP', domain: 'cloud.google.com' },
    { name: 'Azure', domain: 'azure.microsoft.com' },
    { name: 'Docker', domain: 'docker.com' },
    { name: 'Supabase', domain: 'supabase.com' },
    { name: 'Firebase', domain: 'firebase.google.com' }
  ];

  await fs.mkdir(ICON_DIR, { recursive: true });

  for (const tech of techs) {
    await downloadPng(tech.name, tech.domain);
  }
}

main().catch(console.error);
