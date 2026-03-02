import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY || "AIzaSyA8gFxECUnBZjeLzv0DRWVPDUuBpGin4bo",
    }),
  ],
  model: 'googleai/gemini-2.5-flash',
});
