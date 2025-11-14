#!/usr/bin/env node
const fs = require('fs/promises');
const axios = require('axios');
const { Potrace } = require('potrace');
const { optimize } = require('svgo');

/**
 * 🎭 The Image-to-SVG Alchemist - A Tool for Digital Transmutation
 *
 * "From pixels coarse, a vector's grace,
 * This script bestows a timeless face.
 * With algorithms sharp and logic keen,
 * A tiny, perfect SVG is seen."
 *
 * - The Digital Metaphor Maestro
 */
async function convertImageToTinySvg(imageUrl, outputPath) {
  try {
    console.log(`🌐 ✨ IMAGE QUEST AWAKENS! Fetching from: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');

    console.log('🎨 Tracing the artistic soul of the image...');
    const svg = await new Promise((resolve, reject) => {
      const trace = new Potrace();
      trace.loadImage(imageBuffer, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(trace.getSVG());
      });
    });
    
    console.log('✨ Performing enchanted alchemy to shrink the vector spell...');
    const result = optimize(svg, {
      multipass: true,
    });
    const optimizedSvg = result.data;

    await fs.writeFile(outputPath, optimizedSvg);
    console.log(`🎉 ✨ SVG MASTERPIECE COMPLETE! Saved to: ${outputPath}`);

  } catch (creativeChallenge) {
    console.error(`💥 😭 ALCHEMY TEMPORARILY HALTED!`);
    console.error(`🌩️ Temporary setback: ${creativeChallenge.message}`);
    console.log(`🎭 But the show must go on...`);
  }
}

// 🌟 The Grand Entrance - Where the magic begins
(async () => {
  const imageUrl = process.argv[2];
  const outputPath = process.argv[3];

  if (!imageUrl || !outputPath) {
    console.log('🌙 ⚠️ Gentle reminder: Please provide an image URL and an output path.');
    console.log('Usage: node scripts/image-to-svg.js <imageUrl> <outputPath>');
    process.exit(1);
  }

  await convertImageToTinySvg(imageUrl, outputPath);
})();
