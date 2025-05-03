// pages/settings.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Settings() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('/api/user/profile');
      const data = await res.json();
      setUsername(data.username);
      setEmail(data.email);
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email }),
    });

    if (res.ok) {
      router.push('/profile');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-72 space-y-4">
        <label className="font-bold text-gray-800">USERNAME</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-500 text-gray-800"
        />

        <label className="font-bold text-gray-800">EMAIL</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-500 text-gray-800"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
