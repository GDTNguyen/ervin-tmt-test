import { useState, useEffect } from 'react';

export default function ChannelVideos({ channelId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`/api/channel-videos?channelId=${channelId}`);
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Channel Videos</h1>
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.videoId} className="bg-white p-4 rounded shadow">
            <img src={video.thumbnail} alt={video.title} className="mb-2" />
            <h3 className="font-semibold">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { channelId: params.channelId } };
}
