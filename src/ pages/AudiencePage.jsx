// *** src/pages/AudiencePage.jsx ***
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, postQuestion } from '../firebase';
import { ref, onValue } from 'firebase/database';
import QuestionBoard from '../components/QuestionBoard';

export default function AudiencePage() {
  const { roomId } = useParams();
  const [roomTitle, setRoomTitle] = useState('');
  const [question, setQuestion] = useState('');
  const questionsRef = ref(db, `rooms/${roomId}/questions`);

  useEffect(() => {
    const roomRef = ref(db, `rooms/${roomId}`);
    onValue(roomRef, (snap) => setRoomTitle(snap.val()?.title ?? 'Event'));
  }, [roomId]);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold">{roomTitle}</h2>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded"
          onClick={() => {
            postQuestion(roomId, question);
            setQuestion('');
          }}
        >
          Send
        </button>
      </div>
      <QuestionBoard roomId={roomId} />
    </div>
  );
}

