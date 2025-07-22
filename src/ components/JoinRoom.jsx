// *** src/components/JoinRoom.jsx ***
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinRoom() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      <input
        className="w-full border rounded p-2"
        placeholder="Enter room code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={() => navigate(`/room/${code}`)}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Join Event
      </button>
    </div>
  );
}
