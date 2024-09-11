export default function ChannelTable({ channels }) {
    return (
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Channel Name</th>
            <th className="py-2">Subscribers</th>
            <th className="py-2">Total Views</th>
            <th className="py-2">Total Videos</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => (
            <tr key={channel.id} className="text-center">
              <td className="py-2">{channel.name}</td>
              <td className="py-2">{channel.subscribers}</td>
              <td className="py-2">{channel.views}</td>
              <td className="py-2">{channel.videos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  