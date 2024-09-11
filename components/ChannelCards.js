export default function ChannelCard({ channel }) {
    return (
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-sm mb-6">
        <img src={channel.profilePicture} alt="Profile" className="rounded-full mb-2" />
        <h2 className="text-lg font-bold">{channel.name}</h2>
        <p>Subscribers: {channel.subscribers}</p>
        <p>Total Views: {channel.views}</p>
        <p>Number of Videos: {channel.videos}</p>
      </div>
    );
  }
  