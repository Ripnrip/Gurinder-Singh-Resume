const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const PORT = 8080;
const OUTPUT_DIR = path.join(__dirname, '..', 'snapshot-tests');

async function testIconColors() {
    console.log('🎨 Testing icons in all color permutations...\n');
    
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();

    try {
        const url = `http://localhost:${PORT}/icon-comparison.html`;
        console.log(`📄 Navigating to: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle' });
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

        // Take screenshot
        const screenshotPath = path.join(OUTPUT_DIR, 'icon-comparison-with-colors.png');
        await page.screenshot({ 
            path: screenshotPath,
            fullPage: true 
        });
        console.log(`✅ Screenshot saved: ${screenshotPath}`);

        // Check for broken icons in color permutations
        const brokenIcons = await page.evaluate(() => {
            const broken = [];
            document.querySelectorAll('.color-test-icon img').forEach(img => {
                if (img.complete && img.naturalWidth === 0) {
                    const card = img.closest('.comparison-card');
                    const skillName = card?.querySelector('.skill-name')?.textContent;
                    if (skillName) {
                        broken.push(skillName);
                    }
                }
            });
            return broken;
        });

        if (brokenIcons.length > 0) {
            console.log('\n⚠️  Icons with issues in color permutations:');
            brokenIcons.forEach(skill => console.log(`   - ${skill}`));
        } else {
            console.log('\n✅ All icons display correctly in all color permutations!');
        }

        console.log('\n✨ Color permutation test complete!');

    } catch (error) {
        console.error('❌ Error during color test:', error);
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
    
    await testIconColors();
})();

