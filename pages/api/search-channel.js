import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { channelId } = req.query;
  const apiKey = process.env.YOUTUBE_API_KEY;

  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`YouTube API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return res.status(404).json({ error: 'Channel not found' });
    }

    const channelData = {
      youtubeId: data.items[0].id,
      name: data.items[0].snippet.title,
      profilePicture: data.items[0].snippet.thumbnails.default.url,
      subscribers: parseInt(data.items[0].statistics.subscriberCount),
      views: parseInt(data.items[0].statistics.viewCount),
      videos: parseInt(data.items[0].statistics.videoCount),
    };

    res.status(200).json(channelData);
  } catch (error) {
    console.error('Error fetching channel data:', error);
    res.status(500).json({ error: 'Failed to fetch channel data' });
  }
}
