const fs = require('fs');
const path = require('path');

const ICONS_TO_CREATE = [
    { name: 'openai', title: 'OpenAI', color: '#4129919' },
    { name: 'cohere', title: 'Cohere', color: '#FF6D3D' },
    { name: 'pinecone', title: 'Pinecone', color: '#663399' },
    { name: 'qdrant', title: 'Qdrant', color: '#FF6D00' },
    { name: 'weaviate', title: 'Weaviate', color: '#0080FF' },
    { name: 'stabilityai', title: 'Stability AI', color: '#000000' },
    { name: 'comfyui', title: 'ComfyUI', color: '#000000' }
];

const OUTPUT_DIR = path.join(__dirname, '..', 'Resume App Icon');

function createSimpleSVG(name, title, color) {
    // Create a simple circular icon with the first letter
    const initial = title.charAt(0).toUpperCase();
    return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>${title}</title>
  <circle cx="12" cy="12" r="10" fill="${color}"/>
  <text x="12" y="16" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">${initial}</text>
</svg>`;
}

ICONS_TO_CREATE.forEach(({ name, title, color }) => {
    const outputPath = path.join(OUTPUT_DIR, `${name}.svg`);
    const svg = createSimpleSVG(name, title, color);
    fs.writeFileSync(outputPath, svg);
    console.log(`✅ Created placeholder: ${outputPath}`);
});

console.log('\n✨ Placeholder icons created!');

