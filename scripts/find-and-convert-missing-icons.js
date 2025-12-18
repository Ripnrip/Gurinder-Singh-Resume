#!/usr/bin/env node
/**
 * 🔍 Icon Hunter & Converter
 * Finds missing icons from web, downloads and converts them to SVG
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs').promises;

// Skills that need icons (currently using CDN or missing)
const MISSING_ICONS = {
    'LLMs': ['LLM', 'large language model', 'AI model'],
    'RAG Pipelines': ['RAG', 'retrieval augmented generation'],
    'LlamaParse': ['LlamaParse', 'Llama Parse'],
    'MCP Servers': ['MCP', 'Model Context Protocol'],
    'MCP Clients': ['MCP', 'Model Context Protocol'],
    'CrewAI': ['CrewAI', 'Crew AI'],
    'LangFlow': ['LangFlow', 'Lang Flow'],
    'LangGraph': ['LangGraph', 'Lang Graph'],
    'DeepLake': ['DeepLake', 'Activeloop DeepLake'],
    'ComfyUI': ['ComfyUI', 'Comfy UI'],
    'LoRA': ['LoRA', 'Low Rank Adaptation'],
    'Computer Vision': ['Computer Vision', 'CV'],
    'YOLO': ['YOLO', 'You Only Look Once'],
    'TTS/STT': ['TTS', 'STT', 'text to speech', 'speech to text'],
    'GGUF': ['GGUF', 'GPT-Generated Unified Format']
};

const OUTPUT_DIR = path.join(__dirname, '..', 'Resume App Icon');

async function findIconImage(searchTerms) {
    // Use web search to find icon images
    // This is a placeholder - we'll use Playwright MCP to actually find images
    console.log(`🔍 Searching for: ${searchTerms.join(', ')}`);
    return null; // Will be implemented with Playwright
}

async function convertImageToSvg(imageUrl, outputPath) {
    try {
        console.log(`🔄 Converting: ${imageUrl} -> ${outputPath}`);
        execSync(`node scripts/image-to-svg.js "${imageUrl}" "${outputPath}"`, {
            stdio: 'inherit'
        });
        return true;
    } catch (error) {
        console.error(`❌ Failed to convert ${imageUrl}:`, error.message);
        return false;
    }
}

async function main() {
    console.log('🎯 Starting icon hunt and conversion...\n');
    
    // Check which icons are missing
    const missing = [];
    for (const [skill, searchTerms] of Object.entries(MISSING_ICONS)) {
        const iconPath = path.join(OUTPUT_DIR, `${skill.toLowerCase().replace(/\s+/g, '-')}.svg`);
        try {
            await fs.access(iconPath);
            console.log(`✅ ${skill} already exists`);
        } catch {
            missing.push({ skill, searchTerms, iconPath });
            console.log(`❌ ${skill} is missing`);
        }
    }
    
    console.log(`\n📊 Found ${missing.length} missing icons\n`);
    
    // For now, we'll create a list to manually process
    console.log('📝 Missing icons to process:');
    missing.forEach(({ skill, iconPath }) => {
        console.log(`   - ${skill} -> ${iconPath}`);
    });
    
    console.log('\n💡 Next steps:');
    console.log('   1. Use Playwright MCP to navigate to official websites');
    console.log('   2. Find logo images');
    console.log('   3. Download and convert using: node scripts/image-to-svg.js <imageUrl> <outputPath>');
}

main().catch(console.error);

