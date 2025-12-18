#!/usr/bin/env node
/**
 * 📥 The Universal Icon Downloader - V3 (Colored Edition)
 * 
 * Downloads colored icons from Simple Icons, Brandfetch, and other sources.
 */

const fs = require('fs/promises');
const path = require('fs');
const fsp = require('fs/promises');
const pathMod = require('path');
const axios = require('axios');
const { execSync } = require('child_process');

const CONFIG_PATH = pathMod.join(__dirname, '..', 'icons-config.json');
const ICON_DIR = pathMod.join(__dirname, '..', 'Resume App Icon');
const BRANDFETCH_CLIENT_ID = '1idK8XmVyip_uEzPH_4';

async function downloadFile(url, outputPath) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
    const contentType = response.headers['content-type'] || '';
    if (contentType.includes('text/html')) return null;
    await fsp.writeFile(outputPath, response.data);
    return contentType;
  } catch (e) {
    return null;
  }
}

async function processIcon(techName, icon) {
  const safeName = techName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const outputPath = pathMod.join(ICON_DIR, `${safeName}.svg`);

  // 🌟 Special case for Vector Databases (Generic)
  if (techName === 'Vector Databases') {
    const url = 'https://www.svgrepo.com/show/331714/database-generic.svg';
    if (await downloadFile(url, outputPath)) {
      icon.file = `${safeName}.svg`;
      delete icon.url;
      return true;
    }
  }

  // 🌟 Prioritize Simple Icons Colored CDN if color/slug provided
  if (icon.slug && icon.color) {
    const url = `https://cdn.simpleicons.org/${icon.slug}/${icon.color}`;
    console.log(`🎨 Fetching Colored Simple Icon for ${techName}: ${url}`);
    if (await downloadFile(url, outputPath)) {
      icon.file = `${safeName}.svg`;
      delete icon.url;
      return true;
    }
  }

  // 🌟 Fallback to Brandfetch or existing URL
  let url = icon.url;
  if (!url && icon.domain) {
    url = `https://cdn.brandfetch.io/${icon.domain}/w/400/h/400/theme/light/lettermark/type/icon?c=${BRANDFETCH_CLIENT_ID}`;
  }

  if (url) {
    console.log(`🌐 Fetching from URL/Brandfetch for ${techName}: ${url}`);
    const contentType = await downloadFile(url, outputPath);
    if (contentType) {
      if (contentType.includes('svg')) {
        icon.file = `${safeName}.svg`;
      } else {
        // Convert image to SVG
        const ext = contentType.split('/')[1]?.split(';')[0] || 'png';
        const tempPath = pathMod.join(ICON_DIR, `temp-${safeName}.${ext}`);
        await fsp.rename(outputPath, tempPath);
        console.log(`🎨 Converting ${techName} image to SVG...`);
        try {
          execSync(`node scripts/image-to-svg.js "${tempPath}" "${outputPath}"`, { stdio: 'inherit' });
          if (path.existsSync(tempPath)) await fsp.unlink(tempPath);
          icon.file = `${safeName}.svg`;
        } catch (e) {
          const finalImageName = `${safeName}.${ext}`;
          await fsp.rename(tempPath, pathMod.join(ICON_DIR, finalImageName));
          icon.file = finalImageName;
        }
      }
      delete icon.url;
      return true;
    }
  }

  return false;
}

async function main() {
  console.log('🚀 ✨ UNIVERSAL ICON DOWNLOADER V3 AWAKENS!\n');
  const config = JSON.parse(await fsp.readFile(CONFIG_PATH, 'utf8'));
  let updated = false;

  // 1. Process Main Icons
  for (const category of Object.values(config.icons)) {
    for (const [techName, icon] of Object.entries(category)) {
      // Force refresh for problematic ones if they don't have a color property yet or if we want to overwrite
      if (await processIcon(techName, icon)) updated = true;
    }
  }

  // 2. Process External Icons
  for (const [techName, icon] of Object.entries(config.externalIcons)) {
    if (await processIcon(techName, icon)) updated = true;
  }

  if (updated) {
    await fsp.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2));
    console.log('\n🎉 ✨ CONFIGURATION MASTERPIECE UPDATED!');
  }
  
  execSync('npm run icons:sync', { stdio: 'inherit' });
}

main().catch(console.error);
