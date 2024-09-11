import { useState } from 'react';
import ChannelCard from '../components/ChannelCards';
import ChannelTable from '../components/ChannelTable';

export default function Home() {
  const [channelData, setChannelData] = useState(null);
  const [similarChannels, setSimilarChannels] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const channelId = e.target.channelUrl.value;
    const response = await fetch(`/api/search-channel?channelId=${channelId}`);
    const data = await response.json();
    setChannelData(data);

    const similarResponse = await fetch(`/api/similar-channels`);
    const similarData = await similarResponse.json();
    setSimilarChannels(similarData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form onSubmit={handleSearch} className="w-full max-w-sm mb-6">
        <input
          type="text"
          name="channelUrl"
          placeholder="Enter Channel URL or Name"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Search
        </button>
      </form>

      {channelData && <ChannelCard channel={channelData} />}

      {similarChannels.length > 0 && (
        <div className="w-full max-w-4xl">
          <h2 className="text-xl mb-4">Similar Channels</h2>
          <ChannelTable channels={similarChannels} />
        </div>
      )}
    </div>
  );
}
