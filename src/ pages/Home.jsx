// *** src/pages/Home.jsx ***
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRoom } from '../firebase';
import JoinRoom from '../components/JoinRoom';

export default function Home() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!title) return;
    const roomId = createRoom(title);
    navigate(`/admin/${roomId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">SlidePulse</h1>

      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md space-y-4">
        <input
          className="w-full border rounded p-2"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleCreate}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Event & Copy Admin Link
        </button>
        <hr />
        <JoinRoom />
      </div>
    </div>
  );
}
