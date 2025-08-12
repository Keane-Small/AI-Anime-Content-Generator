import 'dotenv/config';

import { GoogleGenAI } from "@google/genai";

const geminiApi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateTextResponse() {
  const response = await geminiApi.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

module.exports = { generateTextResponse };
