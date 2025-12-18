#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Missing skills that need icons
const missingSkills = [
    'Agile/Scrum',
    'CI/CD',
    'Claude CLI',
    'Cursor',
    'Datadog',
    'ElevenLabs',
    'Fastlane',
    'Git',
    'GitHub Actions',
    'Jira',
    'Kilo Code',
    'LMStudio',
    'Manus Platform',
    'Multi-cloud',
    'OpenRouter',
    'Replicate',
    'RunPod',
    'Sketch',
    'Snapshot Testing',
    'TDD',
    'UI Testing',
    'Vector Databases',
    'Vertex AI',
    'XCode'
];

// Map of skills to their likely logo sources
const skillLogoMap = {
    'Datadog': 'https://www.datadoghq.com/favicon.ico',
    'Fastlane': 'https://fastlane.tools/favicon.ico',
    'Jira': 'https://www.atlassian.com/favicon.ico',
    'Sketch': 'https://www.sketch.com/favicon.ico',
    'OpenRouter': 'https://openrouter.ai/favicon.ico',
    'ElevenLabs': 'https://www.elevenlabs.io/favicon.ico',
    'Git': 'https://git-scm.com/favicon.ico',
    'GitHub Actions': 'https://github.com/favicon.ico',
    'XCode': 'https://developer.apple.com/favicon.ico',
    'Vertex AI': 'https://cloud.google.com/favicon.ico',
    'Cursor': 'https://cursor.sh/favicon.ico',
    'Replicate': 'https://replicate.com/favicon.ico',
    'RunPod': 'https://www.runpod.io/favicon.ico',
    'LMStudio': 'https://lmstudio.ai/favicon.ico',
    'Kilo Code': 'https://kilocode.ai/favicon.ico',
    'Claude CLI': 'https://claude.ai/favicon.ico',
    'Manus Platform': 'https://manus.ai/favicon.ico'
};

const iconDir = path.join(__dirname, '..', 'Resume App Icon');

async function downloadAndConvert(skillName, imageUrl) {
    const safeName = skillName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const outputPath = path.join(iconDir, `${safeName}.svg`);
    
    console.log(`\n🔄 Processing: ${skillName}`);
    console.log(`   URL: ${imageUrl}`);
    console.log(`   Output: ${outputPath}`);
    
    try {
        // Download and convert using image-to-svg.js
        execSync(`node scripts/image-to-svg.js "${imageUrl}" "${outputPath}"`, {
            stdio: 'inherit',
            cwd: path.join(__dirname, '..')
        });
        
        // Verify file was created
        if (fs.existsSync(outputPath)) {
            const stats = fs.statSync(outputPath);
            if (stats.size > 0) {
                console.log(`   ✅ Success! File size: ${stats.size} bytes`);
                return true;
            } else {
                console.log(`   ⚠️  File created but empty`);
                return false;
            }
        } else {
            console.log(`   ❌ File not created`);
            return false;
        }
    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
        return false;
    }
}

async function main() {
    console.log('🎨 Finding and converting icons for all missing skills...\n');
    console.log(`Total missing skills: ${missingSkills.length}\n`);
    
    const results = [];
    
    for (const skill of missingSkills) {
        const imageUrl = skillLogoMap[skill];
        if (imageUrl) {
            const success = await downloadAndConvert(skill, imageUrl);
            results.push({ skill, success, url: imageUrl });
        } else {
            console.log(`\n⚠️  No URL mapped for: ${skill}`);
            results.push({ skill, success: false, url: null });
        }
    }
    
    console.log('\n\n📊 Summary:');
    console.log('='.repeat(50));
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    console.log(`✅ Successful: ${successful}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`\nFailed skills:`);
    results.filter(r => !r.success).forEach(r => {
        console.log(`  - ${r.skill}${r.url ? ` (${r.url})` : ' (no URL mapped)'}`);
    });
}

main().catch(console.error);

