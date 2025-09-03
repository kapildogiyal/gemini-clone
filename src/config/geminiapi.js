import { GoogleGenAI } from '@google/genai';

async function runchat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyDmKbEpagNfDgTyuDRVa0eDcRXkHlsERuU',
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.0-flash-lite';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let finalText = '';

  for await (const chunk of response) {
    finalText += chunk.text || '';
  }

  return finalText;
}

export default runchat;
