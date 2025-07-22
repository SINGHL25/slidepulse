
// *** src/components/PollView.jsx ***
import React, { useEffect, useState } from 'react';
import { db, votePoll } from '../firebase';
import { ref, onValue } from 'firebase/database';

export default function PollView({ roomId }) {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const pRef = ref(db, `rooms/${roomId}/polls`);
    onValue(pRef, (snap) => {
      const data = snap.val() || {};
      const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
      setPolls(list);
    });
  }, [roomId]);

  return (
    <div className="space-y-6 mt-6">
      {polls.map((poll) => (
        <div key={poll.id} className="border rounded p-4">
          <h3 className="font-semibold mb-2">{poll.question}</h3>
          <div className="space-y-2">
            {Object.entries(poll.options).map(([opt, count]) => (
              <button
                key={opt}
                className="w-full bg-gray-100 rounded p-2 flex justify-between"
                onClick={() => votePoll(roomId, poll.id, opt)}
              >
                <span>{opt}</span>
                <span>{count}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
