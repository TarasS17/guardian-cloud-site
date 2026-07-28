
import React from 'react';
import { ChatMessage } from './types';
import { UserIcon } from './Icons';

interface MessageProps {
  message: ChatMessage;
  specialistAvatar: string;
}

const BotAvatar: React.FC<{src: string}> = ({ src }) => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full shadow-lg">
    <img src={src} alt="Bot Avatar" className="w-full h-full rounded-full object-cover" />
  </div>
);

const UserAvatar: React.FC = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shadow-lg">
    <UserIcon className="w-5 h-5 text-gray-300" />
  </div>
);

const Message: React.FC<MessageProps> = ({ message, specialistAvatar }) => {
  const isUser = message.sender === 'user';
  const isError = message.isError;

  if (message.sender === 'bot' && !message.text.trim()) {
    return null;
  }

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <BotAvatar src={specialistAvatar} />}
      <div
        className={`max-w-sm md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md break-words ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : isError
            ? 'bg-red-500/20 text-red-300 border border-red-500/50 rounded-bl-none'
            : 'bg-slate-700 text-gray-200 rounded-bl-none'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
      {isUser && <UserAvatar />}
    </div>
  );
};

export default Message;
