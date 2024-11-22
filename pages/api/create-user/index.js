// pages/api/create-user/index.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        // Prisma automatically generates the UUID for 'id'
        redacted_situation_explained: '',
        qa: '',
        letter_generated: '',
      },
    });

    res.status(200).json({ userId: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
