import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPlus, FaChartBar, FaCalendarAlt, FaCog } from 'react-icons/fa';

const socialPlatforms = [
  { name: 'Facebook', icon: <FaFacebookF />, color: 'bg-blue-600' },
  { name: 'Twitter', icon: <FaTwitter />, color: 'bg-blue-400' },
  { name: 'Instagram', icon: <FaInstagram />, color: 'bg-pink-500' },
  { name: 'LinkedIn', icon: <FaLinkedinIn />, color: 'bg-blue-700' },
];

const dummyPosts = [
  { id: 1, content: 'Exciting news! We\'re launching a new product next week. Stay tuned! #NewProduct #ComingSoon', platform: 'Twitter', scheduled: '2023-06-15 10:00 AM' },
  { id: 2, content: 'Check out our latest blog post on "10 Tips for Effective Social Media Marketing" [Link in bio]', platform: 'Instagram', scheduled: '2023-06-16 2:00 PM' },
  { id: 3, content: 'We\'re hiring! Join our dynamic team and help shape the future of digital marketing. Apply now: [Job Link]', platform: 'LinkedIn', scheduled: '2023-06-17 11:00 AM' },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [posts, setPosts] = useState(dummyPosts);
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingPlatform, setConnectingPlatform] = useState('');

  useEffect(() => {
    // Load connected accounts from localStorage
    const savedAccounts = localStorage.getItem('connectedAccounts');
    if (savedAccounts) {
      setConnectedAccounts(JSON.parse(savedAccounts));
    }
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostContent && selectedPlatform) {
      const newPost = {
        id: posts.length + 1,
        content: newPostContent,
        platform: selectedPlatform,
        scheduled: new Date().toLocaleString(),
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
      setSelectedPlatform('');

      // Simulate posting to the selected platform
      alert(`Post submitted to ${selectedPlatform}!`);
    }
  };

  const handleConnect = (platform) => {
    setIsConnecting(true);
    setConnectingPlatform(platform);

    // Simulate API call to connect to the platform
    setTimeout(() => {
      setConnectedAccounts([...connectedAccounts, platform]);
      setIsConnecting(false);
      setConnectingPlatform('');

      // Save connected accounts to localStorage
      localStorage.setItem('connectedAccounts', JSON.stringify([...connectedAccounts, platform]));

      alert(`Connected to ${platform} successfully!`);
    }, 2000);
  };

  const handleDisconnect = (platform) => {
    const updatedAccounts = connectedAccounts.filter(account => account !== platform);
    setConnectedAccounts(updatedAccounts);

    // Save updated connected accounts to localStorage
    localStorage.setItem('connectedAccounts', JSON.stringify(updatedAccounts));

    alert(`Disconnected from ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#008080] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SocialMediaManager</h1>
          <div className="space-x-4">
            <button className="hover:text-gray-300">Dashboard</button>
            <button className="hover:text-gray-300">Analytics</button>
            <button className="hover:text-gray-300">Settings</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
              <form onSubmit={handlePostSubmit}>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                  rows={4}
                  placeholder="What's on your mind?"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                ></textarea>
                <div className="flex justify-between items-center">
                  <div className="space-x-2">
                    {socialPlatforms.map((platform) => (
                      <button
                        key={platform.name}
                        type="button"
                        className={`${platform.color} text-white p-2 rounded-full ${selectedPlatform === platform.name ? 'ring-2 ring-offset-2 ring-[#008080]' : ''} ${connectedAccounts.includes(platform.name) ? '' : 'opacity-50 cursor-not-allowed'}`}
                        onClick={() => setSelectedPlatform(platform.name)}
                        disabled={!connectedAccounts.includes(platform.name)}
                      >
                        {platform.icon}
                      </button>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300"
                    disabled={!selectedPlatform || !newPostContent}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Scheduled Posts</h2>
              {posts.map((post) => (
                <div key={post.id} className="border-b border-gray-200 py-4 last:border-b-0">
                  <p className="mb-2">{post.content}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.platform}</span>
                    <span>{post.scheduled}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaPlus className="mr-2" /> New Post
                </button>
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaChartBar className="mr-2" /> View Analytics
                </button>
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaCalendarAlt className="mr-2" /> Schedule Post
                </button>
                <button className="w-full bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#006666] transition duration-300 flex items-center justify-center">
                  <FaCog className="mr-2" /> Settings
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>
              <ul className="space-y-2">
                {socialPlatforms.map((platform) => (
                  <li key={platform.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`${platform.color} p-2 rounded-full text-white mr-2`}>
                        {platform.icon}
                      </span>
                      <span>{platform.name}</span>
                    </div>
                    {connectedAccounts.includes(platform.name) ? (
                      <button
                        onClick={() => handleDisconnect(platform.name)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Disconnect
                      </button>
                    ) : (
                      <button
                        onClick={() => handleConnect(platform.name)}
                        className="text-[#008080] text-sm hover:underline"
                        disabled={isConnecting}
                      >
                        {isConnecting && connectingPlatform === platform.name ? 'Connecting...' : 'Connect'}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
