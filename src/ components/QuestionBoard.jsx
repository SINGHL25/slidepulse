// *** src/components/QuestionBoard.jsx ***
import React, { useEffect, useState } from 'react';
import { db, voteQuestion } from '../firebase';
import { ref, onValue } from 'firebase/database';

export default function QuestionBoard({ roomId, admin = false }) {
  const [questions, setQuestions] = useState([]);
  const qRef = ref(db, `rooms/${roomId}/questions`);

  useEffect(() => {
    onValue(qRef, (snap) => {
      const data = snap.val() || {};
      const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
      setQuestions(list.sort((a, b) => b.votes - a.votes));
    });
  }, [roomId]);

  return (
    <div className="space-y-2">
      {questions.map((q) => (
        <div key={q.id} className="border rounded p-2 flex justify-between items-center">
          <span>{q.text}</span>
          <button
            className="bg-gray-200 px-2 rounded"
            onClick={() => voteQuestion(roomId, q.id)}
          >
            👍 {q.votes}
          </button>
        </div>
      ))}
    </div>
  );
}

