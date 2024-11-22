// pages/api/submit-userresponse/index.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId, redacted_situation_explained_text } = req.body;

  if (!userId || !redacted_situation_explained_text) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Update the user's redacted_situation_explained field
    await prisma.user.update({
      where: { id: userId },
      data: { redacted_situation_explained: redacted_situation_explained_text },
    });

    // Retrieve all questions from ContentChecklist
    const questions = await prisma.contentChecklist.findMany({
      select: { question: true },
    });

    const questionList = questions.map((q) => q.question);

    res.status(200).json({ questions: questionList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
