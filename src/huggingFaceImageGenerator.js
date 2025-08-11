import fs from 'fs';
import { HfInference } from '@huggingface/inference';
import 'dotenv/config';

// const huggingFaceApiKey = process.env.HUGGING_FACE_API_KEY;

// async function generateAnimeImage(prompt, outputPath = 'output.png') { // Replace with your real Hugging Face API token
//   try {
//     const response = await fetch(
//       `https://api-inference.huggingface.co/models/hakurei/waifu-diffusion`,
//       {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${huggingFaceApiKey}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ inputs: prompt }),
//       }
//     );

//     if (!response.ok) {
//       const errText = await response.text();
//       throw new Error(`API Error (${response.status}): ${errText}`);
//     }

//     const buffer = Buffer.from(await response.arrayBuffer());
//     // fs.writeFileSync(outputPath, buffer);
//     console.log(`✅ Image saved as ${outputPath}`);
//   } catch (error) {
//     console.error('❌ Error generating image:', error);
//   }
// }

// generateAnimeImage("superman in anime style", 'superman_anime.png')
const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

async function generateAnimeImage(prompt, model = 'black-forest-labs/FLUX.1-dev', outputPath = 'output.png') {
  try {
    // Get the image as a Blob
    const imageBlob = await hf.textToImage({ model, inputs: prompt });

    // Convert Blob to Buffer
    const arrayBuffer = await imageBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(outputPath, buffer);
    console.log(`Image saved to ${outputPath}`);
  } catch (error) {
    console.error('Error generating image:', error.message);
  }
}

generateAnimeImage('a futuristic anime cityscape at night');