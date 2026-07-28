
import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, MicrophoneIcon } from './Icons';
import { LanguageCode } from './types';
import { langCodeMap } from './i18n';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  placeholder: string;
  language: LanguageCode;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, placeholder, language }) => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported by this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    
    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setText(finalTranscript + interimTranscript);
    };

    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = langCodeMap[language] || 'en-US';
    }
  }, [language]);

  const handleToggleListening = () => {
    if (isLoading) return;
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
    setIsListening(!isListening);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        disabled={isLoading}
        className="flex-1 w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50"
        aria-label="Chat input"
      />
      <button
        type="button"
        onClick={handleToggleListening}
        disabled={isLoading || !recognitionRef.current}
        className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center transition-all duration-300 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed ${
          isListening ? 'bg-red-600 animate-pulse-mic' : ''
        }`}
        aria-label="Record voice message"
      >
        <MicrophoneIcon className="w-5 h-5" />
      </button>
      <button
        type="submit"
        disabled={isLoading || !text.trim()}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:bg-slate-600 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        <SendIcon className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ChatInput;
