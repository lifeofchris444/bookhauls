import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/coach-logo.png');
const outputDir = path.join(__dirname, '../public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generateFavicons() {
  console.log('Generating favicons from Coach logo...');
  
  for (const { name, size } of sizes) {
    const padding = Math.floor(size * 0.1);
    const iconSize = size - (padding * 2);
    
    await sharp(inputPath)
      .resize(iconSize, iconSize, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, name));
    
    console.log(`Generated ${name} (${size}x${size})`);
  }
  
  // Generate ICO-compatible favicon.ico as a 32x32 PNG (browsers accept this)
  await sharp(inputPath)
    .resize(32, 32, { 
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toFile(path.join(outputDir, 'favicon.ico'));
  
  console.log('Generated favicon.ico');
  console.log('All favicons generated successfully!');
}

generateFavicons().catch(console.error);
