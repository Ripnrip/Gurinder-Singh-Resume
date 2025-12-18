#!/usr/bin/env node
/**
 * 🎭 The Icon Fetcher & Converter
 * 
 * Fetches icon images from URLs and converts them to SVG using image-to-svg.js
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs').promises;

// Icon URLs to fetch - these should be actual PNG/JPG image URLs
const ICONS_TO_FETCH = {
    'LangChain': 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain-logo.png',
    'OpenAI': 'https://openai.com/favicon.ico', // Will need better source
    'Claude': 'https://www.anthropic.com/favicon.ico', // Will need better source
    'Hugging Face': 'https://huggingface.co/favicon.ico', // Will need better source
    // Add more as we find them
};

const OUTPUT_DIR = path.join(__dirname, '..', 'Resume App Icon');

async function fetchAndConvertIcon(name, imageUrl) {
    const outputPath = path.join(OUTPUT_DIR, `${name.toLowerCase().replace(/\s+/g, '-')}.svg`);
    
    console.log(`\n📥 Fetching ${name} icon from: ${imageUrl}`);
    console.log(`📤 Converting to: ${outputPath}`);
    
    try {
        execSync(`node scripts/image-to-svg.js "${imageUrl}" "${outputPath}"`, {
            stdio: 'inherit',
            cwd: path.join(__dirname, '..')
        });
        console.log(`✅ Successfully created ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error(`❌ Failed to convert ${name}: ${error.message}`);
        return null;
    }
}

async function main() {
    console.log('🎬 ✨ ICON FETCHING & CONVERSION AWAKENS!\n');
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    const results = {};
    for (const [name, url] of Object.entries(ICONS_TO_FETCH)) {
        const result = await fetchAndConvertIcon(name, url);
        if (result) {
            results[name] = result.replace(path.join(__dirname, '..') + '/', '');
        }
    }
    
    console.log('\n📊 Summary:');
    console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);

