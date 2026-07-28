'use client';

import React, { useState } from 'react';
import App from './App';
import WidgetToggle from './WidgetToggle';

const GuardianAIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    // Останавливаем речь при закрытии чата
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-[120px] right-5 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="w-[400px] h-[350px] max-h-[50vh] max-w-[90vw] mb-4 fade-in-up"
        >
          <App onClose={handleClose} />
        </div>
      )}

      {/* Toggle Button */}
      <div className="flex justify-end">
        <WidgetToggle onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default GuardianAIChatWidget;
