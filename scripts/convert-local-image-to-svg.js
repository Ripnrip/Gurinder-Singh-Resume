#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { Potrace } = require('potrace');
const { optimize } = require('svgo');

async function convertLocalImageToSvg(imagePath, outputPath) {
  try {
    console.log(`📸 Reading image from: ${imagePath}`);
    const imageBuffer = fs.readFileSync(imagePath);

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

    fs.writeFileSync(outputPath, optimizedSvg);
    console.log(`🎉 ✨ SVG MASTERPIECE COMPLETE! Saved to: ${outputPath}`);

  } catch (error) {
    console.error(`💥 😭 ALCHEMY TEMPORARILY HALTED!`);
    console.error(`🌩️ Temporary setback: ${error.message}`);
    console.log(`🎭 But the show must go on...`);
  }
}

const imagePath = process.argv[2];
const outputPath = process.argv[3];

if (!imagePath || !outputPath) {
  console.log('Usage: node scripts/convert-local-image-to-svg.js <imagePath> <outputPath>');
  process.exit(1);
}

convertLocalImageToSvg(imagePath, outputPath);

