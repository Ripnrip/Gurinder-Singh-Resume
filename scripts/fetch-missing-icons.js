const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ICONS_TO_FETCH = [
    { name: 'openai', searchTerms: ['OpenAI logo', 'OpenAI brand assets'] },
    { name: 'cohere', searchTerms: ['Cohere AI logo', 'Cohere brand'] },
    { name: 'pinecone', searchTerms: ['Pinecone vector database logo', 'Pinecone brand'] },
    { name: 'qdrant', searchTerms: ['Qdrant vector database logo', 'Qdrant brand'] },
    { name: 'weaviate', searchTerms: ['Weaviate vector database logo', 'Weaviate brand'] },
    { name: 'stabilityai', searchTerms: ['Stability AI logo', 'Stable Diffusion logo'] },
    { name: 'comfyui', searchTerms: ['ComfyUI logo', 'ComfyUI brand'] }
];

const OUTPUT_DIR = path.join(__dirname, '..', 'Resume App Icon');

async function findAndDownloadIcon(iconName, searchTerms) {
    console.log(`\n🔍 Searching for ${iconName}...`);
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Try Simple Icons GitHub first
        const simpleIconsUrl = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${iconName}.svg`;
        console.log(`   Trying Simple Icons: ${simpleIconsUrl}`);
        
        await page.goto(simpleIconsUrl, { waitUntil: 'networkidle', timeout: 5000 });
        const content = await page.content();
        
        if (content.includes('<svg') && !content.includes('404')) {
            const svgContent = await page.evaluate(() => document.body.innerText || document.body.textContent);
            if (svgContent && svgContent.includes('<svg')) {
                const outputPath = path.join(OUTPUT_DIR, `${iconName}.svg`);
                fs.writeFileSync(outputPath, svgContent);
                console.log(`   ✅ Downloaded from Simple Icons: ${outputPath}`);
                return true;
            }
        }
    } catch (error) {
        console.log(`   ⚠️  Simple Icons not available: ${error.message}`);
    }

    // Try jsDelivr CDN
    try {
        const jsdelivrUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${iconName}.svg`;
        console.log(`   Trying jsDelivr: ${jsdelivrUrl}`);
        
        const response = await page.goto(jsdelivrUrl, { waitUntil: 'networkidle', timeout: 5000 });
        const content = await page.content();
        
        if (content.includes('<svg') && !content.includes('Couldn\'t find')) {
            const svgContent = await page.evaluate(() => {
                const svg = document.querySelector('svg');
                return svg ? svg.outerHTML : document.body.innerText;
            });
            
            if (svgContent && svgContent.includes('<svg')) {
                const outputPath = path.join(OUTPUT_DIR, `${iconName}.svg`);
                fs.writeFileSync(outputPath, svgContent);
                console.log(`   ✅ Downloaded from jsDelivr: ${outputPath}`);
                return true;
            }
        }
    } catch (error) {
        console.log(`   ⚠️  jsDelivr not available: ${error.message}`);
    }

    // Try searching on official websites
    for (const searchTerm of searchTerms) {
        try {
            console.log(`   Searching web for: ${searchTerm}`);
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm + ' logo PNG download')}&tbm=isch`;
            await page.goto(searchUrl, { waitUntil: 'networkidle' });
            
            // Try to find and click on first image result
            const firstImage = await page.$('img[data-src], img[src*="http"]');
            if (firstImage) {
                const imageUrl = await firstImage.getAttribute('src') || await firstImage.getAttribute('data-src');
                if (imageUrl && imageUrl.startsWith('http')) {
                    console.log(`   Found image: ${imageUrl}`);
                    const outputPath = path.join(OUTPUT_DIR, `${iconName}.svg`);
                    
                    // Use image-to-svg script
                    try {
                        execSync(`node scripts/image-to-svg.js "${imageUrl}" "${outputPath}"`, { stdio: 'inherit' });
                        if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 100) {
                            console.log(`   ✅ Converted to SVG: ${outputPath}`);
                            return true;
                        }
                    } catch (error) {
                        console.log(`   ⚠️  Conversion failed: ${error.message}`);
                    }
                }
            }
        } catch (error) {
            console.log(`   ⚠️  Search failed: ${error.message}`);
        }
    }

    await browser.close();
    return false;
}

(async () => {
    console.log('🎯 Starting icon fetch process...\n');
    
    for (const icon of ICONS_TO_FETCH) {
        const iconPath = path.join(OUTPUT_DIR, `${icon.name}.svg`);
        const exists = fs.existsSync(iconPath);
        const size = exists ? fs.statSync(iconPath).size : 0;
        
        if (exists && size > 100) {
            console.log(`✅ ${icon.name}.svg already exists (${size} bytes)`);
            continue;
        }
        
        await findAndDownloadIcon(icon.name, icon.searchTerms);
    }
    
    console.log('\n✨ Icon fetch process complete!');
})();

