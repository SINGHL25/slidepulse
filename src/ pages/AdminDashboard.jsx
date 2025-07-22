// *** src/pages/AdminDashboard.jsx ***
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, createPoll } from '../firebase';
import { ref, onValue } from 'firebase/database';
import QRCodeJoin from '../components/QRCodeJoin';
import QuestionBoard from '../components/QuestionBoard';

export default function AdminDashboard() {
  const { roomId } = useParams();
  const [roomTitle, setRoomTitle] = useState('');
  const [pollQ, setPollQ] = useState('');
  const [options, setOptions] = useState(''); // comma separated

  useEffect(() => {
    const roomRef = ref(db, `rooms/${roomId}`);
    onValue(roomRef, (snap) => setRoomTitle(snap.val()?.title ?? 'Event'));
  }, [roomId]);

  const handleCreatePoll = () => {
    if (!pollQ || !options) return;
    const opts = options.split(',').map((o) => o.trim());
    createPoll(roomId, pollQ, opts);
    setPollQ('');
    setOptions('');
  };

  return (
    <div className="p-4 space-y-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Admin – {roomTitle}</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex‑1 space-y-4">
          <h3 className="font-semibold">Create Poll</h3>
          <input
            className="w-full border rounded p-2"
            placeholder="Poll question"
            value={pollQ}
            onChange={(e) => setPollQ(e.target.value)}
          />
          <input
            className="w-full border rounded p-2"
            placeholder="Options (comma separated)"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          />
          <button
            onClick={handleCreatePoll}
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Create Poll
          </button>
        </div>

        <QRCodeJoin roomId={roomId} />
      </div>

      <hr />
      <h3 className="font-semibold mt-4">Live Questions</h3>
      <QuestionBoard roomId={roomId} admin />
    </div>
  );
}

