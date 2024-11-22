// pages/api/submit-qa/index.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId, qaData } = req.body;

  if (!userId || !qaData) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Assuming qaData is an array of objects: [{ question: '...', answer: '...' }, ...]
  try {
    // Convert qaData to a JSON string or any format you prefer
    const qaString = JSON.stringify(qaData);

    // Update the user's qa field
    await prisma.user.update({
      where: { id: userId },
      data: { qa: qaString },
    });

    res.status(200).json({ message: 'Q&A data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
