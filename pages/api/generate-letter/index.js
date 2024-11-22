// pages/api/generate-letter.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userText } = req.body;

  // Basic validation
  if (!userText || typeof userText !== 'string') {
    return res.status(400).json({ message: 'Invalid or missing "userText" in request body.' });
  }

  try {
    // Construct the Azure OpenAI API URL
    const url = `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}/chat/completions?api-version=${process.env.AZURE_OPENAI_API_VERSION}`;

    // Prepare the messages payload
    const messages = [
      {
        role: 'system',
        content: 'You are an AI assistant that helps people by generating formal letters based on user input.',
      },
      {
        role: 'user',
        content: userText,
      },
    ];

    // Set the parameters as per your requirements
    const payload = {
      messages: messages,
      temperature: 0.7,
      top_p: 0.95,
      max_tokens: 800,
    };

    // Make the POST request to Azure OpenAI
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.AZURE_OPENAI_API_KEY,
      },
    });

    // Extract the generated letter from the response
    const assistantMessage = response.data.choices[0].message.content.trim();

    // Return the generated letter to the client
    res.status(200).json({ letter: assistantMessage });
  } catch (error) {
    console.error('Error communicating with Azure OpenAI:', error.response ? error.response.data : error.message);

    // Determine the error message
    const errorMessage =
      error.response && error.response.data ? error.response.data : { message: 'Internal Server Error' };

    res.status(500).json(errorMessage);
  }
}
