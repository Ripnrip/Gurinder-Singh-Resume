const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const PORT = 8080;
const OUTPUT_DIR = path.join(__dirname, '..', 'snapshot-tests');
const HTML_FILE = 'z-ai-resume-final.html';

async function verifyIcons() {
    console.log('🎯 Starting icon verification...\n');
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    try {
        const url = `http://localhost:${PORT}/${HTML_FILE}`;
        console.log(`📄 Navigating to: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle' });
        
        // Wait for icons to load
        console.log('⏳ Waiting for icons to load...');
        await page.waitForTimeout(3000);
        
        // Wait for all images to load
        await page.evaluate(() => {
            return Promise.all(
                Array.from(document.images).map(img => {
                    if (img.complete) return Promise.resolve();
                    return new Promise((resolve, reject) => {
                        img.onload = resolve;
                        img.onerror = resolve; // Continue even if some fail
                        setTimeout(resolve, 2000); // Timeout after 2s
                    });
                })
            );
        });

        // Find skills section
        console.log('🔍 Locating skills section...');
        const skillsSection = await page.$('.skills-container');
        
        if (!skillsSection) {
            console.error('❌ Skills section not found!');
            return;
        }

        // Take screenshot of skills section
        const skillsScreenshotPath = path.join(OUTPUT_DIR, 'z-ai-resume-final-skills-verification.png');
        await skillsSection.screenshot({ path: skillsScreenshotPath });
        console.log(`✅ Skills section screenshot saved: ${skillsScreenshotPath}`);

        // Take full page screenshot
        const fullPageScreenshotPath = path.join(OUTPUT_DIR, 'z-ai-resume-final-full-verification.png');
        await page.screenshot({ 
            path: fullPageScreenshotPath,
            fullPage: true 
        });
        console.log(`✅ Full page screenshot saved: ${fullPageScreenshotPath}`);

        // Count icons
        const iconStats = await page.evaluate(() => {
            const skillTags = document.querySelectorAll('.skill-tag');
            let withIcons = 0;
            let withFallbacks = 0;
            let missing = 0;
            const missingSkills = [];

            skillTags.forEach(tag => {
                const icon = tag.querySelector('.skill-icon');
                const fallback = tag.querySelector('.skill-fallback');
                
                if (icon && icon.complete && icon.naturalWidth > 0) {
                    withIcons++;
                } else if (fallback) {
                    withFallbacks++;
                } else {
                    missing++;
                    missingSkills.push(tag.textContent.trim());
                }
            });

            return { withIcons, withFallbacks, missing, missingSkills };
        });

        console.log('\n📊 Icon Statistics:');
        console.log(`   ✅ Icons loaded: ${iconStats.withIcons}`);
        console.log(`   🔄 Fallbacks used: ${iconStats.withFallbacks}`);
        console.log(`   ❌ Missing: ${iconStats.missing}`);
        
        if (iconStats.missingSkills.length > 0) {
            console.log('\n⚠️  Skills with missing icons:');
            iconStats.missingSkills.forEach(skill => console.log(`   - ${skill}`));
        }

        // Check for broken image sources
        const brokenImages = await page.evaluate(() => {
            const broken = [];
            document.querySelectorAll('.skill-icon').forEach(img => {
                if (img.complete && img.naturalWidth === 0) {
                    broken.push({
                        skill: img.alt,
                        src: img.src
                    });
                }
            });
            return broken;
        });

        if (brokenImages.length > 0) {
            console.log('\n⚠️  Broken image sources:');
            brokenImages.forEach(({ skill, src }) => {
                console.log(`   - ${skill}: ${src}`);
            });
        }

        console.log('\n✨ Verification complete!');

    } catch (error) {
        console.error('❌ Error during verification:', error);
    } finally {
        await browser.close();
    }
}

// Check if server is running
const http = require('http');
const checkServer = () => {
    return new Promise((resolve) => {
        const req = http.get(`http://localhost:${PORT}`, (res) => {
            resolve(true);
        });
        req.on('error', () => resolve(false));
        req.setTimeout(2000, () => {
            req.destroy();
            resolve(false);
        });
    });
};

(async () => {
    const serverRunning = await checkServer();
    if (!serverRunning) {
        console.error(`❌ Server is not running on port ${PORT}`);
        console.log('💡 Please run: npm run snapshot:serve');
        process.exit(1);
    }
    
    await verifyIcons();
})();

