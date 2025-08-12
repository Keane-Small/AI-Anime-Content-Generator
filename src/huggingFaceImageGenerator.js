import fs from 'fs';
import { textToImage  } from '@huggingface/inference';
import 'dotenv/config';

const huggingFaceApiKey = process.env.HUGGING_FACE_API_KEY;

async function generateAnimeImage(prompt, model = 'black-forest-labs/FLUX.1-dev', outputPath = 'goku.png') {
  try {
    // Get the image as a Blob
    const imageBlob = await textToImage({ model, inputs: prompt, accessToken: huggingFaceApiKey });

    // Convert Blob to Buffer
    const arrayBuffer = await imageBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);
    console.log(`Image saved to ${outputPath}`);
  } catch (error) {
    console.error('Error generating image:', error.message);
  }
}

module.exports = { generateAnimeImage };

