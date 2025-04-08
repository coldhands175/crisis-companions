import OpenAI from 'openai';

// Initialize the OpenAI client with your API key
// In production, this would be an environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
