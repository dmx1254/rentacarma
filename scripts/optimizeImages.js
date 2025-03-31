// scripts/optimizeImages.js
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function optimizeImages() {
  // Chemin pour vos images dans Components/images
  const inputDir = path.join(process.cwd(), 'Components/images');
  // Création d'un dossier optimized dans le même répertoire
  const outputDir = path.join(process.cwd(), 'Components/images/optimized');

  try {
    // Créer le dossier optimized s'il n'existe pas
    await fs.mkdir(outputDir, { recursive: true });
    const files = await fs.readdir(inputDir);

    for (const file of files) {
      // Ne traiter que les fichiers images
      if (file.match(/\.(jpg|jpeg|png|svg)$/i)) {
        await sharp(path.join(inputDir, file))
          .resize(1600, 900, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255 }
          })
          .webp({
            quality: 85,  // Bonne qualité
            effort: 6    // Maximum de compression
          })
          .toFile(path.join(outputDir, `${path.parse(file).name}.webp`));

        console.log(`✅ Image optimisée : ${file}`);
      }
    }
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

optimizeImages();