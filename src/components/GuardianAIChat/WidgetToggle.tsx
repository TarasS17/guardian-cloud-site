
import React from 'react';
import { ChatBubbleIcon, CloseIcon } from './Icons';

interface WidgetToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

const WidgetToggle: React.FC<WidgetToggleProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatBubbleIcon className="w-8 h-8" />}
    </button>
  );
};

export default WidgetToggle;
