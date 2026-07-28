
import React, { useEffect, useRef } from 'react';
import { ChatMessage as MessageType, LanguageCode } from './types';
import Message from './Message';
import ChatInput from './ChatInput';
import LoadingIndicator from './LoadingIndicator';

interface ChatWindowProps {
  messages: MessageType[];
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  isSpeaking: boolean;
  placeholder: string;
  language: LanguageCode;
  specialist: {
    name: string;
    title: string;
    avatars: { idle: string; talking: string; };
  };
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage, isLoading, isSpeaking, placeholder, language, specialist }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  const avatarSrc = isSpeaking ? specialist.avatars.talking : specialist.avatars.idle;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="relative">
            <img
              src={avatarSrc}
              alt="Specialist Avatar"
              className={`w-20 h-20 rounded-full object-cover shadow-2xl mb-3 ring-4 ring-slate-800 transition-all duration-300 ${
                isLoading ? 'animate-pulse-thinking' : 'animate-pulse-ring'
              }`}
            />
            <span className="absolute bottom-4 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-slate-900"></span>
          </div>
          <h2 className="text-xl font-bold text-gray-100">{specialist.name}</h2>
          <p className="text-sm text-slate-400">{specialist.title}</p>
        </div>

        <div className="space-y-4">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} specialistAvatar={specialist.avatars.idle} />
          ))}
          {isLoading && messages.length > 0 && messages[messages.length - 1]?.sender !== 'bot' && (
            <div className="flex justify-start">
              <LoadingIndicator specialistAvatar={specialist.avatars.idle} />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 bg-slate-900/70 backdrop-blur-sm border-t border-slate-700">
        <ChatInput 
          onSendMessage={onSendMessage} 
          isLoading={isLoading} 
          placeholder={placeholder}
          language={language}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
