import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const similarChannels = await prisma.channel.findMany({
      where: { tracking: false },
      take: 5,
    });

    res.status(200).json(similarChannels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch similar channels' });
  }
}
