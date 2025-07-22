// *** src/App.jsx ***
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AudiencePage from './pages/AudiencePage';
import AdminDashboard from './pages/AdminDashboard';
import { anonymousSignIn } from './firebase';

export default function App() {
  useEffect(() => {
    anonymousSignIn();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<AudiencePage />} />
      <Route path="/admin/:roomId" element={<AdminDashboard />} />
    </Routes>
  );
}
