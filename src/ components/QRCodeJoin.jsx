
/ *** src/components/QRCodeJoin.jsx ***
import React from 'react';
import QRCode from 'qrcode.react';

export default function QRCodeJoin({ roomId }) {
  const joinUrl = `${window.location.origin}/room/${roomId}`;
  return (
    <div className="flex flex-col items-center space-y-2">
      <QRCode value={joinUrl} size={128} />
      <p className="text-sm break-all">{joinUrl}</p>
    </div>
  );
}
